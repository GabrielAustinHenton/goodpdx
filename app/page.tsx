import Link from 'next/link'
import SearchBar from './components/SearchBar'
import {
  UtensilsCrossed, Coffee, TreePine, Footprints, Palette, Music2,
  Clapperboard, BookOpen, Waves, PersonStanding, Hammer, Heart,
  HardHat, ArrowLeftRight, PlaneTakeoff, TrainFront, Building2, LayoutList,
} from 'lucide-react'

const categories = [
  { label: 'Food & Drink', href: '/goodfood', Icon: UtensilsCrossed },
  { label: 'Coffee', href: '/coffee', Icon: Coffee },
  { label: 'Parks', href: '/parks', Icon: TreePine },
  { label: 'Hikes', href: '/hikes', Icon: Footprints },
  { label: 'Arts', href: '/art', Icon: Palette },
  { label: 'Music', href: '/music', Icon: Music2 },
  { label: 'Film & Stage', href: '/filmandstage', Icon: Clapperboard },
  { label: 'History', href: '/history', Icon: BookOpen },
  { label: 'Hot Springs', href: '/hotsprings', Icon: Waves },
  { label: 'Swimming', href: '/swim', Icon: PersonStanding },
  { label: 'Made Here', href: '/manufacturing', Icon: Hammer },
  { label: 'Wellness', href: '/healthbeauty', Icon: Heart },
  { label: 'Infrastructure', href: '/infrastructure', Icon: HardHat },
  { label: 'Bridges', href: '/bridges', Icon: ArrowLeftRight },
  { label: 'Airport', href: '/airport', Icon: PlaneTakeoff },
  { label: 'Transit', href: '/transportation', Icon: TrainFront },
  { label: 'Development', href: '/development', Icon: Building2 },
  { label: 'Directory', href: '/directory', Icon: LayoutList },
]

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
    href: '/history',
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

        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-20 text-center">
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

          <p className="text-green-100/80 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            Discover local businesses, history, parks, arts, and everything that makes Portland worth loving.
          </p>

          <SearchBar />

          {/* Stats */}
          <div className="mt-16 grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-green-300/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="md:hidden mt-10">
            <svg className="w-8 h-8 text-green-300/50 mx-auto animate-big-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Floating card — overlaps hero */}
      <div className="relative z-10 -mt-8 mx-4 md:mx-8 bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Category Grid */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">Browse</p>
              <h2 className="text-3xl font-bold text-gray-900">Explore Portland</h2>
            </div>
            <svg className="hidden md:block w-8 h-8 text-[#2d6a4f]/40 mt-5 shrink-0 animate-big-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {categories.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#2d6a4f]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e8ede6] flex items-center justify-center mb-2.5 group-hover:bg-[#1d4a2f] transition-colors">
                <Icon className="w-5 h-5 text-[#1d4a2f] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-[#1d4a2f] leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Featured Stories */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">Stories</p>
            <h2 className="text-3xl font-bold text-gray-900">From the Community</h2>
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
