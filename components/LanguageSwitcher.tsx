'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleLanguage = () => {
    if (!isClient) return
    const currentPath = window.location.pathname

    // Check if the current path starts with /ar
    let newPath
    if (currentPath.startsWith('/ar')) {
      // Remove /ar from the beginning
      newPath = currentPath.replace(/^\/ar/, '') || '/'
    } else {
      // Add /ar to the beginning
      newPath = `/ar${currentPath === '/' ? '' : currentPath}`
    }

    // Push the new path to the router
    router.push(newPath)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isClient && window.location.pathname.startsWith('/ar') ? 'English' : 'العربية'}
    </motion.button>
  )
}
