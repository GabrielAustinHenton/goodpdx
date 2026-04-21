import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Swimming — Good PDX',
  description: 'Portland and the surrounding region have exceptional swimming holes, rivers, and lakes.',
}

const links = [
  { label: 'Portland Parks — Outdoor Pools', href: 'https://www.portland.gov/parks/outdoor-swimming-pools' },
  { label: 'Columbia River Gorge Swimming Holes', href: 'https://www.oregonhikers.org/field_guide/Category:Swimming' },
  { label: 'Travel Oregon — Swimming', href: 'https://traveloregon.com/things-to-do/outdoor-recreation/water-recreation/swimming/' },
]

export default function SwimPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#0a2a4a] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-blue-300/70 hover:text-blue-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Swimming</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Swimming in & Around Portland</h1>
          <p className="text-blue-100/70 text-lg leading-relaxed max-w-2xl">
            Rivers, lakes, swimming holes, and outdoor pools. Portland's summers are short — make the most of them.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <strong>Sauvie Island</strong> has several popular swimming beaches along the Columbia River. Collins Beach is clothing-optional and family-friendly; Walton Beach is accessible and popular with families. The water is cold even in August — that's part of it.
          </p>
          <p>
            <strong>Blue Lake Regional Park</strong> in Fairview, about 20 minutes from Portland, has a lake beach with lifeguards, swimming areas, and good facilities — a reliable option for families. <strong>Hagg Lake</strong> in the Tualatin Valley is a reservoir with designated swim areas and easy access.
          </p>
          <p>
            In the Gorge, <strong>Punchbowl Falls</strong> near Hood River feeds a natural swimming hole that looks like something out of a tourism brochure. The water is cold. The setting is spectacular. Get there early.
          </p>
          <p>
            Portland Parks runs <a href="https://www.portland.gov/parks/outdoor-swimming-pools" target="_blank" rel="noopener noreferrer" className="text-[#0a2a4a] hover:underline">outdoor pools</a> at several parks during the summer months — including Sellwood, Pier, and Columbia pools.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#0a2a4a] hover:underline">
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
