import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { promisify } from 'node:util'
import QRCode from 'qrcode'

const here = dirname(fileURLToPath(import.meta.url))
const dist = join(here, 'dist')
const url = process.env.BANNER_URL ?? 'https://dobrzetniemy.pl'

mkdirSync(dist, { recursive: true })

// No quiet zone here: the white box around the code on the banner provides it.
const qr = await QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 0,
  color: { dark: '#0a0f0b', light: '#ffffff' },
})
writeFileSync(join(dist, 'qr.svg'), qr)

const browser = findBrowser()
const run = (args) =>
  promisify(execFile)(
    browser,
    ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=6000', ...args],
    { timeout: 120_000 },
  )

const page = pathToFileURL(join(here, 'banner.html')).href
await run([
  '--no-pdf-header-footer',
  `--print-to-pdf=${join(dist, 'baner-3x1m-dobrzetniemy.pdf')}`,
  `${page}?print`,
])
await run([
  '--window-size=1640,624',
  `--screenshot=${join(dist, 'facebook-cover.png')}`,
  `${page}?fb`,
])
await run([
  '--force-device-scale-factor=2',
  '--window-size=1560,560',
  `--screenshot=${join(dist, 'preview.png')}`,
  `${page}?preview`,
])
console.log(`QR -> ${url}`)
console.log('Wrote the PDF, Facebook cover and preview to dist/')

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
