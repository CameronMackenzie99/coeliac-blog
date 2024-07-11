import React from 'react'

// import serialize from './serialize'
import { Serialize } from './serialise'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return <div>{Serialize(content.root)}</div>
}

export default RichText
