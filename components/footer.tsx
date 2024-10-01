'use client'

import Link from 'next/link'
import { Instagram, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white py-8 mt-auto">
      <div className="container mx-auto text-center">
        <p>Nexus, where connections ignite innovations</p>

        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://www.kings.edu.hk" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="text-[#ffa500] border-[#ffa500] hover:bg-[#ffa500] hover:text-[#0a192f]">
              <Globe className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/kc.nexus" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="text-[#ffa500] border-[#ffa500] hover:bg-[#ffa500] hover:text-[#0a192f]">
              <Instagram className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-400">
  Designed with ❤️ by{' '}
  <a href="https://mdesk.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
    mdesk.tech
  </a>
</p>
      </div>
    </footer>
  )
}