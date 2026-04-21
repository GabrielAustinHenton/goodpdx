import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Transit — Good PDX',
  description: 'Portland\'s transit system — MAX light rail, buses, streetcar, and one of the best cycling cities in the US.',
}

const links = [
  { label: 'TriMet — Trip Planner & Schedules', href: 'https://trimet.org/' },
  { label: 'Portland Streetcar', href: 'https://www.portlandstreetcar.org/' },
  { label: 'Portland Bureau of Transportation — Bikes', href: 'https://www.portland.gov/transportation/walking-biking-transit-safety/bicycling-portland' },
  { label: 'Biketown PDX', href: 'https://www.biketownpdx.com/' },
]

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a2a1a] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Transit</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Getting Around Portland</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Portland has MAX, buses, a streetcar, bike lanes that actually work, and a bike-share system. It's one of the more transit-functional mid-sized cities in the country.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <a href="https://trimet.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a2a1a] hover:underline">TriMet</a> operates Portland's bus and MAX light rail system. The MAX has five lines — Blue, Red, Orange, Yellow, and Green — connecting the airport, Beaverton, Gresham, Clackamas, and Expo Center. A single fare ($2.50) covers buses and MAX with a 2.5-hour transfer window.
          </p>
          <p>
            The <a href="https://www.portlandstreetcar.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a2a1a] hover:underline">Portland Streetcar</a> runs two lines through the central city — the A Loop and B Loop — connecting the Pearl District, NW Portland, PSU, and the Central Eastside. It's slower than MAX but useful for short trips in the urban core and accepts the same TriMet fare.
          </p>
          <p>
            Portland consistently ranks among the top cycling cities in the United States. The city has over 385 miles of bikeways, including a network of low-traffic "neighborhood greenways" designed for comfortable everyday cycling. <a href="https://www.biketownpdx.com/" target="_blank" rel="noopener noreferrer" className="text-[#1a2a1a] hover:underline">Biketown</a>, the city's bike-share system operated in partnership with Nike, has thousands of bikes and e-bikes available across the metro area.
          </p>
          <p>
            Good PDX will feature transit guides, neighborhood walkability info, and resources for getting around Portland without a car.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a2a1a] hover:underline">
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
