import { services } from '../content/site'
import { CheckIcon } from './ui/icons'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Stamp } from './ui/Stamp'

export function Services() {
  return (
    <section
      id="uslugi"
      data-zone="pien"
      aria-labelledby="uslugi-title"
      className="py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto max-w-content gutter">
        <Reveal className="mb-[clamp(2.25rem,5vw,3.5rem)] grid items-end gap-x-12 gap-y-4.5 md:grid-cols-2">
          <SectionHeading id="uslugi-title" eyebrow={services.eyebrow} title={services.title} />
          <p className="max-w-[60ch] text-muted">{services.lede}</p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.categories.map((category, i) => (
            <Reveal
              as="article"
              key={category.id}
              delay={i * 0.08}
              className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-raise"
              aria-labelledby={`kat-${category.id}`}
            >
              <div className="group relative aspect-16/10 overflow-hidden lg:aspect-[4/3.4]">
                <Picture
                  photo={category.photo}
                  alt={category.photoAlt}
                  style={{ objectPosition: category.photoPosition }}
                  sizes="(min-width: 64rem) 33vw, 100vw"
                  className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent from-40% to-raise" />
                {category.slogan && (
                  <Stamp rotate={i % 2 ? 2 : -3} className="top-4 left-4">
                    {category.slogan}
                  </Stamp>
                )}
                <div className="absolute inset-x-0 bottom-0 grid gap-1 px-6 pb-4">
                  <span className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
                    {category.lead}
                  </span>
                  <h3 id={`kat-${category.id}`} className="display text-[2.4rem]">
                    {category.title}
                  </h3>
                </div>
              </div>
              <ul className="grid flex-1 content-start px-6 pt-2 pb-4">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3.5 gap-y-1 border-t border-line py-4 first:border-t-0"
                  >
                    <CheckIcon className="size-6 text-accent" />
                    <h4 className="font-display text-[1.3rem] leading-tight font-bold tracking-[0.02em] uppercase">
                      {service.name}
                    </h4>
                    <p className="col-start-2 text-[0.97rem] text-muted">{service.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
