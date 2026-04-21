import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Music — Good PDX',
  description: 'Portland\'s music scene is one of the most active in the country — and most of it happens in small rooms.',
}

const links = [
  { label: 'Portland Mercury — Music', href: 'https://www.portlandmercury.com/music' },
  { label: 'Willamette Week — Music', href: 'https://www.wweek.com/music/' },
  { label: 'Oregon Music Hall of Fame', href: 'https://oregonmusichalloffame.org/' },
  { label: 'PDX Jazz Festival', href: 'https://pdxjazz.com/' },
  { label: 'Pickathon', href: 'https://pickathon.com/' },
]

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a1a2e] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-blue-300/70 hover:text-blue-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Music</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Music</h1>
          <p className="text-blue-100/70 text-lg leading-relaxed max-w-2xl">
            This city punches above its weight. From jazz to indie to experimental, Portland's live music scene is built on small rooms, loyal crowds, and artists who actually live here.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Portland has produced an outsized number of influential artists — The Decemberists, Sleater-Kinney, Elliott Smith, Esperanza Spalding, Everclear, and Quarterflash all have deep Portland roots. The city's music infrastructure — recording studios, rehearsal spaces, independent labels, a dense network of small venues — keeps new artists coming up faster than most cities ten times its size.
          </p>
          <p>
            The live venue landscape is anchored by spots like <strong>Crystal Ballroom</strong> (a historic ballroom with a floating dance floor, opened in 1914), <strong>Revolution Hall</strong> (a converted high school in SE Portland), <strong>Mississippi Studios</strong>, and <strong>Doug Fir Lounge</strong>. Portland is genuinely good at the 200–500 capacity room — the size where live music feels best.
          </p>
          <p>
            <a href="https://pickathon.com/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a2e] hover:underline">Pickathon</a>, held annually at Pendarvis Farm in Happy Valley, is one of the most well-regarded independent music festivals in the country — small enough to feel intimate, thoughtful enough in its programming to attract artists who don't need the paycheck.
          </p>
          <p>
            <a href="https://pdxjazz.com/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a2e] hover:underline">PDX Jazz Festival</a> each February brings national and international acts alongside local players — the jazz community here is serious and often overlooked by people who think Portland is only indie rock.
          </p>
          <p>
            Good PDX will build out a live music calendar, venue guide, and artist spotlight section — with attention to local and emerging artists who don't have publicists.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a1a2e] hover:underline">
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
