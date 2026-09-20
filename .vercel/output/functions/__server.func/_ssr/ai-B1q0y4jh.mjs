import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { et as Bot, it as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as MarvelFloatingParticles } from "./MarvelFloatingParticles-CDnsjYbt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as StutiAIModal } from "./router-7K75Q5oN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-B1q0y4jh.js
var import_jsx_runtime = require_jsx_runtime();
function AIPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-shield page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelFloatingParticles, { theme: "shield" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[550px] w-[850px] max-w-full rounded-full bg-primary/15 blur-[150px] neon-drift"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center max-w-2xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 font-mono text-xs text-primary font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PORTFOLIO INTELLIGENCE ENGINE // LEVEL 7 CLEARANCE" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight",
								children: "STUTI AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl sm:text-2xl font-bold text-primary mt-1",
								children: "ASK MY PORTFOLIO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3 text-sm sm:text-base leading-relaxed font-body",
								children: "Explore my work. Ask about my projects. Find what you're looking for. Built with a comprehensive knowledge base of all my engineering systems, hackathons, and experience."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StutiAIModal, {
						isOpen: true,
						onClose: () => {},
						isDedicatedPage: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6 font-mono text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "text-muted-foreground hover:text-primary transition flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 WORK // Stark HUD" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/experience",
								className: "text-muted-foreground hover:text-primary transition flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04 EXPERIENCE // Hulk Impact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "text-primary font-bold hover:underline flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "08 CONTACT // Red Room Comms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { AIPage as component };
