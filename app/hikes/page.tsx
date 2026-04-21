import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Hikes — Good PDX',
  description: 'World-class hiking starts within 30 minutes of Portland. Here\'s where to go.',
}

const links = [
  { label: 'Oregon Hikers Field Guide', href: 'https://www.oregonhikers.org/' },
  { label: 'AllTrails — Portland Area', href: 'https://www.alltrails.com/us/oregon/portland' },
  { label: 'Forest Park Conservancy — Trails', href: 'https://forestparkconservancy.org/forest-park/maps/' },
  { label: 'Columbia River Gorge National Scenic Area', href: 'https://www.fs.usda.gov/crgnsa' },
  { label: 'Travel Oregon — Hiking', href: 'https://traveloregon.com/things-to-do/outdoor-recreation/hiking-backpacking/' },
]

export default function HikesPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1d3a2f] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Hikes</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hike Portland</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Forest Park is in your backyard. The Columbia River Gorge is 30 minutes east. Mount Hood is an hour away. Portland is one of the best-positioned cities in the country for hiking.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            <strong>Forest Park's Wildwood Trail</strong> — 30 miles, entirely within city limits — is one of the longest urban trail systems in the US. You can pick it up from multiple trailheads along NW Thurman Street and spend anywhere from an hour to a full day without retracing your steps.
          </p>
          <p>
            Thirty minutes east, the <strong>Columbia River Gorge</strong> is a National Scenic Area with some of the most dramatic trail scenery in the Pacific Northwest. <strong>Multnomah Falls</strong> is the most-visited natural attraction in Oregon — a 620-foot waterfall accessible via a short paved path or a longer trail to the top. <strong>Angel's Rest</strong>, <strong>Dog Mountain</strong>, and the <strong>Eagle Creek Trail</strong> are all within an hour of Portland and offer serious elevation and reward.
          </p>
          <p>
            For something closer and quieter, <strong>Tryon Creek State Natural Area</strong> sits entirely within Portland's southwest city limits — 8 miles of trails through a riparian forest that most tourists never find.
          </p>
          <p>
            A curated hiking guide — with difficulty ratings, trailhead access, and seasonal notes — is coming to Good PDX.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Resources</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1d3a2f] hover:underline">
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
