import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from './client-layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus',
  description: 'Where connections ignite innovations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />;
      </body>
    </html>
  )
}