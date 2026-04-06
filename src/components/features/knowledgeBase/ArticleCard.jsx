/**
 * ArticleCard
 * Displays a single knowledge base content item.
 * Matches the Figma design: top accent bar, icon, type badge, featured badge,
 * title, description, tags, footer with date + views.
 */
import Icon from '@/components/common/Icon'
import Badge from '@/components/common/Badge'

export default function ArticleCard({ article }) {
  const { type, icon, iconBg, iconColor, accentColor, title, desc, tags, views, updated, featured } = article

  return (
    <article className="
      group bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer
      transition-all duration-200
      hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(79,70,229,0.11)]
    ">
      {/* Top accent stripe */}
      <div className={`h-1 w-full ${accentColor}`} aria-hidden="true" />

      <div className="p-5">
        {/* Icon + type badges */}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg} ${iconColor}`}>
            <Icon name={icon} size={18} />
          </div>
          <div className="flex items-center gap-2">
            {featured && (
              <Badge variant="amber">
                <Icon name="star" size={9} className="fill-amber-400 stroke-none" aria-hidden="true" />
                Featured
              </Badge>
            )}
            <Badge variant="gray">{type}</Badge>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[14.5px] text-indigo-950 leading-snug mb-1.5 group-hover:text-indigo-600 transition-colors duration-150">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between pt-3 border-t border-gray-100 text-[11.5px] text-gray-400">
          <span className="flex items-center gap-1">
            <Icon name="clock" size={12} aria-hidden="true" />
            {updated}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="eye" size={12} aria-hidden="true" />
            {views.toLocaleString()} views
          </span>
        </footer>
      </div>
    </article>
  )
}
