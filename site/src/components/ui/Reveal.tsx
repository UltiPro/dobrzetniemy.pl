import { motion, type HTMLMotionProps } from 'motion/react'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  as?: 'div' | 'li' | 'figure' | 'article'
}

export function Reveal({ delay = 0, as = 'div', children, ...props }: RevealProps) {
  const Component = motion[as] as typeof motion.div
  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.1, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}
