import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Alberta Arts District — Good PDX Neighborhoods',
  description: 'Last Thursday street fairs, murals on every block, and a history that runs straight through Vanport and the story of Black Portland.',
}

const accent = '#2d6a4f'

export default function AlbertaArtsDistrictPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Alberta Arts District</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            A street that has been a Black commercial corridor, an artist enclave, a gentrification cautionary tale, and one of Portland's most vibrant stretches — sometimes all at once.
          </p>
          <a href="https://maps.google.com/?q=Alberta+Arts+District+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Alberta Street's story can't be told without Vanport. When the 1948 flood displaced Portland's Black community — thousands of people who had come north to work in the Kaiser Shipyards during the war — they were funneled into the Albina district by a housing market that was systematically closed to them everywhere else. Alberta Street became the commercial and cultural spine of Black Portland through the 1950s and 60s.</p>
            <p>Then the city made a series of decisions — highway construction, urban renewal, hospital expansion — that demolished over a thousand homes in the surrounding area and broke up the community. By the 1980s and early 90s, Alberta was economically distressed. Rents were low.</p>
            <p>Artists arrived in the 1990s — drawn by cheap space and an existing community with deep roots in music, art, and food. <strong>Last Thursday</strong>, the monthly street fair that has run on Alberta since 1997, grew out of this period. It's informal, free, loud, and still the best way to see what Portland's art community is doing at street level.</p>
            <p>Gentrification has been significant — property values rose sharply through the 2000s and 2010s, and many longtime Black residents and businesses were displaced. The tension between celebrating Alberta's creative energy and acknowledging who was here first — and who was pushed out — is one Portland hasn't resolved.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Tin Shed Garden Café</strong> has been an Alberta institution for years — a reliably good brunch with an outdoor garden patio. <strong>Expatriate</strong> is a cocktail bar from the team behind Tasty n Daughters, with creative drinks and a short but serious food menu. The Alberta Street corridor has food cart pods, Vietnamese spots, pizza, bakeries, and enough good coffee to keep you on the street all afternoon.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The murals. Alberta has more murals per block than almost any street in the city — some commissioned, some not, many of them genuinely good. The <a href="https://albertamainst.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Alberta Main Street program</a> has worked to support independent businesses along the corridor. The area around NE 15th and Alberta has the densest concentration of galleries, studios, and creative businesses.</p>
            <p><strong>Last Thursday</strong> happens on — you guessed it — the last Thursday of every month from roughly May through September. Show up, walk the street, buy something from a local artist.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Alberta was one of the few streets in Portland where Black-owned businesses could operate openly during the mid-20th century, because racial covenants and redlining made most of the city inaccessible.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The name "Alberta Arts District" was coined as a marketing term in the 1990s — longtime residents sometimes use it with some irony, since the "arts" arrived after decades of community-building that had nothing to do with galleries.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://albertamainst.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Alberta Main Street</a>
          <a href="https://www.travelportland.com/neighborhoods/alberta-arts-district/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Alberta</a>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
        </div>
      </div>
    </div>
  )
}
