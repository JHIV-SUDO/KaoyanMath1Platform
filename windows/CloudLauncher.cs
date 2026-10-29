using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

internal static class CloudLauncher
{
    // 默认同步服务；可用 exe 同目录的 sync-config.json 覆盖（与 android/sync-config.json 同格式）
    private const string DefaultAddress = "https://app-2uzt75.v2.appdeploy.ai/";

    private static string Address()
    {
        try
        {
            string cfg = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "sync-config.json");
            if (!File.Exists(cfg)) cfg = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "sync-config.json");
            if (File.Exists(cfg))
            {
                string json = File.ReadAllText(cfg);
                System.Web.Script.Serialization.JavaScriptSerializer s = new System.Web.Script.Serialization.JavaScriptSerializer();
                System.Collections.Generic.Dictionary<string, object> values = s.Deserialize<System.Collections.Generic.Dictionary<string, object>>(json);
                object url = null;
                if (values != null && values.TryGetValue("serviceUrl", out url))
                {
                    string address = Convert.ToString(url);
                    if (!string.IsNullOrEmpty(address) && address.StartsWith("https://")) return address;
                }
            }
        }
        catch { /* 配置损坏时用默认地址 */ }
        return DefaultAddress;
    }

    [STAThread]
    private static int Main(string[] args)
    {
        string address = Address();
        if (args.Length == 1 && args[0] == "--self-test") return Uri.IsWellFormedUriString(address, UriKind.Absolute) ? 0 : 1;
        try
        {
            string edge = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), @"Microsoft\Edge\Application\msedge.exe");
            if (File.Exists(edge)) Process.Start(new ProcessStartInfo(edge, "--app=" + address) { UseShellExecute = true });
            else Process.Start(new ProcessStartInfo(address) { UseShellExecute = true });
            return 0;
        }
        catch (Exception error)
        {
            MessageBox.Show(error.Message, "考研数学一云端版", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return 1;
        }
    }
}
