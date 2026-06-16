# Films — marketing site + legal pages (GitHub Pages)

Public site for the **Films** iOS app: a marketing landing page plus the Privacy Policy,
Terms of Use, and Support pages. Hosted free on GitHub Pages.

**Live:** https://biswaskhatiwada.github.io/films-legal/

| File | Purpose |
|---|---|
| `index.html` | Marketing landing page (hero, the App Store ad panels, features, FAQ, waitlist) |
| `privacy.html` | Privacy Policy (GDPR + US/CCPA, retention, complaints) |
| `terms.html` | Terms of Use / EULA (subscriptions, content, acceptable use, DMCA/IP) |
| `support.html` | Support / FAQ + account deletion + contact |
| `shots/` | App Store ad panels (`panel-1..8.png`) + clean app-screen crops (`screen-*.png`) |

The app's paywall links to `terms.html` and `privacy.html` here (see
`Camera/UI/PaywallView.swift`).

## ⚠️ Before you launch — required edits

1. **Replace the support email.** Every page uses the placeholder
   **`support@example.com`**. Swap it for a real inbox you check (a reviewer or user may email
   it). One pass replaces them all:
   ```sh
   # from the repo root, on macOS:
   LC_ALL=C grep -rl 'support@example.com' . | xargs sed -i '' 's/support@example.com/YOUR_REAL_EMAIL/g'
   ```
2. **Wire the waitlist (optional).** The "Notify me" form currently confirms client-side and
   stores nothing. To collect emails, set `WAITLIST_URL` in `index.html` to a real endpoint
   (e.g. Formspree, or a Convex HTTP action like the SPARK site uses).
3. **Have the legal pages reviewed.** These are solid drafts, not legal advice — have a
   professional review them, and confirm the governing-law/jurisdiction and age (13+) match your
   final plan before relying on them.

## When you have a custom domain
Point the domain at this repo (Settings → Pages → Custom domain), **or** change the two URLs in
`Camera/UI/PaywallView.swift` to the new domain. No new app build review is needed just to change
the legal URLs in App Store Connect metadata.

## Updating the screenshots
The images in `shots/` are generated from the App Store kit in the app repo
(`AppStore/exports/shot-1..8.png`). Re-crop the clean screens with the helper used to build this
site (phone geometry comes from `AppStore/build.py`).
