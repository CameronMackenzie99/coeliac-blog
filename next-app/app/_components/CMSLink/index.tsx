import React from 'react'
import Link from 'next/link'

import { Place } from '../../../payload-types'
import { Button } from '../Button'

export type CMSLinkType = {
  type?: 'custom' | 'reference'
  url?: string
  newTab?: boolean
  reference?: {
    value: string | Place
    relationTo: 'places'
  }
  label?: string
  appearance?: 'default' | 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `/${reference.value.slug === 'home' ? '' : reference.value.slug}`
      : url

  if (!appearance) {
    const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

    if (type === 'custom') {
      return (
        <a href={url} {...newTabProps} className={className}>
          {label && label}
          {children && children}
        </a>
      )
    }

    if (href) {
      return (
        <Link href={href} {...newTabProps} className={className} prefetch={false}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  const buttonProps = {
    newTab,
    href,
    appearance,
    label,
  }

  return <Button className={className} {...buttonProps} el="link" />
}
