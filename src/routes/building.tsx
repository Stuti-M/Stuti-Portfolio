import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Brain,
  Cpu,
  Radio,
  Binary,
  Layers,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Share2,
  Sparkles,
  Zap,
  Boxes,
  Compass,
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/building")({
  head: () => ({
    meta: [
      { title: "Currently Building | Spider-Man Network — Stuti Mohapatra" },
      {
        name: "description",
        content: "Spider-Man Parker Protocol: Kinetic network of active hardware, TinyML, and software builds.",
      },
    ],
  }),
  component: BuildingPage,
});

interface NetworkNode {
  id: string;
  label: string;
  category: "EDGE_AI" | "HARDWARE" | "MESH_NETWORK" | "CLOUD_BACKEND" | "CIVIC_AI" | "DSA_CORE";
  subtext: string;
  activeBuild: string;
  status: string;
  statusColor: string;
  connections: string[];
  details: string;
  tech: string[];
}

const NETWORK_NODES: NetworkNode[] = [
  {
    id: "node-watch",
    label: "SMART SAFETY WATCH",
    category: "HARDWARE",
    subtext: "Offline Emergency Wearable",
    activeBuild: "ESP32 Firmware & Biometric Telemetry",
    status: "ACTIVE_PROTOTYPE",
    statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    connections: ["node-tinyml", "node-lora", "node-mqtt"],
    details:
      "Executing quantized sensor anomaly detection locally on an ESP32 microcontroller with zero cellular dependence.",
    tech: ["ESP32", "Embedded C++", "MPU6050", "FreeRTOS"],
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
    details:
      "Trained quantized INT8 neural networks to detect falls and distress movement patterns with under 45ms inference latency.",
    tech: ["TinyML", "Edge Impulse", "TensorFlow Lite Micro", "Signal Processing"],
  },
  {
    id: "node-lora",
    label: "LORA MESH RELAY",
    category: "MESH_NETWORK",
    subtext: "Sub-GHz Multi-Hop",
    activeBuild: "Meshtastic Packet Routing Protocol",
    status: "TESTING",
    statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
    connections: ["node-watch", "node-mqtt", "node-tinyml"],
    details:
      "Transmitting encrypted emergency packets across 868/915 MHz frequencies node-to-node across cellular deadzones.",
    tech: ["LoRa SX1276", "Meshtastic", "Sub-GHz Radio", "RF Mesh"],
  },
  {
    id: "node-mqtt",
    label: "GATEWAY & TELEMETRY",
    category: "CLOUD_BACKEND",
    subtext: "MQTT Broker + Spring Boot",
    activeBuild: "Telemetry Ingestion & Dispatch",
    status: "ONLINE",
    statusColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
    connections: ["node-lora", "node-watch", "node-civic"],
    details:
      "Ingesting mesh packets through base station MQTT relays into a Java Spring Boot backend for responder escalation.",
    tech: ["Java", "Spring Boot", "MQTT Broker", "REST APIs"],
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
    details:
      "Autonomous acoustic triage agents isolating chainsaw signatures and verifying geographic coordinates with Groq acceleration.",
    tech: ["n8n", "Groq LLMs", "Python", "Autonomous Agents"],
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
    details:
      "Classifying road/utility damage and clustering citizen reports by geo-spatial proximity for automated municipal dispatch.",
    tech: ["FastAPI", "Computer Vision", "Geo-Spatial APIs", "PostgreSQL"],
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
    details:
      "Practicing graphs, trees, dynamic programming, and systems algorithms to build performant, memory-efficient software.",
    tech: ["Java", "Python", "Algorithms", "Data Structures"],
  },
];

function BuildingPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("node-watch");
  const selectedNode = NETWORK_NODES.find((n) => n.id === selectedNodeId) || NETWORK_NODES[0];

  return (
    <div className="theme-spiderman page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* 🕷️ Spider-Man Floating Particles */}
      <MarvelFloatingParticles theme="spiderman" />

      {/* Spider-Man Web Crimson & Electric Blue Ambient Atmospheres */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/3 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[130px] neon-float"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Parker Protocol Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🕷️</span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                PARKER PROTOCOL // KINETIC NETWORK OF ACTIVE BUILDS
              </span>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold">
              ● CONSTANTLY EVOLVING NETWORK
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            What I'm Currently Building
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed font-body">
            Instead of static ideas, my projects operate as an interconnected network of edge hardware, autonomous agents, and systems engineering.
          </p>
        </div>

        {/* Dynamic Kinetic Interactive Idea Network Visualizer */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card/80 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden mb-12 shadow-sm">
          {/* Subtle City Skyline Geometry in backdrop */}
          <div className="pointer-events-none absolute inset-0 opacity-5 flex items-end justify-between px-4">
            <div className="w-16 h-48 bg-foreground" />
            <div className="w-24 h-64 bg-foreground" />
            <div className="w-20 h-40 bg-foreground" />
            <div className="w-32 h-72 bg-foreground" />
            <div className="w-24 h-56 bg-foreground" />
            <div className="w-28 h-80 bg-foreground" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-4 border-b border-border/80">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Share2 className="h-4 w-4 text-primary" />
                <span>INTERACTIVE IDEA CONNECTIONS // CLICK NODES TO INSPECT</span>
              </div>
              <span className="font-mono text-xs text-primary font-bold">
                ACTIVE NODE: {selectedNode.label}
              </span>
            </div>

            {/* Web Node Connection Flow Indicator */}
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 font-mono text-[11px] text-sky-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                <span>PROJECT</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/15 border border-sky-400/40 text-sky-300">WEB NODE ACTIVATED</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-2 py-0.5 rounded bg-primary/15 border border-primary/40 text-primary">DETAILS REVEALED</span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] text-muted-foreground">
                KINETIC STRANDS: {selectedNode.connections.length} ACTIVE
              </span>
            </div>

            {/* Kinetic Web Node Grid with Spring Physics & Strand Reactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8 relative">
              {NETWORK_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isConnected = selectedNode.connections.includes(node.id);
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/15 shadow-md scale-102 ring-2 ring-primary/40"
                        : isConnected
                        ? "border-sky-400/60 bg-sky-500/10 hover:border-primary hover:bg-card/90"
                        : "border-border bg-card/60 hover:border-primary/50 hover:bg-card/90 text-muted-foreground"
                    } hover:-translate-y-1 hover:rotate-[-0.3deg] active:scale-98`}
                  >
                    {/* Spider-Man Web Silk Strand on Hover / Connected */}
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-opacity duration-300 ${
                        isSelected || isConnected ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                      }`}
                    />

                    {/* Subtle Corner Web Anchor */}
                    <div className="absolute top-1.5 right-1.5 opacity-20 group-hover:opacity-80 transition-opacity">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sky-400">
                        <path d="M2 2 L22 2 M2 2 L2 22 M2 2 L18 18 M2 8 L8 2 M2 14 L14 2" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[10px] mb-1.5 relative z-10">
                      <span className="font-bold text-primary">{node.category}</span>
                      {isConnected && !isSelected && (
                        <span className="text-sky-400 font-bold flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                          WEB LINKED
                        </span>
                      )}
                      {isSelected && (
                        <span className="text-primary font-bold flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          NODE ACTIVATED
                        </span>
                      )}
                    </div>
                    <p className="font-display text-sm font-extrabold text-foreground relative z-10">{node.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 relative z-10">{node.subtext}</p>
                    
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/60 font-mono text-[10px] relative z-10">
                      <span className={`px-2 py-0.5 rounded-full border ${node.statusColor}`}>
                        {node.status}
                      </span>
                      <span className="text-muted-foreground/70 group-hover:text-primary transition font-semibold">
                        {node.connections.length} links →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Detailed Architecture Card */}
            <div className="rounded-xl border border-primary/40 bg-muted/20 p-5 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-border">
                <div>
                  <span className="font-mono text-xs font-bold text-primary uppercase">
                    {selectedNode.category} // {selectedNode.status}
                  </span>
                  <h3 className="text-2xl font-extrabold text-foreground mt-0.5">
                    {selectedNode.label}
                  </h3>
                  <p className="font-mono text-xs text-secondary font-semibold mt-0.5">
                    {selectedNode.activeBuild}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <span>Connected to:</span>
                  <span className="text-primary font-bold">{selectedNode.connections.length} nodes</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground/90 mt-4 leading-relaxed">
                {selectedNode.details}
              </p>

              {/* Technologies for this active node */}
              <div className="mt-6 pt-4 border-t border-border/60">
                <p className="font-mono text-xs text-muted-foreground uppercase font-semibold mb-2">
                  ASSOCIATED STACK & PROTOCOLS
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tech.map((t) => (
                    <span key={t} className="chip-tech">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Step Decentralized Pipeline Diagram for Smart Safety Watch */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                SPOTLIGHT PIPELINE // SMART SAFETY WATCH
              </p>
              <h2 className="text-2xl font-extrabold text-foreground mt-0.5">
                7-Node Zero-Connectivity Architecture Flow
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-primary hover:underline"
            >
              <span>View Full Project Specs in Work 🦾</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {[
              { step: "01", name: "Sensors", desc: "MPU6050 Accelerometer Telemetry", icon: Activity },
              { step: "02", name: "TinyML", desc: "Local Edge Impulse Neural Classifier", icon: Brain },
              { step: "03", name: "ESP32", desc: "Embedded Microcontroller Dispatch", icon: Cpu },
              { step: "04", name: "LoRa Mesh", desc: "Offline Sub-GHz Multi-Hop Relay", icon: Radio },
              { step: "05", name: "MQTT", desc: "Base Station Broker Ingestion", icon: Binary },
              { step: "06", name: "Spring Boot", desc: "Java Telemetry Escalation Engine", icon: Layers },
              { step: "07", name: "Dispatch", desc: "Emergency Responder Actionable Alert", icon: ShieldAlert },
            ].map((node) => (
              <div
                key={node.step}
                className="p-3.5 rounded-xl border border-border bg-muted/20 flex flex-col justify-between hover:border-primary transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                      {node.step}
                    </span>
                    <node.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-display text-xs font-bold text-foreground">{node.name}</h3>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 01 HOME // S.H.I.E.L.D. HQ 🛡️
          </Link>
          <Link to="/projects" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>03 WORK // Iron Man Stark HUD 🦾</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
