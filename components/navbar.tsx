import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#0a192f]/70 backdrop-blur-md p-4 shadow-lg rounded-lg mx-4 w-11/12 lg:w-10/12 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center">
          <img
            src="/nexus-logo.png"
            alt="Nexus Logo"
            className="w-12 h-12 mr-2 object-contain"
            style={{ backgroundColor: 'transparent' }}
          />
          <span className="text-[#ffa500] font-bold text-xl">Nexus</span>
        </Link>

        <div className="flex space-x-4 items-center">
          <Link href="/" className={`text-sm font-medium ${pathname === '/' ? 'text-[#ffa500] font-bold' : 'text-gray-200 hover:text-[#ffa500]'}`}>
            Home
          </Link>
          <Link href="/linktree" className={`text-sm font-medium ${pathname === '/linktree' ? 'text-[#ffa500] font-bold' : 'text-gray-200 hover:text-[#ffa500]'}`}>
            LinkTree
          </Link>
        </div>
      </div>
    </nav>
  )
}