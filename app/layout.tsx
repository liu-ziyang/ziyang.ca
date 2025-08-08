import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ziyang.ca',
  description: 'Personal website and portfolio of Ziyang Liu, software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='black'><line x1='18' y1='18' x2='46' y2='18' stroke='currentColor' stroke-width='4' stroke-linecap='round'/><line x1='18' y1='46' x2='46' y2='18' stroke='currentColor' stroke-width='4' stroke-linecap='round'/><circle cx='46' cy='46' r='4' fill='currentColor'/></svg>`}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
