import { motion } from 'motion/react'

type StampProps = {
  children: string
  size?: 'sm' | 'md'
  rotate?: number
  className?: string
}

export function Stamp({ children, size = 'md', rotate = -3, className = '' }: StampProps) {
  return (
    <motion.p
      className={`pointer-events-none absolute z-10 rounded-md bg-accent font-display leading-[1.05] font-extrabold whitespace-pre-line text-bg uppercase italic shadow-[0_12px_28px_rgba(0,0,0,0.4)] ${
        size === 'sm'
          ? 'px-2.5 py-1.5 text-[0.9rem] lg:px-3 lg:py-2 lg:text-[1.05rem]'
          : 'px-3.5 py-2.5 text-[1.15rem]'
      } ${className}`}
      initial={{ opacity: 0, scale: 0.7, rotate }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 16 }}
    >
      {children}
    </motion.p>
  )
}
