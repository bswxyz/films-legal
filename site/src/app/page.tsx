import Link from "next/link";
import { AppStoreBadge, DesktopQr, SiteNav } from "../components/Nav";
import {
  FaqAccordion,
  FeatureBento,
  LookShelf,
  Reveal,
} from "../components/ParablePieces";
import { LOOKS } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="relative z-[2]">
        {/* Hero */}
        <header className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[rgba(230,180,80,0.25)] bg-[rgba(230,180,80,0.14)] px-3.5 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.2em] text-brass">
              Available on iOS
            </span>
            <h1 className="font-display mt-4 text-[clamp(46px,7vw,78px)] leading-[1.04] text-cream">
              Your day,
              <br />
              <span className="text-brass">everyone&apos;s camera.</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[19px] text-muted">
              Filmsera is a group film camera. Host a shared Film, invite your people, and
              everyone shoots Shots through 24 Looks — then{" "}
              <em className="font-display not-italic text-cream">nobody sees a single Frame</em>{" "}
              until Reveal.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppStoreBadge />
              <DesktopQr />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[280px] overflow-hidden rounded-[42px] border border-hair bg-[#171411] p-2 shadow-[0_50px_110px_-20px_rgba(0,0,0,0.7)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/shots/screen-home.png"
                alt="Filmsera home"
                className="aspect-[9/19] w-full rounded-[34px] object-cover"
              />
            </div>
          </div>
        </header>

        {/* Trust */}
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-center gap-x-8 gap-y-2 border-y border-hair px-5 py-4 text-[13px] font-semibold text-muted">
          <span>
            <b className="text-cream">24</b> Looks
          </span>
          <span>
            <b className="text-cream">iOS</b>
          </span>
          <span>
            <b className="text-cream">Private</b> by design
          </span>
          <span>
            Timed <b className="text-cream">Reveal</b>
          </span>
        </div>

        {/* Look Lab */}
        <section id="looks" className="py-16">
          <Reveal className="mx-auto max-w-[700px] px-5 text-center">
            <span className="inline-flex rounded-full border border-[rgba(230,180,80,0.25)] bg-[rgba(230,180,80,0.14)] px-3.5 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.2em] text-brass">
              Look Lab · Equipment shelf
            </span>
            <h2 className="font-display mt-4 text-[clamp(30px,4.4vw,46px)] text-cream">
              Twenty-four cameras. One pocket.
            </h2>
            <p className="mt-3 text-[17px] text-muted">
              Disposable, VHS, 8mm, Instant, Digicam, Glow — a shelf of Looks, live in the
              viewfinder.
            </p>
          </Reveal>
          <div className="mt-8">
            <LookShelf looks={LOOKS} />
          </div>
          <p className="mt-2 text-center font-mono text-xs tracking-[0.2em] text-muted">
            ← SWIPE THE SHELF →
          </p>
          <div className="mt-6 text-center">
            <Link href="/looks/" className="font-semibold text-brass hover:underline">
              Browse the full Look Lab →
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[linear-gradient(180deg,transparent,rgba(230,180,80,0.05),transparent)] py-16">
          <Reveal className="mx-auto max-w-[700px] px-5 text-center">
            <span className="inline-flex rounded-full border border-[rgba(230,180,80,0.25)] bg-[rgba(230,180,80,0.14)] px-3.5 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.2em] text-brass">
              How it works
            </span>
            <h2 className="font-display mt-4 text-[clamp(30px,4.4vw,46px)]">
              How a night becomes a Film.
            </h2>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-[1120px] gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Create a Film", "Name it, pick a Look, set when it develops."],
              ["2", "Guests join", "Share a QR or link. Guests open Filmsera."],
              ["3", "Shoot Shots", "Every Frame drops into the roll — unseen."],
              ["4", "Reveal", "The timer hits zero. The album opens together."],
            ].map(([n, t, d]) => (
              <Reveal key={n}>
                <div className="rounded-[22px] border border-hair bg-surface p-6 text-center">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brass font-display text-xl text-brass-deep">
                    {n}
                  </div>
                  <h3 className="font-display text-[22px] text-cream">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Feature bento */}
        <section id="reveal" className="mx-auto max-w-[1120px] px-5 py-16">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-[clamp(30px,4.4vw,46px)]">One app. Every angle.</h2>
          </Reveal>
          <FeatureBento />
        </section>

        {/* Use cases */}
        <section className="mx-auto max-w-[1120px] px-5 py-10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl">Made for nights that matter.</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                ["Wedding", "/blog/shared-camera-roll-at-a-wedding.html"],
                ["Party", "/blog/disposable-camera-party-playbook.html"],
                ["Trip", "/blog/one-trip-one-film.html"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full border border-hair px-5 py-2.5 text-sm font-semibold text-cream hover:border-brass"
                >
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-16">
          <Reveal className="mb-6 text-center">
            <h2 className="font-display text-[clamp(30px,4.4vw,46px)]">Good to know.</h2>
          </Reveal>
          <FaqAccordion />
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-[1120px] px-5 pb-16">
          <Reveal>
            <div className="rounded-[30px] border border-hair bg-[linear-gradient(135deg,rgba(230,180,80,0.14),rgba(230,180,80,0.04))] px-7 py-12 text-center">
              <h2 className="font-display text-[clamp(28px,4.4vw,44px)]">Download Filmsera</h2>
              <p className="mt-3 text-muted">
                24 Looks. Shared Films. Timed Reveal. Host the night — then open every Frame
                together.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AppStoreBadge />
                <DesktopQr />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-[2] border-t border-hair py-10 text-sm text-muted">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5">
          <div className="font-display text-2xl text-cream">✦ Filmsera</div>
          <div className="flex flex-wrap gap-5">
            <Link href="/looks/">Look Lab</Link>
            <Link href="/vs/">Compare</Link>
            <Link href="/blog/">Journal</Link>
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href="/support.html">Support</a>
          </div>
          <div>© 2026 Filmsera</div>
        </div>
      </footer>
    </>
  );
}
