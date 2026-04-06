/**
 * Icon — single SVG renderer for all icons in the app.
 * 24×24 viewBox, stroke-based style.
 */

const PATHS = {
  // Nav icons
  agents:      'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
  aimodels:    'M12 2a4 4 0 014 4v1h1a3 3 0 013 3v8a3 3 0 01-3 3H7a3 3 0 01-3-3V10a3 3 0 013-3h1V6a4 4 0 014-4z M9 10V6a3 3 0 016 0v4',
  library:     'M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z',
  published:   'M22 12h-4l-3 9L9 3l-3 9H2',
  machines:    'M2 13a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v6z M8 21h8 M12 17v4',
  queues:      'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  triggers:    'M13 10V3L4 14h7v7l9-11h-7z',
  jobs:        'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16',
  executions:  'M5 3l14 9-14 9V3z',
  vault:       'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  book:        'M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z',
  keystore:    'M3 3h18v4H3z M3 10h18v4H3z M3 17h18v4H3z M7 3v18 M17 3v18',
  tenant:      'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  integrations:'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  auditlogs:   'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',

  // General
  search:      'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  bell:        'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0',
  user:        'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z',
  plus:        'M12 5v14 M5 12h14',
  x:           'M18 6L6 18 M6 6l12 12',
  star:        'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  clock:       'M12 22a10 10 0 100-20 10 10 0 000 20z M12 6v6l4 2',
  chevDown:    'M6 9l6 6 6-6',
  chevLeft:    'M15 18l-6-6 6-6',
  chevRight:   'M9 18l6-6-6-6',
  article:     'M4 6h16M4 12h16M4 18h7',
  faq:         'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3 M12 17h.01',
  video:       'M15 10l4.553-2.07A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
  doc:         'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  external:    'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6 M15 3h6v6 M10 14L21 3',
  eye:         'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z',
  filter:      'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  dotsV:       'M12 5h.01M12 12h.01M12 19h.01',
  chevronsLeft: 'M11 17l-5-5 5-5M18 17l-5-5 5-5',
  chevronsRight:'M13 17l5-5-5-5M6 17l5-5-5-5',
  chevronDown: 'M6 9l6 6 6-6',
  workspace:   'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  logo:        'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
}

export default function Icon({ name, size = 18, className = '', strokeWidth = 2 }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
