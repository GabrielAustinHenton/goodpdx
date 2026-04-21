import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'PDX Airport — Good PDX',
  description: 'Portland International Airport — one of the most consistently well-regarded airports in the US.',
}

const links = [
  { label: 'Portland International Airport (PDX)', href: 'https://www.pdx.com/' },
  { label: 'TriMet MAX Red Line — Airport', href: 'https://trimet.org/max/redline/' },
  { label: 'PDX — Wikipedia', href: 'https://en.wikipedia.org/wiki/Portland_International_Airport' },
]

export default function AirportPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#0a1a2a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sky-300/70 hover:text-sky-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Airport</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland International Airport</h1>
          <p className="text-sky-100/70 text-lg leading-relaxed max-w-2xl">
            PDX has ranked as one of the best airports in North America for years running. It also has a carpet people write sonnets about.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <a href="https://www.pdx.com/" target="_blank" rel="noopener noreferrer" className="text-[#0a1a2a] hover:underline">Portland International Airport</a> has been ranked the best airport in North America by Condé Nast Traveler readers multiple times. It handles around 20 million passengers annually, serves over 100 destinations, and manages to feel human-scaled in a way that most airports twice its size don't.
          </p>
          <p>
            The airport is famous for its carpet — a geometric blue-and-teal pattern that became a beloved Portland icon when it was replaced in 2015. The original pattern sold out in merchandise form within days. The new carpet replicates the design. Portlanders have strong feelings about this.
          </p>
          <p>
            PDX sits about 12 miles northeast of downtown. The <strong>MAX Red Line</strong> connects the airport directly to downtown Portland in about 40 minutes — no transfers, no traffic, $2.50. It runs every 15 minutes during peak hours and is the most straightforward way to get to and from the airport without a car.
          </p>
          <p>
            The airport's food and retail vendors are predominantly local — Powell's Books, Voodoo Doughnut, Elephants Delicatessen, and Laurelwood Brewing all operate concessions inside the terminal. It's one of the few airports in the country where eating before you get to the gate is optional.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#0a1a2a] hover:underline">
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
