/**
 * AppSelect
 * Wrapper around react-select with styles matching the app's design system.
 * Replaces the native <select> for the CreatePanel dropdowns.
 *
 * Usage:
 *   import AppSelect from '@/components/common/AppSelect'
 *
 *   <AppSelect
 *     label="Vector Store"
 *     required
 *     options={['Qdrant', 'Pinecone']}
 *     value={vectorStore}
 *     onChange={setVectorStore}
 *   />
 */
import ReactSelect from 'react-select'

// ─── Custom styles matching the app's Tailwind design ────────────────────────

const customStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: '42px',
    borderRadius: '12px',
    border: state.isFocused ? '1.5px solid #6366F1' : '1.5px solid #E5E7EB',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(99, 102, 241, 0.1)' : 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'border 0.15s ease, box-shadow 0.15s ease',
    '&:hover': {
      borderColor: state.isFocused ? '#6366F1' : '#D1D5DB',
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: '2px 14px',
  }),

  singleValue: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#374151',
    fontWeight: '500',
  }),

  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#D1D5DB',
  }),

  input: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#374151',
    margin: 0,
    padding: 0,
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? '#6366F1' : '#9CA3AF',
    padding: '0 10px',
    transition: 'transform 0.2s ease, color 0.15s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    '&:hover': { color: '#6366F1' },
  }),

  menu: (base) => ({
    ...base,
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
    overflow: 'hidden',
    zIndex: 100,
    marginTop: '4px',
  }),

  menuList: (base) => ({
    ...base,
    padding: '4px',
    maxHeight: '220px',
  }),

  option: (base, state) => ({
    ...base,
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: state.isSelected ? '600' : '400',
    color: state.isSelected ? '#4F46E5' : '#374151',
    backgroundColor: state.isSelected
      ? '#EEF2FF'
      : state.isFocused
      ? '#F9FAFB'
      : 'transparent',
    cursor: 'pointer',
    padding: '9px 12px',
    transition: 'background 0.1s ease',
    '&:active': {
      backgroundColor: '#EEF2FF',
    },
  }),

  noOptionsMessage: (base) => ({
    ...base,
    fontSize: '13px',
    color: '#9CA3AF',
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * @param {string}   label      - field label text
 * @param {boolean}  required   - shows red asterisk
 * @param {string[]} options    - array of string option values
 * @param {string}   value      - currently selected value (string)
 * @param {function} onChange   - called with new string value
 * @param {string}   placeholder
 * @param {string}   className
 */
export default function AppSelect({
  label,
  required = false,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
}) {
  // react-select works with { value, label } objects
  const selectOptions = options.map((opt) => ({ value: opt, label: opt }))
  const selectedOption = selectOptions.find((o) => o.value === value) || null

  const handleChange = (selected) => {
    onChange(selected ? selected.value : '')
  }

  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          {label}{required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
      )}
      <ReactSelect
        options={selectOptions}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable
        classNamePrefix="app-select"
      />
    </div>
  )
}
