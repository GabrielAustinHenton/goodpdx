import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Portland History — Good PDX',
  description: 'Portland was named by a coin toss, built by a river, and shaped by decisions — good and bad — that still echo today.',
}

const articles = [
  { title: 'The People Before Portland', href: '/history/the-people-before', excerpt: 'For 11,000 years before a coin toss named this city, the Chinookan peoples lived, traded, and thrived on this same ground. Here is their story.' },
  { title: 'Vanport: The City Portland Forgot', href: '/history/vanport', excerpt: 'The 1948 flood erased Oregon\'s second-largest city in under ten minutes. 18,500 people homeless by sunset.' },
  { title: 'Crimps and the Shanghai Trade', href: '/history/crimps-and-shanghai', excerpt: 'In the 1880s and 1890s Portland was the shanghaing capital of the world. Men were drugged, kidnapped, and sold to ship captains. This is how it worked.' },
]

const links = [
  { label: 'Oregon Encyclopedia — Portland', href: 'https://www.oregonencyclopedia.org/articles/portland/' },
  { label: 'Oregon History Project', href: 'https://www.oregonhistoryproject.org/' },
  { label: 'OPB — Portland History', href: 'https://www.opb.org/article/2022/02/08/portland-oregon-history-on-its-incorporation-anniversary/' },
  { label: 'History of Portland, Oregon — Wikipedia', href: 'https://en.wikipedia.org/wiki/History_of_Portland,_Oregon' },
  { label: 'Oregon Historical Society', href: 'https://www.ohs.org/' },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      <div className="bg-[#2a1f14] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">History</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Portland History
          </h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            Named by a coin toss. Built by a river. Shaped by choices — some visionary, some shameful — that still define the city today.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">

        <div className="space-y-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-1">The Basics</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A City Decided by Chance</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              In 1843, William Overton and Asa Lovejoy staked a land claim on the west bank of the Willamette. Two years later, Lovejoy and a new partner — Francis Pettygrove of Portland, Maine — flipped a coin to name the settlement. Pettygrove won. Portland, Oregon was incorporated on <a href="https://www.opb.org/article/2022/02/08/portland-oregon-history-on-its-incorporation-anniversary/" target="_blank" rel="noopener noreferrer" className="text-[#2a1f14] hover:underline">February 8, 1851</a>.
            </p>
            <p>
              The land had been home to the <a href="https://www.oregonencyclopedia.org/articles/portland/" target="_blank" rel="noopener noreferrer" className="text-[#2a1f14] hover:underline">Multnomah people</a> — a band of Upper Chinook — for centuries before European contact. Their village at Sauvie Island was one of the most populous in the region. The transition from Indigenous land to American city happened fast, and violently.
            </p>
            <p>
              By the 1870s Portland was a legitimate port city. By the 1880s the Northern Pacific Railroad connected it to the rest of the country. From 1880 to 1910, <a href="https://en.wikipedia.org/wiki/History_of_Portland,_Oregon" target="_blank" rel="noopener noreferrer" className="text-[#2a1f14] hover:underline">Portland's Chinatown was the second largest in the US</a> — only behind San Francisco. The infamous Shanghai Tunnels ran beneath the waterfront, used to move goods and, by some accounts, unwilling sailors. The Rose Festival began in 1901. The Lewis & Clark Centennial Exposition in 1905 put Portland on the national map.
            </p>
            <p>
              The 20th century brought shipyards, wartime housing, catastrophic flood, and decades of decisions about who got to stay in which neighborhoods. That history is Portland's history — and it's still being reckoned with.
            </p>
          </div>
        </div>

        {articles.length > 0 && (
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-5">Long Reads</p>
            <div className="space-y-4">
              {articles.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="h-1 w-8 bg-amber-600 rounded mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#2a1f14] transition-colors">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
                  <div className="mt-3 text-xs font-semibold text-amber-700 flex items-center gap-1">
                    Read more <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Further Reading</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#2a1f14] hover:underline">
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> Back to Good PDX
          </Link>
        </div>
      </div>
    </div>
  )
}
