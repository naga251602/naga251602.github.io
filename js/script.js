// --- 1. PORTFOLIO DATA (EDIT THIS TO ADD CONTENT) ---
const portfolioData = {
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gauravnv",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/naga251602",
      icon: "github",
    },
    {
      name: "Email",
      url: "mailto:nagalapu@usc.edu",
      icon: "mail",
    },
  ],
  education: [
    {
      school: "University of Southern California",
      years: "Jan 2025 - Dec 2026",
      degree: "M.S. Applied Data Science",
      details:
        "Relevant coursework includes Advanced Algorithms, Database Systems, Machine Learning, Cloud Computing, and Web Technologies.",
    },
    {
      school: "R.M.K. Engineering College, Anna University",
      years: "Aug 2020 - Apr 2024",
      degree: "B.Tech Information Technology",
      details:
        "Undergraduate training in computer science fundamentals, full-stack development, and applied machine learning.",
    },
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Brewed" },
    { value: "2", label: "Papers Published" },
    { value: "∞", label: "Coffee Consumed", color: "text-orange-500" },
  ],
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Aadithya Cars",
      date: "Apr 2024 – Nov 2024",
      location: "Chennai, India",
      desc: [
        "Reduced initial page load time by ~75% (3.2s → 800ms) by implementing lazy loading for images, maps, and non-critical UI components.",
        "Re-architected frontend data loading using chunk-based parallel fetches to avoid full in-memory ingestion, reducing memory pressure and improving time-to-first interaction.",
        "Improved frontend performance under high data volume by separating render-critical and non-critical execution paths.",
      ],
    },
    {
      role: "Research Assistant",
      company: "R.M.K Engineering College",
      date: "Sep 2023 – Apr 2024",
      location: "Hybrid",
      desc: [
        "Contributed to ML-driven applications under faculty supervision, supporting data ingestion, preprocessing pipelines, and backend integration.",
        "Implemented backend systems in Python integrating machine learning models for sentiment analysis, text generation, and medical image classification.",
        "Assisted with experimental evaluation and manuscript preparation, contributing to accepted IEEE conference publications.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Sawbon",
      date: "Feb 2022 – Feb 2022",
      location: "Remote",
      desc: [
        "Built server-rendered UI components using Remix.js and implemented Redis-based caching and session management, reducing API latency by ~15%.",
        "Developed concurrent RESTful APIs in Go backed by MongoDB using goroutines and connection pooling, achieving ~200ms response times under load.",
      ],
    },
  ],
  projects: [
    {
      id: "Sentinel",
      title: "Sentinel AIOps",
      tagline: "Unsupervised Failure Detection",
      date: "2025",
      icon: "shield-alert",
      color: "blue",
      desc: "Built an unsupervised AIOps system correlating metrics, logs, and traces to detect silent microservice failures, reducing simulated mean-time-to-detection (MTTD) by ~40%. Designed a Spark-based ETL pipeline to clean and align noisy observability data without label leakage.",
      tags: ["Python", "Spark", "PyTorch", "Docker"],
      features: [
        "Correlates metrics, logs, and traces",
        "Unsupervised anomaly detection using autoencoders",
        "Spark-based ETL pipeline for observability data",
        "Reduced simulated MTTD by ~40%",
      ],
      links: {
        code: "https://github.com/naga251602/sentinel-aiops",
      },
    },
    {
      id: "AIStora",
      title: "AIStora",
      tagline: "Natural-Language Analytics Platform",
      date: "2024",
      icon: "database",
      color: "purple",
      desc: "Enabled natural-language querying of CSV datasets, reducing report generation time from ~2 hours to ~5 minutes using a custom in-memory engine processing 100K+ rows at ~3× Pandas speed.",
      tags: ["Python", "Flask", "PostgreSQL", "Docker"],
      features: [
        "Natural-language CSV querying",
        "Custom query engine (~3× faster than Pandas)",
        "JWT-secured REST APIs",
        "CI/CD-driven deployments",
      ],
      links: {
        code: "https://github.com/naga251602/aistora",
      },
    },
    {
      id: "GraphQLAPI",
      title: "Task Management API",
      tagline: "High-Performance GraphQL Backend",
      date: "2023",
      icon: "server",
      color: "green",
      desc: "Designed a GraphQL API to address REST over-fetching, reducing payload size by ~60% and improving response time from ~200ms to ~80ms using Redis caching.",
      tags: ["GraphQL", "FastAPI", "Redis", "OAuth 2.0"],
      features: [
        "60% payload reduction",
        "Redis-backed caching (~80ms latency)",
        "OAuth 2.0 authentication",
        "Load-tested for 1000+ concurrent users",
      ],
      links: {
        code: "https://github.com/naga251602/todo-graphql",
      },
    },
  ],
  publications: [
    {
      title: "Human AI collaboration for backend text generation (DCR)",
      ref: "REF: ICCDS-2024",
      status: "Published!",
      color: "orange",
      citation:
        'G. N V, R. M, J. K. N and A. V. Lokesh, "Human AI Collaboration for Backend Text Generation: Dynamic Content Recommendation (DCR) for Websites Based on Keywords," 2024 International Conference on Computing and Data Science (ICCDS), Chennai, India, 2024, pp. 1-6, doi: 10.1109/ICCDS60734.2024.10560437.',
      notes: [
        {
          label: "Hypothesis",
          text: "AI-assisted drafts increase editor velocity by >30% in DCR systems.",
        },
        {
          label: "Result",
          text: "Confirmed. Contextual relevance maintained with significant time reduction.",
        },
      ],
      link: "https://ieeexplore.ieee.org/abstract/document/10560437",
      tags: ["AI", "NLP"],
    },
    {
      title: "Sentiment Analysis for Personalized Drug Recommendations",
      ref: "REF: ICCDS-2024",
      status: "BCI Study",
      color: "blue",
      citation:
        'A. Vijayaraj, V. P. Murugan, R. Jebakumar, G. NV, S. V and S. K. R, "A Sentimental Analysis Approach for Personalized Drug Recommendations Using Machine Learning," 2024 International Conference on Computing and Data Science (ICCDS), Chennai, India, 2024, pp. 1-6, doi: 10.1109/ICCDS60734.2024.10560460.',
      notes: [
        {
          label: "Focus",
          text: "Designing intuitive interfaces for brain-computer interaction to reduce cognitive load.",
        },
        {
          label: "Method",
          text: "Measured user trust levels vs. UI complexity in medical recommender engines.",
        },
      ],
      link: "https://ieeexplore.ieee.org/abstract/document/10560460",
      tags: ["ML", "Python"],
    },
  ],
  oss: [
    {
      title: "PrintStruct / Gitree",
      role: "Contributor",
      desc: "Refactored and reorganized project structure, removed code duplication, and enhanced README documentation for the Python CLI tool.",
      icon: "git-branch",
      color: "green",
      link: "https://github.com/ShahzaibAhmad05/gitree",
    },
    {
      title: "Mentorship",
      role: "Mentor",
      desc: "Teaching the next gen of devs at the bootcamp. Seeing that 'aha!' moment is the best caffeine hit.",
      icon: "users",
      color: "purple",
      link: "https://github.com/naga251602",
    },
    {
      title: "Creative Coding",
      role: "Creator",
      desc: "Experimenting with p5.js and Web Audio API. Turning logic into art on weekends!",
      icon: "palette",
      color: "pink",
      link: "https://github.com/naga251602",
    },
  ],
  shelfSkills: [
    { id: "python", name: "PYTHON", level: "90%" },
    {
      id: "fullstack",
      name: "FULLSTACK",
      level: "100%",
      color: "#ea580c",
      text: "text-orange-600",
    },
    {
      id: "data",
      name: "DATA",
      level: "85%",
      color: "#22c55e",
      text: "text-green-700",
    },
    {
      id: "cloud",
      name: "CLOUD",
      level: "70%",
      color: "#06b6d4",
      text: "text-cyan-700",
    },
    {
      id: "react",
      name: "REACT",
      level: "85%",
      color: "#6366f1",
      text: "text-indigo-700",
    },
    {
      id: "aws",
      name: "AWS",
      level: "60%",
      color: "#ec4899",
      text: "text-pink-700",
    },
    {
      id: "js",
      name: "JS",
      level: "90%",
      color: "#eab308",
      text: "text-yellow-700",
    },
    {
      id: "spark",
      name: "SPARK",
      level: "65%",
      color: "#e11d48",
      text: "text-rose-600",
    },
    {
      id: "tensorflow",
      name: "TF/KERAS",
      level: "75%",
      color: "#f97316",
      text: "text-orange-500",
    },
    {
      id: "postgres",
      name: "PSQL",
      level: "80%",
      color: "#3b82f6",
      text: "text-blue-800",
    },
  ],
  certifications: [
    {
      title: "Competitive Programming",
      issuer: "GeeksForGeeks",
      date: "Nov 2022",
      color: "green",
      icon: "terminal",
      tags: ["js", "python", "fullstack"],
    },
    {
      title: "Python Django",
      issuer: "Udemy",
      date: "Jan 2023",
      color: "blue",
      icon: "code",
      tags: ["python", "fullstack"],
    },
    {
      title: "Linear Algebra for ML",
      issuer: "LinkedIn",
      date: "Oct 2024",
      color: "purple",
      icon: "sigma",
      tags: ["data", "python"],
    },
    {
      title: "Complete Python Developer",
      issuer: "Udemy",
      date: "Oct 2024",
      color: "yellow",
      icon: "code",
      tags: ["python"],
    },
    {
      title: "Complete React Developer",
      issuer: "Udemy",
      date: "Nov 2021",
      color: "cyan",
      icon: "layout",
      tags: ["react", "fullstack", "js"],
    },
  ],
};

// --- 2. RENDERING FUNCTIONS ---

function renderSocials() {
  const container = document.getElementById("hero-socials");
  container.innerHTML = portfolioData.socials
    .map(
      (social) => `
        <a href="${social.url}" target="_blank" class="p-3 glass-card rounded-full hover:bg-[var(--card-hover)] transition-all hover:-translate-y-1 text-[var(--text-main)] group" aria-label="${social.name}">
            <i data-lucide="${social.icon}" class="w-5 h-5 group-hover:text-orange-500 transition-colors"></i>
        </a>
    `,
    )
    .join("");
}

function renderStats() {
  const container = document.getElementById("stats-container");
  container.innerHTML = portfolioData.stats
    .map(
      (stat) => `
        <div class="text-center pl-4 first:pl-0">
            <div class="text-3xl font-bold ${stat.color || "text-[var(--text-main)]"} mb-1">${stat.value}</div>
            <div class="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">${stat.label}</div>
        </div>
    `,
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-container");
  const primary = portfolioData.education[0];
  container.innerHTML = `
        <div class="p-4">
            <div class="flex justify-between items-start mb-1">
                <strong class="text-[var(--text-main)] text-sm">${primary.school}</strong>
                <span class="text-xs font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">${primary.years}</span>
            </div>
            <div class="text-xs text-[var(--text-main)] font-semibold mb-2">${primary.degree}</div>
            <div class="text-xs text-[var(--text-muted)] leading-relaxed mb-4">${primary.details}</div>
            
            <button onclick="openUndergradModal()" class="flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-white transition-colors group">
                View Undergraduate History 
                <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>
    `;
}

function openUndergradModal() {
  const undergrad = portfolioData.education[1];
  document.getElementById("skillModalTitle").innerText = "Undergraduate Degree";
  document.getElementById("skillContent").innerHTML = `
        <div class="glass-card p-6 rounded-xl border-l-4 border-l-orange-500 fade-in-up">
            <div class="flex justify-between items-start mb-2">
                <span class="text-[10px] font-mono text-[var(--text-muted)] uppercase">BACHELOR'S</span>
                <span class="text-xs font-mono text-orange-500">${undergrad.years}</span>
            </div>
            <h4 class="text-xl font-bold text-[var(--text-main)] mb-1">${undergrad.school}</h4>
            <p class="text-sm font-semibold text-[var(--text-muted)] mb-3">${undergrad.degree}</p>
            <p class="text-xs text-[var(--text-muted)] leading-relaxed">${undergrad.details}</p>
        </div>
    `;
  document.getElementById("skillModal").classList.remove("hidden");
  document.getElementById("skillModal").classList.add("flex");
}

function renderExperience() {
  const container = document.getElementById("experience-container");
  container.innerHTML = portfolioData.experience
    .map(
      (exp, index) => `
        <div class="relative flex flex-col experience-parallax ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between w-full group"
+      data-speed='${0.15 + index * 0.05}'>
            <div class="hidden md:block w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}">
                <div class="text-orange-500 font-mono text-sm">${exp.date}</div>
                <div class="text-[var(--text-muted)] text-xs mt-1">${exp.location}</div>
            </div>
            <div class="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[var(--bg-main)] border-2 border-orange-500 rounded-full z-10 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                <i data-lucide="bean" class="w-4 h-4 text-orange-500"></i>
            </div>
            <div class="w-full md:w-5/12 pl-8 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}">
                <div class="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                    <h4 class="text-xl font-bold text-[var(--text-main)] mb-1">${exp.role}</h4>
                    <div class="text-[var(--text-muted)] text-sm mb-4">${exp.company}</div>
                    <ul class="list-disc list-inside text-[var(--text-muted)] space-y-2 text-xs">
                        ${exp.desc.map((d) => `<li>${d}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function createProjectCard(project) {
  const colorMap = {
    orange: "#f97316",
    green: "#22c55e",
    purple: "#a855f7",
    blue: "#3b82f6",
    pink: "#ec4899",
  };
  const accentColor = colorMap[project.color] || "#f97316";

  // Icon rendering logic for card
  const iconContent =
    project.icon.length > 2
      ? `<i data-lucide="${project.icon}"></i>`
      : project.icon;

  return `
        <div onclick="openProjectDetail('${project.id}')" class="roast-card-premium group cursor-pointer" data-tags="${project.tags.join(",")}">
            <div class="roast-header bg-gradient-to-br from-stone-900 via-stone-800 to-${project.color}-900/50">
                <div class="roast-seal"></div>
                <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml;utf8,<svg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'><g fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\'><circle cx=\\'10\\' cy=\\'10\\' r=\\'1\\' /></g></svg>');"></div>
                <div class="absolute -right-4 -bottom-4 text-8xl text-white opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                    ${iconContent}
                </div>
            </div>
            <div class="roast-label">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-[10px] font-mono tracking-widest text-stone-500 uppercase border-b border-stone-200 pb-1">${project.date}</div>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-lg shadow-lg" style="background-color: ${accentColor}">${iconContent}</div>
                </div>
                <h4 class="text-2xl font-bold text-stone-900 leading-none mb-1 font-hand tracking-wide">${project.title}</h4>
                <div class="text-xs font-bold text-${project.color}-600 uppercase tracking-wider mb-3">${project.tagline}</div>
                <p class="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4 font-mono">${project.desc}</p>
                <div class="border-t border-stone-200 pt-3 flex flex-wrap gap-1">
                    ${project.tags
                      .slice(0, 3)
                      .map(
                        (tag) =>
                          `<span class="text-[9px] font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded uppercase">${tag}</span>`,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = portfolioData.projects
    .slice(0, 3)
    .map(createProjectCard)
    .join("");
}

// --- NEW FILTER LOGIC ---
function renderProjectFilters() {
  const allTags = new Set();
  portfolioData.projects.forEach((p) => p.tags.forEach((t) => allTags.add(t)));
  const tags = ["All", ...Array.from(allTags)];

  const container = document.getElementById("project-filters");
  container.innerHTML = tags
    .map(
      (tag) => `
        <button onclick="filterAllProjects('${tag}')" class="filter-pill px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${tag === "All" ? "active" : ""}">
            ${tag}
        </button>
    `,
    )
    .join("");
  container.classList.remove("hidden");
}

function filterAllProjects(filterTag) {
  // Update active pill
  document.querySelectorAll(".filter-pill").forEach((btn) => {
    if (btn.innerText.trim() === filterTag.toUpperCase())
      btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // Filter Projects
  const filtered =
    filterTag === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) =>
            p.tags.includes(filterTag) ||
            p.tags.some((t) => t.toUpperCase() === filterTag.toUpperCase()),
        ); // Case insensitive check just in case

  document.getElementById("all-projects-grid").innerHTML = filtered
    .map(createProjectCard)
    .join("");
  lucide.createIcons(); // Re-render icons for dynamic cards
}

function createPublicationCard(pub, index) {
  const rot = index % 2 === 0 ? "" : 'style="transform: rotate(1deg);"';
  const innerRot = index % 2 === 0 ? "rotate-3" : "-rotate-2";
  return `
        <div class="journal-notebook group cursor-pointer" ${rot}>
            <div class="coffee-stain"></div>
            <div class="flex justify-between items-start border-b border-dashed border-[var(--text-muted)] pb-4 mb-4">
                <span class="font-mono text-xs text-${pub.color}-500 bg-${pub.color}-500/10 px-2 py-1 rounded">${pub.ref}</span>
                <div class="font-hand text-xl text-[var(--text-muted)] ${innerRot}">${pub.status}</div>
            </div>
            <h3 class="font-bold text-xl mb-4 leading-tight font-serif">${pub.title}</h3>
            <div class="space-y-4 font-mono text-xs text-[var(--text-muted)]">
                ${pub.notes.map((note) => `<div><strong class="block text-[var(--text-main)] uppercase mb-1">${note.label}:</strong><p>${note.text}</p></div>`).join("")}
            </div>
            <div class="mt-6 pt-4 border-t border-[var(--glass-border)] flex justify-between items-center">
                <a href="${pub.link}" class="text-${pub.color}-500 font-bold text-sm flex items-center gap-2 group-hover:underline">Read Full Findings <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                <button onclick="openCiteModal('${pub.title}')" class="text-xs font-bold text-stone-500 flex items-center gap-1 hover:text-[var(--text-main)] transition-colors"><i data-lucide="quote" class="w-3 h-3"></i> Cite</button>
            </div>
        </div>
    `;
}

function renderPublications() {
  const container = document.getElementById("publications-container");
  container.innerHTML = portfolioData.publications
    .slice(0, 2)
    .map(createPublicationCard)
    .join("");
  document.getElementById("all-publications-grid").innerHTML =
    portfolioData.publications.map(createPublicationCard).join("");
}

function createOSSCard(oss, index) {
  const rot = index % 2 === 0 ? "-2deg" : "2deg";
  return `
            <div class="pin-card rounded-lg cursor-pointer hover:z-20 transition-all duration-300" style="transform: rotate(${rot});">
            <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-${oss.color}-100 rounded-full text-${oss.color}-600"><i data-lucide="${oss.icon}" class="w-5 h-5"></i></div>
                <h4 class="font-bold text-[var(--text-main)]">${oss.title}</h4>
            </div>
            <p class="text-xs font-mono text-[var(--text-muted)] mb-2 uppercase">${oss.role}</p>
            <p class="text-sm text-[var(--text-muted)] font-hand text-lg leading-snug mb-4">"${oss.desc}"</p>
            <div class="border-t border-[var(--glass-border)] pt-3 flex justify-between items-center">
                <span class="text-[10px] text-[var(--text-muted)] uppercase font-mono">Open Source</span>
                <a href="${oss.link}" target="_blank" class="text-xs font-bold text-${oss.color}-500 flex items-center gap-1 hover:underline">Read Code <i data-lucide="github" class="w-3 h-3"></i></a>
            </div>
        </div>
    `;
}

function renderOSS() {
  const container = document.getElementById("oss-container");
  container.innerHTML = portfolioData.oss.map(createOSSCard).join("");
  document.getElementById("all-oss-grid").innerHTML = portfolioData.oss
    .map(createOSSCard)
    .join("");
}

// Helper to create Jar HTML
function createJarHTML(skill) {
  return `
            <div onclick="openSkillModal('${skill.id}')" class="coffee-jar group flex-shrink-0">
            <div class="jar-lid"></div>
            <div class="bean-level" style="height: ${skill.level}; ${skill.color ? `background-color: ${skill.color};` : ""}"></div>
            <div class="jar-label ${skill.text || ""}">${skill.name}</div>
        </div>
    `;
}

function renderShelf() {
  const shelf = document.getElementById("skill-shelf");
  const items = [...portfolioData.shelfSkills, ...portfolioData.shelfSkills];
  shelf.innerHTML = items.map(createJarHTML).join("");
}

function renderContactForm() {
  const formHTML = `
        <div class="bg-[#fffbf0] text-stone-800 p-8 rounded-t-sm relative shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-lg mx-auto">
            <div class="absolute -top-2 left-0 w-full h-4 bg-[#fffbf0] clip-path-jagged"></div>
            <div class="text-center mb-8 border-b-2 border-stone-800 border-dashed pb-6">
                <h2 class="text-3xl font-bold font-mono tracking-tighter">THE COFFEE SHOP</h2>
                <p class="text-xs font-mono mt-1">LOS ANGELES, CA • EST 2024</p>
                <p class="text-xs font-mono mt-2">************************************</p>
                <h3 class="text-xl font-bold mt-4 font-mono">NEW ORDER TICKET</h3>
            </div>
            <form class="space-y-4">
                <div class="flex gap-4">
                    <div class="flex-1">
                        <label class="block text-[10px] font-bold font-mono mb-1">CUSTOMER</label>
                        <input type="text" class="w-full bg-transparent border-b-2 border-stone-300 p-2 text-sm font-mono focus:border-stone-800 outline-none placeholder-stone-400" placeholder="NAME">
                    </div>
                    <div class="flex-1">
                        <label class="block text-[10px] font-bold font-mono mb-1">CONTACT</label>
                        <input type="email" class="w-full bg-transparent border-b-2 border-stone-300 p-2 text-sm font-mono focus:border-stone-800 outline-none placeholder-stone-400" placeholder="EMAIL">
                    </div>
                </div>
                <div class="pt-4">
                    <label class="block text-[10px] font-bold font-mono mb-1">ORDER DETAILS</label>
                    <div class="relative">
                        <textarea class="w-full bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] bg-stone-100 border-2 border-stone-300 rounded p-4 text-sm font-mono focus:border-stone-800 outline-none h-32 leading-relaxed" placeholder="1x Scalable Web App..."></textarea>
                    </div>
                </div>
                <div class="pt-6 border-t-2 border-stone-800 border-dashed flex justify-between items-center">
                    <div class="text-xs font-mono">ITEM COUNT: 1</div>
                    <button class="bg-stone-900 text-white font-mono font-bold px-8 py-3 rounded hover:bg-orange-600 transition-colors shadow-lg">PRINT ORDER</button>
                </div>
            </form>
            <div class="mt-6 h-12 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-contain bg-center bg-no-repeat opacity-50 grayscale"></div>
        </div>
    `;
  const homeContainer = document.getElementById("contact-container-home");
  if (homeContainer) homeContainer.innerHTML = formHTML;
  const hireMeContainer = document.getElementById("contact-container-hire-me");
  if (hireMeContainer) hireMeContainer.innerHTML = formHTML;
}

// --- 3. PAGE LOGIC ---

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
}

function openAllWorks(section = "all") {
  const page = document.getElementById("all-works-page");
  const secProjects = document.getElementById("section-all-projects");
  const secPubs = document.getElementById("section-all-pubs");
  const secOss = document.getElementById("section-all-oss");
  const title = document.getElementById("all-works-title");

  // Reset visibility
  secProjects.classList.add("hidden");
  secPubs.classList.add("hidden");
  secOss.classList.add("hidden");
  document.getElementById("project-filters").classList.add("hidden");

  if (section === "projects") {
    secProjects.classList.remove("hidden");
    title.innerText = "All Projects";
    renderProjectFilters();
    filterAllProjects("All");
  } else if (section === "publications") {
    secPubs.classList.remove("hidden");
    title.innerText = "All Publications";
  } else if (section === "oss") {
    secOss.classList.remove("hidden");
    title.innerText = "Open Source";
  } else {
    // Default 'all'
    secProjects.classList.remove("hidden");
    secPubs.classList.remove("hidden");
    secOss.classList.remove("hidden");
    title.innerText = "All Works";
  }

  page.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeAllWorks() {
  document.getElementById("all-works-page").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openHireMe() {
  document.getElementById("hire-me-page").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeHireMe() {
  document.getElementById("hire-me-page").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openCiteModal(title) {
  const pub = portfolioData.publications.find((p) => p.title === title);
  if (pub && pub.citation) {
    document.getElementById("citeText").innerText = pub.citation;
    document.getElementById("citeModal").classList.remove("hidden");
    document.getElementById("citeModal").classList.add("flex");
  }
}

function closeCiteModal() {
  document.getElementById("citeModal").classList.add("hidden");
  document.getElementById("citeModal").classList.remove("flex");
}

function openProjectDetail(projectId) {
  const project = portfolioData.projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("project-page-title").innerText = project.title;
  document.getElementById("project-page-date").innerText = project.date;
  document.getElementById("project-page-tagline").innerText = project.tagline;
  document.getElementById("project-page-desc").innerText = project.desc;

  // Icon Handling for Full Screen View
  const iconEl = document.getElementById("project-page-icon");
  if (project.icon.length > 2) {
    iconEl.innerHTML = `<i data-lucide="${project.icon}"></i>`;
  } else {
    iconEl.innerText = project.icon;
  }

  document.getElementById("project-page-demo").href = project.links.demo;
  document.getElementById("project-page-code").href = project.links.code;

  // Removed Pill Tags Code Here

  document.getElementById("project-page-features").innerHTML = project.features
    ? project.features
        .map(
          (f) =>
            `<li class="flex items-start gap-2 text-lg text-stone-300"><i data-lucide="check" class="w-5 h-5 text-orange-500 mt-1"></i> ${f}</li>`,
        )
        .join("")
    : "";

  // Sidebar: Tech Stack Pills
  document.getElementById("project-page-stack-list").innerHTML = project.tags
    .map(
      (tag) =>
        `<span class="text-xs text-stone-400 border border-white/10 px-2 py-1 rounded bg-stone-900">${tag}</span>`,
    )
    .join("");

  // Code Snippet
  if (project.codeSnippet) {
    document.getElementById("project-page-code-block").innerText =
      project.codeSnippet;
  } else {
    document.getElementById("project-page-code-block").innerText =
      "// Code snippet not available.";
  }

  // Render Images if available
  const imageContainer = document.getElementById("project-page-images");
  if (project.images && project.images.length > 0) {
    imageContainer.innerHTML = project.images
      .map(
        (url) =>
          `<img src="${url}" alt="Project Screenshot" class="w-full rounded-xl border border-white/10 shadow-2xl">`,
      )
      .join("");
  } else {
    imageContainer.innerHTML = "";
  }

  // Project Skills Shelf
  // Filter global skills based on project tags roughly matching skill IDs or names
  const relevantSkills = portfolioData.shelfSkills.filter((s) =>
    project.tags.some(
      (t) =>
        t.toLowerCase().includes(s.id) ||
        t.toLowerCase() === s.name.toLowerCase(),
    ),
  );
  // If no match found, show generic set or empty. Let's show filtered or top 3 default
  const displaySkills =
    relevantSkills.length > 0
      ? relevantSkills
      : portfolioData.shelfSkills.slice(0, 3);

  document.getElementById("project-skill-shelf").innerHTML = displaySkills
    .map(createJarHTML)
    .join("");

  lucide.createIcons();
  document.getElementById("project-full-page").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Parallax Effect for Project Title
document
  .getElementById("project-full-page")
  .addEventListener("scroll", function () {
    const scrollY = this.scrollTop;
    const title = document.getElementById("project-page-title");
    if (title) {
      title.style.transform = `translateY(${scrollY * 0.4}px)`;
      title.style.opacity = 1 - scrollY / 500;
    }
  });

function closeProject() {
  document.getElementById("project-full-page").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Initial Render
window.onload = function () {
  renderSocials();
  renderStats();
  renderEducation();
  renderExperience();
  initExperienceParallax();

  renderProjects();
  renderPublications();
  renderOSS();
  renderShelf();
  renderContactForm();
  lucide.createIcons();
};

// --- SKILL MODALS ---
const skillsModalData = {
  python: {
    title: "Python & AI",
    items: [
      { type: "Cert", title: "Python Dev", subtitle: "Udemy" },
      { type: "Project", title: "PDF Filler", subtitle: "AI Agent" },
    ],
  },
  fullstack: {
    title: "Full Stack",
    items: [
      { type: "Cert", title: "React Master", subtitle: "Frontend" },
      { type: "Project", title: "GChat", subtitle: "Realtime App" },
    ],
  },
  data: {
    title: "Data Eng",
    items: [
      { type: "Cert", title: "SQL Master", subtitle: "Udemy" },
      { type: "Project", title: "NodeBlog", subtitle: "Postgres DB" },
    ],
  },
  cloud: {
    title: "Cloud",
    items: [
      { type: "Cert", title: "AWS CCP", subtitle: "In Progress" },
      { type: "Project", title: "Deploy Pipeline", subtitle: "Docker/K8s" },
    ],
  },
  react: {
    title: "React Ecosystem",
    items: [
      { type: "Lib", title: "Redux", subtitle: "State Mgmt" },
      { type: "Framework", title: "Next.js", subtitle: "SSR" },
    ],
  },
  aws: {
    title: "AWS Services",
    items: [
      { type: "Compute", title: "EC2 & Lambda", subtitle: "Serverless" },
      { type: "Storage", title: "S3", subtitle: "Object Store" },
    ],
  },
  js: {
    title: "JavaScript",
    items: [
      { type: "Core", title: "ES6+", subtitle: "Modern Syntax" },
      { type: "Runtime", title: "Node.js", subtitle: "Backend" },
    ],
  },
  next: {
    title: "Next.js",
    items: [
      { type: "Framework", title: "App Router", subtitle: "Routing" },
      { type: "Feature", title: "SSR/SSG", subtitle: "Rendering" },
    ],
  },
  firebase: {
    title: "Firebase",
    items: [
      { type: "DB", title: "Firestore", subtitle: "NoSQL" },
      { type: "Auth", title: "Authentication", subtitle: "Security" },
    ],
  },
  node: {
    title: "Node.js",
    items: [
      { type: "Runtime", title: "Event Loop", subtitle: "Async" },
      { type: "Framework", title: "Express", subtitle: "API" },
    ],
  },
  postgres: {
    title: "PostgreSQL",
    items: [
      { type: "DB", title: "Relational", subtitle: "SQL" },
      { type: "ORM", title: "Prisma", subtitle: "Schema" },
    ],
  },
};

function openSkillModal(key) {
  const d = skillsModalData[key];
  if (!d) return; // Silent fail if no data
  document.getElementById("skillModalTitle").innerText = d.title;
  document.getElementById("skillContent").innerHTML = d.items
    .map(
      (item, i) => `
        <div class="glass-card p-4 rounded-xl border-l-4 border-l-orange-500" style="animation: fadeInUp 0.3s ease forwards ${i * 0.1}s; opacity: 0; transform: translateY(10px);">
            <span class="text-[10px] font-mono text-[var(--text-muted)] uppercase">${item.type}</span>
            <h4 class="font-bold text-[var(--text-main)]">${item.title}</h4>
            <p class="text-xs text-[var(--text-muted)]">${item.subtitle}</p>
        </div>
    `,
    )
    .join("");
  document.getElementById("skillModal").classList.remove("hidden");
  document.getElementById("skillModal").classList.add("flex");
}
function closeSkillModal() {
  document.getElementById("skillModal").classList.add("hidden");
  document.getElementById("skillModal").classList.remove("flex");
}

const modal = document.getElementById("roadmapModal");
const viewport = document.getElementById("mapViewport");
const nodesContainer = document.getElementById("nodesContainer");
const svgLayer = document.getElementById("connectionsLayer");
const mapData = {
  fullstack: {
    title: "Full Stack Journey",
    steps: [
      {
        x: 200,
        y: 600,
        title: "The Origin",
        icon: "code-2",
        projects: ["Vanilla JS Games"],
      },
      {
        x: 600,
        y: 400,
        title: "Frontend Core",
        icon: "layout",
        projects: ["GChat"],
      },
      {
        x: 1000,
        y: 700,
        title: "Backend Roast",
        icon: "layers",
        projects: ["NodeBlog"],
      },
      {
        x: 1400,
        y: 300,
        title: "Database Blend",
        icon: "database",
        projects: ["Supabase Integration"],
      },
      {
        x: 1800,
        y: 600,
        title: "Deployment",
        icon: "coffee",
        projects: ["Cloud Deployments"],
      },
    ],
  },
  datascience: {
    title: "Data Science",
    steps: [
      {
        x: 200,
        y: 500,
        title: "Python & Math",
        icon: "binary",
        projects: ["NumPy/Pandas"],
      },
      {
        x: 600,
        y: 800,
        title: "Analytics",
        icon: "bar-chart-3",
        projects: ["EDA Dashboards"],
      },
      {
        x: 1000,
        y: 400,
        title: "Machine Learning",
        icon: "brain-circuit",
        projects: ["Regression Models"],
      },
      {
        x: 1400,
        y: 700,
        title: "Deep Learning",
        icon: "cpu",
        projects: ["Neural Networks"],
      },
      {
        x: 1800,
        y: 500,
        title: "Production (MLOps)",
        icon: "container",
        projects: ["Model Serving"],
      },
    ],
  },
};

// ... existing drag logic for map ...
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

viewport.addEventListener("mousedown", (e) => {
  isDragging = true;
  viewport.classList.add("grabbing");
  startX = e.pageX - viewport.offsetLeft;
  startY = e.pageY - viewport.offsetTop;
  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
});

viewport.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - viewport.offsetLeft;
  startY = e.touches[0].pageY - viewport.offsetTop;
  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
});

viewport.addEventListener("mouseleave", () => {
  isDragging = false;
});
viewport.addEventListener("mouseup", () => {
  isDragging = false;
});
viewport.addEventListener("touchend", () => {
  isDragging = false;
});

viewport.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - viewport.offsetLeft;
  const y = e.pageY - viewport.offsetTop;
  const walkX = (x - startX) * 1.5;
  const walkY = (y - startY) * 1.5;
  viewport.scrollLeft = scrollLeft - walkX;
  viewport.scrollTop = scrollTop - walkY;
});

viewport.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - viewport.offsetLeft;
  const y = e.touches[0].pageY - viewport.offsetTop;
  const walkX = (x - startX) * 1.5;
  const walkY = (y - startY) * 1.5;
  viewport.scrollLeft = scrollLeft - walkX;
  viewport.scrollTop = scrollTop - walkY;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.1, root: viewport },
);

function openMap(type) {
  const info = mapData[type];
  document.getElementById("modalCategory").innerText =
    type === "fullstack" ? "Full Stack Developer" : "Data Scientist";
  document.getElementById("modalTitle").innerText = info.title;

  nodesContainer.innerHTML = "";
  svgLayer.innerHTML =
    '<defs><linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#451a03;stop-opacity:1" /><stop offset="50%" style="stop-color:#f97316;stop-opacity:1" /><stop offset="100%" style="stop-color:#451a03;stop-opacity:1" /></linearGradient></defs>';

  let previousNode = null;

  info.steps.forEach((step, index) => {
    const nodeEl = document.createElement("div");
    nodeEl.className =
      "skill-node glass-card p-5 rounded-xl border-l-4 border-l-orange-500 flex items-center gap-4 bg-stone-950/50";
    nodeEl.style.left = `${step.x}px`;
    nodeEl.style.top = `${step.y}px`;
    nodeEl.innerHTML = `
            <div class="w-10 h-10 rounded-lg bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
                <i data-lucide="${step.icon}" class="${step.color || "text-orange-500"} w-5 h-5"></i>
            </div>
            <div>
                <div class="text-sm font-bold text-white">${step.title}</div>
            </div>
        `;
    nodesContainer.appendChild(nodeEl);
    observer.observe(nodeEl);

    if (previousNode) {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      const startX = previousNode.x + 300;
      const startY = previousNode.y + 40;
      const endX = step.x;
      const endY = step.y + 40;
      const d = `M ${startX} ${startY} C ${startX + 150} ${startY}, ${endX - 150} ${endY}, ${endX} ${endY}`;
      path.setAttribute("d", d);
      path.setAttribute("class", "connector-path");
      svgLayer.appendChild(path);
      setTimeout(() => path.classList.add("drawn"), index * 300);
    }
    step.projects.forEach((proj, pIndex) => {
      const leafX = step.x + 150 + (pIndex % 2 === 0 ? 50 : -50);
      const leafY = step.y + (pIndex % 2 === 0 ? -120 : 120);

      const leafLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      leafLine.setAttribute(
        "d",
        `M ${step.x + 150} ${step.y + 40} Q ${step.x + 150} ${leafY}, ${leafX} ${leafY}`,
      );
      leafLine.setAttribute("class", "leaf-connector");
      svgLayer.appendChild(leafLine);

      const leafEl = document.createElement("div");
      leafEl.className =
        "leaf-node glass-panel px-3 py-1.5 rounded-full text-xs text-stone-300 border border-white/10 shadow-lg hover:text-white transition-colors";
      leafEl.style.left = `${leafX - 40}px`;
      leafEl.style.top = `${leafY - 15}px`;
      leafEl.style.animationDelay = `${Math.random() * 2}s`;

      // Interaction Logic
      leafEl.onclick = function () {
        // Check if this leaf matches a "real" project ID
        const pid = portfolioData.projects.find(
          (p) => p.title === proj || p.id === proj,
        )?.id;

        if (pid) {
          openProjectDetail(pid); // Open Full View
        } else {
          // Fallback: Use the small modal for roadmap-only items (restoring "pop-up" feel)
          // Note: If you want to use a fallback modal, ensure the HTML for 'projectModal' exists or handle it gracefully.
          // Currently alerting for demonstration as the fallback modal HTML was removed in the unified view.
          console.log("Project milestone:", proj);
        }
      };

      leafEl.innerHTML = `<i data-lucide="folder-git" class="inline w-3 h-3 mr-1 text-orange-400"></i> ${proj}`;
      nodesContainer.appendChild(leafEl);
      observer.observe(leafEl);
    });
    previousNode = step;
  });
  lucide.createIcons();
  modal.classList.remove("hidden");
  viewport.scrollLeft = 0;
  viewport.scrollTop = 200;
}
function closeMap() {
  modal.classList.add("hidden");
}

// --- EXPERIENCE PARALLAX SCROLL ---
function initExperienceParallax() {
  const items = document.querySelectorAll(".experience-parallax");
  if (!items.length) return;

  const onScroll = () => {
    const vh = window.innerHeight;

    items.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0.2");
      const rect = el.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > vh) return;

      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;

      const y = progress * speed * 140;
      const scale = 1 - Math.abs(progress) * 0.05;

      el.style.transform = `
        translate3d(0, ${y}px, 0)
        scale(${Math.max(scale, 0.95)})
      `;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}
