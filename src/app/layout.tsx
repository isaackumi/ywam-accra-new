import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/data/content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap'
})

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: 'LANGUAGE WATCH Foundation (LWF)' }],
  creator: 'LANGUAGE WATCH Foundation (LWF)',
  publisher: 'LANGUAGE WATCH Foundation (LWF)',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://languagewatchfoundation.org',
    siteName: siteContent.meta.title,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteContent.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#e7a906" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background font-sans antialiased">
          {children}
        </div>
      </body>
    </html>
  )
}
