// --- DYNAMIC SKILLS & META RENDERER ---
const skillsConfig = {
  Languages: [
    { name: "Python", icon: "devicon-python-plain", level: 95 },
    { name: "Go", icon: "devicon-go-plain", level: 85 },
    { name: "C++", icon: "devicon-cplusplus-plain", level: 80 },
    { name: "C", icon: "devicon-c-plain", level: 75 },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: 90 },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: 85 },
    { name: "SQL", icon: "devicon-sqldeveloper-plain", level: 90 },
  ],
  Backend: [
    { name: "FastAPI", icon: "devicon-fastapi-plain", level: 90 },
    {
      name: "Flask",
      icon: "devicon-flask-original dark:invert",
      level: 85,
    },
    { name: "Node.js", icon: "devicon-nodejs-plain", level: 80 },
    { name: "GraphQL", icon: "devicon-graphql-plain", level: 85 },
    { name: "REST APIs", isLucide: true, icon: "braces", level: 95 },
    { name: "WebSockets", isLucide: true, icon: "zap", level: 80 },
    { name: "JWT", isLucide: true, icon: "shield", level: 85 },
  ],
  Frontend: [
    { name: "React", icon: "devicon-react-original", level: 90 },
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain dark:invert",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      level: 90,
    },
    { name: "HTML/CSS", icon: "devicon-html5-plain", level: 95 },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 85 },
    { name: "MongoDB", icon: "devicon-mongodb-plain", level: 80 },
    { name: "Redis", icon: "devicon-redis-plain", level: 85 },
    { name: "SQLite", icon: "devicon-sqlite-plain", level: 80 },
  ],
  Infrastructure: [
    { name: "Docker", icon: "devicon-docker-plain", level: 85 },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: 70 },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain-wordmark dark:invert",
      level: 80,
    },
    {
      name: "GitHub Actions",
      icon: "devicon-githubactions-plain dark:invert",
      level: 85,
    },
    { name: "Linux", icon: "devicon-linux-plain dark:invert", level: 90 },
    { name: "Nginx", icon: "devicon-nginx-original", level: 80 },
  ],
  "ML / Data": [
    { name: "PyTorch", icon: "devicon-pytorch-plain", level: 80 },
    {
      name: "Pandas",
      icon: "devicon-pandas-plain dark:invert",
      level: 90,
    },
    {
      name: "scikit-learn",
      icon: "devicon-scikitlearn-plain",
      level: 85,
    },
    { name: "NumPy", icon: "devicon-numpy-plain", level: 90 },
    { name: "BERT", isLucide: true, icon: "brain", level: 80 },
    { name: "DenseNet", isLucide: true, icon: "network", level: 80 },
  ],
  Core: [
    { name: "System Design", isLucide: true, icon: "layers", level: 85 },
    {
      name: "Concurrency",
      isLucide: true,
      icon: "git-branch",
      level: 90,
    },
    {
      name: "Data Structures",
      isLucide: true,
      icon: "database",
      level: 95,
    },
    { name: "Algorithms", isLucide: true, icon: "cpu", level: 95 },
  ],
};

// Build mapping for fast lookups
const skillMetaMap = {};
for (const [cat, arr] of Object.entries(skillsConfig)) {
  arr.forEach((s) => (skillMetaMap[s.name] = s));
}

// Fallback attributes for skills in stacks not explicitly listed above
const fallbackSkills = {
  "System Architecture": {
    name: "System Architecture",
    isLucide: true,
    icon: "layers",
    level: 85,
  },
  NLP: { name: "NLP", isLucide: true, icon: "message-square", level: 80 },
  "Scikit-learn": {
    name: "Scikit-learn",
    icon: "devicon-scikitlearn-plain",
    level: 85,
  },
  "Computer Vision": {
    name: "Computer Vision",
    isLucide: true,
    icon: "eye",
    level: 80,
  },
  "Open Source": {
    name: "Open Source",
    isLucide: true,
    icon: "globe",
    level: 85,
  },
  GPT: { name: "GPT", isLucide: true, icon: "bot", level: 85 },
};
Object.assign(skillMetaMap, fallbackSkills);

function getSkillPillHtml(skillName, showFill = false) {
  let meta = skillMetaMap[skillName];
  if (!meta) {
    meta = { name: skillName, isLucide: true, icon: "code", level: 75 }; // Default
  }

  const iconHtml = meta.isLucide
    ? `<i data-lucide="${meta.icon}" class="w-3.5 h-3.5 relative z-10 pointer-events-none"></i>`
    : `<i class="${meta.icon} text-sm relative z-10 transition-transform group-hover:scale-110 pointer-events-none"></i>`;

  const fillHtml = showFill
    ? `<div class="absolute left-0 top-0 bottom-0 skill-fill-bg transition-opacity duration-300 opacity-[0.65] group-hover:opacity-100 pointer-events-none" style="width: ${meta.level}%;"></div>`
    : "";

  const titleAttr = showFill ? `title="Skill Level: ${meta.level}%"` : "";

  return `
            <span 
              class="interactive relative overflow-hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-border rounded-md text-xs font-mono bg-bg text-fg hover:border-fg transition-all cursor-none group" 
              onclick="event.stopPropagation(); openSkillDrawer('${meta.name}')"
              ${titleAttr}
            >
              ${fillHtml}
              ${iconHtml}
              <span class="relative z-10 font-medium tracking-tight pointer-events-none">${meta.name}</span>
            </span>
          `;
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  for (const [category, skillsArr] of Object.entries(skillsConfig)) {
    let categoryHtml = `
            <div class="stagger-item">
              <span class="block text-muted mb-4 font-mono text-xs uppercase tracking-wider">${category}</span>
              <div class="flex flex-wrap gap-2.5">
          `;

    skillsArr.forEach((skill) => {
      categoryHtml += getSkillPillHtml(skill.name, true); // Show fill for main skills section
    });

    categoryHtml += `</div></div>`;
    container.innerHTML += categoryHtml;
  }
}

// Initialize auto-skill-containers on main page blocks
document.querySelectorAll(".auto-skill-container").forEach((el) => {
  const skills = el.getAttribute("data-skills").split(",");
  el.innerHTML = skills.map((s) => getSkillPillHtml(s.trim(), false)).join(""); // No fill
});

renderSkills();
lucide.createIcons();

// Mobile / Touch Device Check
const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
};

// Theme Management
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  htmlElement.classList.add("dark");
  themeIcon.setAttribute("data-lucide", "sun");
} else {
  htmlElement.classList.remove("dark");
  themeIcon.setAttribute("data-lucide", "moon");
}
lucide.createIcons();

themeToggleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  const isDark = htmlElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
  lucide.createIcons();
});

// Mobile Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => mobileMenu.classList.remove("opacity-0"), 10);
  } else {
    mobileMenu.classList.add("opacity-0");
    setTimeout(() => mobileMenu.classList.add("hidden"), 200);
  }
}
mobileBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", toggleMenu));

// Active Scroll Sync
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#desktop-nav a");
window.addEventListener("scroll", () => {
  let current = "";
  const scrollPos = window.scrollY + 200;
  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.clientHeight
    ) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("text-fg");
    link.classList.add("text-muted");
    if (link.getAttribute("href").includes(current) && current !== "") {
      link.classList.remove("text-muted");
      link.classList.add("text-fg");
    }
  });
});

// --- ANIMATIONS & INTERACTIONS ---

// Custom Cursor Logic (Disabled on mobile)
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");
let mouseX = 0,
  mouseY = 0,
  outlineX = 0,
  outlineY = 0;

if (!isTouchDevice()) {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(calc(-50% + ${mouseX}px), calc(-50% + ${mouseY}px))`;
  });

  const animateCursor = () => {
    outlineX += (mouseX - outlineX) * 0.2;
    outlineY += (mouseY - outlineY) * 0.2;
    cursorOutline.style.transform = `translate(calc(-50% + ${outlineX}px), calc(-50% + ${outlineY}px))`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
} else {
  document
    .querySelectorAll(".custom-cursor")
    .forEach((el) => (el.style.display = "none"));
}

const attachHoverListeners = () => {
  if (isTouchDevice()) return;
  document
    .querySelectorAll(".interactive, a, button, input, textarea")
    .forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("hovering"),
      );
    });
};
attachHoverListeners();

// Magnetic Hover (Disabled on mobile)
if (!isTouchDevice()) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const position = el.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0px, 0px)";
      el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    });
    el.addEventListener("mouseenter", () => {
      el.style.transition = "none";
    });
  });
}

// Intersection Observer (Scroll Animation)
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
document.querySelectorAll(".fade-up, .stagger-parent").forEach((el) => {
  revealObserver.observe(el);
});

// Show Toast Utility
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.remove("opacity-0");
  setTimeout(() => toast.classList.add("opacity-0"), 3000);
}

// Citation Copy Logic
function copyCitation(id) {
  const citations = {
    human_ai: `@inproceedings{venkataramanan2024humanai,\n  title={Human-AI Collaboration for Backend Text Generation: Dynamic Content Recommendation for Websites based on Keywords},\n  booktitle={ICCDS 2024},\n  year={2024}\n}`,
    iccds2024: `@inproceedings{venkataramanan2024sentiment,\n  title={Sentiment-Based Drug Recommendation System},\n  booktitle={ICCDS 2024},\n  year={2024}\n}`,
    iccn2024: `@inproceedings{venkataramanan2024pneumonia,\n  title={Automated Pneumonia Detection using DenseNet},\n  booktitle={ICCN 2024},\n  year={2024}\n}`,
  };
  const textArea = document.createElement("textarea");
  textArea.value = citations[id] || "";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  showToast("Copied to clipboard.");
}

// --- CONTACT FORM LOGIC ---
const contactForm = document.getElementById("contact-form");
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  formData.append("access_key", "4052b6f0-8f89-4c08-abdc-c476148d70e6");

  const originalHtml = submitBtn.innerHTML;

  submitBtn.innerHTML =
    'Sending... <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>';
  lucide.createIcons();
  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-50", "cursor-wait");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      showToast("Success! Your message has been sent.");
      contactForm.reset();
    } else {
      showToast("Error: " + data.message);
    }
  } catch (error) {
    showToast("Something went wrong. Please try again.");
  } finally {
    submitBtn.innerHTML = originalHtml;
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-50", "cursor-wait");
    lucide.createIcons();
  }
});

// --- CENTRAL DATASTORE ---
const detailsData = {
  project: {
    aistora: {
      title: "AIStora | Full-Stack Analytics Platform",
      subtitle: "Project",
      description:
        "<p>Architected an in-memory columnar query engine in Python processing 100K+ row datasets with sub-second filtering, grouping, and aggregation outperforming naive pandas by 3x on benchmarks.</p><br/><p>Exposed functionality via Flask REST APIs with JWT auth and RBAC, supporting secure multi-tenant querying with per-user schema isolation backed by PostgreSQL. Containerized all microservices with Docker Compose and automated CI/CD via GitHub Actions, maintaining 85% test coverage.</p><br/><p>Built a React dashboard with real-time chart rendering using Recharts, enabling non-technical users to query and visualize large datasets without SQL knowledge.</p>",
      stack: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Docker",
        "React",
        "GitHub Actions",
      ],
      link: "https://github.com/naga251602/aistora",
      linkText: "Repository",
      linkIcon: "github",
      visual: `PostgreSQL Database<br/>↓<br/>Flask API & Columnar Engine<br/>↓<br/>React Dashboard`,
      screenshots: [],
    },
    graphql: {
      title: "GraphQL Task Management API",
      subtitle: "Project",
      description:
        "<p>Designed a schema-first GraphQL API using FastAPI and Strawberry, eliminating REST over-fetching and reducing average payload size by 60% on deeply nested task/subtask queries.</p><br/><p>Integrated Redis DataLoader batching and OAuth 2.0 PKCE flow supporting 1000+ concurrent WebSocket connections at sub-100ms p99 latency under load testing. Implemented cursor-based pagination, query complexity limits, and depth restrictions to prevent abuse and ensure stable performance at scale.</p>",
      stack: [
        "FastAPI",
        "GraphQL",
        "Redis",
        "Python",
        "OAuth 2.0",
        "WebSockets",
      ],
      link: "https://github.com/naga251602/todo-graphql",
      linkText: "Repository",
      linkIcon: "github",
      visual: "",
      screenshots: [],
    },
    gblog: {
      title: "GBlog | Static Blogging Platform",
      subtitle: "Project",
      description:
        "<p>Built a Next.js SSG platform with Incremental Static Regeneration and automatic image optimization, achieving 95+ Lighthouse score on mobile and desktop audits.</p><br/><p>Implemented a custom AVL tree search index over post metadata, improving tag/category lookup from O(n) to O(log n) with automatic rebalancing on content updates. Deployed to Vercel with preview environments per branch and automated Lighthouse CI checks on every pull request.</p>",
      stack: ["Next.js", "React", "Data Structures", "TypeScript"],
      link: "https://github.com/naga251602/gblog",
      linkText: "Repository",
      linkIcon: "github",
      visual: "",
      screenshots: [],
    },
  },
  experience: {
    aadithya: {
      title: "Full Stack Developer",
      subtitle: "Aadithya Cars • Apr 2024 - Nov 2024",
      description: `<ul class="list-disc pl-4 space-y-2">
                <li>Overhauled frontend pipeline cutting load time from 3.2s to 800ms (75% improvement) via lazy loading, code splitting, and asset compression &mdash; directly improving Core Web Vitals.</li>
                <li>Designed a chunk-based server-side ingestion pipeline replacing monolithic full-memory reads, eliminating OOM crashes on large inventory datasets and enabling 4x throughput.</li>
                <li>Refactored render-critical JavaScript paths by decoupling layout recalculation from DOM writes, reducing time-to-interactive by 40% across high-traffic listing pages.</li>
                <li>Integrated third-party valuation and financing APIs with retry logic and circuit breaker patterns, maintaining 99.5% uptime under upstream instability.</li>
              </ul>`,
      stack: ["JavaScript", "React", "Node.js", "System Architecture"],
      link: "",
      linkText: "",
      visual: "",
    },
    rmk_ra: {
      title: "Research Assistant",
      subtitle: "R.M.K Engineering College • Sep 2023 - Apr 2024",
      description: `<ul class="list-disc pl-4 space-y-2">
                <li>Contributed to the development of ML-driven applications under faculty supervision, supporting data ingestion, preprocessing pipelines, and backend integration.</li>
                <li>Implemented backend systems in Python integrating machine learning models for sentiment analysis, text generation, and medical image classification.</li>
                <li>Assisted in experimental evaluation, result analysis, and manuscript preparation, contributing to accepted IEEE conference publications.</li>
              </ul>`,
      stack: ["Python", "Machine Learning", "NLP", "Computer Vision"],
      link: "",
      linkText: "",
      visual: "",
    },
    sawbon: {
      title: "Software Development Intern",
      subtitle: "SAWBON • Feb 2022",
      description: `<ul class="list-disc pl-4 space-y-2">
                <li>Built a suite of concurrent Go REST APIs using goroutines, channels, and connection pooling, sustaining sub-250ms p95 response times under load with zero downtime.</li>
                <li>Implemented a Redis cache-aside strategy with TTL-based invalidation, reducing downstream DB read load by 30% and cutting median API latency by 15%.</li>
                <li>Wrote unit and integration tests using Go's testing package, achieving 78% code coverage on critical service paths.</li>
              </ul>`,
      stack: ["Go", "Redis", "REST APIs", "Concurrency"],
      link: "",
      linkText: "",
      visual: "",
    },
  },
  publication: {
    human_ai: {
      title:
        "Human-AI Collaboration for Backend Text Generation: Dynamic Content Recommendation for Websites based on Keywords",
      subtitle: "ICCDS 2024 | Citations: 4",
      description:
        "<p>Co-developed a keyword-driven content recommendation engine leveraging GPT-based AI pipelines to dynamically generate and personalize backend website copy, reducing manual authoring time by 60%.</p><br/><p>Evaluated system output quality against human-authored baselines through user studies with 40+ participants measuring coherence, relevance, and preference scores.</p>",
      stack: ["Python", "NLP", "GPT"],
      link: "https://ieeexplore.ieee.org/abstract/document/10560437",
      linkText: "Read Paper",
      linkIcon: "file-text",
      visual: "",
    },
    iccds2024: {
      title: "Sentiment-Based Drug Recommendation System",
      subtitle: "ICCDS 2024 | Citations: 3",
      description:
        "<p>Co-developed an NLP pipeline using fine-tuned BERT on domain-specific patient review corpora to classify sentiment and generate ranked drug recommendations at 88% classification accuracy.</p><br/><p>Evaluated against TF-IDF and LSTM baselines, demonstrating a 12-point F1 improvement from transfer learning with biomedical pretraining. The study establishes robust methodologies for deriving therapeutic efficacy insights from unstructured patient testimonials.</p>",
      stack: ["Python", "NLP", "BERT"],
      link: "https://www.researchgate.net/profile/Shai-Kumar/publication/394529865_A_Sentimental_Analysis_Approach_for_Personalized_Drug_Recommendations_Using_Machine_Learning/links/68a335762c7d3e0029b14b90/A-Sentimental-Analysis-Approach-for-Personalized-Drug-Recommendations-Using-Machine-Learning.pdf",
      linkText: "Read Paper",
      linkIcon: "file-text",
      visual: "",
    },
    iccn2024: {
      title: "Automated Pneumonia Detection using DenseNet",
      subtitle: "ICCN 2024",
      description:
        "<p>Co-trained DenseNet-121 on the CheXpert chest X-ray dataset with augmentation and class-weighting to handle label imbalance, achieving 92% precision-recall AUC on the held-out test set.</p><br/><p>Benchmarked against ResNet-50 and VGG-16; DenseNet outperformed by 6% AUC via dense skip connections enabling richer feature reuse across layers.</p>",
      stack: ["Python", "Computer Vision", "PyTorch", "DenseNet"],
      link: "https://link.springer.com/chapter/10.1007/978-981-96-6124-4_8",
      linkText: "Read Paper",
      linkIcon: "file-text",
      visual: "",
    },
  },
  other: {
    printstruct: {
      title: "Contributor — PrintStruct",
      subtitle: "Open Source",
      description:
        "<p>Contributed to PrintStruct, a Python CLI tool on PyPI that visualizes project directory structures while respecting .gitignore rules.</p><br/><p>Refactored project structure for clarity, eliminated code duplication to reduce technical debt, and improved README documentation to lower barrier for new contributors.</p>",
      stack: ["Python", "Open Source"],
      link: "https://pypi.org/project/PrintStruct/",
      linkText: "PyPI Package",
      linkIcon: "package",
    },
    imagine_cup: {
      title: "Microsoft Imagine Cup",
      subtitle: "Hackathon / Competition",
      description:
        "<p>Built a collaborative platform connecting researchers, doctors, and patients to share medical reports and treatment knowledge for rare disease research.</p>",
      stack: ["React", "Node.js", "MongoDB"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    shell_ai: {
      title: "Shell.ai Hackathon: EV Charging Challenge",
      subtitle: "Hackathon / Competition",
      description:
        "<p>Optimized an EV charging network topology to remain robust under demographic shifts and meet dynamic customer demand.</p>",
      stack: ["Python", "Pandas", "Algorithms"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    smart_india: {
      title: "Smart India Hackathon",
      subtitle: "Hackathon / Competition",
      description:
        "<p>Developed an AI/ML-integrated e-learning portal for children, combining adaptive content delivery with modern machine learning algorithms.</p>",
      stack: ["Machine Learning", "Python"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    cert_python: {
      title: "The Complete Python Developer",
      subtitle: "Certification",
      description:
        "<p>Comprehensive Udemy certification covering Python programming, testing, structure, and applications.</p>",
      stack: ["Python"],
      link: "https://www.udemy.com/certificate/UC-c23117b4-83ba-4b34-97ea-4bf9f3d96519/",
      linkText: "View Credential",
      linkIcon: "award",
    },
    cert_sql: {
      title: "SQL Masterclass: Beginner to Developer",
      subtitle: "Certification",
      description:
        "<p>Advanced Udemy certification for database management and querying optimizations using SQL.</p>",
      stack: ["SQL", "PostgreSQL"],
      link: "https://www.udemy.com/certificate/UC-b0d5fd8b-6986-4c12-8470-f06d6762500f/",
      linkText: "View Credential",
      linkIcon: "award",
    },
    cert_ml: {
      title: "Machine Learning Foundations: Linear Algebra",
      subtitle: "Certification",
      description:
        "<p>LinkedIn Learning certification on the core mathematical foundations of AI algorithms.</p>",
      stack: ["Machine Learning"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    cert_react: {
      title: "Complete React Developer 2022",
      subtitle: "Certification",
      description:
        "<p>Comprehensive certification covering modern React features, state management, and ecosystem.</p>",
      stack: ["React"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    cert_cp: {
      title: "Competitive Programming — Live",
      subtitle: "Coding Platform",
      description:
        "<p>GeeksForGeeks certification for advanced algorithms and data structure implementations.</p>",
      stack: ["Algorithms", "Data Structures"],
      link: "https://www.geeksforgeeks.org/certificate/9354614c6c49cc68c6dc158d4bd783bd",
      linkText: "View Credential",
      linkIcon: "code",
    },
    award_paper: {
      title: "Best Paper Presentation — 3rd Place",
      subtitle: "Achievement",
      description:
        "<p>Awarded at the 2024 International Conference on Computing and Data Science for the paper 'Human-AI Collaboration for Backend Text Generation'.</p>",
      stack: [],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
  },
};

// --- DRAWER LOGIC ---
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawer-overlay");

// Scroll logic for the Drawer (Actions moving to the header)
function handleDrawerScroll(el) {
  const actions = document.getElementById("drawer-actions");
  const headerActions = document.getElementById("drawer-header-actions");

  if (el.scrollTop > 50) {
    headerActions.classList.remove("opacity-0", "pointer-events-none");
    if (actions) actions.classList.add("opacity-0", "pointer-events-none");
  } else {
    headerActions.classList.add("opacity-0", "pointer-events-none");
    if (actions) actions.classList.remove("opacity-0", "pointer-events-none");
  }
}

function openDrawerUI() {
  drawerOverlay.classList.remove("hidden");
  void drawerOverlay.offsetWidth;
  drawerOverlay.classList.remove("opacity-0");
  drawer.classList.remove("translate-y-full");
  document.body.style.overflow = "hidden";
  // Reset scroll and action visibilities
  document.getElementById("drawer-scroll-container").scrollTop = 0;
  document
    .getElementById("drawer-header-actions")
    .classList.add("opacity-0", "pointer-events-none");
  if (document.getElementById("drawer-actions")) {
    document
      .getElementById("drawer-actions")
      .classList.remove("opacity-0", "pointer-events-none");
  }
  attachHoverListeners();
}

function closeDrawer() {
  drawer.classList.add("translate-y-full");
  drawerOverlay.classList.add("opacity-0");
  setTimeout(() => {
    drawerOverlay.classList.add("hidden");
    if (!document.querySelector(".modal-view:not(.hidden)")) {
      document.body.style.overflow = "";
    }
  }, 300);
}

function openDetails(type, id) {
  const data = detailsData[type]?.[id];
  if (!data) return;

  document.getElementById("drawer-category").innerText = data.subtitle;

  let titleContent = data.title;
  if (type === "project") {
    titleContent += ` <i data-lucide="arrow-up-right" class="w-5 h-5 text-muted"></i>`;
  }
  document.getElementById("drawer-title").innerHTML = titleContent;
  document.getElementById("drawer-description").innerHTML = data.description;

  // Visuals
  const visContainer = document.getElementById("drawer-visual-container");
  if (data.visual) {
    visContainer.classList.remove("hidden");
    document.getElementById("drawer-visual").innerHTML = data.visual;
  } else {
    visContainer.classList.add("hidden");
  }

  // Screenshots
  const screenshotsContainer = document.getElementById(
    "drawer-screenshots-container",
  );
  const screenshotsBox = document.getElementById("drawer-screenshots");
  screenshotsBox.innerHTML = "";
  if (data.screenshots && data.screenshots.length > 0) {
    screenshotsContainer.classList.remove("hidden");
    data.screenshots.forEach((src) => {
      screenshotsBox.innerHTML += `<img src="${src}" class="w-full h-auto rounded-md border border-border bg-hoverBg" alt="Screenshot" />`;
    });
  } else {
    screenshotsContainer.classList.add("hidden");
  }

  // Stack
  const stackContainer = document.getElementById("drawer-stack-container");
  const stackBox = document.getElementById("drawer-stack");
  stackBox.innerHTML = "";
  if (data.stack?.length) {
    stackContainer.classList.remove("hidden");
    data.stack.forEach((t) => {
      stackBox.innerHTML += getSkillPillHtml(t, false); // No fill in drawer
    });
  } else {
    stackContainer.classList.add("hidden");
  }

  // Actions
  const actionsContainer = document.getElementById("drawer-actions");
  const headerActionsContainer = document.getElementById(
    "drawer-header-actions",
  );
  actionsContainer.innerHTML = "";
  headerActionsContainer.innerHTML = "";

  if (data.link) {
    const linkIcon = data.linkIcon || "external-link";
    actionsContainer.innerHTML = `
                <a href="${data.link}" target="_blank" class="interactive cursor-none inline-flex items-center gap-2 px-4 py-2 bg-fg text-bg hover:opacity-85 transition-opacity font-medium text-sm rounded-md shadow-sm">
                    <i data-lucide="${linkIcon}" class="w-4 h-4"></i> ${data.linkText}
                </a>
            `;
    headerActionsContainer.innerHTML = `
                <a href="${data.link}" target="_blank" class="interactive cursor-none p-1.5 border border-border rounded-md hover:bg-fg hover:text-bg transition-colors" title="${data.linkText}">
                    <i data-lucide="${linkIcon}" class="w-4 h-4"></i>
                </a>
            `;
  }
  lucide.createIcons();
  openDrawerUI();
}

// Intersection Skill logic
function openSkillDrawer(skill) {
  document.getElementById("drawer-category").innerText = "Skill Filter";
  document.getElementById("drawer-title").innerText = skill;
  document.getElementById("drawer-actions").innerHTML = "";
  document.getElementById("drawer-header-actions").innerHTML = "";

  let contentHTML = "";

  // Find matches helper
  const renderMatches = (typeDict, typeName, typeKey) => {
    const matches = Object.entries(typeDict || {}).filter(
      ([k, v]) => v.stack && v.stack.includes(skill),
    );
    if (matches.length) {
      contentHTML += `<div class="mb-6"><h4 class="font-mono text-xs text-muted uppercase tracking-widest mb-3">${typeName}</h4><div class="flex flex-col gap-2">`;
      matches.forEach(([k, v]) => {
        contentHTML += `<button onclick="openDetails('${typeKey}', '${k}')" class="text-left p-4 border border-border rounded-md hover:bg-hoverBg transition-colors interactive cursor-none"><h5 class="font-medium text-fg">${v.title}</h5></button>`;
      });
      contentHTML += `</div></div>`;
    }
  };

  renderMatches(detailsData.project, "Projects", "project");
  renderMatches(detailsData.publication, "Publications", "publication");
  renderMatches(detailsData.other, "Others", "other");

  // Fallback checks for soft matching
  if (!contentHTML) {
    const softMatches = Object.entries(detailsData.other || {}).filter(
      ([k, v]) => v.title.includes(skill),
    );
    if (softMatches.length) {
      contentHTML += `<div class="mb-6"><h4 class="font-mono text-xs text-muted uppercase tracking-widest mb-3">Others</h4><div class="flex flex-col gap-2">`;
      softMatches.forEach(([k, v]) => {
        contentHTML += `<button onclick="openDetails('other', '${k}')" class="text-left p-4 border border-border rounded-md hover:bg-hoverBg transition-colors interactive cursor-none"><h5 class="font-medium text-fg">${v.title}</h5></button>`;
      });
      contentHTML += `</div></div>`;
    }
  }

  if (!contentHTML)
    contentHTML = `<p class='text-muted text-sm'>No explicit items logged for ${skill} yet.</p>`;

  document.getElementById("drawer-description").innerHTML = contentHTML;

  // Hide specifics
  document.getElementById("drawer-visual-container").classList.add("hidden");
  document.getElementById("drawer-stack-container").classList.add("hidden");
  document
    .getElementById("drawer-screenshots-container")
    .classList.add("hidden");

  openDrawerUI();
}

// --- FULL SCREEN MODALS & ACCORDION LOGIC ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  void modal.offsetWidth; // Force a reflow
  modal.classList.remove("opacity-0");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    // Check if any other modal is still open before resetting overflow
    if (
      !document.querySelector(".modal-view:not(.hidden)") &&
      drawerOverlay.classList.contains("hidden")
    ) {
      document.body.style.overflow = "";
    }
  }, 300);
}

function closeAllModals() {
  document.querySelectorAll(".modal-view").forEach((m) => closeModal(m.id));
  closeDrawer();
}

// Generic Full Screen List Renderer (For Projects, Publications, Others)
function renderFullScreenList(type, containerId, filterContainerId) {
  const items = Object.entries(detailsData[type] || {});
  const container = document.getElementById(containerId);
  const filterContainer = document.getElementById(filterContainerId);

  if (!container || !filterContainer) return;

  // Extract unique skills
  const allSkills = new Set();
  items.forEach(([k, v]) => {
    if (v.stack) v.stack.forEach((s) => allSkills.add(s));
  });

  // Render Filters
  filterContainer.innerHTML = `<button onclick="filterList('${containerId}', 'all', this)" class="filter-btn active interactive cursor-none px-4 py-1.5 border border-border rounded-full text-xs font-mono bg-fg text-bg hover:opacity-85 transition-colors shadow-sm">All</button>`;

  Array.from(allSkills)
    .sort()
    .forEach((skill) => {
      filterContainer.innerHTML += `<button onclick="filterList('${containerId}', '${skill}', this)" class="filter-btn interactive cursor-none px-4 py-1.5 border border-border rounded-full text-xs font-mono bg-hoverBg text-fg hover:bg-fg hover:text-bg transition-colors">${skill}</button>`;
    });

  // Render Items
  container.innerHTML = "";
  items.forEach(([id, data]) => {
    const skillsData = (data.stack || []).join(",");

    let titleHtml = `<h3 class="text-lg font-medium text-fg group-hover:underline mb-2">${data.title}</h3>`;
    let extraHtml = "";
    let badgeHtml = "";

    if (type === "project") {
      titleHtml = `<h3 class="text-lg font-medium text-fg group-hover:underline mb-2 flex items-center gap-1.5">${data.title} <i data-lucide="arrow-up-right" class="w-4 h-4 text-muted group-hover:text-fg transition-colors"></i></h3>`;
    } else if (type === "publication") {
      extraHtml = `
                    <div class="flex justify-end mt-4 pointer-events-auto relative z-20">
                        <button class="interactive cursor-none text-muted hover:text-fg font-mono text-xs uppercase tracking-wider transition-colors border border-border px-3 py-1.5 rounded-md hover:bg-hoverBg shadow-sm" onclick="event.stopPropagation(); copyCitation('${id}')">Cite</button>
                    </div>`;
    } else if (type === "other") {
      badgeHtml = `<span class="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded-sm uppercase tracking-widest bg-bg mb-2 inline-block">${data.subtitle}</span>`;
    }

    container.innerHTML += `
              <div class="group interactive cursor-none border-b border-border py-8 list-item-hover px-4 -mx-4 filterable-item relative flex flex-col" data-skills="${skillsData}" onclick="openDetails('${type}', '${id}')">
                  ${badgeHtml}
                  ${titleHtml}
                  <p class="text-sm text-muted line-clamp-2 pr-8 mb-5 pointer-events-none">${data.description.replace(/<[^>]*>?/gm, "")}</p>
                  <div class="flex flex-wrap gap-2 relative z-20">
                    ${(data.stack || [])
                      .slice(0, 4)
                      .map((s) => getSkillPillHtml(s, false))
                      .join("")} <!-- No fill in lists -->
                  </div>
                  ${extraHtml}
              </div>
              `;
  });
  attachHoverListeners();
}

function filterList(containerId, skill, btnElement) {
  const filterContainer = btnElement.parentElement;
  filterContainer.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("bg-fg", "text-bg", "shadow-sm");
    btn.classList.add("bg-hoverBg", "text-fg");
  });
  btnElement.classList.remove("bg-hoverBg", "text-fg");
  btnElement.classList.add("bg-fg", "text-bg", "shadow-sm");

  const items = document
    .getElementById(containerId)
    .querySelectorAll(".filterable-item");
  items.forEach((item) => {
    if (skill === "all" || item.dataset.skills.split(",").includes(skill)) {
      item.style.display = "flex"; // maintain flex for internal layout
    } else {
      item.style.display = "none";
    }
  });
}

// Initialize lists
renderFullScreenList(
  "project",
  "projects-list-container",
  "projects-filter-container",
);
renderFullScreenList(
  "publication",
  "publications-list-container",
  "publications-filter-container",
);
renderFullScreenList(
  "other",
  "others-list-container",
  "others-filter-container",
);

// Accordion toggle logic for Education section
document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".accordion-icon");

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      content.classList.remove("hidden");
      icon.classList.remove("rotate-180");
    }
  });
});
