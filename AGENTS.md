# AGENTS.md - PyNote Python 知识博客

## 项目概览

PyNote 是一个以 Python 学习为主题的个人知识博客网站，核心理念是"以学以练，加强知识掌握度"。采用亮色主题，以淡蓝色为主背景色。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **包管理**: pnpm

## 目录结构

```
src/
├── app/
│   ├── layout.tsx              # 全局布局（Header + Footer）
│   ├── page.tsx                # 首页（Hero + 文章列表 + 侧边栏）
│   ├── globals.css             # 全局样式 + 代码高亮
│   ├── article/[slug]/         # 文章详情页（含代码高亮渲染）
│   ├── categories/             # 分类列表页
│   ├── categories/[slug]/      # 分类详情页
│   ├── tags/                   # 标签列表页
│   ├── tags/[tag]/             # 标签文章列表页
│   └── practice/               # 实战练习专区
├── components/
│   ├── ui/                     # shadcn/ui 组件库
│   ├── ArticleCard.tsx         # 文章卡片组件
│   └── Sidebar.tsx             # 侧边栏组件（分类 + 标签）
└── lib/
    ├── utils.ts                # 工具函数
    └── blog-data.ts            # 博客数据（文章、分类、标签）
```

## 开发命令

```bash
pnpm install          # 安装依赖
pnpm dev              # 启动开发服务
pnpm build            # 构建生产版本
pnpm start            # 启动生产服务
pnpm ts-check         # TypeScript 类型检查
pnpm lint             # ESLint 检查
```

## 设计规范

- 亮色主题，背景色 `#EFF6FF`（blue-50）
- 主色调 `#3B82F6`（blue-500）
- 卡片白底 + 轻阴影，hover 微上浮
- 代码块使用 Python 语法高亮（关键词蓝、字符串绿、注释灰、装饰器橙）
- 字体：PingFang SC / Inter，代码用 JetBrains Mono

## 数据层

当前使用 `src/lib/blog-data.ts` 作为静态数据源，包含：
- 9 篇 Python 主题文章（基础语法、数据结构、面向对象、实战练习、标准库）
- 5 个分类、15 个标签
- 每篇文章含完整 Markdown 内容 + Python 代码示例 + 练习题
