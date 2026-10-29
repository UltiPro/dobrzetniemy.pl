# Business card

Two-sided card, **90 × 50 mm trim** with **2 mm bleed**. Text and the QR code stay at least 4 mm inside the trim. The design is in `card.html`, and `build.mjs` renders it with Chrome or Edge (or the browser set in `CHROME_PATH`):

```sh
npm ci
npm run build
```

Output in `dist/`: `wizytowka-dobrzetniemy.pdf` (page 1 front, page 2 back), `preview.png`, and `qr.svg` (links to `https://dobrzetniemy.pl`, override with `CARD_URL`). The build also renders the front as the site's link preview, `site/public/og-image.jpg`.

## Before printing

- The PDF is RGB and the lime prints duller in CMYK: order a proof first.
- Scan the QR code on the proof.
- If the print shop's template differs (e.g. 1.5 mm bleed or crop marks), adjust `--bleed` and `@page` in `card.html`.
