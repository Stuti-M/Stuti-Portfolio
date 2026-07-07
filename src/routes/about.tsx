import { createFileRoute } from "@tanstack/react-router";
import { LeetCodeProgress } from "../components/LeetCodeProgress";
import { GraduationCap, Linkedin, Zap } from "lucide-react";
import thorNeon from "@/assets/heroes/thor-neon.jpg.asset.json";
import thorStorm from "@/assets/heroes/thor-storm.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stuti Mohapatra" },
      { name: "description", content: "B.Tech CSE @ SOA University '29. LeetCode progress and academic journey." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="theme-thor cursor-thor min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Thor backdrop — stormcaller cosmos + Mjolnir lightning, asgardian blue & gold */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={thorStorm.url} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-70" />
        <img src={thorNeon.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.2_240/0.5),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.9_0.15_90/0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-50" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-300 blur-[140px] opacity-35" />
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
            "Whosoever holds this keyboard, if they be worthy, shall possess the power of Stuti."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="h-6 w-6 text-hero" />
              <h2 className="font-display text-xl font-bold">Academics</h2>
            </div>
            <p className="text-2xl font-display font-bold">B.Tech in Computer Science</p>
            <p className="text-hero font-semibold">SOA University — Class of 2029</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Diving deep into algorithms, systems, and the ever-evolving realm of AI/ML — forging the mind
              through equal parts theory and craft.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Linkedin className="h-6 w-6 text-hero" />
              <h2 className="font-display text-xl font-bold">Professional</h2>
            </div>
            <p className="text-foreground/90">
              Aspiring Web Developer & AI/ML Enthusiast, actively building real-world projects
              and contributing to student tech communities.
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

        <LeetCodeProgress username="Stuti_Mohapatra" />

        <div className="mt-10 rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="font-display text-xl font-bold mb-2">The Journey</h2>
          <p className="text-muted-foreground">
            From first lines of Python to full-stack builds and AI experiments — I approach every project
            like Mjolnir approaches battle: with focus, worthiness, and a bit of thunder. Currently exploring
            the intersection of AI/ML and practical web experiences.
          </p>
        </div>
      </section>
    </div>
  );
}
