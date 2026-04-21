import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Film & Stage — Good PDX',
  description: 'Portland\'s theater and film culture is independent, prolific, and rooted in community.',
}

const links = [
  { label: 'Oregon ArtsWatch — Theater', href: 'https://www.orartswatch.org/category/theater/' },
  { label: 'Portland Center Stage', href: 'https://www.pcs.org/' },
  { label: 'Oregon Shakespeare Festival', href: 'https://www.osfashland.org/' },
  { label: 'Portland International Film Festival (NWFF)', href: 'https://nwfilm.org/' },
  { label: 'Hollywood Theatre', href: 'https://hollywoodtheatre.org/' },
  { label: 'Willamette Week — Stage', href: 'https://www.wweek.com/arts/stage/' },
]

export default function FilmAndStagePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a0a0a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-red-300/70 hover:text-red-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Film & Stage</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Film & Stage</h1>
          <p className="text-red-100/70 text-lg leading-relaxed max-w-2xl">
            Portland has a theater community that works. Small companies, serious actors, and venues that have been doing this long enough to know what they're doing.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <a href="https://www.pcs.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a0a0a] hover:underline">Portland Center Stage</a> at the Armory is the city's flagship theater, housed in a historic National Guard armory that was renovated into one of the greenest theater buildings in the country. Their mainstage productions run alongside a second-stage series featuring newer and riskier work.
          </p>
          <p>
            The indie theater scene is broad and active. Companies like <strong>Profile Theatre</strong>, <strong>Artists Repertory Theatre</strong>, and <strong>Imago Theatre</strong> (known for its physically inventive productions) operate year-round. Portland has a serious improv and comedy tradition as well — <strong>Curious Comedy Theater</strong> runs classes and shows in NE Portland.
          </p>
          <p>
            For film, the <a href="https://hollywoodtheatre.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a0a0a] hover:underline">Hollywood Theatre</a> is a Portland institution — a restored 1926 movie palace in NE Portland that programs art house, classic, and cult films alongside first-run releases. The <a href="https://nwfilm.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a0a0a] hover:underline">Northwest Film Center</a> runs the Portland International Film Festival and year-round screenings, education, and filmmaker support.
          </p>
          <p>
            Good PDX will feature event listings, company profiles, and spotlight coverage of Portland's performing arts community.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a0a0a] hover:underline">
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
