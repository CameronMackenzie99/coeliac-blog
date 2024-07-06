import clsx from 'clsx'
import Link from 'next/link'

type CardProps = {
  href?: string
  shadowColour: keyof typeof shadowColours
  children: React.ReactNode
}

const shadowColours = {
  yellow: `shadow-[5px_5px_0_0_rgba(252,211,77,0.8)]`,
  blue: `shadow-[5px_5px_0_0_rgba(165,243,252,0.8)]`,
  green: `shadow-[5px_5px_0_0_rgba(187,247,208,0.8)]`,
} as const

const shadowHoverColours = {
  yellow: `hover:shadow-[5px_5px_0_0_rgba(252,211,77,1)]`,
  blue: `hover:shadow-[5px_5px_0_0_rgba(165,243,252,1)]`,
  green: `hover:shadow-[5px_5px_0_0_rgba(187,247,208,1)]`,
} as const

export function Card({ href, shadowColour, children }: CardProps): React.ReactElement {
  return (
    <div
      className={clsx(
        'border  border-slate-600 rounded-sm',
        shadowColours[shadowColour],
        shadowHoverColours[shadowColour],
        href ? 'hover:border-2 hover:bg-slate-100 hover:cursor-pointer' : '',
      )}
    >
      {href ? (
        <Link href={href}>
          <div className="p-4">{children}</div>
        </Link>
      ) : (
        <div className="p-4">{children}</div>
      )}
    </div>
  )
}
