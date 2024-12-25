'use client'

import { motion } from 'framer-motion'
import { Code, Server, Database, Palette, Globe, Terminal, Cloud, Shield } from 'lucide-react'

const skills = [
  { 
    name: { en: 'Front-end', ar: 'الواجهة الأمامية' }, 
    icon: Code, 
    color: 'text-blue-500',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'] 
  },
  { 
    name: { en: 'Back-end', ar: 'الواجهة الخلفية' }, 
    icon: Server, 
    color: 'text-green-500',
    items: ['Node.js', 'Express', 'Python', 'Django', 'Ruby on Rails', 'Java Spring'] 
  },
  { 
    name: { en: 'Database', ar: 'قواعد البيانات' }, 
    icon: Database, 
    color: 'text-yellow-500',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase'] 
  },
  { 
    name: { en: 'Design', ar: 'التصميم' }, 
    icon: Palette, 
    color: 'text-purple-500',
    items: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX', 'Responsive Design', 'Wireframing'] 
  },
  { 
    name: { en: 'DevOps', ar: 'عمليات التطوير' }, 
    icon: Cloud, 
    color: 'text-indigo-500',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Google Cloud', 'Azure'] 
  },
  { 
    name: { en: 'Tools', ar: 'الأدوات' }, 
    icon: Terminal, 
    color: 'text-red-500',
    items: ['Git', 'Webpack', 'Babel', 'Jest', 'Cypress', 'Postman'] 
  },
  { 
    name: { en: 'API', ar: 'واجهات برمجة التطبيقات' }, 
    icon: Globe, 
    color: 'text-teal-500',
    items: ['RESTful APIs', 'GraphQL', 'WebSockets', 'OAuth', 'JWT', 'Swagger'] 
  },
  { 
    name: { en: 'Security', ar: 'الأمان' }, 
    icon: Shield, 
    color: 'text-orange-500',
    items: ['OWASP', 'SSL/TLS', 'Auth0', 'Penetration Testing', 'Encryption', 'GDPR'] 
  },
]

export default function Skills({ isArabic = false }) {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isArabic ? 'مهاراتي' : 'My Expertise'}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name.en}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <skill.icon className={`w-8 h-8 ${skill.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{isArabic ? skill.name.ar : skill.name.en}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item} 
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 + itemIndex * 0.05 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

