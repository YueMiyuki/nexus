'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const sections = [
  {
    header: "ECA 活動部",
    text: "學業對我們英皇仔固然重要, 但我閣認為同學們應該要更加注重全方位的發展, 因此課外活動必不可缺; 我閣希望能令同學們的校園生活更加多姿多彩和擴闊外界視野, 讓同學們在課餘時間外能放鬆一下, 同時也能拓展交際圈; 此外, 課外活動的好處多不勝數, 例如能培養責任心和發展自身天賦的好機會, 因此我閣將會精心設計一些適合同學們參加的課外活動, 希望同學們能踴躍參加, 在紅磚牆内留下精彩的回憶。"
  },
  {
    header: "Education 教育部",
    text: "學生會除了舉辦各式各樣的活動, 讓學生從繁重的學業裏抽身和體驗與眾不同的校園生活, 還會秉承我校優良的教育傳統, 為學生提供與各學科相關的學術活動。"
  },
  {
    header: "Welfare 福利部",
    text: "我閣已與多家餐廳達成合作, 為同學們提供各類美食的折扣, 並將繼續拓展合作範圍, 滿足不同需求。同時, 我閣爭取更多商店優惠, 協助同學節省購物開支; 我們正與多間補習社合作, 提供各科輔導和學術支援, 並推出優惠協助同學。"
  }
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [typingCompleted, setTypingCompleted] = useState(false)
  // const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <motion.section className="relative min-h-screen snap-start flex flex-col pt-20 items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" strokeDasharray="1 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.3))' }}
          animate={{
            x: (mousePosition.x - windowSize.width / 2) * 0.02,
            y: (mousePosition.y - windowSize.height / 2) * 0.02,
          }}
        >
          <Image
            src="/nexus-logo.png"
            alt="Nexus Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 inline-flex"
            initial={{ opacity: 0, color: 'white' }}
            animate={{ opacity: 1, color: typingCompleted ? '#00FF00' : 'white' }}
            transition={{ opacity: { duration: 1 }, color: { duration: 1.2 } }}
          >
            {Array.from('Nexus').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                onAnimationComplete={
                  i === 'Nexus'.length - 1 ? () => setTypingCompleted(true) : undefined
                }
              >
                {char}
              </motion.span>
            ))}
            {!typingCompleted ? (
              <motion.span
                className="blinking-cursor"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                |
              </motion.span>
            ) : null}
          </motion.h1>
          <motion.p
            className="glowing-text text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={typingCompleted ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1 }}
            onAnimationComplete={() => setButtonVisible(true)}
          >
            Where connections ignite innovations
          </motion.p>
          <motion.button
            onClick={scrollToNext}
            className="relative px-8 py-4 bg-black text-white font-bold text-lg rounded-full overflow-hidden"
            style={{
              boxShadow: '0 4px 6px rgba(255, 165, 0, 0.1), 0 1px 3px rgba(255, 165, 0, 0.08)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={buttonVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(45deg, #ffa500, #ff4500)', opacity: 0.5 }}
              variants={{
                hover: { opacity: 0.8 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 z-10"
              style={{ borderRadius: '9999px', background: 'linear-gradient(45deg, #ffa500, #ff4500) border-box' }}
            />
            <span className="relative z-20">Discover More</span>
          </motion.button>

        </motion.div>
      </motion.section>
      <motion.section
        ref={scrollRef}
        className="min-h-screen snap-start flex flex-col items-center justify-center px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#ffa500]">我們的使命</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl text-center">
          在Nexus, 我們相信學生主導創新的力量. 我們的使命是創造一個充滿活力的協作環境, 讓想法蓬勃發展, 並轉化為有影響力的倡議。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            { title: '創新', description: '培養創造力文化' },
            { title: '協作', description: '匯聚學生共同解決挑戰' },
            { title: '轉變', description: '實施有影響的想法' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg text-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#ffa500]">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen shrink-0 snap-start flex flex-col items-center justify-center px-4 py-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffa500]">{section.header}</h2>
          <p className="text-lg md:text-xl max-w-3xl text-center">{section.text}</p>
        </motion.section>
      ))}
      <motion.section
        className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-[#ffa500]">合作内閣名單</h2>
        <a href="https://docs.google.com/document/d/1-Uuc_lpVBpBE6XBw9MM0U4YlE4MJG_kAeJLwA6OVU3Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> 
        
  <motion.button
    className="relative px-8 py-4 bg-[#ffa500] text-[#0a192f] font-bold text-lg rounded-full overflow-hidden"
    style={{ boxShadow: '0 4px 6px rgba(255, 165, 0, 0.1), 0 1px 3px rgba(255, 165, 0, 0.08)' }}
  >
    Jump ►
  </motion.button>
</a>
      </motion.section>
      <motion.section
        className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900 via-red-500 to-yellow-300"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          您的每一票都對我們至關重要
        </motion.h2>
        <motion.p
          className="text-xl text-white mb-8 text-center drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          請各位英皇仔給予我們機會，投下信任票
        </motion.p>
      </motion.section>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#ffa500] text-[#0a192f] p-2 rounded-full hover:bg-[#ff8c00] transition-colors"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </button>
      </div>
    </div>
  )
}