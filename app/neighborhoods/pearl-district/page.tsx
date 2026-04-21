import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Pearl District — Good PDX Neighborhoods',
  description: 'From abandoned railyards to Powell\'s Books and upscale lofts — the Pearl District\'s transformation is one of the most studied in American urban planning.',
}

const accent = '#1d4a2f'

export default function PearlDistrictPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="text-white pt-20 pb-16 px-5" style={{ backgroundColor: accent }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Neighborhoods
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">NW Portland</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Pearl District</h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Thirty years ago it was railyards and cold warehouses. Today it's Powell's Books, galleries, and $2,000 lofts. The Pearl is what happens when a city bets on itself.
          </p>
          <a href="https://maps.google.com/?q=Pearl+District+Portland+Oregon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-300/60 hover:text-green-300 text-sm transition-colors">
            <MapPin className="w-4 h-4" /> View on Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>The Pearl was Portland's working industrial core through most of the 20th century — railyards, warehouses, cold storage, and light manufacturing crammed into the blocks north of Burnside and west of the Park Blocks. When industry decentralized in the 1970s, the buildings emptied. Rents dropped to almost nothing.</p>
            <p>Artists moved in first. In 1978, Ted Savinar rented 3,000 square feet for <a href="https://explorethepearl.com/history-of-the-pearl-district/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>$100 a month</a>. By the mid-1980s a gallery scene had taken root in the old warehouse buildings. The name "Pearl District" is generally credited to gallery owner Thomas Augustine, who described finding gems — artworks — in the gritty shells of the buildings, like pearls.</p>
            <p>The city's urban renewal machinery caught up in the 1990s. The <a href="https://en.wikipedia.org/wiki/Pearl_District,_Portland,_Oregon" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Brewery Blocks</a> — the former Blitz-Weinhard brewery — were redeveloped into mixed-use retail and residential. New apartment towers went up. The streetcar was extended through the neighborhood. By 2005, the Pearl was a nationally cited example of downtown urban reinvestment.</p>
            <p>The transformation displaced the artists who started it — a story Portland has repeated in several neighborhoods since.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Drink</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong>Elephants Delicatessen</strong> has been feeding Portland since 1979 and remains the Pearl's most beloved institution — a full deli, bakery, and prepared foods counter in the old NW 22nd location that somehow still feels like a neighborhood shop. <strong>Jake's Famous Crawfish</strong>, a Portland institution since 1892, is a short walk away. The Pearl has every price point covered, from food cart pods to white tablecloths.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to See</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p><strong><a href="https://www.powells.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: accent }}>Powell's City of Books</a></strong> occupies an entire city block on W Burnside — used, new, and rare books across multiple color-coded rooms on multiple floors. It is genuinely one of the greatest bookstores on earth and requires a budget of at least two hours and a firm resolve not to leave with 11 books. The maps room alone is dangerous.</p>
            <p><strong>Tanner Springs Park</strong>, designed by landscape architect Herbert Dreiseitl, is a constructed wetland in the heart of the Pearl that references the natural springs that once ran through the area before the city paved them over. The art wall along its edge is made of reclaimed steel rails from the old railyards.</p>
            <p>The <strong>First Thursday</strong> gallery walk (held the first Thursday of each month) originated in the Pearl and remains one of the better ways to see what Portland's fine art scene is doing.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious Facts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Pearl sits on top of Tanner Creek, a stream that ran through the neighborhood until it was buried underground in the early 20th century. It still flows beneath the streets.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>The Portland Streetcar, which runs through the Pearl, was the first new streetcar system built in the United States in 50 years when it opened in 2001. The Pearl District was the primary reason it was built.</span></li>
            <li className="flex gap-3"><span className="text-lg">→</span><span>Powell's has an estimated 1.5 million books on the shelves at any given time. Employees give tours. The store has its own coffee shop. There is no excuse not to go.</span></li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <a href="https://www.travelportland.com/neighborhoods/pearl-district/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Travel Portland — Pearl District</a>
          <a href="https://explorethepearl.com/history-of-the-pearl-district/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Explore the Pearl — History</a>
          <a href="https://portlandneighborhood.com/pearldistrict" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline" style={{ color: accent }}><ExternalLink className="w-4 h-4" /> Portland Neighborhood Guide</a>
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
