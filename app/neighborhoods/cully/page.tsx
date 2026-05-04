import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Cully — Good PDX Neighborhoods',
  description: 'Oregon\'s most diverse neighborhood — a community of immigrants, longtime residents, and organizers who have built something distinctive in NE Portland.',
}

const accent = '#2d6a4f'

export default function CullyPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Cully</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Oregon's most racially and ethnically diverse neighborhood — where community organizing, urban agriculture, and a determination not to be displaced are shaping what comes next.
          </p>
          <a href="https://maps.google.com/?q=Cully+Neighborhood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Cully is named for Thomas Cully, an Irish immigrant who farmed the area in the late 19th century. The neighborhood remained largely rural — orchards, truck farms, and scattered residential development — well into the 20th century. Unlike many Portland neighborhoods that were fully built out in the streetcar era, Cully developed more slowly, and its street grid is notably incomplete in places, with dead ends, unimproved lots, and a patchwork character that still distinguishes it.</p>
            <p>That unfinished quality attracted immigrants and working families throughout the 20th century — lower land costs and less neighborhood scrutiny made it accessible when other NE Portland neighborhoods were not. Vietnamese, Mexican, Somali, and Russian immigrant communities all established roots in Cully, giving the neighborhood a demographic complexity unusual even by Portland standards.</p>
            <p>Today, Cully is consistently identified as Oregon's most racially and ethnically diverse neighborhood — a fact that community organizations have worked to protect as development pressure increases. Groups like <a href="https://www.living-cully.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Living Cully</a> have built coalitions to fight displacement and invest in community-controlled assets, including parks, gardens, and affordable housing.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Cully's food scene reflects its diversity in a way that most Portland neighborhoods can't match. <strong>La Auténtica</strong>, a taqueria that earned a national following, operated out of a food cart in Cully before becoming one of Portland's most celebrated spots. The neighborhood's immigrant-owned restaurants and food carts on NE Killingsworth and NE 42nd offer Vietnamese, Mexican, Ethiopian, and Russian options that have served the community long before the neighborhood attracted attention.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong>Cully Community Garden</strong> is one of the largest community gardens in Portland — a product of the neighborhood's urban agriculture culture and one of the Living Cully coalition's early organizing wins. The garden has been a model for community-controlled green space in underserved neighborhoods.</p>
            <p><strong><a href="https://www.verdenw.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Verde</a></strong>, an environmental nonprofit based in Cully, has been a national leader in linking environmental justice with economic development — operating a social enterprise landscaping business while advocating for park access and green jobs in communities of color. Their work in Cully is studied by urban planners and environmental justice advocates nationwide.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>For years, Cully had fewer parks per capita than almost any other neighborhood in Portland — a disparity that community organizers used to build the case for the Cully Park project, which opened a new 25-acre park in the neighborhood in 2016 after a decade of advocacy.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Cully's incomplete street grid is a visible artifact of its patchwork development history — some blocks have paved roads, others gravel, others informal paths through former agricultural lots. The city has been slowly filling in infrastructure that many neighborhoods took for granted decades ago.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Living Cully coalition's anti-displacement work has been cited as a model by housing advocates nationally — an example of community organizing that successfully linked environmental, housing, and economic justice in a single neighborhood strategy.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.living-cully.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Living Cully Coalition</a>
          <a href="https://www.verdenw.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Verde NW</a>
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
