import type { Metadata } from 'next'
import { AppLayout } from '@components/AppLayout'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react';
import '@styles/globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://franfdezmorales.com'),
  title: {
    default: 'Francisco Fernández',
    template: '%s | Francisco Fernández',
  },
  description: 'Desarrollador y creador',
  openGraph: {
    title: 'Francisco Fernandez',
    description: 'Desarrollador y creador.',
    url: 'https://franfdezmorales.com',
    siteName: 'Francisco Fernández',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Francisco Fernández',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es" className={GeistSans.className}>
      <body>
        <AppLayout>
          {children}
        </AppLayout>
        <Analytics />
      </body>
    </html>
  )
}
