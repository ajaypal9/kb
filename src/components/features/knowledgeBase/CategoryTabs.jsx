/**
 * CategoryTabs
 * Pill-style filter tabs for content type filtering.
 */
import { CATEGORIES } from '@/data/constants'

export default function CategoryTabs({ active, setActive }) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-5" role="tablist">
      {CATEGORIES.map((cat) => (
        <Tab
          key={cat.label}
          label={cat.label}
          count={cat.count}
          isActive={active === cat.label}
          onClick={() => setActive(cat.label)}
        />
      ))}
    </div>
  )
}

function Tab({ label, count, isActive, onClick }) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={[
        'flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150',
        isActive ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700',
      ].join(' ')}
    >
      {label}
      <span className={[
        'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
        isActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500',
      ].join(' ')}>
        {count}
      </span>
    </button>
  )
}
