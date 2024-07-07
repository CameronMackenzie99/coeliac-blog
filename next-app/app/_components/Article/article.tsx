export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-8">
      <article className="sm:w-2/3 mx-auto">{children}</article>
    </div>
  )
}
