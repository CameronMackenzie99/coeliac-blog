export function formatDate(dateString: string | null | undefined): string | undefined {
  if (!dateString) {
    return
  }
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(dateString))
}
const tagColours = ['blue', 'green', 'yellow'] as const
export type TagColours = (typeof tagColours)[number]

export function pickColour(input: string) {
  const idx = input.length % 3

  return tagColours[idx]
}
