import Link from 'next/link';
import { articles, getArticleBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import ArticleContent from './ArticleContent';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Get related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition-colors hover:text-blue-600">首页</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <Link href={`/categories/${article.category}`} className="transition-colors hover:text-blue-600">
          {article.category}
        </Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-slate-700">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            {article.category}
          </span>
          {article.isPractice && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              实战练习
            </span>
          )}
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight text-slate-800 sm:text-3xl">
          {article.title}
        </h1>
        <p className="mb-4 text-base leading-relaxed text-slate-500">
          {article.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime} 分钟阅读
          </span>
          <div className="flex gap-1.5">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <ArticleContent content={article.content} />

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mt-12 border-t border-blue-100 pt-8">
          <h2 className="mb-4 text-lg font-bold text-slate-800">相关文章</h2>
          <div className="flex flex-col gap-3">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/article/${r.slug}`}
                className="group flex items-center justify-between rounded-lg border border-blue-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
              >
                <div>
                  <h3 className="text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{r.readTime} 分钟阅读</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 transition-colors group-hover:text-blue-400">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
