import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, Phone, MessageSquare, Target } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stuti Mohapatra" },
      { name: "description", content: "Reach out via phone, email, GitHub or Discord." },
    ],
  }),
  component: Contact,
});

const contacts = [
  { icon: Phone,   label: "Phone",   value: "+91 78479 71447",             href: "tel:+917847971447" },
  { icon: Mail,    label: "Email",   value: "mstuti.official@gmail.com",   href: "mailto:mstuti.official@gmail.com" },
  { icon: Github,  label: "GitHub",  value: "github.com/Stuti-M",          href: "https://github.com/Stuti-M" },
  { icon: MessageSquare, label: "Discord", value: "stuti_k_73",            href: "https://discord.com/users/stuti_k_73" },
];

function Contact() {
  return (
    <div className="theme-hawkeye cursor-hawkeye min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* target rings background */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.07]">
        {[600, 480, 360, 240, 120].map(s => (
          <div key={s} className="absolute rounded-full border-2 border-hero" style={{ width: s, height: s }} />
        ))}
        <div className="absolute h-2 w-2 rounded-full bg-hero" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="font-display text-sm tracking-[0.35em] text-hero uppercase flex items-center justify-center gap-2">
            <Target className="h-4 w-4" /> Never Misses
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            Take the <span className="text-hero">Shot</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Aim true. Pick your channel and hit send — I don't miss replies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex items-center gap-4 rounded-xl border border-border bg-card/70 p-5 backdrop-blur transition hover:border-hero hover:hero-glow"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-hero bg-hero/10 text-hero transition group-hover:bg-hero group-hover:text-hero-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-0.5 truncate font-display text-lg font-bold">{c.value}</p>
              </div>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-hero opacity-0 transition group-hover:opacity-100">→</span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground italic">
          "The bow only misses when the archer forgets to breathe."
        </p>
      </section>
    </div>
  );
}
