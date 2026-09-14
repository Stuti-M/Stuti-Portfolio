import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin, MessageSquare, Code2, Copy, Check, ArrowRight, Send } from "lucide-react";
import { BlackWidowIcon } from "../components/MarvelIcons";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Black Widow Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Direct communications channels for Stuti Mohapatra (email, phone, LinkedIn, GitHub, Discord).",
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

  const contacts = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "mstuti.official@gmail.com",
      href: "mailto:mstuti.official@gmail.com",
      action: "copy",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "stuti-mohapatra",
      href: "https://www.linkedin.com/in/stuti-mohapatra-180713392",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Stuti-M",
      href: "https://github.com/Stuti-M",
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "@Stuti_Mohapatra",
      href: "https://leetcode.com/u/Stuti_Mohapatra/",
    },
    {
      icon: MessageSquare,
      label: "Discord",
      value: "stuti_k_73",
      href: "https://discord.com/users/stuti_k_73",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 78479 71447",
      href: "tel:+917847971447",
    },
  ];

  return (
    <div className="theme-widow page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* ⧗ Black Widow Glowing Moving Belt Hourglass Particles */}
      <MarvelFloatingParticles theme="widow" />

      {/* Background Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-red-600/15 blur-[120px] neon-pulse"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Header with Official Black Widow Hourglass Belt Buckle Emblem */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BlackWidowIcon className="h-6 w-6 drop-shadow-[0_0_12px_#DC2626]" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              RED ROOM PROTOCOL // SECURE CHANNELS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            HAVE A PROBLEM WORTH BUILDING?
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Let's talk.
          </p>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Whether it's an AI/ML engineering role, software development opportunity, hackathon collaboration, or technical inquiry — my inbox is open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 gap-4 text-left mt-10">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="p-5 rounded-xl border border-border bg-card flex items-center justify-between transition hover:border-primary hover:shadow-xs"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">{c.label}</p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-bold text-foreground hover:text-primary transition truncate block text-sm mt-0.5"
                  >
                    {c.value}
                  </a>
                </div>
              </div>

              {c.action === "copy" && (
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0 ml-2"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-500 font-mono font-semibold">
                      <Check className="h-4 w-4" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Direct Email Action Button */}
        <div className="mt-12">
          <a
            href="mailto:mstuti.official@gmail.com?subject=Engineering%20Opportunity%20/%20Inquiry%20-%20Stuti%20Mohapatra"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-[1.02] hero-glow"
          >
            <span>Dispatch Secure Message</span>
            <Send className="h-4 w-4" />
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/about" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View About & Journey ⚡
          </Link>
          <Link to="/" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Return to SHIELD HQ 🛡️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
