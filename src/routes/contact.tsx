import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin, MessageSquare, Code2, Copy, Check, ArrowRight, Send, ShieldAlert, Lock, Terminal } from "lucide-react";
import { BlackWidowIcon } from "../components/MarvelIcons";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Direct Contact | Black Widow Tactical — Stuti Mohapatra" },
      {
        name: "description",
        content: "Tactical communication channels: Direct email, LinkedIn, GitHub, LeetCode, and phone for Stuti Mohapatra.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ identity: "", email: "", message: "" });
  const [transmitState, setTransmitState] = useState<"idle" | "encrypting" | "established" | "transmitted">("idle");
  const [activeFocusField, setActiveFocusField] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("mstuti.official@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.identity || !formData.email || !formData.message) return;

    setTransmitState("encrypting");
    setTimeout(() => {
      setTransmitState("established");
      setTimeout(() => {
        setTransmitState("transmitted");
        // Trigger mailto after transmission
        const subject = encodeURIComponent(`Secure Transmission from ${formData.identity}`);
        const body = encodeURIComponent(
          `OPERATOR IDENTITY: ${formData.identity}\nSECURE COMMS: ${formData.email}\n\nTRANSMISSION PAYLOAD:\n${formData.message}`
        );
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
      icon: Mail,
    },
    {
      id: "linkedin",
      protocol: "PROFESSIONAL // DISPATCH",
      label: "LinkedIn Profile",
      value: "stuti-mohapatra",
      href: "https://www.linkedin.com/in/stuti-mohapatra-180713392",
      icon: Linkedin,
    },
    {
      id: "github",
      protocol: "CODE_REPOSITORY // GIT",
      label: "GitHub Repositories",
      value: "github.com/Stuti-M",
      href: "https://github.com/Stuti-M",
      icon: Github,
    },
    {
      id: "leetcode",
      protocol: "ALGORITHMIC // PROFILE",
      label: "LeetCode Tracker",
      value: "@Stuti_Mohapatra",
      href: "https://leetcode.com/u/Stuti_Mohapatra/",
      icon: Code2,
    },
    {
      id: "discord",
      protocol: "SECURE_COMMS // REALTIME",
      label: "Discord Handle",
      value: "stuti_k_73",
      href: "https://discord.com/users/stuti_k_73",
      icon: MessageSquare,
    },
    {
      id: "phone",
      protocol: "DIRECT_LINE // VOICE",
      label: "Phone Contact",
      value: "+91 78479 71447",
      href: "tel:+917847971447",
      icon: Phone,
    },
  ];

  return (
    <div className="theme-widow page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden bg-black/40 font-body">
      {/* 🕷️ Black Widow Particles */}
      <MarvelFloatingParticles theme="widow" />

      {/* Tactical Crimson Stealth Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 h-[550px] w-[800px] rounded-full bg-red-600/10 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-red-600/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Tactical Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <BlackWidowIcon className="h-5 w-5 drop-shadow-[0_0_8px_#DC2626]" />
            <span>RED ROOM PROTOCOL // SECURE ACCESS CHANNELS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase">
            HAVE A PROBLEM WORTH BUILDING?
          </h1>
          <p className="font-display text-2xl sm:text-3xl font-bold text-primary mt-2">
            Let's connect.
          </p>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-body">
            Whether you are looking to collaborate on Edge AI, IoT systems, software engineering internships, or full-stack builds — my inbox is open.
          </p>
        </div>

        {/* SECURE CHANNEL INTERACTIVE TACTICAL FORM TERMINAL */}
        <div className="mb-12 rounded-2xl border-2 border-red-500/30 bg-card/85 backdrop-blur-md p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border/80 font-mono text-xs mb-6">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              <span className="font-bold text-foreground uppercase tracking-widest">SECURE CHANNEL // DIRECT TERMINAL</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]" />
              <span>ENCRYPTION: AES-256 GCM ACTIVE</span>
            </div>
          </div>

          <form onSubmit={handleTransmit} className="space-y-5">
            {/* Identity Field */}
            <div className="relative">
              <div className="flex justify-between items-center mb-1 font-mono text-xs">
                <label htmlFor="identity-input" className="text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="text-primary font-bold">01.</span>
                  <span>IDENTITY // NAME OR ORG</span>
                </label>
                {activeFocusField === "identity" && (
                  <span className="text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]">
                    [ TACTICAL LOCK ]
                  </span>
                )}
              </div>
              <input
                id="identity-input"
                type="text"
                required
                placeholder="e.g. Tony Stark / Engineering Recruiter"
                value={formData.identity}
                onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                onFocus={() => setActiveFocusField("identity")}
                onBlur={() => setActiveFocusField(null)}
                className="w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="flex justify-between items-center mb-1 font-mono text-xs">
                <label htmlFor="email-input" className="text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="text-primary font-bold">02.</span>
                  <span>COMMUNICATION // RETURN EMAIL</span>
                </label>
                {activeFocusField === "email" && (
                  <span className="text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]">
                    [ SECURE DISPATCH ]
                  </span>
                )}
              </div>
              <input
                id="email-input"
                type="email"
                required
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setActiveFocusField("email")}
                onBlur={() => setActiveFocusField(null)}
                className="w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="flex justify-between items-center mb-1 font-mono text-xs">
                <label htmlFor="message-input" className="text-foreground font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="text-primary font-bold">03.</span>
                  <span>PAYLOAD // PROJECT SPECIFICATION OR MESSAGE</span>
                </label>
                {activeFocusField === "message" && (
                  <span className="text-[10px] text-red-400 font-mono animate-[widowCipherScan_1s_ease-out]">
                    [ BUFFERING TRANSMISSION ]
                  </span>
                )}
              </div>
              <textarea
                id="message-input"
                required
                rows={3}
                placeholder="Describe your technical inquiry, project scope, or engineering role..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setActiveFocusField("message")}
                onBlur={() => setActiveFocusField(null)}
                className="w-full rounded-xl border border-red-500/30 bg-muted/30 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:bg-card focus:ring-1 focus:ring-red-500 transition outline-none resize-none"
              />
            </div>

            {/* Submit Button with Encrypted Sequence States */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                disabled={transmitState !== "idle"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-mono font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-102 cursor-pointer disabled:opacity-75"
              >
                {transmitState === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    <span>[ ESTABLISH CONNECTION ]</span>
                  </>
                )}
                {transmitState === "encrypting" && (
                  <>
                    <Lock className="h-4 w-4 animate-spin" />
                    <span>ENCRYPTING PAYLOAD...</span>
                  </>
                )}
                {transmitState === "established" && (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>CHANNEL ESTABLISHED</span>
                  </>
                )}
                {transmitState === "transmitted" && (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>MESSAGE TRANSMITTED</span>
                  </>
                )}
              </button>

              <span className="font-mono text-[10px] text-muted-foreground text-center sm:text-right">
                STUTI MOHAPATRA // BHUBANESWAR, ODISHA, INDIA
              </span>
            </div>
          </form>
        </div>

        {/* Security Access Motifs & Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-12">
          {commChannels.map((c) => (
            <div
              key={c.id}
              className="p-4 sm:p-5 rounded-xl border border-red-500/20 bg-card/70 backdrop-blur-sm flex items-center justify-between transition-all hover:border-primary/60 hover:bg-card/90 shadow-2xs group cursor-default"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {c.protocol}
                  </p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-mono text-sm font-bold text-foreground hover:text-primary transition truncate block mt-0.5"
                  >
                    {c.value}
                  </a>
                </div>
              </div>

              {c.action === "copy" && (
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0 ml-2 cursor-pointer"
                  title="Copy direct email address"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-500 font-mono font-bold">
                      <Check className="h-4 w-4" />
                      <span>COPIED</span>
                    </span>
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/about" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 07 ABOUT // Thor Asgardian ⚡
          </Link>
          <Link to="/" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>01 HOME // S.H.I.E.L.D. HQ 🛡️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
