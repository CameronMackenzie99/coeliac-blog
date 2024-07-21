import { AdminBar } from './_components/AdminBar'
import Footer from './_components/Footer'
import { Header } from './_components/Header'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </head>
      <body>
        <AdminBar />
        <div className="prose prose-slate prose-sm font-serif">
          <section className="h-dvh">
            <Header />
            {children}
            <Footer />
          </section>
        </div>
      </body>
    </html>
  )
}
