import { i as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { H as Cpu, it as ArrowRight, q as CircleCheck, r as Workflow, s as Terminal, t as Zap } from "../_libs/lucide-react.mjs";
import { r as MarvelFloatingParticles, t as ArcReactorIcon } from "./MarvelFloatingParticles-CDnsjYbt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as EngineeringLogModal } from "./router-7K75Q5oN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BLeUMmXI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROJECT_SYSTEMS = [
	{
		id: "smart-safety-watch",
		buildCode: "BUILD_001",
		title: "SMART SAFETY WATCH",
		subtitle: "AI-Powered Offline Emergency Wearable with Decentralized Mesh Routing",
		systemType: "AUTONOMOUS WEARABLE & MESH TELEMETRY",
		category: "AI • EMBEDDED • IoT",
		status: "ACTIVE_DEVELOPMENT",
		statusLabel: "STATUS // ACTIVE PROTOTYPE",
		statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
		specifications: {
			hardware: "ESP32 / Arduino / MPU6050 Accelerometer",
			ai: "TinyML / Edge Impulse Quantized Neural Model",
			communication: "LoRa Mesh (868/915 MHz) / MQTT Protocol",
			backend: "Java / Spring Boot / REST API Dispatcher"
		},
		problem: "Commercial SOS apps require constant internet connectivity and active manual interaction. In cellular blackouts, deep forests, or violent distress events where the user cannot reach their phone, standard emergency systems fail entirely.",
		engineeringApproach: "Engineered an autonomous edge wearable system executing local quantized TinyML models directly on ESP32 firmware to identify distress movement anomalies without cloud latency. Emergency alerts hop autonomously across a sub-GHz LoRa mesh network until hitting an internet-connected gateway, which dispatches telemetry to a Spring Boot service.",
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
		result: "Successfully running on-device inference under 45ms with 0% cellular dependency during local mesh transmission tests.",
		impactMetrics: [
			{
				label: "EDGE INFERENCE LATENCY",
				value: "< 45ms"
			},
			{
				label: "CELLULAR RELIANCE",
				value: "0% (Decentralized)"
			},
			{
				label: "RADIO FREQUENCY",
				value: "868 / 915 MHz"
			}
		],
		deepLink: "/building",
		deepLinkLabel: "Inspect Full 7-Node Kinetic Lab 🕷️"
	},
	{
		id: "sentinel-x",
		buildCode: "BUILD_002",
		title: "SENTINEL-X",
		subtitle: "Multi-Agent AI System for Autonomous Illegal Deforestation Detection",
		systemType: "MULTI-AGENT ORCHESTRATION & ACOUSTIC TRIAGE",
		category: "AGENTIC AI • GROQ • SPATIAL",
		status: "DEPLOYED_HACKATHON",
		statusLabel: "STATUS // 🥈 2ND PLACE PODIUM",
		statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
		achievement: "🥈 2nd Place — Anant Chakra Agentic AI Hackathon (Genesis 2K26)",
		specifications: {
			pipeline: "Acoustic Sensor Stream & Geo-Spatial Clusters",
			ai: "Groq Llama-3-70B High-Speed LLM Inference",
			communication: "Autonomous Multi-Agent Handshake (n8n)",
			backend: "Python / REST API Verification Services"
		},
		problem: "Forest protection squads suffer massive false alarm rates from environmental noise (wind, wildlife) and cannot manually analyze acoustic feeds across hundreds of square kilometers of protected reserves.",
		engineeringApproach: "Architected an autonomous multi-agent pipeline using n8n and Groq LLMs. The system splits telemetry across specialized agents: an Acoustic Ingestion Agent isolates chainsaw signatures, a Triage Agent eliminates false triggers, and a Geo-Verification Agent formats and escalates geo-tagged alerts directly to field responders.",
		technologies: [
			"Multi-Agent AI",
			"Groq LLM",
			"n8n Orchestration",
			"Python",
			"Spatial Telemetry",
			"REST APIs"
		],
		result: "Awarded 2nd Place Runner-Up at Anant Chakra Agentic AI Hackathon (Chakravyuh & Genesis 2K26) for exceptional multi-agent architecture and high-velocity inference.",
		impactMetrics: [
			{
				label: "HACKATHON PODIUM",
				value: "🥈 2nd Place"
			},
			{
				label: "INFERENCE SPEED",
				value: "Groq Accelerated"
			},
			{
				label: "AGENT PIPELINE",
				value: "3 Autonomous Nodes"
			}
		],
		deepLink: "/achievements",
		deepLinkLabel: "View Hackathon Podium Dossier 🛡️"
	},
	{
		id: "prabandh-drishti",
		buildCode: "BUILD_003",
		title: "PRABANDH-DRISHTI // GEOGRIEVANCE-AI",
		subtitle: "Automated Civic Infrastructure Monitoring & Geo-Spatial Triage Engine",
		systemType: "COMPUTER VISION & SPATIAL TRIAGE",
		category: "CV • GEOSPATIAL • FASTAPI",
		status: "IN_PROGRESS",
		statusLabel: "STATUS // ACTIVE ARCHITECTURE",
		statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
		specifications: {
			hardware: "Mobile Optical Capture / Geo-Tagged Streams",
			ai: "Computer Vision Defect Classification",
			communication: "Geo-Spatial Coordinate Mapping",
			backend: "FastAPI / PostgreSQL / React Dashboard"
		},
		problem: "Municipal civic maintenance systems face unorganized citizen grievances with duplicated reports, vague location data, and lack of visual severity assessment.",
		engineeringApproach: "Developing an automated civic triage pipeline combining image classification for structural damage (potholes, water leaks, broken grid lines) with spatial clustering algorithms that automatically deduplicate nearby reports and assign priority queues to municipal departments.",
		technologies: [
			"Python",
			"FastAPI",
			"Computer Vision",
			"PostgreSQL",
			"Geo-Spatial APIs",
			"React"
		],
		result: "Core computer vision classifier and spatial coordinate clustering engine currently in active local testing.",
		impactMetrics: [
			{
				label: "CLASSIFIER FOCUS",
				value: "Civic Road & Grid"
			},
			{
				label: "DEDUPLICATION",
				value: "Spatial Coordinate Match"
			},
			{
				label: "BACKEND STACK",
				value: "FastAPI + Postgres"
			}
		],
		deepLink: "/building",
		deepLinkLabel: "Inspect Civic Node in Idea Network 🕷️"
	},
	{
		id: "shecodex-engine",
		buildCode: "BUILD_004",
		title: "SHECODEX ALGORITHMIC ENGINE",
		subtitle: "High-Performance Data Structures & Competitive Problem Solving System",
		systemType: "ALGORITHMIC COMPLEXITY & SYSTEM LOGIC",
		category: "DSA • JAVA • SYSTEM LOGIC",
		status: "VERIFIED_PODIUM",
		statusLabel: "STATUS // 🥈 2ND PLACE PODIUM",
		statusColor: "text-pink-500 border-pink-500/30 bg-pink-500/10",
		achievement: "🥈 2nd Place — SheCodex Women's Day Coding Challenge (CODEX Club)",
		specifications: {
			hardware: "Low-overhead Memory Execution",
			ai: "Deterministic Optimization & State Pruning",
			communication: "Strict Test Harness & Benchmark Suites",
			backend: "Java / Python Core Computational Engine"
		},
		problem: "Complex systems require rock-solid algorithmic guarantees on memory and runtime to prevent degradation under high-load concurrency and graph scale.",
		engineeringApproach: "Applied structured algorithmic design patterns including dynamic programming memoization, multi-source BFS/DFS graph traversals, and custom heap priority queues to achieve optimal asymptotic complexity during competitive sprints.",
		technologies: [
			"Java",
			"Python",
			"Algorithms",
			"Data Structures",
			"Dynamic Programming",
			"Graph Theory"
		],
		result: "Secured 2nd Place in the SheCodex Women's Day Coding Challenge against university-wide engineering competitors.",
		impactMetrics: [
			{
				label: "COMPETITIVE PODIUM",
				value: "🥈 2nd Place"
			},
			{
				label: "LANGUAGE FOCUS",
				value: "Java & Python"
			},
			{
				label: "PROBLEM DOMAINS",
				value: "Graphs & DP"
			}
		],
		deepLink: "/skills",
		deepLinkLabel: "Inspect DSA Target Reticle 🏹"
	}
];
function WorkPage() {
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(PROJECT_SYSTEMS[0]);
	const [isLogOpen, setIsLogOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-ironman page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelFloatingParticles, { theme: "building" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-24 right-1/4 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-1/3 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[130px] arc-pulse"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 rounded-2xl border border-primary/30 bg-card/70 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArcReactorIcon, { className: "h-5 w-5 arc-pulse" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-widest text-primary uppercase font-bold",
									children: "STARK INDUSTRIES // HUD INTERFACE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base sm:text-lg font-extrabold text-foreground",
									children: "ENGINEERING ARTIFACTS & SYSTEM BUILDS"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2.5 font-mono text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/40 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DIAGNOSTICS: NOMINAL" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ARC CORE // 100%" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setIsLogOpen(true),
										className: "inline-flex items-center gap-1 px-3 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold transition hover:bg-amber-500 hover:text-white cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VIEW BUILD LOGS" })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "OPERATOR // STUTI MOHAPATRA" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "ARCHITECTURE // EDGE AI × MULTI-AGENT × EMBEDDED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUILD STAGE // 2026.09" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8",
						children: PROJECT_SYSTEMS.map((proj) => {
							const isSelected = selectedProject.id === proj.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedProject(proj),
								className: `text-left p-4 rounded-xl border transition-all relative overflow-hidden group cursor-pointer ${isSelected ? "border-primary bg-primary/15 shadow-md ring-2 ring-primary/40" : "border-border bg-card/60 hover:border-primary/60 hover:bg-card/90 text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[starkScanLine_2s_linear_infinite] z-10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-1 left-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition",
										children: "┌"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-1 right-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition",
										children: "┐"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-1 left-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition",
										children: "└"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-1 right-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition",
										children: "┘"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between font-mono text-xs mb-1.5 relative z-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-bold tracking-wider ${isSelected ? "text-primary" : "text-muted-foreground"}`,
											children: proj.buildCode
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `text-[9px] px-1.5 py-0.5 rounded font-mono ${proj.statusColor}`,
											children: ["● ", proj.status === "DEPLOYED_HACKATHON" || proj.status === "VERIFIED_PODIUM" ? "PODIUM" : proj.status === "ACTIVE_DEVELOPMENT" ? "PROTOTYPE" : "ACTIVE"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-sm sm:text-base font-extrabold text-foreground tracking-tight relative z-10 truncate",
										children: proj.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-muted-foreground mt-0.5 truncate relative z-10",
										children: proj.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 pt-2 border-t border-border/60 text-[10px] font-mono space-y-0.5 relative z-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STACK:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground font-semibold truncate max-w-[110px]",
												children: proj.technologies.slice(0, 2).join(" / ")
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-1 flex items-center justify-between text-primary font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "[ INSPECT BUILD ]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-0.5 transition-transform" })]
										})]
									}),
									isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-primary" })
								]
							}, proj.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-10 shadow-xl relative overflow-hidden mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2 font-mono text-xs mb-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground",
												children: selectedProject.buildCode
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold uppercase",
												children: selectedProject.systemType
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground uppercase",
												children: selectedProject.category
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight",
										children: selectedProject.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base font-semibold text-primary mt-1",
										children: selectedProject.subtitle
									}),
									selectedProject.achievement && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "★" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedProject.achievement })]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono text-xs font-bold px-3 py-1 rounded-full border ${selectedProject.statusColor}`,
										children: selectedProject.statusLabel
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-6 p-5 rounded-xl border border-primary/30 bg-muted/20 relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between font-mono text-[11px] text-muted-foreground mb-3 pb-2 border-b border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-primary font-bold uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "h-3.5 w-3.5" }), "SYSTEM ARCHITECTURE & EXECUTION FLOW"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIVE TELEMETRY TRACE" })]
									}),
									selectedProject.id === "smart-safety-watch" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-amber-500 font-bold",
														children: "01. CAPTURE"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "MPU6050 Gyro"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "3-Axis Sensor Stream"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-bold",
														children: "02. FIRMWARE"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "ESP32 Core"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Embedded C++ logic"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-emerald-500 font-bold",
														children: "03. EDGE AI"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "TinyML Model"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-emerald-500 font-semibold",
														children: "< 45ms Anomaly Infer"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-sky-500/40 bg-sky-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-sky-500 font-bold",
														children: "04. MESH RELAY"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "LoRa 868/915MHz"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Sub-GHz RF Multi-Hop"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-purple-500/40 bg-purple-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-purple-500 font-bold",
														children: "05. INGESTION"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Spring Boot"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "MQTT Broker Dispatch"
													})
												]
											})
										]
									}),
									selectedProject.id === "sentinel-x" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-emerald-500 font-bold",
														children: "AGENT 01"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Acoustic Ingestion"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Chainsaw Audio Stream"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-bold",
														children: "AGENT 02"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Groq Llama-3 Triage"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-semibold",
														children: "Sub-second Noise Filter"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-sky-500/40 bg-sky-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-sky-500 font-bold",
														children: "ORCHESTRATOR"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "n8n Agentic Bus"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Cooperating Handoffs"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-amber-500/40 bg-amber-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-amber-500 font-bold",
														children: "AGENT 03"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Geo-Verification"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-amber-500 font-semibold",
														children: "Field Ranger Alert"
													})
												]
											})
										]
									}),
									selectedProject.id === "prabandh-drishti" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-sky-500/30 bg-sky-500/5 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-sky-500 font-bold",
														children: "INPUT LAYER"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Citizen Capture"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Mobile Geo-Tagged Stream"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-bold",
														children: "AI CLASSIFIER"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Computer Vision"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-semibold",
														children: "Potholes & Grid Faults"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-emerald-500 font-bold",
														children: "SPATIAL CLUSTER"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "GIS Deduplication"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Nearby Report Merging"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-purple-500/40 bg-purple-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-purple-500 font-bold",
														children: "ACTION QUEUE"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "FastAPI + Postgres"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Department Dispatch"
													})
												]
											})
										]
									}),
									selectedProject.id === "shecodex-engine" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-pink-500/30 bg-pink-500/5 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-pink-500 font-bold",
														children: "PROBLEM SPEC"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Constraint Analysis"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Input Boundaries & Scale"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-bold",
														children: "DATA STRUCTURES"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Graphs & Heaps"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-primary font-semibold",
														children: "Multi-Source Traversals"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-emerald-500 font-bold",
														children: "OPTIMIZATION"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Dynamic Programming"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "O(N) Complexity Pruning"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-lg border border-amber-500/40 bg-amber-500/10 flex flex-col justify-between",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-amber-500 font-bold",
														children: "BENCHMARK"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground my-1",
														children: "Zero-Defect Suite"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-amber-500 font-semibold",
														children: "🥈 2nd Place Podium"
													})
												]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-5 rounded-xl border border-red-500/20 bg-red-500/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 font-mono text-xs font-bold text-red-500 uppercase mb-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 // THE SYSTEM PROBLEM" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm sm:text-base text-foreground/90 leading-relaxed font-body",
											children: selectedProject.problem
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-5 rounded-xl border border-primary/30 bg-primary/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 // ENGINEERING APPROACH & ARCHITECTURE" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm sm:text-base text-foreground/90 leading-relaxed font-body",
											children: selectedProject.engineeringApproach
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2",
										children: "03 // TECHNOLOGY STACK & LIBRARIES"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: selectedProject.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip-tech",
											children: tech
										}, tech))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04 // SYSTEM RESULT & VERIFIED MILESTONE" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm sm:text-base text-foreground/90 font-medium leading-relaxed font-body",
												children: selectedProject.result
											}),
											selectedProject.impactMetrics && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-500/20 font-mono text-xs",
												children: selectedProject.impactMetrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 rounded-lg bg-card/80 border border-border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: metric.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground mt-0.5",
														children: metric.value
													})]
												}, metric.label))
											})
										]
									})
								]
							}),
							selectedProject.deepLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-border flex items-center justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: selectedProject.deepLink,
									className: "inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedProject.deepLinkLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border/80 pt-6 font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/building",
							className: "font-semibold text-muted-foreground hover:text-primary transition flex items-center gap-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "← 02 BUILD // Spider-Man Network 🕷️" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/experience",
							className: "font-semibold text-primary hover:underline flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04 EXPERIENCE // Hulk Gamma Impact 💚" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineeringLogModal, {
				isOpen: isLogOpen,
				onClose: () => setIsLogOpen(false)
			})
		]
	});
}
//#endregion
export { WorkPage as component };
