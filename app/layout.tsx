import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
import Navbar from './ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stew',
  description: 'An app for experimenting with sounds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
