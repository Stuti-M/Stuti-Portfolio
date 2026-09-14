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
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/building")({
  head: () => ({
    meta: [
      { title: "Currently Building | Iron Man Lab — Stuti Mohapatra" },
      {
        name: "description",
        content: "Smart Safety Watch: AI-powered offline emergency wearable combining TinyML, ESP32, and LoRa mesh.",
      },
    ],
  }),
  component: BuildingPage,
});

function BuildingPage() {
  return (
    <div className="theme-ironman page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 🛠️ Iron Man Lab Floating IoT & Circuit Particles */}
      <MarvelFloatingParticles theme="building" />

      {/* Lab Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[800px] rounded-full bg-primary/12 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-secondary/15 blur-[120px] arc-pulse"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Lab Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛠️</span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                STARK ENGINEERING LAB // ACTIVE PROTOTYPE
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span>STATUS: IN ACTIVE DEVELOPMENT</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Smart Safety Watch
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base">
            AI-powered offline emergency wearable combining TinyML, embedded C++ on ESP32, and decentralized LoRa mesh communication.
          </p>
        </div>

        {/* Spotlight Engineering Card */}
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-sm relative overflow-hidden mb-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase">
                <Radio className="h-4 w-4 text-primary" />
                <span>AI × IoT × Edge Computing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
                Decentralized Wearable Telemetry
              </h2>
              <p className="text-sm font-semibold text-primary mt-1">
                Zero-Connectivity Emergency Signature Detection & Mesh Alert Routing
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Designed to operate in remote wilderness, network outages, and cellular blackouts. The system executes quantized machine learning models directly on microcontroller firmware to recognize distress movement patterns before dispatching hop-by-hop mesh packets.
              </p>

              {/* Technical Highlights */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Autonomous Edge Inference: </span>
                    <span className="text-muted-foreground">
                      Quantized TinyML neural models built on Edge Impulse evaluate sensor streams on-device without continuous internet access.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Decentralized LoRa Mesh: </span>
                    <span className="text-muted-foreground">
                      Packets hop across node relays using Meshtastic-compatible protocols over sub-GHz radio frequencies.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Spring Boot Gateway: </span>
                    <span className="text-muted-foreground">
                      Receives MQTT broker feeds at the base station for emergency responder escalation and live mapping.
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                {[
                  "Java",
                  "Spring Boot",
                  "Edge Impulse",
                  "TinyML",
                  "Embedded C++",
                  "Arduino / ESP32",
                  "LoRa Mesh",
                  "Meshtastic",
                  "MQTT",
                  "REST APIs",
                ].map((tech) => (
                  <span key={tech} className="chip-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 7-Step Decentralized Pipeline */}
            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold flex items-center justify-between">
                <span>SYSTEM ARCHITECTURE FLOW</span>
                <span className="text-primary font-bold">7 NODES</span>
              </p>

              <div className="space-y-2 relative">
                {[
                  { step: "01", name: "Sensors", desc: "Biometric & Motion Telemetry", icon: Activity },
                  { step: "02", name: "TinyML", desc: "Local Edge Inference (Edge Impulse)", icon: Brain },
                  { step: "03", name: "ESP32", desc: "Embedded Controller Processing", icon: Cpu },
                  { step: "04", name: "LoRa Mesh", desc: "Offline Long-Range Mesh Routing", icon: Radio },
                  { step: "05", name: "MQTT", desc: "Low-Latency Message Ingestion", icon: Binary },
                  { step: "06", name: "Spring Boot", desc: "Telemetry Processing & Dispatch", icon: Layers },
                  { step: "07", name: "Alert", desc: "Emergency Escalation Notification", icon: ShieldAlert },
                ].map((node, idx, arr) => (
                  <div key={node.name} className="relative">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg border border-border/70 bg-card hover:border-primary transition">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-mono text-xs font-bold">
                        {node.step}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                          <node.icon className="h-3.5 w-3.5 text-primary" />
                          <span>{node.name}</span>
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">{node.desc}</p>
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex justify-center py-0.5 text-muted-foreground/60 text-xs">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/projects" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View Selected Work 🕷️
          </Link>
          <Link to="/experience" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>View Industry Experience 💚</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
