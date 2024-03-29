import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ziyang.ca',
  description: 'Generated by create next app',
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
