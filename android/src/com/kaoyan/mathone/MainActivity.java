package com.kaoyan.mathone;

import android.app.Activity;
import android.app.Dialog;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.AssetFileDescriptor;
import android.database.Cursor;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Build;
import android.os.Message;
import android.provider.OpenableColumns;
import android.util.AtomicFile;
import android.util.Log;
import android.view.View;
import android.view.WindowInsetsController;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebResourceError;
import android.webkit.SslErrorHandler;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import org.json.JSONObject;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.HttpsURLConnection;
import java.net.URL;

public final class MainActivity extends Activity {
    private static final String HOST = "appassets.androidplatform.net";
    private static final String ORIGIN = "https://" + HOST;
    private static final int PICK_JSON = 1001, PICK_PDF = 1002, SAVE_JSON = 1003, PICK_BACKUP = 1004;
    // 默认同步服务：构建时由 android/prepare.mjs 从 sync-config.json 注入，仅此一处配置。
    public static String DEFAULT_SYNC_URL = "https://app-2uzt75.v2.appdeploy.ai/";
    private final Object dataLock = new Object();
    private final Object networkLock = new Object();
    private WebView webView;
    private Button modeButton;
    private Dialog popupDialog;
    private WebView popupWebView;
    private boolean cloudMode;
    private final ThreadPoolExecutor syncExecutor = new ThreadPoolExecutor(2, 2, 0L, TimeUnit.MILLISECONDS, new ArrayBlockingQueue<>(16));
    private final Map<String, Future<?>> syncJobs = new ConcurrentHashMap<>();
    private final Map<String, HttpsURLConnection> syncConnections = new ConcurrentHashMap<>();
    private AtomicFile stateFile;
    private JSONObject content;
    private SharedPreferences documents;
    private SharedPreferences syncPrefs;
    private ValueCallback<Uri[]> fileCallback;
    private String selectedPdfKey;
    private String pendingBackup;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        if (state != null) selectedPdfKey = state.getString("selectedPdfKey");
        stateFile = new AtomicFile(new File(getFilesDir(), "db.json"));
        documents = getSharedPreferences("documents", MODE_PRIVATE);
        syncPrefs = getSharedPreferences("sync", MODE_PRIVATE);
        try {
            // 构建时由 android/prepare.mjs 放入 assets；同步服务地址只需改 android/sync-config.json
            JSONObject cfg = new JSONObject(readText(getAssets().open("sync-config.json")));
            String configured = cfg.optString("serviceUrl", "");
            if (configured.startsWith("https://")) DEFAULT_SYNC_URL = configured;
        } catch (Exception ignored) { }
        try {
            content = new JSONObject(readText(getAssets().open("content.json")));
        } catch (Exception e) {
            TextView error = new TextView(this);
            error.setText("无法读取内置课程，请重新安装应用。");
            setContentView(error);
            return;
        }
        getWindow().setStatusBarColor(Color.rgb(21, 27, 46));
        getWindow().setNavigationBarColor(Color.rgb(21, 27, 46));
        View decor = getWindow().getDecorView();
        decor.setSystemUiVisibility(decor.getSystemUiVisibility() & ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR & ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
        if (Build.VERSION.SDK_INT >= 30 && getWindow().getInsetsController() != null) {
            getWindow().getInsetsController().setSystemBarsAppearance(0,
                    WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS);
        }
        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setSupportMultipleWindows(true);
        webView.addJavascriptInterface(new Platform(), "AndroidPlatform");
        webView.setWebViewClient(new LocalClient());
        webView.setWebChromeClient(new Chrome());
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(21, 27, 46));
        root.addView(webView, new FrameLayout.LayoutParams(-1, -1));
        modeButton = new Button(this);
        modeButton.setText("云端");
        FrameLayout.LayoutParams cloudParams = new FrameLayout.LayoutParams(-2, -2, android.view.Gravity.TOP | android.view.Gravity.END);
        root.addView(modeButton, cloudParams);
        modeButton.setOnClickListener(v -> {
            if (cloudMode) openLocal();
            else openCloud();
        });
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            v.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(),
                    insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            return insets;
        });
        setContentView(root);
        if (!openCloud()) openLocal();
    }

    private static String readText(InputStream stream) throws IOException {
        try (InputStream in = stream; ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            byte[] buffer = new byte[8192];
            for (int n; (n = in.read(buffer)) != -1;) {
                if (out.size() + n > 64 * 1024 * 1024) throw new IOException("文件过大");
                out.write(buffer, 0, n);
            }
            return out.toString("UTF-8");
        }
    }

    private String cloudUrl() {
        try {
            URL configured = new URL(syncPrefs.getString("url", DEFAULT_SYNC_URL));
            if (!"https".equals(configured.getProtocol()) || configured.getHost().isEmpty() || configured.getUserInfo() != null)
                throw new IllegalArgumentException("invalid cloud origin");
            return new URL("https", configured.getHost(), configured.getPort(), "/").toString();
        } catch (Exception e) { return ""; }
    }

    private boolean isCloudUrl(String value) {
        try { URL current = new URL(value); URL cloud = new URL(cloudUrl()); return cloudUrl().length() > 0 && "https".equals(current.getProtocol()) && current.getHost().equals(cloud.getHost()) && current.getPort() == cloud.getPort(); }
        catch (Exception e) { return false; }
    }

    private boolean isLocalUrl(String value) { return value != null && ((ORIGIN + "/").equals(value) || value.startsWith(ORIGIN + "/")); }

    private void openLocal() {
        cloudMode = false;
        updateModeButton();
        if (webView != null) { webView.addJavascriptInterface(new Platform(), "AndroidPlatform"); webView.loadUrl(ORIGIN + "/"); }
    }

    private void updateModeButton() {
        if (modeButton != null) modeButton.setText(cloudMode ? "本机" : "云端");
    }

    private boolean openCloud() {
        String target = cloudUrl();
        if (target.isEmpty() || webView == null) {
            cloudMode = false;
            updateModeButton();
            message("云端地址无效，已保留本机学习入口");
            return false;
        }
        cloudMode = true;
        updateModeButton();
        webView.removeJavascriptInterface("AndroidPlatform");
        webView.loadUrl(target);
        return true;
    }

    private JSONObject defaultState() throws Exception {
        JSONObject db = new JSONObject("{\"version\":1,\"settings\":{\"nickname\":\"研友\",\"examDate\":\"2026-12-19\",\"dailyTargetMinutes\":180},\"lessonStatus\":{},\"syllabusMastery\":{},\"problems\":{},\"mistakes\":[],\"logs\":{},\"exams\":{},\"plan\":null,\"practice\":{},\"mockAttempts\":{},\"mockResults\":[],\"pomodoro\":{\"running\":null}}");
        db.put("createdAt", Instant.now().toString());
        return db;
    }

    private JSONObject readState() throws Exception {
        try { return new JSONObject(readText(stateFile.openRead())); }
        catch (FileNotFoundException e) { return defaultState(); }
    }

    private void writeState(String body) throws Exception {
        if (body.length() > 64 * 1024 * 1024) throw new IOException("数据过大");
        new JSONObject(body);
        FileOutputStream stream = null;
        try {
            stream = stateFile.startWrite();
            stream.write(body.getBytes(StandardCharsets.UTF_8));
            stateFile.finishWrite(stream);
        } catch (Exception e) {
            if (stream != null) stateFile.failWrite(stream);
            throw e;
        }
    }

    private final class Platform {
        @JavascriptInterface public String request(String method, String path, String body) {
            synchronized (dataLock) {
                try {
                    JSONObject result;
                    if ("GET".equals(method) && "/api/bootstrap".equals(path)) {
                        result = new JSONObject().put("db", readState()).put("content", content);
                    } else if ("GET".equals(method) && "/api/state".equals(path)) {
                        result = readState();
                    } else if ("PUT".equals(method) && "/api/state".equals(path)) {
                        writeState(body);
                        result = new JSONObject().put("ok", true);
                    } else {
                        return new JSONObject().put("status", 404).put("body", "{}").toString();
                    }
                    return new JSONObject().put("status", 200).put("body", result.toString()).toString();
                } catch (Exception e) {
                    try { return new JSONObject().put("status", 500).put("body", new JSONObject().put("error", "本地数据读取或保存失败").toString()).toString(); }
                    catch (Exception ignored) { return "{\"status\":500,\"body\":\"{}\"}"; }
                }
            }
        }

        @JavascriptInterface public void choosePdf(String key) {
            if (!validPdfKey(key)) return;
            runOnUiThread(() -> {
                selectedPdfKey = key;
                Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("*/*");
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
                try { startActivityForResult(intent, PICK_PDF); }
                catch (ActivityNotFoundException e) { message("没有可用的文件选择器"); }
            });
        }

        @JavascriptInterface public void chooseBackup() {
            runOnUiThread(() -> {
                Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("*/*");
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                try { startActivityForResult(intent, PICK_BACKUP); }
                catch (ActivityNotFoundException e) { message("没有可用的文件选择器"); }
            });
        }

        @JavascriptInterface public void exportBackup(String json, String filename) {
            runOnUiThread(() -> {
                pendingBackup = json;
                Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("application/json");
                intent.putExtra(Intent.EXTRA_TITLE, filename.matches("kaoyan-math1-backup-[0-9-]+\\.json") ? filename : "kaoyan-math1-backup.json");
                try { startActivityForResult(intent, SAVE_JSON); }
                catch (ActivityNotFoundException e) { pendingBackup = null; message("没有可用的文件保存器"); }
            });
        }

        /* ---------- 账号与同步：HTTPS 请求经 Java 执行，令牌保存在应用私有存储 ---------- */

        @JavascriptInterface public String syncUrl() {
            return syncPrefs.getString("url", DEFAULT_SYNC_URL);
        }

        @JavascriptInterface public boolean setSyncUrl(String url) {
            if (url == null || !url.startsWith("https://") || url.length() > 300) return false;
            synchronized (networkLock) {
                syncPrefs.edit().putString("url", url.replaceAll("/+$", "")).remove("token").remove("email").apply();
            }
            return true;
        }

        @JavascriptInterface public boolean openCloud() {
            if (cloudUrl().isEmpty()) return false;
            runOnUiThread(() -> MainActivity.this.openCloud());
            return true;
        }

        @JavascriptInterface public void openLocal() { runOnUiThread(MainActivity.this::openLocal); }

        @JavascriptInterface public void cancelSyncRequest(String requestId) {
            Future<?> job = syncJobs.remove(requestId);
            if (job != null) job.cancel(true);
            HttpsURLConnection connection = syncConnections.remove(requestId);
            if (connection != null) connection.disconnect();
        }

        @JavascriptInterface public void syncRequestAsync(String requestId, String method, String path, String body) {
            if (requestId == null || !requestId.matches("[A-Za-z0-9_-]{1,80}")) return;
            try {
                FutureTask<Void> job = new FutureTask<>(() -> {
                    try {
                        String raw = performSyncRequest(method, path, body, requestId);
                        String script = "window.__kaoyanSyncComplete&&window.__kaoyanSyncComplete(" + JSONObject.quote(requestId) + "," + JSONObject.quote(raw) + ")";
                        runOnUiThread(() -> { if (!isFinishing() && !isDestroyed() && webView != null && isLocalUrl(webView.getUrl())) webView.evaluateJavascript(script, null); });
                    } finally { syncJobs.remove(requestId); syncConnections.remove(requestId); }
                    return null;
                });
                syncJobs.put(requestId, job);
                syncExecutor.execute(job);
            } catch (RejectedExecutionException e) {
                syncJobs.remove(requestId);
                String raw = "{\"status\":0,\"body\":\"{\\\"error\\\":\\\"网络繁忙，请稍后重试\\\"}\"}";
                String script = "window.__kaoyanSyncComplete&&window.__kaoyanSyncComplete(" + JSONObject.quote(requestId) + "," + JSONObject.quote(raw) + ")";
                runOnUiThread(() -> { if (!isFinishing() && webView != null) webView.evaluateJavascript(script, null); });
            }
        }

        /** 执行同步服务 HTTPS 请求；登录/注册响应中的令牌保存在 Java 侧，不进入 JS 存储。 */
        @JavascriptInterface public String syncRequest(String method, String path, String body) {
            return performSyncRequest(method, path, body, null);
        }

        private String performSyncRequest(String method, String path, String body, String requestId) {
            synchronized (networkLock) {
                HttpsURLConnection conn = null;
                String base = syncPrefs.getString("url", DEFAULT_SYNC_URL);
                try {
                    if (!path.startsWith("/api/") || path.contains("..")) throw new IOException("非法路径");
                    URL target = new URL(base + path);
                    if (!"https".equals(target.getProtocol())) throw new IOException("同步服务必须使用 HTTPS");
                    conn = (HttpsURLConnection) target.openConnection();
                    if (requestId != null) syncConnections.put(requestId, conn);
                    conn.setRequestMethod(method);
                    conn.setConnectTimeout(15000);
                    conn.setReadTimeout(20000);
                    conn.setRequestProperty("Content-Type", "application/json");
                    String token = syncPrefs.getString("token", null);
                    if (token != null && !token.isEmpty()) conn.setRequestProperty("Authorization", "Bearer " + token);
                    boolean hasBody = body != null && !body.isEmpty() && !"GET".equals(method);
                    if (hasBody) {
                        conn.setDoOutput(true);
                        byte[] payload = body.getBytes(StandardCharsets.UTF_8);
                        conn.setFixedLengthStreamingMode(payload.length);
                        try (OutputStream out = conn.getOutputStream()) { out.write(payload); }
                    }
                    int status = conn.getResponseCode();
                    InputStream in = status >= 400 ? conn.getErrorStream() : conn.getInputStream();
                    String response = in == null ? "" : readText(in);
                    in.close();
                    if (path.startsWith("/api/auth/login") || path.startsWith("/api/auth/register")) {
                        if (status == 200 || status == 201) {
                            JSONObject data = new JSONObject(response);
                            syncPrefs.edit().putString("token", data.optString("token", null))
                                    .putString("email", data.optString("email", null)).apply();
                            data.remove("token");
                            response = data.toString();
                        }
                    } else if ("/api/auth/signout".equals(path)) {
                        syncPrefs.edit().remove("token").remove("email").apply();
                    }
                    return new JSONObject().put("status", status)
                            .put("body", response.isEmpty() ? "null" : response).toString();
                } catch (Exception e) {
                    Log.w("KaoyanMath1", "syncRequest failed: " + path, e);
                    try { return new JSONObject().put("status", 0).put("body", "{\"error\":\"网络请求失败，请检查网络\"}").toString(); }
                    catch (Exception ignored) { return "{\"status\":0,\"body\":\"{}\"}"; }
                } finally {
                    if (requestId != null) syncConnections.remove(requestId);
                    if (conn != null) conn.disconnect();
                }
            }
        }
    }

    private static boolean validPdfKey(String key) {
        return key != null && (key.equals("jichu30.pdf") || key.equals("shiti.pdf") || key.equals("jiexi.pdf") || key.matches("exam-[0-9]{4}\\.pdf"));
    }

    private boolean isPdf(Uri uri) throws IOException {
        try (InputStream in = getContentResolver().openInputStream(uri)) {
            if (in == null) return false;
            byte[] header = new byte[1024];
            int size = 0;
            while (size < header.length) {
                int count = in.read(header, size, header.length - size);
                if (count < 0) break;
                if (count == 0) break;
                size += count;
            }
            return new String(header, 0, size, StandardCharsets.ISO_8859_1).contains("%PDF-");
        }
    }

    private final class LocalClient extends WebViewClient {
        private String syncHost() {
            try { return new URL(syncPrefs.getString("url", DEFAULT_SYNC_URL)).getHost(); }
            catch (Exception e) { return null; }
        }

        @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if ("https".equals(uri.getScheme()) && HOST.equals(uri.getHost())) return false;
            if ("https".equals(uri.getScheme()) && isCloudUrl(uri.toString())) return false;
            if (request.isForMainFrame() && cloudMode && "https".equals(uri.getScheme())) return false;
            if (request.isForMainFrame() && "https".equals(uri.getScheme())) {
                message("此页面不在应用的可信站点中");
            }
            return true;
        }

        @Override public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
            if (view == webView) {
                if ((ORIGIN + "/").equals(url) || url.startsWith(ORIGIN + "/")) {
                    cloudMode = false;
                    view.addJavascriptInterface(new Platform(), "AndroidPlatform");
                } else {
                    if (isCloudUrl(url)) cloudMode = true;
                    view.removeJavascriptInterface("AndroidPlatform");
                }
                updateModeButton();
            }
            super.onPageStarted(view, url, favicon);
        }

        @Override public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
            if (view == webView && request.isForMainFrame() && cloudMode) {
                runOnUiThread(() -> fallbackToLocal("云端连接失败，已切回本机学习"));
            }
            super.onReceivedError(view, request, error);
        }

        @Override public void onReceivedHttpError(WebView view, WebResourceRequest request, WebResourceResponse response) {
            if (view == webView && request.isForMainFrame() && cloudMode && response.getStatusCode() >= 400) {
                runOnUiThread(() -> fallbackToLocal("云端页面暂不可用，已切回本机学习"));
            }
            super.onReceivedHttpError(view, request, response);
        }

        @Override public void onReceivedSslError(WebView view, SslErrorHandler handler, android.net.http.SslError error) {
            handler.cancel();
            if (view == webView && cloudMode) runOnUiThread(() -> fallbackToLocal("云端安全连接失败，已切回本机学习"));
        }

        @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if ("https".equals(uri.getScheme()) && HOST.equals(uri.getHost())) {
                String path = uri.getPath();
                if (path == null || path.equals("/")) path = "/index.html";
                if (path.startsWith("/media/")) return pdfResponse(path.substring(7), request.getRequestHeaders());
                if (path.contains("..") || path.contains("\\")) return textResponse(403, "Forbidden", "无效路径");
                try {
                    String mime = mime(path);
                    String encoding = mime.startsWith("text/") || mime.equals("application/javascript") || mime.equals("image/svg+xml") ? "UTF-8" : null;
                    return new WebResourceResponse(mime, encoding, getAssets().open("www" + path));
                } catch (IOException e) {
                    Log.e("KaoyanMath1", "Cannot open bundled asset: " + path, e);
                    return textResponse(404, "Not Found", "文件不存在");
                }
            }
            if (view == webView && cloudMode && "https".equals(uri.getScheme())) return null;
            return textResponse(403, "Forbidden", "禁止访问外部资源");
        }
    }

    private static String mime(String path) {
        if (path.endsWith(".pdf")) return "application/pdf";
        if (path.endsWith(".html")) return "text/html";
        if (path.endsWith(".css")) return "text/css";
        if (path.endsWith(".js") || path.endsWith(".mjs")) return "application/javascript";
        if (path.endsWith(".svg")) return "image/svg+xml";
        if (path.endsWith(".woff2")) return "font/woff2";
        if (path.endsWith(".woff")) return "font/woff";
        if (path.endsWith(".ttf")) return "font/ttf";
        if (path.endsWith(".png")) return "image/png";
        if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
        if (path.endsWith(".webp")) return "image/webp";
        return "application/octet-stream";
    }

    private static WebResourceResponse textResponse(int status, String reason, String text) {
        return new WebResourceResponse("text/plain", "UTF-8", status, reason, new HashMap<>(),
                new ByteArrayInputStream(text.getBytes(StandardCharsets.UTF_8)));
    }

    private long documentSize(Uri uri) {
        try (Cursor c = getContentResolver().query(uri, new String[]{OpenableColumns.SIZE}, null, null, null)) {
            if (c != null && c.moveToFirst() && !c.isNull(0)) return c.getLong(0);
        } catch (Exception ignored) { }
        try (AssetFileDescriptor afd = getContentResolver().openAssetFileDescriptor(uri, "r")) {
            if (afd != null) return afd.getLength();
        } catch (Exception ignored) { }
        return -1;
    }

    private static void skipFully(InputStream in, long count) throws IOException {
        while (count > 0) {
            long skipped = in.skip(count);
            if (skipped > 0) count -= skipped;
            else if (in.read() == -1) throw new IOException("Unexpected end of file");
            else count--;
        }
    }

    private static final class LimitedStream extends FilterInputStream {
        private long remaining;
        LimitedStream(InputStream in, long length) { super(in); remaining = length; }
        @Override public int read() throws IOException {
            if (remaining <= 0) return -1;
            int b = super.read();
            if (b != -1) remaining--;
            return b;
        }
        @Override public int read(byte[] b, int off, int len) throws IOException {
            if (remaining <= 0) return -1;
            int n = super.read(b, off, (int)Math.min(len, remaining));
            if (n > 0) remaining -= n;
            return n;
        }
    }

    private WebResourceResponse pdfResponse(String key, Map<String, String> requestHeaders) {
        if (!validPdfKey(key)) return textResponse(404, "Not Found", "资料不存在");
        String value = documents.getString(key, null);
        if (value == null) return textResponse(404, "Not Found", "请先选择手机中的 PDF");
        try {
            Uri uri = Uri.parse(value);
            long size = documentSize(uri);
            InputStream in = getContentResolver().openInputStream(uri);
            if (in == null) return textResponse(404, "Not Found", "无法读取所选文件");
            Map<String, String> headers = new HashMap<>();
            headers.put("Cache-Control", "no-store");
            if (size >= 0) {
                headers.put("Accept-Ranges", "bytes");
                headers.put("Content-Length", Long.toString(size));
            }
            String range = null;
            for (Map.Entry<String, String> entry : requestHeaders.entrySet()) if (entry.getKey().equalsIgnoreCase("Range")) range = entry.getValue();
            if (range != null && size >= 0) {
                Matcher matcher = Pattern.compile("^bytes=(\\d+)-(\\d*)$").matcher(range);
                if (!matcher.matches()) { in.close(); return textResponse(416, "Range Not Satisfiable", "无效范围"); }
                long start = Long.parseLong(matcher.group(1));
                long end = matcher.group(2).isEmpty() ? size - 1 : Math.min(size - 1, Long.parseLong(matcher.group(2)));
                if (start >= size || start > end) { in.close(); return textResponse(416, "Range Not Satisfiable", "无效范围"); }
                skipFully(in, start);
                long length = end - start + 1;
                headers.put("Content-Length", Long.toString(length));
                headers.put("Content-Range", "bytes " + start + "-" + end + "/" + size);
                return new WebResourceResponse("application/pdf", null, 206, "Partial Content", headers, new LimitedStream(in, length));
            }
            return new WebResourceResponse("application/pdf", null, 200, "OK", headers, in);
        } catch (Exception e) {
            return textResponse(404, "Not Found", "无法读取所选 PDF，请重新选择");
        }
    }

    private final class Chrome extends WebChromeClient {
        @Override public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, Message resultMsg) {
            if (!isUserGesture || view != webView || !cloudMode || popupDialog != null) return false;
            popupDialog = new Dialog(MainActivity.this);
            popupWebView = new WebView(MainActivity.this);
            WebSettings settings = popupWebView.getSettings();
            settings.setJavaScriptEnabled(true);
            settings.setDomStorageEnabled(true);
            settings.setAllowFileAccess(false);
            settings.setAllowContentAccess(false);
            settings.setAllowFileAccessFromFileURLs(false);
            settings.setAllowUniversalAccessFromFileURLs(false);
            settings.setSupportMultipleWindows(false);
            popupWebView.setWebViewClient(new WebViewClient() {
                @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest request) {
                    return !"https".equals(request.getUrl().getScheme());
                }
            });
            popupWebView.setWebChromeClient(new WebChromeClient() {
                @Override public void onCloseWindow(WebView window) { closePopup(); }
            });
            FrameLayout popupRoot = new FrameLayout(MainActivity.this);
            popupRoot.addView(popupWebView, new FrameLayout.LayoutParams(-1, -1));
            popupDialog.setContentView(popupRoot);
            popupDialog.setOnDismissListener(dialog -> destroyPopup());
            popupDialog.show();
            popupDialog.getWindow().setLayout(-1, -1);
            WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
            transport.setWebView(popupWebView);
            resultMsg.sendToTarget();
            return true;
        }

        @Override public void onCloseWindow(WebView window) { closePopup(); }

        @Override public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
            if (fileCallback != null) fileCallback.onReceiveValue(null);
            fileCallback = callback;
            Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            intent.setType("*/*");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            try { startActivityForResult(intent, PICK_JSON); }
            catch (ActivityNotFoundException e) { fileCallback.onReceiveValue(null); fileCallback = null; message("没有可用的文件选择器"); }
            return true;
        }
    }

    private void closePopup() {
        if (popupDialog != null) popupDialog.dismiss();
        destroyPopup();
    }

    private void destroyPopup() {
        if (popupWebView != null) {
            if (popupWebView.getParent() instanceof android.view.ViewGroup)
                ((android.view.ViewGroup) popupWebView.getParent()).removeView(popupWebView);
            popupWebView.stopLoading(); popupWebView.destroy(); popupWebView = null;
        }
        popupDialog = null;
    }

    private void message(String text) { Toast.makeText(this, text, Toast.LENGTH_SHORT).show(); }

    private void fallbackToLocal(String text) {
        if (!cloudMode || webView == null) return;
        message(text);
        openLocal();
    }

    @Override protected void onSaveInstanceState(Bundle state) {
        state.putString("selectedPdfKey", selectedPdfKey);
        super.onSaveInstanceState(state);
    }

    @Override protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == PICK_JSON) {
            if (fileCallback != null) fileCallback.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            fileCallback = null;
        } else if (requestCode == PICK_BACKUP) {
            if (resultCode == RESULT_OK && data != null) {
                Uri uri = data.getData();
                if (uri == null && data.getClipData() != null && data.getClipData().getItemCount() > 0) uri = data.getClipData().getItemAt(0).getUri();
                if (uri != null) {
                    final Uri selected = uri;
                    new Thread(() -> {
                        try {
                            InputStream input = getContentResolver().openInputStream(selected);
                            if (input == null) throw new IOException("无法读取文件");
                            String json = readText(input);
                            runOnUiThread(() -> {
                                if (webView != null) webView.evaluateJavascript("typeof window.__kaoyanImportBackup==='function' && (window.__kaoyanImportBackup(" + JSONObject.quote(json) + "),true)", result -> {
                                    if (!"true".equals(result)) message("请重新打开设置后导入备份");
                                });
                            });
                        } catch (Exception e) { runOnUiThread(() -> message("无法读取备份文件，请重新选择")); }
                    }).start();
                }
            }
        } else if (requestCode == PICK_PDF) {
            if (resultCode == RESULT_OK && data != null && validPdfKey(selectedPdfKey)) {
                Uri uri = data.getData();
                if (uri == null && data.getClipData() != null && data.getClipData().getItemCount() > 0) uri = data.getClipData().getItemAt(0).getUri();
                if (uri != null) {
                    final Uri selected = uri;
                    final String key = selectedPdfKey;
                    new Thread(() -> {
                        try {
                            if (!isPdf(selected)) { runOnUiThread(() -> message("请选择有效的 PDF 文件")); return; }
                            boolean persistent = true;
                            try { getContentResolver().takePersistableUriPermission(selected, Intent.FLAG_GRANT_READ_URI_PERMISSION); }
                            catch (SecurityException e) { persistent = false; }
                            documents.edit().putString(key, selected.toString()).apply();
                            final boolean keep = persistent;
                            runOnUiThread(() -> {
                                if (!keep) message("此文件的读取权限仅在当前会话有效");
                                if (webView != null) webView.reload();
                            });
                        } catch (Exception e) { runOnUiThread(() -> message("无法读取 PDF，请重新选择")); }
                    }).start();
                }
            }
            selectedPdfKey = null;
        } else if (requestCode == SAVE_JSON) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null && pendingBackup != null) {
                try (OutputStream out = getContentResolver().openOutputStream(data.getData())) {
                    if (out == null) throw new IOException("cannot open output");
                    out.write(pendingBackup.getBytes(StandardCharsets.UTF_8));
                    message("备份已保存");
                } catch (Exception e) { message("备份保存失败"); }
            }
            pendingBackup = null;
        }
    }

    @Override public void onBackPressed() {
        if (popupDialog != null) { closePopup(); return; }
        if (webView == null) { super.onBackPressed(); return; }
        webView.evaluateJavascript("(function(){if(document.body.classList.contains('nav-open')){document.getElementById('nav-scrim').click();return true;}return false})()", result -> {
            if ("true".equals(result)) return;
            if (webView.canGoBack()) webView.goBack(); else MainActivity.super.onBackPressed();
        });
    }

    @Override protected void onDestroy() {
        if (fileCallback != null) fileCallback.onReceiveValue(null);
        syncExecutor.shutdownNow();
        for (HttpsURLConnection connection : syncConnections.values()) connection.disconnect();
        syncConnections.clear(); syncJobs.clear();
        closePopup();
        if (webView != null) webView.stopLoading();
        if (webView != null) webView.destroy();
        super.onDestroy();
    }
}
