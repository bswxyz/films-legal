"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/** Parable-inspired scroll reveal — respects prefers-reduced-motion */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Parable-style feature bento */
export function FeatureBento() {
  const cells = [
    { title: "Looks", body: "24 hand-tuned cameras live in the viewfinder — grain, halation, Frame and all." },
    { title: "Shared Films", body: "Host a Film. Guests join by QR or code. Every Shot lands on one roll." },
    { title: "Reveal", body: "Nobody peeks early. When the timer hits zero, the whole album opens together." },
    { title: "Recap", body: "Turn a developed Film into a vertical reel with music and stickers." },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cells.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.06}>
          <div className="rounded-[22px] border border-hair bg-surface p-6">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brass">
              {c.title}
            </div>
            <p className="text-[15.5px] leading-relaxed text-muted">{c.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Parable-style FAQ accordion */
export function FaqAccordion() {
  const items = [
    {
      q: "What exactly is Filmsera?",
      a: "A group film camera for iPhone. Shoot Shots through 24 Looks, Host a shared Film Guests join, and open every Frame together at Reveal.",
    },
    {
      q: "Can I see photos before they develop?",
      a: "No — Frames stay hidden while you shoot. When Reveal hits, the entire Film appears at once. You can Reveal early if you can't wait.",
    },
    {
      q: "Do guests need to download the app?",
      a: "Yes. Guests need Filmsera on iPhone to join and shoot. A QR or join link opens the app (or the App Store if they don't have it yet).",
    },
    {
      q: "What's free, and what's Filmsera Pro?",
      a: "Core camera and Films are free. Filmsera Pro unlocks premium Look packs, Recap styles, and more — Weekly, Monthly, or Annual. Prices show in-app before you subscribe.",
    },
  ];
  return (
    <div className="mx-auto max-w-[760px]">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-hair py-1">
          <summary className="cursor-pointer list-none py-5 text-left text-[17px] font-semibold text-cream marker:content-none">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-brass transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Dazz-inspired Look Lab shelf */
export function LookShelf({
  looks,
}: {
  looks: readonly { slug: string; name: string; blurb: string }[];
}) {
  return (
    <div className="flex gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {looks.map((look) => (
        <a
          key={look.slug}
          href={`/looks/${look.slug}.html`}
          className="w-[220px] shrink-0 scroll-snap-align-center rounded-[22px] border border-hair bg-surface p-5 transition hover:border-[rgba(230,180,80,0.35)]"
        >
          <div className="mb-3 flex h-28 items-center justify-center rounded-xl bg-[linear-gradient(145deg,#2a2218,#12100c)] font-display text-3xl text-brass">
            {look.name.slice(0, 1)}
          </div>
          <div className="font-display text-2xl text-cream">{look.name}</div>
          <p className="mt-2 text-sm text-muted">{look.blurb}</p>
        </a>
      ))}
    </div>
  );
}
