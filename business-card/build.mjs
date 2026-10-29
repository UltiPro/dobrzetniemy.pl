import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { dirname, extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import QRCode from 'qrcode'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const dist = join(here, 'dist')
const url = process.env.CARD_URL ?? 'https://dobrzetniemy.pl'

mkdirSync(dist, { recursive: true })

// No quiet zone here: the white box around the code on the card provides it.
const qr = await QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 0,
  color: { dark: '#0a0f0b', light: '#ffffff' },
})
writeFileSync(join(dist, 'qr.svg'), qr)

// Over HTTP: the card fetch()es its SVGs, which Chrome blocks on file:// pages.
const types = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}
const server = createServer((req, res) => {
  const path = normalize(join(repoRoot, decodeURIComponent(new URL(req.url, 'http://x').pathname)))
  if (!path.startsWith(repoRoot + sep) || !existsSync(path) || !statSync(path).isFile())
    return res.writeHead(404).end()
  res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' })
  res.end(readFileSync(path))
})
await new Promise((ok) => server.listen(0, '127.0.0.1', ok))
const page = `http://127.0.0.1:${server.address().port}/business-card/card.html`

const browser = findBrowser()
// Must be async: the browser fetches from the server running in this same process.
const run = (args) =>
  promisify(execFile)(
    browser,
    ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=6000', ...args],
    { timeout: 60_000 },
  )

try {
  await run([
    '--no-pdf-header-footer',
    `--print-to-pdf=${join(dist, 'wizytowka-dobrzetniemy.pdf')}`,
    page,
  ])
  await run([
    '--force-device-scale-factor=4',
    '--window-size=786,250',
    `--screenshot=${join(dist, 'preview.png')}`,
    `${page}?preview`,
  ])
  await run([
    '--window-size=1200,630',
    `--screenshot=${join(repoRoot, 'site/public/og-image.jpg')}`,
    `${page}?og`,
  ])
  console.log(`QR -> ${url}`)
  console.log(
    'Wrote dist/wizytowka-dobrzetniemy.pdf, dist/preview.png and site/public/og-image.jpg',
  )
} finally {
  server.close()
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean)
  const found = candidates.find((p) => existsSync(p))
  if (!found) throw new Error('No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.')
  return found
}
