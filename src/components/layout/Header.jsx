/**
 * Header
 * Matches Image 2 exactly:
 *   - Full-width dark navy bar (bg-[#1a1a2e] / indigo-950)
 *   - Left: logo icon + "Worcspace" text + workspace selector pill "Worcspace 1 ▾"
 *   - Center: search bar with ⌘K hint
 *   - Right: bell icon + user avatar circle "GK"
 */

import { useState } from 'react'
import Icon from '@/components/common/Icon'

export default function Header() {
  const [search, setSearch] = useState('')

  return (
    <header className="
      fixed top-0 left-0 right-0 z-30
      flex items-center justify-between
      bg-[#12122a] px-5 h-14
    ">
      {/* ── Left: Logo + Workspace selector ── */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Logo mark */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#6366F1" fillOpacity="0.3"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-white font-bold text-[15px] tracking-tight">Worcspace</span>
        </div>

        {/* Workspace selector pill */}
        <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 transition px-3 py-1.5 rounded-lg">
          <span className="text-white text-[13px] font-medium">Worcspace 1</span>
          <Icon name="chevDown" size={14} className="text-white/60" />
        </button>
      </div>

      {/* ── Center: Search ── */}
      <div className="flex-1 max-w-sm mx-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
            <Icon name="search" size={15} />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            aria-label="Global search"
            className="
              w-full pl-9 pr-14 py-2 text-sm
              bg-white/10 border border-white/10 rounded-xl
              text-white placeholder:text-white/40
              focus:outline-none focus:border-indigo-400 focus:bg-white/15
              transition
            "
          />
          {/* ⌘K badge */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
            <kbd className="text-[10px] text-white/40 bg-white/10 px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* ── Right: Bell + Avatar ── */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Notification bell */}
        <button
          aria-label="Notifications"
          className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition"
        >
          <Icon name="bell" size={18} />
        </button>

        {/* User avatar */}
        <button
          aria-label="User menu"
          className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[12px] font-bold"
        >
          GK
        </button>
      </div>
    </header>
  )
}
