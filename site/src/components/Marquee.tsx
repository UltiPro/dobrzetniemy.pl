import { marquee } from '../content/site'
import { CheckIcon } from './ui/icons'

export function Marquee() {
  const list = (hidden: boolean) => (
    <ul className="flex gap-11 px-5.5 py-4.5" aria-hidden={hidden || undefined}>
      {marquee.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 font-display text-[1.6rem] font-extrabold whitespace-nowrap uppercase italic"
        >
          <CheckIcon className="size-6.5 flex-none text-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="group overflow-hidden border-y border-line bg-raise" aria-label="Zakres usług">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {list(false)}
        {list(true)}
      </div>
    </div>
  )
}
