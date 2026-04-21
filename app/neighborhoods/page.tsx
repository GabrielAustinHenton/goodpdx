import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Portland Neighborhoods — Good PDX',
  description: 'Portland has 95 officially recognized neighborhoods. Here are 18 of the most distinct, storied, and worth knowing.',
}

const neighborhoods = [
  { name: 'Pearl District', slug: 'pearl-district', tagline: 'From railyard to Portland\'s most transformed neighborhood.', quadrant: 'NW' },
  { name: 'Alberta Arts District', slug: 'alberta-arts-district', tagline: 'Last Thursday, murals, and a history that starts with Vanport.', quadrant: 'NE' },
  { name: 'Mississippi Ave / Boise', slug: 'mississippi-boise', tagline: 'Indie shops, great food, and a main street that earned its reputation.', quadrant: 'N' },
  { name: 'Hawthorne', slug: 'hawthorne', tagline: 'Vintage shops, the Bagdad Theater, and the neighborhood that has always done things its own way.', quadrant: 'SE' },
  { name: 'Division / Richmond', slug: 'division-richmond', tagline: 'One of the best food streets in the country. Seriously.', quadrant: 'SE' },
  { name: 'Nob Hill', slug: 'nob-hill', tagline: 'Victorian streetcars, "Trendy-Third," and the city\'s most walkable upscale corridor.', quadrant: 'NW' },
  { name: 'Old Town / Chinatown', slug: 'old-town-chinatown', tagline: 'Portland\'s oldest neighborhood. Saturday Market, the Lan Su Garden, and the tunnels beneath.', quadrant: 'N' },
  { name: 'Sellwood-Moreland', slug: 'sellwood-moreland', tagline: 'Antique row, an amusement park that opened in 1905, and the most small-town feel in the city.', quadrant: 'SE' },
  { name: 'St. Johns', slug: 'st-johns', tagline: 'A Gothic suspension bridge, Cathedral Park, and a neighborhood that was its own city.', quadrant: 'N' },
  { name: 'Irvington', slug: 'irvington', tagline: 'One of Portland\'s best-preserved historic districts, tree-lined and architecturally serious.', quadrant: 'NE' },
  { name: 'Eliot / Albina', slug: 'eliot-albina', tagline: 'The center of Black Portland. Disinvested, demolished, and slowly rebuilding on its own terms.', quadrant: 'NE' },
  { name: "Ladd's Addition", slug: 'ladds-addition', tagline: 'A diagonal street grid, four rose gardens, and a layout that defied the surveyor.', quadrant: 'SE' },
  { name: 'Woodstock', slug: 'woodstock', tagline: 'Quiet, residential, and home to one of Portland\'s better neighborhood commercial strips.', quadrant: 'SE' },
  { name: 'Montavilla', slug: 'montavilla', tagline: 'Named for a place that never existed. One of Portland\'s most interesting emerging neighborhoods.', quadrant: 'SE' },
  { name: 'Overlook', slug: 'overlook', tagline: 'A North Portland bluff with some of the best views of downtown and the bridges.', quadrant: 'N' },
  { name: 'Kenton', slug: 'kenton', tagline: 'A former company town with a giant Paul Bunyan statue and a DIY community spirit.', quadrant: 'N' },
  { name: 'Goose Hollow', slug: 'goose-hollow', tagline: 'Providence Park, a governor\'s house, and one of Portland\'s oldest neighborhood names.', quadrant: 'SW' },
  { name: 'Concordia', slug: 'concordia', tagline: 'Quiet streets, community gardens, and a stretch of Alberta that the tourists haven\'t fully discovered.', quadrant: 'NE' },
]

const quadrantColors: Record<string, string> = {
  'NW': '#1d4a2f',
  'NE': '#2d6a4f',
  'N': '#d47c2f',
  'SE': '#7a2a1a',
  'SW': '#2a1a4a',
}

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1d4a2f] text-white pt-20 pb-16 px-5">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Neighborhoods</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Neighborhoods</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Portland has 94 officially recognized neighborhoods. These 18 are among the most distinct, most storied, and most worth understanding — each one a different version of what this city is.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: quadrantColors[n.quadrant] ?? '#1d4a2f' }} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: quadrantColors[n.quadrant] ?? '#1d4a2f' }}>
                    {n.quadrant} Portland
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
                <h2 className="font-bold text-gray-900 text-lg mb-1.5 group-hover:text-[#1d4a2f] transition-colors leading-snug">{n.name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{n.tagline}</p>
                <div className="mt-3 text-xs font-semibold flex items-center gap-1" style={{ color: quadrantColors[n.quadrant] ?? '#1d4a2f' }}>
                  Explore <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <p className="text-sm text-gray-400">Portland has <a href="https://www.portland.gov/civic/myneighborhood/about-neighborhood-system#:~:text=There%20are%2094%20City%2Drecognized,serves%20a%20geographic%20neighborhood%20boundary." target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">94 officially recognized neighborhood associations</a>. More neighborhoods coming to Good PDX.</p>
        </div>
      </div>
    </div>
  )
}
