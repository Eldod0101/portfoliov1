'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Youtube, Github, Twitter, Instagram } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', url: '#' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', hoverColor: 'hover:bg-blue-800', url: '#' },
  { name: 'YouTube', icon: Youtube, color: 'bg-red-600', hoverColor: 'hover:bg-red-700', url: '#' },
  { name: 'GitHub', icon: Github, color: 'bg-gray-800', hoverColor: 'hover:bg-gray-900', url: '#' },
  { name: 'Twitter', icon: Twitter, color: 'bg-blue-400', hoverColor: 'hover:bg-blue-500', url: '#' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', url: '#' },
]

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full ${social.color} ${social.hoverColor} transition-colors duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon size={24} color="white" />
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </div>
  )
}

