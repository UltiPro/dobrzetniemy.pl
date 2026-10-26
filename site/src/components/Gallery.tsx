import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { gallery, services, type CategoryId, type GalleryItem } from '../content/site'
import { getVideo } from '../lib/media'
import { Lightbox } from './Lightbox'
import { ghostButton } from './ui/buttons'
import { PauseIcon, PlayIcon } from './ui/icons'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Stamp } from './ui/Stamp'

type Filter = 'all' | CategoryId
type PhotoItem = Extract<GalleryItem, { kind: 'photo' }>

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Wszystkie' },
  ...services.categories.map((c) => ({ id: c.id, label: c.title })),
]
const PAGE_SIZE = 9

const categoryLabel = Object.fromEntries(services.categories.map((c) => [c.id, c.title]))

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [limit, setLimit] = useState(PAGE_SIZE)

  const items = gallery.items.filter((item) => filter === 'all' || item.category === filter)
  const photos = items.filter((item): item is PhotoItem => item.kind === 'photo')
  const visible = items.slice(0, limit)
  const hidden = items.length - visible.length

  return (
    <section
      id="realizacje"
      data-zone="pien"
      aria-labelledby="realizacje-title"
      className="border-y border-line bg-raise py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto max-w-content gutter">
        <Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)] grid items-end gap-x-12 gap-y-6 md:grid-cols-2">
          <SectionHeading id="realizacje-title" eyebrow={gallery.eyebrow} title={gallery.title} />
          <div
            className="flex flex-wrap gap-2 md:justify-end"
            role="group"
            aria-label="Filtruj realizacje"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => {
                  setFilter(f.id)
                  setLimit(PAGE_SIZE)
                }}
                className="min-h-10 rounded-full border-[1.5px] border-line px-4 font-display text-base font-bold tracking-[0.08em] text-muted uppercase transition-colors hover:border-muted hover:text-fg aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-bg"
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
        >
          {visible.map((item) => {
            const key = item.kind === 'photo' ? item.photo : `video-${item.video}`
            return (
              <figure
                key={key}
                className="group relative aspect-4/5 overflow-hidden rounded-lg bg-bg"
              >
                {item.kind === 'photo' ? (
                  <button
                    type="button"
                    className="block size-full cursor-zoom-in"
                    onClick={() => setOpenIndex(photos.indexOf(item))}
                    aria-label={`Powiększ: ${item.caption}`}
                  >
                    <Picture
                      photo={item.photo}
                      alt={item.alt}
                      style={{ objectPosition: item.position }}
                      sizes="(min-width: 64rem) 380px, 50vw"
                      className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                    />
                  </button>
                ) : (
                  <GalleryVideo video={item.video} label={item.caption} />
                )}
                {item.kind === 'photo' && item.slogan && (
                  <Stamp size="sm" rotate={-3} className="top-3 left-3 max-sm:hidden">
                    {item.slogan}
                  </Stamp>
                )}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-bg/90 to-transparent px-3 pt-9 pb-3 text-[0.9rem] font-medium sm:px-4 sm:text-[0.95rem]">
                  <span>{item.caption}</span>
                  <span className="hidden font-display text-[0.75rem] font-bold tracking-[0.16em] whitespace-nowrap text-accent uppercase sm:inline">
                    {categoryLabel[item.category]}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </motion.div>

        {hidden > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setLimit((l) => l + PAGE_SIZE)}
              className={ghostButton}
            >
              Pokaż więcej ({hidden})
            </button>
          </div>
        )}
      </div>

      <Lightbox
        items={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  )
}

function GalleryVideo({ video, label }: { video: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  const { src, poster } = getVideo(video)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !paused) el.play().catch(() => {})
      else el.pause()
    })
    io.observe(el)
    return () => io.disconnect()
  }, [paused])

  return (
    <div className="relative size-full">
      <video
        ref={ref}
        src={src}
        poster={poster.src}
        width={poster.w}
        height={poster.h}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="size-full object-cover"
      />
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-bg/75 py-1.5 pr-3 pl-2 text-[0.8rem] font-semibold tracking-wide backdrop-blur-sm"
        aria-label={paused ? `Odtwórz wideo: ${label}` : `Zatrzymaj wideo: ${label}`}
      >
        {paused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
        Wideo
      </button>
    </div>
  )
}
