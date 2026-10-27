import { about } from '../content/site'
import { CheckIcon } from './ui/icons'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Stamp } from './ui/Stamp'

export function About() {
  return (
    <section
      id="o-nas"
      data-zone="pien"
      aria-labelledby="o-nas-title"
      className="py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto grid max-w-content items-start gap-[clamp(2.25rem,6vw,5rem)] gutter md:grid-cols-2">
        <Reveal as="figure" className="relative md:sticky md:top-28">
          <Stamp rotate={2} className="top-4 right-4">
            {about.slogan}
          </Stamp>
          <Picture
            photo={about.photo}
            alt={about.photoAlt}
            style={{ objectPosition: about.photoPosition }}
            sizes="(min-width: 48rem) 50vw, 100vw"
            className="aspect-4/5 w-full rounded-[10px] object-cover md:max-h-[calc(100svh-11rem)]"
          />
          <figcaption className="mt-3 text-[0.9rem] text-muted">{about.photoCaption}</figcaption>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-5.5">
          <SectionHeading id="o-nas-title" eyebrow={about.eyebrow} title={about.title} />
          {about.paragraphs.map((p) => (
            <p key={p} className="max-w-[58ch] text-muted first-of-type:text-soft">
              {p}
            </p>
          ))}
          <p className="font-display text-[1.3rem] font-bold text-accent uppercase italic">
            {about.teamNote}
          </p>
          <div className="mt-2 border-t border-line pt-5.5">
            <h3 className="mb-4 font-display text-[0.9rem] font-bold tracking-[0.2em] text-wood uppercase">
              {about.gearTitle}
            </h3>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {about.gear.map((g) => (
                <li key={g} className="flex items-center gap-3 font-medium">
                  <CheckIcon className="size-5.5 flex-none text-accent" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
