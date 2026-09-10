import Link from 'next/link';
import { articles } from '@/lib/blog-data';
import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  const tags = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `标签: ${tag}`,
    description: `与 "${tag}" 相关的 Python 学习笔记`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const tagArticles = articles.filter((a) => a.tags.includes(tag));

  if (tagArticles.length === 0) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition-colors hover:text-blue-600">首页</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <Link href="/tags" className="transition-colors hover:text-blue-600">标签</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-slate-700">{tag}</span>
      </nav>

      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-800">{tag}</h1>
        </div>
        <p className="text-slate-500">共 {tagArticles.length} 篇文章</p>
      </div>

      <div className="flex flex-col gap-4">
        {tagArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
