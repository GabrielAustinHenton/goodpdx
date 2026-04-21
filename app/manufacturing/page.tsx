import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Made Here — Good PDX',
  description: 'Portland is a manufacturing city. Apparel, food, furniture, bikes, spirits, and more — made here.',
}

const links = [
  { label: 'Maker Collective PDX', href: 'https://makercollectivepdx.com/' },
  { label: 'Portland Made', href: 'https://www.portlandmade.com/' },
  { label: 'Oregon Entrepreneurs Network', href: 'https://www.oen.org/' },
  { label: 'Craft3 — Oregon Small Business Lending', href: 'https://craft3.org/' },
]

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#2a1a0a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-orange-300/70 hover:text-orange-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Made Here</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Made in Portland</h1>
          <p className="text-orange-100/70 text-lg leading-relaxed max-w-2xl">
            Portland has always been a city that makes things. Footwear, furniture, bicycles, spirits, apparel, ceramics, food — the tradition of local manufacturing runs deep.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Nike was founded in Eugene and built its empire from Beaverton. Columbia Sportswear has been headquartered in Portland since 1938. Adidas North America runs out of Portland. But Portland's manufacturing identity isn't just about the giants — it's about the makers operating at a human scale.
          </p>
          <p>
            <strong>Pendleton Woolen Mills</strong>, Oregon-based since 1863, still weaves blankets and apparel in the same tradition. The craft distillery scene — led by names like <strong>Westward Whiskey</strong> and <strong>New Deal Distillery</strong> — has made Portland one of the more interesting spirits towns in the country. Independent furniture makers, small-batch ceramicists, and specialty food producers operate across the city, many in the Central Eastside Industrial District.
          </p>
          <p>
            Portland's bike manufacturing and culture is genuinely world-class. Framebuilders like <strong>Breadwinner Cycles</strong> and <strong>Cielo Cycles</strong> craft custom steel bikes here. The city has more bikes per capita than almost anywhere in the US and the infrastructure to match.
          </p>
          <p>
            Good PDX's <strong>Made Here</strong> section will profile Portland manufacturers, makers, and the people behind the products — with particular attention to women-owned, BIPOC-led, and disability-owned businesses that don't always get the spotlight.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#2a1a0a] hover:underline">
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
