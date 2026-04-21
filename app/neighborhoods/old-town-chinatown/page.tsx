import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Old Town / Chinatown — Good PDX Neighborhoods', description: 'Portland\'s oldest neighborhood, the Saturday Market, the Lan Su Chinese Garden, and the complicated reality of a historic district under pressure.' }
const accent = '#2a1a0a'
export default function OldTownChinatownPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Old Town / Chinatown</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">Portland's oldest neighborhood. The city started here. It has the architecture, the history, the tunnels, a world-class Chinese garden, and a set of social challenges that the rest of Portland prefers not to think about.</p>
          <a href="https://maps.google.com/?q=Old+Town+Chinatown+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-amber-300/60 hover:text-amber-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Old Town is where Portland began — the original waterfront settlement that grew from Asa Lovejoy's land claim in 1843. The cast-iron facades along NW 1st and 2nd Avenues date to the 1880s and represent one of the largest concentrations of Italianate cast-iron commercial architecture on the West Coast. The buildings survived because the neighborhood declined before mid-century urban renewal could demolish them.</p>
            <p>Chinatown grew in the blocks north of Burnside beginning in the 1870s. By 1890, <a href="https://en.wikipedia.org/wiki/History_of_Portland,_Oregon" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Portland's Chinatown was the second largest in the US</a> — only San Francisco's was bigger. The Chinese community built schools, temples, and businesses here in the face of significant legal hostility: Oregon had some of the most severe anti-Chinese legislation in the country. The Chinese Exclusion Act of 1882 gutted the population, and the neighborhood slowly contracted.</p>
            <p>Today the Chinatown designation is largely historic — the Chinese-American community is distributed throughout the metro area, and the neighborhood is better known for the Lan Su Chinese Garden, the Saturday Market, and the social service concentration along Burnside that reflects Portland's unresolved homelessness crisis.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Luce</strong> and <strong>Han Oak</strong> (Korean noodles and dumplings in a stunning space) represent the newer restaurant generation in Old Town. <strong>Voodoo Doughnut</strong> on SW 3rd is either a Portland institution or a tourist trap, depending on your perspective — probably both. The Saturday Market food vendors are worth sampling on their own.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://lansugarden.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Lan Su Chinese Garden</a></strong> is a genuine surprise — a full classical Suzhou-style garden built in the block between NW 2nd and 3rd, constructed by artisans from Suzhou, China in 2000. It's a walled world inside the city, and one of the most peaceful places in Portland. The teahouse inside is excellent.</p>
            <p>The <strong>Portland Saturday Market</strong> — the largest continuously operating outdoor arts and crafts market in the US — runs on weekends under the Burnside Bridge from March through December. The quality varies, but the concentration of local makers in one place is unmatched.</p>
            <p>The <strong>Shanghai Tunnels</strong> run beneath these blocks. Tours are available — see our <Link href="/history/crimps-and-shanghai" className="hover:underline" style={{ color: accent }}>history of the crimping era</Link> for context on what's legend and what's documented.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The cast-iron facades on NW 1st and 2nd Avenues were prefabricated in foundries — mostly in New York and San Francisco — and shipped to Portland by sea. The technology allowed buildings to look like stone at a fraction of the cost.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Lan Su Chinese Garden was built with no nails — traditional joinery only. The rocks in the garden were shipped from Lake Tai in China. The garden's name translates as "Garden of Awakening Orchids."</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://lansugarden.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Lan Su Chinese Garden</a>
          <a href="https://www.portlandsaturdaymarket.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Portland Saturday Market</a>
          <a href="https://www.travelportland.com/neighborhoods/old-town-chinatown/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Old Town</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
