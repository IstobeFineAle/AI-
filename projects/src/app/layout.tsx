import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PyNote - Python 学习笔记',
    template: '%s | PyNote',
  },
  description: '以学以练，加强 Python 知识掌握度。记录学习笔记、代码实践与心得体会。',
  keywords: ['Python', '编程', '学习笔记', '教程', '代码实践'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#eff6ff] text-slate-800 antialiased">
        <Header />
        <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="neon-line sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          {/* Animated Logo */}
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-300/50" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-violet-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
            <svg className="relative" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-slate-800">Py</span>
              <span className="shimmer-text">Note</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">Python Knowledge Base</span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/" label="首页" icon={<HomeIcon />} />
          <NavLink href="/categories" label="分类" icon={<GridIcon />} />
          <NavLink href="/tags" label="标签" icon={<TagIcon />} />
          <NavLink href="/practice" label="练习" icon={<CodeIcon />} />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600"
    >
      <span className="text-slate-400 transition-colors group-hover:text-blue-500">
        {icon}
      </span>
      {label}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-200 group-hover:w-3/4" />
    </Link>
  );
}

function HomeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 border-t border-blue-100/50 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-600">
              PyNote
            </p>
            <span className="text-slate-300">|</span>
            <p className="text-sm text-slate-400">
              以学以练，加强知识掌握度
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Built with Python & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
