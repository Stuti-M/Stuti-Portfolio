import { i as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { B as ExternalLink, V as Crosshair, c as Target, it as ArrowRight, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { r as MarvelFloatingParticles } from "./MarvelFloatingParticles-CDnsjYbt.mjs";
import { F as isRedirect, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-CHcqrqs1.mjs";
import { a as Tooltip, i as ResponsiveContainer, n as Pie, r as Cell, t as PieChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-q4ZSDSG2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getLeetCodeStats = createServerFn({ method: "GET" }).inputValidator((input) => {
	if (!input?.username || typeof input.username !== "string") throw new Error("username required");
	return { username: input.username.trim() };
}).handler(createSsrRpc("d9d4df982eacc651d4fd322a35cfb20f4d7ad42c68b02708f8c5e881c272db91"));
async function fetchViaProxy(username) {
	const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
	if (!res.ok) throw new Error("stats unreachable");
	const d = await res.json();
	if (d.status !== "success") throw new Error(d.message ?? "no data");
	return d;
}
function LeetCodeProgress({ username }) {
	const fetchStats = useServerFn(getLeetCodeStats);
	const { data, isLoading, isError } = useQuery({
		queryKey: ["leetcode", username],
		queryFn: async () => {
			try {
				return await fetchViaProxy(username);
			} catch {
				return await fetchStats({ data: { username } });
			}
		},
		refetchInterval: 6e4,
		retry: 1
	});
	const s = data ?? {
		totalSolved: 0,
		totalQuestions: 3400,
		easySolved: 0,
		totalEasy: 850,
		mediumSolved: 0,
		totalMedium: 1800,
		hardSolved: 0,
		totalHard: 750
	};
	const rows = [
		{
			label: "Easy",
			solved: s.easySolved,
			total: s.totalEasy,
			color: "#00b8a3"
		},
		{
			label: "Medium",
			solved: s.mediumSolved,
			total: s.totalMedium,
			color: "#ffb800"
		},
		{
			label: "Hard",
			solved: s.hardSolved,
			total: s.totalHard,
			color: "#ff375f"
		}
	];
	const pieData = rows.map((r) => ({
		name: r.label,
		value: r.solved,
		color: r.color
	}));
	const hasSolved = s.totalSolved > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card/60 p-6 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between mb-6 flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-xl font-bold flex items-center gap-2",
					children: [
						"LeetCode Progress",
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-hero" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-normal text-muted-foreground",
							children: "live"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Refreshes every 60s"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `https://leetcode.com/u/${username}/`,
					target: "_blank",
					rel: "noreferrer",
					className: "text-sm text-hero hover:underline flex items-center gap-1",
					children: [
						"@",
						username,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
					]
				})]
			}),
			isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 rounded-md border border-yellow-500/40 bg-yellow-500/10 p-3 text-xs text-yellow-600 dark:text-yellow-400",
				children: "Couldn't reach LeetCode's stats API right now. Showing placeholder values."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[220px_1fr] gap-6 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: hasSolved ? pieData : [{
								name: "—",
								value: 1,
								color: "hsl(var(--muted))"
							}],
							cx: "50%",
							cy: "50%",
							innerRadius: 65,
							outerRadius: 90,
							paddingAngle: hasSolved ? 3 : 0,
							dataKey: "value",
							stroke: "none",
							children: (hasSolved ? pieData : [{ color: "#64748b" }]).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: e.color }, i))
						}), hasSolved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
							background: "hsl(var(--popover))",
							border: "1px solid hsl(var(--border))",
							borderRadius: 8,
							fontSize: 12
						} })] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-black",
							children: s.totalSolved
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"/ ",
								s.totalQuestions,
								" solved"
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [rows.map((r) => {
						const pct = r.total ? Math.min(100, r.solved / r.total * 100) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								style: { color: r.color },
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground tabular-nums",
								children: [
									r.solved,
									" / ",
									r.total
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 w-full rounded-full bg-muted overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full transition-all duration-1000",
								style: {
									width: `${pct}%`,
									background: r.color
								}
							})
						})] }, r.label);
					}), typeof s.ranking === "number" && s.ranking > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-2 flex gap-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wider",
							children: "Rank"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg font-bold text-hero",
							children: ["#", s.ranking.toLocaleString()]
						})] }), typeof s.acceptanceRate === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wider",
							children: "Acceptance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg font-bold text-hero",
							children: [s.acceptanceRate.toFixed(1), "%"]
						})] })]
					})]
				})]
			})
		]
	});
}
var TARGET_SYSTEMS = [
	{
		id: "target-aiml",
		code: "TARGET // 01",
		label: "AI / ML & EDGE INTELLIGENCE",
		focusArea: "Quantized Models & Autonomous Multi-Agent Systems",
		accuracy: "HIGH PRECISION",
		skills: [
			{
				name: "TinyML",
				tag: "Microcontroller AI",
				description: "Quantized on-device anomaly detection models"
			},
			{
				name: "Edge Impulse",
				tag: "DSP & Training",
				description: "Embedded neural network profiling & deployment"
			},
			{
				name: "Multi-Agent AI",
				tag: "Orchestration",
				description: "Autonomous cooperative agent workflows"
			},
			{
				name: "Groq LLMs",
				tag: "High-Speed Inference",
				description: "High-velocity Llama-3 model pipelines via n8n"
			},
			{
				name: "Python",
				tag: "Core AI Language",
				description: "NumPy, Pandas, model evaluation and scripting"
			},
			{
				name: "Computer Vision",
				tag: "Spatial Defect Classifiers",
				description: "Image classification & coordinate tagging"
			}
		]
	},
	{
		id: "target-embedded",
		code: "TARGET // 02",
		label: "EMBEDDED & IoT PROTOCOLS",
		focusArea: "Firmware, Microcontrollers & RF Mesh Telemetry",
		accuracy: "FIELD DEPLOYED",
		skills: [
			{
				name: "ESP32 / Arduino",
				tag: "Microcontrollers",
				description: "Firmware logic, GPIO sensor streams, interrupts"
			},
			{
				name: "Embedded C++",
				tag: "Hardware Firmware",
				description: "Low-overhead microcontroller programming"
			},
			{
				name: "LoRa Mesh",
				tag: "Sub-GHz RF",
				description: "868/915 MHz decentralized long-range hopping"
			},
			{
				name: "Meshtastic",
				tag: "Packet Standard",
				description: "Decentralized mesh telemetry protocol"
			},
			{
				name: "MQTT Broker",
				tag: "Pub/Sub Bridge",
				description: "Lightweight base station message queues"
			}
		]
	},
	{
		id: "target-backend",
		code: "TARGET // 03",
		label: "BACKEND & SYSTEMS INFRASTRUCTURE",
		focusArea: "Enterprise APIs, Telemetry Gateways & Databases",
		accuracy: "PRODUCTION GRADE",
		skills: [
			{
				name: "Java",
				tag: "Core Enterprise",
				description: "Object-oriented systems, concurrency, robust logic"
			},
			{
				name: "Spring Boot",
				tag: "Microservice Framework",
				description: "RESTful APIs, MQTT consumer pipelines"
			},
			{
				name: "REST APIs",
				tag: "Integration",
				description: "Clean endpoint contracts, JSON schemas, auth"
			},
			{
				name: "PostgreSQL",
				tag: "Relational DB",
				description: "Geo-spatial coordinate indexing & queries"
			},
			{
				name: "n8n Automation",
				tag: "Workflow Engine",
				description: "Self-hosted webhook and agent pipelines"
			}
		]
	},
	{
		id: "target-frontend",
		code: "TARGET // 04",
		label: "FRONTEND & WEB INTERFACES",
		focusArea: "Modern Responsive SPAs & State Management",
		accuracy: "CERTIFIED PRECISION",
		skills: [
			{
				name: "JavaScript / TypeScript",
				tag: "Web Scripting",
				description: "Modern ES6+, strong type safety, async DOM"
			},
			{
				name: "HTML5 & Semantic CSS3",
				tag: "Certified Web",
				description: "Clean semantic markup, layout hierarchy"
			},
			{
				name: "Tailwind CSS",
				tag: "Utility Styling",
				description: "Design systems, dark modes, animations"
			},
			{
				name: "Responsive Design",
				tag: "Cross-Device UI",
				description: "Fluid viewports, touch vs pointer UX"
			},
			{
				name: "Git & GitHub",
				tag: "Version Control",
				description: "Branching workflows, pull requests, CI/CD"
			}
		]
	},
	{
		id: "target-dsa",
		code: "TARGET // 05",
		label: "CORE DSA & PROBLEM SOLVING",
		focusArea: "Algorithmic Complexity, Graphs, DP & System Logic",
		accuracy: "CONTINUOUS TARGET",
		skills: [
			{
				name: "Data Structures",
				tag: "Foundations",
				description: "Trees, Graphs, Heaps, Hash Tables, Linked Lists"
			},
			{
				name: "Algorithms",
				tag: "Complexity",
				description: "BFS/DFS, Dynamic Programming, Two Pointers, Greedy"
			},
			{
				name: "Problem Solving",
				tag: "Competitive Coding",
				description: "2nd Place SheCodex & Daily LeetCode"
			},
			{
				name: "Multi-Agent System Design",
				tag: "Architecture",
				description: "Distributed agent handoffs and verification"
			}
		]
	}
];
function SkillsPage() {
	const [selectedTargetId, setSelectedTargetId] = (0, import_react.useState)("target-aiml");
	const [hoveredSkill, setHoveredSkill] = (0, import_react.useState)(null);
	const activeTarget = TARGET_SYSTEMS.find((t) => t.id === selectedTargetId) || TARGET_SYSTEMS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-hawkeye page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelFloatingParticles, { theme: "hawkeye" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-[5%] top-28 opacity-15 select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center",
					children: [
						[
							460,
							320,
							180,
							80
						].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute rounded-full border border-primary/70",
							style: {
								width: size,
								height: size
							}
						}, size)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[480px] w-[1px] bg-primary/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[480px] h-[1px] bg-primary/60" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RONIN PROTOCOL // PRECISION TARGETING SYSTEM" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight",
								children: "Technical Stack & Target Reticle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed font-body",
								children: "Zero inflated percentage bars. Select any target vector to lock the crosshairs and inspect verified tools, frameworks, and system foundations."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8",
						children: TARGET_SYSTEMS.map((target) => {
							const isSelected = selectedTargetId === target.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedTargetId(target.id),
								className: `p-3.5 rounded-xl border text-left transition-all duration-200 font-mono relative overflow-hidden cursor-pointer ${isSelected ? "border-primary bg-primary/15 shadow-sm scale-102 ring-2 ring-primary/40 text-foreground" : "border-border bg-card/70 hover:border-primary/50 text-muted-foreground hover:text-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[10px] mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-bold",
											children: target.code
										}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-3 w-3 text-red-500 animate-spin [animation-duration:10s]" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-foreground leading-snug",
										children: target.label
									}),
									isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" })
								]
							}, target.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-sm relative overflow-hidden mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-border/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground",
										children: activeTarget.code
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold tracking-wider",
										children: "LOCKED ON TARGET"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1",
									children: activeTarget.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted-foreground mt-0.5",
									children: activeTarget.focusArea
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [hoveredSkill && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-red-500 bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-md animate-[targetReticleLock_0.3s_ease-out]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-3 w-3 animate-spin [animation-duration:6s]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["TARGET LOCK: ", hoveredSkill] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs font-bold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary",
									children: ["● ", activeTarget.accuracy]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
							children: activeTarget.skills.map((skill) => {
								const isTargeted = hoveredSkill === skill.name;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onMouseEnter: () => setHoveredSkill(skill.name),
									onMouseLeave: () => setHoveredSkill(null),
									className: `group p-4 rounded-xl border transition-all duration-200 relative overflow-hidden cursor-crosshair ${isTargeted ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/40 scale-[1.02]" : "border-border bg-muted/20 hover:border-primary/60 hover:bg-card"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"aria-hidden": true,
											className: `pointer-events-none absolute inset-0 transition-opacity duration-200 ${isTargeted ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 left-1.5 font-mono text-[9px] text-purple-400 font-bold",
													children: "┌"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 font-mono text-[9px] text-purple-400 font-bold",
													children: "┐"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute bottom-1.5 left-1.5 font-mono text-[9px] text-purple-400 font-bold",
													children: "└"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute bottom-1.5 right-1.5 font-mono text-[9px] text-purple-400 font-bold",
													children: "┘"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between font-mono text-[10px] text-primary mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold",
												children: skill.tag
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `font-mono text-[9px] flex items-center gap-1 transition-opacity ${isTargeted ? "text-red-500 opacity-100 font-bold" : "opacity-0 group-hover:opacity-100 text-muted-foreground"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-2.5 w-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isTargeted ? "TARGET ACQUIRED" : "VERIFIED" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-base font-extrabold text-foreground group-hover:text-primary transition-colors",
											children: skill.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1 leading-relaxed",
											children: skill.description
										})
									]
								}, skill.name);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold",
								children: "REAL-TIME ALGORITHMIC TARGETING // LEETCODE TELEMETRY"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeetCodeProgress, { username: "Stuti_Mohapatra" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border/80 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/experience",
							className: "text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition",
							children: "← 04 EXPERIENCE // Hulk Gamma 💚"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/achievements",
							className: "text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "06 ACHIEVEMENTS // Captain America 🛡️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { SkillsPage as component };
