import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import logo from '../assets/brand/logo-white.svg'
import { business, nav } from '../content/site'
import { CloseIcon, MenuIcon, PhoneIcon } from './ui/icons'
import { primaryButton } from './ui/buttons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const closeOnDesktop = () => window.innerWidth >= 960 && setOpen(false)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [open])

  return (
    <header
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 border-b bg-bg/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex min-h-18 max-w-content items-center gap-6 gutter">
        <a
          href="#top"
          className="mr-auto flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="" width={44} height={44} className="size-11" />
          <span className="font-display text-2xl leading-none font-extrabold whitespace-nowrap uppercase italic">
            Dobrze <span className="text-accent">Tniemy</span>
          </span>
        </a>

        <nav aria-label="Główna" className="hidden nav:block">
          <ul className="flex gap-5 xl:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-lg font-semibold tracking-[0.06em] whitespace-nowrap text-muted uppercase no-underline transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={business.phone.href}
          className={`${primaryButton} min-h-11 px-4 text-lg whitespace-nowrap max-nav:hidden`}
        >
          <PhoneIcon />
          {business.phone.display}
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md border-[1.5px] border-line text-fg nav:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-5.5" /> : <MenuIcon className="size-5.5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu"
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem-env(safe-area-inset-top,0px))] overflow-y-auto border-b border-line bg-bg pt-4 gutter pb-[max(2rem,env(safe-area-inset-bottom,0px))] nav:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="grid">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="border-b border-line"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 display text-4xl no-underline"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={business.phone.href} className={`${primaryButton} mt-8 w-full justify-center`}>
              <PhoneIcon />
              Zadzwoń: {business.phone.display}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
