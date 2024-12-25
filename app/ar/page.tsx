import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300" dir="rtl">
      <Header isArabic={true} />
      <Hero isArabic={true} />
      <About isArabic={true} />
      <Skills isArabic={true} />
      <Projects isArabic={true} />
      <Contact isArabic={true} />
      <Footer isArabic={true} />
    </main>
  )
}

