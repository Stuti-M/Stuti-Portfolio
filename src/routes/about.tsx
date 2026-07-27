import { createFileRoute } from "@tanstack/react-router";
import { LeetCodeProgress } from "../components/LeetCodeProgress";
import { GraduationCap, Linkedin, Zap, Compass } from "lucide-react";
import thorNeon from "@/assets/heroes/thor-neon.jpg.asset.json";
import thorStorm from "@/assets/heroes/thor-storm.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stuti Mohapatra" },
      { name: "description", content: "CSE student at SOA University (2025–2029), exploring full stack development, machine learning, AI agents, cloud and open source." },
      { property: "og:title", content: "About — Stuti Mohapatra" },
      { property: "og:description", content: "Education timeline, current explorations and live LeetCode progress." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const exploring = [
  "Full Stack Development",
  "Machine Learning",
  "AI Agents",
  "Cloud Computing",
  "Open Source",
];

const education = [
  {
    school: "SOA University",
    detail: "Bachelor of Technology — Computer Science Engineering",
    period: "2025 – 2029",
  },
  {
    school: "DAV Public School",
    detail: "Science",
    period: "2023 – 2025",
  },
];

function About() {
  return (
    <div className="theme-thor cursor-thor min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Thor backdrop — stormcaller cosmos + Mjolnir lightning, asgardian blue & gold */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={thorStorm.url} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-70" />
        <img src={thorNeon.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.2_240/0.5),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.9_0.15_90/0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-50 neon-drift" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-300 blur-[140px] opacity-35 neon-drift" style={{ animationDelay: "-7s" }} />
        {/* Floating storm sparks */}
        <div className="absolute top-[15%] right-[12%] h-3 w-3 rounded-full bg-cyan-200 text-cyan-200 neon-float neon-pulse" />
        <div className="absolute top-[40%] left-[10%] h-2 w-2 rounded-full bg-blue-400 text-blue-400 neon-float-slow neon-pulse" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[68%] left-[38%] h-2.5 w-2.5 rounded-full bg-yellow-300 text-yellow-300 neon-float neon-pulse" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-[82%] right-[22%] h-3 w-3 rounded-full border-2 border-cyan-300 text-cyan-300 neon-float-slow neon-pulse" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-[25%] left-[55%] h-1.5 w-1.5 rounded-full bg-white text-white neon-float neon-pulse" style={{ animationDelay: "-1s" }} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-display text-sm tracking-[0.35em] text-yellow-400 uppercase flex items-center gap-2">
            <Zap className="h-4 w-4 lightning-flicker" /> Asgardian Chronicle
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            Wielder of <span className="text-hero">Code</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Hello! I'm Stuti Mohapatra, a Computer Science Engineering student passionate about web
            development, artificial intelligence and building impactful real-world applications. I enjoy
            turning ideas into products that solve genuine problems — from AI-powered apps to
            government-focused digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition hover:border-hero">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="h-6 w-6 text-hero" />
              <h2 className="font-display text-xl font-bold">Currently Exploring</h2>
            </div>
            <ul className="space-y-2">
              {exploring.map(e => (
                <li key={e} className="flex items-center gap-2 text-foreground/90">
                  <span className="text-hero font-bold">✓</span> {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition hover:border-hero">
            <div className="flex items-center gap-3 mb-3">
              <Linkedin className="h-6 w-6 text-hero" />
              <h2 className="font-display text-xl font-bold">Professional</h2>
            </div>
            <p className="text-foreground/90">
              Web developer and AI enthusiast shipping real products — MoodMe.Up, Drive.Check.Go and
              Code Submission Hub — alongside hackathon wins and an industry internship at Paradip Port Authority.
            </p>
            <a
              href="https://www.linkedin.com/in/stuti-mohapatra-180713392"
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-hero hover:underline"
            >
              View LinkedIn Profile →
            </a>
          </div>
        </div>

        {/* Education timeline */}
        <div className="mb-10 rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-hero" />
            <h2 className="font-display text-xl font-bold">Education</h2>
          </div>
          <ol className="relative space-y-8 border-l-2 border-hero/40 pl-6">
            {education.map(ed => (
              <li key={ed.school} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-hero ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{ed.school}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{ed.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{ed.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <LeetCodeProgress username="Stuti_Mohapatra" />

        <div className="mt-10 rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="font-display text-xl font-bold mb-2">The Journey</h2>
          <p className="text-muted-foreground">
            From first lines of Python to full-stack builds and AI experiments — I approach every project
            like Mjolnir approaches battle: with focus, worthiness, and a bit of thunder. Currently exploring
            the intersection of AI agents and practical web experiences.
          </p>
        </div>
      </section>
    </div>
  );
}
