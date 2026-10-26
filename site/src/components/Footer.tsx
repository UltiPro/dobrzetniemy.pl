import logo from '../assets/brand/logo-white.svg'
import { addressLine, business } from '../content/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      data-zone="korzen"
      className="border-t border-line bg-bg pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] max-nav:pb-28"
    >
      <div className="mx-auto grid max-w-content items-center gap-x-10 gap-y-6 gutter sm:grid-cols-[auto_minmax(0,1fr)_auto]">
        <img src={logo} alt="Logo Dobrze Tniemy" width={88} height={88} className="size-22" />
        <p className="text-[0.95rem] text-muted">
          <b className="font-semibold text-fg">{business.legalName}</b>
          <br />
          {addressLine}
          <br />
          NIP: {business.nip} · © {year} {business.brand}
        </p>
        <p className="font-display text-2xl leading-[1.05] font-extrabold uppercase italic sm:text-right">
          Zero ściemy,
          <br />
          <span className="text-accent">dobrze tniemy</span>
        </p>
      </div>
    </footer>
  )
}
