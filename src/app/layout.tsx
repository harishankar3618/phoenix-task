import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Phoenix Business Advisory',
  description: 'Global business migration experts'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
