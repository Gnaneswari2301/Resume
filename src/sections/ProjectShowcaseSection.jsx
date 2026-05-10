import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Brain, Code2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { project } from '../data/portfolioData'

function ProjectShowcaseSection() {
  return (
    <section id="projects" className="section-shell section-fade">
      <div className="section-container max-w-6xl">
        <SectionHeading
          eyebrow="Case Study"
          title={`${project.name}: ${project.type}`}
          description="A recruiter-ready case study demonstrating applied AI integration and full stack delivery."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel group rounded-3xl p-8 transition duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-white">{project.overview}</h3>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>
                  <span className="font-semibold text-cyan-300">Problem: </span>
                  {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-cyan-300">Solution: </span>
                  {project.solution}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-300/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  <Code2 size={16} />
                  View Repository
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  <ArrowUpRight size={16} />
                  Live Preview
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5">
              <div className="mb-5 flex items-center gap-2 text-cyan-300">
                <BarChart3 size={18} />
                <h4 className="font-semibold">Project Snapshot</h4>
              </div>
              <div className="space-y-3">
                {project.impact.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 transition"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
                <p className="flex items-center gap-2 font-semibold">
                  <Brain size={16} />
                  AI Enablement
                </p>
                <p className="mt-2 text-cyan-100/90">
                  Gemini API integration powers contextual responses for frequent student support scenarios.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default ProjectShowcaseSection
