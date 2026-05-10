import { motion } from 'framer-motion'
import { fadeInUp, mediumTransition } from '../utils/motion'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      {...fadeInUp}
      transition={mediumTransition}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">{description}</p>}
    </motion.div>
  )
}

export default SectionHeading
