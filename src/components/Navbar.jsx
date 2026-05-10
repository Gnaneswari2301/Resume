import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { fastTransition } from '../utils/motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={fastTransition}
      className="sticky top-2 z-40 px-4 pt-3 md:px-8"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-900/65 px-4 py-3 backdrop-blur-lg"
      >
        <a href="#home" className="text-sm font-semibold tracking-wide text-white md:text-base">
          Pakki <span className="text-cyan-300">Gnaneswari</span>
        </a>
        <ul className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={personalInfo.resumeUrl}
          download="Pakki_Gnaneswari_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg border border-purple-300/30 bg-purple-500/10 px-3 py-2 text-xs font-semibold text-purple-100 transition hover:bg-purple-500/20 md:text-sm"
        >
          <Download size={14} />
          Resume
        </a>
      </nav>
    </motion.header>
  )
}

export default Navbar
