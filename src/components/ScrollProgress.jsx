import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
