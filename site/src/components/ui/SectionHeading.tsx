import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: readonly [string, string] | readonly string[]
  id?: string
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, id, children }: SectionHeadingProps) {
  const [first, second] = title
  return (
    <div className="grid gap-4.5">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="display text-section">
        {first} <span className="text-accent">{second}</span>
      </h2>
      {children}
    </div>
  )
}
