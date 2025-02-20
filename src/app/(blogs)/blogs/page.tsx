import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'

import Section from '@/components/Section'
import Container from '@/components/Container'
import { format } from 'date-fns'

interface Frontmatter {
  title: string
  description?: string
  date?: string
  readingTime?: string
  category?: string
}

export const metadata = {
  title: 'Blog Posts',
  description: 'Explore our collection of in-depth articles about web development, programming, and software engineering.'
}

export default async function BlogListing() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/blogs'))

  const posts = await Promise.all(filenames.map(async (filename) => {
    const content = await fs.readFile(path.join(process.cwd(), 'src/blogs', filename), 'utf-8')
    const { frontmatter } = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true
      }
    })
    return {
      filename,
      slug: filename.replace('.mdx', ''),
      ...frontmatter
    }
  }))

  // Sort posts by date if available
  const sortedPosts = posts.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <Section spacing="compact">
      <Container>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-6 text-primary">
              Welcome to My Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tutorials, and stories about web development and software engineering.
            </p>
          </header>

          {/* Blog Posts Grid */}
          <div className="space-y-4 ">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative bg-card hover:bg-card/80 rounded-lg p-6 transition-all duration-200 border-white border-2"
              >
                <Link 
                  href={`/blogs/${post.slug}`}
                  className="block no-underline"
                >
                  {/* Post Category */}
                  {post.category && (
                    <span className="inline-block text-sm font-medium text-primary mb-2">
                      {post.category}
                    </span>
                  )}
                  
                  {/* Post Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Post Description */}
                  {post.description && (
                    <p className="text-muted-foreground text-lg mb-4">
                      {post.description}
                    </p>
                  )}
                  
                  {/* Post Metadata */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {post.date && (
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                    )}
                    {post.readingTime && (
                      <span className="flex items-center">
                        <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground mx-2" />
                        {post.readingTime} min read
                      </span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}