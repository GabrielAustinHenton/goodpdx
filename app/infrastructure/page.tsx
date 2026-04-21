import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Infrastructure — Good PDX',
  description: 'How Portland moves, powers itself, and manages its built environment.',
}

const links = [
  { label: 'Portland Bureau of Transportation', href: 'https://www.portland.gov/transportation' },
  { label: 'Portland Water Bureau', href: 'https://www.portland.gov/water' },
  { label: 'Portland Bureau of Environmental Services', href: 'https://www.portland.gov/bes' },
  { label: 'Pacific Power — Portland', href: 'https://www.pacificpower.net/' },
]

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a1a1a] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-gray-300/70 hover:text-gray-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Infrastructure</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Infrastructure</h1>
          <p className="text-gray-100/70 text-lg leading-relaxed max-w-2xl">
            The systems under and around a city are easy to ignore until they fail. Portland's infrastructure — water, power, transit, roads — is one of the most interesting stories the city tells about itself.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Portland's drinking water comes from the Bull Run Watershed on the slopes of Mount Hood — one of the few major American cities still drawing from a largely unfiltered surface source. The water is cold, clean, and gravity-fed for much of its journey to your tap. The <a href="https://www.portland.gov/water" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] hover:underline">Portland Water Bureau</a> manages one of the most envied municipal water systems in the country.
          </p>
          <p>
            Portland's combined sewer system — which handles both stormwater and sewage — has been the subject of a multi-decade infrastructure project. The <strong>Big Pipe</strong> project, completed in the 2000s, added a massive underground tunnel to capture overflow that was previously dumping into the Willamette River after rain events. It largely worked.
          </p>
          <p>
            The city's electrical grid is served primarily by <strong>Pacific Power</strong>, with a growing share of renewables driven by Oregon's aggressive clean energy mandates. Portland General Electric serves parts of the region as well.
          </p>
          <p>
            Good PDX will cover infrastructure as civic journalism — tracking major projects, understanding what's working, and explaining what decisions shape the city's built environment over the next century.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a1a1a] hover:underline">
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
