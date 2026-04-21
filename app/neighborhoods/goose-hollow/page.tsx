import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Goose Hollow — Good PDX Neighborhoods', description: 'Providence Park, a former Portland mayor\'s campaign HQ in a garage, and one of the oldest neighborhood names in the city.' }
const accent = '#1a2a3a'
export default function GooseHollowPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-slate-300/70 hover:text-slate-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">SW Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Goose Hollow</h1>
          <p className="text-slate-100/70 text-lg leading-relaxed max-w-2xl">One of Portland's oldest neighborhood names, a bowl-shaped valley between downtown and the West Hills that has been home to working-class immigrants, a streetcar suburb, and now Providence Park.</p>
          <a href="https://maps.google.com/?q=Goose+Hollow+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-slate-300/60 hover:text-slate-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Goose Hollow gets its name from the actual geese — and the hollows and wetlands they inhabited — that existed in the low-lying area west of downtown Portland before the city drained and graded it for development in the 1870s and 80s. The neighborhood was settled largely by working-class immigrant families and developed as a dense residential area with multiple competing streetcar lines.</p>
            <p>The neighborhood's most famous son is Bud Clark, who ran a bar called the Goose Hollow Inn on SW Jefferson and campaigned for Portland mayor partly out of the bar. He won, served two terms (1985–1992), and became one of Portland's most beloved mayors — known for his accessibility, his eccentricity, and his advocacy for homeless services at a time when most cities were ignoring the issue.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong>Goose Hollow Inn</strong> still operates on SW Jefferson and still serves sandwiches and beer in a space that feels unchanged from the 1980s. This is intentional. The neighborhood has several sports bars serving Providence Park crowds on game days, as well as quieter options on SW 18th and Morrison for non-game-day visits.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong><a href="https://www.providencepark.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Providence Park</a></strong> — home to the Portland Timbers (MLS) and Portland Thorns (NWSL) — is one of the best soccer-specific stadiums in the US and sits in the heart of Goose Hollow. The Thorns are one of the most successful and best-supported women's professional sports teams in the country. A game at Providence Park, surrounded by the Timbers Army or the Rose City Riveters, is a genuine Portland experience.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Bud Clark's famous "Expose Yourself to Art" poster — showing him in a trenchcoat flashing a bronze statue — was taken in 1978, years before he ran for mayor. It became one of Portland's most iconic images and helped define the city's self-image as irreverent and weird.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Providence Park was originally Multnomah Field, opened in 1893. It's one of the oldest continuously used athletic facilities in the Pacific Northwest.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/goose-hollow/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Goose Hollow</a>
          <a href="https://www.providencepark.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Providence Park</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
