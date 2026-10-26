import { reviews } from '../content/site'
import { ghostButton } from './ui/buttons'
import { ArrowIcon, StarIcon } from './ui/icons'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

function Stars({ className = '' }: { className?: string }) {
  return (
    <span role="img" aria-label="Ocena 5 na 5" className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className="size-5" />
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <section
      id="opinie"
      data-zone="pien"
      aria-labelledby="opinie-title"
      className="border-y border-line bg-raise py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto max-w-content gutter">
        <Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)] grid items-end gap-x-12 gap-y-6 md:grid-cols-2">
          <SectionHeading id="opinie-title" eyebrow={reviews.eyebrow} title={reviews.title} />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:justify-end">
            <p className="flex items-center gap-3">
              <span className="font-display text-[2.8rem] leading-none font-black italic">
                {reviews.rating}
              </span>
              <span className="grid gap-1">
                <Stars className="text-accent" />
                <span className="text-[0.9rem] text-muted">Średnia ocen w {reviews.source}</span>
              </span>
            </p>
            <a
              href={reviews.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ghostButton}
            >
              Wszystkie opinie
              <ArrowIcon />
            </a>
          </div>
        </Reveal>

        <ul className="flex snap-x snap-mandatory scroll-px-4 scrollbar-brand gap-4 overflow-x-auto overflow-y-hidden pb-4 max-md:-mx-4 max-md:px-4 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
          {reviews.items.map((review, i) => (
            <Reveal
              as="li"
              key={review.author}
              delay={i * 0.08}
              className="w-[85%] max-w-sm flex-none snap-start md:w-auto md:max-w-none"
            >
              <figure className="flex h-full flex-col gap-4 rounded-[10px] border border-line bg-bg p-6 sm:p-7">
                <Stars className="text-accent" />
                <blockquote className="flex-1 text-soft">„{review.text}”</blockquote>
                <figcaption className="font-display text-lg leading-tight font-bold tracking-[0.04em] uppercase">
                  {review.author}
                  <span className="block text-[0.8rem] font-semibold tracking-[0.14em] text-muted">
                    Opinia z {reviews.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
