import { AnimatePresence, motion, useReducedMotion, type Transition } from 'motion/react'
import { useEffect, useState } from 'react'
import { business, hero } from '../content/site'
import { CheckIcon, PhoneIcon } from './ui/icons'
import { Picture } from './ui/Picture'
import { ghostButton, primaryButton } from './ui/buttons'

const ease: Transition['ease'] = [0.2, 0.7, 0.1, 1]
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

// Distance from the content column to the viewport edge, so the photo can bleed past it.
const bleed = 'calc(-1 * max(2rem, (100vw - 1180px) / 2))'
const arcRadius = '999px 0 0 999px / 60% 0 0 60%'

export function Hero() {
  return (
    <section className="relative overflow-hidden" data-zone="korona" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-content items-center gap-10 pt-6 gutter pb-14 md:grid-cols-[1.05fr_0.95fr] md:pt-14 md:pb-18">
        <div className="relative z-10 grid justify-items-start gap-6">
          <motion.span className="eyebrow" {...fadeUp(0)}>
            {hero.eyebrow}
          </motion.span>

          <h1 id="hero-title" className="display text-hero">
            {(['Dobrze', 'tniemy'] as const).map((word, i) => (
              <span key={word} className="block overflow-hidden pr-[0.08em]">
                <motion.span
                  className={`inline-block ${i === 1 ? 'text-accent' : ''}`}
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="-mt-1.5 font-display text-[1.75rem] leading-tight font-bold text-accent italic"
            {...fadeUp(0.35)}
          >
            {business.tagline}
          </motion.p>

          <motion.ul className="grid gap-x-6 gap-y-2.5 xl:grid-cols-[auto_auto]" {...fadeUp(0.4)}>
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[1.02rem] font-medium">
                <CheckIcon className="size-5.5 flex-none text-accent" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div className="grid max-w-[60ch] gap-3" {...fadeUp(0.45)}>
            <p className="text-muted">{hero.lede}</p>
            <p className="font-medium text-soft">{hero.closing[0]}</p>
            <p className="font-display text-[1.3rem] leading-tight font-bold uppercase italic">
              {hero.closing[1]}
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3" {...fadeUp(0.55)}>
            <a href={business.phone.href} className={primaryButton}>
              <PhoneIcon />
              Zadzwoń: {business.phone.display}
            </a>
            <a href="#uslugi" className={ghostButton}>
              Zobacz usługi
            </a>
          </motion.div>
        </div>

        <div className="relative -order-1 -mr-[max(1rem,env(safe-area-inset-right,0px))] aspect-[4/4.2] max-w-screen md:order-0 md:mr-0 md:aspect-auto md:min-h-130 md:self-stretch">
          <motion.div
            className="absolute inset-0 overflow-hidden md:right-(--bleed)"
            style={{ borderRadius: arcRadius, ['--bleed' as string]: bleed }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            <Picture
              photo={hero.photo}
              alt={hero.photoAlt}
              sizes="(min-width: 48rem) 50vw, 100vw"
              priority
              className="size-full object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-bg/45 to-transparent to-40%" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-3.5 right-0 -left-3.5 border-2 border-r-0 border-accent md:right-(--bleed)"
            style={{ borderRadius: arcRadius, ['--bleed' as string]: bleed }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
          <SloganBadge slogans={hero.slogans} />
        </div>
      </div>
    </section>
  )
}

function SloganBadge({ slogans }: { slogans: readonly string[] }) {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || slogans.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % slogans.length), 4000)
    return () => clearInterval(id)
  }, [reduceMotion, slogans.length])

  return (
    // will-change stops the rotated text from flickering while the slogans swap.
    <motion.div
      aria-hidden="true"
      className="absolute bottom-4.5 left-2 z-10 rounded-lg bg-accent px-4.5 py-3.5 font-display text-[1.3rem] leading-[1.05] font-extrabold whitespace-pre-line text-bg uppercase italic shadow-[0_18px_40px_rgba(0,0,0,0.45)] will-change-transform md:bottom-8.5 md:-left-2 md:text-[1.6rem]"
      initial={{ opacity: 0, scale: 0.6, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: -4 }}
      transition={{ delay: 0.9, type: 'spring', stiffness: 260, damping: 14 }}
    >
      <div className="grid items-center overflow-hidden">
        {slogans.map((slogan) => (
          <span key={slogan} className="invisible [grid-area:1/1]">
            {slogan}
          </span>
        ))}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={active}
            className="[grid-area:1/1]"
            initial={{ opacity: 0, y: '60%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-60%' }}
            transition={{ duration: 0.3, ease }}
          >
            {slogans[active]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
