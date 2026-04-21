import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Montavilla — Good PDX Neighborhoods', description: 'Named for a place that never existed. One of Portland\'s most interesting emerging neighborhoods, anchored by 82nd Avenue and Lone Fir Cemetery.' }
const accent = '#3a2a0a'
export default function MontavillaPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Montavilla</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">The name is a contraction of "Mount Tabor Villa" — a marketing invention from the 1880s. The neighborhood it describes has become one of Portland's more genuinely interesting places to spend time.</p>
          <a href="https://maps.google.com/?q=Montavilla+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-amber-300/60 hover:text-amber-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>"Montavilla" was invented by a real estate developer in the 1880s who wanted something that sounded European and aspirational. "Mount Tabor Villa" became "Montavilla" in the way that marketing often smooths things into something more palatable. The neighborhood developed as a working-class streetcar suburb, and the SE Stark Street commercial strip has operated in some form since the early 1900s.</p>
            <p>82nd Avenue runs through the eastern edge of Montavilla and has historically been one of Portland's most economically diverse commercial corridors — a mix of immigrant-owned businesses, affordable restaurants, motels, and services that reflect a different Portland than the one in the travel guides. It's changing quickly, and not entirely for the worse.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>82nd Avenue is one of Portland's best streets for immigrant-owned restaurants — Vietnamese, Chinese, Ethiopian, Mexican, and more. <strong>Ox</strong>, an Argentine-inspired wood-fire restaurant, is one of the most celebrated in Portland and is located on SE Burnside at the edge of Montavilla. <strong>Biwa</strong>, a Japanese izakaya on SE Ash, is a long-standing Portland institution. The neighborhood's own Stark Street strip has a solid independent coffee, bar, and restaurant scene.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Lone Fir Cemetery</strong>, established in 1855 on SE 26th and Morrison at the western edge of Montavilla, is the oldest public cemetery in Oregon still in operation. Many of Portland's 19th-century founders are buried here, along with early Chinatown residents and thousands of Oregon Trail emigrants. It's beautifully maintained, genuinely historic, and open to the public. <strong>Mount Tabor Park</strong> is a short walk west — an extinct volcanic cinder cone with some of Portland's best views.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Lone Fir Cemetery contains the graves of more than 25,000 people, including many whose identities were lost or never recorded. A section in the northeast corner holds the remains of patients from the Oregon State Hospital — some identified only by number.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Academy Theater on SE Stark, a 1948 movie house now operated by McMenamins, shows second-run films for $4. It has the same beer-and-pizza model as the Bagdad. Both are worth your time.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/montavilla/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Montavilla</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
