import { useState, type ComponentType, type SVGProps } from 'react'
import contactBg from '../assets/photos/zrebka-tekstura.jpg?w=1200&format=webp'
import { addressLine, business, contact, socials, type SocialId } from '../content/site'
import {
  ArrowIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from './ui/icons'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const socialIcons: Record<SocialId, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
}

const visibleSocials = socials.filter((s) => !('hidden' in s && s.hidden))

const columnTitle = 'mb-1 font-display text-[0.9rem] font-bold tracking-[0.2em] text-wood uppercase'

export function Contact() {
  return (
    <section
      id="kontakt"
      data-zone="korzen"
      aria-labelledby="kontakt-title"
      className="relative isolate overflow-hidden border-t border-line py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, var(--color-bg) 0%, rgb(10 15 11 / 0.9) 45%, rgb(10 15 11 / 0.82)), url(${contactBg})`,
        }}
      />
      <div className="mx-auto grid max-w-content items-start gap-[clamp(2.25rem,6vw,5rem)] gutter md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <SectionHeading id="kontakt-title" eyebrow={contact.eyebrow} title={contact.title} />
          <a
            href={business.phone.href}
            className="mt-6.5 mb-2 block font-display text-[clamp(3rem,13vw,6.6rem)] leading-[0.95] font-black tracking-[0.01em] italic tabular-nums no-underline transition-colors hover:text-accent"
          >
            {business.phone.display}
          </a>
          <p className="max-w-[60ch] text-muted">{contact.lede}</p>

          <dl className="mt-7 grid border-b border-line">
            <ContactRow icon={PhoneIcon} label="Telefon" value={business.phone.display} copy />
            <ContactRow
              icon={MailIcon}
              label="E-mail"
              value={business.email}
              href={`mailto:${business.email}`}
              copy
            />
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-3">
          <h3 className={columnTitle}>{contact.socialsTitle}</h3>
          {visibleSocials.map((s) => {
            const Icon = socialIcons[s.id]
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[10px] border border-line bg-raise/85 px-5 py-4.5 no-underline transition duration-200 hover:translate-x-1 hover:border-accent"
              >
                <Icon className="size-7 flex-none" />
                <span className="min-w-0">
                  <b className="block font-display text-[1.3rem] leading-tight font-bold tracking-[0.04em] uppercase">
                    {s.label}
                  </b>
                  <small className="text-[0.9rem] text-muted">{s.note}</small>
                </span>
                <ArrowIcon className="ml-auto size-5 flex-none text-muted transition-colors group-hover:text-accent" />
              </a>
            )
          })}

          <h3 className={`mt-7 ${columnTitle}`}>{contact.placeTitle}</h3>
          <dl className="grid border-b border-line">
            <ContactRow icon={PinIcon} label="Siedziba" value={addressLine} />
            <ContactRow icon={MapIcon} label="Obszar" value={business.area} />
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

type ContactRowProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href?: string
  copy?: boolean
}

function ContactRow({ icon: Icon, label, value, href, copy }: ContactRowProps) {
  const [user, domain] = value.split('@')
  const text = domain ? (
    <>
      {user}@<wbr />
      {domain}
    </>
  ) : (
    value
  )
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-t border-line py-4">
      <Icon className="size-6 text-accent" />
      <div>
        <dt className="font-display text-[0.82rem] font-bold tracking-[0.18em] text-muted uppercase">
          {label}
        </dt>
        <dd className="text-[1.08rem] font-medium wrap-anywhere">
          {href ? (
            <a
              href={href}
              className="underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              {text}
            </a>
          ) : (
            text
          )}
        </dd>
      </div>
      {copy ? <CopyButton value={value} label={label} /> : <span />}
    </div>
  )
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('done')
    } catch {
      setState('failed')
    }
    setTimeout(() => setState('idle'), 1800)
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Kopiuj: ${label}`}
      className={`min-h-9.5 rounded-md border-[1.5px] px-3.5 font-display text-[0.92rem] font-bold tracking-[0.08em] uppercase transition-colors ${
        state === 'done'
          ? 'border-accent bg-accent text-bg'
          : 'border-line text-fg hover:border-accent hover:text-accent'
      }`}
    >
      <span aria-live="polite">
        {state === 'done' ? 'Skopiowano' : state === 'failed' ? 'Zaznacz ręcznie' : 'Kopiuj'}
      </span>
    </button>
  )
}
