import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { business, socials } from '../content/site'
import { PhoneIcon, WhatsAppIcon } from './ui/icons'

const whatsapp = socials.find((s) => s.id === 'whatsapp')

export function MobileCallBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-zone="korona"]')
    if (!hero) return
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting))
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-bg/92 pt-2.5 gutter pb-[max(0.625rem,env(safe-area-inset-bottom,0px))] backdrop-blur-md nav:hidden"
        >
          <a
            href={business.phone.href}
            className="flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-md bg-accent font-display text-lg font-bold tracking-[0.06em] text-bg uppercase no-underline"
          >
            <PhoneIcon className="size-5" />
            Zadzwoń
          </a>
          {whatsapp && (
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border-[1.5px] border-line px-4 font-display text-lg font-bold tracking-[0.06em] uppercase no-underline"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
