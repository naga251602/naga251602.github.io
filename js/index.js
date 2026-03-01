// ============================================================
// CENTRAL DATA STORE
// ============================================================

const detailsData = {
  project: {
    aistora: {
      title: "AIStora | Full-Stack Analytics Platform",
      subtitle: "Project",
      featured: true,
      isNew: false,
      description:
        "<p>Architected an in-memory columnar query engine in Python processing 100K+ row datasets with sub-second filtering, grouping, and aggregation outperforming naive pandas by 3x on benchmarks.</p><br/><p>Exposed functionality via Flask REST APIs with JWT auth and RBAC, supporting secure multi-tenant querying with per-user schema isolation backed by PostgreSQL. Containerized all microservices with Docker Compose and automated CI/CD via GitHub Actions, maintaining 85% test coverage.</p><br/><p>Built a React dashboard with real-time chart rendering using Recharts, enabling non-technical users to query and visualize large datasets without SQL knowledge.</p>",
      stack: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Docker",
        "GitHub Actions",
        "Tailwind CSS",
        "JWT",
      ],
      link: "https://github.com/naga251602/aistora",
      linkText: "Repository",
      linkIcon: "github",
      visual: `PostgreSQL Database<br/>↓<br/>Flask API & Columnar Engine<br/>↓<br/>React Dashboard`,
      screenshots: ["./resources/demo_aistora.gif"],
    },
    ipl_predictor: {
      title: "Deep Neural Net IPL Predictor | Multi-Modal Win Forecasting",
      subtitle: "Project",
      featured: false,
      isNew: true,
      description:
        "<p>Built a multi-modal deep learning framework for IPL match outcome prediction achieving 80% test accuracy on 2025 IPL matches, integrating performance data from 13 cricket competitions across 235 players using league-quality weighting and recency decay.</p><br/><p>Designed a Dynamic OVR rating system (55-97 scale) with phase-specific scores for batting positions (Top Order, Middle, Finisher) and bowling phases (Powerplay, Middle, Death), feeding a 4-source weighted attention transformer with learnable fusion weights.</p><br/><p>Enhanced predictions with a 2-layer Graph Attention Network modeling batter-bowler confrontation asymmetries, combined with a 10,000-iteration Monte Carlo simulation engine yielding a Brier score of 0.24. Deployed as a production Flask API with SHAP explainability and sub-2-second latency.</p>",
      stack: [
        "Python",
        "PyTorch",
        "Flask",
        "Graph Attention Networks",
        "Monte Carlo Simulation",
        "React",
      ],
      link: "https://github.com/Nikhilr-28/Deep-Neural-Network-IPL-Prediction",
      linkText: "Repository",
      linkIcon: "github",
      visual: `13-League Data Pipeline<br/>&#8595;<br/>Dynamic OVR Ratings<br/>&#8595;<br/>GAT + Monte Carlo Engine`,
      screenshots: ["./resources/demo_ipl.png", "./resources/demo_ipl.png"],
    },
    graphql: {
      title: "GraphQL Task Management API",
      subtitle: "Project",
      featured: false,
      isNew: false,
      description:
        "<p>Designed a schema-first GraphQL API using FastAPI and Strawberry, eliminating REST over-fetching and reducing average payload size by 60% on deeply nested task/subtask queries.</p><br/><p>Integrated Redis DataLoader batching and OAuth 2.0 PKCE flow supporting 1000+ concurrent WebSocket connections at sub-100ms p99 latency under load testing.</p>",
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
      featured: false,
      isNew: false,
      description:
        "<p>Built a Next.js SSG platform with Incremental Static Regeneration and automatic image optimization, achieving 95+ Lighthouse score on mobile and desktop audits.</p><br/><p>Implemented a custom AVL tree search index over post metadata, improving tag/category lookup from O(n) to O(log n) with automatic rebalancing on content updates.</p>",
      stack: [
        "Next.js",
        "React",
        "Data Structures",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "https://github.com/naga251602/gblog",
      linkText: "Repository",
      linkIcon: "github",
      visual: "",
      screenshots: ["./resources/demo_gblog.png"],
    },
    supablog: {
      title: "SupaBlog | Node.js Blog Platform",
      subtitle: "Project",
      featured: false,
      isNew: false,
      description:
        "<p>Built a full-stack server-rendered blogging platform using Node.js and Express with EJS templating, integrating Supabase as a backend-as-a-service for PostgreSQL database management and authentication.</p><br/><p>Implemented a complete user authentication system using Supabase Auth with secure session management via express-session, supporting sign-up, sign-in, and logout flows with protected routes for authenticated users.</p><br/><p>Designed RESTful routes for full CRUD blog post operations — create, list, and view — with environment-based configuration via dotenv and consistent UI structure using express-ejs-layouts.</p>",
      stack: [
        "Node.js",
        "Express.js",
        "EJS",
        "Supabase",
        "PostgreSQL",
        "express-session",
        "CSS",
      ],
      link: "https://github.com/naga251602/supablog",
      linkText: "Repository",
      linkIcon: "github",
      visual: `Supabase Auth & PostgreSQL<br/>↓<br/>Express.js REST Routes<br/>↓<br/>EJS Server-Rendered Views`,
      screenshots: [],
    },
    easymigrate: {
      title: "EasyMigrate | Universal Database Migration Tool",
      subtitle: "Project",
      featured: false,
      isNew: false,
      description:
        "<p>Built a universal any-to-any database migration CLI tool supporting PostgreSQL, MySQL, SQLite, SQL Server, MariaDB, and OracleDB — enabling seamless schema and data transfer across heterogeneous database systems with a single command.</p><br/><p>Leveraged SQLAlchemy's cross-database abstraction layer to extract source schema (tables, columns, views), recreate it on the target, and transfer data faithfully — handling dialect differences transparently under the hood.</p><br/><p>Packaged as an installable Python CLI via pip, keeping the interface minimal: just source and target connection URLs. Includes a pytest test suite and is open for community contributions under the MIT License.</p>",
      stack: [
        "Python",
        "SQLAlchemy",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "SQL Server",
        "pytest",
      ],
      link: "https://github.com/naga251602/easymigrate",
      linkText: "Repository",
      linkIcon: "github",
      visual: `Source Database (any)<br/>↓<br/>SQLAlchemy Migration Engine<br/>↓<br/>Target Database (any)`,
      screenshots: [],
    },
    gchat: {
      title: "GChat | Real-Time Messaging App",
      subtitle: "Project",
      featured: false,
      isNew: false,
      description:
        "<p>Built a real-time messaging application with Next.js App Router and Firebase, featuring Google OAuth authentication, instant message delivery via Firestore, and live typing indicators — all with sub-second latency.</p><br/><p>Architected a modular component structure separating chat UI, auth context, and Firebase initialization layers, with full TypeScript type safety across shared interfaces and React Context-based auth state management.</p><br/><p>Designed a fully responsive, accessible UI with Tailwind CSS adhering to WCAG principles, optimized across mobile, tablet, and desktop — with ESLint enforcing consistent code quality throughout the codebase.</p>",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "ESLint",
      ],
      link: "https://github.com/naga251602/gchat",
      linkText: "Repository",
      linkIcon: "github",
      visual: `Firebase Auth (Google)<br/>↓<br/>Firestore Real-Time Listeners<br/>↓<br/>Next.js App Router UI`,
      screenshots: [],
    },
  },

  experience: {
    aadithya: {
      title: "Freelance Full-Stack Developer",
      company: "Aadithya Cars",
      period: "Apr 2024 - Nov 2024",
      isCurrent: false,
      featured: false,
      subtitle: "Aadithya Cars • Apr 2024 - Nov 2024",
      description: `<ul class="list-disc pl-4 space-y-2">
        <li>Reduced page load time <strong>75% (3.2s → 800ms)</strong> via lazy loading, code splitting, and Brotli compression, raising Lighthouse Performance score to 95+.</li>
        <li>Replaced monolithic CSV ingestion with a chunk-based streaming pipeline, eliminating OOM crashes and achieving <strong>4× throughput</strong> on 500K+ row inventory datasets.</li>
        <li>Integrated third-party valuation and financing APIs with exponential-backoff retry and circuit-breaker patterns, maintaining <strong>99.5% uptime</strong> and cutting time-to-interactive by 40%.</li>
        <li>Improved SQL query performance <strong>35%</strong> via composite index design and query plan analysis on PostgreSQL tables with 1M+ records.</li>
      </ul>`,
      stack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "System Architecture",
      ],
      link: "",
      linkText: "",
      visual: "",
    },
    virtusa_2: {
      title: "Software Engineering Intern",
      company: "Virtusa",
      period: "Dec 2023 - Apr 2024",
      isCurrent: false,
      featured: false,
      subtitle: "Virtusa • Dec 2023 - Apr 2024",
      description: `<ul class="list-disc pl-4 space-y-2">
        <li>Led a team of 4 interns to deliver an <strong>EMart Inventory Management System</strong> (Spring Boot, Angular, MySQL) — real-time warehouse/shelf stock tracking, expiry alerting 2–3 days in advance, and maker-checker approval workflow, reducing manual stock discrepancy errors by ~40%.</li>
        <li>Shipped <strong>3 backend modules</strong> (Public Employment Center, Tamil Nadu EB Bill System, barcode generation) with a CSV ingestion pipeline validating SHA-256 hashes and auto-generating signed PDF invoices emailed to vendors, cutting invoice processing time from ~2 days to same-day.</li>
      </ul>`,
      stack: [
        "Java",
        "Java EE",
        "Spring Boot",
        "Spring Security",
        "Spring AOP",
        "Spring Hibernate",
        "Angular",
        "MySQL",
        "JDBC",
        "REST APIs",
      ],
      link: "",
      linkText: "",
      visual: "",
    },
    virtusa_1: {
      title: "Software Engineering Intern",
      company: "Virtusa",
      period: "Jul 2022 - Aug 2022",
      isCurrent: false,
      featured: false,
      subtitle: "Virtusa • Jul 2022 - Aug 2022",
      description: `<ul class="list-disc pl-4 space-y-2">
        <li>Led a team of 3 interns to build and demo a full-stack <strong>e-commerce grocery application</strong> (Spring MVC, Angular 9+, MySQL) end-to-end in 6 weeks — covering product catalog, cart, checkout, and order management across 5 core user flows.</li>
        <li>Designed <strong>8 RESTful API endpoints</strong> and a normalized MySQL schema with Spring Hibernate ORM; integrated Spring Security for auth, achieving &lt;3s page load under simulated 50-user load during final demo review.</li>
      </ul>`,
      stack: [
        "Java",
        "Spring MVC",
        "Spring Security",
        "Spring Hibernate",
        "Angular",
        "MySQL",
        "JDBC",
        "REST APIs",
        "Bootstrap",
      ],
      link: "",
      linkText: "",
      visual: "",
    },
    rmk_ra: {
      title: "Research Assistant",
      company: "R.M.K Engineering College",
      period: "Sep 2023 - Apr 2024",
      isCurrent: false,
      subtitle: "R.M.K Engineering College • Sep 2023 - Apr 2024",
      description: `<ul class="list-disc pl-4 space-y-2">
        <li>Contributed to the development of ML-driven applications under faculty supervision, supporting data ingestion, preprocessing pipelines, and backend integration.</li>
        <li>Implemented backend systems in Python integrating machine learning models for sentiment analysis, text generation, and medical image classification.</li>
        <li>Assisted in experimental evaluation, result analysis, and manuscript preparation, contributing to <strong>3 accepted IEEE conference publications</strong> (7 total citations).</li>
      </ul>`,
      stack: ["Python", "Machine Learning", "NLP", "Computer Vision"],
      link: "",
      linkText: "",
      visual: "",
    },
    sawbon: {
      title: "Software Development Intern",
      company: "SAWBON",
      period: "Feb 2022 - Mar 2022",
      isCurrent: false,
      subtitle: "SAWBON • Feb 2022 - Mar 2022",
      description: `<ul class="list-disc pl-4 space-y-2">
        <li>Built concurrent Go REST APIs using goroutines, channels, and connection pooling, sustaining <strong>sub-250ms p95 response times</strong> under 500 concurrent users with zero downtime.</li>
        <li>Implemented Redis cache-aside with TTL-based invalidation, reducing DB read load by <strong>30%</strong> and cutting median API latency by <strong>15%</strong>.</li>
        <li>Achieved <strong>78% code coverage</strong> on critical service paths via unit and integration tests using Go's testing package.</li>
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
      venue: "ICCDS 2024",
      featured: true,
      isNew: false,
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
      venue: "ICCDS 2024",
      featured: false,
      isNew: false,
      description:
        "<p>Co-developed an NLP pipeline using fine-tuned BERT on domain-specific patient review corpora to classify sentiment and generate ranked drug recommendations at 88% classification accuracy.</p><br/><p>Evaluated against TF-IDF and LSTM baselines, demonstrating a 12-point F1 improvement from transfer learning with biomedical pretraining.</p>",
      stack: ["Python", "NLP", "BERT"],
      link: "https://www.researchgate.net/profile/Shai-Kumar/publication/394529865_A_Sentimental_Analysis_Approach_for_Personalized_Drug_Recommendations_Using_Machine_Learning/links/68a335762c7d3e0029b14b90/A-Sentimental-Analysis-Approach-for-Personalized-Drug-Recommendations-Using-Machine-Learning.pdf",
      linkText: "Read Paper",
      linkIcon: "file-text",
      visual: "",
    },
    iccn2024: {
      title: "Automated Pneumonia Detection using DenseNet",
      subtitle: "ICCN 2024",
      venue: "ICCN 2024",
      featured: false,
      isNew: true,
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
      isNew: false,
      description:
        "<p>Contributed to PrintStruct, a Python CLI tool on PyPI that visualizes project directory structures while respecting .gitignore rules.</p><br/><p>Refactored project structure for clarity, eliminated code duplication to reduce technical debt, and improved README documentation to lower barrier for new contributors.</p>",
      stack: ["Python", "Open Source"],
      link: "https://pypi.org/project/PrintStruct/",
      linkText: "PyPI Package",
      linkIcon: "package",
    },
    imagine_cup: {
      title: "Microsoft Imagine Cup",
      subtitle: "Hackathon",
      isNew: false,
      description:
        "<p>Built a collaborative platform connecting researchers, doctors, and patients to share medical reports and treatment knowledge for rare disease research.</p>",
      stack: ["React", "Node.js", "MongoDB"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    shell_ai: {
      title: "Shell.ai Hackathon: EV Charging Challenge",
      subtitle: "Hackathon",
      isNew: false,
      description:
        "<p>Optimized an EV charging network topology to remain robust under demographic shifts and meet dynamic customer demand.</p>",
      stack: ["Python", "Pandas", "Algorithms"],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
    smart_india: {
      title: "Smart India Hackathon",
      subtitle: "Hackathon",
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
      description:
        "<p>Awarded at the 2024 International Conference on Computing and Data Science for the paper 'Human-AI Collaboration for Backend Text Generation'.</p>",
      stack: [],
      link: "",
      linkText: "",
      linkIcon: "award",
    },
  },
};

// ============================================================
// SKILL CONFIG
// ============================================================
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
    { name: "Flask", icon: "devicon-flask-original dark:invert", level: 85 },
    { name: "Node.js", icon: "devicon-nodejs-plain", level: 80 },
    { name: "GraphQL", icon: "devicon-graphql-plain", level: 85 },
    { name: "REST APIs", isLucide: true, icon: "braces", level: 95 },
    { name: "WebSockets", isLucide: true, icon: "zap", level: 80 },
    { name: "JWT", isLucide: true, icon: "shield", level: 85 },
  ],
  Frontend: [
    { name: "React", icon: "devicon-react-original", level: 90 },
    { name: "Next.js", icon: "devicon-nextjs-plain dark:invert", level: 85 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: 90 },
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
    { name: "Pandas", icon: "devicon-pandas-plain dark:invert", level: 90 },
    { name: "scikit-learn", icon: "devicon-scikitlearn-plain", level: 85 },
    { name: "NumPy", icon: "devicon-numpy-plain", level: 90 },
    { name: "BERT", isLucide: true, icon: "brain", level: 80 },
    { name: "DenseNet", isLucide: true, icon: "network", level: 80 },
  ],
  Core: [
    { name: "System Design", isLucide: true, icon: "layers", level: 85 },
    { name: "Concurrency", isLucide: true, icon: "git-branch", level: 90 },
    { name: "Data Structures", isLucide: true, icon: "database", level: 95 },
    { name: "Algorithms", isLucide: true, icon: "cpu", level: 95 },
  ],
};

const statsData = [
  { value: "2+", label: "Years Experience" },
  {
    value: `${Object.keys(detailsData["project"]).length - 1}+`,
    label: "Projects Built",
  },
  { value: "3", label: "Papers Published" },
];

const skillMetaMap = {};
for (const [, arr] of Object.entries(skillsConfig))
  arr.forEach((s) => (skillMetaMap[s.name] = s));
Object.assign(skillMetaMap, {
  "System Architecture": {
    name: "System Architecture",
    isLucide: true,
    icon: "layers",
    level: 85,
  },
  NLP: { name: "NLP", isLucide: true, icon: "message-square", level: 80 },
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
  "OAuth 2.0": {
    name: "OAuth 2.0",
    isLucide: true,
    icon: "shield-check",
    level: 80,
  },
  "Graph Attention Networks": {
    name: "Graph Attention Networks",
    isLucide: true,
    icon: "network",
    level: 75,
  },
  "Monte Carlo Simulation": {
    name: "Monte Carlo Simulation",
    isLucide: true,
    icon: "shuffle",
    level: 75,
  },
  Concurrency: {
    name: "Concurrency",
    isLucide: true,
    icon: "git-branch",
    level: 90,
  },
});

// ============================================================
// AUTO-REGISTER MISSING SKILLS FROM ALL DATA (default level 70)
// Scans every stack in every data type and fills gaps in skillMetaMap
// ============================================================
(function autoRegisterMissingSkills() {
  // Icon heuristics for common patterns
  const iconHints = {
    python: "devicon-python-plain",
    go: "devicon-go-plain",
    javascript: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    react: "devicon-react-original",
    "next.js": "devicon-nextjs-plain",
    "node.js": "devicon-nodejs-plain",
    docker: "devicon-docker-plain",
    kubernetes: "devicon-kubernetes-plain",
    postgresql: "devicon-postgresql-plain",
    mongodb: "devicon-mongodb-plain",
    redis: "devicon-redis-plain",
    sqlite: "devicon-sqlite-plain",
    pytorch: "devicon-pytorch-plain",
    pandas: "devicon-pandas-plain",
    numpy: "devicon-numpy-plain",
    "scikit-learn": "devicon-scikitlearn-plain",
    fastapi: "devicon-fastapi-plain",
    flask: "devicon-flask-original",
    graphql: "devicon-graphql-plain",
    "tailwind css": "devicon-tailwindcss-plain",
    "html/css": "devicon-html5-plain",
    aws: "devicon-amazonwebservices-plain-wordmark",
    linux: "devicon-linux-plain",
    nginx: "devicon-nginx-original",
    "github actions": "devicon-githubactions-plain",
    "c++": "devicon-cplusplus-plain",
    c: "devicon-c-plain",
    sql: "devicon-sqldeveloper-plain",
  };

  // Lucide fallbacks based on keyword matching
  function guessMeta(name) {
    const lower = name.toLowerCase();
    // Check devicon map first
    if (iconHints[lower]) {
      return { name, icon: iconHints[lower], isLucide: false, level: 70 };
    }
    // Keyword → lucide icon
    if (
      lower.includes("ml") ||
      lower.includes("machine learning") ||
      lower.includes("deep learning")
    )
      return { name, isLucide: true, icon: "brain", level: 70 };
    if (lower.includes("llm") || lower.includes("gpt") || lower.includes("ai"))
      return { name, isLucide: true, icon: "bot", level: 70 };
    if (lower.includes("api") || lower.includes("rest"))
      return { name, isLucide: true, icon: "braces", level: 70 };
    if (
      lower.includes("database") ||
      lower.includes("db") ||
      lower.includes("sql")
    )
      return { name, isLucide: true, icon: "database", level: 70 };
    if (
      lower.includes("cloud") ||
      lower.includes("aws") ||
      lower.includes("gcp") ||
      lower.includes("azure")
    )
      return { name, isLucide: true, icon: "cloud", level: 70 };
    if (
      lower.includes("graph") ||
      lower.includes("network") ||
      lower.includes("gnn") ||
      lower.includes("gat")
    )
      return { name, isLucide: true, icon: "network", level: 70 };
    if (
      lower.includes("nlp") ||
      lower.includes("text") ||
      lower.includes("bert") ||
      lower.includes("transformer")
    )
      return { name, isLucide: true, icon: "message-square", level: 70 };
    if (
      lower.includes("vision") ||
      lower.includes("image") ||
      lower.includes("cnn") ||
      lower.includes("densenet")
    )
      return { name, isLucide: true, icon: "eye", level: 70 };
    if (
      lower.includes("data") ||
      lower.includes("analytics") ||
      lower.includes("pipeline")
    )
      return { name, isLucide: true, icon: "bar-chart-2", level: 70 };
    if (lower.includes("test") || lower.includes("ci") || lower.includes("cd"))
      return { name, isLucide: true, icon: "check-circle", level: 70 };
    if (
      lower.includes("auth") ||
      lower.includes("oauth") ||
      lower.includes("jwt") ||
      lower.includes("security")
    )
      return { name, isLucide: true, icon: "shield-check", level: 70 };
    if (lower.includes("algorithm") || lower.includes("struct"))
      return { name, isLucide: true, icon: "cpu", level: 70 };
    if (lower.includes("open source") || lower.includes("cli"))
      return { name, isLucide: true, icon: "globe", level: 70 };
    if (lower.includes("simulation") || lower.includes("monte"))
      return { name, isLucide: true, icon: "shuffle", level: 70 };
    if (
      lower.includes("web") ||
      lower.includes("socket") ||
      lower.includes("ws")
    )
      return { name, isLucide: true, icon: "zap", level: 70 };
    if (
      lower.includes("design") ||
      lower.includes("architecture") ||
      lower.includes("system")
    )
      return { name, isLucide: true, icon: "layers", level: 70 };
    if (
      lower.includes("concurr") ||
      lower.includes("thread") ||
      lower.includes("async")
    )
      return { name, isLucide: true, icon: "git-branch", level: 70 };
    // Generic fallback
    return { name, isLucide: true, icon: "code-2", level: 70 };
  }

  // Collect every skill referenced in any data entry
  for (const type of Object.values(detailsData)) {
    for (const item of Object.values(type)) {
      if (!Array.isArray(item.stack)) continue;
      for (const skillName of item.stack) {
        if (!skillMetaMap[skillName]) {
          skillMetaMap[skillName] = guessMeta(skillName);
        }
      }
    }
  }

  // Build set of every skill already covered by skillsConfig categories
  const coveredSkills = new Set();
  for (const arr of Object.values(skillsConfig))
    arr.forEach((s) => coveredSkills.add(s.name));

  // Collect skills in skillMetaMap that aren't in any existing category
  const extras = Object.values(skillMetaMap).filter(
    (s) => !coveredSkills.has(s.name),
  );

  // Append as a new "Tools & Other" category so renderSkills() picks them up
  if (extras.length > 0) {
    skillsConfig["Tools & Other"] = extras;
  }
})();

// ============================================================
// SKILL PILLS WITH OVERFLOW (+N more, expandable)
// ============================================================
// Renders up to `max` pills, then a clickable "+N more" chip
// that reveals the rest inline. Click propagation is stopped
// so it doesn't trigger parent card/row clicks.
function getSkillPillsWithOverflow(stack, showFill = false, max = 4) {
  if (!stack || stack.length === 0) return "";
  const visible = stack.slice(0, max);
  const hidden = stack.slice(max);
  const uid = `overflow-${Math.random().toString(36).slice(2, 8)}`;

  const visibleHtml = visible
    .map((s) => getSkillPillHtml(s, showFill))
    .join("");

  if (hidden.length === 0) return visibleHtml;

  const hiddenHtml = hidden.map((s) => getSkillPillHtml(s, showFill)).join("");

  return `${visibleHtml}<button
    class="inline-flex items-center px-2.5 py-1.5 border border-border rounded-md text-xs font-mono text-muted bg-hoverBg hover:border-fg hover:text-fg transition-all select-none cursor-none interactive"
    onclick="event.stopPropagation();toggleOverflowPills('${uid}',this)"
    data-open="false"
    data-hidden-count="${hidden.length}"
  >+${hidden.length} more</button><span id="${uid}" style="display:none">${hiddenHtml}</span>`;
}

function toggleOverflowPills(uid, trigger) {
  const el = document.getElementById(uid);
  if (!el) return;
  const isOpen = trigger.dataset.open === "true";
  const parent = trigger.parentElement;

  if (isOpen) {
    // Move pills back into the hidden span, restore trigger text
    const pills = parent.querySelectorAll(`[data-overflow-for="${uid}"]`);
    pills.forEach((p) => {
      el.appendChild(p);
      p.removeAttribute("data-overflow-for");
    });
    trigger.dataset.open = "false";
    trigger.textContent = `+${trigger.dataset.hiddenCount} more`;
  } else {
    // Move pills out of hidden span into the flex parent, before the trigger
    const pills = Array.from(el.children);
    pills.forEach((p) => {
      p.dataset.overflowFor = uid;
      parent.insertBefore(p, trigger);
    });
    trigger.dataset.open = "true";
    trigger.textContent = "Show less";
    lucide.createIcons();
  }
}

// ============================================================
// BADGE HTML GENERATORS
// ============================================================
function getFeaturedBadgeHtml() {
  return `<span class="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-violet-500 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-sm shrink-0">
    <i data-lucide="star" class="w-2.5 h-2.5"></i>Featured
  </span>`;
}
function getNewBadgeHtml() {
  return `<span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0 new-badge">
    <i data-lucide="sparkles" class="w-2.5 h-2.5"></i>New
  </span>`;
}
function getCurrentBadgeHtml() {
  return `<span class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0 current-badge">
    <span class="relative flex h-1.5 w-1.5">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
      <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span>
    </span>Current
  </span>`;
}

// ============================================================
// SKILL PILL
// ============================================================
function getSkillPillHtml(skillName, showFill = false) {
  let meta = skillMetaMap[skillName] || {
    name: skillName,
    isLucide: true,
    icon: "code",
    level: 75,
  };
  const iconHtml = meta.isLucide
    ? `<i data-lucide="${meta.icon}" class="w-3.5 h-3.5 relative z-10 pointer-events-none"></i>`
    : `<i class="${meta.icon} text-sm relative z-10 transition-transform group-hover:scale-110 pointer-events-none"></i>`;
  // Fill bg stays overflow-hidden via inner div; outer span is overflow-visible for tooltip
  const fillHtml = showFill
    ? `<div class="absolute inset-0 overflow-hidden rounded-md pointer-events-none"><div class="absolute left-0 top-0 bottom-0 skill-fill-bg transition-opacity duration-300 opacity-[0.65] group-hover:opacity-100" style="width:${meta.level}%;"></div></div>`
    : "";
  const tooltip = showFill
    ? `<span class="skill-pill-tooltip absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-fg text-bg text-[9px] font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-30">tap to explore</span>`
    : "";
  return `<span
    class="interactive relative inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-border rounded-md text-xs font-mono bg-bg text-fg hover:border-fg transition-all cursor-none group overflow-visible"
    onclick="event.stopPropagation();openSkillDrawer('${meta.name}')"
    ${showFill ? `title="Skill Level: ${meta.level}%"` : ""}
  >${fillHtml}${iconHtml}<span class="relative z-10 font-medium tracking-tight pointer-events-none">${meta.name}</span>${tooltip}</span>`;
}

// Strip HTML for plain text previews
function stripHtml(html) {
  return html
    .replace(/<[^>]*>?/gm, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ============================================================
// RENDER: STATS
// ============================================================
function renderStats() {
  const c = document.getElementById("stats-container");
  if (!c) return;
  c.innerHTML = statsData
    .map(
      (s, i) => `
      <div class="stagger-item flex flex-col"${i > 0 ? ` style="transition-delay:${i * 0.1}s"` : ""}>
        <span class="text-4xl font-bold text-fg">${s.value}</span>
        <span class="text-xs font-mono text-muted uppercase tracking-widest mt-1">${s.label}</span>
      </div>`,
    )
    .join("");
}

// ============================================================
// RENDER: FEATURED (max 3, cross-type, after hero)
// ============================================================
function renderFeatured() {
  const c = document.getElementById("featured-list");
  if (!c) return;

  // Collect all featured items across all types, max 3
  const allFeatured = [];
  const typeConfig = {
    project: { label: "Project", icon: "folder-open" },
    experience: { label: "Experience", icon: "briefcase" },
    publication: { label: "Publication", icon: "book-open" },
    other: { label: "Other", icon: "layers" },
  };

  for (const [type, items] of Object.entries(detailsData)) {
    for (const [id, d] of Object.entries(items)) {
      if (d.featured) allFeatured.push({ type, id, d });
    }
  }

  // Cap at 3
  const items = allFeatured.slice(0, 3);

  if (!items.length) {
    document.getElementById("featured-section")?.classList.add("hidden");
    return;
  }

  c.innerHTML = items
    .map(({ type, id, d }, idx) => {
      const { label, icon } = typeConfig[type] || { label: type, icon: "star" };
      const isExp = type === "experience";
      const isPub = type === "publication";

      // Build the headline line
      let headlineHtml = "";
      if (isExp) {
        headlineHtml = `
          <h3 class="text-xl font-semibold text-fg group-hover:underline flex flex-wrap items-center gap-1.5">
            ${d.title}
            <span class="text-border mx-1">|</span>
            <span class="text-muted font-normal inline-flex items-center gap-1.5">
              <i data-lucide="building-2" class="w-4 h-4"></i>${d.company}
            </span>
          </h3>`;
      } else {
        headlineHtml = `
          <h3 class="text-xl font-semibold text-fg group-hover:underline flex items-center gap-1.5">
            ${d.title}
            ${!isPub ? `<i data-lucide="arrow-up-right" class="w-4 h-4 text-muted group-hover:text-fg transition-colors shrink-0"></i>` : ""}
          </h3>`;
      }

      // Meta right (period / venue / subtitle)
      let metaHtml = "";
      if (isExp)
        metaHtml = `<span class="font-mono text-xs text-muted whitespace-nowrap">${d.period}</span>`;
      if (isPub)
        metaHtml = `<span class="font-mono text-xs text-fg bg-border px-2 py-0.5 rounded-sm whitespace-nowrap">${d.venue}</span>`;

      // Cite button for publications
      const citeHtml = isPub
        ? `<button class="interactive cursor-none text-muted hover:text-fg font-mono text-xs uppercase tracking-wider transition-colors border border-border px-3 py-1.5 rounded-md hover:bg-hoverBg"
             onclick="event.stopPropagation();copyCitation('${id}')">Cite</button>`
        : "";

      return `
        <div
          class="featured-card group interactive cursor-none flex flex-col gap-4 p-5 border border-border rounded-xl hover:border-fg/30 hover:bg-hoverBg transition-all duration-200 relative"
          style="animation-delay:${idx * 0.08}s"
          onclick="openDetails('${type}','${id}')"
        >
          <!-- Type pill -->
          <div class="flex items-center justify-between gap-3">
            <span class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted border border-border px-2 py-0.5 rounded-sm">
              <i data-lucide="${icon}" class="w-3 h-3"></i>${label}
            </span>
            ${metaHtml}
          </div>

          <!-- Headline -->
          <div class="pointer-events-none">
            ${headlineHtml}
          </div>

          <!-- Description -->
          <p class="text-sm text-muted leading-relaxed line-clamp-2 pointer-events-none">
            ${stripHtml(d.description)}
          </p>

          <!-- Stack pills -->
          ${
            (d.stack || []).length
              ? `
          <div class="flex flex-wrap gap-1.5 relative z-20 pointer-events-auto">
            ${getSkillPillsWithOverflow(d.stack, false, 3)}
          </div>`
              : ""
          }

          <!-- Bottom row: link + cite -->
          ${
            d.link || isPub
              ? `
          <div class="flex items-center justify-between gap-3 pt-1 border-t border-border pt-3 relative z-20 pointer-events-auto mt-auto">
            ${
              d.link
                ? `
            <a href="${d.link}" target="_blank"
               onclick="event.stopPropagation()"
               class="interactive cursor-none inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-fg transition-colors">
              <i data-lucide="${d.linkIcon || "external-link"}" class="w-3.5 h-3.5"></i>${d.linkText}
            </a>`
                : "<span></span>"
            }
            ${citeHtml}
          </div>`
              : ""
          }
        </div>`;
    })
    .join("");
}

// ============================================================
// RENDER: EXPERIENCE (from data)
// ============================================================
function renderExperience() {
  const c = document.getElementById("experience-list");
  if (!c) return;
  const entries = Object.entries(detailsData.experience);
  c.innerHTML = entries
    .map(([id, d], idx) => {
      const topSpine = idx === 0 ? "mt-7" : "";
      const isLast = idx === entries.length - 1 ? "opacity-0" : "";
      const dotClass = d.isCurrent
        ? "bg-violet-500 border-violet-400 shadow-[0_0_8px_2px_rgba(139,92,246,0.45)]"
        : "bg-bg border-border group-hover:border-fg";
      return `
      <div class="stagger-item group interactive cursor-none py-7 list-item-hover px-2 -mx-2 relative experience-row"
           onclick="openDetails('experience','${id}')"
           style="transition-delay:${idx * 0.07}s">

        <!-- Timeline spine + dot -->
        <div class="absolute left-0 top-0 bottom-0 flex flex-col items-center pointer-events-none exp-timeline">
          <div class="w-px flex-1 bg-border group-hover:bg-fg/20 transition-colors duration-300 ${topSpine}"></div>
          <div class="w-2.5 h-2.5 rounded-full border-2 shrink-0 transition-all duration-300 ${dotClass}"></div>
          <div class="w-px flex-1 bg-border group-hover:bg-fg/20 transition-colors duration-300 ${isLast}"></div>
        </div>

        <!-- Content -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-1.5 pointer-events-none">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-base font-semibold text-fg group-hover:underline transition-colors">${d.title}</h3>
            ${d.isCurrent ? getCurrentBadgeHtml() : ""}
          </div>
          <span class="font-mono text-[11px] text-muted whitespace-nowrap shrink-0 mt-0.5">${d.period}</span>
        </div>

        <p class="text-sm text-muted mb-3 pointer-events-none inline-flex items-center gap-1.5">
          <i data-lucide="building-2" class="w-3.5 h-3.5 shrink-0"></i>${d.company}
        </p>

        <p class="text-sm text-muted line-clamp-2 mb-4 pointer-events-none leading-relaxed">${stripHtml(d.description)}</p>

        <div class="flex flex-wrap gap-1.5 relative z-20 pointer-events-auto">
          ${getSkillPillsWithOverflow(d.stack, false, 4)}
        </div>

        <span class="absolute right-2 bottom-3 font-mono text-[10px] text-muted opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center gap-1 pointer-events-none select-none">
          explore <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
        </span>
      </div>`;
    })
    .join("");
}

// ============================================================
// RENDER: PROJECTS PREVIEW (isNew first, exclude featured, top 2)
// ============================================================
function renderProjectsPreview() {
  const c = document.getElementById("projects-preview");
  if (!c) return;
  const sorted = Object.entries(detailsData.project)
    .filter(([, d]) => !d.featured)
    .sort(([, a], [, b]) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    .slice(0, 2);
  c.innerHTML = sorted
    .map(
      ([id, d]) => `
      <div class="stagger-item group interactive cursor-none border-b border-border py-6 list-item-hover px-2 -mx-2 relative flex flex-col" onclick="openDetails('project','${id}')">
        <div class="flex flex-wrap items-center gap-2 mb-3 pointer-events-none">
          <h3 class="text-lg font-medium text-fg group-hover:underline flex items-center gap-1.5">
            ${d.title}<i data-lucide="arrow-up-right" class="w-4 h-4 text-muted group-hover:text-fg transition-colors"></i>
          </h3>
          ${d.featured ? getFeaturedBadgeHtml() : ""}
          ${d.isNew ? getNewBadgeHtml() : ""}
        </div>
        <p class="text-sm text-muted line-clamp-2 pr-8 mb-4 pointer-events-none">${stripHtml(d.description)}</p>
        <div class="flex flex-wrap gap-2 relative z-20 pointer-events-auto">
          ${getSkillPillsWithOverflow(d.stack, false, 4)}
        </div>
      </div>`,
    )
    .join("");
}

// ============================================================
// RENDER: PUBLICATIONS PREVIEW (isNew first, exclude featured, top 2)
// ============================================================
function renderPublicationsPreview() {
  const c = document.getElementById("publications-preview");
  if (!c) return;
  const sorted = Object.entries(detailsData.publication)
    .filter(([, d]) => !d.featured)
    .sort(([, a], [, b]) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    .slice(0, 2);
  c.innerHTML = sorted
    .map(
      ([id, d]) => `
      <div class="stagger-item group border-b border-border py-6 px-2 -mx-2 list-item-hover relative cursor-none interactive" onclick="openDetails('publication','${id}')">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
          <div class="flex flex-wrap items-center gap-2 pointer-events-none">
            <h3 class="text-lg font-medium text-fg group-hover:underline">${d.title}</h3>
            ${d.featured ? getFeaturedBadgeHtml() : ""}
            ${d.isNew ? getNewBadgeHtml() : ""}
          </div>
          <span class="font-mono text-xs text-fg bg-border px-2 py-0.5 rounded-sm pointer-events-none shrink-0 w-fit">${d.venue}</span>
        </div>
        <p class="text-sm text-muted line-clamp-2 pr-8 mb-4 pointer-events-none">${stripHtml(d.description)}</p>
        <div class="flex justify-end pointer-events-auto relative z-20">
          <button class="interactive cursor-none text-muted hover:text-fg font-mono text-xs uppercase tracking-wider transition-colors border border-border px-3 py-1.5 rounded-md hover:bg-hoverBg shadow-sm"
            onclick="event.stopPropagation();copyCitation('${id}')">Cite</button>
        </div>
      </div>`,
    )
    .join("");
}

// ============================================================
// RENDER: OTHERS PREVIEW (top 3)
// ============================================================
function renderOthersPreview() {
  const c = document.getElementById("others-preview");
  if (!c) return;
  const preview = Object.entries(detailsData.other).slice(0, 3);
  c.innerHTML = preview
    .map(
      ([id, d]) => `
      <div class="stagger-item group interactive cursor-none border-b border-border py-6 list-item-hover px-2 -mx-2 relative flex flex-col" onclick="openDetails('other','${id}')">
        <div class="flex flex-wrap items-center gap-2 mb-2 pointer-events-none">
          <h3 class="text-lg font-medium text-fg group-hover:underline flex items-center gap-1.5">
            ${d.title}${d.link ? `<i data-lucide="arrow-up-right" class="w-4 h-4 text-muted group-hover:text-fg transition-colors"></i>` : ""}
          </h3>
          <span class="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded-sm uppercase tracking-widest bg-bg">${d.subtitle}</span>
          ${d.isNew ? getNewBadgeHtml() : ""}
        </div>
        <p class="text-sm text-muted line-clamp-2 pr-8 mb-4 pointer-events-none">${stripHtml(d.description)}</p>
        <div class="flex flex-wrap gap-2 relative z-20 pointer-events-auto">
          ${getSkillPillsWithOverflow(d.stack, false, 4)}
        </div>
      </div>`,
    )
    .join("");
}

// ============================================================
// RENDER: SKILLS
// ============================================================
function renderSkills() {
  const c = document.getElementById("skills-container");
  if (!c) return;
  c.innerHTML = "";

  const PREVIEW = 5;

  for (const [cat, arr] of Object.entries(skillsConfig)) {
    const uid = `skill-cat-${cat.replace(/\W+/g, "-").toLowerCase()}`;
    const needsToggle = arr.length > PREVIEW;

    // Split into visible (first PREVIEW) and hidden (rest)
    const visiblePills = arr
      .slice(0, PREVIEW)
      .map((s) => getSkillPillHtml(s.name, true))
      .join("");
    const hiddenPills = needsToggle
      ? arr
          .slice(PREVIEW)
          .map((s) => getSkillPillHtml(s.name, true))
          .join("")
      : "";

    const toggleBtn = needsToggle
      ? `<button
          class="interactive cursor-none mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-fg transition-colors"
          onclick="toggleSkillCategory('${uid}', this)"
          data-open="false"
        >
          <i data-lucide="chevron-down" class="w-3 h-3 transition-transform duration-300" id="${uid}-icon"></i>
          <span id="${uid}-label">+${arr.length - PREVIEW} more</span>
        </button>`
      : "";

    // No max-height clipping — show/hide pills via display.
    // pt-10 on the wrapper gives the tooltip (positioned -top-8) room above the first pill row
    c.innerHTML += `
      <div class="stagger-item overflow-visible">
        <span class="block text-muted mb-3 font-mono text-xs uppercase tracking-wider">${cat}</span>
        <div class="overflow-visible pt-10 -mt-10">
          <div id="${uid}" class="flex flex-wrap gap-2.5 overflow-visible">
            ${visiblePills}
            <span id="${uid}-extra" style="display:contents">${hiddenPills}</span>
          </div>
        </div>
        ${toggleBtn}
      </div>`;
  }

  requestAnimationFrame(() => {
    // Hide extra pills on load
    document.querySelectorAll("[id$='-extra']").forEach((el) => {
      // display:contents means children are laid out inline — hide by hiding children
      Array.from(el.children).forEach((pill) => {
        pill.style.display = "none";
      });
    });
    lucide.createIcons();
  });
}

function toggleSkillCategory(uid, btn) {
  const extraSpan = document.getElementById(`${uid}-extra`);
  const icon = document.getElementById(`${uid}-icon`);
  const label = document.getElementById(`${uid}-label`);
  if (!extraSpan) return;

  const isOpen = btn.dataset.open === "true";
  const pills = Array.from(extraSpan.children);

  if (isOpen) {
    pills.forEach((p) => {
      p.style.display = "none";
    });
    btn.dataset.open = "false";
    icon.style.transform = "rotate(0deg)";
    label.textContent = `+${pills.length} more`;
  } else {
    pills.forEach((p) => {
      p.style.display = "";
    });
    btn.dataset.open = "true";
    icon.style.transform = "rotate(180deg)";
    label.textContent = "Show less";
    lucide.createIcons();
  }
}

// ============================================================
// RENDER: FULL SCREEN LISTS (featured sort)
// ============================================================
function renderFullScreenList(type, containerId, filterContainerId) {
  const raw = Object.entries(detailsData[type] || {});
  const items = [...raw].sort(([, a], [, b]) => {
    // featured → isNew → rest
    const fa = a.featured ? 2 : a.isNew ? 1 : 0;
    const fb = b.featured ? 2 : b.isNew ? 1 : 0;
    return fb - fa;
  });
  const container = document.getElementById(containerId);
  const filterContainer = document.getElementById(filterContainerId);
  if (!container || !filterContainer) return;

  const allSkills = new Set();
  items.forEach(([, v]) => v.stack && v.stack.forEach((s) => allSkills.add(s)));

  // Build filter buttons — use data-skill attr to avoid special-char escaping issues in onclick
  const skillsArray = Array.from(allSkills).sort();
  const allBtn = `<button data-filter-container="${containerId}" data-skill="all" class="filter-btn active interactive cursor-none px-4 py-1.5 border border-border rounded-full text-xs font-mono bg-fg text-bg hover:opacity-85 transition-colors shadow-sm shrink-0">All</button>`;
  const skillBtns = skillsArray
    .map(
      (skill) =>
        `<button data-filter-container="${containerId}" data-skill="${skill.replace(/"/g, "&quot;")}" class="filter-btn interactive cursor-none px-4 py-1.5 border border-border rounded-full text-xs font-mono bg-hoverBg text-fg hover:bg-fg hover:text-bg transition-colors shrink-0">${skill}</button>`,
    )
    .join("");

  const toggleId = `filter-overflow-${containerId}`;
  const toggleBtn = `<button
    onclick="event.stopPropagation();toggleFilterOverflow('${toggleId}',this)"
    class="interactive cursor-none shrink-0 px-4 py-1.5 border border-border rounded-full text-xs font-mono text-muted hover:text-fg hover:border-fg transition-colors"
    data-open="false"
  >Show all filters <span class="opacity-60">(${skillsArray.length})</span></button>`;

  filterContainer.innerHTML = `
    <div class="flex flex-wrap gap-2 items-center overflow-hidden transition-all duration-300" style="max-height:2.6rem;" id="${toggleId}">
      ${allBtn}${skillBtns}
    </div>
    ${skillsArray.length > 5 ? toggleBtn : ""}
  `;

  // Delegate filter clicks — avoids inline onclick + special char escaping entirely
  filterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-skill]");
    if (!btn) return;
    const skill = btn.dataset.skill;
    const cid = btn.dataset.filterContainer;
    // Update active state
    filterContainer.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("bg-fg", "text-bg", "shadow-sm");
      b.classList.add("bg-hoverBg", "text-fg");
    });
    btn.classList.remove("bg-hoverBg", "text-fg");
    btn.classList.add("bg-fg", "text-bg", "shadow-sm");
    // Show/hide items
    document
      .getElementById(cid)
      ?.querySelectorAll(".filterable-item")
      .forEach((item) => {
        item.style.display =
          skill === "all" || item.dataset.skills.split(",").includes(skill)
            ? "flex"
            : "none";
      });
  });

  container.innerHTML = "";
  items.forEach(([id, d]) => {
    const skillsData = (d.stack || []).join(",");
    const featBadge = d.featured ? getFeaturedBadgeHtml() : "";
    const newBadge = d.isNew ? getNewBadgeHtml() : "";
    let titleBlock = "";
    let extra = "";
    let badge = "";

    if (type === "project") {
      titleBlock = `<div class="flex flex-wrap items-center gap-2 mb-2">
        <h3 class="text-lg font-medium text-fg group-hover:underline flex items-center gap-1.5">
          ${d.title}<i data-lucide="arrow-up-right" class="w-4 h-4 text-muted group-hover:text-fg transition-colors"></i>
        </h3>${featBadge}${newBadge}</div>`;
    } else if (type === "publication") {
      titleBlock = `<div class="flex flex-wrap items-center gap-2 mb-2">
        <h3 class="text-lg font-medium text-fg group-hover:underline">${d.title}</h3>${featBadge}${newBadge}</div>`;
      extra = `<div class="flex justify-end mt-4 pointer-events-auto relative z-20">
        <button class="interactive cursor-none text-muted hover:text-fg font-mono text-xs uppercase tracking-wider transition-colors border border-border px-3 py-1.5 rounded-md hover:bg-hoverBg shadow-sm"
          onclick="event.stopPropagation();copyCitation('${id}')">Cite</button></div>`;
    } else {
      badge = `<div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded-sm uppercase tracking-widest bg-bg">${d.subtitle}</span>${newBadge}</div>`;
      titleBlock = `<h3 class="text-lg font-medium text-fg group-hover:underline mb-2">${d.title}</h3>`;
    }

    container.innerHTML += `
      <div class="group interactive cursor-none border-b border-border py-8 list-item-hover px-4 -mx-4 filterable-item relative flex flex-col" data-skills="${skillsData}" onclick="openDetails('${type}','${id}')">
        ${badge}${titleBlock}
        <p class="text-sm text-muted line-clamp-2 pr-8 mb-5 pointer-events-none">${stripHtml(d.description)}</p>
        <div class="flex flex-wrap gap-2 relative z-20 pointer-events-auto">${getSkillPillsWithOverflow(d.stack, false, 4)}</div>
        ${extra}
      </div>`;
  });

  // Ensure all items are visible by default (guard against stale display:none from prev filter)
  container.querySelectorAll(".filterable-item").forEach((el) => {
    el.style.display = "flex";
  });

  attachHoverListeners();
}

function toggleFilterOverflow(toggleId, btn) {
  const el = document.getElementById(toggleId);
  if (!el) return;
  const isOpen = btn.dataset.open === "true";
  if (isOpen) {
    el.style.maxHeight = "2.6rem";
    btn.dataset.open = "false";
    btn.innerHTML = `Show all filters <span class="opacity-60">(${el.querySelectorAll(".filter-btn").length - 1})</span>`;
  } else {
    el.style.maxHeight = el.scrollHeight + "px";
    btn.dataset.open = "true";
    btn.innerHTML = `Hide filters`;
  }
}

// ============================================================
// CITATION COPY
// ============================================================
function copyCitation(id) {
  const citations = {
    human_ai: `@inproceedings{venkataramanan2024humanai,\n  title={Human-AI Collaboration for Backend Text Generation},\n  booktitle={ICCDS 2024},\n  year={2024}\n}`,
    iccds2024: `@inproceedings{venkataramanan2024sentiment,\n  title={Sentiment-Based Drug Recommendation System},\n  booktitle={ICCDS 2024},\n  year={2024}\n}`,
    iccn2024: `@inproceedings{venkataramanan2024pneumonia,\n  title={Automated Pneumonia Detection using DenseNet},\n  booktitle={ICCN 2024},\n  year={2024}\n}`,
  };
  const text = citations[id] || "";
  navigator.clipboard
    .writeText(text)
    .then(() => showToast("Citation copied to clipboard."))
    .catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showToast("Citation copied to clipboard.");
    });
}

// ============================================================
// CONTACT FORM
// ============================================================
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    formData.append("access_key", "4052b6f0-8f89-4c08-abdc-c476148d70e6");
    const orig = submitBtn.innerHTML;
    submitBtn.innerHTML = `Sending... <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>`;
    lucide.createIcons();
    submitBtn.disabled = true;
    submitBtn.classList.add("opacity-50", "cursor-wait");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      showToast(
        res.ok
          ? "Success! Your message has been sent."
          : "Error: " + data.message,
      );
      if (res.ok) contactForm.reset();
    } catch {
      showToast("Something went wrong. Please try again.");
    } finally {
      submitBtn.innerHTML = orig;
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-50", "cursor-wait");
      lucide.createIcons();
    }
  });
}

// ============================================================
// DRAWER TYPE CONFIG
// ============================================================
const DRAWER_TYPE = {
  project: { label: "Project", icon: "folder-open", accent: "#6d28d9" },
  experience: { label: "Experience", icon: "briefcase", accent: "#2563eb" },
  publication: { label: "Publication", icon: "book-open", accent: "#059669" },
  other: { label: "Other", icon: "layers", accent: "#d97706" },
  skill: { label: "Skill", icon: "cpu", accent: "#7c3aed" },
};

function setDrawerType(type) {
  const cfg = DRAWER_TYPE[type] || DRAWER_TYPE.project;
  const chip = document.getElementById("drawer-type-chip");
  const accent = document.getElementById("drawer-accent");
  if (chip) {
    chip.innerHTML = `<i data-lucide="${cfg.icon}" class="w-3 h-3"></i>${cfg.label}`;
  }
  if (accent) accent.style.background = cfg.accent;
}

// ============================================================
// DRAWER — with history stack + slide animations
// ============================================================
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawer-overlay");

// History stack: each entry is { type, id } or { skill }
let _drawerHistory = [];
let _drawerOpen = false;

function handleDrawerScroll(el) {
  const acts = document.getElementById("drawer-actions");
  const head = document.getElementById("drawer-header-actions");
  const scrolled = el.scrollTop > 60;
  if (scrolled) {
    if (head) head.classList.remove("opacity-0", "pointer-events-none");
    if (acts) acts.classList.add("opacity-0", "pointer-events-none");
  } else {
    if (head) head.classList.add("opacity-0", "pointer-events-none");
    if (acts) acts.classList.remove("opacity-0", "pointer-events-none");
  }
}

// Slide the content pane: direction "forward" slides left→right (new page),
// direction "back" slides right→left (going back)
function _slideContent(direction, callback) {
  const sc = document.getElementById("drawer-scroll-container");
  if (!sc) {
    callback();
    return;
  }
  const outX = direction === "forward" ? "-20px" : "20px";
  const inX = direction === "forward" ? "20px" : "-20px";
  sc.style.transition = "opacity 0.18s ease, transform 0.18s ease";
  sc.style.opacity = "0";
  sc.style.transform = `translateX(${outX})`;
  setTimeout(() => {
    callback();
    sc.scrollTop = 0;
    sc.style.transition = "none";
    sc.style.transform = `translateX(${inX})`;
    sc.style.opacity = "0";
    void sc.offsetWidth;
    sc.style.transition = "opacity 0.22s ease, transform 0.22s ease";
    sc.style.opacity = "1";
    sc.style.transform = "translateX(0)";
  }, 180);
}

function _updateBackBtn() {
  const btn = document.getElementById("drawer-back-btn");
  if (!btn) return;
  if (_drawerHistory.length > 1) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}

function openDrawerUI(isNew = true) {
  const sc = document.getElementById("drawer-scroll-container");
  if (!_drawerOpen) {
    // First open — slide up
    drawerOverlay.classList.remove("hidden");
    void drawerOverlay.offsetWidth;
    drawerOverlay.classList.remove("opacity-0");
    drawer.classList.remove("translate-y-full");
    document.body.style.overflow = "hidden";
    _drawerOpen = true;
    if (sc) {
      sc.style.opacity = "1";
      sc.style.transform = "translateX(0)";
    }
  }
  if (sc) sc.scrollTop = 0;
  const ha = document.getElementById("drawer-header-actions");
  if (ha) ha.classList.add("opacity-0", "pointer-events-none");
  const da = document.getElementById("drawer-actions");
  if (da) da.classList.remove("opacity-0", "pointer-events-none");
  _updateBackBtn();
  attachHoverListeners();
}

function closeDrawer() {
  drawer.classList.add("translate-y-full");
  drawerOverlay.classList.add("opacity-0");
  _drawerHistory = [];
  _drawerOpen = false;
  // Reset scroll pane transform
  const sc = document.getElementById("drawer-scroll-container");
  if (sc) {
    sc.style.opacity = "";
    sc.style.transform = "";
  }
  setTimeout(() => {
    drawerOverlay.classList.add("hidden");
    if (!document.querySelector(".modal-view:not(.hidden)"))
      document.body.style.overflow = "";
  }, 300);
}

function drawerGoBack() {
  if (_drawerHistory.length <= 1) return;
  _drawerHistory.pop(); // remove current
  const prev = _drawerHistory[_drawerHistory.length - 1];
  _slideContent("back", () => {
    if (prev.skill !== undefined) {
      _renderSkillPane(prev.skill);
    } else {
      _renderDetailsPane(prev.type, prev.id);
    }
    _updateBackBtn();
    lucide.createIcons();
  });
}

// Private: render details pane content (no history mutation)
function _renderDetailsPane(type, id) {
  const d = detailsData[type]?.[id];
  if (!d) return;

  setDrawerType(type);

  const titleEl = document.getElementById("drawer-title");
  let titleContent = d.title;
  if (type === "project")
    titleContent += ` <i data-lucide="arrow-up-right" class="w-5 h-5 text-muted inline-block align-middle"></i>`;
  titleEl.innerHTML = titleContent;

  // Meta strip
  const metaEl = document.getElementById("drawer-meta");
  metaEl.innerHTML = "";
  const metaItems = [];
  if (d.company) metaItems.push({ icon: "building-2", text: d.company });
  if (d.period) metaItems.push({ icon: "calendar", text: d.period });
  if (d.venue) metaItems.push({ icon: "map-pin", text: d.venue });
  if (metaItems.length) {
    metaEl.style.display = "flex";
    metaEl.innerHTML = metaItems
      .map(
        (m) =>
          `<span class="inline-flex items-center gap-1.5 text-xs text-muted font-mono">
        <i data-lucide="${m.icon}" class="w-3.5 h-3.5 shrink-0"></i>${m.text}
      </span>`,
      )
      .join("");
  } else {
    metaEl.style.display = "none";
  }

  document.getElementById("drawer-description").innerHTML = d.description;

  const stCon = document.getElementById("drawer-stack-container");
  const stBox = document.getElementById("drawer-stack");
  stBox.innerHTML = "";
  if (d.stack?.length) {
    stCon.style.display = "block";
    stBox.innerHTML = getSkillPillsWithOverflow(d.stack, false, 3);
  } else stCon.style.display = "none";

  const vis = document.getElementById("drawer-visual-container");
  if (d.visual) {
    vis.style.display = "block";
    document.getElementById("drawer-visual").innerHTML = d.visual;
  } else vis.style.display = "none";

  const scCon = document.getElementById("drawer-screenshots-container");
  const scBox = document.getElementById("drawer-screenshots");
  scBox.innerHTML = "";
  if (d.screenshots?.length) {
    scCon.style.display = "block";
    const imgs = d.screenshots;
    if (imgs.length === 1) {
      // Single image — no slider needed
      scBox.innerHTML = `
        <div class="relative group/sc cursor-zoom-in" onclick="openImageLightbox('${imgs[0]}')">
          <img src="${imgs[0]}" alt="Screenshot"
            class="w-full rounded-xl border border-border bg-hoverBg object-contain"
            style="max-height:460px;" />
          <div class="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover/sc:opacity-100 transition-opacity bg-fg/10 backdrop-blur-[1px]">
            <span class="inline-flex items-center gap-1.5 bg-bg border border-border rounded-md px-3 py-1.5 text-xs font-mono text-fg">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i> Full size
            </span>
          </div>
        </div>`;
    } else {
      // Multiple images — slider
      const sliderId = "sc-slider-" + Math.random().toString(36).slice(2, 7);
      const slides = imgs
        .map(
          (src, i) => `
        <div class="sc-slide shrink-0 w-full relative group/sc cursor-zoom-in" data-index="${i}" onclick="openImageLightbox('${src}')">
          <img src="${src}" alt="Screenshot ${i + 1}"
            class="w-full rounded-xl border border-border bg-hoverBg object-contain select-none"
            style="max-height:460px;" />
          <div class="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover/sc:opacity-100 transition-opacity bg-fg/10 backdrop-blur-[1px]">
            <span class="inline-flex items-center gap-1.5 bg-bg border border-border rounded-md px-3 py-1.5 text-xs font-mono text-fg">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i> Full size
            </span>
          </div>
        </div>`,
        )
        .join("");

      const dots = imgs
        .map(
          (_, i) => `
        <button onclick="sliderGo('${sliderId}',${i})"
          class="sc-dot w-1.5 h-1.5 rounded-full transition-all duration-200 interactive cursor-none ${i === 0 ? "bg-fg scale-125" : "bg-border hover:bg-muted"}"
          data-index="${i}"></button>`,
        )
        .join("");

      scBox.innerHTML = `
        <div class="relative" id="${sliderId}">
          <!-- Slide track -->
          <div class="sc-track overflow-hidden rounded-xl">
            <div class="sc-inner flex transition-transform duration-350 ease-out" style="transform:translateX(0%)">
              ${slides}
            </div>
          </div>
          <!-- Prev -->
          <button onclick="sliderStep('${sliderId}',-1)"
            class="interactive cursor-none absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-bg/80 backdrop-blur-sm border border-border text-fg hover:bg-fg hover:text-bg transition-colors shadow-md">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </button>
          <!-- Next -->
          <button onclick="sliderStep('${sliderId}',1)"
            class="interactive cursor-none absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-bg/80 backdrop-blur-sm border border-border text-fg hover:bg-fg hover:text-bg transition-colors shadow-md">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
          <!-- Counter + dots -->
          <div class="flex items-center justify-center gap-2 mt-3">
            <span class="sc-counter font-mono text-[10px] text-muted">1 / ${imgs.length}</span>
            <div class="flex items-center gap-1.5">${dots}</div>
          </div>
        </div>`;
    }
  } else scCon.style.display = "none";

  const actCon = document.getElementById("drawer-actions");
  const headCon = document.getElementById("drawer-header-actions");
  actCon.innerHTML = "";
  headCon.innerHTML = "";
  if (d.link) {
    const li = d.linkIcon || "external-link";
    actCon.innerHTML = `<a href="${d.link}" target="_blank"
      class="interactive cursor-none inline-flex items-center gap-2 px-4 py-2 bg-fg text-bg hover:opacity-85 transition-opacity font-medium text-sm rounded-lg shadow-sm">
      <i data-lucide="${li}" class="w-4 h-4"></i>${d.linkText}</a>`;
    headCon.innerHTML = `<a href="${d.link}" target="_blank"
      class="interactive cursor-none p-1.5 border border-border rounded-md hover:bg-fg hover:text-bg transition-colors" title="${d.linkText}">
      <i data-lucide="${li}" class="w-4 h-4"></i></a>`;
  }

  lucide.createIcons();
}

// Public: navigate forward to a details pane
function openDetails(type, id) {
  const isAlreadyOpen = _drawerOpen;
  _drawerHistory.push({ type, id });

  if (isAlreadyOpen) {
    _slideContent("forward", () => {
      _renderDetailsPane(type, id);
      _updateBackBtn();
      lucide.createIcons();
    });
  } else {
    _renderDetailsPane(type, id);
    openDrawerUI();
  }
}

// ============================================================
// SCREENSHOT SLIDER
// ============================================================
function _sliderState(sliderId) {
  const root = document.getElementById(sliderId);
  if (!root) return null;
  const inner = root.querySelector(".sc-inner");
  const slides = root.querySelectorAll(".sc-slide");
  const dots = root.querySelectorAll(".sc-dot");
  const counter = root.querySelector(".sc-counter");
  const current = parseInt(inner.dataset.current || "0");
  return { root, inner, slides, dots, counter, current, total: slides.length };
}

function sliderGo(sliderId, index) {
  const s = _sliderState(sliderId);
  if (!s) return;
  const i = Math.max(0, Math.min(index, s.total - 1));
  s.inner.style.transform = `translateX(-${i * 100}%)`;
  s.inner.dataset.current = i;
  s.dots.forEach((d, di) => {
    d.classList.toggle("bg-fg", di === i);
    d.classList.toggle("scale-125", di === i);
    d.classList.toggle("bg-border", di !== i);
  });
  if (s.counter) s.counter.textContent = `${i + 1} / ${s.total}`;
}

function sliderStep(sliderId, dir) {
  const s = _sliderState(sliderId);
  if (!s) return;
  sliderGo(sliderId, s.current + dir);
}

// ============================================================
// LIGHTBOX
// ============================================================
function openImageLightbox(src) {
  let lb = document.getElementById("image-lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "image-lightbox";
    lb.className =
      "fixed inset-0 z-[200] bg-fg/80 backdrop-blur-md flex items-center justify-center p-4 opacity-0 transition-opacity duration-200";
    lb.innerHTML = `
      <button onclick="closeImageLightbox()" class="absolute top-4 right-4 p-2 border border-border rounded-md bg-bg text-fg hover:opacity-70 transition-opacity interactive cursor-none">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <img id="lightbox-img" src="" class="max-w-full max-h-full object-contain rounded-md shadow-2xl" />`;
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeImageLightbox();
    });
    document.body.appendChild(lb);
  }
  document.getElementById("lightbox-img").src = src;
  lb.classList.remove("hidden");
  void lb.offsetWidth;
  lb.classList.remove("opacity-0");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeImageLightbox() {
  const lb = document.getElementById("image-lightbox");
  if (!lb) return;
  lb.classList.add("opacity-0");
  setTimeout(() => {
    lb.classList.add("hidden");
    if (
      !document.querySelector(".modal-view:not(.hidden)") &&
      drawerOverlay.classList.contains("hidden")
    ) {
      document.body.style.overflow = "";
    }
  }, 200);
}

// ============================================================
// SKILL DRAWER
// ============================================================

// Private: render skill pane content
function _renderSkillPane(skill) {
  const meta = skillMetaMap[skill] || {
    name: skill,
    isLucide: true,
    icon: "code-2",
    level: 70,
  };

  const usageMap = { project: [], experience: [], publication: [], other: [] };
  for (const [type, dict] of Object.entries(detailsData)) {
    for (const [k, v] of Object.entries(dict || {})) {
      if (v.stack && v.stack.includes(skill)) usageMap[type].push([k, v]);
    }
  }
  const totalUsage = Object.values(usageMap).reduce((s, a) => s + a.length, 0);

  const iconHtml = meta.isLucide
    ? `<i data-lucide="${meta.icon}" class="w-5 h-5"></i>`
    : `<i class="${meta.icon} text-xl"></i>`;

  setDrawerType("skill");
  const _metaEl = document.getElementById("drawer-meta");
  if (_metaEl) _metaEl.style.display = "none";

  document.getElementById("drawer-title").innerHTML = `
    <span class="inline-flex items-center gap-2.5">
      <span class="p-1.5 border border-border rounded-md bg-hoverBg text-fg">${iconHtml}</span>
      ${skill}
    </span>`;
  document.getElementById("drawer-actions").innerHTML = "";
  document.getElementById("drawer-header-actions").innerHTML = "";

  let html = `
    <div class="mb-8 p-4 border border-border rounded-xl bg-hoverBg/50">
      <div class="flex items-center justify-between mb-3">
        <span class="font-mono text-xs text-muted uppercase tracking-wider">Proficiency</span>
        <span class="font-mono text-xs font-bold text-fg">${meta.level}%</span>
      </div>
      <div class="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div class="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-400 skill-bar-fill" style="width:0%" data-target="${meta.level}%"></div>
      </div>
      <div class="mt-3 flex items-center gap-1.5 text-xs text-muted font-mono">
        <i data-lucide="layers" class="w-3.5 h-3.5"></i>
        Used in <strong class="text-fg">${totalUsage}</strong> ${totalUsage === 1 ? "item" : "items"} across the portfolio
      </div>
    </div>`;

  const sectionMeta = [
    { key: "project", label: "Projects", icon: "folder-open" },
    { key: "experience", label: "Experience", icon: "briefcase" },
    { key: "publication", label: "Publications", icon: "book-open" },
    { key: "other", label: "Others", icon: "layers" },
  ];

  let hasAny = false;
  for (const { key, label, icon } of sectionMeta) {
    const matches = usageMap[key];
    if (!matches.length) continue;
    hasAny = true;
    html += `
      <div class="mb-6">
        <h4 class="font-mono text-[10px] text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <i data-lucide="${icon}" class="w-3.5 h-3.5"></i>${label}
        </h4>
        <div class="flex flex-col gap-2">`;
    matches.forEach(([k, v]) => {
      const isNew = v.isNew
        ? `<span class="new-badge inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm"><i data-lucide="sparkles" class="w-2.5 h-2.5"></i>New</span>`
        : "";
      const isFeat = v.featured
        ? `<span class="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-violet-500 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm"><i data-lucide="star" class="w-2 h-2"></i>Featured</span>`
        : "";
      const preview =
        stripHtml(v.description).slice(0, 90) +
        (stripHtml(v.description).length > 90 ? "…" : "");
      html += `
        <button onclick="openDetails('${key}','${k}')"
          class="text-left p-4 border border-border rounded-xl hover:bg-hoverBg hover:border-fg/20 transition-all interactive cursor-none group/item">
          <div class="flex flex-wrap items-center gap-1.5 mb-1.5">
            <h5 class="font-medium text-fg text-sm group-hover/item:underline">${v.title}</h5>
            ${isFeat}${isNew}
          </div>
          <p class="text-xs text-muted leading-relaxed">${preview}</p>
        </button>`;
    });
    html += `</div></div>`;
  }

  if (!hasAny)
    html += `<p class="text-muted text-sm">Nothing logged for <strong class="text-fg">${skill}</strong> yet.</p>`;

  document.getElementById("drawer-description").innerHTML = html;
  [
    "drawer-visual-container",
    "drawer-stack-container",
    "drawer-screenshots-container",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  // Animate bar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        bar.style.transition = "width 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
        bar.style.width = bar.dataset.target;
      });
      lucide.createIcons();
    });
  });
}

// Public: navigate to skill pane
function openSkillDrawer(skill) {
  // Dismiss the hint permanently
  const hint = document.getElementById("skill-pill-hint");
  if (hint) {
    hint.style.opacity = "0";
    setTimeout(() => hint.remove(), 500);
  }

  const isAlreadyOpen = _drawerOpen;
  _drawerHistory.push({ skill });

  if (isAlreadyOpen) {
    _slideContent("forward", () => {
      _renderSkillPane(skill);
      _updateBackBtn();
      lucide.createIcons();
    });
  } else {
    _renderSkillPane(skill);
    openDrawerUI();
  }
}

// ============================================================
// MODALS
// ============================================================
function openModal(modalId) {
  const m = document.getElementById(modalId);
  m.classList.remove("hidden");
  void m.offsetWidth;
  m.classList.remove("opacity-0");
  document.body.style.overflow = "hidden";
}
function closeModal(modalId) {
  const m = document.getElementById(modalId);
  m.classList.add("opacity-0");
  setTimeout(() => {
    m.classList.add("hidden");
    if (
      !document.querySelector(".modal-view:not(.hidden)") &&
      drawerOverlay.classList.contains("hidden")
    )
      document.body.style.overflow = "";
  }, 300);
}
function closeAllModals() {
  document.querySelectorAll(".modal-view").forEach((m) => closeModal(m.id));
  closeDrawer();
}

// ============================================================
// ACCORDION FIX (proper toggle)
// ============================================================
function initAccordions() {
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".accordion-icon");
      const isOpen = !content.classList.contains("hidden");
      if (isOpen) {
        content.classList.add("hidden");
        icon.classList.remove("rotate-180");
      } else {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180");
      }
    });
  });
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.remove("opacity-0");
  setTimeout(() => t.classList.add("opacity-0"), 3000);
}

// ============================================================
// THEME
// ============================================================
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  htmlEl.classList.add("dark");
  themeIcon.setAttribute("data-lucide", "sun");
} else {
  htmlEl.classList.remove("dark");
  themeIcon.setAttribute("data-lucide", "moon");
}
themeToggleBtn.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  const isDark = htmlEl.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
  lucide.createIcons();
});

// ============================================================
// MOBILE MENU
// ============================================================
const mobileBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
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
document
  .querySelectorAll(".mobile-link")
  .forEach((l) => l.addEventListener("click", toggleMenu));

// ============================================================
// NAV SCROLL SYNC
// ============================================================
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 200;
  let current = "";
  document.querySelectorAll("main section[id]").forEach((s) => {
    if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.clientHeight)
      current = s.id;
  });
  document.querySelectorAll("#desktop-nav a").forEach((l) => {
    l.classList.toggle(
      "text-fg",
      l.getAttribute("href").includes(current) && current !== "",
    );
    l.classList.toggle(
      "text-muted",
      !l.getAttribute("href").includes(current) || current === "",
    );
  });
});

// ============================================================
// DEVICE CHECK
// ============================================================
const isTouchDevice = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  window.matchMedia("(pointer: coarse)").matches;

// ============================================================
// CURSOR
// ============================================================
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
  const animCursor = () => {
    outlineX += (mouseX - outlineX) * 0.2;
    outlineY += (mouseY - outlineY) * 0.2;
    cursorOutline.style.transform = `translate(calc(-50% + ${outlineX}px), calc(-50% + ${outlineY}px))`;
    requestAnimationFrame(animCursor);
  };
  animCursor();
} else {
  document
    .querySelectorAll(".custom-cursor")
    .forEach((el) => (el.style.display = "none"));
}

// ============================================================
// HOVER LISTENERS
// ============================================================
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

// ============================================================
// MAGNETIC
// ============================================================
function initMagnetic() {
  if (isTouchDevice()) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
      el.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    });
    el.addEventListener("mouseenter", () => {
      el.style.transition = "none";
    });
  });
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
    { threshold: 0.07, rootMargin: "0px 0px -40px 0px" },
  );
  document
    .querySelectorAll(".fade-up, .stagger-parent")
    .forEach((el) => obs.observe(el));
}

// ============================================================
// BOOT
// ============================================================
renderStats();
renderFeatured();
renderExperience();
renderProjectsPreview();
renderPublicationsPreview();
renderOthersPreview();
renderSkills();
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
lucide.createIcons();
attachHoverListeners();
initMagnetic();
initScrollAnimations();
initAccordions();
