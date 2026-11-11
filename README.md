# T3 Code

T3 Code 是一个智能体运行框架的控制台（agent harness control surface）。它让你通过一流的移动端应用（[iOS](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824)、[Android](https://play.google.com/store/apps/details?id=com.t3tools.t3code)）、[Web 应用](https://app.t3.codes)和[基于 Electron 的桌面应用](https://t3.codes)来操控你机器上的智能体。

它可以直接使用你在 Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravity 和 fx 上的订阅。只要这些工具已经装在你的电脑上，T3 Code 就能控制它们。

## “等等，你们到底在卖什么？”

什么都不卖。我们做 T3 Code，是因为想要最好的智能体开发体验。我们参考了 Codex 桌面应用、Conductor、Claude Desktop 和 Cursor Glass 等现有方案，但没有一个达到我们的标准：性能出色、支持远程、真正开放。如果哪天我们走错了方向，你也能拿到 fork 并打造自己想要的编辑器所需的一切。

## 安装

开始对话前，请先安装并登录至少一个智能体服务商。各服务商的设置见[安装与首次运行](./docs/user/install.md#providers)。

### 命令行

```bash
curl -fsSL https://t3.codes/install.sh | sh
```

Windows 上，在 PowerShell 中运行：

```powershell
irm https://t3.codes/install.ps1 | iex
```

然后运行 `t3`，它会启动服务并打开本地 Web 应用。`t3 service install` 让服务在后台常驻，`t3 update` 升级到新版本，`t3 --help` 查看完整说明。

想先试用而不安装，可以运行 `npx t3@latest`，它会提示你安装 `t3` 命令。

### 桌面应用

从 [GitHub Releases](https://github.com/pingdotgg/t3code/releases) 安装最新版桌面应用，或使用各平台的包管理器（winget、Scoop、Homebrew、apt、AUR、Nix）。具体命令见[安装与首次运行](./docs/user/install.md#desktop-app)。

## 文档

完整文档在 [docs/](./docs)。目前还没有文档站点。

- [常见问题](./docs/user/faq.md)
- [安装与首次运行](./docs/user/install.md)
- [权限模式](./docs/user/permission-modes.md)
- [键盘快捷键](./docs/user/keybindings.md)
- [项目设置](./docs/user/project-settings.md)
- [外观偏好](./docs/user/appearance.md)
- [从手机或其他机器远程访问](./docs/user/remote-access.md)
- [通过 MCP 接入 Claude Code、Codex、ChatGPT 等智能体](./docs/user/outside-agents.md)
- [保持应用与服务端同步](./docs/user/updating.md)
- [版本控制集成](./docs/user/source-control.md)
- 多账号：[Codex](./docs/user/providers-codex.md) · [Claude](./docs/user/providers-claude.md)
- [把 T3 Code 作为后台服务运行](./docs/user/background-service.md)

想从源码构建？从 [docs/internals/overview.md](./docs/internals/overview.md) 开始。

## 参与贡献

项目还很早期，请预期会有 bug。我们（基本上）还不接受外部贡献：小修复可能会考虑，大功能不会接受。报 bug 或提交 PR 前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)；功能建议请发到 [Ideas 讨论区](https://github.com/pingdotgg/t3code/discussions/categories/ideas)。

T3 Code 使用 Vite+，需要先安装全局 `vp` 命令行工具：

```bash
curl -fsSL https://vite.plus | bash
```

Windows 上，在 PowerShell 中运行：

```powershell
irm https://vite.plus/ps1 | iex
```

然后用 `vp i` 安装依赖。更多说明见 [Vite+ 指南](https://viteplus.dev/guide/)。

需要支持？加入 [Discord](https://discord.gg/jn4EGJjrvv)。
