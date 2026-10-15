/**
 * 2026 Apple Liquid Glass Portfolio
 * Arnold (Dongqi Li) Personal Homepage
 * Features: Bilingual i18n Switcher, Dynamic Specular Light, Smooth Navigation
 */

// Bilingual Translation Dictionary
const i18nData = {
  zh: {
    // Nav
    "nav.about": "关于我",
    "nav.projects": "精选项目",
    "nav.skills": "技能架构",
    "nav.contact": "联系方式",

    // Hero
    "hero.badge": "探索数字美学与前沿技术",
    "hero.title": "你好，我是 <span class=\"highlight-gradient\">Arnold (李东启)</span>",
    "hero.subtitle": "致力于构建融合极致视觉美学、流畅交互设计与可靠系统架构的现代数字化体验。",
    "hero.cta.projects": "探索精选作品",
    "hero.cta.contact": "即刻沟通",

    // About Section
    "about.tag": "Vision & Mindset",
    "about.heading": "设计美学与工程思维的深度交汇",
    "about.bio.title": "跨领域创造者",
    "about.bio.desc": "追求如苹果硬件般温润而纯粹的数字体验。专注探索现代化前端工程、交互系统设计以及人工智能技术的落地应用，将复杂的底层逻辑凝练为简单而自然的交互形式。",
    "about.stats.experience": "技术沉淀",
    "about.stats.exp_val": "多年积累",
    "about.stats.focus": "核心追求",
    "about.stats.focus_val": "极致体验",
    "about.stats.curiosity": "持续探索",
    "about.stats.curiosity_val": "保持好奇",

    "about.philosophy.title": "设计哲学",
    "about.philosophy.desc": "克制、明晰与通透。如同 2026 年的 Liquid Glass 设计理念，界面不应成为用户与信息之间的阻隔，而应是流动的灵感载体。",

    // Projects Section
    "projects.tag": "Selected Works",
    "projects.heading": "探索与工程实践",
    "project.1.category": "Web Architecture & Design",
    "project.1.title": "下一代毛玻璃设计系统",
    "project.1.desc": "探索多层折射、动态流光与硬件加速渲染的 Web 前端设计模式，提供极富沉浸感的微交互体验。",
    "project.2.category": "Intelligent Systems",
    "project.2.title": "AI 与自主代理工作流",
    "project.2.desc": "结合大语言模型与多代理协作机制，构建高效的自动化任务处理管线与智能助手应用。",
    "project.3.category": "Creative Tools",
    "project.3.title": "极简数字生产力工具",
    "project.3.desc": "以用户为中心的高性能小工具集，专注消除干扰，提升思维流转与开发协作效率。",

    // Skills Section
    "skills.tag": "Capabilities & Stack",
    "skills.heading": "技术栈与能力矩阵",
    "skills.frontend.title": "前端交互与架构",
    "skills.frontend.desc": "深入理解 Web 标准、现代 CSS 特性、响应式架构与组件化模式。",
    "skills.systems.title": "系统开发与工具链",
    "skills.systems.desc": "熟练掌握现代软件工程规范、Git 协同流、全栈开发与环境容器化。",
    "skills.ai.title": "AI 探索与创新应用",
    "skills.ai.desc": "关注 LLM Agent 编排、Prompt 工程及智能开发辅助体系。",

    // Contact Section
    "contact.tag": "Get In Touch",
    "contact.heading": "建立连接，共创未来",
    "contact.desc": "无论是项目合作、技术探讨，还是探索数字创新的新想法，随时欢迎交流。",
    "contact.btn.email": "发送邮件",
    "contact.btn.github": "GitHub 个人主页",

    // Footer
    "footer.rights": "保留所有权利。"
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Exploring Digital Aesthetics & Modern Tech",
    "hero.title": "Hello, I am <span class=\"highlight-gradient\">Arnold (Dongqi Li)</span>",
    "hero.subtitle": "Dedicated to crafting modern digital experiences blending refined visual aesthetics, fluid interactions, and robust system architecture.",
    "hero.cta.projects": "Explore Projects",
    "hero.cta.contact": "Get in Touch",

    // About Section
    "about.tag": "Vision & Mindset",
    "about.heading": "Where Engineering Precision Meets Design Aesthetics",
    "about.bio.title": "Interdisciplinary Creator",
    "about.bio.desc": "Striving for digital experiences as pure and seamless as crafted hardware. Focusing on modern web engineering, interaction design, and real-world AI applications—distilling complex logic into effortless interactions.",
    "about.stats.experience": "Experience",
    "about.stats.exp_val": "Continuous",
    "about.stats.focus": "Core Principle",
    "about.stats.focus_val": "Pure Delight",
    "about.stats.curiosity": "Evolution",
    "about.stats.curiosity_val": "Ever Curious",

    "about.philosophy.title": "Design Philosophy",
    "about.philosophy.desc": "Restraint, clarity, and translucency. Echoing the 2026 Liquid Glass paradigm, an interface should never block content, but rather act as a fluid lens for thought.",

    // Projects Section
    "projects.tag": "Selected Works",
    "projects.heading": "Explorations & Engineering",
    "project.1.category": "Web Architecture & Design",
    "project.1.title": "Next-Gen Glassmorphic Design System",
    "project.1.desc": "Exploring multi-layered refraction, specular reflections, and hardware-accelerated Web patterns for immersive micro-interactions.",
    "project.2.category": "Intelligent Systems",
    "project.2.title": "AI & Autonomous Agent Workflows",
    "project.2.desc": "Harnessing LLMs and multi-agent coordination frameworks to architect efficient task automation pipelines.",
    "project.3.category": "Creative Tools",
    "project.3.title": "Minimalist Productivity Tools",
    "project.3.desc": "Human-centric utilities designed to eliminate friction and elevate developer flow and creative focus.",

    // Skills Section
    "skills.tag": "Capabilities & Stack",
    "skills.heading": "Technical Capabilities",
    "skills.frontend.title": "Frontend & Interaction",
    "skills.frontend.desc": "Deep proficiency in modern Web standards, advanced CSS architectures, and responsive components.",
    "skills.systems.title": "Systems & Tooling",
    "skills.systems.desc": "Well-versed in software engineering best practices, Git workflows, and full-stack environments.",
    "skills.ai.title": "AI Exploration",
    "skills.ai.desc": "Active practitioner in LLM agent orchestration, prompt architecture, and AI-assisted engineering.",

    // Contact Section
    "contact.tag": "Get In Touch",
    "contact.heading": "Let's Connect & Create",
    "contact.desc": "Whether you want to discuss a collaboration, technical ideas, or future innovations, I'd love to hear from you.",
    "contact.btn.email": "Send Email",
    "contact.btn.github": "GitHub Profile",

    // Footer
    "footer.rights": "All rights reserved."
  }
};

// State Management
let currentLang = localStorage.getItem("arnold_site_lang") || "zh";

/**
 * Apply Language to DOM
 */
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  localStorage.setItem("arnold_site_lang", lang);

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update Text Elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // Update HTML-supported Elements
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Update Document title & html lang attribute
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh"
    ? "Arnold (李东启) | 个人主页 - 2026 Apple 风格"
    : "Arnold (Dongqi Li) | Personal Homepage";
}

/**
 * Setup Specular Highlight Effect on Glass Cards
 */
function initGlassCardsEffect() {
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/**
 * Initialize Everything on DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Init Language
  setLanguage(currentLang);

  // Bind Language Switcher Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      setLanguage(selectedLang);
    });
  });

  // Init Specular Light
  initGlassCardsEffect();

  // Dynamic Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
