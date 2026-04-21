import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Division / Richmond — Good PDX Neighborhoods', description: 'SE Division Street became one of the best food streets in America in the 2010s. The Richmond neighborhood around it has the houses, the parks, and the density to support it.' }
const accent = '#7a2a1a'
export default function DivisionRichmondPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: '#5a1a0a' }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-orange-300/70 hover:text-orange-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Division / Richmond</h1>
          <p className="text-orange-100/70 text-lg leading-relaxed max-w-2xl">SE Division Street had a restaurant boom in the 2010s that put Portland on the national food map. The Richmond neighborhood surrounding it is one of the most livable and densely interesting in the city.</p>
          <a href="https://maps.google.com/?q=SE+Division+Street+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-orange-300/60 hover:text-orange-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Richmond is one of Portland's older Southeast neighborhoods — platted in the late 19th century, built out through the early 20th, and home to a housing stock of Craftsman bungalows and four-squares that has aged gracefully. SE Division Street was a utilitarian commercial strip for most of its existence — hardware stores, laundromats, small groceries.</p>
            <p>The transformation started around 2008–2010, when a wave of chef-driven restaurants discovered that Division rents were lower than Hawthorne or Mississippi, and the foot traffic was building. Within five years it had become the most-written-about food street in Portland, with national coverage in Bon Appétit, the New York Times, and food media generally.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Pok Pok</strong> put Division on the map — Andy Ricker's Thai street food restaurant earned a James Beard award and national attention. <strong>Apizza Scholls</strong>, consistently ranked among the best pizza in America, is a Division institution with a wait that remains legendary. <strong>Ava Gene's</strong> (now Quaintrelle) redefined Portland vegetable-forward cooking. The street also has outstanding Vietnamese, Korean, and Japanese options, plus natural wine bars and cocktail-forward spots that have filled in as the neighborhood matured.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Ladd's Addition</strong> — the historic neighborhood with diagonal streets and rose gardens — borders Richmond to the north and is a 10-minute walk from Division. <strong>Lone Fir Cemetery</strong>, established in 1855 and one of the oldest in Oregon, is a short walk away and genuinely worth an hour if you're interested in Portland history. Many of the city's 19th-century founders are buried there.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Apizza Scholls has a ticketing system for reservations at peak times. The pizza is worth whatever process is required to obtain it.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Division Street boom accelerated Portland's reputation as a food city faster than almost anything else — it was specifically the concentration of serious independent restaurants within a few blocks that drew national attention, not any single restaurant.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/richmond/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: '#5a1a0a' }}><ExternalLink className="w-4 h-4" /> Travel Portland — Richmond</a>
          <a href="https://pdx.eater.com/maps/best-se-division-street-restaurants-portland" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: '#5a1a0a' }}><ExternalLink className="w-4 h-4" /> Eater PDX — Division</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
