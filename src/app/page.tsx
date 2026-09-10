import Link from 'next/link';
import { articles, categories, allTags } from '@/lib/blog-data';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Article List */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <span className="inline-block h-5 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
              最新文章
            </h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              共 {articles.length} 篇
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-[300px]">
          <Sidebar categories={categories} tags={allTags} />
        </aside>
      </div>
    </div>
  );
}
