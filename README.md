# Dobrze Tniemy

![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?logo=tailwindcss&logoColor=38BDF8)
![Motion](https://img.shields.io/badge/Motion-111111?logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)

One-page website and business card for **Dobrze Tniemy** (Usługi Pilarskie i Leśne Damian Treder), a tree-felling and forestry service in the Warmia-Masuria and Podlaskie regions of Poland.

**Live:** https://dobrzetniemy.pl

## Tech

- **Website:** React 19, TypeScript, Vite, Tailwind CSS v4 and Motion. Static site: no backend, no cookies, no third-party requests.
- **Tooling:** oxlint, Prettier.
- **Hosting:** GitHub Pages, deployed by GitHub Actions when `site/` changes on `main`.
- **Business card:** HTML/CSS printed to PDF with headless Chrome/Edge, QR code generated with `qrcode`.

## Structure

- **`site/`**: the website.
- **`business-card/`**: the printed business card.
- **`brand/`**: the logo, colours and fonts.

## License

All rights reserved, see [LICENSE](LICENSE).
