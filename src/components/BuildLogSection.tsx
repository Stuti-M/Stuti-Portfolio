import { useState } from "react";
import { Terminal, ChevronDown, ChevronUp, Cpu, Radio, Sparkles, Layers, Activity, GitCommit, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface MilestonePhase {
  phase: string;
  label: string;
  description: string;
  status: "COMPLETED" | "ACTIVE" | "NEXT";
}

interface BuildLogItem {
  id: string;
  logCode: string;
  systemTitle: string;
  category: string;
  themeAccent: string;
  statusBadge: string;
  statusBadgeColor: string;
  coreObjective: string;
  phases: MilestonePhase[];
  keyArchitecture: string[];
  takeaway: string;
  routeLink: string;
  routeLabel: string;
}

const BUILD_LOG_ITEMS: BuildLogItem[] = [
  {
    id: "build-log-01",
    logCode: "BUILD LOG // 001",
    systemTitle: "SMART SAFETY WATCH",
    category: "EMBEDDED • TINYML • LORA MESH",
    themeAccent: "from-amber-500/20 to-transparent",
    statusBadge: "ACTIVE PROTOTYPE",
    statusBadgeColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    coreObjective: "Execute on-device quantized emergency detection in cellular dead zones without cloud dependency.",
    phases: [
      { phase: "PHASE 01 // IDEA", label: "Problem Identified", description: "Mobile SOS apps fail in cellular deadzones and during incapacitation.", status: "COMPLETED" },
      { phase: "PHASE 02 // DESIGN", label: "Edge TinyML Model", description: "Quantized 3-axis accelerometer motion anomaly classifier trained via Edge Impulse.", status: "COMPLETED" },
      { phase: "PHASE 03 // BUILD", label: "Sub-GHz LoRa Mesh", description: "Configured 868/915 MHz RF packet broadcasting for autonomous node-to-node relay.", status: "COMPLETED" },
      { phase: "PHASE 04 // TEST", label: "Broker Ingestion", description: "Connected base-station MQTT bridge to Java Spring Boot emergency dispatcher.", status: "ACTIVE" },
      { phase: "PHASE 05 // ITERATE", label: "Biometric Integration", description: "Integrating pulse-oximetry and battery energy-harvesting telemetry.", status: "NEXT" },
    ],
    keyArchitecture: [
      "ESP32 Microcontroller running Embedded C++ firmware",
      "Quantized INT8 anomaly model with < 45ms inference",
      "Decentralized Meshtastic Sub-GHz mesh hopping protocol",
      "Spring Boot backend REST API and MQTT message broker",
    ],
    takeaway: "Edge computing eliminates cloud bottlenecks where latency and connectivity are life-critical.",
    routeLink: "/projects",
    routeLabel: "Inspect Iron Man HUD Build →",
  },
  {
    id: "build-log-02",
    logCode: "BUILD LOG // 002",
    systemTitle: "SENTINEL-X",
    category: "MULTI-AGENT AI • GROQ LLM • SPATIAL",
    themeAccent: "from-emerald-500/20 to-transparent",
    statusBadge: "🥈 2ND PLACE PODIUM",
    statusBadgeColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    coreObjective: "Filter high-volume environmental noise and autonomously escalate chainsaw acoustic signatures to rangers.",
    phases: [
      { phase: "PHASE 01 // IDEA", label: "Acoustic Triage Need", description: "Rangers cannot manually verify acoustic feeds across massive forest reserves.", status: "COMPLETED" },
      { phase: "PHASE 02 // DESIGN", label: "Multi-Agent Pipeline", description: "Split workflow across Ingestion, Triage, and Escalation agents.", status: "COMPLETED" },
      { phase: "PHASE 03 // BUILD", label: "Groq LLM Acceleration", description: "Integrated Groq Llama-3-70B for sub-second inference in n8n pipelines.", status: "COMPLETED" },
      { phase: "PHASE 04 // TEST", label: "Hackathon Sprint Delivery", description: "Tested under tight sprint constraints at Anant Chakra Agentic AI Hackathon.", status: "COMPLETED" },
      { phase: "PHASE 05 // ITERATE", label: "Geo-Spatial Heatmaps", description: "Enhancing multi-sensor triangulation with spatial coordinate maps.", status: "ACTIVE" },
    ],
    keyArchitecture: [
      "Acoustic ingestion agent filtering wind and wildlife signatures",
      "Groq-accelerated LLM triage verifying threat levels",
      "n8n autonomous multi-agent orchestration workflows",
      "Geo-tagged alert dispatching directly to field rangers",
    ],
    takeaway: "Specialized cooperating agents consistently outperform monolithic single-prompt architectures on noisy data.",
    routeLink: "/achievements",
    routeLabel: "View Captain America Podium Chronicle →",
  },
  {
    id: "build-log-03",
    logCode: "BUILD LOG // 003",
    systemTitle: "PRABANDH-DRISHTI",
    category: "COMPUTER VISION • GEOSPATIAL • FASTAPI",
    themeAccent: "from-sky-500/20 to-transparent",
    statusBadge: "ACTIVE ARCHITECTURE",
    statusBadgeColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
    coreObjective: "Eliminate municipal grievance backlogs via automated visual classification and coordinate deduplication.",
    phases: [
      { phase: "PHASE 01 // IDEA", label: "Civic Backlog Analysis", description: "Municipalities struggle with unverified, duplicate grievance photos.", status: "COMPLETED" },
      { phase: "PHASE 02 // DESIGN", label: "CV Defect Classifier", description: "Classifies road potholes, water leakages, and broken electrical grids.", status: "COMPLETED" },
      { phase: "PHASE 03 // BUILD", label: "Spatial Deduplication", description: "Clustering algorithm grouping complaints by geographic coordinate proximity.", status: "ACTIVE" },
      { phase: "PHASE 04 // TEST", label: "FastAPI Pipeline", description: "Developing async REST endpoints with PostgreSQL GIS spatial queries.", status: "ACTIVE" },
      { phase: "PHASE 05 // ITERATE", label: "Admin Resolution Dashboard", description: "Building administrative portal for contractor dispatch and verification.", status: "NEXT" },
    ],
    keyArchitecture: [
      "Image processing classifier for civic infrastructure defect detection",
      "Reverse-geocoded spatial coordinate clustering engine",
      "FastAPI asynchronous backend with PostgreSQL database",
      "Real-time grievance status lifecycle management",
    ],
    takeaway: "Bridging citizen grievances with municipal action requires rigorous data validation at the ingestion layer.",
    routeLink: "/projects",
    routeLabel: "Inspect System Specifications →",
  },
];

export function BuildLogSection() {
  const [expandedLogId, setExpandedLogId] = useState<string>("build-log-01");

  return (
    <section className="py-12 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 pb-4 border-b border-border/80">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-primary font-bold tracking-widest uppercase">
              <Terminal className="h-4 w-4" />
              <span>ENGINEERING JOURNAL // ITERATION CHRONICLE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              BUILD LOG
            </h2>
            <p className="font-mono text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mt-1">
              HOW THE WORK EVOLVES
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="hidden sm:inline">CYCLE:</span>
            <span className="px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-bold">
              IDEA → DESIGN → BUILD → TEST → ITERATE
            </span>
          </div>
        </div>

        {/* Build Log Cards */}
        <div className="space-y-4">
          {BUILD_LOG_ITEMS.map((item) => {
            const isExpanded = expandedLogId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-card/85 backdrop-blur-sm ${
                  isExpanded
                    ? "border-primary/50 shadow-md ring-1 ring-primary/30"
                    : "border-border/80 hover:border-primary/40"
                }`}
              >
                {/* Header Row (Clickable) */}
                <button
                  onClick={() => setExpandedLogId(isExpanded ? "" : item.id)}
                  className="w-full text-left p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none group"
                >
                  <div className="flex items-start sm:items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="font-bold text-primary">{item.logCode}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-[10px] text-muted-foreground uppercase truncate">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-extrabold text-foreground tracking-tight mt-0.5">
                        {item.systemTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${item.statusBadgeColor}`}>
                      ● {item.statusBadge}
                    </span>
                    <div className="p-1 rounded-lg border border-border bg-muted/40 text-muted-foreground group-hover:text-foreground">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-border/60 bg-muted/10 animate-in fade-in duration-150">
                    <p className="text-sm text-foreground/90 font-medium mb-6 leading-relaxed">
                      <strong className="font-mono text-xs text-primary uppercase mr-2">CORE OBJECTIVE:</strong>
                      {item.coreObjective}
                    </p>

                    {/* Timeline Progression */}
                    <div className="mb-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-bold mb-3">
                        EVOLUTION TIMELINE
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
                        {item.phases.map((phase, idx) => {
                          const isDone = phase.status === "COMPLETED";
                          const isActive = phase.status === "ACTIVE";
                          return (
                            <div
                              key={phase.phase}
                              className={`p-3 rounded-xl border font-mono text-xs relative ${
                                isDone
                                  ? "border-emerald-500/30 bg-emerald-500/5 text-foreground"
                                  : isActive
                                  ? "border-primary/50 bg-primary/10 text-foreground ring-1 ring-primary/30"
                                  : "border-border bg-card/40 text-muted-foreground"
                              }`}
                            >
                              <div className="flex items-center justify-between text-[10px] mb-1">
                                <span className={isDone ? "text-emerald-500 font-bold" : isActive ? "text-primary font-bold" : "text-muted-foreground"}>
                                  {phase.phase}
                                </span>
                                {isDone && <span className="text-emerald-500 font-bold">✓</span>}
                                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />}
                              </div>
                              <p className="font-bold text-foreground font-display text-xs mb-1">
                                {phase.label}
                              </p>
                              <p className="text-[11px] text-muted-foreground font-body leading-tight">
                                {phase.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Architectural Pillars & Takeaway */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/60">
                      <div>
                        <p className="font-mono text-xs uppercase text-muted-foreground font-bold mb-2">
                          VERIFIED ARCHITECTURE
                        </p>
                        <ul className="space-y-1.5 font-mono text-xs text-foreground/90">
                          {item.keyArchitecture.map((arch) => (
                            <li key={arch} className="flex items-start gap-2">
                              <span className="text-primary font-bold shrink-0">›</span>
                              <span>{arch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between p-4 rounded-xl border border-primary/20 bg-primary/5">
                        <div>
                          <p className="font-mono text-[10px] uppercase text-primary font-bold mb-1">
                            ENGINEERING TAKEAWAY
                          </p>
                          <p className="text-xs sm:text-sm text-foreground/90 font-medium italic">
                            "{item.takeaway}"
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-primary/20 flex justify-end">
                          <Link
                            to={item.routeLink}
                            className="inline-flex items-center gap-1 font-mono text-xs font-bold text-primary hover:underline"
                          >
                            <span>{item.routeLabel}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
