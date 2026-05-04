import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Bridges — Good PDX',
  description: 'Portland has 12 bridges crossing the Willamette River — more than any other city in the US. Here\'s every one of them.',
}

const bridges = [
  {
    name: 'St. Johns Bridge',
    year: 1931,
    type: 'Suspension',
    quadrant: 'N',
    description: 'The most beautiful bridge in Portland by most accounts. The St. Johns Bridge is the only suspension bridge in the city and one of the few in the Pacific Northwest — its Gothic-style towers rise 400 feet above the Willamette and are visible for miles. Engineer David Steinman designed it; it was completed in 1931 at a cost of $4.2 million. Walking or cycling across it on a clear day, with Mount Hood framed in the distance, is one of the best free experiences Portland offers. Cathedral Park, directly beneath the north end, was named for the cathedral-like arches the bridge creates from below.',
    link: 'https://www.oregonencyclopedia.org/articles/st_johns_bridge/',
    linkLabel: 'Oregon Encyclopedia — St. Johns Bridge',
  },
  {
    name: 'Burlington Northern Railroad Bridge 5.1',
    year: 1908,
    type: 'Swing',
    quadrant: 'N',
    description: 'The oldest bridge still standing across the Willamette in Portland, this railroad swing bridge has been in continuous operation since 1908. It carries BNSF freight trains across the river near the confluence with the Columbia. Not accessible to the public, but visible from the riverbanks in North Portland — a working piece of industrial infrastructure that has been doing its job quietly for over a century.',
    link: 'https://www.portland.gov/transportation/bridges',
    linkLabel: 'Portland.gov — Bridges',
  },
  {
    name: 'Broadway Bridge',
    year: 1913,
    type: 'Bascule (drawbridge)',
    quadrant: 'N/NW',
    description: 'The longest bascule bridge in the United States when it was built, the Broadway Bridge connects the Pearl District and NW Portland to the North Williams and Mississippi corridors on the east side. It opens on a counterweight system — the leaves lift by rotating on a horizontal axis, counterbalanced so the draw can be raised with relatively little energy. The bridge carries vehicles, MAX Yellow and Green lines, bikes, and pedestrians. Its distinctive green paint and Beaux-Arts ornamentation make it one of the more photogenic spans on the river.',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Steel Bridge',
    year: 1912,
    type: 'Double-deck vertical lift',
    quadrant: 'NW/NE',
    description: 'An engineering one-of-a-kind: the Steel Bridge is the only vertical lift bridge in the world capable of raising its two decks independently of each other. The lower deck — carrying trains and the Eastbank Esplanade pedestrian path — can lift for river traffic while the upper deck (vehicles and MAX) remains in place, or both decks can lift together for tall vessels. Built in 1912 by the Union Pacific Railroad, it remains one of the most operationally complex bridges in the country. The lower deck, when lowered to river level, sits just a few feet above the water — a striking sight from the Esplanade.',
    link: 'https://www.oregonencyclopedia.org/articles/steel_bridge_portland_/',
    linkLabel: 'Oregon Encyclopedia — Steel Bridge',
  },
  {
    name: 'Burnside Bridge',
    year: 1926,
    type: 'Bascule (drawbridge)',
    quadrant: 'W/E',
    description: 'The central spine of Portland, connecting downtown to the inner east side at the city\'s most historically significant crossing point. The current Burnside Bridge opened in 1926, replacing an earlier swing bridge. It\'s home to the famous Saturday and Sunday Portland Saturday Market beneath its west end, and its east approach abuts the Old Town/Chinatown neighborhood. The bridge has been at the center of Portland civic life — protests, celebrations, and daily commutes — for a century. It\'s also the reference point for Portland\'s address system: addresses count from Burnside (north/south) and the Willamette (east/west).',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Morrison Bridge',
    year: 1958,
    type: 'Bascule (drawbridge)',
    quadrant: 'W/E',
    description: 'The site of Portland\'s first Willamette crossing. A wooden toll bridge opened here in 1887, making it the first fixed crossing of the river in the city. The current concrete bascule bridge dates to 1958. Morrison connects downtown Portland to the inner SE and serves as the primary connection for MAX light rail on the Orange and Green lines. It\'s a workhorse bridge — not the most beautiful, but among the most used. The original 1887 bridge charged a toll of 5 cents for a pedestrian and 25 cents for a horse and rider.',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Hawthorne Bridge',
    year: 1910,
    type: 'Vertical lift',
    quadrant: 'W/SE',
    description: 'The oldest operating vertical lift bridge in the United States — still doing its job after more than 110 years. The Hawthorne Bridge opened in 1910 and has been raised and lowered tens of thousands of times since. It connects downtown to the Hawthorne and Division neighborhoods and is one of the busiest bicycle bridges in the country, carrying more bike traffic than most American bridges carry cars. The bridge\'s operator still manually raises the span from a control booth on the bridge itself when river traffic requires it.',
    link: 'https://www.oregonencyclopedia.org/articles/hawthorne_bridge/',
    linkLabel: 'Oregon Encyclopedia — Hawthorne Bridge',
  },
  {
    name: 'Marquam Bridge',
    year: 1966,
    type: 'Cantilever truss',
    quadrant: 'W/SE',
    description: 'Portland\'s most controversial bridge aesthetically — a double-deck freeway bridge carrying I-5 across the Willamette that has been called an eyesore since it opened in 1966. It carries more traffic than any other bridge in the city (over 100,000 vehicles a day) and is structurally essential, but Portlanders have been debating replacing it with something more attractive since approximately the day it opened. It has no pedestrian or bicycle access. The view from the Marquam, however, is genuinely excellent.',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Tilikum Crossing',
    year: 2015,
    type: 'Cable-stayed',
    quadrant: 'W/SE',
    description: 'The only major bridge in the United States built to carry light rail, buses, bikes, and pedestrians — but no private cars. The Tilikum Crossing opened in 2015 as part of the MAX Orange Line extension to Milwaukie. It was named by the Confederated Tribes of Grand Ronde; "Tilikum" means "people" or "family" in Chinook Jargon. The bridge\'s cables are lit at night with LEDs that change color based on real-time data from the Willamette River — water temperature, flow rate, and fish passage. It\'s the most technologically sophisticated bridge in the city and, depending on who you ask, the most beautiful built in Portland in the modern era.',
    link: 'https://www.oregonencyclopedia.org/articles/tilikum_crossing/',
    linkLabel: 'Oregon Encyclopedia — Tilikum Crossing',
  },
  {
    name: 'Ross Island Bridge',
    year: 1926,
    type: 'Cantilever truss',
    quadrant: 'SW/SE',
    description: 'One of the older fixed spans on the river, the Ross Island Bridge opened in 1926 carrying what would become US Highway 26 across the Willamette near Ross Island. It connects SW Portland to the inner SE and carries significant commuter traffic. The bridge takes its name from Ross Island immediately to its south — a river island with a complicated history, having been extensively mined for gravel through most of the 20th century before restoration efforts began in the 2000s.',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Sellwood Bridge',
    year: 2016,
    type: 'Tied arch',
    quadrant: 'SW/SE',
    description: 'The southernmost bridge in Portland, connecting Sellwood to SW Macadam Avenue. The original Sellwood Bridge, built in 1925, was rated the worst bridge in Oregon for years — a single-lane structure so deteriorated that weight restrictions were placed on it in 2004. After over a decade of planning and debate, the new four-lane bridge opened in 2016, one of the most significant bridge replacement projects in Oregon history. The new bridge preserved the original\'s alignment and neighborhood character while dramatically improving capacity, safety, and multi-modal access.',
    link: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/',
    linkLabel: 'Oregon Encyclopedia — Willamette Bridges',
  },
  {
    name: 'Fremont Bridge',
    year: 1973,
    type: 'Tied arch',
    quadrant: 'NW/N',
    description: 'The tallest bridge in Portland and one of the longest tied-arch bridges in the world. The Fremont Bridge carries I-405 across the Willamette in a single dramatic arch span — its deck sits 175 feet above the river, high enough to clear the tallest vessels using the port. Built in 1973, it was assembled in sections on land and then floated into position before being raised — a construction feat that drew national attention at the time. Like the Marquam, it carries no pedestrians or cyclists, but the view from its deck on a clear day — the city spread out on both sides, the bridges lined up to the south, Mount Hood and Mount St. Helens both visible — is one of Portland\'s best kept non-secrets.',
    link: 'https://www.oregonencyclopedia.org/articles/fremont_bridge/',
    linkLabel: 'Oregon Encyclopedia — Fremont Bridge',
  },
]

const links = [
  { label: 'Willamette Bridges — Oregon Encyclopedia', href: 'https://www.oregonencyclopedia.org/articles/willamette_river_bridges/' },
  { label: 'Portland Bridges — Portland.gov', href: 'https://www.portland.gov/transportation/bridges' },
  { label: 'City of Bridges Walking Tour — Travel Portland', href: 'https://www.travelportland.com/article/portland-bridge-tour/' },
]

export default function BridgesPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a2a3a] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-slate-300/70 hover:text-slate-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Bridges</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland's 12 Bridges</h1>
          <p className="text-slate-100/70 text-lg leading-relaxed max-w-2xl">
            Portland is called the City of Bridges for a reason. Twelve crossings span the Willamette — more than any other American city — and each one has a story worth knowing.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-14">
          <p>
            The first bridge across the Willamette in Portland opened in 1887 — a wooden toll structure at the Morrison Street crossing. Before it, the only way across was by ferry. Today twelve bridges span the river within city limits, ranging from century-old steel drawbridges to a 21st-century cable-stay that carries trains but no cars. No American city has more Willamette crossings, and few have bridges as architecturally or historically varied.
          </p>
          <p className="mt-4">
            They are listed here from north to south.
          </p>
        </div>

        <div className="space-y-10">
          {bridges.map((bridge, i) => (
            <div key={bridge.name} className="border-l-2 border-[#1a2a3a]/20 pl-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1a2a3a]/50 mr-3">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xs font-semibold text-[#1a2a3a]/50">{bridge.type} · {bridge.year}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{bridge.name}</h2>
              <p className="text-gray-700 leading-relaxed">{bridge.description}</p>
              <a href={bridge.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#1a2a3a]/60 hover:text-[#1a2a3a] hover:underline transition-colors">
                <ExternalLink className="w-3 h-3" /> {bridge.linkLabel}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a2a3a] hover:underline">
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
