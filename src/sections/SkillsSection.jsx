import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolioData'
import { fadeInUp, fastTransition } from '../utils/motion'

function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-fade">
      <div className="section-container max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical capability mapped to product delivery"
          description="A recruiter-friendly view of my core engineering strengths across development, data, and cloud."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <motion.article
              key={group.category}
              {...fadeInUp}
              transition={{ ...fastTransition, delay: groupIndex * 0.06 }}
              className="glass-panel rounded-2xl p-6 shadow-[0_0_40px_rgba(14,165,233,0.08)] transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <p className="mt-2 text-sm text-slate-400">{group.description}</p>
              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{item.name}</span>
                      <span className="text-cyan-300">{item.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
