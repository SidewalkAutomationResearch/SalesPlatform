import { readFileSync } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/markdown'

const DOCS_PATH = path.join(process.cwd(), 'docs')

export default function DocsPage({
  params
}: {
  params: { slug?: string[] }
}) {
  // Default to user-guide if no specific doc is requested
  const slug = params.slug?.length ? params.slug : ['user-guide']
  const docPath = path.join(DOCS_PATH, ...slug) + '.md'
  
  try {
    const content = readFileSync(docPath, 'utf8')
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Documentation</h2>
          <nav className="space-y-2">
            <a href="/docs/technical-architecture" className="block hover:text-primary">
              Technical Architecture
            </a>
            <a href="/docs/user-guide" className="block hover:text-primary">
              User Guide
            </a>
            <a href="/docs/api-documentation" className="block hover:text-primary">
              API Documentation
            </a>
          </nav>
        </aside>
        <main className="md:col-span-3">
          <Markdown content={content} />
        </main>
      </div>
    )
  } catch {
    return notFound()
  }
}
