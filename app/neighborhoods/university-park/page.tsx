import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'University Park — Good PDX Neighborhoods',
  description: 'Home to the University of Portland on a bluff above the Willamette, this North Portland neighborhood has a quiet, campus-town feel unlike anywhere else in the city.',
}

const accent = '#d47c2f'

export default function UniversityParkPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">N Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">University Park</h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            A bluff neighborhood defined by the University of Portland's hilltop campus — views of the Willamette, quiet residential streets, and one of the more underrated locations in North Portland.
          </p>
          <a href="https://maps.google.com/?q=University+Park+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-amber-300/60 hover:text-amber-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>University Park occupies a bluff above the Willamette River in North Portland, named for the University of Portland — a private Catholic university founded by the Congregation of Holy Cross in 1901. The university's hilltop campus, with its Gothic Revival architecture and views of the river and Mount St. Helens, has defined the neighborhood's character for over a century.</p>
            <p>The surrounding residential neighborhood developed in tandem with the university, attracting faculty, staff, and working families in modest Craftsman bungalows and small apartment buildings. The neighborhood has historically been more economically diverse than some of Portland's more famous North Portland commercial districts — a mix of longtime homeowners, renters, and the transient population any university neighborhood generates.</p>
            <p>The proximity to the Columbia River and the North Portland industrial corridor shapes the neighborhood's identity — University Park is surrounded by some of Portland's most industrial terrain, making its quiet residential blocks and campus grounds feel like an enclave.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The neighborhood commercial strip on N Lombard Street serves the campus and surrounding residential area with a mix of casual dining, coffee, and quick-service spots catering to students and faculty. The more developed commercial districts of Kenton and St. Johns are nearby for a wider range of options — University Park residents tend to range across North Portland for dining.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://www.up.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>University of Portland campus</a></strong> is one of the more architecturally coherent in Oregon — a collection of Gothic Revival buildings on a bluff, anchored by the Chapel of Christ the Teacher. The campus is open to visitors and the bluff views of the Willamette River, the West Hills, and Mount St. Helens are some of the best in North Portland.</p>
            <p><strong>University of Portland's Chiles Center</strong> is the home arena for the Pilots basketball and volleyball programs. The university's athletic programs, particularly soccer and women's basketball, have been nationally competitive for years.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The University of Portland's soccer program has produced more MLS players than almost any other university in the country — a pipeline that has made it one of the most respected college soccer programs in the United States.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The bluff on which the University sits was historically a significant viewpoint for the Multnomah people — the same elevated terrain that makes the campus so scenic today made it a strategic location for centuries before European settlement.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Father Thomas Oddo, who served as University of Portland president from 1962 to 1970, was instrumental in keeping the university open during a period of financial crisis — his stewardship is credited with ensuring the institution survived to its current prominence.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.up.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> University of Portland</a>
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
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
