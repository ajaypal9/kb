/**
 * Button
 * Reusable button with variant and size support.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40'

  const variants = {
    primary:  'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:-translate-y-px hover:shadow-md active:translate-y-0 disabled:bg-indigo-300 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none',
    ghost:    'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
    outline:  'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50',
    danger:   'bg-red-500 text-white hover:bg-red-600',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-sm',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
