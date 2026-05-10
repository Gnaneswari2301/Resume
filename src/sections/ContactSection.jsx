import { Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data/portfolioData'

function ContactSection() {
  const emailSubject = encodeURIComponent('Internship Opportunity Discussion - Pakki Gnaneswari')
  const emailBody = encodeURIComponent(
    [
      `Hello ${personalInfo.name},`,
      '',
      'I reviewed your portfolio and would like to discuss a potential internship/collaboration opportunity.',
      '',
      'Role / Team:',
      'Key Expectations:',
      'Preferred Discussion Time:',
      '',
      'Regards,',
      '',
    ].join('\n'),
  )
  const scheduleDiscussionMailto = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`
  const scheduleDiscussionGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${emailSubject}&body=${emailBody}`
  const openDiscussionComposer = () => {
    const popup = window.open(scheduleDiscussionGmail, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = scheduleDiscussionGmail
    }
  }

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-container max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Open to full stack and cloud internship opportunities"
          description="Available for internship roles where I can contribute to product engineering, web development, and cloud-enabled solutions."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="glass-panel flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 text-center shadow-[0_0_48px_rgba(168,85,247,0.13)] md:flex-row md:text-left"
        >
          <div>
            <p className="text-sm text-slate-300">Primary Contact</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
          </div>
          <button
            type="button"
            aria-label="Schedule a discussion via email"
            title="Opens Gmail compose with a pre-filled discussion template"
            onClick={openDiscussionComposer}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            <Send size={16} />
            Schedule a Discussion
          </button>
        </motion.div>
        <p className="mt-3 text-center text-xs text-slate-400">
          If the button is blocked by browser settings, use{' '}
          <a
            href={scheduleDiscussionMailto}
            className="text-cyan-300 underline-offset-2 transition hover:underline"
          >
            this direct email link
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default ContactSection
