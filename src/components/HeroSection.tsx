import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600 shadow-xl shadow-blue-200/40">
      {/* Tech grid background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
      <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating rings */}
        <div className="absolute -right-10 -top-10 h-48 w-48 animate-spin rounded-full border-2 border-dashed border-white/10" style={{ animationDuration: '30s' }} />
        <div className="absolute -right-4 -top-4 h-32 w-32 animate-spin rounded-full border border-white/15" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

        {/* Floating dots */}
        <div className="absolute left-[40%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-300" style={{ animationDelay: '0.5s' }} />
        <div className="absolute left-[60%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" style={{ animationDelay: '1.5s' }} />
        <div className="absolute left-[50%] bottom-[20%] h-2 w-2 animate-pulse rounded-full bg-violet-300/70" style={{ animationDelay: '2.5s' }} />
        <div className="absolute right-[30%] top-[60%] h-1 w-1 animate-pulse rounded-full bg-cyan-200/80" style={{ animationDelay: '1s' }} />

        {/* Sparkle effects */}
        <svg className="absolute left-[45%] top-[10%] h-4 w-4 animate-pulse text-yellow-300/70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2 10 10 2-10 2-2 10-2-10L0 12l10-2z" />
        </svg>
        <svg className="absolute left-[70%] bottom-[30%] h-3 w-3 animate-pulse text-cyan-300/60" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '2s' }}>
          <path d="M12 0l2 10 10 2-10 2-2 10-2-10L0 12l10-2z" />
        </svg>
      </div>

      {/* Content Layout */}
      <div className="relative flex flex-col items-center gap-6 px-6 py-10 sm:px-10 sm:py-14 lg:flex-row lg:gap-8">
        {/* Character Image */}
        <div className="relative shrink-0 lg:order-2 lg:w-[320px]">
          {/* Glow behind character */}
          <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-b from-cyan-400/30 to-violet-500/30 blur-2xl" />
          <div className="relative">
            {/* Frame border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyan-300/50 via-white/20 to-violet-400/50 opacity-60 blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/30 shadow-2xl shadow-blue-900/30">
              <Image
                src="/swordsman.jpg"
                alt="Python 学习之旅"
                width={320}
                height={420}
                className="h-auto w-[220px] object-cover sm:w-[260px] lg:w-[320px]"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge on character */}
            <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 shadow-lg">
              <span className="text-sm font-bold text-blue-600">Python</span>
              <span className="text-xs text-slate-400">Master</span>
            </div>
            <div className="absolute -right-2 top-6 flex items-center gap-1 rounded-lg bg-yellow-400 px-2.5 py-1 shadow-lg">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 0l2 10 10 2-10 2-2 10-2-10L0 12l10-2z" />
              </svg>
              <span className="text-xs font-bold text-white">Level Up</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center text-white lg:order-1 lg:text-left">
          {/* Status badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            修炼中 · 持续更新
          </div>

          {/* Title */}
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            PyNote
          </h1>
          <p className="mb-2 text-base font-medium text-blue-100 sm:text-lg">
            Python 修炼之路
          </p>

          {/* Description */}
          <p className="mx-auto max-w-md text-sm leading-relaxed text-blue-50/80 sm:text-base lg:mx-0">
            以学以练，如剑士挥刀千万次。
            <br />
            从基础语法到实战项目，记录每一次成长与突破。
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/practice"
              className="glow-button group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              开始修炼
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              浏览秘籍
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/15 pt-5 lg:justify-start">
            <StatItem value="14" label="篇秘籍" />
            <StatItem value="5" label="个流派" />
            <StatItem value="18" label="个招式" />
            <StatItem value="2" label="场实战" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-2xl font-extrabold text-white">{value}</span>
      <span className="text-xs text-blue-200">{label}</span>
    </div>
  );
}
