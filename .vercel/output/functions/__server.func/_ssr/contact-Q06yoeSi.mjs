import { i as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Lock, I as Github, K as CodeXml, M as Linkedin, T as MessageSquare, W as Copy, X as Check, g as Send, it as ArrowRight, k as Mail, x as Phone } from "../_libs/lucide-react.mjs";
import { n as BlackWidowIcon, r as MarvelFloatingParticles } from "./MarvelFloatingParticles-CDnsjYbt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Q06yoeSi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [copiedEmail, setCopiedEmail] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		identity: "",
		email: "",
		message: ""
	});
	const [transmitState, setTransmitState] = (0, import_react.useState)("idle");
	const [activeFocusField, setActiveFocusField] = (0, import_react.useState)(null);
	const copyEmail = () => {
		navigator.clipboard.writeText("mstuti.official@gmail.com");
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2e3);
	};
	const handleTransmit = (e) => {
		e.preventDefault();
		if (!formData.identity || !formData.email || !formData.message) return;
		setTransmitState("encrypting");
		setTimeout(() => {
			setTransmitState("established");
			setTimeout(() => {
				setTransmitState("transmitted");
				const subject = encodeURIComponent(`Secure Transmission from ${formData.identity}`);
				const body = encodeURIComponent(`OPERATOR IDENTITY: ${formData.identity}\nSECURE COMMS: ${formData.email}\n\nTRANSMISSION PAYLOAD:\n${formData.message}`);
				window.open(`mailto:mstuti.official@gmail.com?subject=${subject}&body=${body}`, "_blank");
			}, 700);
		}, 600);
	};
	const commChannels = [
		{
			id: "email",
			protocol: "SECURE // DIRECT_EMAIL",
			label: "Direct Email",
			value: "mstuti.official@gmail.com",
			href: "mailto:mstuti.official@gmail.com",
			action: "copy",
			icon: Mail
		},
		{
			id: "linkedin",
			protocol: "PROFESSIONAL // DISPATCH",
			label: "LinkedIn Profile",
			value: "stuti-mohapatra",
			href: "https://www.linkedin.com/in/stuti-mohapatra-180713392",
			icon: Linkedin
		},
		{
			id: "github",
			protocol: "CODE_REPOSITORY // GIT",
			label: "GitHub Repositories",
			value: "github.com/Stuti-M",
			href: "https://github.com/Stuti-M",
			icon: Github
		},
		{
			id: "leetcode",
			protocol: "ALGORITHMIC // PROFILE",
			label: "LeetCode Tracker",
			value: "@Stuti_Mohapatra",
			href: "https://leetcode.com/u/Stuti_Mohapatra/",
			icon: CodeXml
		},
		{
			id: "discord",
			protocol: "SECURE_COMMS // REALTIME",
			label: "Discord Handle",
			value: "stuti_k_73",
			href: "https://discord.com/users/stuti_k_73",
			icon: MessageSquare
		},
		{
			id: "phone",
			protocol: "DIRECT_LINE // VOICE",
			label: "Phone Contact",
			value: "+91 78479 71447",
			href: "tel:+917847971447",
			icon: Phone
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-widow page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden bg-black/40 font-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelFloatingParticles, { theme: "widow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-24 left-1/3 h-[550px] w-[800px] rounded-full bg-red-600/10 blur-[150px] neon-drift"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-red-600/10 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlackWidowIcon, { className: "h-5 w-5 drop-shadow-[0_0_8px_#DC2626]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RED ROOM PROTOCOL // SECURE ACCESS CHANNELS" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase",
								children: "HAVE A PROBLEM WORTH BUILDING?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl sm:text-3xl font-bold text-primary mt-2",
								children: "Let's connect."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-body",
								children: "Whether you are looking to collaborate on Edge AI, IoT systems, software engineering internships, or full-stack builds — my inbox is open."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 rounded-2xl border-2 border-red-500/30 bg-card/85 backdrop-blur-md p-6 sm:p-8 shadow-sm relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border/80 font-mono text-xs mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground uppercase tracking-widest",
									children: "SECURE CHANNEL // DIRECT TERMINAL"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ENCRYPTION: AES-256 GCM ACTIVE" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleTransmit,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-1 font-mono text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "identity-input",
											className: "text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold",
												children: "01."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IDENTITY // NAME OR ORG" })]
										}), activeFocusField === "identity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]",
											children: "[ TACTICAL LOCK ]"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "identity-input",
										type: "text",
										required: true,
										placeholder: "e.g. Tony Stark / Engineering Recruiter",
										value: formData.identity,
										onChange: (e) => setFormData({
											...formData,
											identity: e.target.value
										}),
										onFocus: () => setActiveFocusField("identity"),
										onBlur: () => setActiveFocusField(null),
										className: "w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-1 font-mono text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "email-input",
											className: "text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold",
												children: "02."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMMUNICATION // RETURN EMAIL" })]
										}), activeFocusField === "email" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]",
											children: "[ SECURE DISPATCH ]"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email-input",
										type: "email",
										required: true,
										placeholder: "your.email@company.com",
										value: formData.email,
										onChange: (e) => setFormData({
											...formData,
											email: e.target.value
										}),
										onFocus: () => setActiveFocusField("email"),
										onBlur: () => setActiveFocusField(null),
										className: "w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-1 font-mono text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "message-input",
											className: "text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold",
												children: "03."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PAYLOAD // PROJECT SPECIFICATION OR MESSAGE" })]
										}), activeFocusField === "message" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]",
											children: "[ BUFFERING TRANSMISSION ]"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message-input",
										required: true,
										rows: 3,
										placeholder: "Describe your technical inquiry, project scope, or engineering role...",
										value: formData.message,
										onChange: (e) => setFormData({
											...formData,
											message: e.target.value
										}),
										onFocus: () => setActiveFocusField("message"),
										onBlur: () => setActiveFocusField(null),
										className: "w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none resize-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 flex flex-col sm:flex-row items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: transmitState !== "idle",
										className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-mono font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-102 cursor-pointer disabled:opacity-75",
										children: [
											transmitState === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "[ ESTABLISH CONNECTION ]" })] }),
											transmitState === "encrypting" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ENCRYPTING PAYLOAD..." })] }),
											transmitState === "established" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHANNEL ESTABLISHED" })] }),
											transmitState === "transmitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MESSAGE TRANSMITTED" })] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-muted-foreground text-center sm:text-right",
										children: "STUTI MOHAPATRA // BHUBANESWAR, ODISHA, INDIA"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-12",
						children: commChannels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 rounded-xl border border-red-500/20 bg-card/70 backdrop-blur-sm flex items-center justify-between transition-all hover:border-primary/60 hover:bg-card/90 shadow-2xs group cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										children: c.protocol
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: c.href,
										target: c.href.startsWith("http") ? "_blank" : void 0,
										rel: "noreferrer",
										className: "font-mono text-sm font-bold text-foreground hover:text-primary transition truncate block mt-0.5",
										children: c.value
									})]
								})]
							}), c.action === "copy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: copyEmail,
								className: "p-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0 ml-2 cursor-pointer",
								title: "Copy direct email address",
								children: copiedEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 text-xs text-emerald-500 font-mono font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COPIED" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
							})]
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border/80 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition",
							children: "← 07 ABOUT // Thor Asgardian ⚡"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 HOME // S.H.I.E.L.D. HQ 🛡️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
