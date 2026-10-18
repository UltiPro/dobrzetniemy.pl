import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

// Driven by the data-zone="korona" | "pien" | "korzen" attributes on the page sections.
const zones = [
  { id: 'korona', label: 'Korona' },
  { id: 'pien', label: 'Pień' },
  { id: 'korzen', label: 'Korzeń' },
] as const

export function HeightGauge() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  const dotTop = useTransform(progress, (v) => `${v * 100}%`)
  const [active, setActive] = useState<string>('korona')

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-zone]')]
    const update = () => {
      let current = 'korona'
      for (const s of sections)
        if (s.getBoundingClientRect().top < window.innerHeight * 0.5) current = s.dataset.zone!
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-[max(18px,env(safe-area-inset-right,0px))] z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative mr-1.25 h-[46vh] w-0.5 bg-line">
        <motion.div
          className="absolute inset-0 origin-top bg-accent"
          style={{ scaleY: progress }}
        />
        <motion.div
          className="absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(140,198,63,0.2)]"
          style={{ top: dotTop }}
        />
      </div>
      <div className="absolute top-0 right-4.5 flex h-[46vh] flex-col items-end justify-between">
        {zones.map((zone, i) => (
          <span
            key={zone.id}
            className={`font-display text-[0.78rem] font-bold tracking-[0.2em] uppercase transition-[color,opacity] duration-300 ${
              i === zones.length - 1 ? 'translate-y-1/2' : '-translate-y-1/2'
            } ${active === zone.id ? 'text-accent opacity-100' : 'text-muted opacity-55'}`}
          >
            {zone.label}
          </span>
        ))}
      </div>
    </div>
  )
}
