'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'  
import Footer from '@/components/footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showFooter, setShowFooter] = useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      setShowFooter(isBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()  
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}