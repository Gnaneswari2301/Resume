import { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ProjectShowcaseSection from './sections/ProjectShowcaseSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1250)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05040c] text-slate-100">
      {isLoading && <PageLoader />}
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-cyan-500 px-3 py-2 text-sm text-black focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectShowcaseSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
