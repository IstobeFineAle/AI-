import { articles } from '@/lib/blog-data';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '实战练习',
  description: '通过动手实践巩固 Python 知识',
};

export default function PracticePage() {
  const practiceArticles = articles.filter((a) => a.isPractice);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">实战练习</h1>
        </div>
        <p className="text-slate-500">
          以学以练，通过动手编程加深对 Python 知识的理解与掌握。每篇文章都包含练习题和扩展任务。
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{practiceArticles.length}</div>
          <div className="text-xs text-slate-500">练习文章</div>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-emerald-600">
            {practiceArticles.reduce((sum, a) => sum + (a.content.match(/练习|扩展/g) || []).length, 0)}
          </div>
          <div className="text-xs text-slate-500">练习题目</div>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-slate-700">
            {practiceArticles.reduce((sum, a) => sum + a.readTime, 0)}
          </div>
          <div className="text-xs text-slate-500">分钟阅读</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {practiceArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
