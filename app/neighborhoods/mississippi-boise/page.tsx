import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Mississippi Ave / Boise — Good PDX Neighborhoods',
  description: 'North Portland\'s most beloved commercial corridor — indie shops, good food, live music, and Victorian housing stock that survived by accident.',
}

const accent = '#d47c2f'

export default function MississippiBoisePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: '#7a4010' }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-orange-300/70 hover:text-orange-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Mississippi Ave / Boise</h1>
          <p className="text-orange-100/70 text-lg leading-relaxed max-w-2xl">
            Portland's most authentically fun commercial street. Colorful storefronts, live music spilling out of bars, food carts in the parking lots, and Victorian houses on the side streets.
          </p>
          <a href="https://maps.google.com/?q=Mississippi+Avenue+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-orange-300/60 hover:text-orange-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The Boise neighborhood — the residential area surrounding Mississippi Avenue — was platted in the 1880s and grew quickly as North Portland developed. The commercial strip along N Mississippi was a working-class neighborhood main street through most of the 20th century.</p>
            <p>Like Alberta, Mississippi declined economically in the 1980s and early 90s, which meant rents dropped and the Victorian-era housing stock survived intact — there was no money for redevelopment. When the neighborhood revived, starting around 2000, it did so around an existing architectural foundation that newer neighborhoods had demolished decades earlier.</p>
            <p>Mississippi was the subject of Portland's first major debate about gentrification and displacement — <a href="https://www.portlandbridges.com/portland-neighborhoods/00-mississippi.html" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#7a4010' }}>community activists pushed back hard</a> against development patterns they saw as pricing out the neighborhood's Black and working-class residents. That conversation shaped how Portland talks about these issues to this day.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Mississippi Pizza</strong> has live music on a small stage in the back and a menu that has kept people coming back for two decades. <strong>Interurban</strong> is a solid neighborhood bar with good burgers and a patio that fills up on warm evenings. The food cart pods in the neighborhood are some of the better ones in North Portland. <strong>Prost!</strong>, a German beer hall, has become an institution with its massive outdoor biergarten.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Walk the full length of N Mississippi from Fremont to Skidmore. It's about eight blocks and covers a lot of ground: bookshops, vintage clothing, records, ceramics, a kite store, a tattoo parlor, several coffee shops, and more bars than you'll get to in one visit. The side streets — Failing, Shaver, Blandena — have some of Portland's best-preserved Craftsman and Victorian housing.</p>
            <p><strong>ReBuilding Center</strong>, a few blocks away, is a massive nonprofit warehouse selling salvaged building materials and architectural details — one of the more singular Portland institutions, and a good place to find something strange for your house.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The street is named for the Mississippi River but has no geographic connection to it. A developer in the 1880s simply liked the name.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The neighborhood was an early testing ground for Portland's "complete streets" approach — the city redesigned Mississippi Avenue with wider sidewalks, bike lanes, and traffic calming in the 2000s, which accelerated its retail development.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/mississippi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: '#7a4010' }}><ExternalLink className="w-4 h-4" /> Travel Portland — Mississippi</a>
          <a href="https://portlandneighborhood.com/boise-eliot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: '#7a4010' }}><ExternalLink className="w-4 h-4" /> Portland Neighborhood Guide — Boise</a>
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
