import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Overlook — Good PDX Neighborhoods', description: 'A quiet North Portland bluff neighborhood with some of the best views of downtown Portland and the bridges.' }
const accent = '#1a3a4a'
export default function OverlookPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-blue-300/70 hover:text-blue-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Overlook</h1>
          <p className="text-blue-100/70 text-lg leading-relaxed max-w-2xl">A neighborhood named with unusual honesty for what it actually does — sit on a bluff above the industrial district with views of downtown, the bridges, and on clear days, Mount Hood and Mount St. Helens.</p>
          <a href="https://maps.google.com/?q=Overlook+Neighborhood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-blue-300/60 hover:text-blue-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Overlook sits on the bluffs above the Willamette River's industrial bank in North Portland, developed in the early 20th century as a residential neighborhood for working and middle-class Portland families. The neighborhood's defining geography — the steep drop from the bluff to the river — kept it separated from the industrial activity below and gave it a remove from the rest of North Portland.</p>
            <p>The commercial strip on N Interstate Avenue, which runs through Overlook's eastern edge, was for decades a declining corridor after the streetcar that ran along it was discontinued in the 1950s. The MAX Yellow Line, which opened on Interstate Avenue in 2004, reversed that decline and triggered a significant reinvestment in the businesses and housing along the corridor.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>N Interstate Avenue has become one of North Portland's better eating streets over the past decade. <strong>Posies Cafe</strong> is a neighborhood bakery institution. The stretch of Interstate between Overlook Park and Shaver has a good concentration of independently owned coffee shops, restaurants, and bars that serve the neighborhood rather than tourists.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Overlook Park</strong>, on N Fremont at the bluff edge, has the views the neighborhood is named for — a long bench-lined overlook facing south toward downtown Portland, the Willamette bridges, and on clear days the volcanic peaks of the Cascades. It's a picnic destination that locals know and visitors almost never find. <strong>Adidas Village</strong>, the North American headquarters of Adidas, occupies the former site of the Blitz-Weinhard Brewery's maltings on N Greeley — the brand has been based in Portland since acquiring the site in 1994.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The MAX Yellow Line on N Interstate was the first light rail line in Portland built specifically through an underserved neighborhood — previous MAX lines had been focused on commuter corridors. The Yellow Line was explicitly designed as a community development tool as much as a transit line.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/overlook/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Overlook</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
