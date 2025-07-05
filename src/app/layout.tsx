import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fun Learning - Reading & Math for Kids',
  description: 'Educational app for kids to learn reading and math through fun interactive flashcards and games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
