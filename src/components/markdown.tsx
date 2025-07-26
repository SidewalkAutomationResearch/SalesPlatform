'use client'

import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
})

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
          ),
          code: ({ node, className, ...props }) => (
            <code
              className={cn(
                'bg-muted rounded px-1 py-0.5 text-sm',
                className
              )}
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre className="bg-muted rounded-lg p-4 my-4 overflow-x-auto" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
