# Arnold (李东启) - 个人主页

基于 **2026 苹果最新毛玻璃风格 (Liquid Glass / VisionOS Design System)** 构建的现代化个人主页网站。

在线访问：[https://arnold3395.github.io/](https://arnold3395.github.io/)

---

## ✨ 核心特性

- **2026 Liquid Glass 视觉体验**：
  - 动态多重折射与磨砂透光玻璃（`backdrop-filter: blur(28px) saturate(190%)`）
  - 拟物流光镜面边框微光（Top Specular Inset Reflection）
  - 随光漂浮的环境流体渐变光晕（Ambient Fluid Lighting Orbs）
  - 苹果风格的 Bento Grid 模块化排版
  - 鼠标移动追踪的高光动态反射效果
- **中英文一键切换 (i18n)**：
  - 右上角常驻胶囊式语言切换器（中 / EN）
  - 本地状态持久化存储（`localStorage`）
  - 全站双语平滑无刷新切换
- **零外部运行时依赖**：
  - 纯原生 HTML5 / CSS3 / ESNext JavaScript 构建
  - 高性能与秒级加载，完全兼容 GitHub Pages 静态托管

---

## 🛠️ 项目结构

```text
.
├── index.html        # 主页骨架与结构
├── css/
│   └── style.css     # 2026 Apple Liquid Glass 样式体系
├── js/
│   └── main.js       # 中英文国际化切换器与高光光效逻辑
└── README.md         # 项目文档
```

---

© 2026 Arnold (Dongqi Li). All rights reserved.
