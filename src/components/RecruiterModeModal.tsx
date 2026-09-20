import { useRouter } from "@tanstack/react-router";
import {
  X,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  FolderGit2,
  Mail,
  FileText,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
} from "lucide-react";

interface RecruiterModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModeModal({ isOpen, onClose }: RecruiterModeModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-primary/40 bg-card text-foreground shadow-2xl overflow-hidden backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40 shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              RECRUITER MODE // FAST TECHNICAL PROFILE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground">
              EXECUTIVE SCAN VIEW
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition"
              aria-label="Close Recruiter Mode"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-body">
          {/* PROFILE SUMMARY */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold mb-1">
                <span>CANDIDATE DOSSIER</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 text-primary" />
                  Bhubaneswar, India
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                STUTI MOHAPATRA
              </h1>
              <p className="font-mono text-xs sm:text-sm font-bold text-primary mt-1 uppercase tracking-wider">
                Software • AI • Systems
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl mt-2 leading-relaxed">
                Computer Science Engineering student building reliable systems across on-device edge machine learning (TinyML), autonomous multi-agent pipelines, embedded IoT telemetry, and core algorithms.
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                ● OPEN TO INTERNSHIPS & CO-OPS
              </span>
              <a
                href="mailto:mstuti.official@gmail.com"
                className="text-primary hover:underline font-semibold"
              >
                mstuti.official@gmail.com
              </a>
              <span className="text-muted-foreground">+91 78479 71447</span>
            </div>
          </div>

          {/* EDUCATION & EXPERIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* EDUCATION */}
            <div className="p-5 rounded-xl border border-border bg-card/60">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-3">
                <GraduationCap className="h-4 w-4" />
                <span>EDUCATION</span>
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Siksha ‘O’ Anusandhan University
              </h2>
              <p className="text-xs font-mono text-primary font-semibold mt-0.5">
                B.Tech in Computer Science & Engineering
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>2025 – 2029 (Undergraduate)</span>
                <span>Bhubaneswar, Odisha</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Core coursework in Data Structures, Design & Analysis of Algorithms, Object-Oriented Programming (Java/C++), and Computer Architecture.
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="p-5 rounded-xl border border-border bg-card/60">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-3">
                <Briefcase className="h-4 w-4" />
                <span>EXPERIENCE</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Software Developer Intern
                  </h2>
                  <p className="text-xs font-mono text-primary font-semibold mt-0.5">
                    Paradip Port Authority
                  </p>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                  Govt of India
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>June – July 2026</span>
                <span>4 Weeks Intensive</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Completed hands-on software development under the IT Manager. Executed internal engineering workflows and received formal commendation from the Executive Engineer.
              </p>
            </div>
          </div>

          {/* FEATURED PROJECTS */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase">
                <FolderGit2 className="h-4 w-4" />
                <span>FEATURED PROJECTS & SYSTEMS</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  router.navigate({ to: "/projects" });
                }}
                className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
              >
                <span>All Projects</span>
                <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {/* Project 1 */}
              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">BUILD_01</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold border border-amber-500/30">
                    PROTOTYPE
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground font-sans">
                  Smart Safety Watch
                </h3>
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                  AI-powered offline emergency wearable executing quantized TinyML models on ESP32 microcontrollers with sub-GHz LoRa mesh relay.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]">
                  {["ESP32", "TinyML", "LoRa", "MQTT", "Spring Boot"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">BUILD_02</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/30">
                    🥈 2ND PLACE
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground font-sans">
                  Sentinel-X Deforestation AI
                </h3>
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                  Autonomous multi-agent system isolating chainsaw acoustic signatures and dispatching geo-spatial alerts via Groq Llama-3-70B models.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]">
                  {["Multi-Agent AI", "Groq LLM", "n8n", "Python", "Spatial APIs"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">BUILD_03</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 font-bold border border-sky-500/30">
                    ACTIVE ARCHITECTURE
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground font-sans">
                  Prabandh-Drishti (GeoGrievance AI)
                </h3>
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                  Automated civic infrastructure monitoring engine combining computer vision damage classification with spatial deduplication algorithms.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]">
                  {["Computer Vision", "FastAPI", "PostgreSQL", "React"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 4 */}
              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">BUILD_04</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 font-bold border border-pink-500/30">
                    🥈 2ND PLACE
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground font-sans">
                  SheCodex Algorithmic Problem Engine
                </h3>
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                  Algorithmic system foundations: daily problem solving across graph traversals, dynamic programming, and data structures.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap gap-1.5 text-[10px]">
                  {["Java", "Python", "DSA", "Algorithms"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS MATRIX (GROUPED) */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-4">
              <Layers className="h-4 w-4" />
              <span>TECHNICAL SKILLS MATRIX</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl border border-border bg-card/60">
                <p className="text-[10px] text-primary uppercase font-bold mb-2">LANGUAGES</p>
                <ul className="space-y-1 text-foreground">
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• C++</li>
                  <li>• JavaScript</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-card/60">
                <p className="text-[10px] text-primary uppercase font-bold mb-2">AI / ML</p>
                <ul className="space-y-1 text-foreground">
                  <li>• TinyML</li>
                  <li>• Computer Vision</li>
                  <li>• LLMs (Groq)</li>
                  <li>• Edge Impulse</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-card/60">
                <p className="text-[10px] text-primary uppercase font-bold mb-2">BACKEND</p>
                <ul className="space-y-1 text-foreground">
                  <li>• Spring Boot</li>
                  <li>• REST APIs</li>
                  <li>• FastAPI</li>
                  <li>• PostgreSQL</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-card/60">
                <p className="text-[10px] text-primary uppercase font-bold mb-2">SYSTEMS / IoT</p>
                <ul className="space-y-1 text-foreground">
                  <li>• ESP32</li>
                  <li>• LoRa Mesh</li>
                  <li>• MQTT</li>
                  <li>• Embedded C++</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-card/60">
                <p className="text-[10px] text-primary uppercase font-bold mb-2">TOOLS</p>
                <ul className="space-y-1 text-foreground">
                  <li>• Git & GitHub</li>
                  <li>• n8n Orchestration</li>
                  <li>• Linux / Terminal</li>
                  <li>• FreeRTOS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VERIFIED ACHIEVEMENTS */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-4">
              <Award className="h-4 w-4" />
              <span>VERIFIED ACHIEVEMENTS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <p className="text-[10px] text-amber-500 font-bold">🥈 2ND PLACE PODIUM</p>
                <p className="font-bold text-foreground mt-1">Anant Chakra Hackathon</p>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">
                  Agentic AI Track (Chakravyuh & Genesis 2K26)
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <p className="text-[10px] text-amber-500 font-bold">🥈 2ND PLACE PODIUM</p>
                <p className="font-bold text-foreground mt-1">SheCodex Coding Challenge</p>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">
                  Women's Day Algorithmic Challenge (CODEX Club)
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-primary/30 bg-primary/5">
                <p className="text-[10px] text-primary font-bold">★ GOVT COMMENDATION</p>
                <p className="font-bold text-foreground mt-1">Paradip Port Authority</p>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">
                  Formal recognition by Executive Engineer (IT)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-border bg-muted/40 shrink-0 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                onClose();
                router.navigate({ to: "/projects" });
              }}
              className="px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => {
                onClose();
                router.navigate({ to: "/experience" });
              }}
              className="px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition"
            >
              VIEW EXPERIENCE
            </button>
            <button
              onClick={() => {
                onClose();
                router.navigate({ to: "/skills" });
              }}
              className="px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition"
            >
              VIEW SKILLS
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-xs"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>REQUEST RESUME</span>
            </a>
            <a
              href="mailto:mstuti.official@gmail.com"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>CONTACT STUTI</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
