# 考研数学一学习平台

本项目提供 App 内课程、练习、复习和模拟考试。当前内容规模：32 讲、171 道随堂练习、2,186 条题库记录（含重复变式）、833 条仓库笔记、2 套模拟卷；知识图谱含 464 个实体和 431 条关系。题库记录数是条目数量，不代表去重题数或逐题数学复核完成。

《基础30讲》共整理 350 道例题，其中 18 道为结构化内容，332 道提供原书页材料；附 776 张扫描图片及 18 个 App 内 PDF 包。53 个原书锚点仍待复核。原书页材料可供查看，不等于高质量精讲或数学内容已全部验证。扫描资料与图片包含在源码 ZIP 和 Android 包中。

真题管理目前提供年份、考试结构与成绩记录，没有内置完整的历年真题 PDF；对应资料会在界面中明确显示暂缺。来源答案自动判分的条目会提示其尚未标记为独立核验。

## 使用方式

- **线上默认入口**：[AppDeploy 平台](https://app-2uzt75.v2.appdeploy.ai/)。Android 默认启动线上平台，可从应用切换到本机模式。2026-10-29 本轮线上更新因平台用量上限被拒绝，线上仍是旧版；点击顶部“本机”可查看本轮集成内容。
- **Windows**：使用 `windows/` 中的 Cloud 启动器打开线上平台，也可启动本机服务。
- **Android**：学习资料内置于应用；资料阅读器提供内部原书 PDF 阅读。本轮尚未在真机验证 PDF 和备份导入。
- **本机开发**：需要 Node.js 24 或更高版本。在 PowerShell 7 中从项目根目录运行：

```powershell
node server.js
```

默认访问 <http://127.0.0.1:8321>。开发数据保存在 `data/db.json`。本机自托管账号服务运行 `node service/server.mjs`，默认地址为 <http://127.0.0.1:8322>。

## 账号与数据边界

AppDeploy 托管账号与自托管 `service/server.mjs` 账号是两套独立账号和存储，不能互通。设备本机数据不会自动并入托管账号；需要迁移时，先导出 JSON 备份，再在目标模式中导入，并保留原始备份。自托管账号与本机副本的冲突提示适用于自托管模式。更换服务地址会切换账号服务。

## 内容和许可

课程、结构化例题与模拟卷由项目整理；题库和原书页材料保留各自来源及授权边界。代码按根目录 MIT 许可发布，不会因此将受授权书籍内容转为 MIT。八个来源仓库如下：

- [kaoyanMATH](https://github.com/4thirteen2one/kaoyanMATH)
- [zhangyu-1000t](https://github.com/jlshdsdk/zhangyu-1000t)
- [zhangyu-math-zero-basics](https://github.com/jlshdsdk/zhangyu-math-zero-basics)
- [math](https://github.com/1092963881/math)
- [gaoshu-zhangyu-30](https://github.com/Yan-yuze/gaoshu-zhangyu-30)
- [zhangyu-1000-plus](https://github.com/2486809961-alt/zhangyu-1000-plus)
- [zhangyu-1000ti-qianghua](https://github.com/2486809961-alt/zhangyu-1000ti-qianghua)
- [Didnelpsun/Math](https://github.com/Didnelpsun/Math)

第三方组件及许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。提交 GitHub 前请先解压源码 ZIP，再提交解压后的项目文件；超过 100 MB 的 ZIP 可作为 GitHub Release 附件。不要提交账号数据库、签名密钥、令牌或运行时私有数据。

## 验收和已知边界

`npm test` 自动运行 12 个测试文件。另有独立浏览器端到端检查：`node tests/e2e-sync.mjs`（12 步）、`node tests/e2e-mocks.mjs`（5 步）、`node tests/content-access-e2e.mjs`（题图及 PDF 阅读）。公式渲染通过不代表数学答案已逐条审定。

线上真实跨网络访问和真实账号流程、iQOO 真机的导入与登录，以及 App 加 WebView 内存低于 1 GB，均未验证。发布和构建产物须按 [验收指南](验收指南.md) 检查后再确认。

更多说明：[Android](android/README.md) · [Windows](windows/README.md) · [Cloud 部署](cloud/README.md) · [自托管服务](service/README.md)。
