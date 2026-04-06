/**
 * Input / Textarea / Select
 * Shared form field components with consistent styling.
 */

export function Input({ label, required, placeholder, value, onChange, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-white
          placeholder:text-gray-300 transition
          focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
        {...props}
      />
    </div>
  )
}

export function Textarea({ label, required, placeholder, value, onChange, rows = 4, className = '' }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-white resize-none
          placeholder:text-gray-300 transition
          focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
      />
    </div>
  )
}

export function Select({ label, required, value, onChange, options = [], placeholder, className = '' }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none px-3.5 py-2.5 pr-9 text-sm border border-gray-200 rounded-xl bg-white text-gray-700
            cursor-pointer transition
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {/* Custom chevron */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
