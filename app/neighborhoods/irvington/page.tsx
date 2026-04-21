import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Irvington — Good PDX Neighborhoods', description: 'One of Portland\'s best-preserved historic districts — wide tree-lined streets, Victorian and Craftsman homes, and a neighborhood that has quietly been excellent for 130 years.' }
const accent = '#2d5a3a'
export default function IrvingtonPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Irvington</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">Platted in 1887, Irvington has the widest residential streets in NE Portland, the deepest tree canopy, and a housing stock — Victorians, Craftsmans, Four-Squares — that has been on the National Register of Historic Places since 1992.</p>
          <a href="https://maps.google.com/?q=Irvington+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Irvington was developed as a streetcar suburb in the late 1880s by developers who platted wide lots with setbacks and deed restrictions requiring substantial homes. The neighborhood attracted Portland's professional class — doctors, lawyers, successful merchants — who built the large Victorians and Craftsmans that still define the area. The Irvington Club, a private athletic and social club, opened in 1905 and is still operating on NE Thompson Street.</p>
            <p>The <strong>Irvington Historic District</strong>, placed on the National Register in 1992, covers roughly 2,200 homes in a roughly 16-block-by-16-block area. It's one of the largest historic residential districts in Oregon. The preservation reflects both the quality of the original construction and the economic stability that allowed renovation rather than demolition through the 20th century.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The commercial corridor on NE Broadway runs along Irvington's northern edge and is one of Portland's better neighborhood eating streets. <strong>Tasty n Daughters</strong> and <strong>Tasty n Alder</strong> (the latter on the west side) established the Tasty brand as one of Portland's most dependable brunch institutions. <strong>Grand Central Baking</strong> on Broadway is a Portland classic for bread and pastries.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Walk NE 15th, 17th, or 22nd between Knott and Hancock on a weekday morning. The light comes through the tree canopy in a way that makes it clear why people paid premium prices to live here in 1895. The Craftsman homes are particularly concentrated on NE 15th and 17th. The <strong>Irvington Community Association</strong> runs a well-regarded home tour each spring.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Actor Matt Groening, creator of The Simpsons, grew up in Portland and went to Lincoln High School. Several Springfield street names (Flanders, Lovejoy, Quimby, Burnside) are lifted directly from Portland's street grid — most of them in the Nob Hill/Pearl area, not Irvington, but the connection is well documented.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Irvington neighborhood's deed restrictions from the 1880s explicitly excluded non-white buyers — a racial covenant common in Portland's most desirable neighborhoods. These covenants were ruled unenforceable by the Supreme Court in 1948, but their effect on Portland's racial geography persisted for decades.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/irvington/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Irvington</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
