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
    "masthead.motto": "“Know Thyself —— 探寻数理本真，构建智能系统与量化工程”",
    "ear.tagline": "数据科学 · AI 全栈 · 量化工程 · 理论物理",
    "ear.weather": "当前状态：在职探索 · 积极寻求 AI 与量化交易领域从业机会",
    "ear.price": "开源开放 · 欢迎交流",
    "lang.label": "语言版本 / EDITION",

    // Issue Strip
    "strip.vol": "2026 年度特刊",
    "strip.edition": "个人技术主页 · 完整版",
    "strip.location": "中国 · 北京",
    "strip.circulation": "面向全球研究者与工程师开放",

    // Depts Nav
    "nav.lead": "个人特写",
    "nav.projects": "核心研发",
    "nav.books": "研读典籍",
    "nav.skills": "专业能力",
    "nav.contact": "联系交流",

    // Lead Story
    "lead.kicker": "【特写】数据科学 · AI 全栈 · 量化探索",
    "lead.headline": "探索者 Arnold：跨越数据科学、AI 全栈工程与量化世界的数理实践",
    "lead.subhead": "以认知心理学为洞察视角，以理论物理与数学为严密底座，专注构建鲁棒的量化与自演化智能系统",
    "lead.byline": "Arnold (李东启) · 北京",
    "lead.p1": "<span class=\"drop-cap\">我</span>是一名专注于数据科学与 AI 全栈开发的工程师，同时是量化交易与理论物理的长期思考与实践者。Arnold（李东启），常驻北京。拥有南开大学社会心理学学士及中国科学院大学（中科院心理所）硕士的交叉学科背景。致力于将认知科学对人类决策行为的深刻洞察、严谨的数学物理逻辑与扎实的现代软件系统工程熔炼一体，在不确定的复杂数据浪潮中构建真正具有鲁棒性的智能与量化体系。",
    "lead.p2": "目前处于在职探索状态，积极寻求 AI 领域与量化交易（Quantitative Trading）领域的深度从业与合作机会。信奉古希腊神谕的古老箴言 “Know Thyself”（认识你自己）。从微观认知决策到宏观市场博弈，从严密的量化方法论防线到自主进化的 AI 智能体架构，始终注重在细节中沉淀品质，以长期主义追求知行合一。",

    // Side Box
    "editorial.title": "核心信条 · Core Motto",
    "editorial.content": "“Know Thyself（认识你自己）。理论物理探求自然规律，量化工程度量市场波动，智能架构拟合复杂认知。一切探索的起点与归宿，都在于对自我能力边界的清醒洞察与对客观世界的敬畏。”",
    "editorial.stamp": "★ BEIJING · 2026 ★",

    // Academic Box
    "academic.title": "学术渊源 · ACADEMIC LINEAGE",
    "academic.grad": "🎓 硕士：中国科学院大学 / 心理研究所",
    "academic.undergrad": "🎓 学士：南开大学 · 社会心理学系",
    "academic.focus": "🔭 交叉：认知决策 · 复杂系统 · 数理逻辑",

    // Projects Section
    "projects.banner": "核心研发与战略规划",
    "p1.tag": "量化工程 · 投研闭环",
    "p1.title": "个人量化交易策略研究系统",
    "p1.desc": "构建高鲁棒性的端到端量化投研闭环系统。集成多源高频/日级行情清洗管道、时序特征挖掘分析、向量化与事件驱动混合回测引擎，以及动态仓位风控模型。",
    "p1.meta": "规划方向：投研系统架构自研",

    "p2.tag": "方法论守门 · 统计防御",
    "p2.title": "量化投研正确性与防过拟合 SKILL 套件",
    "p2.desc": "针对量化策略研发全流程的方法论防御套件。系统性规避前视偏差（Lookahead Bias）、幸存者偏差与多重假设检验数据陷阱，内置组合对称交叉验证（CSCV）与假发现率（FDR）控制，从工程与统计源头保证 Alpha 的真实性。",
    "p2.meta": "规划方向：量化研究规范工程化",

    "p3.tag": "前沿智能 · 自主演化",
    "p3.title": "零知识自演化 AI 智能体体系",
    "p3.desc": "探索极小先验经验依赖下的智能体自主迭代进化机制。基于环境交互反馈、动态反思评估（Self-Reflection）与自适应提示词/策略生成网络，实现智能体在不确定环境中的认知自洽与行为演进。",
    "p3.meta": "规划方向：自主进化智能系统",
    "dispatch.read": "筹备研发中 · IN PROGRESS",

    // Curated Readings / Literature
    "readings.title": "研读典籍与跨学科文献",
    "b1.tag": "量化金融 · 统计方法论",
    "b1.title": "《Advances in Financial Machine Learning》",
    "b1.author": "Marcos López de Prado 著",
    "b1.desc": "现代量化金融机器学习的权威指南。从微结构特征工程、分数阶差分、组合对称交叉验证（CSCV）到特征重要性聚类，为量化策略严防过拟合提供了坚不可摧的方法论武器。",

    "b2.tag": "理论物理 · 基础数理",
    "b2.title": "《The Theoretical Minimum》",
    "b2.author": "Leonard Susskind & George Hrabovsky 著",
    "b2.desc": "斯坦福大学理论物理巨擘的极简讲义。剥离繁冗细枝，直击经典力学、拉格朗日量、哈密顿量与对称守恒定律的数学本质，是通往理论物理最严谨直接的思想阶梯。",

    "b3.tag": "认知科学 · 行为决策",
    "b3.title": "《Thinking, Fast and Slow》",
    "b3.author": "Daniel Kahneman 著（诺贝尔经济学奖得主）",
    "b3.desc": "行为经济学与社会心理学的巅峰之作。深刻剖析系统 1（直觉启发式）与系统 2（理性逻辑）在不确定性风险下的认知偏差，是洞察金融市场非理性博弈与智能决策机制的奠基经典。",

    // Classifieds
    "classifieds.title": "核心技术栈与专业能力",
    "ad1.title": "数据科学与算法建模",
    "ad1.body": "具备坚实的数理统计基础，熟练运用主流数据科学生态与算法工具进行深度探索：",
    "ad1.item1": "Python 数据科学生态（NumPy, Pandas, SciPy, Scikit-learn）",
    "ad1.item2": "时间序列分析、特征工程构建与统计推断",
    "ad1.item3": "深度学习与机器学习模型训练（PyTorch 生态）",
    "ad1.item4": "探索性数据分析（EDA）与高可解释性数据可视化",

    "ad2.title": "AI 全栈开发与系统工程",
    "ad2.body": "具备端到端全栈工程构建能力，保障系统从算法原型到生产环境的高可靠运行：",
    "ad2.item1": "大语言模型（LLM）API 接入、Agent 编排与 RAG 系统设计",
    "ad2.item2": "现代 Web 全栈工程与异步高性能服务架构",
    "ad2.item3": "RESTful 接口规范、数据库持久化与数据流处理",
    "ad2.item4": "Linux 服务器环境运维、Git 协同规范与自动化工作流",

    "ad3.title": "量化探索与理论物理素养",
    "ad3.body": "跨学科理论视角赋能工程实践，保持对复杂金融市场与自然法则的钻研：",
    "ad3.item1": "多因子选股模型、量化交易策略构思与历史回测",
    "ad3.item2": "统计套利逻辑、风险敞口控制与量化绩效评估",
    "ad3.item3": "微积分、线性代数、动力学与理论物理数理逻辑",
    "ad3.item4": "严谨的科学假设验证与数据驱动决策范式",

    // Telegram / Contact
    "telegram.title": "保持联络 · 欢迎交流与合作",
    "telegram.desc": "常驻北京。目前积极关注并寻求 AI 领域与量化交易领域的职业机遇与研究合作。如果您有契合的岗位机会、前沿项目探讨或跨学科交流意向，欢迎通过邮件直接联络。",
    "telegram.btn.email": "发送邮件 · seagle3173@outlook.com",
    "telegram.btn.github": "访问 GitHub 个人主页",

    // Colophon
    "colophon.imprint": "由 Arnold (李东启) 维护并发布 · 中国 · 北京",
    "colophon.rights": "保留所有权利 · 融合经典报刊排印美学与现代技术工程"
  },

  en: {
    // Masthead & Ears
    "masthead.title": "THE ARNOLD CHRONICLE",
    "masthead.chinese": "阿诺德技术纪事",
    "masthead.motto": "\"Know Thyself — Exploring fundamental principles across intelligence, markets, and physics.\"",
    "ear.tagline": "DATA SCIENCE · AI FULLSTACK · QUANT RESEARCH · THEORETICAL PHYSICS",
    "ear.weather": "STATUS: OPEN TO OPPORTUNITIES IN AI & QUANT TRADING",
    "ear.price": "OPEN ACCESS · COLLABORATION WELCOME",
    "lang.label": "EDITION / 语言",

    // Issue Strip
    "strip.vol": "EDITION 2026",
    "strip.edition": "PORTFOLIO & RESEARCH NOTES",
    "strip.location": "BEIJING, CHINA",
    "strip.circulation": "OPEN FOR COLLABORATION",

    // Depts Nav
    "nav.lead": "PROFILE",
    "nav.projects": "PROJECTS",
    "nav.books": "READINGS",
    "nav.skills": "SKILLS",
    "nav.contact": "CONTACT",

    // Lead Story
    "lead.kicker": "FEATURED · DATA SCIENCE & INTELLIGENCE",
    "lead.headline": "ARNOLD (DONGQI LI): BRIDGING DATA SCIENCE, AI FULLSTACK & QUANTITATIVE EXPLORATION",
    "lead.subhead": "Informed by cognitive psychology, grounded in mathematical physics, engineering resilient quantitative systems and autonomous agents",
    "lead.byline": "BY ARNOLD (DONGQI LI) · BEIJING",
    "lead.p1": "<span class=\"drop-cap\">I</span> am a Data Scientist and AI Fullstack Engineer, and an ardent researcher in Quantitative Trading and Theoretical Physics. Based in Beijing, China. With an interdisciplinary foundation holding a B.S. in Social Psychology from Nankai University and an M.S. from the Institute of Psychology, Chinese Academy of Sciences (UCAS), I synthesize cognitive science insights into human decision-making with rigorous mathematical-physical thinking and modern software engineering, forging resilient intelligence and quantitative systems.",
    "lead.p2": "Currently exploring career and research opportunities in frontier AI and Quantitative Trading. Living by the Delphic maxim \"Know thyself\", I focus on bridging deep methodology and engineering execution—from multi-factor signal robustness and anti-overfitting defense to zero-knowledge self-evolving agent architectures.",

    // Side Box
    "editorial.title": "CORE MOTTO & PHILOSOPHY",
    "editorial.content": "\"Know Thyself. Theoretical physics decodes natural laws, quantitative engineering navigates market dynamics, and intelligent architectures model human cognition. The beginning and end of all true inquiry lies in an honest appraisal of our own boundaries and a deep respect for objective truth.\"",
    "editorial.stamp": "★ BEIJING · 2026 ★",

    // Academic Box
    "academic.title": "ACADEMIC LINEAGE",
    "academic.grad": "🎓 M.S.: University of Chinese Academy of Sciences (CAS)",
    "academic.undergrad": "🎓 B.S.: Nankai University · Social Psychology",
    "academic.focus": "🔭 Focus: Cognitive Decision-Making & Complex Systems",

    // Projects Section
    "projects.banner": "CORE RESEARCH & ROADMAP",
    "p1.tag": "QUANTITATIVE TRADING · PLATFORM",
    "p1.title": "Personal Quantitative Strategy Research System",
    "p1.desc": "End-to-end quantitative trading research system integrating multi-source market data pipelines, time-series signal generation, hybrid backtesting engines, and dynamic risk management.",
    "p1.meta": "FOCUS: FULL-CYCLE QUANT PLATFORM",

    "p2.tag": "METHODOLOGY & VALIDATION · TOOLING",
    "p2.title": "Quantitative Soundness & Anti-Overfitting SKILL Suite",
    "p2.desc": "A defensive methodological suite for quantitative research designed to eliminate lookahead bias, selection bias, and data mining traps using Combinatorial Purged CV and FDR controls.",
    "p2.meta": "FOCUS: RESEARCH RIGOR & SOUNDNESS",

    "p3.tag": "FRONTIER AI · AUTONOMOUS AGENTS",
    "p3.title": "Zero-Knowledge Self-Evolving AI Agent Architecture",
    "p3.desc": "Autonomous agent evolution framework minimizing prior domain assumptions, leveraging dynamic reflection, environment feedback, and adaptive policy synthesis.",
    "p3.meta": "FOCUS: SELF-EVOLVING AGENTS",
    "dispatch.read": "IN PROGRESS · COMING SOON",

    // Curated Readings / Literature
    "readings.title": "CURATED LITERATURE & ESSENTIAL READINGS",
    "b1.tag": "QUANT FINANCE & METHODOLOGY",
    "b1.title": "\"Advances in Financial Machine Learning\"",
    "b1.author": "By Marcos López de Prado",
    "b1.desc": "The gold standard for financial machine learning, providing rigorous protocols for fractional differentiation, purged cross-validation, and avoiding backtest overfitting.",

    "b2.tag": "THEORETICAL PHYSICS & RIGOR",
    "b2.title": "\"The Theoretical Minimum\"",
    "b2.author": "By Leonard Susskind & George Hrabovsky",
    "b2.desc": "Stanford theoretical physics masterwork distilling classical mechanics, Lagrangian & Hamiltonian dynamics, and conservation symmetries to their mathematical essentials.",

    "b3.tag": "COGNITIVE SCIENCE & DECISION MAKING",
    "b3.title": "\"Thinking, Fast and Slow\"",
    "b3.author": "By Daniel Kahneman (Nobel Laureate)",
    "b3.desc": "The seminal cornerstone bridging cognitive psychology and behavioral finance, exploring heuristic biases under uncertainty and informing market dynamics.",

    // Classifieds
    "classifieds.title": "CORE SKILLS & TECHNICAL DOMAINS",
    "ad1.title": "Data Science & Modeling",
    "ad1.body": "Deep foundation in applied mathematics and probability, proficient in the modern data science stack:",
    "ad1.item1": "Python Scientific Stack (NumPy, Pandas, SciPy, Scikit-learn)",
    "ad1.item2": "Time-Series Modeling, Feature Engineering & Statistical Inference",
    "ad1.item3": "Deep Learning & Machine Learning Pipelines (PyTorch)",
    "ad1.item4": "Exploratory Data Analysis (EDA) & High-Clarity Visualizations",

    "ad2.title": "AI Fullstack & Systems",
    "ad2.body": "End-to-end fullstack engineering capability from algorithmic prototyping to production deployments:",
    "ad2.item1": "LLM API Integration, Agentic Orchestration & RAG Systems",
    "ad2.item2": "Modern Web Fullstack & High-Performance Asynchronous Services",
    "ad2.item3": "RESTful APIs, Database Persistence & Scalable Data Pipelines",
    "ad2.item4": "Linux Environments, Git Workflow Governance & CI/CD Pipelines",

    "ad3.title": "Quant & Mathematical Foundations",
    "ad3.body": "Interdisciplinary rigor applied to financial markets and computational logic:",
    "ad3.item1": "Multi-Factor Strategies, Signal Analysis & Historical Backtesting",
    "ad3.item2": "Statistical Arbitrage & Risk-Adjusted Performance Evaluation",
    "ad3.item3": "Calculus, Linear Algebra, Dynamical Systems & Theoretical Physics",
    "ad3.item4": "Scientific Hypothesis Testing & Rigorous Data-Driven Paradigms",

    // Telegram / Contact
    "telegram.title": "GET IN TOUCH · LET'S CONNECT",
    "telegram.desc": "Based in Beijing. Open to career opportunities and collaborative research in AI and Quantitative Trading. If you have an exciting role, project, or intellectual discussion in mind, feel free to drop an email.",
    "telegram.btn.email": "SEND EMAIL · seagle3173@outlook.com",
    "telegram.btn.github": "VISIT GITHUB PROFILE",

    // Colophon
    "colophon.imprint": "Published by Arnold (Dongqi Li) · Beijing, China",
    "colophon.rights": "All Rights Reserved · Blending Classic Editorial Design with Modern Engineering"
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
    ? "THE ARNOLD CHRONICLE | Arnold (李东启) · 数据科学 / AI 全栈 / 量化工程"
    : "THE ARNOLD CHRONICLE | Arnold (Dongqi Li) · Data Science & AI & Quant";
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
