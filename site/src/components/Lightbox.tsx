import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { PhotoKey } from '../lib/media'
import { ChevronIcon, CloseIcon } from './ui/icons'
import { Picture } from './ui/Picture'

type LightboxItem = { photo: PhotoKey; alt: string; caption: string }

type LightboxProps = {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

const control =
  'absolute grid size-12 place-items-center rounded-full border-[1.5px] border-line bg-bg/75 text-fg backdrop-blur-sm transition-colors hover:border-accent hover:text-accent [&>svg]:size-5.5'

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const open = index !== null && items[index] !== undefined
  const item = open ? items[index] : null

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  const step = (delta: number) => {
    if (index === null) return
    onIndexChange((index + delta + items.length) % items.length)
  }

  return (
    <dialog
      ref={dialog}
      aria-label="Podgląd zdjęcia"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') step(-1)
        if (e.key === 'ArrowRight') step(1)
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none bg-transparent p-0 text-fg backdrop:bg-[#050806]/95"
    >
      {item && (
        <div
          className="grid size-full grid-rows-[minmax(0,1fr)_auto] place-items-center gap-4 px-[max(1rem,env(safe-area-inset-left,0px))] pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.photo}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex size-full items-center justify-center"
            >
              <Picture
                photo={item.photo}
                alt={item.alt}
                sizes="100vw"
                className="max-h-full max-w-[min(1200px,100%)] rounded-md object-contain"
              />
            </motion.div>
          </AnimatePresence>
          <p className="text-center text-muted">
            {item.caption}
            <span className="ml-3 font-display tracking-widest tabular-nums">
              {index! + 1} / {items.length}
            </span>
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={onClose}
        aria-label="Zamknij"
        className={`${control} top-[max(0.875rem,env(safe-area-inset-top,0px))] right-[max(1rem,env(safe-area-inset-right,0px))]`}
      >
        <CloseIcon />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Poprzednie zdjęcie"
            className={`${control} top-1/2 left-[max(1rem,env(safe-area-inset-left,0px))] hidden -translate-y-1/2 sm:grid`}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Następne zdjęcie"
            className={`${control} top-1/2 right-[max(1rem,env(safe-area-inset-right,0px))] hidden -translate-y-1/2 sm:grid`}
          >
            <ChevronIcon />
          </button>
        </>
      )}
    </dialog>
  )
}
