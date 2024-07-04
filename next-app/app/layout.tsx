import { AdminBar } from './_components/AdminBar'
import { Header } from './_components/Header'

import './app.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <AdminBar />
        <Header />
        {children}
      </body>
    </html>
  )
}
