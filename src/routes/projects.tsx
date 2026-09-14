import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Radio,
  TreePine,
  Activity,
  Layers,
  Terminal,
  ShieldAlert,
  Zap,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Gauge,
  Sliders,
  Sparkles,
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { ArcReactorIcon } from "../components/MarvelIcons";
import { EngineeringLogModal } from "../components/EngineeringLog";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work & Systems | Iron Man Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Stark Engineering HUD: AI, IoT, Edge Computing, and Multi-Agent project systems.",
      },
    ],
  }),
  component: WorkPage,
});

interface ProjectSystem {
  id: string;
  buildCode: string;
  title: string;
  subtitle: string;
  systemType: string;
  status: "ACTIVE_DEVELOPMENT" | "DEPLOYED_HACKATHON" | "IN_PROGRESS";
  statusLabel: string;
  statusColor: string;
  specifications: {
    hardware?: string;
    ai?: string;
    communication?: string;
    backend?: string;
    pipeline?: string;
    database?: string;
  };
  problem: string;
  engineeringApproach: string;
  technologies: string[];
  result: string;
  impactMetrics?: { label: string; value: string }[];
  deepLink?: string;
  deepLinkLabel?: string;
}

const PROJECT_SYSTEMS: ProjectSystem[] = [
  {
    id: "smart-safety-watch",
    buildCode: "BUILD_01",
    title: "SMART SAFETY WATCH",
    subtitle: "AI-Powered Offline Emergency Wearable with Decentralized Mesh Routing",
    systemType: "AUTONOMOUS WEARABLE & MESH TELEMETRY",
    status: "ACTIVE_DEVELOPMENT",
    statusLabel: "SYSTEM STATUS: ACTIVE // PROTOTYPING",
    statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    specifications: {
      hardware: "ESP32 / Arduino Microcontroller / MPU6050",
      ai: "TinyML / Edge Impulse Quantized Neural Model",
      communication: "LoRa Mesh (868/915 MHz) / MQTT Protocol",
      backend: "Java / Spring Boot / REST API Dispatcher",
    },
    problem:
      "Commercial SOS apps require constant internet connectivity and active manual interaction. In cellular blackouts, deep forests, or violent distress events where the user cannot reach their phone, standard emergency systems fail entirely.",
    engineeringApproach:
      "Engineered an autonomous edge wearable system executing local quantized TinyML models directly on ESP32 firmware to identify distress movement anomalies without cloud latency. Emergency alerts hop autonomously across a sub-GHz LoRa mesh network until hitting an internet-connected gateway, which dispatches telemetry to a Spring Boot service.",
    technologies: ["TinyML", "ESP32", "Embedded C++", "LoRa Mesh", "Java", "Spring Boot", "MQTT", "Edge Impulse"],
    result:
      "Successfully running on-device inference under 45ms with 0% cellular dependency during local mesh transmission tests.",
    impactMetrics: [
      { label: "EDGE INFERENCE LATENCY", value: "< 45ms" },
      { label: "CELLULAR RELIANCE", value: "0% (Decentralized)" },
      { label: "RADIO FREQUENCY", value: "868 / 915 MHz" },
    ],
    deepLink: "/building",
    deepLinkLabel: "Inspect Full 7-Node Kinetic Lab 🕷️",
  },
  {
    id: "sentinel-x",
    buildCode: "BUILD_02",
    title: "SENTINEL-X",
    subtitle: "Multi-Agent AI System for Autonomous Illegal Deforestation Detection",
    systemType: "MULTI-AGENT ORCHESTRATION & ACOUSTIC TRIAGE",
    status: "DEPLOYED_HACKATHON",
    statusLabel: "STATUS: PODIUM WINNER // 2ND PLACE",
    statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    specifications: {
      pipeline: "Acoustic Sensor Stream & Geo-Spatial Clusters",
      ai: "Groq Llama-3-70B High-Speed LLM Inference",
      communication: "Autonomous Multi-Agent Handshake (n8n)",
      backend: "Python / REST API Verification Services",
    },
    problem:
      "Forest protection squads suffer massive false alarm rates from environmental noise (wind, wildlife) and cannot manually analyze acoustic feeds across hundreds of square kilometers of protected reserves.",
    engineeringApproach:
      "Architected an autonomous multi-agent pipeline using n8n and Groq LLMs. The system splits telemetry across specialized agents: an Acoustic Ingestion Agent isolates chainsaw signatures, a Triage Agent eliminates false triggers, and a Geo-Verification Agent formats and escalates geo-tagged alerts directly to field responders.",
    technologies: ["Multi-Agent AI", "Groq LLM", "n8n Orchestration", "Python", "Spatial Telemetry", "REST APIs"],
    result:
      "Awarded 2nd Place Runner-Up at Anant Chakra Agentic AI Hackathon (Chakravyuh & Genesis 2K26) for exceptional multi-agent architecture and high-velocity inference.",
    impactMetrics: [
      { label: "HACKATHON PODIUM", value: "🥈 2nd Place" },
      { label: "INFERENCE SPEED", value: "Groq Accelerated" },
      { label: "AGENT PIPELINE", value: "3 Autonomous Nodes" },
    ],
  },
  {
    id: "prabandh-drishti",
    buildCode: "BUILD_03",
    title: "PRABANDH-DRISHTI // GEOGRIEVANCE-AI",
    subtitle: "Automated Civic Infrastructure Monitoring & Geo-Spatial Triage Engine",
    systemType: "COMPUTER VISION & SPATIAL TRIAGE",
    status: "IN_PROGRESS",
    statusLabel: "STATUS: IN ACTIVE ARCHITECTURE",
    statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
    specifications: {
      hardware: "Mobile Optical Capture / Geo-Tagged Streams",
      ai: "Computer Vision Defect Classification",
      communication: "Geo-Spatial Coordinate Mapping",
      backend: "FastAPI / PostgreSQL / React Dashboard",
    },
    problem:
      "Municipal civic maintenance systems face unorganized citizen grievances with duplicated reports, vague location data, and lack of visual severity assessment.",
    engineeringApproach:
      "Developing an automated civic triage pipeline combining image classification for structural damage (potholes, water leaks, broken grid lines) with spatial clustering algorithms that automatically deduplicate nearby reports and assign priority queues to municipal departments.",
    technologies: ["Python", "FastAPI", "Computer Vision", "PostgreSQL", "Geo-Spatial APIs", "React"],
    result:
      "Core computer vision classifier and spatial coordinate clustering engine currently in active local testing.",
    impactMetrics: [
      { label: "CLASSIFIER FOCUS", value: "Civic Road & Grid" },
      { label: "DEDUPLICATION", value: "Spatial Coordinate Match" },
      { label: "BACKEND STACK", value: "FastAPI + Postgres" },
    ],
  },
];

function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectSystem>(PROJECT_SYSTEMS[0]);
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="theme-ironman page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 🦾 Stark Floating Particles */}
      <MarvelFloatingParticles theme="building" />

      {/* Stark Hot-Rod Red & Arc Gold Ambient Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/3 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[130px] arc-pulse"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Stark HUD System Top Header Bar */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-card/70 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/80">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                <ArcReactorIcon className="h-5 w-5 arc-pulse" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase font-bold">
                  STARK INDUSTRIES // HUD INTERFACE
                </span>
                <p className="font-display text-sm sm:text-base font-extrabold text-foreground">
                  ENGINEERING SYSTEMS & ARCHITECTURES
                </p>
              </div>
            </div>

            {/* Live Telemetry Metadata */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/40 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>DIAGNOSTICS: NOMINAL</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-bold">
                <Zap className="h-3 w-3" />
                <span>ARC CORE // 100%</span>
              </span>
              <button
                onClick={() => setIsLogOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold transition hover:bg-amber-500 hover:text-white"
              >
                <Terminal className="h-3 w-3" />
                <span>VIEW BUILD LOGS</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
            <span>OPERATOR // STUTI MOHAPATRA</span>
            <span className="hidden sm:inline">ARCHITECTURE // EDGE AI × MULTI-AGENT × EMBEDDED</span>
            <span>BUILD STAGE // 2026.09</span>
          </div>
        </div>

        {/* Project Selector System HUD Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PROJECT_SYSTEMS.map((proj) => {
            const isSelected = selectedProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-card/60 hover:border-primary/50 hover:bg-card text-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-1">
                  <span className={`font-bold ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                    {proj.buildCode}
                  </span>
                  <span className={`text-[10px] px-2 py-0.2 rounded-full border ${proj.statusColor}`}>
                    ● {proj.status}
                  </span>
                </div>
                <h2 className="font-display text-base font-extrabold text-foreground tracking-tight">
                  {proj.title}
                </h2>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5 truncate">{proj.systemType}</p>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* MAIN FEATURED PROJECT SYSTEM PANEL */}
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-10 shadow-lg relative overflow-hidden mb-12">
          {/* Subtle Top HUD Glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* System Spec Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground">
                  {selectedProject.buildCode}
                </span>
                <span className="text-primary font-bold">{selectedProject.systemType}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="text-right">
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${selectedProject.statusColor}`}>
                {selectedProject.statusLabel}
              </span>
            </div>
          </div>

          {/* Technical Specifications Blueprint Matrix */}
          <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-primary/20 bg-muted/20 font-mono text-xs">
            {selectedProject.specifications.hardware && (
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">HARDWARE / EMBEDDED</p>
                <p className="font-bold text-foreground mt-0.5">{selectedProject.specifications.hardware}</p>
              </div>
            )}
            {selectedProject.specifications.ai && (
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">AI / INFERENCE ENGINE</p>
                <p className="font-bold text-foreground mt-0.5">{selectedProject.specifications.ai}</p>
              </div>
            )}
            {selectedProject.specifications.communication && (
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">COMMUNICATION / MESH</p>
                <p className="font-bold text-foreground mt-0.5">{selectedProject.specifications.communication}</p>
              </div>
            )}
            {selectedProject.specifications.backend && (
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">BACKEND INFRASTRUCTURE</p>
                <p className="font-bold text-foreground mt-0.5">{selectedProject.specifications.backend}</p>
              </div>
            )}
            {selectedProject.specifications.pipeline && (
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">TELEMETRY INGESTION</p>
                <p className="font-bold text-foreground mt-0.5">{selectedProject.specifications.pipeline}</p>
              </div>
            )}
          </div>

          {/* PROBLEM → ENGINEERING APPROACH → TECHNOLOGY → RESULT Breakdown */}
          <div className="space-y-6">
            {/* Step 1: PROBLEM */}
            <div className="p-4 sm:p-5 rounded-xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-500 uppercase mb-1.5">
                <span>01 // THE SYSTEM PROBLEM</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            {/* Step 2: ENGINEERING APPROACH */}
            <div className="p-4 sm:p-5 rounded-xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-1.5">
                <Cpu className="h-4 w-4" />
                <span>02 // ENGINEERING APPROACH & ARCHITECTURE</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {selectedProject.engineeringApproach}
              </p>
            </div>

            {/* Step 3: TECHNOLOGY */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                03 // TECHNOLOGY STACK & LIBRARIES
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="chip-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 4: RESULT & IMPACT */}
            <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>04 // SYSTEM RESULT & VERIFIED MILESTONE</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                {selectedProject.result}
              </p>

              {/* Metrics bar */}
              {selectedProject.impactMetrics && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-500/20 font-mono text-xs">
                  {selectedProject.impactMetrics.map((metric) => (
                    <div key={metric.label} className="p-2 rounded-lg bg-card/80 border border-border">
                      <p className="text-[10px] text-muted-foreground">{metric.label}</p>
                      <p className="font-bold text-foreground mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Deep link if available */}
          {selectedProject.deepLink && (
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-end">
              <Link
                to={selectedProject.deepLink}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline"
              >
                <span>{selectedProject.deepLinkLabel}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/building" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 02 BUILD // Spider-Man Network 🕷️
          </Link>
          <Link to="/experience" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>04 EXPERIENCE // Hulk Gamma Impact 💚</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <EngineeringLogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </div>
  );
}
