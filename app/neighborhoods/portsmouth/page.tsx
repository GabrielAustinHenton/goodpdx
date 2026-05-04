import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Portsmouth — Good PDX Neighborhoods',
  description: 'A working-class North Portland neighborhood with deep roots, genuine diversity, and a community character that doesn\'t depend on being discovered.',
}

const accent = '#d47c2f'

export default function PortsmouthPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portsmouth</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            One of North Portland's most genuinely diverse neighborhoods — working-class, community-oriented, and comfortable with who it is.
          </p>
          <a href="https://maps.google.com/?q=Portsmouth+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-amber-300/60 hover:text-amber-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Portsmouth developed in the early 20th century as one of North Portland's working-class residential neighborhoods, named after Portsmouth, New Hampshire by early settlers. The neighborhood sits north of Kenton and east of the University Park bluff, close enough to the Columbia River and the North Portland industrial corridor to have been shaped by the economic rhythms of those industries.</p>
            <p>Like many North Portland neighborhoods, Portsmouth was significantly affected by the Vanport flood of 1948, which displaced thousands of residents — many of them Black workers who had come to Portland for wartime shipbuilding jobs at the Kaiser shipyards. The subsequent displacement and redlining concentrated Black residents in North Portland neighborhoods including Portsmouth, a history that shaped the neighborhood's demographics through the rest of the 20th century.</p>
            <p>Portsmouth today is one of the more economically and racially diverse neighborhoods in Portland — a mix of longtime homeowners, families, and newer arrivals who have come as rents in more central neighborhoods have risen. The neighborhood has a community character built on long-term residency rather than the kind of commercial scene that defines more visible Portland neighborhoods.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Portsmouth's N Lombard Street corridor has a mix of family-owned restaurants reflecting the neighborhood's diversity — Vietnamese, Mexican, and soul food establishments alongside older diners and fast-casual spots. The neighborhood has not been transformed by the restaurant investment that hit nearby Kenton and Mississippi, which means the food options are more oriented toward the people who actually live here.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Portsmouth Park</strong> is a neighborhood green space with sports fields and community facilities that serve as a genuine neighborhood gathering point. <strong>Peninsula Park</strong>, one of Portland's most beloved early parks, is at the neighborhood's southeast edge — featuring one of the oldest public rose gardens in the city and the kind of formal park design that reflects the City Beautiful movement of the early 1900s.</p>
            <p>The neighborhood is close to the <strong>Columbia Slough</strong> trail system — a network of trails along the slough that runs parallel to the Columbia River, offering wildlife viewing and quiet paddling in an industrial corridor that has been partially reclaimed for recreation.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Peninsula Park's sunken rose garden, completed in 1913, is one of the oldest public rose gardens in Portland — predating the more famous International Rose Test Garden in Washington Park by four years.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Portsmouth and the surrounding North Portland neighborhoods were among the areas most heavily affected by the Federal Housing Administration's redlining policies in the 1930s–1960s, which systematically denied home loans to Black residents and concentrated disinvestment in neighborhoods with Black populations.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Columbia Corridor, which borders Portsmouth to the north, is one of the largest industrial employment zones in Oregon — a legacy of the area's history as a hub for wartime manufacturing, warehousing, and distribution.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.portland.gov/parks/peninsula-park" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Peninsula Park — Portland Parks</a>
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
