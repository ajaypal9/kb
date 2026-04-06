/**
 * Pagination
 * Fixed at the very BOTTOM of the viewport (matching Image 2).
 * Layout: "N rows" on left | "Rows per page 10 ▾  page X of Y  ⏮ ◀ ▶ ⏭" on right
 * Sits above the viewport bottom edge, spanning from sidebar to right edge.
 */
import Icon from '@/components/common/Icon'

export default function Pagination({ total, page, rowsPerPage, onPageChange, onRowsPerPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / rowsPerPage))

  return (
    <div className="
      fixed bottom-0 left-[220px] right-0 z-20
      flex items-center justify-between
      bg-white border-t border-gray-200
      px-6 h-14
      text-[13px] text-gray-600
    ">
      {/* Row count */}
      <span className="font-medium text-gray-700">{total} row{total !== 1 ? 's' : ''}</span>

      {/* Right controls */}
      <div className="flex items-center gap-5">

        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Rows per page</span>
          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="
                appearance-none pl-3 pr-7 py-1.5
                text-[13px] font-semibold text-gray-700
                border border-gray-200 rounded-lg bg-white
                focus:outline-none focus:border-indigo-400
                cursor-pointer
              "
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Icon name="chevDown" size={12} />
            </div>
          </div>
        </div>

        {/* Page indicator */}
        <span className="font-medium text-gray-700">
          page {page} of {totalPages}
        </span>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <NavBtn icon="chevronsLeft"  label="First"    onClick={() => onPageChange(1)}           disabled={page <= 1} />
          <NavBtn icon="chevLeft"      label="Previous" onClick={() => onPageChange(page - 1)}    disabled={page <= 1} />
          <NavBtn icon="chevRight"     label="Next"     onClick={() => onPageChange(page + 1)}    disabled={page >= totalPages} />
          <NavBtn icon="chevronsRight" label="Last"     onClick={() => onPageChange(totalPages)}  disabled={page >= totalPages} />
        </div>
      </div>
    </div>
  )
}

function NavBtn({ icon, label, onClick, disabled }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="
        w-8 h-8 flex items-center justify-center rounded-lg
        border border-gray-200 text-gray-500
        hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200
        disabled:opacity-30 disabled:cursor-not-allowed
        disabled:hover:bg-white disabled:hover:text-gray-400 disabled:hover:border-gray-200
        transition
      "
    >
      <Icon name={icon} size={14} />
    </button>
  )
}
