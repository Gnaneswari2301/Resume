import { motion, useReducedMotion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  width: 4 + (index % 4),
  left: `${(index * 7 + 9) % 100}%`,
  duration: 8 + (index % 7),
  delay: (index % 5) * 0.7,
}))

function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -right-16 top-64 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute left-1/3 top-[72%] h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute block rounded-full bg-cyan-300/35"
          style={{ width: particle.width, height: particle.width, left: particle.left, bottom: '-40px' }}
          animate={prefersReducedMotion ? { opacity: 0.2 } : { y: ['0%', '-120vh'], opacity: [0, 1, 0] }}
          transition={{
            duration: particle.duration,
            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
