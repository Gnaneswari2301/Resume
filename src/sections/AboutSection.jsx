import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { about, personalInfo } from '../data/portfolioData'
import { fadeInUp, mediumTransition } from '../utils/motion'

function AboutSection() {
  return (
    <section id="about" className="section-shell section-fade">
      <div className="section-container max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title={`Building with purpose, led by ${personalInfo.name}`}
          description="A focused engineering profile crafted for product teams, internships, and growth-stage environments."
        />
        <motion.div
          {...fadeInUp}
          transition={mediumTransition}
          className="glass-panel rounded-3xl p-8 text-slate-300 shadow-[0_0_50px_rgba(56,189,248,0.08)]"
        >
          <p className="text-base leading-relaxed md:text-lg">{about}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
