export function GitHubIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.1 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4V9Z" />
    </svg>
  )
}

export function SocialLink({ href, label, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`rounded-full border border-slate-600 p-3 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${className}`}
    >
      {children}
    </a>
  )
}
