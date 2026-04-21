import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Hot Springs — Good PDX',
  description: 'Oregon has world-class hot springs within a few hours of Portland. Here\'s where to start.',
}

const links = [
  { label: 'Oregon Hot Springs — Oregon Hikers', href: 'https://www.oregonhikers.org/field_guide/Category:Hot_Springs' },
  { label: 'Travel Oregon — Hot Springs', href: 'https://traveloregon.com/things-to-do/outdoor-recreation/camping-glamping/hot-springs-in-oregon/' },
  { label: 'Willamette Week — Best Hot Springs Near Portland', href: 'https://www.wweek.com/outdoors/2022/08/10/the-best-hot-springs-near-portland/' },
]

export default function HotSpringsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1a3a4a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-cyan-300/70 hover:text-cyan-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Hot Springs</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hot Springs Near Portland</h1>
          <p className="text-cyan-100/70 text-lg leading-relaxed max-w-2xl">
            Oregon sits on geologically active ground. Within two to three hours of Portland, you can be soaking in natural hot springs in the middle of old-growth forest.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <strong>Bagby Hot Springs</strong> — about 70 miles southeast of Portland in the Mount Hood National Forest — is the most popular hot springs destination in Oregon. A 1.5-mile trail through old-growth forest leads to a series of log tubs fed by a natural spring at around 136°F. Permits are now required seasonally due to high demand.
          </p>
          <p>
            <strong>McCredie Hot Springs</strong> near Oakridge (about 3 hours south) sits right on the banks of Salt Creek — you can alternate between the hot spring and the cold river. It's free, undeveloped, and best visited on weekdays.
          </p>
          <p>
            <strong>Umpqua Hot Springs</strong> in the Umpqua National Forest is a terraced natural spring above the North Umpqua River with views you'll remember. It's a short hike from the trailhead and worth every mile of the drive from Portland.
          </p>
          <p>
            Good PDX will feature a full guide with access notes, permit requirements, seasonal conditions, and Leave No Trace guidance.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a3a4a] hover:underline">
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
