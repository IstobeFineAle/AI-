import Link from 'next/link';
import { categories, articles } from '@/lib/blog-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '分类',
  description: '按分类浏览 Python 学习笔记',
};

const categoryDescriptions: Record<string, string> = {
  basics: 'Python 基础语法知识，包括变量、控制流、函数、推导式等核心概念。',
  'data-structures': 'Python 数据结构深入讲解，列表、字典、集合、元组的高级用法。',
  oop: '面向对象编程，类、继承、多态、设计模式等进阶内容。',
  practice: '动手实践项目，通过编写完整程序巩固所学知识。',
  stdlib: 'Python 标准库常用模块，文件操作、正则表达式、日期时间等。',
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-slate-800">分类浏览</h1>
        <p className="text-slate-500">按知识领域浏览 Python 学习笔记</p>
      </div>

      <div className="flex flex-col gap-4">
        {categories.map((cat) => {
          const catArticles = articles.filter((a) => a.category === cat.name);
          return (
            <div
              key={cat.slug}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <Link
                  href={`/categories/${cat.slug}`}
                  className="text-lg font-semibold text-slate-800 transition-colors hover:text-blue-600"
                >
                  {cat.name}
                </Link>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                  {catArticles.length} 篇
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-500">
                {categoryDescriptions[cat.slug] || ''}
              </p>
              <div className="flex flex-col gap-2">
                {catArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.slug}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span className="flex items-center gap-2">
                      {article.isPractice && (
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {article.title}
                    </span>
                    <span className="text-xs text-slate-400">{article.readTime} 分钟</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
