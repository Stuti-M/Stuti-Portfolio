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

  const copyEmail = () => {
    navigator.clipboard.writeText("mstuti.official@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
    <div className="theme-widow page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden bg-black/40">
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

          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase">
            HAVE A PROBLEM WORTH BUILDING?
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Let's connect.
          </p>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Whether you are looking to collaborate on Edge AI, IoT systems, software engineering internships, or full-stack builds — my inbox is open.
          </p>
        </div>

        {/* Security Access Motifs & Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {commChannels.map((c) => (
            <div
              key={c.id}
              className="p-4 sm:p-5 rounded-xl border border-red-500/20 bg-card/70 backdrop-blur-sm flex items-center justify-between transition-all hover:border-primary/60 hover:bg-card/90 shadow-2xs group"
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
                  className="p-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0 ml-2"
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

        {/* Tactical Message CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:mstuti.official@gmail.com?subject=Engineering%20Opportunity%20/%20Inquiry%20-%20Stuti%20Mohapatra"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-mono font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-102 hero-glow"
          >
            <Send className="h-4 w-4" />
            <span>DISPATCH DIRECT TRANSMISSION</span>
          </a>
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
