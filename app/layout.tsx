import './globals.scss'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import Navbar from './components/common/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio Guillermo Riedel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <body className={inter.className +"font-body"} >
      <Navbar/>
        {children}</body>
    </html>
  )
}
