# Brand assets

Vector logo of Dobrze Tniemy. Colours are set directly in each file, so the SVGs also work in print and office software.

| File                 | Use                                                                      |
| -------------------- | ------------------------------------------------------------------------ |
| `logo-white.svg`     | On dark backgrounds (the site, the card front)                           |
| `logo-black.svg`     | On light backgrounds, documents, single-colour print                     |
| `logo-disc.svg`      | White logo on a dark disc: social avatars, app icons                     |
| `logo-disc-1024.png` | Raster of the above for platforms that need PNG (Facebook, Google)       |
| `icon-small.svg`     | Simplified "DT" mark for 16–48 px favicons, where the roots turn to mush |

## Colours

| Token  | Hex       | Role                                            |
| ------ | --------- | ----------------------------------------------- |
| bg     | `#0a0f0b` | Forest near-black, page background              |
| raise  | `#111a13` | Raised surfaces, cards                          |
| line   | `#233226` | Hairlines and borders                           |
| fg     | `#eef1e8` | Main text                                       |
| muted  | `#9dab9e` | Secondary text                                  |
| accent | `#8cc63f` | Lime green from the banner: highlights, buttons |
| wood   | `#d8b27b` | Sapwood tone for small labels                   |

The site defines these in `site/src/index.css` (`@theme`). For print, the lime is roughly C50 M0 Y100 K0; ask the print shop for a proof, since screen lime is brighter than CMYK can reproduce.

## Type

- **Barlow Condensed** (700–800 italic, uppercase) for headlines, matching the banner.
- **Barlow** (400–600) for body text.

Both are open-source (SIL OFL) and self-hosted through `@fontsource`.
