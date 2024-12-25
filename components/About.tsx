'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About({ isArabic = false }) {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isArabic ? 'عني' : 'About Me'}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt={isArabic ? "صورة الملف الشخصي" : "Profile picture"}
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {isArabic
                ? 'أنا مطور ويب شامل شغوف بتصميم وإنشاء تجارب مستخدم سلسة. مع خبرة في تقنيات الواجهة الأمامية والخلفية، أقوم بتحويل الأفكار إلى واقع من خلال كود نظيف وفعال وقابل للتوسع.'
                : "I'm a passionate Full-stack Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in both front-end and back-end technologies, I bring ideas to life through clean, efficient, and scalable code."}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {isArabic
                ? 'بدأت رحلتي في تطوير الويب منذ 5 سنوات، ومنذ ذلك الحين، كان لدي الفرصة للعمل على مجموعة واسعة من المشاريع، من مواقع الأعمال الصغيرة إلى تطبيقات المؤسسات الكبيرة. أنا دائمًا متحمس لمواجهة تحديات جديدة وتعلم تقنيات جديدة.'
                : "My journey in web development started 5 years ago, and since then, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale enterprise applications. I'm always excited to take on new challenges and learn new technologies."}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {isArabic
                ? 'عندما لا أكون منهمكًا في البرمجة، يمكنك أن تجدني أستكشف تقنيات جديدة، أساهم في مشاريع مفتوحة المصدر، أو أستمتع بفنجان قهوة جيد أثناء حل المشكلات المعقدة.'
                : "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while solving complex problems."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

