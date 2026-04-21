import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Arts — Good PDX',
  description: 'Portland\'s art scene is scrappy, serious, and worth paying attention to.',
}

const links = [
  { label: 'Portland Art Museum', href: 'https://portlandartmuseum.org/' },
  { label: 'Oregon ArtsWatch', href: 'https://www.orartswatch.org/' },
  { label: 'Portland Institute for Contemporary Art (PICA)', href: 'https://pica.org/' },
  { label: 'Regional Arts & Culture Council', href: 'https://racc.org/' },
  { label: 'Alberta Arts District', href: 'https://albertamainst.org/' },
  { label: 'Willamette Week — Arts', href: 'https://www.wweek.com/arts/' },
]

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#2d1a4a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-purple-300/70 hover:text-purple-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Arts</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Arts</h1>
          <p className="text-purple-100/70 text-lg leading-relaxed max-w-2xl">
            From the Portland Art Museum to last Thursday on Alberta, the city's creative community is large, independent, and not interested in waiting for permission.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            The <a href="https://portlandartmuseum.org/" target="_blank" rel="noopener noreferrer" className="text-[#2d1a4a] hover:underline">Portland Art Museum</a> — founded in 1892, making it one of the oldest on the West Coast — holds a collection of over 42,000 works including significant holdings in Native American and Pacific Northwest art, European masters, and modern photography. Admission is free the first Thursday of each month.
          </p>
          <p>
            The <a href="https://pica.org/" target="_blank" rel="noopener noreferrer" className="text-[#2d1a4a] hover:underline">Portland Institute for Contemporary Art (PICA)</a> runs TBA Festival each fall — one of the most adventurous multidisciplinary arts festivals in the country, featuring performance, visual art, music, and dance from artists who are genuinely difficult to categorize.
          </p>
          <p>
            The <strong>Alberta Arts District</strong> in NE Portland runs Last Thursday — a monthly gallery walk and street fair that has been happening since 1997. It's informal, it's local, and it's one of the better ways to see what Portland artists are actually making right now. The <a href="https://racc.org/" target="_blank" rel="noopener noreferrer" className="text-[#2d1a4a] hover:underline">Regional Arts & Culture Council</a> manages the city's public art program and artist grants.
          </p>
          <p>
            Good PDX will build out a curated guide to galleries, public art, open studios, and arts organizations — with a focus on emerging artists and underrepresented voices.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#2d1a4a] hover:underline">
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
