import Link from 'next/link'
import SearchBar from './components/SearchBar'

const categories = [
  { label: 'Food & Drink', href: '/goodfood', emoji: '🍽️', desc: 'Restaurants, bars, food carts' },
  { label: 'Coffee', href: '/coffee', emoji: '☕', desc: 'Cafés & roasters' },
  { label: 'Parks', href: '/parks', emoji: '🌲', desc: 'Green spaces & trails' },
  { label: 'Hikes', href: '/hikes', emoji: '🥾', desc: 'Day hikes near Portland' },
  { label: 'Arts', href: '/art', emoji: '🎨', desc: 'Galleries & public art' },
  { label: 'Music', href: '/music', emoji: '🎵', desc: 'Venues & local artists' },
  { label: 'Film & Stage', href: '/filmandstage', emoji: '🎭', desc: 'Theaters & cinemas' },
  { label: 'History', href: '/history', emoji: '📜', desc: 'Portland\'s story' },
  { label: 'Hot Springs', href: '/hotsprings', emoji: '♨️', desc: 'Natural soaks nearby' },
  { label: 'Swimming', href: '/swim', emoji: '🏊', desc: 'Pools & swimming holes' },
  { label: 'Manufacturing', href: '/manufacturing', emoji: '🏭', desc: 'Made in Portland' },
  { label: 'Health & Beauty', href: '/healthbeauty', emoji: '💆', desc: 'Wellness & self-care' },
  { label: 'Infrastructure', href: '/infrastructure', emoji: '🏗️', desc: 'How our city works' },
  { label: 'Bridges', href: '/bridges', emoji: '🌉', desc: 'Portland\'s iconic spans' },
  { label: 'Airport', href: '/airport', emoji: '✈️', desc: 'PDX & getting around' },
  { label: 'Transportation', href: '/transportation', emoji: '🚊', desc: 'TriMet, bikes & more' },
  { label: 'Development', href: '/development', emoji: '🏘️', desc: 'Neighborhoods & growth' },
  { label: 'Directory', href: '/directory', emoji: '📋', desc: 'All Portland businesses' },
]

const featuredNews = [
  {
    tag: 'Community Spotlight',
    title: 'Building a Better Portland: Why Benefit Companies Matter',
    excerpt: 'Good PDX LLC is registered as an Oregon Benefit Company — here\'s what that means for you and your community.',
    href: '/blog',
  },
  {
    tag: 'Food & Drink',
    title: 'Portland\'s Food Cart Scene: A Living Tradition',
    excerpt: 'From Alberta Arts District to SE Division, Portland\'s food carts are more than just a meal — they\'re a way of life.',
    href: '/goodfood',
  },
  {
    tag: 'History',
    title: 'Vanport: The City Portland Forgot',
    excerpt: 'The 1948 flood erased Oregon\'s second-largest city overnight. Understanding Vanport is essential to understanding Portland today.',
    href: '/history',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Good PDX
          </h1>
          <p className="text-green-200 text-lg mb-10 max-w-xl mx-auto">
            Your community guide to Portland — businesses, history, food, arts, and everything in between.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore Portland</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group"
            >
              <span className="text-3xl mb-2">{cat.emoji}</span>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-green-700">{cat.label}</span>
              <span className="text-xs text-gray-400 mt-1 leading-tight">{cat.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured News */}
      <section className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">From the Community</h2>
            <Link href="/blog" className="text-sm text-green-700 hover:text-green-800 font-medium">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredNews.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-300 hover:shadow-md transition-all"
              >
                <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Own a Portland business?</h2>
          <p className="text-green-700 mb-6 max-w-lg mx-auto">
            Join Good PDX to connect with other local businesses, reach customers, and be part of something bigger than the bottom line.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors"
          >
            Join the community
          </Link>
        </div>
      </section>
    </div>
  )
}
