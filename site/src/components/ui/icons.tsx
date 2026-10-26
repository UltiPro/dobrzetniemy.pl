import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = { 'aria-hidden': true, focusable: false } as const

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" {...base} {...props}>
      <rect x="2.5" y="6.5" width="17" height="17" rx="3.5" strokeWidth="2.4" />
      <path d="M7 14.5l4.5 4.5L25 4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...base}
      {...props}
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 6.5l9 6.5 9-6.5" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...base}
      {...props}
    >
      <path d="M12 21.5s-7-6.1-7-11.5a7 7 0 0 1 14 0c0 5.4-7 11.5-7 11.5z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.45 1.5-1.45h1.6V4.47A21 21 0 0 0 14.3 4.3c-2.3 0-3.85 1.4-3.85 3.97v2.23H7.8v3h2.65V21z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...base}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5a6 6 0 0 0 2.9 2.5c.2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .5-.2 1.1-.6 1.4-.5.4-1.4.7-2.6.3a9 9 0 0 1-5-4.4c-.6-1.1-.5-2.4.3-3.3z"
      />
    </svg>
  )
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...base}
      {...props}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

export function ChevronIcon({
  direction = 'right',
  ...props
}: IconProps & { direction?: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...base}
      {...props}
    >
      <path d={direction === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...base}
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...base}
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M8 5.5v13l10.5-6.5z" />
    </svg>
  )
}

export function PauseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
    </svg>
  )
}

export function MapIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...base}
      {...props}
    >
      <path d="M3 6.5l6-2.5 6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5zM9 4v13.5M15 6.5V20" />
    </svg>
  )
}
