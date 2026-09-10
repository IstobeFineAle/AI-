import Link from 'next/link';
import { categories, articles } from '@/lib/blog-data';
import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.name}相关的 Python 学习笔记`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const catArticles = articles.filter((a) => a.category === category.name);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition-colors hover:text-blue-600">首页</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <Link href="/categories" className="transition-colors hover:text-blue-600">分类</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-slate-700">{category.name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-slate-800">{category.name}</h1>
        <p className="text-slate-500">共 {catArticles.length} 篇文章</p>
      </div>

      <div className="flex flex-col gap-4">
        {catArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {catArticles.length === 0 && (
        <div className="rounded-xl border border-blue-100 bg-white p-12 text-center">
          <p className="text-slate-500">该分类下暂无文章</p>
        </div>
      )}
    </div>
  );
}
