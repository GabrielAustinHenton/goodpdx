import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'St. Johns — Good PDX Neighborhoods', description: 'A Gothic suspension bridge, Cathedral Park, and a neighborhood that was its own city for 26 years before Portland absorbed it.' }
const accent = '#1a3a2f'
export default function StJohnsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">St. Johns</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">At the confluence of the Willamette and Columbia, under a Gothic suspension bridge whose towers were inspired by medieval cathedrals, sits a neighborhood that Portland annexed in 1915 and never quite assimilated.</p>
          <a href="https://maps.google.com/?q=St+Johns+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>St. Johns has older roots than Portland itself. William Clark and eight men camped at the site on April 2, 1806 — it had long been a fishing and gathering place for Indigenous tribes. James John, an English immigrant, settled here in 1847 and operated a ferry across the Willamette. The town of St. Johns incorporated in 1902 and grew into a fully functioning small city with its own schools, fire department, and commercial district.</p>
            <p>Portland annexed St. Johns in 1915 — a consolidation that St. Johns residents resisted and that many have felt ambivalent about for more than a century. The neighborhood is geographically isolated from the rest of Portland, separated by industrial zones and the river. It has retained a small-town character that other Portland neighborhoods absorbed by the city lost decades ago.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The main commercial strip on N Lombard and Philadelphia has expanded significantly in recent years. <strong>Tulip Bakery</strong>, <strong>Proper Eats</strong>, and a growing number of independent coffee shops and restaurants have made St. Johns a destination rather than just a drive-through. The neighborhood still has the working-class diner culture that many Portland neighborhoods have lost.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://en.wikipedia.org/wiki/St._Johns_Bridge" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>St. Johns Bridge</a></strong>, completed in 1931, is the only steel suspension bridge in Portland and is generally considered one of the most beautiful bridges on the West Coast. Designer David Steinman modeled the 400-foot Gothic towers after medieval cathedrals. The view from Cathedral Park below — looking up through the arches with the Willamette in front — is genuinely magnificent and free.</p>
            <p><strong>Cathedral Park</strong>, which takes its name from a 1968 newspaper photograph that described the bridge's arches as cathedral-like, was created through eight years of community fundraising. Howard Galbraith, the unofficial mayor of St. Johns, organized the effort after growing tired of the junkyard that had accumulated under the bridge's eastern tower.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>St. Johns hosts a zombie walk every October that has become one of the stranger Portland traditions — thousands of people in elaborate zombie makeup walking through a small neighborhood commercial district. It's free and absurd and very Portland.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The St. Johns Bridge was built during the Depression for $4.5 million — roughly $80 million in today's money. It took two years to build and has required minimal structural work in the nine decades since.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/st-johns/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — St. Johns</a>
          <a href="https://www.portland.gov/parks/cathedral-park" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Cathedral Park — Portland Parks</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
