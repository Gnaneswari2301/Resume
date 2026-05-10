import { motion } from 'framer-motion'

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04030a]">
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="h-16 w-16 rounded-2xl border border-cyan-300/40 bg-slate-900/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.p
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          className="text-xs uppercase tracking-[0.28em] text-cyan-200"
        >
          Initializing Portfolio Experience
        </motion.p>
      </div>
    </div>
  )
}

export default PageLoader
