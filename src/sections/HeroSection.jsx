import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Bot, CloudCog, Code2, Download, Sparkles } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, SocialLink } from '../components/SocialIcons'
import { personalInfo } from '../data/portfolioData'

const floatingIcons = [
  { Icon: Code2, className: 'left-[6%] top-20' },
  { Icon: CloudCog, className: 'right-[8%] top-28' },
  { Icon: Bot, className: 'left-[12%] bottom-14' },
  { Icon: Sparkles, className: 'right-[15%] bottom-20' },
]

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const reducedMotionRole = personalInfo.typingRoles[0]

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const role = personalInfo.typingRoles[roleIndex % personalInfo.typingRoles.length]
    const speed = isDeleting ? 50 : 90

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === role) {
        setTimeout(() => setIsDeleting(true), 900)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => prev + 1)
      } else {
        setText((prev) =>
          isDeleting ? role.slice(0, Math.max(prev.length - 1, 0)) : role.slice(0, prev.length + 1),
        )
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [isDeleting, roleIndex, text, prefersReducedMotion])

  return (
    <section id="home" className="section-shell relative min-h-screen section-fade pt-16 md:pt-20">
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`absolute hidden rounded-full border border-cyan-300/30 bg-slate-900/50 p-3 text-cyan-300 backdrop-blur md:block ${className}`}
          animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 2.8 + index, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        >
          <Icon size={20} />
        </motion.div>
      ))}

      <div className="section-container max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 inline-flex rounded-full border border-purple-300/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200"
        >
          Full Stack • AI • Cloud Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          {personalInfo.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          {personalInfo.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3 text-sm md:text-base"
        >
          <span className="text-slate-400">Core Profile:</span>
          <span className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-2 font-medium text-cyan-200">
            {prefersReducedMotion ? reducedMotionRole : text}
            {!prefersReducedMotion && <span className="ml-1 animate-pulse text-cyan-300">|</span>}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Review Project Case Study
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-500 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Contact for Opportunities
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Pakki_Gnaneswari_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-300/30 bg-purple-500/10 px-6 py-3 font-semibold text-purple-200 transition hover:bg-purple-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-4 text-slate-300"
        >
          <SocialLink href={personalInfo.github} label="GitHub profile">
            <GitHubIcon size={18} />
          </SocialLink>
          <SocialLink href={personalInfo.linkedin} label="LinkedIn profile">
            <LinkedInIcon size={18} />
          </SocialLink>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
