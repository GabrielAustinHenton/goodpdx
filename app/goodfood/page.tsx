import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Food & Drink — Good PDX',
  description: 'Portland\'s food scene is one of the most interesting in the country. Here\'s why.',
}

const links = [
  { label: 'Eater Portland', href: 'https://pdx.eater.com/' },
  { label: 'Portland Monthly — Eat & Drink', href: 'https://www.pdxmonthly.com/eat-and-drink' },
  { label: 'Willamette Week — Food', href: 'https://www.wweek.com/food/' },
  { label: 'Portland Food Map', href: 'https://www.portlandfoodmap.com/' },
  { label: 'Bridgetown Bites', href: 'https://bridgetownbites.com/' },
  { label: 'Portland by Mouth', href: 'https://portlandbymouth.com/' },
]

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      <div className="bg-[#7a2a1a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-orange-300/70 hover:text-orange-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Food & Drink</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Portland Eats
          </h1>
          <p className="text-orange-100/70 text-lg leading-relaxed max-w-2xl">
            A city that turned parking lots into dining destinations and food carts into culinary careers. Portland's food scene is relentlessly local, quietly world-class, and still evolving.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Cart Before the Restaurant</h2>
            <p>
              It started with a <a href="https://en.wikipedia.org/wiki/Food_carts_in_Portland,_Oregon" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">kosher hot dog cart across from City Hall in 1965</a>. By 2001, Portland counted 175 food carts. By 2010, that number had ballooned to somewhere between 450 and 671 — nobody could keep an accurate count.
            </p>
            <p className="mt-4">
              The 2008 recession accelerated everything. Starting a cart cost a fraction of a brick-and-mortar, and Portland's culture of craft and experimentation made it a natural fit. Entire <a href="https://www.travelportland.com/food-carts/pods/" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">cart pods</a> — clusters of vendors sharing a parking lot — became neighborhood anchors. The model was Portland's invention, and the rest of the country eventually noticed.
            </p>
            <p className="mt-4">
              The most famous pod, the Alder Street pod downtown, housed upwards of 65 carts before it was demolished in 2019 to make way for a Ritz-Carlton. The loss stung. But as of 2025, Portland still has <a href="https://www.foodparks.io/blog/the-story-of-portland-food-cart-pods" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">roughly 25 cart pods and 500 active carts</a> citywide. New pods keep opening — including <a href="https://bridgetownbites.com/2024/09/24/brooklyn-carreta-food-cart-pod-will-open-se-portland-oregon/" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">Brooklyn Carreta in SE Portland</a>, which opened in late 2024.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Serious Restaurant Town</h2>
            <p>
              The carts get the attention, but Portland's sit-down dining is just as worth your time. Chef Gregory Gourdet's <strong>Kann</strong> — a Haitian-inspired restaurant in Portland — earned the James Beard Award for <a href="https://blog.resy.com/2025/12/portland-restaurants-2025/" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">Best New Restaurant in America in 2023</a>, then Gourdet won Best Chef: Northwest in 2024. The menu is built around wood fire, Oregon produce, and flavors rooted in the Caribbean — dairy-free, gluten-free, and genuinely exciting.
            </p>
            <p className="mt-4">
              <strong>Hat Yai</strong> has become a Portland institution for Southern Thai fried chicken and roti. <strong>Murata</strong>, a sushi bar owned by the same family since 1988, is still the standard-bearer for Japanese cuisine through a Pacific Northwest lens — the fresh fish sheet changes daily and features Oregon abalone when available.
            </p>
            <p className="mt-4">
              <strong>Coquine</strong> in Mount Tabor runs a daily-changing menu under Chef Katy Millard — French-influenced, seasonally driven, and one of the more reliably excellent meals in the city. <a href="https://www.pdxmonthly.com/eat-and-drink/best-restaurants-portland" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">Portland Monthly's annual best restaurants list</a> is a good starting point if you're building a dining itinerary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Neighborhoods That Feed You</h2>
            <p>
              <strong>SE Division Street</strong> was the epicenter of Portland's restaurant boom in the 2010s and remains dense with good options. <strong>Alberta Arts District</strong> hosts one of the city's best-loved cart pods alongside sit-down spots that reflect the neighborhood's community character. <strong>NW 23rd</strong> leans toward brunch and boutique dining. <strong>North Mississippi</strong> and <strong>North Williams</strong> corridors have become home to some of the city's most interesting newer restaurants.
            </p>
            <p className="mt-4">
              The city's approach to food has always been fiercely local — chefs build menus around what's fresh at the farmers' market that morning. <a href="https://www.portlandfoodmap.com/" target="_blank" rel="noopener noreferrer" className="text-[#7a2a1a] hover:underline">Portland Food Map</a> is an excellent resource for tracking what's open and where.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming to Good PDX</h2>
            <p>
              We're building out a full directory of Portland food and drink — carts, restaurants, bars, breweries, and coffee — with filters for neighborhood, dietary needs, and business ownership. Women-owned and BIPOC-run spots will be featured prominently. If you own a food business in Portland, <Link href="/sign-up" className="text-[#7a2a1a] hover:underline">join Good PDX</Link> to get listed.
            </p>
          </section>

        </div>

        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Where to Read More</h3>
          <ul className="space-y-3">
            {links.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#7a2a1a] hover:underline">
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
