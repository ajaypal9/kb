/**
 * StatsBar
 * 4-column row of metric summary cards.
 */
import { STATS } from '@/data/constants'

export default function StatsBar() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {STATS.map((stat) => <StatCard key={stat.label} {...stat} />)}
    </div>
  )
}

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold text-indigo-950">{value}</p>
      <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
    </div>
  )
}
