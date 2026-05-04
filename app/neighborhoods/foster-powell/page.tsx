import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Foster-Powell — Good PDX Neighborhoods',
  description: 'FoPo went from overlooked to one of Portland\'s most talked-about neighborhoods in under a decade — and it\'s still finding itself.',
}

const accent = '#7a2a1a'

export default function FosterPowellPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-red-300/70 hover:text-red-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Foster-Powell</h1>
          <p className="text-red-100/70 text-lg leading-relaxed max-w-2xl">
            Known locally as FoPo, this SE Portland neighborhood was among the last to get discovered — and is making up for lost time.
          </p>
          <a href="https://maps.google.com/?q=Foster-Powell+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-red-300/60 hover:text-red-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Foster-Powell takes its name from Foster Road and Powell Boulevard, the two arterials that form its borders. The neighborhood was developed as working-class housing in the early 20th century and remained one of SE Portland's more affordable and less-heralded areas well into the 2000s — the kind of neighborhood that felt like it had been overlooked.</p>
            <p>That changed rapidly in the 2010s. As rents on SE Division, Hawthorne, and Belmont pushed east, Foster-Powell absorbed a wave of new restaurants, bars, and residents who couldn't afford their first-choice neighborhoods. The Foster Road commercial corridor, once mostly auto shops and discount stores, saw a dramatic transformation — new restaurants, coffee shops, and creative businesses setting up alongside longtime tenants.</p>
            <p>The neighborhood's identity is still being negotiated — longtime working-class residents and newer arrivals coexisting on streets that look quite different than they did fifteen years ago. It's one of the more honest portraits of how Portland's housing market has reshaped neighborhoods across the city.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Foster Road has become one of Portland's more interesting food streets. <strong>Podnah's Pit</strong>, a Texas-style BBQ operation, has drawn lines since it opened. <strong>Slow Bar</strong> is a neighborhood bar institution with a long-standing reputation. The area around SE 52nd and Foster has a density of independent spots unusual for a neighborhood that was largely overlooked not long ago.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Woodstock Park</strong>, at the neighborhood's eastern edge, is one of SE Portland's larger parks — sports fields, a community garden, a spray park in summer, and old-growth firs that predate the neighborhood itself. <strong>Berkeley Park</strong> sits in the heart of the neighborhood and hosts community events through the warmer months.</p>
            <p>The neighborhood is within easy reach of the <strong>Springwater Corridor</strong>, one of the longest urban trails in the country — 21 miles of paved path running from downtown Portland east into Boring, Oregon, passing through some of the city's most interesting industrial and natural landscapes.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>"FoPo" as a neighborhood nickname emerged organically in the 2010s — a self-chosen label that helped rebrand the area as something distinct rather than just the southern edge of other, more famous SE neighborhoods.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Foster Road was historically the primary route for travelers heading south from Portland toward Salem, predating the modern highway system. Its commercial character as a working road shaped the strip mall and auto-oriented development that characterized it for decades.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The neighborhood has a notably high proportion of family-owned, immigrant-run businesses compared to many gentrifying Portland neighborhoods — Vietnamese, Mexican, and Somali-owned establishments that have remained anchors through the transition.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
          <a href="https://www.wweek.com/food/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Willamette Week — Food</a>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
        </div>
      </div>
    </div>
  )
}
