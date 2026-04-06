/**
 * Badge
 * Small pill label used for tags, type indicators, etc.
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:  'bg-indigo-50 text-indigo-600',
    gray:     'bg-gray-100 text-gray-500',
    amber:    'bg-amber-50 text-amber-600 border border-amber-100',
    outline:  'bg-white border border-gray-200 text-gray-500',
  }

  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
