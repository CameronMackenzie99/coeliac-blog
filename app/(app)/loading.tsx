import { ContentSkeleton } from './_components/Skeleton/content'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="px-4">
      <ContentSkeleton />
    </div>
  )
}
