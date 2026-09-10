import Link from 'next/link';
import type { Category } from '@/lib/blog-data';

interface SidebarProps {
  categories: Category[];
  tags: string[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  syntax: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  structure: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  class: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  code: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  library: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

export default function Sidebar({ categories, tags }: SidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* About Card */}
      <div className="glow-card rounded-xl border border-blue-100/80 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 opacity-20" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">PyNote</h3>
            <p className="text-xs text-slate-500">Python 学习笔记</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-500">
          以学以练，通过持续的学习和代码实践，加深对 Python 编程的理解与掌握。
        </p>
      </div>

      {/* Categories */}
      <div className="glow-card rounded-xl border border-blue-100/80 bg-white p-5 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
          <span className="inline-block h-4 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
          分类导航
        </h3>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-slate-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50/30 hover:text-blue-600"
              >
                <span className="text-slate-400 transition-colors group-hover:text-blue-500">
                  {categoryIcons[cat.icon] || categoryIcons.syntax}
                </span>
                <span className="flex-1">{cat.name}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="glow-card rounded-xl border border-blue-100/80 bg-white p-5 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
          <span className="inline-block h-4 w-1 rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />
          标签云
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-full border border-blue-100 bg-gradient-to-r from-blue-50/50 to-violet-50/30 px-2.5 py-1 text-xs font-medium text-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm hover:shadow-blue-100/50"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
