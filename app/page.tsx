import Link from 'next/link'
import SearchBar from './components/SearchBar'
import CategoryGrid from './components/CategoryGrid'

const featuredStories = [
  {
    tag: 'Community',
    title: 'Why Good PDX is a Benefit Company',
    excerpt: 'Our LLC is structured to serve the community, not just shareholders — here\'s what that means in practice.',
    href: '/blog',
    accent: '#1d4a2f',
  },
  {
    tag: 'Food',
    title: 'Portland\'s Food Cart Scene',
    excerpt: 'From Alberta Arts to SE Division, food carts are the pulse of Portland\'s culinary identity.',
    href: '/goodfood',
    accent: '#d47c2f',
  },
  {
    tag: 'History',
    title: 'Vanport: The City We Forgot',
    excerpt: 'The 1948 flood erased Oregon\'s second-largest city overnight. Understanding Vanport means understanding Portland.',
    href: '/history/vanport',
    accent: '#5a4a3a',
  },
]

const stats = [
  { value: '650K+', label: 'Portlanders' },
  { value: '18', label: 'Neighborhoods' },
  { value: '12', label: 'Bridges' },
  { value: '1851', label: 'Founded' },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-[#1d4a2f] overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}
        />

        <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-sm text-green-200 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Portland, Oregon
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            The good side<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              of Portland
            </span>
          </h1>

          <p className="text-green-100/80 text-lg md:text-xl mb-6 max-w-lg mx-auto leading-relaxed">
            Discover local businesses, history, parks, arts, and everything that makes Portland worth loving.
          </p>

          <SearchBar />

          {/* Stats */}
          <div className="mt-8 grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-green-300/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="md:hidden mt-10">
            <a href="#explore" aria-label="Scroll to explore">
              <svg className="w-8 h-8 text-green-300/50 mx-auto animate-big-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Floating card — overlaps hero */}
      <div className="relative z-10 -mt-8 mx-4 md:mx-8 bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Category Grid */}
      <section id="explore" style={{ scrollMarginTop: '7rem' }} className="max-w-6xl mx-auto px-5 pt-3 pb-3">
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">Browse</p>
              <h2 className="text-3xl font-bold text-gray-900">Explore Portland</h2>
            </div>
            <a href="#explore" aria-label="Scroll to explore">
              <svg className="hidden md:block w-8 h-8 text-[#2d6a4f]/40 mt-5 shrink-0 animate-big-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
        <CategoryGrid />
      </section>

      {/* Featured Stories */}
      <section id="community" style={{ scrollMarginTop: '7rem' }} className="max-w-6xl mx-auto px-5 pt-8 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">Stories</p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-gray-900">From the Community</h2>
              <a href="#community" aria-label="Scroll to stories">
                <svg className="hidden md:block w-8 h-8 text-[#2d6a4f] mt-1 shrink-0 animate-big-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
          <Link href="/blog" className="text-sm text-[#1d4a2f] hover:text-[#2d6a4f] font-semibold flex items-center gap-1">
            All stories <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredStories.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: story.accent }} />
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: story.accent }}>
                  {story.tag}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:text-[#1d4a2f] transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{story.excerpt}</p>
                <div className="mt-4 text-xs font-semibold flex items-center gap-1" style={{ color: story.accent }}>
                  Read more <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Around Portland */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">The Web</p>
            <h2 className="text-3xl font-bold text-gray-900">Around Portland</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              category: 'Food & Drink',
              links: [
                { label: 'Eater Portland', href: 'https://pdx.eater.com/' },
                { label: 'Portland Monthly — Eat & Drink', href: 'https://www.pdxmonthly.com/eat-and-drink' },
                { label: 'Willamette Week — Food', href: 'https://www.wweek.com/food/' },
              ],
            },
            {
              category: 'Travel & Tourism',
              links: [
                { label: 'Travel Portland', href: 'https://www.travelportland.com/' },
                { label: 'Travel Oregon — Portland', href: 'https://traveloregon.com/places-to-go/cities/portland/' },
                { label: 'Portland.gov — Visiting', href: 'https://www.portland.gov/visiting' },
              ],
            },
            {
              category: 'News & Culture',
              links: [
                { label: 'Willamette Week', href: 'https://www.wweek.com/' },
                { label: 'Portland Mercury', href: 'https://www.portlandmercury.com/' },
                { label: 'Portland Monthly', href: 'https://www.pdxmonthly.com/' },
                { label: 'The Skanner', href: 'https://www.theskanner.com/' },
              ],
            },
            {
              category: 'Neighborhoods',
              links: [
                { label: 'Portland Neighborhood Guide', href: 'https://portlandneighborhood.com/' },
                { label: 'Travel Portland — Neighborhoods', href: 'https://www.travelportland.com/neighborhoods/' },
                { label: 'City Cast Portland', href: 'https://portland.citycast.fm/' },
              ],
            },
          ].map((col) => (
            <div key={col.category}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{col.category}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1d4a2f] hover:underline flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <svg className="w-3 h-3 text-gray-300 group-hover:text-[#1d4a2f] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-16 pt-4">
        <div className="relative bg-[#1d4a2f] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}
          />
          <div className="relative px-10 py-14 md:flex items-center justify-between gap-8">
            <div>
              <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-2">For business owners</p>
              <h2 className="text-3xl font-bold text-white mb-3">Own a Portland business?</h2>
              <p className="text-green-100/70 max-w-md leading-relaxed">
                Join Good PDX to connect with the community, reach local customers, and be part of something bigger than the bottom line.
              </p>
            </div>
            <div className="mt-8 md:mt-0 shrink-0">
              <Link
                href="/sign-up"
                className="inline-block bg-white text-[#1d4a2f] px-8 py-3.5 rounded-xl font-bold hover:bg-green-50 transition-colors text-sm"
              >
                Join the community
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div> {/* end floating card */}

    </div>
  )
}
