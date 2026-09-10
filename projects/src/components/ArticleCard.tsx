import Link from 'next/link';
import type { BlogArticle } from '@/lib/blog-data';

export default function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="glow-card group block rounded-xl border border-blue-100/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
    >
      <div className="flex flex-col gap-3">
        {/* Tags & Meta */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-50 to-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
            {article.category}
          </span>
          {article.isPractice && (
            <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-emerald-50 to-emerald-100/50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              实战
            </span>
          )}
          <span className="ml-auto text-xs text-slate-400">
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold leading-snug text-slate-800 transition-colors group-hover:text-blue-600">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-100 bg-slate-50 px-2 py-0.5 text-xs text-slate-500 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="ml-auto flex items-center gap-1 text-xs text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime} 分钟
          </span>
        </div>
      </div>
    </Link>
  );
}
