// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_SECTIONS = [
  {
    title: 'MY PROJECTS',
    items: [
      { label: 'Agents',    icon: 'agents'   },
      { label: 'AI Models', icon: 'aimodels' },
      { label: 'Library',   icon: 'library'  },
    ],
  },
  {
    title: 'ORCHESTRATOR',
    items: [
      { label: 'Published',       icon: 'published'   },
      { label: 'Machines',        icon: 'machines'    },
      { label: 'Queues',          icon: 'queues'      },
      { label: 'Triggers',        icon: 'triggers'    },
      { label: 'Jobs',            icon: 'jobs'        },
      { label: 'Executions',      icon: 'executions'  },
      { label: 'Vault',           icon: 'vault'       },
      { label: 'Knowledge Base',  icon: 'book',       active: true },
      { label: 'Key Store',       icon: 'keystore'    },
    ],
  },
  {
    title: 'ADMIN',
    items: [
      { label: 'Tenant',       icon: 'tenant'       },
      { label: 'Integrations', icon: 'integrations' },
      { label: 'Audit Logs',   icon: 'auditlogs'    },
    ],
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
  { label: 'Total Articles', value: '48',    sub: '+3 this week'        },
  { label: 'Total Views',    value: '12.4k', sub: '+8.2% vs last month' },
  { label: 'Avg. Read Time', value: '4.2m',  sub: 'Across all content'  },
  { label: 'Published',      value: '42',    sub: '6 in draft'          },
]

// ─── Articles ─────────────────────────────────────────────────────────────────

export const ARTICLES = [
  {
    id: 1,
    type: 'Article',
    icon: 'article',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    accentColor: 'bg-indigo-500',
    title: 'Getting Started with the Platform',
    desc: 'A comprehensive introduction to all features and functionalities available to new users joining the platform.',
    tags: ['Onboarding', 'Basics'],
    views: 1240,
    updated: '2 days ago',
    featured: true,
  },
  {
    id: 2,
    type: 'FAQ',
    icon: 'faq',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    accentColor: 'bg-violet-500',
    title: 'Frequently Asked Questions',
    desc: 'Quick answers to the most common questions our users ask about billing, accounts, and features.',
    tags: ['Support', 'Billing'],
    views: 980,
    updated: '5 days ago',
    featured: false,
  },
  {
    id: 3,
    type: 'Video',
    icon: 'video',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentColor: 'bg-blue-500',
    title: 'Advanced Feature Walkthrough',
    desc: 'Step-by-step video tutorial covering power-user features including automation and integrations.',
    tags: ['Tutorial', 'Advanced'],
    views: 560,
    updated: '1 week ago',
    featured: false,
  },
  {
    id: 4,
    type: 'Guide',
    icon: 'doc',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: 'bg-emerald-500',
    title: 'Integration Setup Guide',
    desc: 'Complete guide for connecting third-party services and setting up webhooks in your workspace.',
    tags: ['Integration', 'API'],
    views: 430,
    updated: '3 days ago',
    featured: false,
  },
  {
    id: 5,
    type: 'Article',
    icon: 'article',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentColor: 'bg-amber-500',
    title: 'Best Practices for Teams',
    desc: 'Tips and strategies for managing large teams, setting up roles, and maintaining platform governance.',
    tags: ['Teams', 'Admin'],
    views: 870,
    updated: 'Yesterday',
    featured: false,
  },
  {
    id: 6,
    type: 'Article',
    icon: 'article',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    accentColor: 'bg-rose-500',
    title: 'Security & Compliance Overview',
    desc: 'Understanding data security measures, GDPR compliance, and access control across the platform.',
    tags: ['Security', 'GDPR'],
    views: 320,
    updated: '4 days ago',
    featured: false,
  },
]

// ─── Create Panel ─────────────────────────────────────────────────────────────

export const CONTENT_TYPES = [
  { id: 'article', label: 'Article', icon: 'article'  },
  { id: 'faq',     label: 'FAQ',     icon: 'faq'      },
  { id: 'video',   label: 'Video',   icon: 'video'    },
  { id: 'link',    label: 'Link',    icon: 'external' },
]

export const COLLECTIONS   = ['Onboarding', 'Support', 'Tutorials', 'API Docs']
export const ACCESS_LEVELS = ['Public', 'Private', 'Team only']
