import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
import EditableContent from '../../components/EditableContent'

export const metadata = {
  title: 'Beaumont-Wilshire — Good PDX Neighborhoods',
  description: 'Beaumont Village on NE Fremont is one of Portland\'s most charming neighborhood commercial strips — elegant homes, independent shops, and a genuinely walkable feel.',
}

const accent = '#2d6a4f'

export default function BeaumontWilshirePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Beaumont-Wilshire</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Beaumont Village — the stretch of NE Fremont around 42nd — is one of the most pleasant neighborhood commercial districts in Portland: independently owned, walkable, and unhurried.
          </p>
          <a href="https://maps.google.com/?q=Beaumont-Wilshire+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <EditableContent pageSlug="neighborhoods/beaumont-wilshire">
        <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Beaumont-Wilshire sits on the Alameda Ridge, one of NE Portland's defining topographic features — a curved remnant of an ancient Missoula Flood gravel bar that gives the neighborhood elevated views and a setting noticeably different from the flat neighborhoods below. Development began in the early 20th century, with the ridge's higher ground and views drawing more affluent residents.</p>
            <p>The neighborhood was developed as a streetcar suburb, with the commercial node at NE Fremont and 42nd — what locals now call Beaumont Village — serving as the commercial heart. The village-scale shops here, many still owner-operated, represent a continuity of neighborhood commercial character that is increasingly rare in growing cities.</p>
            <p>The housing stock is largely intact from the 1910s–1940s — Colonial Revival, Craftsman, and Tudor styles on tree-lined streets. The neighborhood has been stable enough to avoid the kind of wholesale redevelopment that has transformed some adjacent NE Portland areas, while remaining desirable enough to keep its quality.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Beaumont Village on NE Fremont has a small but solid commercial core. <strong>Beaumont Bakery & Café</strong> is the neighborhood anchor — a long-running independent bakery with the loyal clientele that comes from being reliably good for a long time. The strip has a few restaurants, a wine shop, and independent retail that have served the neighborhood for years without the kind of turnover that plagues similar strips elsewhere.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong>Alameda Ridge</strong> itself is worth walking — the streets along the ridge crest offer views south across NE Portland that are among the city's quieter scenic spots. The <a href="https://www.oregonencyclopedia.org/articles/missoula_floods/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Ice Age Missoula Floods</a> deposited the gravel ridge that the neighborhood sits on — a geologic story visible in the neighborhood's topography.</p>
            <p><strong>Wilshire Park</strong>, in the neighborhood's interior, is a well-maintained community park with mature trees. The neighborhood's streets are some of the better walking routes in NE Portland for architecture — a mix of well-preserved early 20th century styles that have largely avoided the mid-century alterations that changed many comparable districts.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Alameda Ridge was formed by the Missoula Floods — catastrophic Ice Age floods from a glacial lake in Montana that periodically burst through an ice dam and swept across the Pacific Northwest. The ridge is composed of gravel and sediment deposited by those floods roughly 13,000–15,000 years ago.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Beaumont-Wilshire has one of the highest rates of owner-occupied housing in NE Portland — a stability that has insulated it somewhat from the rapid tenant turnover and speculative development seen in lower-lying NE neighborhoods.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The neighborhood's Craftsman homes are well-documented by preservation organizations — several have been featured in national publications on early 20th century residential architecture in the Pacific Northwest.</span></li>
          </ul>
        </section>

        </div>
        </EditableContent>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
          <a href="https://portlandneighborhood.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Portland Neighborhood Guide</a>
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
