import Link from 'next/link';
import { allTags, articles } from '@/lib/blog-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '标签',
  description: '按标签浏览 Python 学习笔记',
};

export default function TagsPage() {
  // Count articles per tag
  const tagCounts = allTags.map((tag) => ({
    tag,
    count: articles.filter((a) => a.tags.includes(tag)).length,
  })).filter((t) => t.count > 0).sort((a, b) => b.count - a.count);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-slate-800">标签</h1>
        <p className="text-slate-500">按标签浏览 Python 学习笔记</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {tagCounts.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="group flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
              {tag}
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-500">
              {count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
