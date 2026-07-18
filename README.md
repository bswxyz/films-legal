# Filmsera — marketing site + legal pages

Public site for **Filmsera** (group film camera on the [App Store](https://apps.apple.com/us/app/filmsera-group-film-camera/id6781880091)): marketing, Look Lab, vs comparisons, Journal CTAs, Privacy / Terms / Support. Hosted on GitHub Pages; **DNS / custom-domain setup unchanged**.

**Live:** https://getfilmsera.cam/

| Path | Purpose |
|---|---|
| `index.html` | App Store marketing landing (hero, Looks, Reveal, Recap, FAQ, CTAs) |
| `looks/` | **Look Lab** — browse film Looks |
| `vs/` | Honest comparisons (Once, POV, Scene, Dazz, …) |
| `guides/` | Printable Host checklists (e.g. wedding guest photo plan) |
| `blog/` | **The Journal** — static editorial posts + CTAs → App Store |
| `journal-src/` | Journal authoring (`posts.py`, `content/`, `build.py`) — not served |
| `site/` | **Next.js source** for the marketing landing; export feeds the root static site |
| `privacy.html` / `terms.html` / `support.html` | Legal + support |
| `shots/` | App Store badges, panels, screen crops |

## The Journal

`/blog/` is generated locally from `journal-src/`:

```sh
python3 journal-src/build.py   # writes blog/index.html, blog/<slug>.html, blog/art/<slug>.svg
```

Add a post: prepend/append in `journal-src/posts.py`, drop `journal-src/content/<slug>.html`, rerun `build.py`.

## Product notes

- `docs/PRODUCT-APP-CLIP-GAP.md` — competitors lead with no-download / App Clip guest join; Filmsera QR still requires iPhone install. Roadmap only — do not market as available.

## Before you launch — required edits

1. **Support email** — replace placeholder `support@getfilmsera.cam` if needed.
2. **Legal review** — drafts, not legal advice.
3. **Waitlist** (optional) — wire `WAITLIST_URL` if collecting emails.

## Custom domain / DNS

Paths stay the same; only the host changes. GitHub Pages DNS / CNAME workflow is unchanged — see the domain checklist historically documented below and in the app repo’s `AppStore/DOMAIN_SETUP.md`.

**Absolute URLs to update on a host swap:** `index.html` og:image, `journal-src/build.py` → `BASE` (then rerun `build.py`), in-app paywall / invite base, App Store Connect marketing URLs.
