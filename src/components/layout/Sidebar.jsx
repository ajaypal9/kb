/**
 * Sidebar
 * Matches Image 2 exactly:
 *   - White background, left border
 *   - Section groups with gray uppercase labels
 *   - MY PROJECTS: Agents, AI Models, Library
 *   - ORCHESTRATOR: Published, Machines, Queues, Triggers, Jobs, Executions, Vault, Knowledge Base (active), Key Store
 *   - ADMIN: Tenant, Integrations, Audit Logs
 *   - Active item has indigo left border accent + indigo text + light indigo bg
 */
import Icon from '@/components/common/Icon'
import { NAV_SECTIONS } from '@/data/constants'

export default function Sidebar() {
  return (
    <aside className="
      fixed top-14 left-0 z-20
      flex flex-col w-[220px] h-[calc(100vh-56px)]
      bg-white border-r border-gray-200
      overflow-y-auto
    ">
      <nav className="py-3" aria-label="Sidebar navigation">
        {NAV_SECTIONS.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </nav>
    </aside>
  )
}

function NavSection({ section }) {
  return (
    <div className="mb-2">
      {/* Section label */}
      <p className="px-4 pt-3 pb-1.5 text-[10.5px] font-semibold text-gray-400 tracking-widest uppercase">
        {section.title}
      </p>
      {/* Items */}
      {section.items.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  )
}

function NavItem({ item }) {
  return (
    <button
      className={[
        'relative flex items-center gap-2.5 w-full px-4 py-2 text-[13px] font-medium text-left transition-all duration-100',
        item.active
          ? 'text-indigo-600 bg-indigo-50 font-semibold'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
      ].join(' ')}
      aria-current={item.active ? 'page' : undefined}
    >
      {/* Active left accent bar */}
      {item.active && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600 rounded-r-full" aria-hidden="true" />
      )}
      <Icon name={item.icon} size={15} className={item.active ? 'text-indigo-600' : 'text-gray-400'} />
      <span>{item.label}</span>
    </button>
  )
}
