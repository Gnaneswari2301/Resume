export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
}

export const fastTransition = { duration: 0.45, ease: 'easeOut' }
export const mediumTransition = { duration: 0.55, ease: 'easeOut' }
