import React from 'react'

import classes from './index.module.scss'
import { Place } from '../../../payload-types'
import { Serialize } from './serialise'
import serialize from './serialize'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return (
    <div className={[classes.richText, className].filter(Boolean).join(' ')}>
      {serialize(content)}
    </div>
  )
}

export default RichText
