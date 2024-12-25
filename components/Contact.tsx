'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import SocialIcons from './SocialIcons'

export default function Contact({ isArabic = false }) {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isArabic ? 'تواصل معي' : 'Get in Touch'}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{isArabic ? 'معلومات الاتصال' : 'Contact Information'}</h3>
              <motion.a
                href="mailto:abdalrhman0mahmoud1@gmail.com"
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-800 dark:text-gray-200">abdalrhman0mahmoud1@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+00201067680836"
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-800 dark:text-gray-200">+00201067680836</span>
              </motion.a>
              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-800 dark:text-gray-200">{isArabic ? 'سان فرانسيسكو، كاليفورنيا' : 'San Francisco, CA'}</span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{isArabic ? 'تابعني على' : 'Follow me on'}</h4>
                <SocialIcons />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{isArabic ? 'أرسل رسالة' : 'Send a Message'}</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">{isArabic ? 'الاسم' : 'Name'}</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">{isArabic ? 'الرسالة' : 'Message'}</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white" required></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

