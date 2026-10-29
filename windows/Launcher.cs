using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using Microsoft.Win32;

internal static class Launcher
{
    private const string Address = "http://127.0.0.1:8321";

    [STAThread]
    private static int Main(string[] args)
    {
        if (args.Length == 1 && args[0] == "--self-test")
            return HealthMatches("{\"app\":\"kaoyan-math1\",\"ok\":true}") &&
                   !HealthMatches("{\"app\":\"other\",\"ok\":true}") &&
                   !HealthMatches("invalid") ? 0 : 1;

        try
        {
            string root = FindProject();
            if (root == null) throw new Exception("找不到平台项目，请确认 D:\\ClaudeWorkspace\\Projects\\KaoyanMath1Platform 仍然存在。");
            if (!ServiceReady())
            {
                string node = FindNode();
                if (node == null) throw new Exception("找不到 Node.js。请先安装 Node.js 18 或更高版本。");
                ProcessStartInfo start = new ProcessStartInfo(node, "\"" + Path.Combine(root, "server.js") + "\"");
                start.WorkingDirectory = root;
                start.UseShellExecute = false;
                start.CreateNoWindow = true;
                start.EnvironmentVariables["PORT"] = "8321";
                Process server = Process.Start(start);
                bool ready = false;
                for (int attempt = 0; attempt < 50; attempt++)
                {
                    if (ServiceReady()) { ready = true; break; }
                    if (server.HasExited) break;
                    Thread.Sleep(200);
                }
                if (!ready) throw new Exception("平台服务启动失败。请检查 Node.js 和端口 8321 是否被其他程序占用。");
            }
            OpenWindow(root);
            return 0;
        }
        catch (Exception error)
        {
            MessageBox.Show(error.Message, "考研数学一", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return 1;
        }
    }

    private static string FindProject()
    {
        DirectoryInfo current = new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory);
        for (int i = 0; current != null && i < 6; i++, current = current.Parent)
            if (File.Exists(Path.Combine(current.FullName, "server.js")) && Directory.Exists(Path.Combine(current.FullName, "public"))) return current.FullName;
        const string known = @"D:\ClaudeWorkspace\Projects\KaoyanMath1Platform";
        return File.Exists(Path.Combine(known, "server.js")) ? known : null;
    }

    private static string FindNode()
    {
        string common = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), "nodejs", "node.exe");
        if (File.Exists(common)) return common;
        foreach (string part in (Environment.GetEnvironmentVariable("PATH") ?? "").Split(Path.PathSeparator))
        {
            string dir = part.Trim().Trim('"');
            if (dir.Length == 0) continue;
            try { string candidate = Path.Combine(dir, "node.exe"); if (File.Exists(candidate)) return candidate; }
            catch (ArgumentException) { }
        }
        return null;
    }

    private static bool HealthMatches(string body)
    {
        try
        {
            Dictionary<string, object> health = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(body);
            return health.ContainsKey("app") && (string)health["app"] == "kaoyan-math1" &&
                   health.ContainsKey("ok") && health["ok"] is bool && (bool)health["ok"];
        }
        catch (Exception) { return false; }
    }

    private static bool ServiceReady()
    {
        try
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(Address + "/api/health");
            request.Proxy = null;
            request.Timeout = 1000;
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (StreamReader reader = new StreamReader(response.GetResponseStream())) return HealthMatches(reader.ReadToEnd());
        }
        catch (Exception) { return false; }
    }

    private static void OpenWindow(string root)
    {
        string edge = null;
        using (RegistryKey key = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe"))
            if (key != null) edge = key.GetValue("") as string;
        if (String.IsNullOrEmpty(edge) || !File.Exists(edge))
            edge = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), @"Microsoft\Edge\Application\msedge.exe");
        if (!File.Exists(edge))
        {
            Process.Start(new ProcessStartInfo(Address) { UseShellExecute = true });
            return;
        }
        string cache = Directory.Exists(@"D:\") ? @"D:\ClaudeWorkspace\Caches\KaoyanMath1Desktop" : Path.Combine(root, "windows", "browser-data");
        Directory.CreateDirectory(cache);
        ProcessStartInfo browser = new ProcessStartInfo(edge, "--user-data-dir=\"" + cache + "\" --no-first-run --no-default-browser-check --disable-extensions --app=" + Address);
        browser.UseShellExecute = false;
        Process.Start(browser);
    }
}
