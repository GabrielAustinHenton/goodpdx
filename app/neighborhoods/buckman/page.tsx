import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Buckman — Good PDX Neighborhoods',
  description: 'One of Portland\'s oldest residential neighborhoods, Buckman sits just east of the Willamette with a deep history and a creative, community-focused present.',
}

const accent = '#7a2a1a'

export default function BuckmanPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-red-300/70 hover:text-red-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">SE Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Buckman</h1>
          <p className="text-red-100/70 text-lg leading-relaxed max-w-2xl">
            One of Portland's earliest residential neighborhoods, Buckman grew up alongside the city itself — and has been adapting ever since.
          </p>
          <a href="https://maps.google.com/?q=Buckman+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-red-300/60 hover:text-red-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Buckman is one of Portland's earliest platted neighborhoods east of the Willamette, developed in the 1870s and 1880s as the city expanded beyond the river. It was named for Cyrus Buckman, an early settler who owned land in the area. The neighborhood grew quickly as streetcar lines pushed development east along Burnside and Belmont.</p>
            <p>By the early 20th century, Buckman was a dense, working-class residential neighborhood — modest Victorian and Craftsman homes, small apartment buildings, corner stores. Unlike some neighborhoods that saw wholesale demolition during urban renewal, Buckman retained much of its built fabric. The housing stock today is a mix of original structures and later infill.</p>
            <p>In recent decades, Buckman has become known for its arts community and small creative businesses. Its proximity to the Central Eastside Industrial District, the Buckman Arts Magnet School, and established institutions like <a href="https://omsi.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>OMSI</a> make it a nexus of the city's educational and creative infrastructure.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Buckman's SE Burnside corridor hosts some of Portland's most-discussed restaurants. <strong>Pok Pok</strong>, Andy Ricker's landmark Thai restaurant, put SE Division and the surrounding area on the national food map and operated out of the Buckman-adjacent zone for years. The neighborhood's density supports a mix of longtime local spots and newer arrivals. The SE Morrison and Belmont commercial strips are a short walk and offer even more options.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong><a href="https://omsi.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>OMSI — Oregon Museum of Science and Industry</a></strong> sits on the east bank of the Willamette at Buckman's western edge. It's one of the top science museums in the Pacific Northwest — a submarine docked outside, a planetarium, and rotating exhibits that draw both school groups and adults who forget how much they love science.</p>
            <p>The <strong>Buckman Community Garden</strong> is one of Portland's older community plots — a working demonstration of the neighborhood's cooperative culture. <strong>Laurelhurst Park</strong>, a short walk southeast, is a National Historic Landmark with old-growth trees and a duck pond.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>Buckman Elementary School became the Buckman Arts Magnet School in 1993, one of Portland's first arts-focused public schools — a model that influenced arts magnet programs citywide.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>OMSI's submarine — the USS Blueback (SS-581) — is a real decommissioned Navy submarine that visitors can tour. It was also used in the 1990 film <em>The Hunt for Red October</em>.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Central Eastside Industrial District, bordering Buckman to the north and west, has been one of Portland's most active corridors for craft food and drink production — distilleries, cideries, and food manufacturers operating out of repurposed industrial buildings.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Neighborhoods</a>
          <a href="https://omsi.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> OMSI</a>
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
