/**
 * KnowledgeBaseCard
 * Matches Image 2 from the assignment docx exactly:
 *   - White card with border
 *   - Title (bold) + 3-dot menu top row
 *   - Description text (gray, line-clamped)
 *   - "Created On: DD/MM/YYYY" at bottom
 */
import { useState, useRef, useEffect } from 'react'
import Icon from '@/components/common/Icon'

export default function KnowledgeBaseCard({ kb }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="
      bg-white rounded-xl border border-gray-200 p-5
      flex flex-col justify-between min-h-[170px]
      hover:border-indigo-200 hover:shadow-sm
      transition-all duration-150 cursor-pointer
    ">
      {/* Top row: title + menu */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-[15px] text-gray-900 leading-snug">{kb.name}</h3>

          {/* 3-dot menu */}
          <div className="relative flex-shrink-0 ml-2" ref={menuRef}>
            <button
              onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v) }}
              aria-label="Options"
              className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
            >
              <Icon name="dotsV" size={16} strokeWidth={2.5} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-8 z-20 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-scaleIn">
                {['Edit', 'Duplicate', 'Delete'].map((action) => (
                  <button
                    key={action}
                    onClick={() => setMenuOpen(false)}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition hover:bg-gray-50
                      ${action === 'Delete' ? 'text-red-500 hover:bg-red-50' : 'text-gray-700'}`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
          {kb.description}
        </p>
      </div>

      {/* Footer: created date */}
      <p className="text-[12px] text-gray-400 mt-4">
        Created On: <span className="font-semibold text-gray-600">{kb.createdOn}</span>
      </p>
    </div>
  )
}
