import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Nob Hill — Good PDX Neighborhoods', description: 'Victorian-era homes, NW 23rd Avenue\'s boutique corridor, and the neighborhood locals call "Trendy-Third."' }
const accent = '#1d4a2f'
export default function NobHillPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NW Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Nob Hill</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">Portland's most walkable upscale corridor, bordered by Forest Park to the west and the Pearl to the east. The Victorians stayed. The boutiques arrived later.</p>
          <a href="https://maps.google.com/?q=NW+23rd+Avenue+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Nob Hill — named after San Francisco's Nob Hill, in the way that 19th-century American developers borrowed prestigious names liberally — developed as Portland's premier residential neighborhood in the 1880s and 1890s. The city's merchant class built large Italianate and Queen Anne Victorian homes on NW 19th, 20th, 21st, and 23rd. The streetcar ran along 23rd, and the commercial strip that grew along it has been in continuous operation ever since.</p>
            <p>The nickname "Trendy-Third" emerged in the 1990s when the avenue filled with national boutiques and upscale independent shops. Long-term residents used it with mild irony — the neighborhood was already established and didn't need marketing. The name stuck anyway.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Paley's Place</strong>, one of Portland's most enduring fine dining institutions, has been serving Pacific Northwest cuisine on NW 21st since 1995. <strong>Lovely's Fifty Fifty</strong> does wood-fired pizza with an ice cream counter in the same space. <strong>Ken's Artisan Bakery</strong> — among the best bakeries in the Pacific Northwest — is worth showing up early for the morning pastries. <strong>Gado Gado</strong> has put Portland Indonesian food on the national map.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Walking NW 23rd from Burnside to Thurman is about a mile and passes more independently owned shops than almost any comparable stretch in Portland. The residential side streets — particularly NW 19th through 22nd in the blocks north of Burnside — have some of the finest Victorian architecture in the city. The <strong>Thurman Street trailhead</strong> at the north end of NW 23rd is the main access point for Forest Park's lower trail network.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Portland's original streetcar lines ran along NW 23rd, and the curb cuts and track depressions are still visible in parts of the pavement if you know where to look.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Several of the large Victorian mansions on NW 19th and 20th were converted to apartments in the early 20th century, which is why they survived — they were too useful to demolish, and the owners lacked the capital to replace them.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/nob-hill/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Nob Hill</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
