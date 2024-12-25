'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Code, Server, Palette } from 'lucide-react'

export default function Hero({ isArabic = false }) {
  const Arrow = isArabic ? ArrowLeft : ArrowRight

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isArabic ? 'مطور ويب شامل' : 'Full-stack Developer'}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {isArabic ? 'أصمم وأطور تجارب ويب جميلة وعملية' : 'Crafting beautiful and functional web experiences'}
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Code size={48} className="text-blue-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Server size={48} className="text-green-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Palette size={48} className="text-purple-500" />
          </motion.div>
        </motion.div>
        <motion.a
          href="#contact"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {isArabic ? 'تواصل معي' : 'Get in touch'} <Arrow className={isArabic ? "mr-2" : "ml-2"} size={20} />
        </motion.a>
      </div>
    </section>
  )
}

