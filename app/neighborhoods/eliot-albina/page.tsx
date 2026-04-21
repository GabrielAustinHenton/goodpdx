import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Eliot / Albina — Good PDX Neighborhoods', description: 'The center of Black Portland — built by the community that came north for the shipyards, broken up by urban renewal and a hospital expansion, and slowly rebuilding.' }
const accent = '#3a1a0a'
export default function EliotAlbinaPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-orange-300/70 hover:text-orange-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Eliot / Albina</h1>
          <p className="text-orange-100/70 text-lg leading-relaxed max-w-2xl">The center of Black Portland for most of the 20th century. Flooded out of Vanport, redlined into Albina, then displaced again by urban renewal. The story of this neighborhood is the story of Portland's racial history.</p>
          <a href="https://maps.google.com/?q=Eliot+Neighborhood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-orange-300/60 hover:text-orange-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>To understand Eliot, you have to start with Vanport. When the 1948 flood destroyed Oregon's second-largest city overnight, Portland's 6,000 Black residents — who had come north to work the Kaiser Shipyards during World War II — had almost nowhere to go. Racial covenants and redlining closed most of Portland's neighborhoods to them. The Albina district, a historically working-class area of NE Portland, was one of the few places they could rent or buy.</p>
            <p>Through the 1950s and 60s, the area around Williams, Vancouver, and Mississippi Avenues became the cultural and commercial heart of Black Portland — Black-owned businesses, churches, jazz clubs, and community organizations. It was a community built under constraint, but it was built.</p>
            <p>Then the city took it apart. <a href="https://habitatportlandregion.org/race-and-housing-part-iii-under-the-guise-of-renewal/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Emanuel Hospital's expansion in the 1970s</a> demolished over 300 homes. Interstate 5 cut through the neighborhood. Urban renewal programs demolished more than 1,100 homes across the broader Albina district — the overwhelming majority owned by Black families. The combination of these interventions effectively destroyed the economic base of Black Portland and forced another generation of displacement.</p>
            <p>By 2010, the percentage of Black residents in Boise (the neighborhood north of Eliot) had fallen to 26.6%, down from 48% in 2000. Portland has been called <a href="https://rethinkingschools.org/articles/the-most-gentrified-city-of-the-century/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>the most gentrified city in the country</a>. Albina is the primary reason why.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Being Built Now</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><a href="https://www.albinavision.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Albina Vision Trust</a> is a community-led organization working to reclaim and reimagine the area that was destroyed by urban renewal — particularly the land taken for Memorial Coliseum and the Rose Quarter. Their first major project, Albina One, a 94-unit affordable housing development in the Eliot neighborhood, broke ground with the first families expected in 2025.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong>N Williams Avenue corridor</strong> has become one of Portland's best cycling and dining streets — a dense stretch of restaurants and shops accessible by the protected bike lane that runs its length. The irony that this was made possible partly by displacing the community that built it here is not lost on anyone who has paid attention to the history.</p>
            <p><strong>Vancouver Avenue First Baptist Church</strong>, one of the oldest Black churches in Portland, has stood in the neighborhood since 1888 and remains a community anchor. The <a href="https://www.eliotoralhistories.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Eliot Oral Histories project</a> is an extraordinary archive of firsthand accounts from longtime residents.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Eliot neighborhood is named after Thomas Lamb Eliot, a Unitarian minister who founded several Portland charitable institutions in the late 19th century — including what would become the Oregon Historical Society. He was progressive by the standards of his time, though the neighborhood named after him endured some of the most severe racial injustice in the city's history.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.albinavision.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Albina Vision Trust</a>
          <a href="https://www.eliotoralhistories.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Eliot Oral Histories</a>
          <a href="https://eliotneighborhood.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Eliot Neighborhood Association</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
