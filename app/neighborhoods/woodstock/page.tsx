import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Woodstock — Good PDX Neighborhoods', description: 'A quiet SE Portland neighborhood with a main street that works, a park worth knowing, and 130 years of residential history.' }
const accent = '#2a4a1a'
export default function WoodstockPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Woodstock</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">Platted in 1889, Woodstock has been doing the neighborhood thing — small commercial street, community park, residential side streets — for longer than most Portland neighborhoods have existed.</p>
          <a href="https://maps.google.com/?q=Woodstock+Neighborhood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Woodstock was first platted in 1889 on farmland at the southern edge of what was then East Portland. The area developed slowly through the early 20th century as a working-class residential neighborhood. SE Woodstock Boulevard, the main commercial street, has operated continuously since the 1900s and has the kind of architecture — low-slung brick commercial buildings from the 1920s — that gives a neighborhood its character without calling attention to itself.</p>
            <p>The neighborhood has never been trendy, which is part of why it has remained livable. Housing here has stayed more affordable than comparable neighborhoods closer to the center of the city, and the community character has been shaped more by longtime residents than by development cycles.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Woodstock Wine and Deli</strong> is a neighborhood institution that has outlasted countless trends. <strong>Hammy's Pizza</strong> is a no-frills SE Portland pizza spot with a devoted local following. The Woodstock commercial strip has a good bookstore, coffee options, and enough independent restaurants to spend an afternoon without getting in a car.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Woodstock City Park</strong> — a long, narrow park running along Crystal Springs Creek — anchors the neighborhood's eastern edge. The creek feeds Crystal Springs Rhododendron Garden nearby, which is one of Portland's underrated horticultural treasures, especially in April and May when the rhododendrons bloom. <strong>Reed College</strong> is adjacent to the neighborhood, and its campus — particularly the canyon and the lake — is open to the public.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Reed College's nuclear reactor — yes, a working nuclear reactor, one of only a handful on college campuses in the US — is open for tours. It has operated continuously since 1968.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The name Woodstock predates the famous festival by 80 years. The developer chose it in 1889. The neighborhood has been diplomatically tolerant of the association ever since.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/woodstock/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Woodstock</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
