import { useState } from "react";
import { Terminal, X, Code2, Cpu, Sparkles, CheckCircle2, ChevronRight, Activity, Calendar, GitCommit, Layers } from "lucide-react";

export interface LogEntry {
  id: string;
  logNumber: string;
  title: string;
  system: string;
  date: string;
  version: string;
  status: "ACTIVE_PROTOTYPE" | "DEPLOYED_HACKATHON" | "IN_DEVELOPMENT";
  statusColor: string;
  problem: string;
  whatWasBuilt: string;
  architectureDetails: string[];
  technologies: string[];
  takeaway: string;
}

export const ENGINEERING_LOGS: LogEntry[] = [
  {
    id: "log-001",
    logNumber: "LOG // 001",
    title: "SMART SAFETY WATCH",
    system: "AUTONOMOUS EMERGENCY WEARABLE",
    date: "2026.08 — PRESENT",
    version: "v0.8.4-alpha",
    status: "ACTIVE_PROTOTYPE",
    statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    problem:
      "Traditional personal safety alert apps fail in remote forest zones, cellular dead zones, or when the user is incapacitated and cannot manually press emergency SOS triggers.",
    whatWasBuilt:
      "Engineered an offline emergency wearable that combines on-device machine learning (TinyML) on an ESP32 microcontroller with a decentralized LoRa mesh networking layer and Spring Boot MQTT telemetry ingestion.",
    architectureDetails: [
      "Quantized 3-axis accelerometer/biometric anomaly detection model trained with Edge Impulse",
      "Hop-by-hop mesh broadcast across 868/915 MHz sub-GHz frequencies using Meshtastic packet formatting",
      "Low-overhead MQTT broker bridge feeding Java Spring Boot microservice for rescue dispatch mapping",
    ],
    technologies: ["TinyML", "ESP32", "Embedded C++", "LoRa Mesh", "Java", "Spring Boot", "MQTT", "Edge Impulse"],
    takeaway: "Edge computing removes reliance on constant cloud connectivity where reliability matters most.",
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
    problem:
      "Illegal logging and deforestation across vast canopy reserves occur faster than human forest ranger patrols can physically verify acoustic false alarms.",
    whatWasBuilt:
      "Engineered a real-time multi-agent AI system for illegal deforestation detection using n8n orchestration, Groq high-speed LLM inference, and autonomous agent validation pipelines. Won 2nd Place Runner-Up at Anant Chakra Agentic AI Hackathon.",
    architectureDetails: [
      "Acoustic audio stream ingestion classifying chainsaw and heavy machinery acoustic frequencies",
      "Autonomous triage agent filtering weather/wildlife noise with Groq-accelerated Llama-3-70B models",
      "Verification agent correlating spatial GPS clusters and dispatching structured actionable escalation alerts",
    ],
    technologies: ["Multi-Agent AI", "n8n", "Groq LLM", "Python", "Spatial Telemetry", "REST APIs", "Autonomous Agents"],
    takeaway: "Specialized multi-agent pipelines outperform monolithic single-prompt LLM architectures on noisy real-world data.",
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
    problem:
      "Municipal grievance reporting lacks automated image-based verification and intelligent triage, causing severe backlog and delayed civic infrastructure repairs.",
    whatWasBuilt:
      "Developing an automated civic infrastructure monitoring and grievance triage engine with computer vision classification, reverse-geocoded spatial mapping, and priority escalation workflows.",
    architectureDetails: [
      "Image processing classifier to detect road damage, drainage overflow, and electrical hazards",
      "Automated deduplication algorithm grouping complaints by geographic coordinates and visual similarity",
      "Administrative dashboard with real-time status progression from inspection to resolution",
    ],
    technologies: ["Python", "FastAPI", "Computer Vision", "Geo-Spatial APIs", "PostgreSQL", "React"],
    takeaway: "Building software that bridges citizen reports with municipal action requires strict data validation at ingestion.",
  },
];

interface EngineeringLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EngineeringLogModal({ isOpen, onClose }: EngineeringLogModalProps) {
  const [selectedLog, setSelectedLog] = useState<LogEntry>(ENGINEERING_LOGS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-primary/40 bg-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40 select-none">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs font-bold text-foreground ml-2 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              STUTI.M // PRIVATE ENGINEERING BUILD JOURNAL
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground">
              VERSION // 2026.09
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition"
              aria-label="Close Engineering Log"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-[300px_1fr] flex-1 min-h-0 divide-y md:divide-y-0 md:divide-x divide-border overflow-y-auto">
          {/* Left Sidebar: Log Entries */}
          <div className="p-4 space-y-2 bg-muted/10 overflow-y-auto">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-2 mb-2 font-semibold">
              BUILD RECORDS ({ENGINEERING_LOGS.length})
            </p>
            {ENGINEERING_LOGS.map((log) => {
              const isSelected = selectedLog.id === log.id;
              return (
                <button
                  key={log.id}
                  onClick={() => setSelectedLog(log)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-primary/15 border-primary text-foreground shadow-xs"
                      : "border-transparent bg-card/60 hover:border-border hover:bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-primary">{log.logNumber}</span>
                    <span className="text-[10px] text-muted-foreground">{log.date}</span>
                  </div>
                  <p className="text-sm font-bold text-foreground">{log.title}</p>
                  <p className="text-[11px] text-muted-foreground truncate mt-0.5">{log.system}</p>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Selected Journal Entry */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-border">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary">{selectedLog.logNumber}</span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${selectedLog.statusColor}`}>
                    ● {selectedLog.status}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{selectedLog.version}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1 tracking-tight">
                  {selectedLog.title}
                </h3>
                <p className="font-mono text-xs text-primary font-semibold mt-0.5">{selectedLog.system}</p>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <span className="text-red-500">⚠</span> THE PROBLEM
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed bg-muted/20 p-4 rounded-xl border border-border/80">
                {selectedLog.problem}
              </p>
            </div>

            {/* What Was Built */}
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-primary" /> WHAT WAS BUILT & ARCHITECTURE
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {selectedLog.whatWasBuilt}
              </p>
              <div className="mt-3 space-y-2">
                {selectedLog.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground bg-card p-2.5 rounded-lg border border-border">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Chips */}
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                TECHNOLOGY BLUEPRINT
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedLog.technologies.map((t) => (
                  <span key={t} className="chip-tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Takeaway */}
            <div className="p-3.5 rounded-xl border border-primary/30 bg-primary/5">
              <p className="font-mono text-[10px] uppercase text-primary font-bold">ENGINEERING INSIGHT</p>
              <p className="text-xs text-foreground/90 font-medium mt-0.5 italic">"{selectedLog.takeaway}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
