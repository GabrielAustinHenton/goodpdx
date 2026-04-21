import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
export const metadata = { title: 'Sellwood-Moreland — Good PDX Neighborhoods', description: 'Antique row, the oldest amusement park in the Pacific Northwest, and the most small-town feel you\'ll find inside Portland city limits.' }
const accent = '#3a2010'
export default function SellwoodMorelandPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Sellwood-Moreland</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">A riverside neighborhood that was its own city until 1893. Antiques, an amusement park open since 1905, and the kind of slow Saturday energy that makes Portland residents forget to leave.</p>
          <a href="https://maps.google.com/?q=Sellwood+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-amber-300/60 hover:text-amber-300 text-sm transition-colors"><MapPin className="w-4 h-4" /> View on Google Maps</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Sellwood was platted in 1882 by a real estate company that purchased 321 acres from Rev. John Sellwood. It incorporated as its own city in 1887, complete with its own government, streetcar line, and a distinct identity from Portland. That independence lasted six years — <a href="https://sellwood.org/history/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Portland annexed Sellwood in 1893</a>, along with several other small towns that had grown up along the Willamette. Residents have been ambivalent about it ever since.</p>
            <p>The antique trade arrived in the 1960s, when dealers seeking cheap storefronts discovered the neighborhood's intact Victorian commercial strip on SE 13th Avenue. By the 1970s, "Antique Row" on SE Milwaukie and the surrounding blocks had dozens of shops and a regional reputation.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Gado Gado</strong> brought Portland's Indonesian food moment to national attention. The Moreland commercial strip on SE 13th has a concentration of neighborhood restaurants, coffee shops, and bars that punches above its size — this is a residential neighborhood with a serious food scene hiding inside it. <strong>Jade Bistro</strong> is a consistently excellent Vietnamese restaurant that has been drawing people from across the city for years.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong><a href="https://www.oakspark.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Oaks Amusement Park</a></strong>, opened in 1905 on the banks of the Willamette, is the oldest continuously operating amusement park in the Pacific Northwest. It's small, it's nostalgic, the roller skating rink has been there since 1905, and it remains nonprofit and community-owned. Take children, or go without them — it works either way.</p>
            <p>The <strong>Sellwood Bridge</strong>, rebuilt and reopened in 2016, connects SE Portland to the west side and has become a popular cycling and walking crossing. Sellwood Riverfront Park below it is one of the quieter riverside parks in the city.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Oaks Park was originally called the "Coney Island of the Northwest." The roller rink has survived floods, a world war, and every economic cycle since Teddy Roosevelt was president.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Sellwood residents still refer to the neighborhood with a faint air of separatism. "We're not really part of Portland" is not an uncommon thing to hear at a Sellwood dinner party.</span></li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/sellwood-moreland/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Sellwood-Moreland</a>
          <a href="https://sellwood.org/history/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> SMILE — Sellwood History</a>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]"><ArrowLeft className="w-4 h-4" /> All Neighborhoods</Link>
        </div>
      </div>
    </div>
  )
}
