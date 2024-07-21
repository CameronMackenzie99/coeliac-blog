import { AdminBar } from './_components/AdminBar'
import Footer from './_components/Footer'
import { Header } from './_components/Header'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
export const metadata = {
  title: 'Coeliac Ducky',
  description: 'Coeliac friendly reviews and recipes!',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </head>
      <body className="bg-slate-50">
        <AdminBar />
        <div className="px-4 min-w-full prose prose-slate prose-sm md:prose-xl font-serif">
          <section className="min-h-dvh">
            <Header />
            {children}
          </section>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
