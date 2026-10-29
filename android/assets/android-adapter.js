(() => {
  const pending = new Map();
  let nextId = 0;
  window.__kaoyanSyncComplete = (id, raw) => {
    const resolve = pending.get(id);
    if (resolve) { pending.delete(id); resolve(raw); }
  };
  window.__kaoyanSyncRequest = (method, path, body) => new Promise(resolve => {
    const id = `sync-${Date.now()}-${++nextId}`;
    const timer = setTimeout(() => {
      if (!pending.delete(id)) return;
      window.AndroidPlatform?.cancelSyncRequest?.(id);
      resolve('{"status":0,"body":"{\\"error\\":\\"网络请求超时\\"}"}');
    }, 25000);
    pending.set(id, raw => { clearTimeout(timer); resolve(raw); });
    try { window.AndroidPlatform.syncRequestAsync(id, method, path, body || ''); }
    catch { clearTimeout(timer); pending.delete(id); resolve('{"status":0,"body":"{\\"error\\":\\"网络请求失败\\"}"}'); }
  });
  const nativeFetch = window.fetch.bind(window);
  window.fetch = async (input, init = {}) => {
    const url = new URL(typeof input === 'string' ? input : input.url, location.href);
    if (url.origin === location.origin && (url.pathname === '/api/bootstrap' || url.pathname === '/api/state')) {
      const result = JSON.parse(window.AndroidPlatform.request((init.method || 'GET').toUpperCase(), url.pathname, init.body || ''));
      return new Response(result.body, { status: result.status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
    }
    return nativeFetch(input, init);
  };
})();
