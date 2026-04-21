import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Development — Good PDX',
  description: 'Portland is growing and changing. What\'s being built, where, and who benefits.',
}

const links = [
  { label: 'Portland Bureau of Development Services', href: 'https://www.portland.gov/bds' },
  { label: 'Portland Housing Bureau', href: 'https://www.portland.gov/phb' },
  { label: 'Prosper Portland', href: 'https://prosperportland.us/' },
  { label: 'Portland Maps — Permits & Zoning', href: 'https://www.portlandmaps.com/' },
  { label: 'Oregon Live — Real Estate', href: 'https://www.oregonlive.com/real-estate/' },
]

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#2a2a1a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-yellow-300/70 hover:text-yellow-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Development</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Development</h1>
          <p className="text-yellow-100/70 text-lg leading-relaxed max-w-2xl">
            Portland is being built and rebuilt — housing, commercial projects, neighborhood investment, and infrastructure. Who's developing what, and what it means for the city.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Portland has spent much of the last decade navigating competing pressures: a housing shortage that has made the city significantly less affordable, a commercial real estate market reshaped by remote work, and neighborhoods in flux as investment flows in and longtime residents flow out.
          </p>
          <p>
            <a href="https://prosperportland.us/" target="_blank" rel="noopener noreferrer" className="text-[#2a2a1a] hover:underline">Prosper Portland</a> (formerly the Portland Development Commission) is the city's economic development agency — managing urban renewal areas, supporting business development, and overseeing major redevelopment projects. The Lloyd District, the Central Eastside, and areas of North and Northeast Portland are all active zones of investment and change.
          </p>
          <p>
            The housing situation is complicated. Oregon passed statewide legislation in 2019 allowing duplexes on all residential lots — one of the most sweeping zoning reforms in American history. Portland has been working to implement this alongside a broader effort to increase density near transit corridors. The <a href="https://www.portland.gov/phb" target="_blank" rel="noopener noreferrer" className="text-[#2a2a1a] hover:underline">Portland Housing Bureau</a> manages affordable housing programs and policy.
          </p>
          <p>
            Good PDX will track major development projects, housing policy, and neighborhood-level changes — with a focus on what's actually happening on the ground, not just in press releases.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#2a2a1a] hover:underline">
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
