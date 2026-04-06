/**
 * useKnowledgeBase
 * Manages all state for the Knowledge Base page:
 *   - KB items list (mock data)
 *   - Create panel open/close
 *   - Search, pagination, category filter
 */
import { useState, useMemo } from 'react'

// Mock KB items matching Image 2 layout
const MOCK_KB_ITEMS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: 'Test',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
  createdOn: '14/07/2025',
  vectorStore: 'Qdrant',
  embeddingModel: 'text-embedding-ada-002',
}))

const ROWS_PER_PAGE_DEFAULT = 10

export function useKnowledgeBase() {
  const [items,          setItems]         = useState(MOCK_KB_ITEMS)
  const [isPanelOpen,    setIsPanelOpen]   = useState(false)
  const [search,         setSearch]        = useState('')
  const [page,           setPage]          = useState(1)
  const [rowsPerPage,    setRowsPerPage]   = useState(ROWS_PER_PAGE_DEFAULT)

  // Filtered + paginated items
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return q
      ? items.filter((kb) => kb.name.toLowerCase().includes(q) || kb.description.toLowerCase().includes(q))
      : items
  }, [items, search])

  const paginated = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    return filtered.slice(start, start + rowsPerPage)
  }, [filtered, page, rowsPerPage])

  const openPanel  = () => setIsPanelOpen(true)
  const closePanel = () => setIsPanelOpen(false)

  const addItem = (newItem) => {
    setItems((prev) => [{ id: Date.now(), ...newItem }, ...prev])
    setPage(1)
  }

  const handlePageChange = (p) => {
    const max = Math.ceil(filtered.length / rowsPerPage)
    setPage(Math.min(Math.max(1, p), max))
  }

  const handleRowsPerPageChange = (n) => {
    setRowsPerPage(n)
    setPage(1)
  }

  return {
    items:      paginated,
    total:      filtered.length,
    isPanelOpen,
    search,     setSearch,
    page,
    rowsPerPage,
    openPanel,
    closePanel,
    addItem,
    handlePageChange,
    handleRowsPerPageChange,
  }
}
