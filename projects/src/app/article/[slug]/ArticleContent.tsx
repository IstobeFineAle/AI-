'use client';

import { useMemo } from 'react';

interface ArticleContentProps {
  content: string;
}

interface ParsedBlock {
  type: 'paragraph' | 'heading2' | 'heading3' | 'code' | 'list' | 'blockquote';
  content: string;
  language?: string;
  ordered?: boolean;
}

function parseContent(raw: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];
  const lines = raw.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'code', content: codeLines.join('\n'), language: lang });
      i++;
      continue;
    }

    // Heading 2
    if (line.startsWith('## ')) {
      blocks.push({ type: 'heading2', content: line.slice(3) });
      i++;
      continue;
    }

    // Heading 3
    if (line.startsWith('### ')) {
      blocks.push({ type: 'heading3', content: line.slice(4) });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: 'blockquote', content: quoteLines.join('\n') });
      continue;
    }

    // Unordered list
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: 'list', content: listLines.join('\n'), ordered: false });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listLines: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listLines.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push({ type: 'list', content: listLines.join('\n'), ordered: true });
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph - collect consecutive non-empty lines
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#') && !lines[i].startsWith('```') && !lines[i].startsWith('> ') && !lines[i].startsWith('- ') && !lines[i].startsWith('* ') && !/^\d+\.\s/.test(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', content: paraLines.join(' ') });
    }
  }

  return blocks;
}

function highlightPython(code: string): string {
  const keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'in', 'not', 'and', 'or', 'is', 'with', 'as', 'try', 'except', 'finally', 'raise', 'yield', 'lambda', 'pass', 'break', 'continue', 'True', 'False', 'None', 'global', 'nonlocal', 'assert', 'del'];
  const builtins = ['print', 'len', 'range', 'list', 'dict', 'set', 'tuple', 'int', 'str', 'float', 'bool', 'type', 'isinstance', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'reversed', 'max', 'min', 'sum', 'abs', 'any', 'all', 'open', 'super', 'hasattr', 'getattr', 'setattr'];

  let result = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments
  result = result.replace(/(#.*$)/gm, '<span class="token-comment">$1</span>');

  // Strings (triple quotes)
  result = result.replace(/(&quot;{3}|&#x27;{3})(.*?)\1/g, '<span class="token-string">$1$2$1</span>');

  // Strings (single/double quotes)
  result = result.replace(/((?:f|r|b)?)(&quot;(?:[^&]|&(?!quot;))*?&quot;|&#x27;(?:[^&]|&(?!#x27;))*?&#x27;)/g, function (_match, prefix, str) {
    // Don't re-highlight if already inside a comment span
    return prefix + '<span class="token-string">' + str + '</span>';
  });

  // Decorators
  result = result.replace(/@(\w+)/g, '<span class="token-decorator">@$1</span>');

  // Numbers
  result = result.replace(/\b(\d+(?:\.\d+)?(?:_\d+)*)\b/g, '<span class="token-number">$1</span>');

  // Keywords
  const kwPattern = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');
  result = result.replace(kwPattern, '<span class="token-keyword">$1</span>');

  // Builtins
  const biPattern = new RegExp('\\b(' + builtins.join('|') + ')\\s*(?=\\()', 'g');
  result = result.replace(biPattern, '<span class="token-builtin">$1</span>');

  // Function definitions
  result = result.replace(/(?<=<span class="token-keyword">def<\/span>\s)(\w+)/g, '<span class="token-function">$1</span>');

  // Class definitions
  result = result.replace(/(?<=<span class="token-keyword">class<\/span>\s)(\w+)/g, '<span class="token-class">$1</span>');

  return result;
}

function renderInlineMarkdown(text: string): string {
  let result = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Inline code
  result = result.replace(/`([^`]+)`/g, '<code class="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[0.85em] text-blue-700">$1</code>');

  // Bold
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  return result;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const blocks = useMemo(() => parseContent(content), [content]);

  return (
    <article className="article-content">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading2':
            return (
              <h2 key={idx}>{block.content}</h2>
            );
          case 'heading3':
            return (
              <h3 key={idx}>{block.content}</h3>
            );
          case 'paragraph':
            return (
              <p key={idx} dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(block.content) }} />
            );
          case 'code':
            return (
              <div key={idx} className="code-block my-4">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2 rounded-t-xl">
                  <span className="text-xs font-medium text-slate-500">
                    {block.language || 'python'}
                  </span>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                  </div>
                </div>
                <pre className="overflow-x-auto p-0">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: highlightPython(block.content),
                    }}
                  />
                </pre>
              </div>
            );
          case 'list':
            if (block.ordered) {
              return (
                <ol key={idx}>
                  {block.content.split('\n').map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item) }} />
                  ))}
                </ol>
              );
            }
            return (
              <ul key={idx}>
                {block.content.split('\n').map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item) }} />
                ))}
              </ul>
            );
          case 'blockquote':
            return (
              <blockquote key={idx}>
                {block.content.split('\n').map((line, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(line) }} />
                ))}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
