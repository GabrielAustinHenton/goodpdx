import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
import EditableContent from '../../components/EditableContent'

export const metadata = {
  title: 'Multnomah Village — Good PDX Neighborhoods',
  description: 'SW Portland\'s most charming commercial district feels like a separate small town — independent bookstore, local restaurants, and a neighborhood that has resisted chain retail.',
}

const accent = '#2a1a4a'

export default function MulnomahVillagePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-purple-300/70 hover:text-purple-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">SW Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Multnomah Village</h1>
          <p className="text-purple-100/70 text-lg leading-relaxed max-w-2xl">
            A small-town main street tucked into SW Portland's hills — independent shops, a beloved bookstore, and the distinct feeling that this place has been here a while and intends to stay.
          </p>
          <a href="https://maps.google.com/?q=Multnomah+Village+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-purple-300/60 hover:text-purple-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <EditableContent pageSlug="neighborhoods/multnomah-village">
        <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Multnomah Village has one of the more distinct origin stories in Portland's neighborhoods. It was originally the town of Multnomah — an independent incorporated municipality with its own city hall, fire department, and schools. Founded in 1903, Multnomah incorporated as its own city and operated independently for nearly two decades before Portland annexed it in 1925.</p>
            <p>That independent heritage left its mark on the built environment. The main street — SW Capitol Highway — has the feel of a small-town commercial district from the 1920s and 1930s, with low-rise brick storefronts and buildings that predate Portland's annexation. Unlike many neighborhood commercial strips that lost their character to suburban retrofits, Multnomah Village held together.</p>
            <p>The neighborhood sits in SW Portland's hills, separated from the rest of the city by topography and the Barbur Boulevard corridor. That geographic separation has contributed to a sense of insularity and community cohesion that residents tend to describe as one of the neighborhood's most valued characteristics.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The main street strip has a mix of independent restaurants and longtime neighborhood spots. <strong>Fat City Café</strong> is a neighborhood institution — breakfast all day, booths, and the kind of unpretentious comfort food that keeps a diner busy for decades. The village has avoided the chain retail that characterizes similar commercial districts elsewhere, keeping a mix of locally owned businesses that gives the strip a coherent character.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong><a href="https://www.booksaroundthecorner.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Books Around the Corner</a></strong> is one of Portland's cherished independent bookshops — a small, well-curated neighborhood bookstore of the type that has been disappearing everywhere except Portland. It is exactly what a neighborhood bookstore should be.</p>
            <p><strong>Gabriel Park</strong>, the largest park in SW Portland, is a few blocks from the village — 90 acres of off-leash dog area, sports fields, community gardens, and a skate park that has been popular with SW residents for years. The park connects to a network of trails in the Fanno Creek Greenway.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Multnomah was an independent city from 1903 until Portland annexed it in 1925. The old Multnomah City Hall building still stands on SW Capitol Highway — now a private business, but the structure is original.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The name "Multnomah" comes from the Multnomah people, a Chinookan-speaking group who lived at the confluence of the Willamette and Columbia rivers. The name is believed to derive from a word meaning "down the river."</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Multnomah Village is one of the few Portland neighborhoods that has never had a Starbucks on its main commercial street — a fact that its residents mention with a certain amount of pride.</span></li>
          </ul>
        </section>

        </div>
        </EditableContent>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
          <a href="https://www.booksaroundthecorner.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Books Around the Corner</a>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
        </div>
      </div>
    </div>
  )
}
