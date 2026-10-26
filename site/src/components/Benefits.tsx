import { benefits } from '../content/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Benefits() {
  return (
    <section
      id="dlaczego-my"
      data-zone="pien"
      aria-labelledby="dlaczego-my-title"
      className="py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto max-w-content gutter">
        <Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)]">
          <SectionHeading
            id="dlaczego-my-title"
            eyebrow={benefits.eyebrow}
            title={benefits.title}
          />
        </Reveal>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 0.08}
              className="grid content-start gap-3 rounded-[10px] border border-line bg-raise p-6 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2.6rem] leading-none font-black text-accent italic"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[1.5rem] leading-tight font-bold tracking-[0.02em] uppercase">
                {item.title}
              </h3>
              <p className="text-[0.97rem] text-muted">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
