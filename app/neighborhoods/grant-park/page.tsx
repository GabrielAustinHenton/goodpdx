import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'
import EditableContent from '../../components/EditableContent'

export const metadata = {
  title: 'Grant Park — Good PDX Neighborhoods',
  description: 'Beverly Cleary grew up here. Ramona Quimby lived here. Grant Park is a quiet NE neighborhood with a surprisingly outsized literary legacy.',
}

const accent = '#2d6a4f'

export default function GrantParkPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Grant Park</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Tree-lined streets, a beloved neighborhood park, and the childhood home of the author who gave Portland its most famous fictional resident — Ramona Quimby.
          </p>
          <a href="https://maps.google.com/?q=Grant+Park+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <EditableContent pageSlug="neighborhoods/grant-park">
        <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Grant Park is named for Ulysses S. Grant, the 18th President and Civil War general, whose name graces the park at the neighborhood's center. The area developed as a residential suburb in the late 19th and early 20th centuries, its tree-lined streets and well-maintained Craftsman and Colonial Revival homes reflecting the aspirations of Portland's growing middle class.</p>
            <p>The neighborhood has retained its residential character and much of its original housing stock. The park — a large, tree-filled rectangle near NE 33rd and Ulysses — serves as a genuine neighborhood anchor, hosting community events, sports leagues, and pickup games year-round. The surrounding streets have some of the best-preserved early 20th century residential architecture in NE Portland.</p>
            <p>Beverly Cleary, who was born in McMinnville but grew up in Portland in the Grant Park neighborhood, set her beloved children's books on <strong>Klickitat Street</strong> — a real street that still runs through the neighborhood. The Ramona and Henry Huggins books, written between 1950 and the early 2000s, gave Portland's Grant Park neighborhood a global literary identity that it wears with genuine pride.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Grant Park's immediate neighborhood is primarily residential, but the surrounding corridors on NE Broadway and NE 33rd have a range of dining options. <strong>Tasty n Daughters</strong> on NE 33rd has been one of Portland's more celebrated breakfast and brunch spots since it opened. The Hollywood District commercial strip on Sandy is a short walk and provides the density of options the quieter Grant Park streets don't.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The <strong><a href="https://www.portland.gov/parks/grant-park" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Beverly Cleary Sculpture Garden</a></strong> in Grant Park features bronze statues of Ramona Quimby, Henry Huggins, and his dog Ribsy — created by sculptor Lee Hunt and installed in 1995. The statues are on NE 33rd Avenue in the park itself and are a genuine pilgrimage destination for fans of the books.</p>
            <p><strong>Grant High School</strong>, one of Portland's comprehensive public high schools, anchors the north end of the neighborhood. The school has a long athletic tradition and is one of the more racially diverse high schools in the city. <strong>Rose City Golf Course</strong> borders the neighborhood to the north.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Beverly Cleary set her books on NE Klickitat Street after remembering it as "a good name for a street" from her Portland childhood. The real Klickitat Street, which runs through Grant Park, has been a pilgrimage destination for Cleary readers for decades.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Cleary attended Fernwood Grammar School (now Fernwood Middle School) and later Grant High School — both within a few blocks of the neighborhood where her fictional characters lived.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Beverly Cleary died in 2021 at the age of 104. Portland's library system, Multnomah County Library, holds one of the most complete Beverly Cleary collections in the country.</span></li>
          </ul>
        </section>

        </div>
        </EditableContent>
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.portland.gov/parks/grant-park" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Grant Park — Portland Parks</a>
          <a href="https://www.oregonencyclopedia.org/articles/cleary_beverly_1916_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Oregon Encyclopedia — Beverly Cleary</a>
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
