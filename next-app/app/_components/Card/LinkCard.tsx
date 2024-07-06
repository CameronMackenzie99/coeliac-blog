import clsx from 'clsx'
import Link from 'next/link'
import { TagColours } from '../../_utils/utils'

type LinkCardProps = {
  href: string
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

export function LinkCard({ href, shadowColour, children }: LinkCardProps): React.ReactElement {
  return (
    <div
      className={clsx(
        'border hover:border-2 border-slate-600 hover:bg-slate-100 hover:cursor-pointer',
        shadowColours[shadowColour],
        shadowHoverColours[shadowColour],
      )}
    >
      <Link href={href}>
        <div className="p-4">{children}</div>
      </Link>
    </div>
  )
}
