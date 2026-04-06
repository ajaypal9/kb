/**
 * KnowledgeBasePage
 * Matches Image 2 layout exactly:
 *   - "Knowledge Base" title on left
 *   - Search input + "+ Create New" button on right
 *   - 3-column card grid
 *   - Pagination is fixed to viewport bottom (rendered here, positioned by CSS)
 */
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'
import KnowledgeBaseCard from './KnowledgeBaseCard'
import CreatePanel from './CreatePanel'
import Pagination from './Pagination'
import { useKnowledgeBase } from '@/hooks/useKnowledgeBase'

export default function KnowledgeBasePage() {
  const {
    items,
    total,
    isPanelOpen,
    search, setSearch,
    page,
    rowsPerPage,
    openPanel,
    closePanel,
    handlePageChange,
    handleRowsPerPageChange,
  } = useKnowledgeBase()

  return (
    <>
      {/* ── Page header row ── */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-gray-900">Knowledge Base</h1>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Icon name="search" size={15} />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              aria-label="Search knowledge bases"
              className="
                pl-9 pr-4 py-2 text-sm w-52
                bg-white border border-gray-200 rounded-xl
                placeholder:text-gray-300 transition
                focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/10
              "
            />
          </div>

          {/* Create New */}
          <Button onClick={openPanel}>
            <Icon name="plus" size={15} />
            Create New
          </Button>
        </div>
      </div>

      {/* ── Empty state ── */}
      {items.length === 0 && (
        <EmptyState onCreateNew={openPanel} />
      )}

      {/* ── Card grid ── */}
      {items.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {items.map((kb) => (
            <KnowledgeBaseCard key={kb.id} kb={kb} />
          ))}
        </div>
      )}

      {/* ── Pagination — fixed to bottom of viewport ── */}
      <Pagination
        total={total}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* ── Right-side slide-in panel ── */}
      {isPanelOpen && <CreatePanel onClose={closePanel} />}
    </>
  )
}

function EmptyState({ onCreateNew }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="w-16 h-16 mb-4 text-gray-200">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="12" stroke="currentColor" strokeWidth="3"/>
          <rect x="18" y="18" width="28" height="28" rx="8" stroke="currentColor" strokeWidth="3"/>
        </svg>
      </div>
      <p className="text-base font-semibold text-gray-500 mb-1">No Knowledge Bases Found</p>
      <p className="text-sm text-gray-400 mb-6">Get started by creating your first knowledge base.</p>
      <Button onClick={onCreateNew}>
        <Icon name="plus" size={15} />
        Create New
      </Button>
    </div>
  )
}
