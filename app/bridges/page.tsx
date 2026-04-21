import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Bridges — Good PDX',
  description: 'Portland has 12 bridges crossing the Willamette River — more than any other city in the US.',
}

const links = [
  { label: 'Willamette Bridges — Oregon Encyclopedia', href: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/' },
  { label: 'Portland Bridges — Portland.gov', href: 'https://www.portland.gov/transportation/bridges' },
  { label: 'City of Bridges Walking Tour — Travel Portland', href: 'https://www.travelportland.com/article/portland-bridge-tour/' },
]

export default function BridgesPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a2a3a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-slate-300/70 hover:text-slate-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Bridges</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland's 12 Bridges</h1>
          <p className="text-slate-100/70 text-lg leading-relaxed max-w-2xl">
            Portland is called the City of Bridges for a reason. Twelve crossings span the Willamette — more than any American city — and each one has a story.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            The first bridge across the Willamette in Portland was the <strong>Morrison Bridge</strong>, which opened in 1887. Before it, the only way across was by ferry. Today there are 12 bridges within city limits, ranging from century-old steel drawbridges to the modern Tilikum Crossing.
          </p>
          <p>
            The <strong>Steel Bridge</strong>, built in 1912, is the only lift bridge in the world that can raise its two decks independently — the lower deck for river traffic, the upper for trains. The <strong>Hawthorne Bridge</strong>, also a lift bridge dating to 1910, is the oldest operating vertical lift bridge in the United States. Both are still in daily use.
          </p>
          <p>
            The <strong>Tilikum Crossing</strong>, which opened in 2015, is the only major bridge in the US built to carry light rail, buses, bikes, and pedestrians — but no private cars. It was named by the Confederated Tribes of Grand Ronde; "Tilikum" means "people" or "family" in Chinook Jargon.
          </p>
          <p>
            The <strong>St. Johns Bridge</strong> in North Portland, a suspension bridge built in 1931, is widely considered one of the most beautiful bridges on the West Coast. Its Gothic towers rise 400 feet above the Willamette. Walking or cycling across it on a clear day, with Mount Hood in the distance, is one of the better free experiences Portland offers.
          </p>
          <p>
            Good PDX will build a full bridge guide with history, photos, access info, and walking/cycling routes.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a2a3a] hover:underline">
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
