'use client'

import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons'

export default function Footer({ isArabic = false }) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {isArabic ? 'عن المطور' : 'About Developer'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {isArabic
                ? 'مطور ويب شامل متخصص في إنشاء تجارب رقمية استثنائية باستخدام أحدث التقنيات.'
                : 'A full-stack web developer specializing in creating exceptional digital experiences using cutting-edge technologies.'}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                  >
                    {isArabic ? translateToArabic(item) : item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {isArabic ? 'تابعني' : 'Follow Me'}
            </h3>
            <SocialIcons />
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            {isArabic
              ? '© 2023 مطور الويب الشامل. جميع الحقوق محفوظة.'
              : '© 2023 Full-stack Developer. All rights reserved.'}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function translateToArabic(word: string): string {
  const translations: { [key: string]: string } = {
    'About': 'عني',
    'Skills': 'المهارات',
    'Projects': 'المشاريع',
    'Contact': 'اتصل بي'
  }
  return translations[word] || word
}

