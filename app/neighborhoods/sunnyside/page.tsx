import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
import EditableContent from '../../components/EditableContent'

export const metadata = {
  title: 'Sunnyside — Good PDX Neighborhoods',
  description: 'The Belmont corridor, the Bagdad Theater, and a neighborhood that has been getting brunch right since before it was a concept.',
}

const accent = '#7a2a1a'

export default function SunnysidePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-red-300/70 hover:text-red-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Sunnyside</h1>
          <p className="text-red-100/70 text-lg leading-relaxed max-w-2xl">
            The Belmont corridor runs through the heart of Sunnyside — lined with bookstores, coffee shops, and restaurants that have been here long enough to know what they're doing.
          </p>
          <a href="https://maps.google.com/?q=Sunnyside+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-red-300/60 hover:text-red-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <EditableContent pageSlug="neighborhoods/sunnyside">
        <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Sunnyside developed in the late 19th century as streetcar lines extended east from downtown along Belmont and Morrison Streets. The neighborhood was platted as a streetcar suburb — walkable by design, with modest housing stock built close to commercial corridors. The name appears as early as 1889 in Portland land records.</p>
            <p>Through the 20th century, Sunnyside maintained its character as a mixed residential and commercial neighborhood. The Belmont commercial strip became one of SE Portland's most enduring — a mix of longtime local businesses and the kind of independent shops that have resisted displacement better here than in some neighboring areas.</p>
            <p>Today Sunnyside is one of the more sought-after SE neighborhoods for renters and buyers alike — dense, walkable, and within easy biking distance of much of the city. The neighborhood association has been active in planning and land use decisions for decades.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Café Castagna</strong> and its more casual sibling <strong>Castagna</strong> on SE Hawthorne (just at Sunnyside's edge) represent the neighborhood's approach to dining — serious about technique, unfussy about atmosphere. <strong>Bread and Ink Café</strong>, a Belmont institution, has been serving Portland for decades. The neighborhood has a disproportionate number of good brunch spots for its size.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://www.mcmenamins.com/bagdad-theater-pub" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Bagdad Theater</a></strong>, a 1927 movie palace on SE Hawthorne, now operated by McMenamins, is one of Portland's most beloved neighborhood theaters — second-run films, pizza, and beer in a restored atmospheric theater. The building's Moorish revival architecture is one of the more striking facades in SE Portland.</p>
            <p><strong>Sunnyside Environmental School</strong>, a K–8 public school, is one of Portland's most distinctive educational experiments — a project-based curriculum centered on environmental education that has influenced how other Portland schools think about outdoor learning.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>SE Belmont Street was one of the original streetcar routes on Portland's east side, running as early as 1891. The streetcar is long gone, but the commercial strip it anchored is still there.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Bagdad Theater was built in 1927 for $100,000. It sat 1,400 people and was considered one of the finest theaters in Portland at the time. McMenamins saved it from demolition in 1991.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Sunnyside is consistently ranked among Portland's most bikeable neighborhoods — not just in Portland, but nationally, due to its flat terrain, low car traffic on side streets, and proximity to the Springwater Corridor trail.</span></li>
          </ul>
        </section>

        </div>
        </EditableContent>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.mcmenamins.com/bagdad-theater-pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Bagdad Theater — McMenamins</a>
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
