import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Kenton — Good PDX Neighborhoods', description: 'A former company town built by a meatpacking industry, now anchored by a 31-foot Paul Bunyan statue and one of North Portland\'s most genuine commercial strips.' }
const accent = '#2a1a3a'
export default function KentonPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-purple-300/70 hover:text-purple-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Kenton</h1>
          <p className="text-purple-100/70 text-lg leading-relaxed max-w-2xl">Built by a meatpacking company in 1910 to house its workers. Now home to a 31-foot Paul Bunyan, a distinct small-town character, and residents who are quite happy being at the edge of the city.</p>
          <a href="https://maps.google.com/?q=Kenton+Neighborhood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-purple-300/60 hover:text-purple-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Kenton was a company town. In 1910, the Swift meatpacking company established a major slaughterhouse and processing facility in North Portland, and the Kenton neighborhood was built specifically to house the workers — a planned residential community with Craftsman bungalows, a commercial strip, a park, and a school, all designed to be self-contained.</p>
            <p>The meatpacking industry declined through the mid-20th century and closed entirely by the 1980s. What remained was a working-class neighborhood with good housing stock, genuine community character, and a location near the Columbia River industrial belt that kept real estate values low enough to preserve what was there. The MAX Yellow Line extension to Kenton opened in 2004 and connected the neighborhood to the city in a way it hadn't been before.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The N Denver Avenue commercial strip is genuinely good in a way that doesn't announce itself. <strong>Prost!</strong> (the original location) is a German biergarten that has been drawing crowds from across the city since it opened. <strong>The Hop and Vine</strong> is a wine bar and bottle shop with serious sourcing. Several independent coffee shops and restaurants have filled out the strip without homogenizing it.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong>Paul Bunyan statue</strong> on N Interstate at Denver — 31 feet tall, installed in 1959 for the Oregon Centennial — is one of Portland's most inexplicable public monuments and beloved for exactly that reason. He wears a plaid shirt and holds an axe. There is no particular connection between Paul Bunyan and North Portland. The neighborhood has embraced him entirely.</p>
            <p><strong>Kenton Park</strong>, the neighborhood's central green space, hosts the <strong>Kenton Farmers Market</strong> on Sundays in summer — one of the smaller but more genuine neighborhood markets in the city.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Swift plant at the north end of Kenton processed up to 3,000 animals per day at its peak. The smell was, by all historical accounts, significant. Residents who grew up in the neighborhood in the 1940s and 50s describe it as simply part of the air.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Kenton was the site of one of Portland's most unusual civic experiments: in 2019 the city approved a tiny house village specifically for homeless veterans on a city-owned lot. It became a national model for similar programs.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/kenton/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Kenton</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
