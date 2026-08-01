import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Hotel Sky Palace | Luxury Rooms',
  description:
    'Hotel Sky Palace offers spacious Deluxe AC Rooms with premium comfort. Single occupancy Rs. 2,000, double occupancy Rs. 2,500 per night. Book your stay today.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/images/logo.png' }],
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Hotel Sky Palace | Luxury Rooms',
    description:
      'Spacious Deluxe AC Rooms with premium comfort. Single Rs. 2,000 / Double Rs. 2,500 per night.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b2a38',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${archivo.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
