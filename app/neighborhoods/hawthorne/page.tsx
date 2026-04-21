import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Hawthorne — Good PDX Neighborhoods', description: 'Vintage shops, the Bagdad Theater, and the neighborhood that has always done things its own way.' }
const accent = '#7a2a1a'
export default function HawthorneNeighborhoodPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-red-300/70 hover:text-red-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hawthorne</h1>
          <p className="text-red-100/70 text-lg leading-relaxed max-w-2xl">Hawthorne has been Portland's countercultural main street since the 1960s. The crunchy reputation softened, the vintage shops multiplied, the Bagdad Theater endured, and the street somehow stayed itself.</p>
          <a href="https://maps.google.com/?q=Hawthorne+Boulevard+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-red-300/60 hover:text-red-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>SE Hawthorne Boulevard runs east through the Richmond neighborhood from the Willamette River toward Mount Tabor. The street was originally called Asylum Avenue — named for the Oregon State Hospital at the east end, which opened in 1883 and is the setting for Ken Kesey's <em>One Flew Over the Cuckoo's Nest</em>. The city renamed it Hawthorne in 1888, apparently deciding that "Asylum Avenue" was bad for real estate.</p>
            <p>Hawthorne emerged as Portland's hippie and counterculture corridor in the late 1960s — head shops, co-ops, and natural food stores. That identity persisted into the 80s and 90s. The street is more boutique-focused today, but the independent character is intact: almost everything on Hawthorne is locally owned, and the business turnover is slower than on trendier corridors.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Pok Pok</strong> — Andy Ricker's nationally acclaimed Thai restaurant, originally located on SE Division — shaped how Portland understood Southeast Asian food. The Hawthorne area has strong Vietnamese, Thai, and Japanese options alongside longtime Portland institutions like <strong>Bread and Ink Café</strong>. <strong>Burgerville</strong>, the beloved Pacific Northwest regional fast food chain, has a location here that is required eating if you haven't had it.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://www.mcmenamins.com/bagdad-theater-pub" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Bagdad Theater</a></strong> is a 1927 movie palace with Moorish Revival architecture, now operated by McMenamins. You can watch a film while eating a pizza and drinking a beer. Second-run films at very reasonable prices. Do not miss this place.</p>
            <p><strong>Powell's on Hawthorne</strong> (a separate location from the City of Books) specializes in used books and is quieter and more browseable. <strong>Mount Tabor Park</strong> is a 15-minute walk east — an extinct cinder cone with trails, views, and an amphitheater that hosts outdoor films in summer.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Oregon State Hospital on the east end of Hawthorne is where Jack Nicholson's <em>One Flew Over the Cuckoo's Nest</em> was filmed in 1975. The Museum of Mental Health there is worth visiting.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Hawthorne has more used bookstores per block than any other street in Portland — which is saying something in a city with as many bookstores as Portland.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/hawthorne/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Hawthorne</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
