import { AdminBar } from './_components/AdminBar'
import { Header } from './_components/Header'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="prose-sm font-serif">
        <AdminBar />
        <section className="mx-8 flex flex-col gap-4 h-dvh">
          <Header />
          {children}
        </section>
      </body>
    </html>
  )
}
