/**
 * CreatePanel
 * Slides in from the RIGHT side of the screen (not a center modal).
 * Matches Image 1 from the assignment docx:
 *   - Name, Description, Vector Store, LLM Embedding Model
 *   - Vector Store & LLM Embedding Model use react-select (AppSelect)
 *   - Create button at bottom right
 *   - Backdrop dims the left content
 */
import { useState, useEffect, useRef } from 'react'
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'
import { Input, Textarea } from '@/components/common/Input'
import AppSelect from '@/components/common/AppSelect'

// ─── Options ─────────────────────────────────────────────────────────────────

const VECTOR_STORES    = ['Qdrant', 'Pinecone', 'Weaviate', 'Chroma']
const EMBEDDING_MODELS = [
  'text-embedding-ada-002',
  'text-embedding-3-small',
  'text-embedding-3-large',
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreatePanel({ onClose }) {
  const [name,        setName]        = useState('')
  const [description, setDescription] = useState('')
  const [vectorStore, setVectorStore] = useState('Qdrant')
  const [embedding,   setEmbedding]   = useState('text-embedding-ada-002')

  const panelRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const canSubmit = name.trim().length > 0

  const handleSubmit = () => {
    if (!canSubmit) return
    // TODO: connect to API — { name, description, vectorStore, embedding }
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Create New Knowledge Base"
        className="
          fixed top-0 right-0 z-50
          h-full w-[420px]
          bg-white shadow-2xl
          flex flex-col
          animate-slideInRight
        "
      >
        {/* Panel header */}
        <div className="flex items-start justify-between px-7 py-6 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition flex-shrink-0"
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        {/* Form body — scrollable */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">

          {/* Name */}
          <Input
            label="Name (Cannot be edited later)"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Description */}
          <Textarea
            label="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />

          {/* Vector Store — react-select */}
          <AppSelect
            label="Vector Store"
            required
            options={VECTOR_STORES}
            value={vectorStore}
            onChange={setVectorStore}
            placeholder="Select vector store..."
          />

          {/* LLM Embedding Model — react-select */}
          <AppSelect
            label="LLM Embedding Model"
            required
            options={EMBEDDING_MODELS}
            value={embedding}
            onChange={setEmbedding}
            placeholder="Select embedding model..."
          />
        </div>

        {/* Panel footer */}
        <div className="flex items-center justify-end px-7 py-5 border-t border-gray-100 flex-shrink-0">
          <Button onClick={handleSubmit} disabled={!canSubmit}>
            Create
          </Button>
        </div>
      </aside>
    </>
  )
}
