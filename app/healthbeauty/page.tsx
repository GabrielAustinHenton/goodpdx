import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Wellness — Good PDX',
  description: 'Portland\'s wellness scene is broad, independent, and deeply tied to the community.',
}

const links = [
  { label: 'Oregon Health Authority', href: 'https://www.oregon.gov/oha' },
  { label: 'Cascadia Behavioral Healthcare', href: 'https://cascadiabhc.org/' },
  { label: 'Willamette Week — Wellness', href: 'https://www.wweek.com/wellness/' },
  { label: 'Outside In — Youth Services', href: 'https://outsidein.org/' },
]

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a3a2a] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-emerald-300/70 hover:text-emerald-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Wellness</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Wellness in Portland</h1>
          <p className="text-emerald-100/70 text-lg leading-relaxed max-w-2xl">
            From community acupuncture clinics to naturopathic medicine to mental health support, Portland's wellness ecosystem is unusually broad and often community-driven.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Portland has a long tradition of alternative and integrative health — the city has more naturopathic doctors per capita than almost anywhere in the country, and institutions like <strong>National University of Natural Medicine</strong> (formerly NCNM) have trained practitioners here since 1956. Community acupuncture clinics, sliding-scale therapy practices, and neighborhood herbalists operate alongside conventional care throughout the city.
          </p>
          <p>
            The mental health infrastructure, while strained by the city's housing and addiction crises, includes organizations doing serious work: <a href="https://cascadiabhc.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a3a2a] hover:underline">Cascadia Behavioral Healthcare</a> provides integrated mental health and addiction services on a sliding scale. <a href="https://outsidein.org/" target="_blank" rel="noopener noreferrer" className="text-[#1a3a2a] hover:underline">Outside In</a> serves homeless youth with health, housing, and support services.
          </p>
          <p>
            Portland's beauty industry includes a strong independent salon and barbershop culture, with many businesses that serve communities often underrepresented in mainstream beauty — including shops specializing in natural Black hair care, gender-affirming services, and accessible facilities. Good PDX will feature these businesses explicitly.
          </p>
          <p>
            A directory of wellness providers — gyms, studios, therapists, salons, and health practitioners — is coming. If you own a wellness business in Portland, <Link href="/sign-up" className="text-[#1a3a2a] hover:underline">join Good PDX</Link> to get listed.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a3a2a] hover:underline">
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
