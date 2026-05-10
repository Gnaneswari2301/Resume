import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolioData'

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-fade">
      <div className="section-container max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Industry exposure through cloud internship training"
          description="Hands-on learning in AWS services, infrastructure patterns, and deployment fundamentals."
        />
        <div className="space-y-6">
          {experience.map((item) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                    <BriefcaseBusiness size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-300">{item.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-purple-300/30 px-3 py-1 text-xs text-purple-200">
                  {item.duration}
                </span>
              </div>
              <p className="mt-4 text-slate-300">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
