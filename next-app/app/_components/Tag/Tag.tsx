import clsx from 'clsx'
import { TagColours, pickColour } from '../../_utils/utils'

export function Tag({ tag }: { tag: string }) {
  const colourMap: Record<TagColours, string> = {
    blue: 'bg-cyan-200',
    green: 'bg-green-200',
    yellow: 'bg-amber-300',
  }

  const tagColour = pickColour(tag)

  return (
    <div>
      <button className={clsx('px-2 py-0.5 rounded-xl', colourMap[tagColour])}>
        <span className="no-underline">{tag}</span>
      </button>
    </div>
  )
}
