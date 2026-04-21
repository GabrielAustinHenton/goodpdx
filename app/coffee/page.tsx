import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Coffee — Good PDX',
  description: 'Portland takes coffee seriously. Local roasters, neighborhood cafes, and a culture built on craft.',
}

const links = [
  { label: 'Sprudge — Portland Coffee', href: 'https://sprudge.com/tag/portland' },
  { label: 'Portland Monthly — Coffee', href: 'https://www.pdxmonthly.com/eat-and-drink/coffee' },
  { label: 'Willamette Week — Best Coffee', href: 'https://www.wweek.com/food/2024/07/03/the-best-coffee-shops-in-portland/' },
  { label: 'Eater Portland — Coffee', href: 'https://pdx.eater.com/maps/best-coffee-shops-portland' },
]

export default function CoffeePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#3b2010] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Coffee</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Portland Coffee</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            Portland was doing single-origin and pour-over before most cities had heard the terms. The local roaster scene is deep, the neighborhood cafes are distinctive, and the bar is high.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Portland's coffee culture runs parallel to its food culture — hyperlocal, craft-obsessed, and resistant to mediocrity. Roasters like <strong>Stumptown</strong> (founded here in 1999), <strong>Water Avenue</strong>, <strong>Coava</strong>, and <strong>Guilder</strong> built reputations that spread well beyond the Pacific Northwest. The city helped define what specialty coffee looks like in America.
          </p>
          <p>
            The neighborhood cafe is an institution here. In Portland, a coffee shop is often where people work, meet, organize, and spend half a Saturday. Most neighborhoods have at least one worth seeking out. Many are independent, most are serious about sourcing, and a growing number are <strong>women-owned or BIPOC-led</strong> — businesses that Good PDX will feature as this directory grows.
          </p>
          <p>
            A full coffee directory — with neighborhood filters, roaster profiles, and community reviews — is coming to Good PDX. In the meantime, the links below will point you in the right direction.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Where to Read More</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#3b2010] hover:underline">
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
