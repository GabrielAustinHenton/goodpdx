import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Portlanders — Good PDX',
  description: 'Portland is a city of strong types — outdoor obsessives, neighborhood loyalists, makers, transplants, and lifers. Here\'s who lives here and what they care about.',
}

export default function PortlandersPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      <div className="bg-[#1d4a2f] text-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-green-300/70 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Portlanders</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Who Lives Here
          </h1>
          <p className="text-green-100/70 text-lg leading-relaxed max-w-2xl">
            Portland attracts a specific kind of person — and then makes them more so. Over 650,000 people call this city home. They don't all look the same, but they tend to care about the same things.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Outdoor Obsessive</h2>
            <p>
              Portland sits at the intersection of mountains, rivers, forests, and coast — and the people who move here often do so because nowhere else offers this particular combination within a single tank of gas. Mount Hood is 90 minutes away. The coast is 90 minutes the other direction. Forest Park — 5,200 acres of actual forest — is inside city limits.
            </p>
            <p className="mt-4">
              The outdoor-obsessive Portlander runs before work, bikes to the office, spends weekends skiing or surfing or hiking depending on the season, and owns gear in multiples. They are deeply loyal to local outfitters, have opinions about trail conditions on the Wildwood, and will tell you — at length — why Portland is a better base for outdoor life than Denver, Seattle, or anywhere else you might suggest.
            </p>
            <p className="mt-4">
              What they value: access. The ability to be in wilderness quickly, without spending much. Portland's geography makes this possible in a way that few American cities can match, and people who have experienced it once find it very hard to give up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Maker</h2>
            <p>
              Portland has always had a high concentration of people who make things with their hands — furniture, ceramics, clothing, food, beer, wine, spirits, bicycles, jewelry, art. The city's combination of relatively affordable studio space (historically), a culture that values craft over brand recognition, and a customer base willing to pay for local and handmade has sustained a maker economy that most comparable cities have lost.
            </p>
            <p className="mt-4">
              The maker Portlander might run a food cart that became a restaurant, operate a pottery studio that also teaches classes, or build custom bicycles in a Southeast Portland shop. They tend to know each other — Portland's creative economy is interconnected enough that the furniture maker knows the ceramicist who knows the textile designer — and they share a set of values around quality, locality, and sustainable livelihood that feels like a conscious alternative to the scale-at-all-costs model.
            </p>
            <p className="mt-4">
              What they value: the ability to make a living doing work that matters, in a place that appreciates it. Portland's culture of buying local isn't just a slogan here — it's what keeps the makers' lights on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Neighborhood Loyalist</h2>
            <p>
              Ask a Portlander where they're from and they'll give you a neighborhood before they give you a city. "I'm from Sellwood." "I live in Alberta." "We're over in St. Johns." Portland's neighborhoods are genuinely distinct — in history, character, demographics, and feel — and residents tend to identify with them the way people elsewhere identify with whole cities.
            </p>
            <p className="mt-4">
              The neighborhood loyalist knows their corner store owner by name, attends neighborhood association meetings, has strong feelings about proposed zoning changes on their block, and would probably rather miss a party than skip the Last Thursday art walk on Alberta. They volunteer for community cleanups. They bring food to block parties. They are the civic tissue that holds the city together at the street level.
            </p>
            <p className="mt-4">
              What they value: community at a human scale. Portland's 94 recognized neighborhood associations aren't just bureaucratic structures — they're evidence of a city where people believe the block they live on is worth fighting for.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Food and Drink Person</h2>
            <p>
              Portland has produced a food culture that punches well above the city's size — a James Beard Award-winning restaurant scene, a craft beer industry that helped define the category nationally, a coffee culture that pioneered the specialty roaster model, and a food cart ecosystem that has been studied and imitated across the country.
            </p>
            <p className="mt-4">
              The food-and-drink Portlander has a farmers' market routine, knows which cart pods are worth the detour, has opinions about Portland's best ramen that they will share without being asked, and treats a new restaurant opening with the same attention some people give to sports. They are not foodies in the precious sense — they tend to distrust pretension and seek out the places that are serious about the food without being serious about the atmosphere.
            </p>
            <p className="mt-4">
              What they value: quality that isn't performative. The best meal in Portland is often served in a converted garage on a paper plate, and that is considered a feature, not a bug.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Transplant</h2>
            <p>
              A significant portion of Portland's population came from somewhere else and chose to stay. California, the Midwest, the South, New York — people arrive for school, for a job, for a partner, or because Portland was on a list somewhere and something clicked. Many of them end up more Portland than the natives.
            </p>
            <p className="mt-4">
              The transplant tends to arrive with specific intentions — to live more slowly, more locally, more intentionally than wherever they came from allowed. Portland's scale makes that possible in a way that larger cities don't. You can actually know your neighborhood here. You can bike to most things. The city is big enough to be interesting and small enough to navigate.
            </p>
            <p className="mt-4">
              What they value: the specific version of life Portland makes available — urban enough to have everything you need, human enough not to feel anonymous. Many transplants describe Portland as the first place that felt like it fit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The OG</h2>
            <p>
              Then there are the Portlanders whose families have been here for generations — people who remember when Southeast Division was unremarkable, when the Pearl District was a railyard, when St. Johns was still debating whether it wanted to be annexed. They have watched the city change and hold a kind of institutional memory that newcomers can't replicate.
            </p>
            <p className="mt-4">
              The OG Portlander has mixed feelings about what Portland has become — the rents, the displacement, the loss of places that mattered. But they are also, often, the people most invested in what Portland actually is beneath the reputation: a working city with a complicated history, genuine community institutions, and a particular stubbornness about doing things its own way.
            </p>
            <p className="mt-4">
              What they value: the city underneath the city — the parts that predate the hype, the neighborhoods that didn't get cleaned up for visitors, the history that didn't make it onto the tourism brochure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What They Share</h2>
            <p>
              Across all of it — the hikers and the food cart devotees, the makers and the neighborhood association presidents, the transplants and the multigenerational families — there is a shared instinct toward the local and the independent. Portlanders tend to be suspicious of scale. They prefer the thing built here over the thing imported from somewhere else. They value the particular over the generic.
            </p>
            <p className="mt-4">
              That instinct has shaped everything about the city: the food scene, the independent bookstores, the neighborhood commercial strips, the craft industries, the community organizations. It is not a marketing slogan. It is a genuine cultural orientation, imperfect and inconsistently applied but real enough to have produced something recognizable.
            </p>
            <p className="mt-4">
              Good PDX exists because of that orientation. This city is worth knowing carefully — and the people in it are a big part of why.
            </p>
          </section>

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
