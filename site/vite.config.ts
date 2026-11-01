import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build, defineConfig, type Plugin } from 'vite'
import { imagetools } from 'vite-imagetools'

const basePath = normalizeBase(process.env.BASE_PATH ?? '/')
const siteUrl = (process.env.SITE_URL ?? 'http://localhost:5173').replace(/\/+$/, '') + '/'

function normalizeBase(base: string) {
  return ('/' + base + '/').replace(/\/{2,}/g, '/')
}

function siteFiles(): Plugin {
  return {
    name: 'site-files',
    enforce: 'post',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (index?.type === 'asset') {
        this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })
      }
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url><loc>${siteUrl}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>\n` +
          '</urlset>\n',
      })
    },
  }
}

// Renders the app into the built HTML, so crawlers that don't run JavaScript see the content too.
function prerender(): Plugin {
  return {
    name: 'prerender',
    apply: (_, env) => env.command === 'build' && !env.isSsrBuild,
    async writeBundle({ dir }) {
      await build({ logLevel: 'warn', build: { ssr: 'src/entry-server.tsx', outDir: 'dist-ssr' } })
      const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
      const app = render()
      for (const file of ['index.html', '404.html']) {
        const path = resolve(dir!, file)
        const html = readFileSync(path, 'utf8')
        if (!html.includes('<div id="root"></div>')) throw new Error(`No empty #root in ${file}`)
        writeFileSync(
          path,
          html.replace('<div id="root"></div>', () => `<div id="root">${app}</div>`),
        )
      }
    },
  }
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), imagetools({ removeMetadata: true }), siteFiles(), prerender()],
  build: {
    assetsInlineLimit: 0,
  },
})
