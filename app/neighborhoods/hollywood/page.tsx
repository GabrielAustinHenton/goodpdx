import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
import EditableContent from '../../components/EditableContent'

export const metadata = {
  title: 'Hollywood — Good PDX Neighborhoods',
  description: 'Named for its 1926 movie palace, Hollywood is a NE Portland hub — a transit center, a farmers market, and one of the city\'s great neighborhood theaters.',
}

const accent = '#2d6a4f'

export default function HollywoodPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hollywood</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            A 1926 movie palace, a major transit hub, and a neighborhood commercial district that has held together through a century of change on Sandy Boulevard.
          </p>
          <a href="https://maps.google.com/?q=Hollywood+District+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <EditableContent pageSlug="neighborhoods/hollywood">
        <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The Hollywood neighborhood takes its name from the Hollywood Theatre, a Spanish Colonial Revival movie palace that opened on NE Sandy Boulevard in 1926. The theater was built during a decade of intense development along Sandy — a diagonal arterial cut through Portland's grid that follows an old wagon road to the Columbia River, giving the area a distinctive character that still sets it apart from the surrounding rectangular street pattern.</p>
            <p>The Sandy Boulevard corridor became one of Portland's major commercial strips through the mid-20th century, anchored by the theater and surrounded by shops, diners, and eventually car dealerships. When the suburban mall era hit, the strip declined — but unlike many similar corridors, it held enough of its original fabric to stage a recovery.</p>
            <p>Today Hollywood is a major transit node — the Hollywood Transit Center connects MAX light rail, multiple bus lines, and is one of the busiest transit hubs in the city outside of downtown. The transit investment has driven renewed development and activity in the district, with mixed-use buildings going up around the station area.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The Sandy Boulevard corridor has a long-running mix of dining options. <strong>Gado Gado</strong>, an Indonesian restaurant from the team behind Ox, became an instant Portland favorite. <strong>Por Qué No</strong> has one of the better taqueria setups in the city. The <strong>Hollywood Farmers Market</strong>, running Saturdays from May through October, is one of the more community-oriented markets in the city — smaller than the PSU market but with a distinct neighborhood feel.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://hollywoodtheatre.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Hollywood Theatre</a></strong> is a Portland institution — a 1926 movie palace that now programs art house, repertory, and midnight screenings. The building's exterior is one of the more distinctive pieces of architectural theater remaining in Portland, and the programming (curated by a nonprofit since the 1990s) is reliably interesting.</p>
            <p><strong>Rose City Golf Course</strong>, just north of the Hollywood district, is a public municipal course on the flank of the Alameda Ridge, with views across the city. <strong>Normandale Park</strong> provides green space at the neighborhood's core.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Sandy Boulevard's diagonal cut through Portland's grid was originally a trail used by the Multnomah people, later a wagon road to the Sandy River. It's one of the few streets in Portland that doesn't align to either the Willamette or the Baseline Survey grid.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Hollywood Theatre has been operated as a nonprofit since 1997 — one of the few single-screen neighborhood theaters in the country to survive the multiplex era through a community nonprofit model.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Hollywood Transit Center was one of the key stations in the MAX Red Line expansion that connected Portland to the airport in 2001 — changing how many people relate to this neighborhood as a through-point in the city.</span></li>
          </ul>
        </section>

        </div>
        </EditableContent>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://hollywoodtheatre.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Hollywood Theatre</a>
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
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
