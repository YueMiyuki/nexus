'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const links = [
  { title: "Nexus 主頁", url: "/" },
  // { title: "Proposal", url: "" },
  { title: "Instagram", url: "https://www.instagram.com/kc.nexus" },
  { title: "學校網站", url: "https://www.kings.edu.hk" },
]

{/* https://docs.google.com/document/d/12ZZGUAhGSJhOcTFUzPa2D-c6Vf0Obx64jOI5mv1YD7g/edit?usp=sharing" */}
// Temporary remove proposal

export default function LinkTree() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <motion.h1
        className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nexus Links
      </motion.h1>

      <motion.div
        className="space-y-6 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={link.url} className="w-full block">
              <Button
                variant="secondary"
                className="w-full text-lg py-6 rounded-full bg-[#222B45] text-white hover:bg-[#33415c] transition-all duration-300"
              >
                {link.title}
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}