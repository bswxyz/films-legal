#!/usr/bin/env bash
# Deploy Next.js static export into the GitHub Pages root (DNS unchanged).
# Preserves legal HTML, blog/, journal-src/, looks/, vs/, guides/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/site"
npm run build
cp -f out/index.html "$ROOT/index.html"
rsync -a --delete out/_next/ "$ROOT/_next/"
echo "Deployed homepage + _next → $ROOT"
echo "Commit and push to publish on getfilmsera.cam"
