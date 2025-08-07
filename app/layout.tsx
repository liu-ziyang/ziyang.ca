import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ziyang.ca',
  description: 'Personal website and portfolio of Ziyang Liu, software engineer.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon-light.png',
      }, {
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon-dark.png',
      },
    ],
    apple: {
      media: '(prefers-color-scheme: light)',
      url: '/icon.png',
      href: '/icon-light.png',
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} color-scheme="light dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
