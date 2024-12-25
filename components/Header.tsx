'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ isArabic = false }) {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{isArabic ? 'مطور الويب' : 'FS Dev'}</h1>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mr-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent`}>
              <ul className="flex flex-col md:flex-row md:space-x-4 items-center p-4 md:p-0">
                <li><a href="#about" className="block py-2 md:py-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{isArabic ? 'عني' : 'About'}</a></li>
                <li><a href="#skills" className="block py-2 md:py-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{isArabic ? 'المهارات' : 'Skills'}</a></li>
                <li><a href="#projects" className="block py-2 md:py-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{isArabic ? 'المشاريع' : 'Projects'}</a></li>
                <li><a href="#contact" className="block py-2 md:py-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{isArabic ? 'اتصل بي' : 'Contact'}</a></li>
              </ul>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 ml-4"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

