export type Picture = {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

const photoModules = import.meta.glob<Picture>('../assets/photos/*.jpg', {
  query: { w: '480;800;1200;1600;2000', format: 'avif;webp', quality: '76', as: 'picture' },
  import: 'default',
  eager: true,
})

const videoModules = import.meta.glob<string>('../assets/video/*.mp4', {
  query: '?url',
  import: 'default',
  eager: true,
})

type Poster = { src: string; w: number; h: number }

const posterModules = import.meta.glob<Poster>('../assets/video/*-poster.jpg', {
  query: { format: 'webp', as: 'img' },
  import: 'default',
  eager: true,
})

const keyOf = (path: string) =>
  path
    .split('/')
    .pop()!
    .replace(/\.[^.]+$/, '')

const photos = Object.fromEntries(
  Object.entries(photoModules).map(([path, picture]) => [keyOf(path), picture]),
)
const videos = Object.fromEntries(
  Object.entries(videoModules).map(([path, src]) => {
    const key = keyOf(path)
    const poster = posterModules[path.replace(/\.mp4$/, '-poster.jpg')]
    if (!poster) throw new Error(`Missing poster for ${path} (expected ${key}-poster.jpg)`)
    return [key, { src, poster }]
  }),
)

export type PhotoKey = string
export type VideoKey = string

export function getPhoto(key: PhotoKey): Picture {
  const picture = photos[key]
  if (!picture) throw new Error(`Missing photo "${key}" in src/assets/photos`)
  return picture
}

// A photo wider than its object-cover frame renders wider than the frame. Scale `sizes` by this,
// or the browser picks a file too small for it.
export function coverScale(key: PhotoKey, frameAspect: number) {
  const { w, h } = getPhoto(key).img
  return Math.max(1, w / h / frameAspect)
}

export function getVideo(key: VideoKey): { src: string; poster: Poster } {
  const video = videos[key]
  if (!video) throw new Error(`Missing video "${key}" in src/assets/video`)
  return video
}
