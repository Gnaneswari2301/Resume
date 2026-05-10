import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function MouseGlow() {
  const prefersReducedMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    let frame = null
    const onMove = (event) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY })
        frame = null
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        background: `radial-gradient(420px at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.12), transparent 58%)`,
      }}
      transition={{ type: 'tween', duration: 0.14 }}
    />
  )
}

export default MouseGlow
