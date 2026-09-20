import { i as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, n as QueryClientProvider, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as ExternalLink, C as Moon, D as Maximize2, E as Menu, F as GraduationCap, H as Cpu, I as Github, L as FolderGit2, N as Layers, O as MapPin, Q as Briefcase, U as CornerDownLeft, W as Copy, X as Check, a as Volume2, d as Sparkles, et as Bot, g as Send, i as VolumeX, it as ArrowRight, k as Mail, l as Sun, n as X, nt as Award, o as User, p as ShieldCheck, q as CircleCheck, r as Workflow, rt as ArrowUpRight, s as Terminal, v as RotateCcw, w as Minimize2, z as FileText } from "../_libs/lucide-react.mjs";
import { _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StutiAIModal-BMLkxxCG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUGGESTED_PROMPTS = [
	{
		id: "p1",
		category: "PROJECTS",
		question: "What is Stuti's strongest project?",
		badge: "FEATURED"
	},
	{
		id: "p2",
		category: "PROJECTS",
		question: "Explain Prabandh-Drishti.",
		badge: "CIVIC AI"
	},
	{
		id: "p3",
		category: "PROJECTS",
		question: "What technologies does Stuti use?",
		badge: "TECH STACK"
	},
	{
		id: "p4",
		category: "PROJECTS",
		question: "Show me her AI/ML projects.",
		badge: "TINYML & AGENTS"
	},
	{
		id: "p5",
		category: "PROJECTS",
		question: "How does the Smart Safety Watch work without internet?",
		badge: "OFFLINE MESH"
	},
	{
		id: "p6",
		category: "PROJECTS",
		question: "Tell me about Sentinel-X and the 2nd place hackathon win.",
		badge: "AGENTIC AI"
	},
	{
		id: "e1",
		category: "EXPERIENCE",
		question: "Tell me about her internship.",
		badge: "GOVT OF INDIA"
	},
	{
		id: "e2",
		category: "EXPERIENCE",
		question: "What did she build at Paradip Port Authority?",
		badge: "ENTERPRISE IT"
	},
	{
		id: "e3",
		category: "EXPERIENCE",
		question: "Did she receive any formal recommendations or commendations?",
		badge: "COMMENDATION"
	},
	{
		id: "s1",
		category: "SKILLS",
		question: "What are her strongest technical skills?",
		badge: "PRECISION"
	},
	{
		id: "s2",
		category: "SKILLS",
		question: "Is she more focused on AI or frontend?",
		badge: "FULL-STACK SPECTRUM"
	},
	{
		id: "s3",
		category: "SKILLS",
		question: "What embedded and IoT protocols does she use?",
		badge: "ESP32 & LORA"
	},
	{
		id: "s4",
		category: "SKILLS",
		question: "What is her DSA and problem-solving background?",
		badge: "LEETCODE & DSA"
	},
	{
		id: "a1",
		category: "ACHIEVEMENTS",
		question: "What hackathons has she won?",
		badge: "🥈 2ND PLACE"
	},
	{
		id: "a2",
		category: "ACHIEVEMENTS",
		question: "What are her biggest achievements?",
		badge: "PODIUM TRACK RECORD"
	},
	{
		id: "a3",
		category: "ACHIEVEMENTS",
		question: "Tell me about her SheCodex 2nd place finish.",
		badge: "SHECODEX"
	},
	{
		id: "c1",
		category: "CAREER",
		question: "Why should I hire Stuti?",
		badge: "RECRUITER ESSENTIAL"
	},
	{
		id: "c2",
		category: "CAREER",
		question: "What kind of internship is she looking for?",
		badge: "AVAILABILITY"
	},
	{
		id: "c3",
		category: "CAREER",
		question: "How can I contact or schedule an interview with Stuti?",
		badge: "DIRECT COMMS"
	}
];
var KNOWLEDGE_BASE = [
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
			"tinyml watch"
		],
		patterns: [
			/strongest project/i,
			/best project/i,
			/smart safety watch/i,
			/offline emergency/i,
			/how.*watch.*work/i,
			/wearable/i
		],
		response: {
			category: "PROJECTS",
			confidence: .98,
			badges: [
				"TinyML",
				"ESP32",
				"LoRa Mesh",
				"Java Spring Boot",
				"<45ms Latency"
			],
			metrics: [
				{
					label: "Inference Latency",
					value: "< 45ms (Local)"
				},
				{
					label: "Cellular Dependency",
					value: "0% (Decentralized)"
				},
				{
					label: "RF Frequencies",
					value: "868 / 915 MHz"
				}
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
			actionLinks: [{
				label: "Inspect Stark HUD Project Specs",
				to: "/projects",
				emoji: "🦾"
			}, {
				label: "View 7-Node Kinetic Web Lab",
				to: "/building",
				emoji: "🕷️"
			}],
			suggestedFollowUps: [
				"Explain Sentinel-X and the 2nd place hackathon win.",
				"Explain Prabandh-Drishti.",
				"What embedded and IoT protocols does she use?"
			]
		}
	},
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
			"2nd place"
		],
		patterns: [
			/sentinel/i,
			/deforestation/i,
			/anant chakra/i,
			/hackathon.*win/i,
			/agentic ai/i,
			/multi-agent/i
		],
		response: {
			category: "PROJECTS",
			confidence: .97,
			badges: [
				"🥈 2nd Place Winner",
				"Multi-Agent AI",
				"Groq LLM",
				"n8n Orchestration",
				"Python"
			],
			metrics: [
				{
					label: "Hackathon Result",
					value: "🥈 2nd Place Runner-Up"
				},
				{
					label: "Inference Engine",
					value: "Groq Llama-3-70B"
				},
				{
					label: "Agent Nodes",
					value: "3 Autonomous Stages"
				}
			],
			answer: `**Sentinel-X (BUILD_02)** is an autonomous multi-agent AI system designed for real-time illegal deforestation detection. It earned Stuti **2nd Place Runner-Up at the Anant Chakra Agentic AI Hackathon** (Chakravyuh & Genesis 2K26).

### How the Multi-Agent Pipeline Operates:
- **Acoustic Ingestion Agent:** Continuously processes forest audio telemetry streams, isolating high-frequency chainsaw and heavy machinery acoustic signatures.
- **Triage & Noise Filtering Agent:** Utilizes ultra-fast **Groq LLM inference (Llama-3-70B)** to filter out environmental noise (wind, thunder, wildlife) with zero human latency.
- **Geo-Verification & Dispatch Agent:** Clusters geographic coordinates and formats actionable dispatch alerts directly to forest ranger command squads.

### Technologies Used:
\`Multi-Agent AI\` • \`n8n Workflow Orchestration\` • \`Groq LLMs\` • \`Python\` • \`Spatial Telemetry\` • \`REST APIs\``,
			actionLinks: [{
				label: "View Hackathon Podium in Achievements",
				to: "/achievements",
				emoji: "🛡️"
			}, {
				label: "Inspect Architecture in Work HUD",
				to: "/projects",
				emoji: "🦾"
			}],
			suggestedFollowUps: [
				"What other hackathons has she won?",
				"What is her experience with Python & AI/ML?",
				"What is Stuti's strongest project?"
			]
		}
	},
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
			"grievance"
		],
		patterns: [
			/prabandh/i,
			/geogrievance/i,
			/civic/i,
			/infrastructure/i,
			/grievance/i
		],
		response: {
			category: "PROJECTS",
			confidence: .96,
			badges: [
				"Computer Vision",
				"FastAPI",
				"PostgreSQL",
				"Spatial Clustering",
				"React"
			],
			metrics: [
				{
					label: "Core Model",
					value: "CV Defect Classifier"
				},
				{
					label: "Deduplication",
					value: "Spatial Coordinate Match"
				},
				{
					label: "Backend Stack",
					value: "FastAPI + PostgreSQL"
				}
			],
			answer: `**Prabandh-Drishti // GeoGrievance-AI (BUILD_03)** is an automated civic infrastructure monitoring and geo-spatial grievance triage platform.

### Core Objectives & Capabilities:
1. **AI Visual Inspection:** Uses Computer Vision to classify road and municipal defects (potholes, structural cracks, broken drainage, pipeline leaks) from citizen mobile photo uploads.
2. **Spatial Coordinate Deduplication:** Clustering algorithms automatically merge duplicate reports within radius thresholds into unified engineering tickets.
3. **Contractor Accountability & Verification:** Before-and-after visual verification ensures municipal repair compliance before releasing work orders.

### Tech Stack:
\`Python\` • \`FastAPI\` • \`Computer Vision\` • \`PostgreSQL (GIS Indexing)\` • \`Geo-Spatial APIs\` • \`React Dashboard\``,
			actionLinks: [{
				label: "View Project Specs in Work HUD",
				to: "/projects",
				emoji: "🦾"
			}, {
				label: "Inspect Spider-Man Parker Network",
				to: "/building",
				emoji: "🕷️"
			}],
			suggestedFollowUps: [
				"What technologies does Stuti use?",
				"Is she more focused on AI or frontend?",
				"Tell me about her internship."
			]
		}
	},
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
			"recommendation"
		],
		patterns: [
			/internship/i,
			/paradip/i,
			/port/i,
			/experience/i,
			/tech mahindra/i,
			/recommendation/i,
			/commendation/i
		],
		response: {
			category: "EXPERIENCE",
			confidence: .98,
			badges: [
				"Paradip Port Authority",
				"Govt of India",
				"Tech Mahindra Collab",
				"Executive Commendation"
			],
			metrics: [
				{
					label: "Enterprise",
					value: "Govt of India Port Authority"
				},
				{
					label: "Duration",
					value: "4 Weeks Intensive (Summer 2026)"
				},
				{
					label: "Commendation",
					value: "Executive Engineer Recognition"
				}
			],
			answer: `Stuti worked as a **Software Developer Intern at Paradip Port Authority (Government of India Enterprise)** in June–July 2026.

### Key Contributions & Scope:
- **Department:** Electrical & Mechanical Department / Planning & Design Cell.
- **Enterprise IT Workflows:** Hands-on operational software execution, database integration, and administrative IT infrastructure maintenance.
- **Industry Collaboration:** Worked alongside engineers on software systems executed in technical collaboration with **Tech Mahindra**.
- **Formal Executive Commendation:** Recognized in writing by the Executive Engineer (Planning & Design Cell) for technical diligence, disciplined execution, and sincerity.

### Focus Competencies:
\`Enterprise System Workflows\` • \`Database Integration\` • \`Technical Documentation\` • \`Govt IT Infrastructure\` • \`Tech Mahindra Systems\``,
			actionLinks: [{
				label: "View Full Hulk Gamma Impact Dossier",
				to: "/experience",
				emoji: "💚"
			}, {
				label: "See Government Commendation",
				to: "/achievements",
				emoji: "🛡️"
			}],
			suggestedFollowUps: [
				"Why should I hire Stuti?",
				"What are her strongest technical skills?",
				"What hackathons has she won?"
			]
		}
	},
	{
		keywords: [
			"skills",
			"tech stack",
			"technologies",
			"languages",
			"frameworks",
			"tools",
			"what does she use",
			"coding"
		],
		patterns: [
			/skills/i,
			/tech.*stack/i,
			/technolog/i,
			/what.*technologies/i,
			/languages/i,
			/frameworks/i
		],
		response: {
			category: "SKILLS",
			confidence: .97,
			badges: [
				"Java",
				"Python",
				"C++",
				"TypeScript",
				"TinyML",
				"ESP32",
				"LoRa",
				"Spring Boot",
				"FastAPI",
				"React"
			],
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
			actionLinks: [{
				label: "Lock onto Hawkeye Precision Reticle",
				to: "/skills",
				emoji: "🏹"
			}, {
				label: "View Live LeetCode Progress",
				to: "/skills",
				emoji: "🎯"
			}],
			suggestedFollowUps: [
				"Is she more focused on AI or frontend?",
				"What is Stuti's strongest project?",
				"What is her DSA and problem-solving background?"
			]
		}
	},
	{
		keywords: [
			"ai or frontend",
			"more focused on ai",
			"frontend or backend",
			"full stack",
			"focus",
			"specialization",
			"direction"
		],
		patterns: [
			/focused.*(ai|frontend|backend)/i,
			/ai.*vs.*frontend/i,
			/specialization/i,
			/what.*focus/i
		],
		response: {
			category: "SKILLS",
			confidence: .95,
			badges: [
				"T-Shaped Engineer",
				"Edge AI & Systems",
				"Modern Frontend UI/UX",
				"End-to-End Execution"
			],
			answer: `**Stuti is a systems builder who bridges Edge AI / Backend and clean modern Frontend interfaces.**

- **Her Primary Depth (Core Engineering):**
  On-device **Edge AI (TinyML)**, autonomous **multi-agent architectures**, embedded IoT firmware (**ESP32 + LoRa**), and robust backends (**Java/Spring Boot & Python/FastAPI**).

- **Her Frontend Capability:**
  Certified in Front-End Web Development with strong mastery of **TypeScript, React, Tailwind CSS, and UX design systems** (as demonstrated by this entire custom-engineered Marvel HUD portfolio!).

- **Why this matters for your team:**
  She doesn't just train a model or write a script in a notebook — she builds the **hardware sensor ingestion, firmware logic, backend API, and interactive user dashboard** end-to-end.`,
			actionLinks: [{
				label: "Explore Thor Asgardian Philosophy",
				to: "/about",
				emoji: "⚡"
			}, {
				label: "Inspect Iron Man Stark HUD",
				to: "/projects",
				emoji: "🦾"
			}],
			suggestedFollowUps: [
				"Why should I hire Stuti?",
				"What is Stuti's strongest project?",
				"What kind of internship is she looking for?"
			]
		}
	},
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
			"wins"
		],
		patterns: [
			/achievement/i,
			/hackathon/i,
			/award/i,
			/shecodex/i,
			/podium/i,
			/wins/i
		],
		response: {
			category: "ACHIEVEMENTS",
			confidence: .98,
			badges: [
				"2× Podium Finisher",
				"Agentic AI Hackathon 🥈",
				"SheCodex Challenge 🥈",
				"Govt Commendation"
			],
			metrics: [
				{
					label: "Podiums Earned",
					value: "2× Runner-Up"
				},
				{
					label: "Govt Commendation",
					value: "1 (Paradip Port)"
				},
				{
					label: "Certifications",
					value: "Front-End Web Dev"
				}
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
			actionLinks: [{
				label: "Inspect Captain America Shield Podiums",
				to: "/achievements",
				emoji: "🛡️"
			}, {
				label: "View Hulk Experience Details",
				to: "/experience",
				emoji: "💚"
			}],
			suggestedFollowUps: [
				"Tell me about her SheCodex 2nd place finish.",
				"Why should I hire Stuti?",
				"What is her DSA and problem-solving background?"
			]
		}
	},
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
			"stand out"
		],
		patterns: [
			/why.*hire/i,
			/why.*stuti/i,
			/hire.*stuti/i,
			/stand.*out/i,
			/recruiter/i,
			/value/i
		],
		response: {
			category: "CAREER",
			confidence: .99,
			badges: [
				"High Velocity Builder",
				"Edge AI to Cloud",
				"Disciplined Execution",
				"Hackathon Proven"
			],
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
			actionLinks: [{
				label: "Initiate Direct Tactical Contact",
				to: "/contact",
				emoji: "🕷️"
			}, {
				label: "Review Work Systems & HUD",
				to: "/projects",
				emoji: "🦾"
			}],
			suggestedFollowUps: [
				"What kind of internship is she looking for?",
				"How can I contact or schedule an interview with Stuti?",
				"What is Stuti's strongest project?"
			]
		}
	},
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
			"open to work"
		],
		patterns: [
			/kind.*of.*internship/i,
			/looking.*for/i,
			/availab/i,
			/open.*to/i,
			/opportunity/i
		],
		response: {
			category: "CAREER",
			confidence: .97,
			badges: [
				"Software Engineering",
				"AI / ML Engineering",
				"Embedded / IoT Systems",
				"Full-Stack Development"
			],
			answer: `### Stuti is Actively Seeking Engineering Internships in:

1. **AI / ML & Multi-Agent Engineering** (LLM pipelines, Edge AI, TinyML, Computer Vision, Agent orchestration)
2. **Software Engineering & Backend Systems** (Java/Spring Boot, Python/FastAPI, Distributed services, REST APIs)
3. **Embedded Systems & IoT Telemetry** (ESP32, C/C++, RF protocols, LoRa Mesh, MQTT)
4. **Full-Stack Web Development** (TypeScript, React, Modern UI/UX systems)

### Key Details:
- **Location:** Open to **Remote**, **Hybrid**, or on-site roles (Bhubaneswar, Bangalore, Hyderabad, Pune, Delhi NCR, or global remote).
- **Education Status:** 1st Year B.Tech CSE at Siksha 'O' Anusandhan University (2025–2029).
- **Readiness:** Immediately available for summer/winter internships, part-time project collaborations, or research fellowships.`,
			actionLinks: [{
				label: "Send Direct Inquiry via Contact Terminal",
				to: "/contact",
				emoji: "🕷️"
			}, {
				label: "Request Official Resume",
				to: "mailto:mstuti.official@gmail.com?subject=Internship%20Opportunity%20-%20Stuti%20Mohapatra",
				emoji: "📄"
			}],
			suggestedFollowUps: [
				"Why should I hire Stuti?",
				"How can I contact or schedule an interview with Stuti?",
				"What are her strongest technical skills?"
			]
		}
	},
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
			"message"
		],
		patterns: [
			/contact/i,
			/reach.*out/i,
			/email/i,
			/linkedin/i,
			/interview/i,
			/phone/i,
			/github/i
		],
		response: {
			category: "CAREER",
			confidence: .99,
			badges: [
				"Direct Email",
				"LinkedIn",
				"GitHub",
				"LeetCode",
				"Phone Active"
			],
			answer: `### Get in Touch with Stuti Mohapatra:

- 📧 **Direct Email:** [mstuti.official@gmail.com](mailto:mstuti.official@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/stuti-mohapatra-180713392](https://www.linkedin.com/in/stuti-mohapatra-180713392)
- 🐙 **GitHub:** [github.com/Stuti-M](https://github.com/Stuti-M)
- 💻 **LeetCode:** [leetcode.com/u/Stuti_Mohapatra/](https://leetcode.com/u/Stuti_Mohapatra/)
- 📱 **Phone / Mobile:** [+91 78479 71447](tel:+917847971447)
- 📍 **Location:** Bhubaneswar, Odisha, India

You can also use the **Black Widow Red Room Tactical Terminal** directly on the portfolio to transmit an encrypted direct inquiry!`,
			actionLinks: [{
				label: "Open Red Room Contact Terminal",
				to: "/contact",
				emoji: "🕷️"
			}, {
				label: "Email Directly Now",
				to: "mailto:mstuti.official@gmail.com",
				emoji: "✉️"
			}],
			suggestedFollowUps: [
				"What is Stuti's strongest project?",
				"Why should I hire Stuti?",
				"What kind of internship is she looking for?"
			]
		}
	},
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
			"academics"
		],
		patterns: [
			/education/i,
			/university/i,
			/college/i,
			/soa/i,
			/siksha/i,
			/b\.?tech/i,
			/school/i,
			/degree/i
		],
		response: {
			category: "GENERAL",
			confidence: .98,
			badges: [
				"SOA University",
				"B.Tech CSE (2025-2029)",
				"DAV Public School",
				"Bhubaneswar"
			],
			answer: `### Academic Journey & Foundation:

1. **Bachelor of Technology — Computer Science & Engineering**
   - **Institution:** Siksha 'O' Anusandhan University (SOA), Bhubaneswar, Odisha, India
   - **Timeline:** 2025 — 2029 (Currently in 1st Year)
   - **Focus:** Data Structures, Computer Networks, Systems Engineering, Edge AI & Algorithms.

2. **Senior Secondary (Class XII) — Science Stream**
   - **Institution:** DAV Public School, Pokhariput, Bhubaneswar
   - **Timeline:** 2023 — 2025
   - **Core Subjects:** Physics, Chemistry, Mathematics, Computer Science.`,
			actionLinks: [{
				label: "Read Asgardian Chronicle in About",
				to: "/about",
				emoji: "⚡"
			}, {
				label: "View Verified Achievements",
				to: "/achievements",
				emoji: "🛡️"
			}],
			suggestedFollowUps: [
				"Tell me about her internship.",
				"What hackathons has she won?",
				"What are her strongest technical skills?"
			]
		}
	},
	{
		keywords: [
			"dsa",
			"leetcode",
			"algorithms",
			"data structures",
			"competitive programming",
			"problem solving",
			"complexity"
		],
		patterns: [
			/dsa/i,
			/leetcode/i,
			/algorithm/i,
			/data.*structure/i,
			/problem.*solving/i
		],
		response: {
			category: "SKILLS",
			confidence: .96,
			badges: [
				"LeetCode Active",
				"SheCodex 🥈",
				"Graphs & Trees",
				"Dynamic Programming"
			],
			answer: `### Algorithmic Problem Solving & DSA Profile:

- **LeetCode Handle:** [@Stuti_Mohapatra](https://leetcode.com/u/Stuti_Mohapatra/)
- **Competitive Milestone:** **2nd Place Podium at SheCodex Coding Challenge** (CODEX Club).
- **Core Strengths:**
  - Graph traversals (BFS/DFS, topological sort, shortest paths)
  - Dynamic Programming & Recursion optimization
  - Tree algorithms (Binary search trees, traversals, heap structures)
  - Two pointers, sliding windows, and bitwise manipulations
  - Memory & complexity constraints optimization in embedded/edge environments.`,
			actionLinks: [{
				label: "View Live Hawkeye LeetCode Radar",
				to: "/skills",
				emoji: "🏹"
			}, {
				label: "Open LeetCode Profile",
				to: "https://leetcode.com/u/Stuti_Mohapatra/",
				emoji: "💻"
			}],
			suggestedFollowUps: [
				"What are her strongest technical skills?",
				"Tell me about her SheCodex 2nd place finish.",
				"Why should I hire Stuti?"
			]
		}
	}
];
function generateSynthesizedAnswer(query) {
	const cleanQ = query.trim().toLowerCase();
	if (/^(hi|hello|hey|greetings|start|hola|namaste|system)/i.test(cleanQ)) return {
		id: `resp-${Date.now()}`,
		query,
		category: "GENERAL",
		confidence: .95,
		badges: [
			"System Online",
			"Level 7 Clearance",
			"Stuti AI Engine"
		],
		answer: `Hello! I am **STUTI AI**, the portfolio intelligence system for **Stuti Mohapatra**.

I have full access to Stuti's projects, codebases, hardware prototypes, internship experiences, technical skill targets, hackathon achievements, and career availability.

### How can I assist your review today?
- Ask about her **flagship projects** (*Smart Safety Watch, Sentinel-X, Prabandh-Drishti*)
- Inquire about her **Government of India internship** at *Paradip Port Authority*
- Evaluate her **skills & tech stack** (*TinyML, Multi-Agent AI, Java/Spring Boot, ESP32/LoRa, React*)
- Check her **hackathon podiums** and **why to hire her**!`,
		actionLinks: [
			{
				label: "03 Work // Iron Man HUD",
				to: "/projects",
				emoji: "🦾"
			},
			{
				label: "04 Experience // Hulk Impact",
				to: "/experience",
				emoji: "💚"
			},
			{
				label: "08 Contact // Black Widow Comms",
				to: "/contact",
				emoji: "🕷️"
			}
		],
		suggestedFollowUps: [
			"What is Stuti's strongest project?",
			"Why should I hire Stuti?",
			"Tell me about her internship."
		]
	};
	const words = cleanQ.split(/\s+/).filter((w) => w.length > 2);
	let bestMatch = KNOWLEDGE_BASE[0];
	let maxScore = 0;
	for (const entry of KNOWLEDGE_BASE) {
		let score = 0;
		for (const pattern of entry.patterns) if (pattern.test(cleanQ)) score += 5;
		for (const kw of entry.keywords) {
			if (cleanQ.includes(kw)) score += 3;
			for (const w of words) if (kw.includes(w)) score += 1;
		}
		if (score > maxScore) {
			maxScore = score;
			bestMatch = entry;
		}
	}
	if (maxScore > 0) return {
		id: `resp-${Date.now()}`,
		query,
		...bestMatch.response
	};
	return {
		id: `resp-${Date.now()}`,
		query,
		category: "GENERAL",
		confidence: .85,
		badges: [
			"Computer Science Engineer",
			"Edge AI & IoT Builder",
			"Govt Alumnus",
			"Podium Winner"
		],
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
			{
				label: "Inspect All Systems in Work",
				to: "/projects",
				emoji: "🦾"
			},
			{
				label: "View Full Experience Dossier",
				to: "/experience",
				emoji: "💚"
			},
			{
				label: "Contact Stuti Directly",
				to: "/contact",
				emoji: "🕷️"
			}
		],
		suggestedFollowUps: [
			"What is Stuti's strongest project?",
			"Tell me about her internship.",
			"Why should I hire Stuti?",
			"What are her strongest technical skills?"
		]
	};
}
/**
* Main Query Dispatcher
*/
function queryStutiAI(userPrompt) {
	const clean = userPrompt.trim().toLowerCase();
	for (const item of KNOWLEDGE_BASE) for (const pat of item.patterns) if (pat.test(clean)) return {
		id: `resp-${Date.now()}`,
		query: userPrompt,
		...item.response
	};
	for (const item of KNOWLEDGE_BASE) for (const kw of item.keywords) if (clean.includes(kw)) return {
		id: `resp-${Date.now()}`,
		query: userPrompt,
		...item.response
	};
	return generateSynthesizedAnswer(userPrompt);
}
/**
* Futuristic Web Audio Sound Synthesizer for STUTI AI
* Generates restrained, subtle cinematic telemetry tones
*/
var AudioFeedbackController = class {
	ctx = null;
	enabled = true;
	constructor() {}
	initCtx() {
		if (!this.ctx && typeof window !== "undefined") {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) this.ctx = new AudioCtx();
		}
		if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
	}
	playOpen() {
		if (!this.enabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const now = this.ctx.currentTime;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(440, now);
			osc.frequency.exponentialRampToValueAtTime(880, now + .12);
			gain.gain.setValueAtTime(.04, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .18);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start(now);
			osc.stop(now + .18);
		} catch {}
	}
	playTransmit() {
		if (!this.enabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const now = this.ctx.currentTime;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "triangle";
			osc.frequency.setValueAtTime(700, now);
			osc.frequency.setValueAtTime(1050, now + .05);
			gain.gain.setValueAtTime(.035, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .12);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start(now);
			osc.stop(now + .12);
		} catch {}
	}
	playReceive() {
		if (!this.enabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const now = this.ctx.currentTime;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(880, now);
			osc.frequency.setValueAtTime(1174, now + .06);
			gain.gain.setValueAtTime(.04, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .15);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start(now);
			osc.stop(now + .15);
		} catch {}
	}
};
var audioFeedback = new AudioFeedbackController();
function StutiAIModal({ isOpen, onClose, initialPrompt, isDedicatedPage = false }) {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("ALL");
	const [soundEnabled, setSoundEnabled] = (0, import_react.useState)(true);
	const [copiedId, setCopiedId] = (0, import_react.useState)(null);
	const [searchFilter, setSearchFilter] = (0, import_react.useState)("");
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	const chatEndRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			audioFeedback.playOpen();
			if (messages.length === 0) {
				const welcomeResp = queryStutiAI("hello");
				setMessages([{
					id: "welcome-msg",
					sender: "ai",
					text: welcomeResp.answer,
					timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit"
					}),
					responsePayload: welcomeResp
				}]);
			}
			if (initialPrompt) handleSendPrompt(initialPrompt);
			setTimeout(() => {
				inputRef.current?.focus();
			}, 100);
		}
	}, [isOpen, initialPrompt]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen && !isDedicatedPage) onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isOpen,
		onClose,
		isDedicatedPage
	]);
	(0, import_react.useEffect)(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isProcessing]);
	const handleSendPrompt = (promptText) => {
		if (!promptText.trim() || isProcessing) return;
		const userTimestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		const userMsg = {
			id: `user-${Date.now()}`,
			sender: "user",
			text: promptText.trim(),
			timestamp: userTimestamp
		};
		setMessages((prev) => [...prev, userMsg]);
		setInputValue("");
		setIsProcessing(true);
		audioFeedback.playTransmit();
		setTimeout(() => {
			const aiResponse = queryStutiAI(promptText);
			const aiMsgId = `ai-${Date.now()}`;
			const fullText = aiResponse.answer;
			let currentIndex = 0;
			const streamingMsg = {
				id: aiMsgId,
				sender: "ai",
				text: "",
				timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				}),
				responsePayload: aiResponse,
				isStreaming: true
			};
			setMessages((prev) => [...prev, streamingMsg]);
			audioFeedback.playReceive();
			const stepChunk = 25;
			const streamInterval = setInterval(() => {
				currentIndex += stepChunk;
				if (currentIndex >= fullText.length) {
					clearInterval(streamInterval);
					setMessages((prev) => prev.map((msg) => msg.id === aiMsgId ? {
						...msg,
						text: fullText,
						isStreaming: false
					} : msg));
					setIsProcessing(false);
				} else setMessages((prev) => prev.map((msg) => msg.id === aiMsgId ? {
					...msg,
					text: fullText.slice(0, currentIndex)
				} : msg));
			}, 18);
		}, 380);
	};
	const handleClearSession = () => {
		const welcomeResp = queryStutiAI("hello");
		setMessages([{
			id: `welcome-${Date.now()}`,
			sender: "ai",
			text: welcomeResp.answer,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}),
			responsePayload: welcomeResp
		}]);
	};
	const copyToClipboard = (text, id) => {
		navigator.clipboard.writeText(text);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2e3);
	};
	const toggleSound = () => {
		const next = !soundEnabled;
		setSoundEnabled(next);
		audioFeedback.enabled = next;
	};
	if (!isOpen && !isDedicatedPage) return null;
	const filteredPrompts = SUGGESTED_PROMPTS.filter((p) => {
		const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
		const matchesSearch = searchFilter === "" || p.question.toLowerCase().includes(searchFilter.toLowerCase()) || p.category.toLowerCase().includes(searchFilter.toLowerCase());
		return matchesCategory && matchesSearch;
	});
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: isDedicatedPage ? "relative w-full max-w-5xl mx-auto min-h-[85vh] flex flex-col my-6 rounded-2xl border-2 border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl" : `relative w-full ${isFullscreen ? "max-w-7xl h-[95vh]" : "max-w-4xl h-[88vh] max-h-[850px]"} flex flex-col rounded-2xl border-2 border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in fade-in zoom-in-95`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative border-b border-border/80 bg-muted/40 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-pulse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30 shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-extrabold text-foreground tracking-tight",
							children: "STUTI AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden sm:inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "● ONLINE" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] text-muted-foreground uppercase tracking-wider",
						children: "PORTFOLIO INTELLIGENCE SYSTEM // ASK MY PORTFOLIO"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-1 font-mono text-[10px] text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CLEARANCE: LEVEL 7" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleSound,
							"aria-label": soundEnabled ? "Mute audio cues" : "Unmute audio cues",
							className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer",
							title: soundEnabled ? "Sound Effects Active (Click to mute)" : "Sound Effects Muted (Click to enable)",
							children: soundEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleClearSession,
							"aria-label": "Reset conversation",
							className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer",
							title: "Reset AI Session",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" })
						}),
						!isDedicatedPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsFullscreen(!isFullscreen),
							"aria-label": isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
							className: "hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer",
							title: isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode",
							children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-3.5 w-3.5" })
						}),
						!isDedicatedPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							"aria-label": "Close STUTI AI Console",
							className: "flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer",
							title: "Close (Esc)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-h-0 overflow-hidden relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid-subtle opacity-40 z-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10",
					children: [
						messages.map((msg) => {
							const isAI = msg.sender === "ai";
							const payload = msg.responsePayload;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex gap-3 sm:gap-4 ${isAI ? "items-start" : "items-start justify-end"} animate-in fade-in slide-in-from-bottom-2 duration-200`,
								children: [
									isAI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/40 shadow-xs mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `max-w-[88%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 relative ${isAI ? "border border-border/90 bg-card/90 text-foreground shadow-sm backdrop-blur-md" : "border border-primary/50 bg-primary/15 text-foreground font-mono text-sm ml-auto"}`,
										children: [
											isAI && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-border/70 font-mono text-[11px] text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold text-primary",
															children: "STUTI.AI //"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground/90 font-semibold",
															children: payload?.category || "SYSTEM"
														}),
														payload?.confidence && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-[10px] text-emerald-500",
															children: [
																"(",
																Math.round(payload.confidence * 100),
																"% match)"
															]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.timestamp }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => copyToClipboard(msg.text, msg.id),
														className: "hover:text-primary transition cursor-pointer p-1",
														title: "Copy Answer to Clipboard",
														children: copiedId === msg.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
													})]
												})]
											}),
											isAI && payload?.badges && payload.badges.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5 mb-3",
												children: payload.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20",
													children: b
												}, b))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-2 prose-invert",
												children: [msg.text, msg.isStreaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-2 h-4 ml-1 bg-primary animate-pulse align-middle" })]
											}),
											isAI && payload?.metrics && payload.metrics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-border/70 font-mono text-xs",
												children: payload.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 rounded-lg bg-muted/40 border border-border/80",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase",
														children: m.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground mt-0.5",
														children: m.value
													})]
												}, m.label))
											}),
											isAI && payload?.actionLinks && payload.actionLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 pt-3 border-t border-border/70 flex flex-wrap gap-2",
												children: payload.actionLinks.map((link) => {
													if (link.to.startsWith("http") || link.to.startsWith("mailto:")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: link.to,
														target: "_blank",
														rel: "noreferrer",
														className: "inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.emoji || "🔗" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.label }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
														]
													}, link.label);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: link.to,
														onClick: () => {
															if (!isDedicatedPage) onClose();
														},
														className: "inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.emoji || "⚡" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.label }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
														]
													}, link.label);
												})
											}),
											isAI && payload?.suggestedFollowUps && payload.suggestedFollowUps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 pt-3 border-t border-border/60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold",
													children: "SUGGESTED FOLLOW-UPS // RECRUITER EXPLORATION"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-1.5",
													children: payload.suggestedFollowUps.map((fu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => handleSendPrompt(fu),
														className: "text-left font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-card hover:border-primary hover:text-primary transition cursor-pointer text-muted-foreground",
														children: ["↳ ", fu]
													}, fu))
												})]
											})
										]
									}),
									!isAI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground border border-border mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
									})
								]
							}, msg.id);
						}),
						isProcessing && messages[messages.length - 1]?.sender === "user" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 items-center animate-in fade-in",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4 animate-spin" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card/80 px-4 py-2.5 font-mono text-xs text-primary flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QUERYING KNOWLEDGE REPOSITORY & SYNTHESIZING RESPONSE..." })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEndRef })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/80 bg-muted/25 px-4 sm:px-6 py-3 relative z-10 select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "SUGGESTED PROMPTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "// CLICK TO ASK INSTANTLY:"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: [
								"ALL",
								"PROJECTS",
								"EXPERIENCE",
								"SKILLS",
								"ACHIEVEMENTS",
								"CAREER"
							].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedCategory(cat),
								className: `font-mono text-[10px] px-2 py-0.5 rounded-md transition cursor-pointer ${selectedCategory === cat ? "bg-primary text-primary-foreground font-bold" : "bg-card/70 border border-border text-muted-foreground hover:text-foreground"}`,
								children: cat
							}, cat))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1 no-scrollbar",
						children: filteredPrompts.slice(0, 8).map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleSendPrompt(prompt.question),
							disabled: isProcessing,
							className: "shrink-0 flex items-center gap-1.5 rounded-lg border border-border bg-card/90 px-3 py-1.5 font-mono text-xs text-foreground/90 transition hover:border-primary hover:text-primary hover:bg-card disabled:opacity-50 cursor-pointer group shadow-2xs",
							children: [
								prompt.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold px-1.5 py-0.2 rounded bg-primary/15 text-primary",
									children: prompt.badge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prompt.question }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "h-3 w-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" })
							]
						}, prompt.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:px-6 sm:py-4 border-t border-border/80 bg-card/90 backdrop-blur-md relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleSendPrompt(inputValue);
						},
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-primary font-bold select-none",
								children: ">"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: "text",
								value: inputValue,
								onChange: (e) => setInputValue(e.target.value),
								placeholder: "Ask STUTI AI anything about Stuti's projects, skills, experience, achievements...",
								disabled: isProcessing,
								className: "w-full rounded-xl border border-primary/30 bg-muted/30 pl-8 pr-4 py-3 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary transition outline-none"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !inputValue.trim() || isProcessing,
							className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 font-mono text-xs font-bold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50 cursor-pointer shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "TRANSMIT"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2.5 flex flex-wrap items-center justify-between text-[10px] font-mono text-muted-foreground select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"PRESS ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "ENTER"
									}),
									" TO TRANSMIT"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "ESC"
								}), " TO DISMISS"] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ENGINE: PORTFOLIO KNOWLEDGE REPO" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-bold",
									children: "STUTI MOHAPATRA (2026)"
								})
							]
						})]
					})]
				})
			]
		})]
	});
	if (isDedicatedPage) return content;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "STUTI AI Portfolio Intelligence Console",
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			onClick: onClose
		}), content]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-7K75Q5oN.js
var styles_default = "/assets/styles-fSQDAz15.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var MARVEL_HEROES = [
	{
		id: "ironman",
		name: "Iron Man",
		codename: "Tony Stark",
		emoji: "🦾",
		colorName: "Hot-Rod Red & Gold",
		primaryColor: "#E11D48",
		accentColor: "#F59E0B",
		tagline: "Stark Industries // Arc Reactor Online",
		protocolBadge: "STARK PROTOCOL // MARK LXXXV"
	},
	{
		id: "spiderman",
		name: "Spider-Man",
		codename: "Peter Parker",
		emoji: "🕷️",
		colorName: "Web Crimson & Electric Blue",
		primaryColor: "#EF4444",
		accentColor: "#0EA5E9",
		tagline: "Friendly Neighborhood // Web-Sense Active",
		protocolBadge: "PARKER PROTOCOL // SENSE ONLINE"
	},
	{
		id: "thor",
		name: "Thor",
		codename: "God of Thunder",
		emoji: "⚡",
		colorName: "Asgardian Blue & Lightning Gold",
		primaryColor: "#2563EB",
		accentColor: "#EAB308",
		tagline: "Asgardian Power // Mjölnir Ready",
		protocolBadge: "ASGARDIAN PROTOCOL // MJÖLNIR"
	},
	{
		id: "cap",
		name: "Captain America",
		codename: "Steve Rogers",
		emoji: "🛡️",
		colorName: "Vibranium Navy & Shield Red",
		primaryColor: "#1D4ED8",
		accentColor: "#DC2626",
		tagline: "Strategic Homeland // Vibranium Defense",
		protocolBadge: "AVENGER 01 // SHIELD DEPLOYED"
	},
	{
		id: "hulk",
		name: "Hulk",
		codename: "Bruce Banner",
		emoji: "💚",
		colorName: "Gamma Emerald & Radioactive Purple",
		primaryColor: "#16A34A",
		accentColor: "#9333EA",
		tagline: "Gamma Core // Maximum Smashing Power",
		protocolBadge: "GAMMA PROTOCOL // LABS ACTIVE"
	},
	{
		id: "hawkeye",
		name: "Hawkeye",
		codename: "Clint Barton",
		emoji: "🏹",
		colorName: "Ronin Purple & Precision Crimson",
		primaryColor: "#7C3AED",
		accentColor: "#E11D48",
		tagline: "Ronin Protocol // Never Misses",
		protocolBadge: "RONIN PROTOCOL // TARGET LOCKED"
	}
];
var ThemeCtx = (0, import_react.createContext)({
	mode: "dark",
	toggleMode: () => {},
	hero: "ironman",
	setHero: () => {},
	currentHeroConfig: MARVEL_HEROES[0]
});
function ThemeProvider({ children }) {
	const [mode, setMode] = (0, import_react.useState)("dark");
	const [hero, setHeroState] = (0, import_react.useState)("ironman");
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const storedMode = localStorage.getItem("theme-mode");
		const storedHero = localStorage.getItem("marvel-hero");
		if (storedMode) setMode(storedMode);
		if (storedHero && MARVEL_HEROES.some((h) => h.id === storedHero)) setHeroState(storedHero);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		const root = document.documentElement;
		root.classList.toggle("dark", mode === "dark");
		localStorage.setItem("theme-mode", mode);
		MARVEL_HEROES.forEach((h) => root.classList.remove(`theme-${h.id}`));
		root.classList.add(`theme-${hero}`);
		root.setAttribute("data-hero", hero);
		localStorage.setItem("marvel-hero", hero);
	}, [mode, hero]);
	const toggleMode = () => {
		setMode((prev) => prev === "dark" ? "light" : "dark");
	};
	const setHero = (newHero) => {
		setHeroState(newHero);
	};
	const currentHeroConfig = MARVEL_HEROES.find((h) => h.id === hero) || MARVEL_HEROES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			mode,
			toggleMode,
			hero,
			setHero,
			currentHeroConfig
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeCtx);
var ENGINEERING_LOGS = [
	{
		id: "log-001",
		logNumber: "LOG // 001",
		title: "SMART SAFETY WATCH",
		system: "AUTONOMOUS EMERGENCY WEARABLE",
		date: "2026.08 — PRESENT",
		version: "v0.8.4-alpha",
		status: "ACTIVE_PROTOTYPE",
		statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
		problem: "Traditional personal safety alert apps fail in remote forest zones, cellular dead zones, or when the user is incapacitated and cannot manually press emergency SOS triggers.",
		whatWasBuilt: "Engineered an offline emergency wearable that combines on-device machine learning (TinyML) on an ESP32 microcontroller with a decentralized LoRa mesh networking layer and Spring Boot MQTT telemetry ingestion.",
		architectureDetails: [
			"Quantized 3-axis accelerometer/biometric anomaly detection model trained with Edge Impulse",
			"Hop-by-hop mesh broadcast across 868/915 MHz sub-GHz frequencies using Meshtastic packet formatting",
			"Low-overhead MQTT broker bridge feeding Java Spring Boot microservice for rescue dispatch mapping"
		],
		technologies: [
			"TinyML",
			"ESP32",
			"Embedded C++",
			"LoRa Mesh",
			"Java",
			"Spring Boot",
			"MQTT",
			"Edge Impulse"
		],
		takeaway: "Edge computing removes reliance on constant cloud connectivity where reliability matters most."
	},
	{
		id: "log-002",
		logNumber: "LOG // 002",
		title: "SENTINEL-X",
		system: "AGENTIC DEFORESTATION DETECTOR",
		date: "2026.06",
		version: "v1.2.0-prod",
		status: "DEPLOYED_HACKATHON",
		statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
		problem: "Illegal logging and deforestation across vast canopy reserves occur faster than human forest ranger patrols can physically verify acoustic false alarms.",
		whatWasBuilt: "Engineered a real-time multi-agent AI system for illegal deforestation detection using n8n orchestration, Groq high-speed LLM inference, and autonomous agent validation pipelines. Won 2nd Place Runner-Up at Anant Chakra Agentic AI Hackathon.",
		architectureDetails: [
			"Acoustic audio stream ingestion classifying chainsaw and heavy machinery acoustic frequencies",
			"Autonomous triage agent filtering weather/wildlife noise with Groq-accelerated Llama-3-70B models",
			"Verification agent correlating spatial GPS clusters and dispatching structured actionable escalation alerts"
		],
		technologies: [
			"Multi-Agent AI",
			"n8n",
			"Groq LLM",
			"Python",
			"Spatial Telemetry",
			"REST APIs",
			"Autonomous Agents"
		],
		takeaway: "Specialized multi-agent pipelines outperform monolithic single-prompt LLM architectures on noisy real-world data."
	},
	{
		id: "log-003",
		logNumber: "LOG // 003",
		title: "PRABANDH-DRISHTI",
		system: "CIVIC INFRASTRUCTURE GEOGRIEVANCE AI",
		date: "2026.07 — PRESENT",
		version: "v0.4.1-wip",
		status: "IN_DEVELOPMENT",
		statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
		problem: "Municipal grievance reporting lacks automated image-based verification and intelligent triage, causing severe backlog and delayed civic infrastructure repairs.",
		whatWasBuilt: "Developing an automated civic infrastructure monitoring and grievance triage engine with computer vision classification, reverse-geocoded spatial mapping, and priority escalation workflows.",
		architectureDetails: [
			"Image processing classifier to detect road damage, drainage overflow, and electrical hazards",
			"Automated deduplication algorithm grouping complaints by geographic coordinates and visual similarity",
			"Administrative dashboard with real-time status progression from inspection to resolution"
		],
		technologies: [
			"Python",
			"FastAPI",
			"Computer Vision",
			"Geo-Spatial APIs",
			"PostgreSQL",
			"React"
		],
		takeaway: "Building software that bridges citizen reports with municipal action requires strict data validation at ingestion."
	}
];
function EngineeringLogModal({ isOpen, onClose }) {
	const [selectedLog, setSelectedLog] = (0, import_react.useState)(ENGINEERING_LOGS[0]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-primary/40 bg-card shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40 select-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-amber-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-emerald-500/80" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs font-bold text-foreground ml-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5 text-primary" }), "STUTI.M // PRIVATE ENGINEERING BUILD JOURNAL"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline-block font-mono text-[11px] text-muted-foreground",
						children: "VERSION // 2026.09"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition",
						"aria-label": "Close Engineering Log",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[300px_1fr] flex-1 min-h-0 divide-y md:divide-y-0 md:divide-x divide-border overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 space-y-2 bg-muted/10 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-2 mb-2 font-semibold",
						children: [
							"BUILD RECORDS (",
							ENGINEERING_LOGS.length,
							")"
						]
					}), ENGINEERING_LOGS.map((log) => {
						const isSelected = selectedLog.id === log.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedLog(log),
							className: `w-full text-left p-3 rounded-xl border transition-all ${isSelected ? "bg-primary/15 border-primary text-foreground shadow-xs" : "border-transparent bg-card/60 hover:border-border hover:bg-card text-muted-foreground hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-mono mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: log.logNumber
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: log.date
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: log.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground truncate mt-0.5",
									children: log.system
								})
							]
						}, log.id);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8 space-y-6 overflow-y-auto bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs font-bold text-primary",
											children: selectedLog.logNumber
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `font-mono text-[10px] px-2 py-0.5 rounded-full border ${selectedLog.statusColor}`,
											children: ["● ", selectedLog.status]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: selectedLog.version
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl sm:text-3xl font-extrabold text-foreground mt-1 tracking-tight",
									children: selectedLog.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-primary font-semibold mt-0.5",
									children: selectedLog.system
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "⚠"
								}), " THE PROBLEM"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/90 leading-relaxed bg-muted/20 p-4 rounded-xl border border-border/80",
								children: selectedLog.problem
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-3.5 w-3.5 text-primary" }), " WHAT WAS BUILT & ARCHITECTURE"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground/90 leading-relaxed",
									children: selectedLog.whatWasBuilt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-2",
									children: selectedLog.architectureDetails.map((detail, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 text-xs text-muted-foreground bg-card p-2.5 rounded-lg border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail })]
									}, idx))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold",
								children: "TECHNOLOGY BLUEPRINT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: selectedLog.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip-tech",
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl border border-primary/30 bg-primary/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-primary font-bold",
								children: "ENGINEERING INSIGHT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-foreground/90 font-medium mt-0.5 italic",
								children: [
									"\"",
									selectedLog.takeaway,
									"\""
								]
							})]
						})
					]
				})]
			})]
		})
	});
}
/**
* 1. HOMEPAGE / HERO SECTION ENTRY POINT CARD
* Designed to fit the futuristic Marvel × cinematic developer aesthetic.
* Clean, non-intrusive, visually impressive.
*/
function StutiAIHeroBanner({ onOpen }) {
	const [hoveredPrompt, setHoveredPrompt] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-2xl border-2 border-primary/40 bg-card/90 p-5 sm:p-7 shadow-lg backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 group-hover:opacity-100"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-1.5 left-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition",
				children: "┌"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-1.5 right-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition",
				children: "┐"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-1.5 left-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition",
				children: "└"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-1.5 right-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition",
				children: "┘"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 font-mono text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STUTI AI" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-bold text-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "● SYSTEM ONLINE" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline-block font-mono text-[10px] text-muted-foreground",
								children: "CLEARANCE: LEVEL 7"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ASK MY PORTFOLIO" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed",
						children: "Explore my work. Ask about my projects. Find what you're looking for."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onOpen(),
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-mono font-bold text-primary-foreground shadow-md transition hover:scale-102 hover:opacity-95 hero-glow cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LAUNCH STUTI AI CONSOLE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 pt-4 border-t border-border/70 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2.5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "POPULAR RECRUITER & ENGINEER QUESTIONS:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline text-primary font-bold",
						children: "CLICK ANY TO ASK INSTANTLY →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2",
					children: [
						"What is Stuti's strongest project?",
						"Explain Prabandh-Drishti.",
						"Tell me about her internship.",
						"Why should I hire Stuti?"
					].map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onOpen(question),
						onMouseEnter: () => setHoveredPrompt(question),
						onMouseLeave: () => setHoveredPrompt(null),
						className: "text-left p-2.5 rounded-xl border border-border/80 bg-background/60 hover:border-primary hover:bg-card hover:text-primary transition font-mono text-xs flex items-center justify-between group/pill cursor-pointer shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] text-foreground/90 group-hover/pill:text-primary line-clamp-1",
							children: [
								"\"",
								question,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "h-3 w-3 text-muted-foreground group-hover/pill:text-primary shrink-0 ml-1 transition-transform group-hover/pill:translate-x-0.5" })]
					}, question))
				})]
			})
		]
	});
}
/**
* 2. FLOATING LAUNCHER HUD WIDGET
* Persistent bottom launcher visible across all pages.
* Highly aesthetic, minimalist, non-intrusive, futuristic Marvel HUD styling.
*/
function StutiAIFloatingLauncher({ onOpen }) {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col items-end",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onOpen,
			onMouseEnter: () => setIsExpanded(true),
			onMouseLeave: () => setIsExpanded(false),
			className: "group relative flex items-center gap-2.5 rounded-full border-2 border-primary/50 bg-card/95 py-2.5 px-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] cursor-pointer",
			title: "Open STUTI AI Portfolio Intelligence (Ctrl+K)",
			"aria-label": "Open STUTI AI Portfolio Intelligence",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-xs group-hover:opacity-80 transition-opacity"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/40 group-hover:scale-110 transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-left font-mono",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors",
							children: "STUTI AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-500 border border-emerald-500/30",
							children: "● ONLINE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground font-semibold",
						children: "ASK MY PORTFOLIO"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative hidden md:flex items-center text-[10px] font-mono text-muted-foreground border border-border/80 bg-muted/40 rounded px-1.5 py-0.5 ml-1",
					children: "⌘K"
				})
			]
		})
	});
}
var StutiAIContext = (0, import_react.createContext)(null);
function StutiAIProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [activePrompt, setActivePrompt] = (0, import_react.useState)(void 0);
	const isAIPage = useRouterState()?.location?.pathname === "/ai";
	const openAI = (prompt) => {
		setActivePrompt(prompt);
		setIsOpen(true);
	};
	const closeAI = () => {
		setIsOpen(false);
		setActivePrompt(void 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StutiAIContext.Provider, {
		value: {
			isOpen,
			openAI,
			closeAI,
			activePrompt
		},
		children: [
			children,
			!isAIPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StutiAIFloatingLauncher, { onOpen: () => openAI() }),
			!isAIPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StutiAIModal, {
				isOpen,
				onClose: closeAI,
				initialPrompt: activePrompt
			})
		]
	});
}
function useStutiAI() {
	const ctx = (0, import_react.useContext)(StutiAIContext);
	if (!ctx) throw new Error("useStutiAI must be used within a StutiAIProvider");
	return ctx;
}
function CommandPalette({ isOpen, onClose, onOpenRecruiterMode }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const inputRef = (0, import_react.useRef)(null);
	const listRef = (0, import_react.useRef)(null);
	const router = useRouter();
	const { openAI } = useStutiAI();
	const commands = (0, import_react.useMemo)(() => [
		{
			id: "nav-work",
			shortcutNumber: "01",
			command: "/work",
			title: "WORK & ENGINEERING SYSTEMS",
			description: "Stark HUD: Smart Safety Watch, Sentinel-X, Prabandh-Drishti",
			category: "NAVIGATION",
			icon: FolderGit2,
			action: () => {
				router.navigate({ to: "/projects" });
				onClose();
			},
			keywords: [
				"projects",
				"builds",
				"iron man",
				"hardware",
				"tinyml",
				"stark"
			]
		},
		{
			id: "nav-building",
			shortcutNumber: "02",
			command: "/building",
			title: "CURRENTLY BUILDING",
			description: "Spider-Man kinetic network of active prototypes and edge nodes",
			category: "NAVIGATION",
			icon: Workflow,
			action: () => {
				router.navigate({ to: "/building" });
				onClose();
			},
			keywords: [
				"lab",
				"spider-man",
				"mesh",
				"lora",
				"prototypes",
				"nodes"
			]
		},
		{
			id: "nav-experience",
			shortcutNumber: "03",
			command: "/experience",
			title: "INDUSTRY EXPERIENCE",
			description: "Hulk Protocol: Software Developer Intern at Paradip Port Authority",
			category: "NAVIGATION",
			icon: Briefcase,
			action: () => {
				router.navigate({ to: "/experience" });
				onClose();
			},
			keywords: [
				"internship",
				"paradip port",
				"govt of india",
				"hulk",
				"work"
			]
		},
		{
			id: "nav-skills",
			shortcutNumber: "04",
			command: "/skills",
			title: "SKILLS & TARGET RETICLE",
			description: "Hawkeye Ronin: AI/ML, Embedded C++, Spring Boot, DSA",
			category: "NAVIGATION",
			icon: Layers,
			action: () => {
				router.navigate({ to: "/skills" });
				onClose();
			},
			keywords: [
				"tech stack",
				"languages",
				"python",
				"java",
				"hawkeye",
				"tools"
			]
		},
		{
			id: "nav-achievements",
			shortcutNumber: "05",
			command: "/achievements",
			title: "ACHIEVEMENTS & PODIUMS",
			description: "Captain America: 2nd Place Agentic AI Hackathon, 2nd Place SheCodex",
			category: "NAVIGATION",
			icon: Award,
			action: () => {
				router.navigate({ to: "/achievements" });
				onClose();
			},
			keywords: [
				"hackathon",
				"awards",
				"podium",
				"captain america",
				"shecodex",
				"anant chakra"
			]
		},
		{
			id: "nav-about",
			shortcutNumber: "06",
			command: "/about",
			title: "ABOUT & JOURNEY",
			description: "Thor Asgardian Chronicle: Builder background & methodology",
			category: "NAVIGATION",
			icon: User,
			action: () => {
				router.navigate({ to: "/about" });
				onClose();
			},
			keywords: [
				"bio",
				"story",
				"education",
				"soa university",
				"thor"
			]
		},
		{
			id: "nav-contact",
			shortcutNumber: "07",
			command: "/contact",
			title: "CONTACT & COMMS",
			description: "Black Widow Tactical: Direct email, LinkedIn, LeetCode",
			category: "NAVIGATION",
			icon: Mail,
			action: () => {
				router.navigate({ to: "/contact" });
				onClose();
			},
			keywords: [
				"email",
				"message",
				"hire",
				"collaborate",
				"widow"
			]
		},
		{
			id: "act-recruiter",
			command: "/recruiter",
			title: "RECRUITER MODE",
			description: "Streamlined executive summary for fast technical review",
			category: "ACTIONS",
			icon: FileText,
			action: () => {
				onClose();
				if (onOpenRecruiterMode) onOpenRecruiterMode();
			},
			keywords: [
				"recruiter",
				"fast",
				"summary",
				"overview",
				"resume",
				"hiring"
			]
		},
		{
			id: "act-ai",
			command: "/ai",
			title: "STUTI AI INTELLIGENCE",
			description: "Ask questions directly to the portfolio AI engine",
			category: "ACTIONS",
			icon: Bot,
			action: () => {
				onClose();
				openAI();
			},
			keywords: [
				"ai",
				"assistant",
				"ask",
				"chat",
				"stuti ai",
				"intelligence"
			]
		},
		{
			id: "ext-resume",
			command: "/resume",
			title: "REQUEST RESUME",
			description: "Direct dispatch to Stuti's inbox for PDF resume",
			category: "EXTERNAL",
			icon: FileText,
			action: () => {
				window.open("mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra", "_blank");
				onClose();
			},
			keywords: [
				"cv",
				"resume",
				"pdf",
				"download"
			]
		},
		{
			id: "ext-github",
			command: "/github",
			title: "GITHUB REPOSITORY",
			description: "Explore open-source repositories and hardware code (github.com/Stuti-M)",
			category: "EXTERNAL",
			icon: Github,
			action: () => {
				window.open("https://github.com/Stuti-M", "_blank");
				onClose();
			},
			keywords: [
				"github",
				"git",
				"source code",
				"repos"
			]
		}
	], [
		router,
		onClose,
		onOpenRecruiterMode,
		openAI
	]);
	const filteredCommands = (0, import_react.useMemo)(() => {
		if (!query.trim()) return commands;
		const q = query.toLowerCase().trim();
		return commands.filter((cmd) => {
			const matchCommand = cmd.command.toLowerCase().includes(q);
			const matchTitle = cmd.title.toLowerCase().includes(q);
			const matchDesc = cmd.description.toLowerCase().includes(q);
			const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(q));
			return matchCommand || matchTitle || matchDesc || matchKeywords;
		});
	}, [commands, query]);
	(0, import_react.useEffect)(() => {
		setSelectedIndex(0);
	}, [query]);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			setQuery("");
			setSelectedIndex(0);
			setTimeout(() => {
				inputRef.current?.focus();
			}, 50);
		}
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const handleKeyDown = (e) => {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
			} else if (e.key === "Enter") {
				e.preventDefault();
				if (filteredCommands[selectedIndex]) filteredCommands[selectedIndex].action();
			} else if (e.key === "Escape") {
				e.preventDefault();
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isOpen,
		filteredCommands,
		selectedIndex,
		onClose
	]);
	(0, import_react.useEffect)(() => {
		if (listRef.current) {
			const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
			if (activeEl) activeEl.scrollIntoView({
				block: "nearest",
				behavior: "smooth"
			});
		}
	}, [selectedIndex]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[150] flex items-start justify-center p-3 sm:p-6 pt-[10vh] sm:pt-[14vh] bg-black/80 backdrop-blur-md animate-in fade-in duration-150",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl rounded-2xl border border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center px-4 py-3.5 border-b border-border/80 bg-muted/30 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4 text-primary shrink-0 animate-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "text",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search portfolio or type a command (/work, /skills, /recruiter)...",
							className: "w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none",
							autoComplete: "off",
							spellCheck: "false"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQuery(""),
							className: "p-1 rounded text-muted-foreground hover:text-foreground",
							"aria-label": "Clear search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline-flex items-center font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded bg-muted/60",
							children: "ESC to close"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: listRef,
					className: "max-h-[380px] overflow-y-auto p-2 space-y-1",
					children: filteredCommands.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center text-muted-foreground font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"No matching commands or routes found for \"",
							query,
							"\"."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-primary",
							children: "Try searching \"projects\", \"skills\", \"experience\", or \"recruiter\"."
						})]
					}) : filteredCommands.map((cmd, idx) => {
						const isSelected = idx === selectedIndex;
						const Icon = cmd.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-index": idx,
							onClick: () => cmd.action(),
							onMouseEnter: () => setSelectedIndex(idx),
							className: `flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${isSelected ? "bg-primary/15 border border-primary/50 text-foreground shadow-xs" : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-8 w-8 items-center justify-center rounded-lg border transition-colors shrink-0 ${isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-border"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											cmd.shortcutNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-primary/70 font-bold",
												children: cmd.shortcutNumber
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display font-bold text-xs sm:text-sm text-foreground truncate",
												children: cmd.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border",
												children: cmd.command
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground font-body truncate mt-0.5",
										children: cmd.description
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0 pl-2",
								children: [isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-primary font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SELECT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "h-3 w-3" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-3.5 w-3.5 ${isSelected ? "text-primary" : "opacity-0"}` })]
							})]
						}, cmd.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-2.5 border-t border-border/80 bg-muted/40 font-mono text-[11px] text-muted-foreground select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "px-1.5 py-0.5 rounded bg-card border border-border text-[9px]",
									children: "↑"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "px-1.5 py-0.5 rounded bg-card border border-border text-[9px]",
									children: "↓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "navigate" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "px-1.5 py-0.5 rounded bg-card border border-border text-[9px]",
								children: "↵"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "select" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-foreground",
							children: "COMMAND INTERFACE // ACTIVE"
						})]
					})]
				})
			]
		})
	});
}
function RecruiterModeModal({ isOpen, onClose }) {
	const router = useRouter();
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-primary/40 bg-card text-foreground shadow-2xl overflow-hidden backdrop-blur-xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-primary font-bold",
							children: "RECRUITER MODE // FAST TECHNICAL PROFILE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline font-mono text-[11px] text-muted-foreground",
							children: "EXECUTIVE SCAN VIEW"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition",
							"aria-label": "Close Recruiter Mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-body",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-xs text-primary font-semibold mb-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CANDIDATE DOSSIER" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary" }), "Bhubaneswar, India"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight",
									children: "STUTI MOHAPATRA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs sm:text-sm font-bold text-primary mt-1 uppercase tracking-wider",
									children: "Software • AI • Systems"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground max-w-2xl mt-2 leading-relaxed",
									children: "Computer Science Engineering student building reliable systems across on-device edge machine learning (TinyML), autonomous multi-agent pipelines, embedded IoT telemetry, and core algorithms."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:items-end gap-2 font-mono text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold",
										children: "● OPEN TO INTERNSHIPS & CO-OPS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:mstuti.official@gmail.com",
										className: "text-primary hover:underline font-semibold",
										children: "mstuti.official@gmail.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "+91 78479 71447"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-xl border border-border bg-card/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EDUCATION" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg font-bold text-foreground",
										children: "Siksha ‘O’ Anusandhan University"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-mono text-primary font-semibold mt-0.5",
										children: "B.Tech in Computer Science & Engineering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2025 – 2029 (Undergraduate)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bhubaneswar, Odisha" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-muted-foreground leading-relaxed",
										children: "Core coursework in Data Structures, Design & Analysis of Algorithms, Object-Oriented Programming (Java/C++), and Computer Architecture."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-xl border border-border bg-card/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPERIENCE" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-bold text-foreground",
											children: "Software Developer Intern"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-mono text-primary font-semibold mt-0.5",
											children: "Paradip Port Authority"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border",
											children: "Govt of India"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "June – July 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4 Weeks Intensive" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-muted-foreground leading-relaxed",
										children: "Completed hands-on software development under the IT Manager. Executed internal engineering workflows and received formal commendation from the Executive Engineer."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FEATURED PROJECTS & SYSTEMS" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									onClose();
									router.navigate({ to: "/projects" });
								},
								className: "font-mono text-xs text-primary hover:underline flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-xl border border-border bg-card/80 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: "BUILD_01"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold border border-amber-500/30",
												children: "PROTOTYPE"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-sm font-bold text-foreground font-sans",
											children: "Smart Safety Watch"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body leading-relaxed",
											children: "AI-powered offline emergency wearable executing quantized TinyML models on ESP32 microcontrollers with sub-GHz LoRa mesh relay."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]",
											children: [
												"ESP32",
												"TinyML",
												"LoRa",
												"MQTT",
												"Spring Boot"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80",
												children: t
											}, t))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-xl border border-border bg-card/80 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: "BUILD_02"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/30",
												children: "🥈 2ND PLACE"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-sm font-bold text-foreground font-sans",
											children: "Sentinel-X Deforestation AI"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body leading-relaxed",
											children: "Autonomous multi-agent system isolating chainsaw acoustic signatures and dispatching geo-spatial alerts via Groq Llama-3-70B models."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]",
											children: [
												"Multi-Agent AI",
												"Groq LLM",
												"n8n",
												"Python",
												"Spatial APIs"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80",
												children: t
											}, t))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-xl border border-border bg-card/80 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: "BUILD_03"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 font-bold border border-sky-500/30",
												children: "ACTIVE ARCHITECTURE"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-sm font-bold text-foreground font-sans",
											children: "Prabandh-Drishti (GeoGrievance AI)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body leading-relaxed",
											children: "Automated civic infrastructure monitoring engine combining computer vision damage classification with spatial deduplication algorithms."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]",
											children: [
												"Computer Vision",
												"FastAPI",
												"PostgreSQL",
												"React"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80",
												children: t
											}, t))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-xl border border-border bg-card/80 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: "BUILD_04"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 font-bold border border-pink-500/30",
												children: "🥈 2ND PLACE"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-sm font-bold text-foreground font-sans",
											children: "SheCodex Algorithmic Problem Engine"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body leading-relaxed",
											children: "Algorithmic system foundations: daily problem solving across graph traversals, dynamic programming, and data structures."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]",
											children: [
												"Java",
												"Python",
												"DSA",
												"Algorithms"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80",
												children: t
											}, t))
										})
									]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TECHNICAL SKILLS MATRIX" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-border bg-card/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-primary uppercase font-bold mb-2",
										children: "LANGUAGES"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Python" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Java" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• C++" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• JavaScript" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-border bg-card/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-primary uppercase font-bold mb-2",
										children: "AI / ML"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• TinyML" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Computer Vision" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• LLMs (Groq)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Edge Impulse" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-border bg-card/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-primary uppercase font-bold mb-2",
										children: "BACKEND"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Spring Boot" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• REST APIs" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• FastAPI" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• PostgreSQL" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-border bg-card/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-primary uppercase font-bold mb-2",
										children: "SYSTEMS / IoT"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• ESP32" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• LoRa Mesh" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• MQTT" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Embedded C++" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-border bg-card/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-primary uppercase font-bold mb-2",
										children: "TOOLS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Git & GitHub" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• n8n Orchestration" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Linux / Terminal" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• FreeRTOS" })
										]
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VERIFIED ACHIEVEMENTS" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-amber-500 font-bold",
											children: "🥈 2ND PLACE PODIUM"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground mt-1",
											children: "Anant Chakra Hackathon"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body mt-0.5",
											children: "Agentic AI Track (Chakravyuh & Genesis 2K26)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-amber-500 font-bold",
											children: "🥈 2ND PLACE PODIUM"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground mt-1",
											children: "SheCodex Coding Challenge"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body mt-0.5",
											children: "Women's Day Algorithmic Challenge (CODEX Club)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border border-primary/30 bg-primary/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-primary font-bold",
											children: "★ GOVT COMMENDATION"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground mt-1",
											children: "Paradip Port Authority"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground font-body mt-0.5",
											children: "Formal recognition by Executive Engineer (IT)"
										})
									]
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-border bg-muted/40 shrink-0 font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									onClose();
									router.navigate({ to: "/projects" });
								},
								className: "px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition",
								children: "VIEW PROJECTS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									onClose();
									router.navigate({ to: "/experience" });
								},
								className: "px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition",
								children: "VIEW EXPERIENCE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									onClose();
									router.navigate({ to: "/skills" });
								},
								className: "px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition",
								children: "VIEW SKILLS"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra",
							className: "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REQUEST RESUME" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mstuti.official@gmail.com",
							className: "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONTACT STUTI" })]
						})]
					})]
				})
			]
		})
	});
}
var CommandPaletteContext = (0, import_react.createContext)(null);
function CommandPaletteProvider({ children }) {
	const [isCommandPaletteOpen, setIsCommandPaletteOpen] = (0, import_react.useState)(false);
	const [isRecruiterModeOpen, setIsRecruiterModeOpen] = (0, import_react.useState)(false);
	const openCommandPalette = () => setIsCommandPaletteOpen(true);
	const closeCommandPalette = () => setIsCommandPaletteOpen(false);
	const toggleCommandPalette = () => setIsCommandPaletteOpen((prev) => !prev);
	const openRecruiterMode = () => setIsRecruiterModeOpen(true);
	const closeRecruiterMode = () => setIsRecruiterModeOpen(false);
	const toggleRecruiterMode = () => setIsRecruiterModeOpen((prev) => !prev);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setIsCommandPaletteOpen((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandPaletteContext.Provider, {
		value: {
			isCommandPaletteOpen,
			openCommandPalette,
			closeCommandPalette,
			toggleCommandPalette,
			isRecruiterModeOpen,
			openRecruiterMode,
			closeRecruiterMode,
			toggleRecruiterMode
		},
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				isOpen: isCommandPaletteOpen,
				onClose: closeCommandPalette,
				onOpenRecruiterMode: openRecruiterMode
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecruiterModeModal, {
				isOpen: isRecruiterModeOpen,
				onClose: closeRecruiterMode
			})
		]
	});
}
function useCommandPalette() {
	const ctx = (0, import_react.useContext)(CommandPaletteContext);
	if (!ctx) throw new Error("useCommandPalette must be used within a CommandPaletteProvider");
	return ctx;
}
var navItems = [
	{
		number: "01",
		to: "/",
		label: "HOME",
		hero: "S.H.I.E.L.D. HQ",
		cue: "Strategic Defense",
		isShieldIcon: true
	},
	{
		number: "02",
		to: "/building",
		label: "BUILD",
		hero: "Spider-Man",
		cue: "Kinetic Network"
	},
	{
		number: "03",
		to: "/projects",
		label: "WORK",
		hero: "Iron Man",
		cue: "Stark HUD / Systems"
	},
	{
		number: "04",
		to: "/experience",
		label: "EXPERIENCE",
		hero: "Hulk",
		cue: "Gamma Impact"
	},
	{
		number: "05",
		to: "/skills",
		label: "SKILLS",
		hero: "Hawkeye",
		cue: "Precision Targeting"
	},
	{
		number: "06",
		to: "/achievements",
		label: "ACHIEVEMENTS",
		hero: "Captain America",
		cue: "Shield Podiums"
	},
	{
		number: "07",
		to: "/about",
		label: "ABOUT",
		hero: "Thor",
		cue: "Asgardian Chronicle",
		isMjolnirIcon: true
	},
	{
		number: "08",
		to: "/contact",
		label: "CONTACT",
		hero: "Black Widow",
		cue: "Tactical Red Room",
		isWidowIcon: true
	}
];
function Navbar() {
	const { mode, toggleMode } = useTheme();
	const { openAI } = useStutiAI();
	const { openCommandPalette, openRecruiterMode } = useCommandPalette();
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [hoveredItem, setHoveredItem] = (0, import_react.useState)(null);
	const [isLogOpen, setIsLogOpen] = (0, import_react.useState)(false);
	const currentPath = useRouterState()?.location?.pathname || "/";
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const activeNav = navItems.find((l) => l.to === currentPath) || navItems[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs" : "bg-background/40 backdrop-blur-xs border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20 transition group-hover:scale-125" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "STUTI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-mono",
								children: "//"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-semibold tracking-wider",
								children: "SYSTEM"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden xl:flex items-center gap-2 font-mono text-[10px] text-muted-foreground bg-card/80 border border-border/70 rounded-full px-3 py-1 shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-bold",
								children: hoveredItem ? hoveredItem.number : activeNav.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "//" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: hoveredItem ? hoveredItem.hero : activeNav.hero
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/60",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/90",
								children: hoveredItem ? hoveredItem.cue : activeNav.cue
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1 rounded-full border border-border/80 bg-card/70 px-2.5 py-1 shadow-2xs backdrop-blur-sm",
					children: navItems.map((item) => {
						const isActive = currentPath === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onMouseEnter: () => setHoveredItem(item),
							onMouseLeave: () => setHoveredItem(null),
							className: `relative flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono transition-all duration-150 ${isActive ? "bg-primary text-primary-foreground font-bold shadow-xs scale-102" : "text-muted-foreground hover:text-foreground hover:bg-muted/80"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] opacity-70 ${isActive ? "text-primary-foreground" : "text-primary"}`,
								children: item.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-tight",
								children: item.label
							})]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openCommandPalette,
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2 sm:px-2.5 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary transition shadow-2xs cursor-pointer group",
							title: "Open Command Palette (Ctrl+K / Cmd+K)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden xl:inline text-[11px]",
									children: "COMMAND"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "hidden sm:inline-flex items-center text-[9px] px-1 py-0.2 rounded bg-muted border border-border text-muted-foreground font-mono",
									children: "⌘K"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openRecruiterMode,
							className: "inline-flex items-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2 sm:px-2.5 py-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition shadow-2xs cursor-pointer",
							title: "Open Recruiter Fast Scan View",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "RECRUITER"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => openAI(),
							className: "inline-flex items-center gap-1.5 rounded-lg border border-primary/50 bg-primary/10 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-bold text-primary transition hover:bg-primary hover:text-primary-foreground hover:scale-102 shadow-2xs cursor-pointer group",
							title: "Open STUTI AI Portfolio Intelligence",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5 group-hover:animate-bounce" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "STUTI AI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleMode,
							"aria-label": "Toggle dark and light theme",
							className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground transition hover:border-primary hover:text-primary cursor-pointer",
							children: mode === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							"aria-label": "Toggle mobile navigation menu",
							className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground lg:hidden transition hover:border-primary hover:text-primary",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-4 shadow-lg animate-in slide-in-from-top-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setMobileMenuOpen(false);
								openCommandPalette();
							},
							className: "flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-mono font-bold bg-muted/60 text-foreground border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMMANDS (⌘K)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setMobileMenuOpen(false);
								openRecruiterMode();
							},
							className: "flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RECRUITER MODE →" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setMobileMenuOpen(false);
							openAI();
						},
						className: "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-mono bg-primary/15 text-primary font-bold border border-primary/40 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STUTI AI // ASK MY PORTFOLIO" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 border border-emerald-500/30",
							children: "● ONLINE"
						})]
					}),
					navItems.map((item) => {
						const isActive = currentPath === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onClick: () => setMobileMenuOpen(false),
							className: `flex items-center justify-between rounded-xl px-3.5 py-2 text-sm font-mono transition ${isActive ? "bg-primary/15 text-primary font-bold border border-primary/40" : "text-foreground hover:bg-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-primary font-bold",
									children: item.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: item.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: item.hero
							})]
						}, item.to);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 pt-3 border-t border-border/70 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setMobileMenuOpen(false);
								setIsLogOpen(true);
							},
							className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUILD LOGS" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra",
							target: "_blank",
							rel: "noreferrer",
							className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-border bg-card text-foreground font-mono text-xs font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RESUME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-primary" })]
						})]
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineeringLogModal, {
		isOpen: isLogOpen,
		onClose: () => setIsLogOpen(false)
	})] });
}
function CustomCursor() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -100,
		y: -100
	});
	const [trail, setTrail] = (0, import_react.useState)([]);
	const [isPointer, setIsPointer] = (0, import_react.useState)(false);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const currentPath = useRouterState()?.location?.pathname || "/";
	let heroType = "shield";
	if (currentPath === "/projects") heroType = "ironman";
	else if (currentPath === "/building") heroType = "spiderman";
	else if (currentPath === "/experience") heroType = "hulk";
	else if (currentPath === "/skills") heroType = "hawkeye";
	else if (currentPath === "/achievements") heroType = "cap";
	else if (currentPath === "/about") heroType = "thor";
	else if (currentPath === "/contact") heroType = "widow";
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let trailId = 0;
		const handleMouseMove = (e) => {
			const newPos = {
				x: e.clientX,
				y: e.clientY
			};
			setPos(newPos);
			if (!isVisible) setIsVisible(true);
			if (heroType === "spiderman") setTrail((prev) => [{
				...newPos,
				id: trailId++
			}, ...prev.slice(0, 4)]);
			const target = e.target;
			if (target) {
				const isClickable = target.closest("a, button, [role='button'], input, select, textarea, .cursor-pointer") !== null;
				setIsPointer(isClickable);
			}
		};
		const handleMouseLeave = () => setIsVisible(false);
		const handleMouseEnter = () => setIsVisible(true);
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseenter", handleMouseEnter);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseenter", handleMouseEnter);
		};
	}, [isVisible, heroType]);
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "custom-cursor-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-150",
		style: { opacity: isVisible ? 1 : 0 },
		children: [
			heroType === "spiderman" && trail.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "absolute inset-0 h-full w-full pointer-events-none",
				children: trail.map((p, i) => {
					if (i === 0) return null;
					const prev = trail[i - 1];
					const opacity = (1 - i / trail.length) * .45;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: prev.x,
						y1: prev.y,
						x2: p.x,
						y2: p.y,
						stroke: "#38bdf8",
						strokeWidth: 1.5 - i * .25,
						strokeDasharray: i % 2 === 0 ? "2 2" : "none",
						style: { opacity }
					}, p.id);
				})
			}),
			heroType === "ironman" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-125" : "scale-100"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-7 w-7 rounded-full border border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.5)] flex items-center justify-center animate-spin [animation-duration:8s]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 w-1 h-1 bg-amber-400 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 w-1 h-1 bg-amber-400 rounded-full" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-10 w-10 rounded-full border border-dashed border-amber-400/40 animate-spin [animation-duration:14s] [animation-direction:reverse]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" })
					]
				})
			}),
			heroType === "spiderman" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-130" : "scale-100"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded-full border border-dashed border-sky-400/80 shadow-[0_0_8px_rgba(14,165,233,0.5)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-2 w-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.9)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-8 w-[1px] bg-sky-400/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-8 h-[1px] bg-sky-400/30" })
					]
				})
			}),
			heroType === "hulk" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-140" : "scale-100"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded-full border border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.5)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)]" })]
				})
			}),
			heroType === "hawkeye" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-130" : "scale-100"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 rounded-full border border-purple-500/80 shadow-[0_0_10px_rgba(168,85,247,0.6)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-10 w-[1px] bg-purple-400/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-10 h-[1px] bg-purple-400/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" })
					]
				})
			}),
			heroType === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-125" : "scale-100"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded-full border-2 border-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-4 w-4 rounded-full border border-red-500/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-1.5 w-1.5 rounded-full bg-blue-300" })
					]
				})
			}),
			heroType === "thor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-130" : "scale-100"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded-full border border-blue-400/60 shadow-[0_0_14px_rgba(96,165,250,0.6)] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,1)]" })]
				})
			}),
			heroType === "widow" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-130" : "scale-100"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 rounded-full border border-red-600/70 shadow-[0_0_12px_rgba(220,38,38,0.8)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]" })]
				})
			}),
			heroType === "shield" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",
				style: {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-center transition-all duration-150 ${isPointer ? "scale-120" : "scale-100"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 border border-primary/60 shadow-[0_0_8px_rgba(14,165,233,0.4)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-1.5 w-1.5 bg-primary" })]
				})
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (error instanceof Error) reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center p-8 rounded-2xl border border-border bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold text-foreground",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "An unexpected issue occurred while rendering this page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
					children: "Reload Page"
				})
			]
		})
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-primary",
					children: "404 // NOT FOUND"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl sm:text-5xl font-extrabold text-foreground",
					children: "Page Not Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground text-sm max-w-sm mx-auto",
					children: "The requested engineering module or route does not exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
					children: "Return to HQ →"
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Stuti Mohapatra | Computer Science Engineer & Builder" },
			{
				name: "description",
				content: "Computer Science Engineering student building AI, software and IoT systems through projects, internships and hackathons."
			},
			{
				property: "og:title",
				content: "Stuti Mohapatra | Computer Science Engineer & Builder"
			},
			{
				property: "og:description",
				content: "Computer Science Engineering student building at the intersection of AI, software, IoT and real-world problem solving."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFound,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "scroll-smooth",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StutiAIProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandPaletteProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col bg-background text-foreground font-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})] }) }) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-De53z0R7.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Stuti Mohapatra | S.H.I.E.L.D. Protocol — Computer Science Engineer & Builder" },
		{
			name: "description",
			content: "Computer Science Engineering student building AI, software, and IoT systems through projects, internships, and hackathons."
		},
		{
			property: "og:title",
			content: "Stuti Mohapatra | S.H.I.E.L.D. Protocol — Computer Science Engineer & Builder"
		},
		{
			property: "og:description",
			content: "I build systems that turn ideas into working products. Computer Science Engineering student building at the intersection of AI, software, IoT and real-world problem solving."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-CtlBsvIu.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About & Engineering Journey | Thor Protocol — Stuti Mohapatra" }, {
		name: "description",
		content: "Thor Asgardian Chronicle: Builder background, engineering methodology, and academic journey of Stuti Mohapatra."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./achievements-ACkGha1b.mjs");
var Route$6 = createFileRoute("/achievements")({
	head: () => ({ meta: [{ title: "Achievements & Honors | Captain America Protocol — Stuti Mohapatra" }, {
		name: "description",
		content: "Captain America Avenger 01 Protocol: Verified hackathon podiums, competitive programming milestones, and industry credentials."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./ai-B1q0y4jh.mjs");
var Route$5 = createFileRoute("/ai")({
	head: () => ({ meta: [
		{ title: "STUTI AI // ASK MY PORTFOLIO — Portfolio Intelligence System" },
		{
			name: "description",
			content: "STUTI AI: Intelligent portfolio assistant for Stuti Mohapatra. Ask about projects, skills, experience, achievements, and technical journey."
		},
		{
			property: "og:title",
			content: "STUTI AI // ASK MY PORTFOLIO — Portfolio Intelligence System"
		},
		{
			property: "og:description",
			content: "Explore Stuti Mohapatra's work, projects, hackathons, and technical systems through an interactive AI command console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./building-D3V64gY8.mjs");
var Route$4 = createFileRoute("/building")({
	head: () => ({ meta: [{ title: "Currently Building | Spider-Man Network — Stuti Mohapatra" }, {
		name: "description",
		content: "Spider-Man Parker Protocol: Kinetic network of active hardware, TinyML, and software builds."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-Q06yoeSi.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Direct Contact | Black Widow Tactical — Stuti Mohapatra" }, {
		name: "description",
		content: "Tactical communication channels: Direct email, LinkedIn, GitHub, LeetCode, and phone for Stuti Mohapatra."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./experience-CaRvRcql.mjs");
var Route$2 = createFileRoute("/experience")({
	head: () => ({ meta: [{ title: "Experience = Impact | Hulk Protocol — Stuti Mohapatra" }, {
		name: "description",
		content: "Software Developer Intern at Paradip Port Authority (Govt of India Enterprise). Hands-on software workflows and technical execution."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-BLeUMmXI.mjs");
var Route$1 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Work & Systems | Iron Man Protocol — Stuti Mohapatra" }, {
		name: "description",
		content: "Stark Engineering HUD: AI, IoT, Edge Computing, and Multi-Agent project systems."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./skills-q4ZSDSG2.mjs");
var Route = createFileRoute("/skills")({
	head: () => ({ meta: [{ title: "Precision Toolbox & Skills | Hawkeye Protocol — Stuti Mohapatra" }, {
		name: "description",
		content: "Hawkeye Ronin Protocol: Precision targeting system across AI/ML, Embedded, Backend, and Frontend."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	AchievementsRoute: Route$6.update({
		id: "/achievements",
		path: "/achievements",
		getParentRoute: () => Route$9
	}),
	AiRoute: Route$5.update({
		id: "/ai",
		path: "/ai",
		getParentRoute: () => Route$9
	}),
	BuildingRoute: Route$4.update({
		id: "/building",
		path: "/building",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	ExperienceRoute: Route$2.update({
		id: "/experience",
		path: "/experience",
		getParentRoute: () => Route$9
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$9
	}),
	SkillsRoute: Route.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { EngineeringLogModal as a, StutiAIHeroBanner as i, useCommandPalette as n, StutiAIModal as o, useStutiAI as r, router_exports as t };
