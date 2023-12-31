import Header from '@/components/Header'
import PromptInput from '@/components/PromptInput'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientProvider from '@/components/ClientProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Art Gallery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = 'bg-bgray'>

        <ClientProvider>

          <Header />
        
          <PromptInput />

          {children}

        </ClientProvider>

        
      </body>
    </html>
  )
}
