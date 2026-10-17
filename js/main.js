/**
 * THE ARNOLD CHRONICLE - Vintage Aged Newspaper
 * Arnold (Dongqi Li) Personal Gazette
 * Bilingual Dictionary & Newspaper Interactivity
 */

const newspaperI18n = {
  zh: {
    // Masthead & Ears
    "masthead.title": "THE ARNOLD CHRONICLE",
    "masthead.chinese": "阿诺德技术纪事",
    "masthead.motto": "“以严谨工程构建清晰产品，用现代技术探索交互新可能”",
    "ear.tagline": "数字工程与技术纪事 · 持续更新",
    "ear.weather": "当前状态：专注于高性能 Web 架构与 AI 智能体应用",
    "ear.price": "开源开放 · 欢迎交流",
    "lang.label": "语言版本 / EDITION",

    // Issue Strip
    "strip.vol": "2026 年度特刊",
    "strip.edition": "个人技术主页 · 完整版",
    "strip.location": "中国 · 深圳",
    "strip.circulation": "面向全球开发者开放",

    // Depts Nav
    "nav.lead": "个人简介",
    "nav.projects": "精选项目",
    "nav.skills": "技术能力",
    "nav.contact": "联系交流",

    // Lead Story
    "lead.kicker": "【特写】全栈与前端工程",
    "lead.headline": "工程师 Arnold：用严谨架构打造清晰、高性能的数字产品",
    "lead.subhead": "专注现代 Web 架构体系、微交互设计与自主智能体（AI Agents）工程落地",
    "lead.byline": "Arnold (李东启) · 深圳",
    "lead.p1": "<span class=\"drop-cap\">我</span>是一名专注于现代 Web 研发与交互设计的工程师。Arnold（李东启），致力于通过现代前端工程、系统架构设计与 AI 技术的深度结合，将复杂的业务逻辑转化为轻量、流畅、直观的产品体验。",
    "lead.p2": "坚持用清晰的代码结构与可维护的工程体系解决实际问题。无论是毫秒级的性能调优、细腻的交互动效，还是多智能体工作流的编排，都注重在细节中沉淀品质，打造稳定可靠的现代软件产品。",

    // Side Box
    "editorial.title": "技术理念 · Core Principles",
    "editorial.content": "“克制、清晰、注重实效。优秀的技术架构与产品设计应当消除不必要的噪音与冗余，让核心价值自然流动，经得起长期迭代与真实业务场景的检验。”",
    "editorial.stamp": "★ 实践验证 · VERIFIED ★",

    // Projects Section
    "projects.banner": "精选项目与工程实践",
    "p1.tag": "排版系统 · 交互工程",
    "p1.title": "现代响应式报纸排版引擎",
    "p1.desc": "探索经典出版物排版秩序在现代 Web 平台上的数字化实践。融合多栏栅格布局、流式字体缩放与现代化 CSS 架构，在保障极快加载速度的同时呈现出版物级别的版面美感。",
    "p1.meta": "分类：Design System",

    "p2.tag": "AI 智能体 · 工作流自动化",
    "p2.title": "多智能体协同与任务编排系统",
    "p2.desc": "基于大语言模型与多智能体（Multi-Agent）协议构建的自动化任务管线。支持复杂目标拆解、上下文记忆管理与外部工具链调用，探索人机协同的高效生产力场景。",
    "p2.meta": "分类：AI & Engineering",

    "p3.tag": "开发工具 · 效能套件",
    "p3.title": "轻量开发者效能工具套件",
    "p3.desc": "秉持极简与零额外心智负担原则，通过毫秒级响应、高度精简的交互路径与离线优先策略，为日常开发与团队协作提供轻快、专注的操作体验。",
    "p3.meta": "分类：Utilities",
    "dispatch.read": "查看详情 ☞",

    // Classifieds
    "classifieds.title": "核心技术栈与专业能力",
    "ad1.title": "前端工程与现代 Web 架构",
    "ad1.body": "深入掌握现代 Web 标准，注重组件化架构、交互性能与跨端响应式设计：",
    "ad1.item1": "HTML5 语义化架构与无障碍访问（a11y）",
    "ad1.item2": "现代 CSS、CSS Grid/Flexbox 与响应式设计系统",
    "ad1.item3": "TypeScript / Modern JavaScript (ESNext) 模块化开发",
    "ad1.item4": "高性能渲染优化与跨端适配",

    "ad2.title": "系统工程与工程效能",
    "ad2.body": "遵循严谨的软件工程规范，熟练应用现代化开发工具流与持续交付体系：",
    "ad2.item1": "Git 分支协作规范与版本生命周期管理",
    "ad2.item2": "RESTful API / GraphQL 接口设计与状态管理",
    "ad2.item3": "Linux 环境运维、Shell 脚本与自动化构建",
    "ad2.item4": "CI/CD 自动化流水线与云原生部署",

    "ad3.title": "AI 智能应用与前沿实践",
    "ad3.body": "积极探索大模型生态，将生成式 AI 与自主智能体技术落地于实际业务：",
    "ad3.item1": "LLM API 接入与多 Agent 编排框架",
    "ad3.item2": "结构化 Prompt 工程与函数调用（Function Calling）",
    "ad3.item3": "AI 驱动的代码生成与效能自动化工具",

    // Telegram / Contact
    "telegram.title": "保持联络 · 欢迎交流与合作",
    "telegram.desc": "如果您对技术交流、项目合作、架构探讨或数字化产品创新感兴趣，欢迎随时通过 GitHub 或邮件与我联系。",
    "telegram.btn.github": "访问我的 GitHub 主页",

    // Colophon
    "colophon.imprint": "由 Arnold (李东启) 设计与构建 · 中国 · 深圳",
    "colophon.rights": "保留所有权利 · 融合经典排版美学与现代 Web 工程"
  },

  en: {
    // Masthead & Ears
    "masthead.title": "THE ARNOLD CHRONICLE",
    "masthead.chinese": "阿诺德技术纪事",
    "masthead.motto": "\"Building reliable systems with clean architecture, exploring new horizons in web interaction.\"",
    "ear.tagline": "ENGINEERING & TECH DISPATCH · REGULARLY UPDATED",
    "ear.weather": "STATUS: FOCUSED ON HIGH-PERFORMANCE WEB ARCHITECTURE & AI AGENTS",
    "ear.price": "OPEN ACCESS · COLLABORATION WELCOME",
    "lang.label": "EDITION / 语言",

    // Issue Strip
    "strip.vol": "EDITION 2026",
    "strip.edition": "DEVELOPER PORTFOLIO & NOTES",
    "strip.location": "SHENZHEN, CHINA",
    "strip.circulation": "OPEN FOR GLOBAL DEVELOPERS",

    // Depts Nav
    "nav.lead": "ABOUT",
    "nav.projects": "PROJECTS",
    "nav.skills": "SKILLS",
    "nav.contact": "CONTACT",

    // Lead Story
    "lead.kicker": "FEATURED · FULLSTACK & FRONTEND",
    "lead.headline": "ENGINEER ARNOLD: BUILDING CLEAN, RESILIENT & HIGH-PERFORMANCE WEB EXPERIENCES",
    "lead.subhead": "Specializing in modern web architectures, thoughtful micro-interactions, and applied autonomous AI agents",
    "lead.byline": "BY ARNOLD (DONGQI LI) · SHENZHEN",
    "lead.p1": "<span class=\"drop-cap\">I</span> am a software engineer focused on modern web development and interaction design. Dedicated to bridging front-end engineering, robust architecture, and applied AI, I transform complex business logic into intuitive, performant digital experiences.",
    "lead.p2": "I believe in clean code, pragmatic architecture, and sustainable engineering standards. From sub-millisecond rendering optimizations to multi-agent workflow orchestration, I focus on delivering long-term value through thoughtful craftsmanship.",

    // Side Box
    "editorial.title": "ENGINEERING PHILOSOPHY",
    "editorial.content": "\"Restraint, clarity, and pragmatism. High-quality architecture removes unnecessary friction and noise, allowing core product value to shine through while enduring long-term scale and evolution.\"",
    "editorial.stamp": "★ VERIFIED PRACTICE ★",

    // Projects Section
    "projects.banner": "FEATURED PROJECTS & PRACTICE",
    "p1.tag": "DESIGN SYSTEMS · TYPOGRAPHY",
    "p1.title": "Modern Responsive Broadsheet Engine",
    "p1.desc": "Bridging classic print editorial aesthetics with modern web architecture. Featuring multi-column grid layouts, fluid typography scales, and zero-runtime CSS, balancing rapid load times with publication-grade elegance.",
    "p1.meta": "TYPE: DESIGN SYSTEM",

    "p2.tag": "AI AGENTS · AUTOMATION",
    "p2.title": "Autonomous Multi-Agent Workflow Engine",
    "p2.desc": "Building automated execution pipelines on top of LLMs and multi-agent coordination frameworks. Features dynamic task decomposition, persistent context management, and external tool execution.",
    "p2.meta": "TYPE: AI & ENGINEERING",

    "p3.tag": "DEVELOPER TOOLS · PRODUCTIVITY",
    "p3.title": "Lightweight Developer Productivity Suite",
    "p3.desc": "A focused suite of high-performance developer utilities built with an offline-first mindset. Engineered for sub-millisecond latency and frictionless workflows to keep developers in flow.",
    "p3.meta": "TYPE: UTILITIES",
    "dispatch.read": "VIEW PROJECT ☞",

    // Classifieds
    "classifieds.title": "CORE SKILLS & TECHNICAL STACK",
    "ad1.title": "Frontend Engineering & Architecture",
    "ad1.body": "Deep understanding of modern Web standards, responsive layout systems, and interactive performance:",
    "ad1.item1": "Semantic HTML5 & Accessibility (a11y) Standards",
    "ad1.item2": "Modern CSS, CSS Grid/Flexbox & Design Systems",
    "ad1.item3": "TypeScript & Modern JavaScript (ESNext) Architecture",
    "ad1.item4": "High-Performance Rendering & Cross-Platform Adaptation",

    "ad2.title": "System Engineering & DevOps",
    "ad2.body": "Adhering to rigorous software engineering practices and automated continuous delivery pipelines:",
    "ad2.item1": "Git Workflows, Branching Strategies & Code Governance",
    "ad2.item2": "RESTful API & GraphQL Integration & State Management",
    "ad2.item3": "Linux Environments, Shell Scripting & Automation",
    "ad2.item4": "CI/CD Automation Pipelines & Modern Deployment",

    "ad3.title": "Applied AI & Engineering",
    "ad3.body": "Applying frontier LLM ecosystems and autonomous agents to real-world engineering workflows:",
    "ad3.item1": "LLM API Integration & Multi-Agent Frameworks",
    "ad3.item2": "Structured Prompt Architecture & Function Calling",
    "ad3.item3": "AI-Augmented Development & Productivity Tooling",

    // Telegram / Contact
    "telegram.title": "GET IN TOUCH · LET'S CONNECT",
    "telegram.desc": "Interested in engineering collaboration, architectural discussions, or exploring new product ideas? Feel free to connect via GitHub or reach out directly.",
    "telegram.btn.github": "VISIT GITHUB PROFILE",

    // Colophon
    "colophon.imprint": "Designed & Built by Arnold (Dongqi Li) · Shenzhen, China",
    "colophon.rights": "All Rights Reserved · Blending Editorial Design with Modern Web Engineering"
  }
};

// Current active language (saved in localStorage)
let activeLanguage = localStorage.getItem("arnold_newspaper_lang") || "zh";

/**
 * Apply Language across DOM
 */
function applyLanguage(lang) {
  if (!newspaperI18n[lang]) return;
  activeLanguage = lang;
  localStorage.setItem("arnold_newspaper_lang", lang);

  // Update Toggle Button States
  document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update standard text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (newspaperI18n[lang][key] !== undefined) {
      el.textContent = newspaperI18n[lang][key];
    }
  });

  // Update HTML-supported nodes (e.g. drop caps, quotes)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (newspaperI18n[lang][key] !== undefined) {
      el.innerHTML = newspaperI18n[lang][key];
    }
  });

  // Update Document Meta
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh"
    ? "THE ARNOLD CHRONICLE | Arnold (李东启) · 技术纪事与个人主页"
    : "THE ARNOLD CHRONICLE | Arnold (Dongqi Li) · Portfolio & Tech Notes";
}

/**
 * Initialize on Page Load
 */
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved or default language
  applyLanguage(activeLanguage);

  // Bind Switcher Buttons
  document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.lang;
      applyLanguage(targetLang);
    });
  });

  // Add subtle sound/animation feel on stamp or headline hover
  const stamps = document.querySelectorAll(".rubber-stamp");
  stamps.forEach((stamp) => {
    stamp.addEventListener("mouseenter", () => {
      stamp.style.transform = `rotate(${Math.random() * 6 - 3}deg) scale(1.05)`;
    });
    stamp.addEventListener("mouseleave", () => {
      stamp.style.transform = "rotate(-4deg) scale(1)";
    });
  });
});
