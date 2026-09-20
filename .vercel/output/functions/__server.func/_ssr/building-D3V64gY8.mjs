import { i as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { $ as Brain, H as Cpu, N as Layers, at as Activity, h as Share2, it as ArrowRight, m as ShieldAlert, tt as Binary, y as Radio } from "../_libs/lucide-react.mjs";
import { r as MarvelFloatingParticles } from "./MarvelFloatingParticles-CDnsjYbt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/building-D3V64gY8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NETWORK_NODES = [
	{
		id: "node-watch",
		label: "SMART SAFETY WATCH",
		category: "HARDWARE",
		subtext: "Offline Emergency Wearable",
		activeBuild: "ESP32 Firmware & Biometric Telemetry",
		status: "ACTIVE_PROTOTYPE",
		statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
		connections: [
			"node-tinyml",
			"node-lora",
			"node-mqtt"
		],
		details: "Executing quantized sensor anomaly detection locally on an ESP32 microcontroller with zero cellular dependence.",
		tech: [
			"ESP32",
			"Embedded C++",
			"MPU6050",
			"FreeRTOS"
		]
	},
	{
		id: "node-tinyml",
		label: "TINYML INFERENCE",
		category: "EDGE_AI",
		subtext: "Quantized Neural Models",
		activeBuild: "Edge Impulse Motion Classifier",
		status: "OPTIMIZED",
		statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
		connections: ["node-watch", "node-lora"],
		details: "Trained quantized INT8 neural networks to detect falls and distress movement patterns with under 45ms inference latency.",
		tech: [
			"TinyML",
			"Edge Impulse",
			"TensorFlow Lite Micro",
			"Signal Processing"
		]
	},
	{
		id: "node-lora",
		label: "LORA MESH RELAY",
		category: "MESH_NETWORK",
		subtext: "Sub-GHz Multi-Hop",
		activeBuild: "Meshtastic Packet Routing Protocol",
		status: "TESTING",
		statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
		connections: [
			"node-watch",
			"node-mqtt",
			"node-tinyml"
		],
		details: "Transmitting encrypted emergency packets across 868/915 MHz frequencies node-to-node across cellular deadzones.",
		tech: [
			"LoRa SX1276",
			"Meshtastic",
			"Sub-GHz Radio",
			"RF Mesh"
		]
	},
	{
		id: "node-mqtt",
		label: "GATEWAY & TELEMETRY",
		category: "CLOUD_BACKEND",
		subtext: "MQTT Broker + Spring Boot",
		activeBuild: "Telemetry Ingestion & Dispatch",
		status: "ONLINE",
		statusColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
		connections: [
			"node-lora",
			"node-watch",
			"node-civic"
		],
		details: "Ingesting mesh packets through base station MQTT relays into a Java Spring Boot backend for responder escalation.",
		tech: [
			"Java",
			"Spring Boot",
			"MQTT Broker",
			"REST APIs"
		]
	},
	{
		id: "node-sentinel",
		label: "SENTINEL-X AI AGENTS",
		category: "EDGE_AI",
		subtext: "Deforestation Detection",
		activeBuild: "Groq LLM Multi-Agent Pipeline",
		status: "PODIUM_WINNER",
		statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
		connections: ["node-civic", "node-dsa"],
		details: "Autonomous acoustic triage agents isolating chainsaw signatures and verifying geographic coordinates with Groq acceleration.",
		tech: [
			"n8n",
			"Groq LLMs",
			"Python",
			"Autonomous Agents"
		]
	},
	{
		id: "node-civic",
		label: "PRABANDH-DRISHTI",
		category: "CIVIC_AI",
		subtext: "Infrastructure GeoGrievance AI",
		activeBuild: "Spatial Coordinate Clustering",
		status: "IN_DEVELOPMENT",
		statusColor: "text-blue-500 border-blue-500/30 bg-blue-500/10",
		connections: ["node-sentinel", "node-mqtt"],
		details: "Classifying road/utility damage and clustering citizen reports by geo-spatial proximity for automated municipal dispatch.",
		tech: [
			"FastAPI",
			"Computer Vision",
			"Geo-Spatial APIs",
			"PostgreSQL"
		]
	},
	{
		id: "node-dsa",
		label: "DSA PROBLEM ENGINE",
		category: "DSA_CORE",
		subtext: "Algorithmic Precision",
		activeBuild: "Daily Problem Solving Mastery",
		status: "DAILY_ACTIVE",
		statusColor: "text-pink-500 border-pink-500/30 bg-pink-500/10",
		connections: ["node-sentinel", "node-watch"],
		details: "Practicing graphs, trees, dynamic programming, and systems algorithms to build performant, memory-efficient software.",
		tech: [
			"Java",
			"Python",
			"Algorithms",
			"Data Structures"
		]
	}
];
function BuildingPage() {
	const [selectedNodeId, setSelectedNodeId] = (0, import_react.useState)("node-watch");
	const selectedNode = NETWORK_NODES.find((n) => n.id === selectedNodeId) || NETWORK_NODES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-spiderman page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelFloatingParticles, { theme: "spiderman" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-24 right-1/3 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-1/4 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[130px] neon-float"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: "🕷️"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs uppercase tracking-widest text-primary font-bold",
										children: "PARKER PROTOCOL // KINETIC NETWORK OF ACTIVE BUILDS"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold",
									children: "● CONSTANTLY EVOLVING NETWORK"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight",
								children: "What I'm Currently Building"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed font-body",
								children: "Instead of static ideas, my projects operate as an interconnected network of edge hardware, autonomous agents, and systems engineering."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-primary/30 bg-card/80 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden mb-12 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute inset-0 opacity-5 flex items-end justify-between px-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-48 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-64 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-20 h-40 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-32 h-72 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-56 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-28 h-80 bg-foreground" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between flex-wrap gap-2 mb-6 pb-4 border-b border-border/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INTERACTIVE IDEA CONNECTIONS // CLICK NODES TO INSPECT" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-primary font-bold",
										children: ["ACTIVE NODE: ", selectedNode.label]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[11px] text-sky-400 font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-sky-400 animate-ping" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PROJECT" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "→"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2 py-0.5 rounded bg-sky-500/15 border border-sky-400/40 text-sky-300",
												children: "WEB NODE ACTIVATED"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "→"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2 py-0.5 rounded bg-primary/15 border border-primary/40 text-primary",
												children: "DETAILS REVEALED"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hidden sm:inline font-mono text-[10px] text-muted-foreground",
										children: [
											"KINETIC STRANDS: ",
											selectedNode.connections.length,
											" ACTIVE"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8 relative",
									children: NETWORK_NODES.map((node) => {
										const isSelected = selectedNode.id === node.id;
										const isConnected = selectedNode.connections.includes(node.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setSelectedNodeId(node.id),
											className: `p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${isSelected ? "border-primary bg-primary/15 shadow-md scale-102 ring-2 ring-primary/40" : isConnected ? "border-sky-400/60 bg-sky-500/10 hover:border-primary hover:bg-card/90" : "border-border bg-card/60 hover:border-primary/50 hover:bg-card/90 text-muted-foreground"} hover:-translate-y-1 hover:rotate-[-0.3deg] active:scale-98`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													"aria-hidden": true,
													className: `pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-opacity duration-300 ${isSelected || isConnected ? "opacity-100" : "opacity-0 group-hover:opacity-80"}`
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 opacity-20 group-hover:opacity-80 transition-opacity",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														width: "18",
														height: "18",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														className: "text-sky-400",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 2 L22 2 M2 2 L2 22 M2 2 L18 18 M2 8 L8 2 M2 14 L14 2" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between font-mono text-[10px] mb-1.5 relative z-10",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold text-primary",
															children: node.category
														}),
														isConnected && !isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-sky-400 font-bold flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" }), "WEB LINKED"]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-primary font-bold flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "NODE ACTIVATED"]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-sm font-extrabold text-foreground relative z-10",
													children: node.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground mt-0.5 relative z-10",
													children: node.subtext
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 flex items-center justify-between pt-2 border-t border-border/60 font-mono text-[10px] relative z-10",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `px-2 py-0.5 rounded-full border ${node.statusColor}`,
														children: node.status
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground/70 group-hover:text-primary transition font-semibold",
														children: [node.connections.length, " links →"]
													})]
												})
											]
										}, node.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-primary/40 bg-muted/20 p-5 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-xs font-bold text-primary uppercase",
													children: [
														selectedNode.category,
														" // ",
														selectedNode.status
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-2xl font-extrabold text-foreground mt-0.5",
													children: selectedNode.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-mono text-xs text-secondary font-semibold mt-0.5",
													children: selectedNode.activeBuild
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 font-mono text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Connected to:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-primary font-bold",
													children: [selectedNode.connections.length, " nodes"]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm sm:text-base text-foreground/90 mt-4 leading-relaxed",
											children: selectedNode.details
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 pt-4 border-t border-border/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs text-muted-foreground uppercase font-semibold mb-2",
												children: "ASSOCIATED STACK & PROTOCOLS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: selectedNode.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip-tech",
													children: t
												}, t))
											})]
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-primary font-bold",
								children: "SPOTLIGHT PIPELINE // SMART SAFETY WATCH"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-extrabold text-foreground mt-0.5",
								children: "7-Node Zero-Connectivity Architecture Flow"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "inline-flex items-center gap-1 font-mono text-xs font-bold text-primary hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Full Project Specs in Work 🦾" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3",
							children: [
								{
									step: "01",
									name: "Sensors",
									desc: "MPU6050 Accelerometer Telemetry",
									icon: Activity
								},
								{
									step: "02",
									name: "TinyML",
									desc: "Local Edge Impulse Neural Classifier",
									icon: Brain
								},
								{
									step: "03",
									name: "ESP32",
									desc: "Embedded Microcontroller Dispatch",
									icon: Cpu
								},
								{
									step: "04",
									name: "LoRa Mesh",
									desc: "Offline Sub-GHz Multi-Hop Relay",
									icon: Radio
								},
								{
									step: "05",
									name: "MQTT",
									desc: "Base Station Broker Ingestion",
									icon: Binary
								},
								{
									step: "06",
									name: "Spring Boot",
									desc: "Java Telemetry Escalation Engine",
									icon: Layers
								},
								{
									step: "07",
									name: "Dispatch",
									desc: "Emergency Responder Actionable Alert",
									icon: ShieldAlert
								}
							].map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl border border-border bg-muted/20 flex flex-col justify-between hover:border-primary transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10",
										children: node.step
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(node.icon, { className: "h-4 w-4 text-primary" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xs font-bold text-foreground",
									children: node.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-2",
									children: node.desc
								})]
							}, node.step))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border/80 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition",
							children: "← 01 HOME // S.H.I.E.L.D. HQ 🛡️"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							className: "text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 WORK // Iron Man Stark HUD 🦾" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { BuildingPage as component };
