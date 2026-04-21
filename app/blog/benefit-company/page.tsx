import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Why Good PDX is a Benefit Company — Good PDX',
  description: 'Good PDX was built as a passion project to serve Portland — all of it. Here\'s what that means and why it matters.',
}

export default function BenefitCompanyPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* Hero */}
      <div className="bg-[#1d4a2f] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Community</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Why Good PDX is a Benefit Company
          </h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            This isn't a media company with investors to satisfy. It's a project built for Portland — by someone who genuinely loves this place.
          </p>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">It Started as a Passion Project</h2>
            <p>
              Good PDX began with a simple frustration: Portland has so much going on — incredible food, a thriving arts scene, serious history, makers building things worth paying attention to — and no single place that does it justice without an agenda attached.
            </p>
            <p className="mt-4">
              Gabriel Henton grew up in the Portland area. He's worked at managed service providers serving businesses across the region, and today works for a dental equipment manufacturer in the greater Portland area. He's spent most of his life inside the rhythms of this city — its neighborhoods, its people, its contradictions — and started Good PDX because he wanted something better than what existed.
            </p>
            <p className="mt-4">
              He's just getting started.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What "Benefit Company" Actually Means</h2>
            <p>
              Good PDX LLC is registered in Oregon as a benefit company. That's not a marketing term — it's a legal structure. It means the company is formally obligated to consider community impact alongside profit, and that obligation is baked into the operating agreement, not just the about page.
            </p>
            <p className="mt-4">
              In practice, it means Good PDX will never prioritize engagement metrics over honest coverage, will never sell user data, and will never let advertiser relationships shape what gets featured. Monetization will happen — this has to be sustainable — but it will be tasteful, transparent, and secondary to the mission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Site Is For</h2>
            <p>
              Good PDX covers the full width of Portland life: the food scene (carts and fine dining alike), the coffee culture, the music venues, the galleries, the parks and trails, local manufacturers, the tech community, and the history that explains how this city became what it is.
            </p>
            <p className="mt-4">
              But it's not just a directory or a listicle machine. The goal is connection — a place where people from all walks of life can find something they didn't know they were looking for, or find someone to build something with. Whether you've lived here your whole life or arrived last month, there's a Portland you haven't met yet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Gets Featured</h2>
            <p>
              Good PDX will actively feature women-owned businesses and BIPOC-run companies — not as a token gesture, but as a core editorial commitment. These businesses are often doing the most interesting work in the city and are consistently underrepresented in mainstream coverage.
            </p>
            <p className="mt-4">
              Good PDX also believes in second chances. Businesses run by people with disabilities or criminal records will be featured and supported here without asterisks. Portland's economy works better when everyone has a seat at the table, and this platform intends to reflect that.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Long Game</h2>
            <p>
              This is early. The site is growing, the features are being built, and the community is forming. Good PDX isn't trying to be everything on day one — it's trying to be genuinely useful and honest and worth coming back to.
            </p>
            <p className="mt-4">
              Portland deserves that. And Gabriel thinks the people here will recognize it when they see it.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> Back to Good PDX
          </Link>
        </div>
      </div>
    </div>
  )
}
