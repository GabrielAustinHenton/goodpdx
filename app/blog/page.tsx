import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Blog — Good PDX',
  description: 'Stories, ideas, and updates from Good PDX.',
}

const posts = [
  {
    tag: 'Community',
    title: 'Why Good PDX is a Benefit Company',
    excerpt: 'Our LLC is structured to serve the community, not just shareholders — here\'s what that means in practice.',
    href: '/blog/benefit-company',
    accent: '#1d4a2f',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1d4a2f] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Blog</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">From Good PDX</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Stories, updates, and ideas from the team behind Good PDX.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: post.accent }} />
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider mb-3" style={{ color: post.accent }}>
                  {post.tag}
                </span>
                <h2 className="font-bold text-gray-900 text-xl mb-2 leading-snug group-hover:text-[#1d4a2f] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-xs font-semibold flex items-center gap-1" style={{ color: post.accent }}>
                  Read more <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> Back to Good PDX
          </Link>
        </div>
      </div>
    </div>
  )
}
