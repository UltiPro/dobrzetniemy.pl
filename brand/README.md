# Brand assets

Vector logo of Dobrze Tniemy. Colours are set directly in each file, so the SVGs also work in print and office software.

| File                 | Use                                                                |
| -------------------- | ------------------------------------------------------------------ |
| `logo-white.svg`     | On dark backgrounds (the site, the card front)                     |
| `logo-black.svg`     | On light backgrounds, documents, single-colour print               |
| `logo-disc.svg`      | White logo on a dark disc: social avatars, app icons               |
| `logo-disc-1024.png` | Raster of the above for platforms that need PNG (Facebook, Google) |
| `icon-small.svg`     | Simplified "DT" mark for small favicons (16–48 px)                 |

## Colours

| Token  | Hex       | Role                                                |
| ------ | --------- | --------------------------------------------------- |
| bg     | `#0a0f0b` | Forest near-black, page background                  |
| raise  | `#111a13` | Raised surfaces, cards                              |
| line   | `#233226` | Hairlines and borders                               |
| fg     | `#eef1e8` | Main text                                           |
| soft   | `#c9d2c7` | Between main and secondary text: quotes, lead lines |
| muted  | `#9dab9e` | Secondary text                                      |
| accent | `#8cc63f` | Brand lime: highlights, buttons                     |
| wood   | `#d8b27b` | Sapwood tone for small labels                       |

The site defines these in `site/src/index.css` (`@theme`). For print, the lime is roughly C50 M0 Y100 K0. Ask the print shop for a proof, since screen lime is brighter than CMYK can reproduce.

## Type

- **Barlow Condensed** (bold, uppercase) for headlines, labels and buttons. Headlines are italic.
- **Barlow** (400–600) for body text.

Both are open-source (SIL OFL) and self-hosted through `@fontsource`.
