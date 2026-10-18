import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
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

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), imagetools({ removeMetadata: true }), siteFiles()],
  build: {
    assetsInlineLimit: 0,
  },
})
