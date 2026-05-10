import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell section-fade">
      <div className="section-container max-w-5xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning across software and cloud"
          description="Continuous upskilling through structured training and platform certifications."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4 }}
              className="glass-panel flex items-center gap-3 rounded-xl p-4"
            >
              <span className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                <Award size={16} />
              </span>
              <p className="text-sm text-slate-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
