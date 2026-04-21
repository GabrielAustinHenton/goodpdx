import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Parks — Good PDX',
  description: 'Portland has more park acreage per capita than almost any major American city. Here\'s what to know.',
}

const links = [
  { label: 'Portland Parks & Recreation', href: 'https://www.portland.gov/parks' },
  { label: 'Forest Park Conservancy', href: 'https://forestparkconservancy.org/' },
  { label: 'Hoyt Arboretum', href: 'https://www.hoytarboretum.org/' },
  { label: 'Explore Washington Park', href: 'https://explorewashingtonpark.org/' },
  { label: 'Travel Portland — Parks', href: 'https://www.travelportland.com/things-to-do/outdoors/parks/' },
  { label: 'Oregon Encyclopedia — Forest Park', href: 'https://www.oregonencyclopedia.org/articles/forest_park/' },
]

export default function ParksPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      <div className="bg-[#1d4a2f] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Parks</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Portland's Green Space
          </h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            A forest inside a city, a rose garden above the skyline, and 12 miles of trees you can walk through without ever leaving town. Portland takes its parks seriously.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Forest Park: A Forest, Not a Park</h2>
            <p>
              <a href="https://www.portland.gov/parks/forest-park" target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">Forest Park</a> covers more than 5,200 acres along the eastern slope of the Tualatin Mountains — making it one of the largest urban forests in the United States. It's roughly a mile wide and eight miles long, stretching along the northwest edge of the city with views over the Willamette and Columbia rivers.
            </p>
            <p className="mt-4">
              The park has <a href="https://forestparkconservancy.org/forest-park/" target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">more than 80 miles of trails</a>, anchored by the 30-mile Wildwood Trail — a National Recreation Trail that runs from Washington Park to the northern tip of the park at Newberry Road. Over 110 bird species and 62 mammal species live here. Black-tailed deer, coyotes, and the occasional black bear are documented residents. This isn't a manicured park. It's a forest that happens to be inside city limits.
            </p>
            <p className="mt-4">
              Forest Park was established as a city park in 1948 — the same year Vanport flooded. The Leif Erikson Drive trail, 11.2 miles of unpaved road open to hikers and cyclists, is one of the most-used corridors in the park and a reliable escape from the noise of city life.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Washington Park and Hoyt Arboretum</h2>
            <p>
              Washington Park sits in the West Hills, two miles from downtown, and packs an improbable amount into a single location: the Oregon Zoo, the Portland Children's Museum, the Portland Japanese Garden, the International Rose Test Garden, and <a href="https://www.hoytarboretum.org/" target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">Hoyt Arboretum</a> — a 190-acre living museum of 2,300 tree and shrub species from six continents.
            </p>
            <p className="mt-4">
              Hoyt was founded in 1928 to conserve endangered species. Today it holds one of the most extensive conifer collections in the country, 12 miles of trails, and two miles of accessible paved paths — all free, open daily from 5am to 10pm. About 350,000 people visit each year, most of whom underestimate how long they'll end up staying.
            </p>
            <p className="mt-4">
              The <a href="https://explorewashingtonpark.org/" target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">International Rose Test Garden</a> in Washington Park has been growing roses since 1917, making it the oldest continuously operating public rose test garden in the United States. It's free, it's open year-round, and it's the reason Portland is called the City of Roses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">East Side Greens</h2>
            <p>
              <strong>Mount Tabor Park</strong> sits on an extinct volcanic cinder cone in Southeast Portland — one of the only cities in the continental US with an extinct volcano within city limits. The summit offers sweeping views of the city and Mount Hood. The park has reservoirs, forested trails, and an amphitheater that hosts community events in summer.
            </p>
            <p className="mt-4">
              <strong>Laurelhurst Park</strong>, a National Historic Landmark, is a classic early-20th-century park in the Kerns neighborhood with a large duck pond, old-growth trees, and the kind of layout — designed by the Olmsted Brothers — that rewards slow walking. <strong>Peninsula Park</strong> in North Portland has a formal sunken rose garden and is one of the oldest park rose gardens in the city.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sauvie Island</h2>
            <p>
              Twelve miles north of downtown, <strong>Sauvie Island</strong> is a 26,000-acre island at the confluence of the Willamette and Columbia Rivers — the same land where the Multnomah people lived for centuries before European contact. Today it's a mix of farms, wetlands, wildlife refuges, and beaches. In summer it's berry-picking and swimming. In fall, it's pumpkin patches and corn mazes. Year-round, it's one of the better bird-watching locations in the Pacific Northwest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming to Good PDX</h2>
            <p>
              A full parks directory — trails, accessibility info, dogs allowed or not, seasonal conditions — is coming. For now, <a href="https://www.portland.gov/parks" target="_blank" rel="noopener noreferrer" className="text-[#1d4a2f] hover:underline">Portland Parks & Recreation</a> maintains the authoritative list. If you run a community organization tied to Portland's parks or green spaces, <Link href="/sign-up" className="text-[#1d4a2f] hover:underline">get listed on Good PDX</Link>.
            </p>
          </section>

        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1d4a2f] hover:underline">
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> Back to Good PDX
          </Link>
        </div>
      </div>
    </div>
  )
}
