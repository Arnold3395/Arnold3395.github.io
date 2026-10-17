/**
 * THE ARNOLD CHRONICLE - Vintage Aged Newspaper
 * Arnold (Dongqi Li) Personal Gazette
 * Bilingual Dictionary & Newspaper Interactivity
 */

const newspaperI18n = {
  zh: {
    // Masthead & Ears
    "masthead.title": "THE ARNOLD CHRONICLE",
    "masthead.chinese": "阿诺德纪事报",
    "masthead.motto": "“追求极致之数字工程，熔炼工程与美学之典范”",
    "ear.tagline": "每日特刊 · 创刊于甲辰年",
    "ear.weather": "气象报告：代码晴好，微风拂于数字之海",
    "ear.price": "定价：一颗求知之心",
    "lang.label": "语言版本 / EDITION",

    // Issue Strip
    "strip.vol": "第 26 卷 · 第 10 期",
    "strip.edition": "今日特刊 · 晚间城市版",
    "strip.location": "发刊地：深圳 / 赛博空间",
    "strip.circulation": "定价：免费公开阅览",

    // Depts Nav
    "nav.lead": "导读特稿",
    "nav.projects": "工程发明",
    "nav.skills": "技能启事",
    "nav.contact": "电报通联",

    // Lead Story
    "lead.kicker": "【头条专电】头版特稿",
    "lead.headline": "特写：工程师 Arnold 融汇代码逻辑与典雅美学",
    "lead.subhead": "探寻数字时代的手艺人精神——以严谨之架构，锻造流畅温润之交互体验",
    "lead.byline": "本报首席特派记者 报道于赛博空间",
    "lead.p1": "<span class=\"drop-cap\">追</span>求如实体工造般质朴而纯粹的数字体验。Arnold（李东启）专注于现代化前端工程、交互系统设计与前沿智能技术的深度探索，致力于将纷繁复杂的底层系统逻辑，凝练为自然、克制且富有生命力的交互表达。",
    "lead.p2": "在当今信息浪潮席卷的世界里，不仅追求代码的稳固与高效，更将每一行逻辑视作排印于黄旧纸页上的精密铅字。从微交互细节到全栈系统链路，以持久的专注打磨每一个工程切面。",

    // Side Box
    "editorial.title": "主笔社论 · 哲学视界",
    "editorial.content": "“克制、明晰、经得起时间洗练。真正的设计不应在用户与信息之间构筑隔阂，而应如百年前墨印新闻纸一般，即便岁月流转、泛黄作旧，其字里行间的力量与秩序依然清晰可见。”",
    "editorial.stamp": "★ 经本报核准 ★",

    // Projects Section
    "projects.banner": "工程实践与发明实录",
    "p1.tag": "专电 · 视觉交互工程",
    "p1.title": "复古作旧与现代排版系统",
    "p1.desc": "探索印刷品美学在现代 Web 平台上的数字复兴，融合报纸多栏栅格、复古铅字排印与响应式流动排版，打造有呼吸感的新闻纸质感体验。",
    "p1.meta": "通报编号：DS-01",

    "p2.tag": "特讯 · 自主智能系统",
    "p2.title": "AI 与自主代理工作流编排",
    "p2.desc": "结合大语言模型与多代理协作机制，构建高效可靠的自动化任务管线，探索人机协同之全新生产力疆界与自主决策体系。",
    "p2.meta": "特讯编号：AI-02",

    "p3.tag": "通报 · 极简数字工具",
    "p3.title": "匠心打造之数字生产力套件",
    "p3.desc": "摒弃冗余繁复，以极致的性能与清爽的使用感受，消除操作阻隔，助力思维流转与日常工程协作的高效推进。",
    "p3.meta": "启事编号：UT-03",

    // Classifieds
    "classifieds.title": "分类启事与技能名录",
    "ad1.title": "【启事】前端交互与现代架构",
    "ad1.body": "精研 Web 现代标准，熟谙视觉交互体系与响应式工程规范，力求毫秒级响应与优雅排版：",
    "ad1.item1": "现代 HTML5 与语义化排印架构",
    "ad1.item2": "高级 CSS 架构与视觉复刻工程",
    "ad1.item3": "JavaScript (ESNext) 模块与交互状态",
    "ad1.item4": "跨端多屏自适应排版工程",

    "ad2.title": "【通告】系统工程与协同规范",
    "ad2.body": "遵循严谨软件工程规范，掌握现代协作工具流与持续交付体系，保障架构之稳固长青：",
    "ad2.item1": "Git 协同流水线与版本追溯",
    "ad2.item2": "RESTful 接口契约与数据集成",
    "ad2.item3": "Linux 环境运作与 Shell 自动化",
    "ad2.item4": "DevOps 敏捷交付与自动化工作流",

    "ad3.title": "【招贴】智能探索与前沿应用",
    "ad3.body": "持续跟踪人工智能与自主智能体前沿进展，将前瞻科技切实落地于解决现实复杂问题：",
    "ad3.item1": "LLM 智能体编排与工作流协调",
    "ad3.item2": "Prompt 架构工程与精准意图解析",
    "ad3.item3": "AI 辅助工程化与智能化流水线",

    // Telegram / Contact
    "telegram.title": "电报通信处 · 欢迎投递",
    "telegram.desc": "阁下如有项目合作之意向、技术工程之探讨，或愿就数字创新交换见解，本报通信处随时恭候您的来函与电报联络。",
    "telegram.btn.github": "查阅 GITHUB 档案库",

    // Colophon
    "colophon.imprint": "本纪事报由 Arnold (李东启) 监制并排印发行 · 深圳 · 赛博空间",
    "colophon.rights": "保留所有权利 · 基于经典新闻报纸排印美学构建"
  },

  en: {
    // Masthead & Ears
    "masthead.title": "THE ARNOLD CHRONICLE",
    "masthead.chinese": "阿诺德纪事报",
    "masthead.motto": "\"Dedicated to Digital Engineering, Craftsmanship & Enduring Aesthetics\"",
    "ear.tagline": "EST. IN CYBERSPACE · DAILY EDITION",
    "ear.weather": "WEATHER: FAIR SKIES OVER THE DIGITAL OCEAN",
    "ear.price": "PRICE: ONE CURIOSITY",
    "lang.label": "EDITION / 语言",

    // Issue Strip
    "strip.vol": "VOL. XXVI · NO. 10",
    "strip.edition": "SPECIAL DISPATCH · LATE CITY EDITION",
    "strip.location": "PUBLISHED AT: SHENZHEN / CYBERSPACE",
    "strip.circulation": "CIRCULATION: GRATIS & PUBLIC",

    // Depts Nav
    "nav.lead": "LEAD STORY",
    "nav.projects": "INVENTIONS",
    "nav.skills": "CLASSIFIEDS",
    "nav.contact": "TELEGRAPH",

    // Lead Story
    "lead.kicker": "SPECIAL DISPATCH · FRONT PAGE LEAD",
    "lead.headline": "EXTRA! ENGINEER ARNOLD CONVERGES CODE & TIMELESS AESTHETICS",
    "lead.subhead": "An inquiry into digital craftsmanship—forging fluid, humane experiences through rigorous system engineering",
    "lead.byline": "BY OUR SPECIAL CORRESPONDENT IN CYBERSPACE",
    "lead.p1": "<span class=\"drop-cap\">S</span>triving for digital experiences as tangible, grounded, and pure as fine printcraft. Arnold (Dongqi Li) focuses on modern web engineering, interaction architecture, and applied artificial intelligence, distilling intricate system logic into quiet, purposeful experiences.",
    "lead.p2": "In an era of relentless noise, every block of logic is approached as a typeset character placed upon the page. From micro-interactions to resilient full-stack systems, each detail is honed with patience and discipline.",

    // Side Box
    "editorial.title": "EDITORIAL OPINION",
    "editorial.content": "\"Restraint, clarity, and resilience against time. True design never stands between the reader and the idea; it serves as a truthful lens—much like century-old newsprint whose clarity remains undiminished by the patina of age.\"",
    "editorial.stamp": "★ OFFICIALLY VERIFIED ★",

    // Projects Section
    "projects.banner": "DISPATCHES & INVENTIONS",
    "p1.tag": "DISPATCH · VISUAL ARCHITECTURE",
    "p1.title": "Vintage Print Typography Engine",
    "p1.desc": "Exploring the revival of classic editorial design on the web, uniting multi-column newsprint grids with modern responsive fluid typography.",
    "p1.meta": "DISPATCH NO. DS-01",

    "p2.tag": "SPECIAL WIRE · INTELLIGENT SYSTEMS",
    "p2.title": "AI & Autonomous Agent Workflows",
    "p2.desc": "Synthesizing large language models and multi-agent coordination frameworks to construct resilient, autonomous task automation pipelines.",
    "p2.meta": "DISPATCH NO. AI-02",

    "p3.tag": "NOTICE · CRAFTED UTILITIES",
    "p3.title": "Minimalist Productivity Instruments",
    "p3.desc": "Discarding superfluous excess to forge sharp, high-speed utilities dedicated to cultivating creative flow and engineering momentum.",
    "p3.meta": "NOTICE NO. UT-03",

    // Classifieds
    "classifieds.title": "THE CLASSIFIED NOTICES & CAPABILITIES",
    "ad1.title": "WANTED: ELEGANT FRONTEND",
    "ad1.body": "Deep mastery of modern Web standards, responsive layout engineering, and respectful user micro-interactions:",
    "ad1.item1": "Semantic HTML5 & Print Typography Layouts",
    "ad1.item2": "Advanced CSS Grid & Visual Systems",
    "ad1.item3": "JavaScript (ESNext) State Architecture",
    "ad1.item4": "Cross-Platform Responsive Engineering",

    "ad2.title": "GUARANTEED: SOUND SYSTEMS",
    "ad2.body": "Committed to rigorous engineering practices, structured collaborative workflows, and sustainable architecture:",
    "ad2.item1": "Git Version Control & Revision Tracing",
    "ad2.item2": "RESTful API Integration & Protocols",
    "ad2.item3": "Linux Systems & Shell Automation",
    "ad2.item4": "DevOps & Continuous Delivery Pipelines",

    "ad3.title": "NOTICE: ARTIFICIAL INTELLIGENCE",
    "ad3.body": "Active explorer in frontier artificial intelligence, applying autonomous agents to solve real-world complexities:",
    "ad3.item1": "Agentic Frameworks & Coordination",
    "ad3.item2": "Prompt Architecture & Intent Parsing",
    "ad3.item3": "AI-Augmented Engineering Pipelines",

    // Telegram / Contact
    "telegram.title": "THE TELEGRAPH DESK · INQUIRIES",
    "telegram.desc": "Should you wish to initiate a collaboration, debate technical doctrines, or share visions of digital enterprise, the dispatch wire stands open.",
    "telegram.btn.github": "INSPECT GITHUB ARCHIVES",

    // Colophon
    "colophon.imprint": "Typeset & Published by Arnold (Dongqi Li) · Shenzhen · Cyberspace",
    "colophon.rights": "All Rights Reserved · Printed with Classic Editorial Spirit"
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
    ? "THE ARNOLD CHRONICLE | 阿诺德纪事报 - 个人主页"
    : "THE ARNOLD CHRONICLE | Personal Gazette of Arnold";
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
