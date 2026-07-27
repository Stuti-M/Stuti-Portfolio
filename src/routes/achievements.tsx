import { createFileRoute } from "@tanstack/react-router";
import { Award, Shield, Star, Trophy, GraduationCap, Github } from "lucide-react";
import cap from "@/assets/heroes/cap.jpg.asset.json";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Stuti Mohapatra" },
      { name: "description", content: "2nd place at Anant Chakra Agentic AI Hackathon and SheCodex Coding Challenge, plus certifications and open-source activity." },
      { property: "og:title", content: "Achievements — Stuti Mohapatra" },
      { property: "og:description", content: "Hackathon podiums, certifications and developer milestones." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Achievements,
});

const items = [
  {
    icon: Trophy,
    title: "Anant Chakra Agentic AI Hackathon",
    tag: "2nd Place",
    body: "Runner-up at the Anant Chakra Agentic AI Hackathon — designed and shipped an agentic AI solution under time pressure, from problem framing to a working demo.",
  },
  {
    icon: Trophy,
    title: "SheCodex Coding Challenge",
    tag: "2nd Place",
    body: "Secured 2nd place in the SheCodex Coding Challenge, a women-in-tech competition testing problem solving, DSA fundamentals and clean implementation.",
  },
  {
    icon: GraduationCap,
    title: "Front-End Web Development Certification",
    tag: "Certified",
    body: "Completed a Front-End Web Development certification covering semantic HTML, modern CSS, responsive layouts and JavaScript-driven interfaces.",
  },
  {
    icon: Github,
    title: "Active GitHub Developer",
    tag: "Open Source",
    body: "Consistently shipping and maintaining public repositories — projects like MoodMe.Up, Drive.Check.Go and Code Submission Hub live in the open.",
  },
];

const experience = {
  role: "Summer Internship",
  org: "Paradip Port Authority",
  dept: "Electrical & Mechanical Department",
  period: "22 June — 21 July 2026",
  points: [
    "Successfully completed the summer internship programme",
    "Worked directly under the IT Manager",
    "Assisted project execution carried out under Tech Mahindra",
    "Appreciated for sincerity and diligence",
  ],
};

function Achievements() {
  return (
    <div className="theme-cap cursor-cap min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Captain America backdrop — blueprint tech, red/white/blue */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={cap.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.35_0.15_250/0.55),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.5_0.2_20/0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_120px,oklch(0.98_0_0/0.04)_120px_121px)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-40 neon-drift" />
        {/* Floating stars & shield sparks */}
        <div className="absolute top-[12%] left-[8%] h-3 w-3 rounded-full bg-red-500 text-red-500 neon-float neon-pulse" />
        <div className="absolute top-[22%] right-[10%] h-2 w-2 rounded-full bg-blue-400 text-blue-400 neon-float-slow neon-pulse" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[62%] left-[12%] h-2.5 w-2.5 rounded-full bg-white text-white neon-float neon-pulse" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-[78%] right-[16%] h-3 w-3 rounded-full border-2 border-red-500 text-red-500 neon-float-slow neon-pulse" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-[48%] right-[42%] h-1.5 w-1.5 rounded-full bg-blue-300 text-blue-300 neon-float neon-pulse" style={{ animationDelay: "-1s" }} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-14">
          <p className="font-display text-sm tracking-[0.35em] text-hero uppercase flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" /> On Your Left
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            Shields <span className="text-hero">Earned</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            "The price of freedom is high — but the wins along the way? Priceless."
          </p>
        </div>

        {/* Captain America Shield */}
        <div className="flex justify-center mb-16">
          <div className="relative h-56 w-56">
            <div className="absolute inset-0 rounded-full bg-red-600 shadow-2xl" />
            <div className="absolute inset-4 rounded-full bg-white" />
            <div className="absolute inset-8 rounded-full bg-red-600" />
            <div className="absolute inset-14 rounded-full bg-blue-800 flex items-center justify-center">
              <Star className="h-16 w-16 text-white fill-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map(it => (
            <article key={it.title} className="group relative rounded-xl border border-border bg-card/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-hero hover:hero-glow">
              <div className="flex items-start justify-between mb-3">
                <it.icon className="h-8 w-8 text-hero" />
                <span className="rounded-full border border-hero/40 bg-hero/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-hero">
                  {it.tag}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold">{it.title}</h2>
              <p className="mt-3 text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mt-16">
          <h2 className="font-display text-3xl font-black mb-6 flex items-center gap-3">
            <Award className="h-7 w-7 text-hero" /> Experience
          </h2>
          <div className="relative rounded-xl border border-border bg-card/70 p-6 backdrop-blur">
            <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-hero" />
            <div className="pl-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold">
                  {experience.role} — <span className="text-hero">{experience.org}</span>
                </h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{experience.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{experience.dept}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {experience.points.map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="text-hero">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/stuti-mohapatra-180713392"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-hero px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-hero transition hover:bg-hero hover:text-hero-foreground"
          >
            More on LinkedIn →
          </a>
        </div>
      </section>
    </div>
  );
}
