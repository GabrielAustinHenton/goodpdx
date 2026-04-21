import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Concordia — Good PDX Neighborhoods', description: 'A quiet NE Portland neighborhood with deep roots, community gardens, and a stretch of Alberta that still belongs to the people who live there.' }
const accent = '#1a3a1a'
export default function ConcordiaPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Concordia</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">East of Alberta Arts District, quieter, more residential, and home to a stretch of NE Alberta where the community gardens outnumber the cocktail bars.</p>
          <a href="https://maps.google.com/?q=Concordia+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Concordia was platted in the early 20th century and developed as a working and middle-class residential neighborhood east of the Alameda Ridge. The name — meaning harmony — was chosen by developers in the tradition of aspirational neighborhood naming that produced Beaumont, Irvington, and other NE Portland neighborhood names of the period.</p>
            <p>Concordia University, a small Lutheran liberal arts college, opened in the neighborhood in 1905 and operated for more than a century before closing in 2020 — a significant loss for the neighborhood's identity and the community organizations it had supported. The campus is being redeveloped.</p>
            <p>The neighborhood sits at the eastern edge of the Alberta Arts District's influence — some of Alberta's creative energy has extended into Concordia over the past decade, but more slowly and with less displacement pressure than the blocks closer to NE 15th.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The stretch of NE Alberta east of 30th has a genuine neighborhood coffee shop and restaurant culture — less curated than the arts district section of Alberta, more oriented toward the people who live there. <strong>Sweedeedee</strong>, a brunch spot on N Albina at the neighborhood's western edge, is one of the best breakfast places in Portland and worth the wait.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Concordia has one of the highest concentrations of community gardens in Portland — the neighborhood's relatively large lots and active neighborhood association have supported a network of shared growing spaces. <strong>Fernhill Park</strong>, on NE 37th and Ainsworth, is a large, well-maintained neighborhood park with sports fields and a year-round community presence. The <strong>Concordia Community Association</strong> is one of the more active neighborhood organizations in NE Portland.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Concordia was recognized by the American Forests organization for having one of the best urban tree canopies in Portland — a distinction the neighborhood takes seriously, given that mature street trees take 40–60 years to reach the canopy size that makes a neighborhood feel like a neighborhood.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/concordia/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Concordia</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
