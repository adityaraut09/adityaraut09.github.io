// Small inline SVG icons used across the site.

export const Rocket = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.3 0-3.2a2.3 2.3 0 0 0-3 .2z" />
    <path d="M12 15l-3-3a22 22 0 0 1 8-11c3 0 5 2 5 5a22 22 0 0 1-11 8z" />
    <path d="M9 12H4s.5-2.8 2-4c1.3-1 4 0 4 0" />
    <path d="M12 15v5s2.8-.5 4-2c1-1.3 0-4 0-4" />
  </svg>
)

export const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.2H6.05v7.2h2.29ZM7.2 10.06a1.33 1.33 0 1 0 0-2.66 1.33 1.33 0 0 0 0 2.66Zm11.14 8.28v-4.13c0-2.2-1.18-3.23-2.75-3.23a2.37 2.37 0 0 0-2.15 1.18v-1.02h-2.29c.03.65 0 7.2 0 7.2h2.29v-4.02c0-.22.02-.43.08-.59.17-.43.57-.88 1.24-.88.87 0 1.22.66 1.22 1.64v3.85h2.31Z" />
  </svg>
)

export const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)
