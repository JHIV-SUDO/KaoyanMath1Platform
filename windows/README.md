# Windows 启动器

项目提供 Cloud 启动器和本机启动器。Cloud 启动器默认打开线上 AppDeploy 平台：<https://app-2uzt75.v2.appdeploy.ai/>。本机启动器运行本地应用，数据保存在项目的 `data/db.json`，需安装 Node.js 24 或更高版本。

2026-10-29 本轮线上更新因平台用量上限被拒绝，线上仍是旧版；本机启动器需要项目源码目录，可查看本轮集成内容。

如果电脑本机服务在更新前已经启动，打开或刷新练习题库后，页面会从内置兼容文件补齐书籍题库和笔记。当前题库为 171 道随堂练习与 2,186 条书籍记录，包含重复变式和原书页材料。修改种子内容后可运行 `node tools/build-desktop-compat.mjs` 重建兼容文件；源码打包脚本会自动重建。

线上托管账号和自托管服务账号相互独立；本机模式数据不会自动并入托管账号。迁移时先导出 JSON，保留原始备份，再在目标模式中导入。自托管配置和部署见 [service/README.md](../service/README.md)。

## 启动器构建

PowerShell 7 中执行：

```powershell
& 'D:\ClaudeWorkspace\Projects\KaoyanMath1Platform\windows\build.ps1'
```

打包或发布前需检查启动器指向、目标机器启动与页面访问。本说明不宣称当前 EXE 已重新构建或通过目标机验收。

## 验收边界

自动化检查见根目录 README。线上真实跨网络和真实账号尚未验证；启动器能够打开页面不等于云端账号、跨设备同步或 Android 真机链路已验证。
