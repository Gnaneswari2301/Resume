import { motion } from 'framer-motion'
import { achievements } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell section-fade">
      <div className="section-container max-w-5xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Leadership, execution, and communication impact"
          description="Beyond code, demonstrated ownership in student tech-community initiatives."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
