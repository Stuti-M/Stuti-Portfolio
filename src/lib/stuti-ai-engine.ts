/**
 * STUTI AI - PORTFOLIO INTELLIGENCE SYSTEM
 * Knowledge Base & Natural Language Query Engine
 * 
 * Specialized AI Assistant for Stuti Mohapatra's Developer Portfolio
 */

export interface AIResponse {
  id: string;
  query: string;
  answer: string;
  category: "PROJECTS" | "EXPERIENCE" | "SKILLS" | "ACHIEVEMENTS" | "CAREER" | "GENERAL";
  badges?: string[];
  metrics?: { label: string; value: string }[];
  actionLinks?: { label: string; to: string; emoji?: string }[];
  suggestedFollowUps?: string[];
  confidence: number;
}

export interface SuggestedPrompt {
  id: string;
  category: "PROJECTS" | "EXPERIENCE" | "SKILLS" | "ACHIEVEMENTS" | "CAREER";
  question: string;
  icon?: string;
  badge?: string;
}

export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  // PROJECTS
  {
    id: "p1",
    category: "PROJECTS",
    question: "What is Stuti's strongest project?",
    badge: "FEATURED",
  },
  {
    id: "p2",
    category: "PROJECTS",
    question: "Explain Prabandh-Drishti.",
    badge: "CIVIC AI",
  },
  {
    id: "p3",
    category: "PROJECTS",
    question: "What technologies does Stuti use?",
    badge: "TECH STACK",
  },
  {
    id: "p4",
    category: "PROJECTS",
    question: "Show me her AI/ML projects.",
    badge: "TINYML & AGENTS",
  },
  {
    id: "p5",
    category: "PROJECTS",
    question: "How does the Smart Safety Watch work without internet?",
    badge: "OFFLINE MESH",
  },
  {
    id: "p6",
    category: "PROJECTS",
    question: "Tell me about Sentinel-X and the 2nd place hackathon win.",
    badge: "AGENTIC AI",
  },

  // EXPERIENCE
  {
    id: "e1",
    category: "EXPERIENCE",
    question: "Tell me about her internship.",
    badge: "GOVT OF INDIA",
  },
  {
    id: "e2",
    category: "EXPERIENCE",
    question: "What did she build at Paradip Port Authority?",
    badge: "ENTERPRISE IT",
  },
  {
    id: "e3",
    category: "EXPERIENCE",
    question: "Did she receive any formal recommendations or commendations?",
    badge: "COMMENDATION",
  },

  // SKILLS
  {
    id: "s1",
    category: "SKILLS",
    question: "What are her strongest technical skills?",
    badge: "PRECISION",
  },
  {
    id: "s2",
    category: "SKILLS",
    question: "Is she more focused on AI or frontend?",
    badge: "FULL-STACK SPECTRUM",
  },
  {
    id: "s3",
    category: "SKILLS",
    question: "What embedded and IoT protocols does she use?",
    badge: "ESP32 & LORA",
  },
  {
    id: "s4",
    category: "SKILLS",
    question: "What is her DSA and problem-solving background?",
    badge: "LEETCODE & DSA",
  },

  // ACHIEVEMENTS
  {
    id: "a1",
    category: "ACHIEVEMENTS",
    question: "What hackathons has she won?",
    badge: "🥈 2ND PLACE",
  },
  {
    id: "a2",
    category: "ACHIEVEMENTS",
    question: "What are her biggest achievements?",
    badge: "PODIUM TRACK RECORD",
  },
  {
    id: "a3",
    category: "ACHIEVEMENTS",
    question: "Tell me about her SheCodex 2nd place finish.",
    badge: "SHECODEX",
  },

  // CAREER
  {
    id: "c1",
    category: "CAREER",
    question: "Why should I hire Stuti?",
    badge: "RECRUITER ESSENTIAL",
  },
  {
    id: "c2",
    category: "CAREER",
    question: "What kind of internship is she looking for?",
    badge: "AVAILABILITY",
  },
  {
    id: "c3",
    category: "CAREER",
    question: "How can I contact or schedule an interview with Stuti?",
    badge: "DIRECT COMMS",
  },
];

// PORTFOLIO KNOWLEDGE BASE ENTRIES
const KNOWLEDGE_BASE: {
  keywords: string[];
  patterns: RegExp[];
  response: Omit<AIResponse, "id" | "query">;
}[] = [
  // 1. STRONGEST / FLAGSHIP PROJECT: SMART SAFETY WATCH
  {
    keywords: [
      "strongest project",
      "best project",
      "flagship",
      "smart safety watch",
      "safety watch",
      "wearable",
      "offline emergency",
      "mesh",
      "lora",
      "tinyml watch",
    ],
    patterns: [
      /strongest project/i,
      /best project/i,
      /smart safety watch/i,
      /offline emergency/i,
      /how.*watch.*work/i,
      /wearable/i,
    ],
    response: {
      category: "PROJECTS",
      confidence: 0.98,
      badges: ["TinyML", "ESP32", "LoRa Mesh", "Java Spring Boot", "<45ms Latency"],
      metrics: [
        { label: "Inference Latency", value: "< 45ms (Local)" },
        { label: "Cellular Dependency", value: "0% (Decentralized)" },
        { label: "RF Frequencies", value: "868 / 915 MHz" },
      ],
      answer: `**Stuti's flagship project is the Smart Safety Watch (BUILD_01)** — an AI-powered offline emergency wearable engineered with decentralized mesh routing.

### The System Problem:
Commercial SOS systems fail in cellular blackouts, deep deadzones, or sudden violent distress events where manual phone operation is impossible.

### Stuti's Engineering Solution:
1. **On-Device TinyML Inference:** Quantized neural network models running directly on **ESP32 microcontroller firmware** to classify distress movement anomalies in **under 45ms** without cloud latency.
2. **Decentralized LoRa Mesh Routing:** Dispatches encrypted distress packets across sub-GHz radio frequencies (868/915 MHz) hopping peer-to-peer across nodes until reaching an internet-connected gateway.
3. **Enterprise Backend:** Gateway routes packets via **MQTT broker** to a **Java Spring Boot** backend REST service for responder escalation.

### Tech Stack:
\`TinyML\` • \`ESP32 / Arduino\` • \`Embedded C++\` • \`LoRa Mesh / Meshtastic\` • \`MQTT\` • \`Java\` • \`Spring Boot\` • \`REST APIs\``,
      actionLinks: [
        { label: "Inspect Stark HUD Project Specs", to: "/projects", emoji: "🦾" },
        { label: "View 7-Node Kinetic Web Lab", to: "/building", emoji: "🕷️" },
      ],
      suggestedFollowUps: [
        "Explain Sentinel-X and the 2nd place hackathon win.",
        "Explain Prabandh-Drishti.",
        "What embedded and IoT protocols does she use?",
      ],
    },
  },

  // 2. SENTINEL-X & HACKATHON WIN
  {
    keywords: [
      "sentinel-x",
      "sentinel",
      "deforestation",
      "anant chakra",
      "hackathon",
      "agentic ai",
      "groq",
      "n8n",
      "multi-agent",
      "2nd place",
    ],
    patterns: [
      /sentinel/i,
      /deforestation/i,
      /anant chakra/i,
      /hackathon.*win/i,
      /agentic ai/i,
      /multi-agent/i,
    ],
    response: {
      category: "PROJECTS",
      confidence: 0.97,
      badges: ["🥈 2nd Place Winner", "Multi-Agent AI", "Groq LLM", "n8n Orchestration", "Python"],
      metrics: [
        { label: "Hackathon Result", value: "🥈 2nd Place Runner-Up" },
        { label: "Inference Engine", value: "Groq Llama-3-70B" },
        { label: "Agent Nodes", value: "3 Autonomous Stages" },
      ],
      answer: `**Sentinel-X (BUILD_02)** is an autonomous multi-agent AI system designed for real-time illegal deforestation detection. It earned Stuti **2nd Place Runner-Up at the Anant Chakra Agentic AI Hackathon** (Chakravyuh & Genesis 2K26).

### How the Multi-Agent Pipeline Operates:
- **Acoustic Ingestion Agent:** Continuously processes forest audio telemetry streams, isolating high-frequency chainsaw and heavy machinery acoustic signatures.
- **Triage & Noise Filtering Agent:** Utilizes ultra-fast **Groq LLM inference (Llama-3-70B)** to filter out environmental noise (wind, thunder, wildlife) with zero human latency.
- **Geo-Verification & Dispatch Agent:** Clusters geographic coordinates and formats actionable dispatch alerts directly to forest ranger command squads.

### Technologies Used:
\`Multi-Agent AI\` • \`n8n Workflow Orchestration\` • \`Groq LLMs\` • \`Python\` • \`Spatial Telemetry\` • \`REST APIs\``,
      actionLinks: [
        { label: "View Hackathon Podium in Achievements", to: "/achievements", emoji: "🛡️" },
        { label: "Inspect Architecture in Work HUD", to: "/projects", emoji: "🦾" },
      ],
      suggestedFollowUps: [
        "What other hackathons has she won?",
        "What is her experience with Python & AI/ML?",
        "What is Stuti's strongest project?",
      ],
    },
  },

  // 3. PRABANDH-DRISHTI / GEOGRIEVANCE-AI
  {
    keywords: [
      "prabandh",
      "prabandh-drishti",
      "geogrievance",
      "civic",
      "infrastructure",
      "pothole",
      "computer vision",
      "spatial",
      "fastapi",
      "grievance",
    ],
    patterns: [
      /prabandh/i,
      /geogrievance/i,
      /civic/i,
      /infrastructure/i,
      /grievance/i,
    ],
    response: {
      category: "PROJECTS",
      confidence: 0.96,
      badges: ["Computer Vision", "FastAPI", "PostgreSQL", "Spatial Clustering", "React"],
      metrics: [
        { label: "Core Model", value: "CV Defect Classifier" },
        { label: "Deduplication", value: "Spatial Coordinate Match" },
        { label: "Backend Stack", value: "FastAPI + PostgreSQL" },
      ],
      answer: `**Prabandh-Drishti // GeoGrievance-AI (BUILD_03)** is an automated civic infrastructure monitoring and geo-spatial grievance triage platform.

### Core Objectives & Capabilities:
1. **AI Visual Inspection:** Uses Computer Vision to classify road and municipal defects (potholes, structural cracks, broken drainage, pipeline leaks) from citizen mobile photo uploads.
2. **Spatial Coordinate Deduplication:** Clustering algorithms automatically merge duplicate reports within radius thresholds into unified engineering tickets.
3. **Contractor Accountability & Verification:** Before-and-after visual verification ensures municipal repair compliance before releasing work orders.

### Tech Stack:
\`Python\` • \`FastAPI\` • \`Computer Vision\` • \`PostgreSQL (GIS Indexing)\` • \`Geo-Spatial APIs\` • \`React Dashboard\``,
      actionLinks: [
        { label: "View Project Specs in Work HUD", to: "/projects", emoji: "🦾" },
        { label: "Inspect Spider-Man Parker Network", to: "/building", emoji: "🕷️" },
      ],
      suggestedFollowUps: [
        "What technologies does Stuti use?",
        "Is she more focused on AI or frontend?",
        "Tell me about her internship.",
      ],
    },
  },

  // 4. INTERNSHIP & PARADIP PORT AUTHORITY EXPERIENCE
  {
    keywords: [
      "internship",
      "paradip",
      "port authority",
      "experience",
      "work experience",
      "government",
      "tech mahindra",
      "commendation",
      "recommendation",
    ],
    patterns: [
      /internship/i,
      /paradip/i,
      /port/i,
      /experience/i,
      /tech mahindra/i,
      /recommendation/i,
      /commendation/i,
    ],
    response: {
      category: "EXPERIENCE",
      confidence: 0.98,
      badges: ["Paradip Port Authority", "Govt of India", "Tech Mahindra Collab", "Executive Commendation"],
      metrics: [
        { label: "Enterprise", value: "Govt of India Port Authority" },
        { label: "Duration", value: "4 Weeks Intensive (Summer 2026)" },
        { label: "Commendation", value: "Executive Engineer Recognition" },
      ],
      answer: `Stuti worked as a **Software Developer Intern at Paradip Port Authority (Government of India Enterprise)** in June–July 2026.

### Key Contributions & Scope:
- **Department:** Electrical & Mechanical Department / Planning & Design Cell.
- **Enterprise IT Workflows:** Hands-on operational software execution, database integration, and administrative IT infrastructure maintenance.
- **Industry Collaboration:** Worked alongside engineers on software systems executed in technical collaboration with **Tech Mahindra**.
- **Formal Executive Commendation:** Recognized in writing by the Executive Engineer (Planning & Design Cell) for technical diligence, disciplined execution, and sincerity.

### Focus Competencies:
\`Enterprise System Workflows\` • \`Database Integration\` • \`Technical Documentation\` • \`Govt IT Infrastructure\` • \`Tech Mahindra Systems\``,
      actionLinks: [
        { label: "View Full Hulk Gamma Impact Dossier", to: "/experience", emoji: "💚" },
        { label: "See Government Commendation", to: "/achievements", emoji: "🛡️" },
      ],
      suggestedFollowUps: [
        "Why should I hire Stuti?",
        "What are her strongest technical skills?",
        "What hackathons has she won?",
      ],
    },
  },

  // 5. TECHNICAL SKILLS & STACK
  {
    keywords: [
      "skills",
      "tech stack",
      "technologies",
      "languages",
      "frameworks",
      "tools",
      "what does she use",
      "coding",
    ],
    patterns: [
      /skills/i,
      /tech.*stack/i,
      /technolog/i,
      /what.*technologies/i,
      /languages/i,
      /frameworks/i,
    ],
    response: {
      category: "SKILLS",
      confidence: 0.97,
      badges: ["Java", "Python", "C++", "TypeScript", "TinyML", "ESP32", "LoRa", "Spring Boot", "FastAPI", "React"],
      answer: `Stuti's engineering toolkit spans from **low-level microcontroller firmware to cloud backends, AI agents, and frontend interfaces**:

### 1. AI / ML & Edge Intelligence
- **TinyML & Edge Impulse:** Quantized on-device neural network models on microcontrollers
- **Multi-Agent AI:** Autonomous agent orchestration with \`n8n\` and \`Groq LLMs\` (Llama-3-70B)
- **Computer Vision & Python:** OpenCV, defect classification, data preprocessing

### 2. Embedded Systems & RF Telemetry
- **Hardware:** ESP32, Arduino, MPU6050, sensors, interrupts, GPIO
- **Languages:** Embedded C++, C
- **Radio & Mesh:** LoRa Mesh (868/915 MHz), Meshtastic packet standard, MQTT broker

### 3. Backend & Infrastructure
- **Languages & Frameworks:** Java, Spring Boot, Python, FastAPI
- **Databases & APIs:** PostgreSQL, RESTful API architecture, JSON contracts

### 4. Frontend & Web Engineering
- **Stack:** JavaScript, TypeScript, React, HTML5, Semantic CSS3, Tailwind CSS
- **Tools:** Git, GitHub, Vite, TanStack Router/Query, Responsive design systems`,
      actionLinks: [
        { label: "Lock onto Hawkeye Precision Reticle", to: "/skills", emoji: "🏹" },
        { label: "View Live LeetCode Progress", to: "/skills", emoji: "🎯" },
      ],
      suggestedFollowUps: [
        "Is she more focused on AI or frontend?",
        "What is Stuti's strongest project?",
        "What is her DSA and problem-solving background?",
      ],
    },
  },

  // 6. AI VS FRONTEND FOCUS
  {
    keywords: [
      "ai or frontend",
      "more focused on ai",
      "frontend or backend",
      "full stack",
      "focus",
      "specialization",
      "direction",
    ],
    patterns: [
      /focused.*(ai|frontend|backend)/i,
      /ai.*vs.*frontend/i,
      /specialization/i,
      /what.*focus/i,
    ],
    response: {
      category: "SKILLS",
      confidence: 0.95,
      badges: ["T-Shaped Engineer", "Edge AI & Systems", "Modern Frontend UI/UX", "End-to-End Execution"],
      answer: `**Stuti is a systems builder who bridges Edge AI / Backend and clean modern Frontend interfaces.**

- **Her Primary Depth (Core Engineering):**
  On-device **Edge AI (TinyML)**, autonomous **multi-agent architectures**, embedded IoT firmware (**ESP32 + LoRa**), and robust backends (**Java/Spring Boot & Python/FastAPI**).

- **Her Frontend Capability:**
  Certified in Front-End Web Development with strong mastery of **TypeScript, React, Tailwind CSS, and UX design systems** (as demonstrated by this entire custom-engineered Marvel HUD portfolio!).

- **Why this matters for your team:**
  She doesn't just train a model or write a script in a notebook — she builds the **hardware sensor ingestion, firmware logic, backend API, and interactive user dashboard** end-to-end.`,
      actionLinks: [
        { label: "Explore Thor Asgardian Philosophy", to: "/about", emoji: "⚡" },
        { label: "Inspect Iron Man Stark HUD", to: "/projects", emoji: "🦾" },
      ],
      suggestedFollowUps: [
        "Why should I hire Stuti?",
        "What is Stuti's strongest project?",
        "What kind of internship is she looking for?",
      ],
    },
  },

  // 7. ALL ACHIEVEMENTS & HACKATHONS
  {
    keywords: [
      "achievements",
      "awards",
      "hackathons",
      "competitions",
      "shecodex",
      "anant chakra",
      "podium",
      "2nd",
      "wins",
    ],
    patterns: [
      /achievement/i,
      /hackathon/i,
      /award/i,
      /shecodex/i,
      /podium/i,
      /wins/i,
    ],
    response: {
      category: "ACHIEVEMENTS",
      confidence: 0.98,
      badges: ["2× Podium Finisher", "Agentic AI Hackathon 🥈", "SheCodex Challenge 🥈", "Govt Commendation"],
      metrics: [
        { label: "Podiums Earned", value: "2× Runner-Up" },
        { label: "Govt Commendation", value: "1 (Paradip Port)" },
        { label: "Certifications", value: "Front-End Web Dev" },
      ],
      answer: `Stuti has a verified track record of **podium finishes in competitive engineering sprints**:

### 1. 🥈 2nd Place // Anant Chakra Agentic AI Hackathon (2026)
- **Event:** Chakravyuh & Genesis 2K26 Agentic AI Hackathon.
- **Built:** **Sentinel-X** — an autonomous multi-agent AI system for illegal deforestation detection using Groq LLM inference and n8n orchestration.

### 2. 🥈 2nd Place // SheCodex Women's Day Coding Challenge
- **Organized by:** CODEX Club.
- **Domain:** Tested algorithmic accuracy, time/space complexity optimization, data structure design, and speed under time constraints.

### 3. ★ Formal Written Government Commendation
- Issued by the **Executive Engineer, Planning & Design Cell, Paradip Port Authority (Govt of India)**, commending her diligence, technical competence, and disciplined delivery during her internship.

### 4. 📜 Front-End Web Development Certification
- Verified foundations in semantic HTML5, modern CSS layouts, JavaScript, and responsive UI architecture.`,
      actionLinks: [
        { label: "Inspect Captain America Shield Podiums", to: "/achievements", emoji: "🛡️" },
        { label: "View Hulk Experience Details", to: "/experience", emoji: "💚" },
      ],
      suggestedFollowUps: [
        "Tell me about her SheCodex 2nd place finish.",
        "Why should I hire Stuti?",
        "What is her DSA and problem-solving background?",
      ],
    },
  },

  // 8. WHY HIRE STUTI / RECRUITER PITCH
  {
    keywords: [
      "why hire",
      "hire stuti",
      "strengths",
      "why should i hire",
      "recruiter",
      "hire",
      "interview",
      "value",
      "stand out",
    ],
    patterns: [
      /why.*hire/i,
      /why.*stuti/i,
      /hire.*stuti/i,
      /stand.*out/i,
      /recruiter/i,
      /value/i,
    ],
    response: {
      category: "CAREER",
      confidence: 0.99,
      badges: ["High Velocity Builder", "Edge AI to Cloud", "Disciplined Execution", "Hackathon Proven"],
      answer: `### Why Stuti Mohapatra is a High-Impact Addition to Your Team:

1. **She Actually Ships Working Systems:**
   While many students stay within basic tutorials, Stuti builds real physical & cloud systems — deploying quantized neural nets to **ESP32 chips (<45ms latency)**, routing packets over **LoRa sub-GHz mesh**, and building **multi-agent LLM systems**.

2. **Proven in Competitive High-Pressure Environments:**
   - **2× Hackathon & Coding Podium Winner** (Anant Chakra Agentic AI Hackathon & SheCodex Algorithms).
   - Proven ability to take a complex prompt and architect a working product within a 24–48 hour sprint.

3. **Enterprise & Government Production Experience:**
   - Completed a structured internship at **Paradip Port Authority (Govt of India)** with written commendation from the Executive Engineer.
   - Familiar with enterprise software workflows, Tech Mahindra system environments, and strict engineering discipline.

4. **Continuous Algorithmic Growth:**
   - Actively practices Data Structures & Algorithms (Trees, Graphs, DP) on LeetCode to ensure clean time/space complexity.

5. **First-Year Energy with Senior-Level Drive:**
   - Currently in her B.Tech CSE (2025–2029) at SOA University, bringing hunger, curiosity, and rapid adaptability to every project.`,
      actionLinks: [
        { label: "Initiate Direct Tactical Contact", to: "/contact", emoji: "🕷️" },
        { label: "Review Work Systems & HUD", to: "/projects", emoji: "🦾" },
      ],
      suggestedFollowUps: [
        "What kind of internship is she looking for?",
        "How can I contact or schedule an interview with Stuti?",
        "What is Stuti's strongest project?",
      ],
    },
  },

  // 9. INTERNSHIP & CAREER AVAILABILITY
  {
    keywords: [
      "internship looking for",
      "role",
      "job",
      "looking for",
      "availability",
      "opportunity",
      "full time",
      "summer internship",
      "open to work",
    ],
    patterns: [
      /kind.*of.*internship/i,
      /looking.*for/i,
      /availab/i,
      /open.*to/i,
      /opportunity/i,
    ],
    response: {
      category: "CAREER",
      confidence: 0.97,
      badges: ["Software Engineering", "AI / ML Engineering", "Embedded / IoT Systems", "Full-Stack Development"],
      answer: `### Stuti is Actively Seeking Engineering Internships in:

1. **AI / ML & Multi-Agent Engineering** (LLM pipelines, Edge AI, TinyML, Computer Vision, Agent orchestration)
2. **Software Engineering & Backend Systems** (Java/Spring Boot, Python/FastAPI, Distributed services, REST APIs)
3. **Embedded Systems & IoT Telemetry** (ESP32, C/C++, RF protocols, LoRa Mesh, MQTT)
4. **Full-Stack Web Development** (TypeScript, React, Modern UI/UX systems)

### Key Details:
- **Location:** Open to **Remote**, **Hybrid**, or on-site roles (Bhubaneswar, Bangalore, Hyderabad, Pune, Delhi NCR, or global remote).
- **Education Status:** 1st Year B.Tech CSE at Siksha 'O' Anusandhan University (2025–2029).
- **Readiness:** Immediately available for summer/winter internships, part-time project collaborations, or research fellowships.`,
      actionLinks: [
        { label: "Send Direct Inquiry via Contact Terminal", to: "/contact", emoji: "🕷️" },
        { label: "Request Official Resume", to: "mailto:mstuti.official@gmail.com?subject=Internship%20Opportunity%20-%20Stuti%20Mohapatra", emoji: "📄" },
      ],
      suggestedFollowUps: [
        "Why should I hire Stuti?",
        "How can I contact or schedule an interview with Stuti?",
        "What are her strongest technical skills?",
      ],
    },
  },

  // 10. CONTACT & INTERVIEW SCHEDULING
  {
    keywords: [
      "contact",
      "email",
      "linkedin",
      "github",
      "phone",
      "reach out",
      "interview",
      "schedule",
      "talk",
      "message",
    ],
    patterns: [
      /contact/i,
      /reach.*out/i,
      /email/i,
      /linkedin/i,
      /interview/i,
      /phone/i,
      /github/i,
    ],
    response: {
      category: "CAREER",
      confidence: 0.99,
      badges: ["Direct Email", "LinkedIn", "GitHub", "LeetCode", "Phone Active"],
      answer: `### Get in Touch with Stuti Mohapatra:

- 📧 **Direct Email:** [mstuti.official@gmail.com](mailto:mstuti.official@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/stuti-mohapatra-180713392](https://www.linkedin.com/in/stuti-mohapatra-180713392)
- 🐙 **GitHub:** [github.com/Stuti-M](https://github.com/Stuti-M)
- 💻 **LeetCode:** [leetcode.com/u/Stuti_Mohapatra/](https://leetcode.com/u/Stuti_Mohapatra/)
- 📱 **Phone / Mobile:** [+91 78479 71447](tel:+917847971447)
- 📍 **Location:** Bhubaneswar, Odisha, India

You can also use the **Black Widow Red Room Tactical Terminal** directly on the portfolio to transmit an encrypted direct inquiry!`,
      actionLinks: [
        { label: "Open Red Room Contact Terminal", to: "/contact", emoji: "🕷️" },
        { label: "Email Directly Now", to: "mailto:mstuti.official@gmail.com", emoji: "✉️" },
      ],
      suggestedFollowUps: [
        "What is Stuti's strongest project?",
        "Why should I hire Stuti?",
        "What kind of internship is she looking for?",
      ],
    },
  },

  // 11. EDUCATION & ACADEMICS
  {
    keywords: [
      "education",
      "university",
      "college",
      "school",
      "soa",
      "siksha",
      "b.tech",
      "degree",
      "dav",
      "academics",
    ],
    patterns: [
      /education/i,
      /university/i,
      /college/i,
      /soa/i,
      /siksha/i,
      /b\.?tech/i,
      /school/i,
      /degree/i,
    ],
    response: {
      category: "GENERAL",
      confidence: 0.98,
      badges: ["SOA University", "B.Tech CSE (2025-2029)", "DAV Public School", "Bhubaneswar"],
      answer: `### Academic Journey & Foundation:

1. **Bachelor of Technology — Computer Science & Engineering**
   - **Institution:** Siksha 'O' Anusandhan University (SOA), Bhubaneswar, Odisha, India
   - **Timeline:** 2025 — 2029 (Currently in 1st Year)
   - **Focus:** Data Structures, Computer Networks, Systems Engineering, Edge AI & Algorithms.

2. **Senior Secondary (Class XII) — Science Stream**
   - **Institution:** DAV Public School, Pokhariput, Bhubaneswar
   - **Timeline:** 2023 — 2025
   - **Core Subjects:** Physics, Chemistry, Mathematics, Computer Science.`,
      actionLinks: [
        { label: "Read Asgardian Chronicle in About", to: "/about", emoji: "⚡" },
        { label: "View Verified Achievements", to: "/achievements", emoji: "🛡️" },
      ],
      suggestedFollowUps: [
        "Tell me about her internship.",
        "What hackathons has she won?",
        "What are her strongest technical skills?",
      ],
    },
  },

  // 12. DSA & LEETCODE
  {
    keywords: [
      "dsa",
      "leetcode",
      "algorithms",
      "data structures",
      "competitive programming",
      "problem solving",
      "complexity",
    ],
    patterns: [
      /dsa/i,
      /leetcode/i,
      /algorithm/i,
      /data.*structure/i,
      /problem.*solving/i,
    ],
    response: {
      category: "SKILLS",
      confidence: 0.96,
      badges: ["LeetCode Active", "SheCodex 🥈", "Graphs & Trees", "Dynamic Programming"],
      answer: `### Algorithmic Problem Solving & DSA Profile:

- **LeetCode Handle:** [@Stuti_Mohapatra](https://leetcode.com/u/Stuti_Mohapatra/)
- **Competitive Milestone:** **2nd Place Podium at SheCodex Coding Challenge** (CODEX Club).
- **Core Strengths:**
  - Graph traversals (BFS/DFS, topological sort, shortest paths)
  - Dynamic Programming & Recursion optimization
  - Tree algorithms (Binary search trees, traversals, heap structures)
  - Two pointers, sliding windows, and bitwise manipulations
  - Memory & complexity constraints optimization in embedded/edge environments.`,
      actionLinks: [
        { label: "View Live Hawkeye LeetCode Radar", to: "/skills", emoji: "🏹" },
        { label: "Open LeetCode Profile", to: "https://leetcode.com/u/Stuti_Mohapatra/", emoji: "💻" },
      ],
      suggestedFollowUps: [
        "What are her strongest technical skills?",
        "Tell me about her SheCodex 2nd place finish.",
        "Why should I hire Stuti?",
      ],
    },
  },
];

// FALLBACK INTELLIGENT SYNTHESIS
function generateSynthesizedAnswer(query: string): AIResponse {
  const cleanQ = query.trim().toLowerCase();

  // Greeting checks
  if (/^(hi|hello|hey|greetings|start|hola|namaste|system)/i.test(cleanQ)) {
    return {
      id: `resp-${Date.now()}`,
      query,
      category: "GENERAL",
      confidence: 0.95,
      badges: ["System Online", "Level 7 Clearance", "Stuti AI Engine"],
      answer: `Hello! I am **STUTI AI**, the portfolio intelligence system for **Stuti Mohapatra**.

I have full access to Stuti's projects, codebases, hardware prototypes, internship experiences, technical skill targets, hackathon achievements, and career availability.

### How can I assist your review today?
- Ask about her **flagship projects** (*Smart Safety Watch, Sentinel-X, Prabandh-Drishti*)
- Inquire about her **Government of India internship** at *Paradip Port Authority*
- Evaluate her **skills & tech stack** (*TinyML, Multi-Agent AI, Java/Spring Boot, ESP32/LoRa, React*)
- Check her **hackathon podiums** and **why to hire her**!`,
      actionLinks: [
        { label: "03 Work // Iron Man HUD", to: "/projects", emoji: "🦾" },
        { label: "04 Experience // Hulk Impact", to: "/experience", emoji: "💚" },
        { label: "08 Contact // Black Widow Comms", to: "/contact", emoji: "🕷️" },
      ],
      suggestedFollowUps: [
        "What is Stuti's strongest project?",
        "Why should I hire Stuti?",
        "Tell me about her internship.",
      ],
    };
  }

  // Find partial keyword overlap
  const words = cleanQ.split(/\s+/).filter((w) => w.length > 2);
  let bestMatch = KNOWLEDGE_BASE[0];
  let maxScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    // Check regex patterns
    for (const pattern of entry.patterns) {
      if (pattern.test(cleanQ)) {
        score += 5;
      }
    }
    // Check keywords
    for (const kw of entry.keywords) {
      if (cleanQ.includes(kw)) {
        score += 3;
      }
      for (const w of words) {
        if (kw.includes(w)) {
          score += 1;
        }
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = entry;
    }
  }

  if (maxScore > 0) {
    return {
      id: `resp-${Date.now()}`,
      query,
      ...bestMatch.response,
    };
  }

  // Generic Intelligent Summary
  return {
    id: `resp-${Date.now()}`,
    query,
    category: "GENERAL",
    confidence: 0.85,
    badges: ["Computer Science Engineer", "Edge AI & IoT Builder", "Govt Alumnus", "Podium Winner"],
    answer: `Here is a quick overview regarding **"${query}"** in Stuti Mohapatra's portfolio:

**Stuti Mohapatra** is a Computer Science Engineering student (2025–2029) at Siksha 'O' Anusandhan University who builds systems turning ideas into working products.

### Key Portfolio Highlights:
1. **Flagship Systems:**
   - **Smart Safety Watch (BUILD_01):** Offline emergency wearable using TinyML (ESP32) + decentralized LoRa mesh + Spring Boot.
   - **Sentinel-X (BUILD_02):** Multi-agent AI deforestation detection with Groq LLMs (🥈 2nd Place Anant Chakra Hackathon).
   - **Prabandh-Drishti (BUILD_03):** Civic infrastructure monitoring with Computer Vision & spatial coordinate clustering.
2. **Industry Experience:**
   - Software Developer Intern at **Paradip Port Authority (Govt of India)** with written commendation.
3. **Core Skills:**
   - TinyML, Groq Multi-Agent LLMs, Java, Spring Boot, Python, Embedded C++, LoRa Mesh, TypeScript, React.

Feel free to pick one of the suggestions below to dive deeper into any specific aspect of her work!`,
    actionLinks: [
      { label: "Inspect All Systems in Work", to: "/projects", emoji: "🦾" },
      { label: "View Full Experience Dossier", to: "/experience", emoji: "💚" },
      { label: "Contact Stuti Directly", to: "/contact", emoji: "🕷️" },
    ],
    suggestedFollowUps: [
      "What is Stuti's strongest project?",
      "Tell me about her internship.",
      "Why should I hire Stuti?",
      "What are her strongest technical skills?",
    ],
  };
}

/**
 * Main Query Dispatcher
 */
export function queryStutiAI(userPrompt: string): AIResponse {
  const clean = userPrompt.trim().toLowerCase();

  // 1. Direct Pattern / Keyword Match
  for (const item of KNOWLEDGE_BASE) {
    for (const pat of item.patterns) {
      if (pat.test(clean)) {
        return {
          id: `resp-${Date.now()}`,
          query: userPrompt,
          ...item.response,
        };
      }
    }
  }

  // 2. Keyword Search
  for (const item of KNOWLEDGE_BASE) {
    for (const kw of item.keywords) {
      if (clean.includes(kw)) {
        return {
          id: `resp-${Date.now()}`,
          query: userPrompt,
          ...item.response,
        };
      }
    }
  }

  // 3. Synthesized Match
  return generateSynthesizedAnswer(userPrompt);
}
