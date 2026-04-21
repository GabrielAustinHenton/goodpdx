import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: "Ladd's Addition — Good PDX Neighborhoods", description: "Portland's oldest planned residential neighborhood — a diagonal street grid, four rose gardens, and a layout that defied its own surveyor." }
const accent = '#4a2a1a'
export default function LaddsAdditionPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-rose-300/70 hover:text-rose-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Ladd's Addition</h1>
          <p className="text-rose-100/70 text-lg leading-relaxed max-w-2xl">In 1891, William S. Ladd platted a neighborhood with a diagonal street grid against his surveyor's advice, placed four rose gardens at the compass points, and built something Portland has been puzzling over and loving ever since.</p>
          <a href="https://maps.google.com/?q=Ladd's+Addition+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-rose-300/60 hover:text-rose-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>William S. Ladd was a banker and two-term Portland mayor who owned a 126-acre farm in what was then East Portland. When the city merged with East Portland in 1891, he subdivided his land for residential development — but instead of following the standard orthogonal grid, he designed a <a href="https://www.oregonencyclopedia.org/articles/ladd_s_addition_portland_/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>diagonal "wagon wheel" street pattern</a> with a central park and four diamond-shaped rose gardens at the cardinal points.</p>
            <p>His surveyor reportedly thought it was a terrible idea. Ladd did it anyway. The diagonal streets create blocks that are technically irregular — your GPS will sometimes struggle with intersections that don't quite align — but the effect is a neighborhood that feels different from the moment you enter it. You're not on a grid anymore.</p>
            <p>The rose gardens were formally planted in 1909 under park superintendent Emanuel Mische, with over 3,000 roses of sixty varieties in a stained-glass arrangement. The <a href="https://www.tclf.org/ladds-addition" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>neighborhood was placed on the National Register of Historic Places in 1988</a>.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Paadee</strong>, a Thai restaurant on SE Clinton at the edge of Ladd's Addition, has one of the best cocktail programs in SE Portland to match its consistently excellent food. <strong>Stumptown Coffee</strong> has a location on SE Belmont nearby. The neighborhood itself is predominantly residential — the surrounding streets (Clinton, Division, Hawthorne, Belmont) provide the commercial options.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Walk the full circuit of the rose gardens in May or June when they're in peak bloom. The <strong>central circle</strong> — Ladd Circle Park — has a large central garden surrounded by residential streets and is one of the quieter parks in SE Portland. The diagonal streets mean that every walk in Ladd's Addition eventually surprises you with an intersection you didn't expect.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The layout bears a passing resemblance to Washington D.C.'s L'Enfant plan, and local legend says Ladd was inspired by it. Historians have found no evidence he ever visited D.C. He just liked the idea of diagonal streets.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The <a href="https://www.planning.org/greatplaces/neighborhoods/2009/laddsaddition.htm" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>American Planning Association named Ladd's Addition one of America's Great Neighborhoods</a> in 2009.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.oregonencyclopedia.org/articles/ladd_s_addition_portland_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Oregon Encyclopedia — Ladd's Addition</a>
          <a href="https://www.portland.gov/parks/ladd-circle-park-and-rose-gardens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Ladd Circle Park — Portland Parks</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
