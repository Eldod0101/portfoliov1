'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: { en: 'E-commerce Platform', ar: 'منصة التجارة الإلكترونية' },
    description: { 
      en: 'A full-stack e-commerce solution with real-time inventory management.',
      ar: 'حل متكامل للتجارة الإلكترونية مع إدارة المخزون في الوقت الفعلي.'
    },
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: { en: 'Task Management App', ar: 'تطبيق إدارة المهام' },
    description: { 
      en: 'A collaborative task management tool with real-time updates.',
      ar: 'أداة تعاونية لإدارة المهام مع تحديثات في الوقت الفعلي.'
    },
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: { en: 'Weather Dashboard', ar: 'لوحة معلومات الطقس' },
    description: { 
      en: 'A responsive weather dashboard with location-based forecasts.',
      ar: 'لوحة معلومات الطقس متجاوبة مع توقعات مبنية على الموقع.'
    },
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Vue.js', 'Express', 'OpenWeatherMap API'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects({ isArabic = false }) {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isArabic ? 'مشاريعي' : 'My Projects'}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title.en}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={project.image} alt={isArabic ? project.title.ar : project.title.en} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{isArabic ? project.title.ar : project.title.en}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{isArabic ? project.description.ar : project.description.en}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="mr-1" /> {isArabic ? 'عرض حي' : 'Live Demo'}
                  </motion.a>
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} className="mr-1" /> {isArabic ? 'كود المصدر' : 'Source Code'}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

