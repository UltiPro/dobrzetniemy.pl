import { area } from '../content/site'
import { POLAND_VIEWBOX, VOIVODESHIPS } from '../data/poland'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const served = new Set<string>(area.regions.map((r) => r.mapName))
// Draw served regions last so their accent outline sits on top of shared borders.
const regions = [...VOIVODESHIPS].sort(
  (a, b) => Number(served.has(a.name)) - Number(served.has(b.name)),
)

export function Area() {
  return (
    <section
      id="obszar"
      data-zone="pien"
      aria-labelledby="obszar-title"
      className="pb-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto grid max-w-content items-center gap-[clamp(2.25rem,6vw,5rem)] gutter md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="grid gap-5.5">
          <SectionHeading id="obszar-title" eyebrow={area.eyebrow} title={area.title} />
          <p className="max-w-[60ch] text-muted">{area.lede}</p>
          <ul className="grid">
            {area.regions.map((r) => (
              <li
                key={r.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3.5"
              >
                <b className="display text-[1.7rem] leading-none">{r.name}</b>
                <span className="text-[0.95rem] text-muted">{r.towns}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <svg
            viewBox={`-10 -10 ${POLAND_VIEWBOX.width + 20} ${POLAND_VIEWBOX.height + 20}`}
            className="h-auto w-full overflow-visible"
            role="img"
            aria-label="Mapa Polski z zaznaczonymi województwami warmińsko-mazurskim i podlaskim"
          >
            {regions.map((r) => {
              const on = served.has(r.name)
              return (
                <path
                  key={r.name}
                  d={r.d}
                  className={
                    on
                      ? 'fill-accent/22 stroke-accent stroke-[1.8] transition-[fill] duration-300 hover:fill-accent/36'
                      : 'fill-raise stroke-line stroke-[1.2]'
                  }
                >
                  <title>{r.name}</title>
                </path>
              )
            })}
            {area.towns.map((t) => (
              <g key={t.name} className="fill-fg">
                <circle cx={t.x} cy={t.y} r={4} />
                <text
                  x={t.anchor === 'middle' ? t.x : t.anchor === 'start' ? t.x + 9 : t.x - 9}
                  y={t.anchor === 'middle' ? t.y + 20 : t.y + 4.5}
                  textAnchor={t.anchor}
                  className="font-sans text-[13px] font-semibold"
                >
                  {t.name}
                </text>
              </g>
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
