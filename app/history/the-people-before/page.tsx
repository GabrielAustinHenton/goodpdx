import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'The People Before Portland — Good PDX',
  description: 'For thousands of years before Portland existed, the Chinookan peoples lived, traded, and thrived on this same ground. Here is their story.',
}

const sources = [
  { label: 'Oregon Encyclopedia — Portland Basin Chinookan Villages', href: 'https://www.oregonencyclopedia.org/articles/wappato_valley_villages/' },
  { label: 'Oregon Encyclopedia — Multnomah (Sauvie Island Indian Village)', href: 'https://www.oregonencyclopedia.org/articles/multnomah_indians/' },
  { label: 'Oregon History Project — First Peoples in the Portland Basin', href: 'https://www.oregonhistoryproject.org/narratives/commerce-climate-and-community-a-history-of-portland-and-its-people/introduction-3/first-peoples-in-the-portland-basin/' },
  { label: 'Oregon History Project — Chinookans of the Lower Columbia River', href: 'https://www.oregonhistoryproject.org/articles/historical-records/chinookans-of-the-lower-columbia-river/' },
  { label: 'Multnomah people — Wikipedia', href: 'https://en.wikipedia.org/wiki/Multnomah_people' },
  { label: 'Confederated Tribes of Grand Ronde — Our Homelands', href: 'https://www.grandronde.org/culture-history/our-homelands/' },
  { label: 'Confederated Tribes of Grand Ronde — Treaties', href: 'https://www.grandronde.org/culture-history/treaties/' },
  { label: 'Discover Lewis & Clark — The Multnomahs', href: 'https://lewis-clark.org/native-nations/chinookan-peoples/multnomahs/' },
  { label: 'Willamette Week — Portland, Pre-Pilgrim', href: 'https://www.wweek.com/restaurants/2013/11/19/portland-pre-pilgrim/' },
]

export default function ThePeopleBeforePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* Hero */}
      <div className="bg-[#2a1a0a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/history" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Portland History
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">History</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The People Before Portland
          </h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            For at least 11,000 years before a coin toss named this city, people lived here — fishing the same rivers, sheltering under the same ridgeline, building something worth understanding.
          </p>
          <div className="mt-6 text-sm text-amber-300/50">Portland History</div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">This Ground, Before the City</h2>
            <p>
              Stand at the waterfront in downtown Portland and you are standing on one of the most productive landscapes in North America. Two rivers meet here — the Willamette and the Columbia — and where rivers meet, life concentrates. Salmon. Sturgeon. Waterfowl in numbers that early explorers described as darkening the sky. A plant called wapato — its starchy tubers growing thick in the shallow lakes and sloughs — that fed whole populations through winter. Before Portland was a city, this was one of the most densely inhabited places in the Pacific Northwest.
            </p>
            <p className="mt-4">
              <a href="https://www.oregonhistoryproject.org/narratives/commerce-climate-and-community-a-history-of-portland-and-its-people/introduction-3/first-peoples-in-the-portland-basin/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">Humans first arrived in the Portland Basin roughly 11,000 years ago</a> — mobile groups tracking game and following seasonal food sources. Over millennia they became something else: a settled, sophisticated, and interconnected society. By the time Lewis and Clark paddled through in 1805, the Chinookan peoples of the lower Columbia had been building their civilization here for longer than Rome had existed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Wapato Valley</h2>
            <p>
              The region the Chinookan peoples occupied — stretching roughly from present-day Longview, Washington, down through the Portland Basin to the Willamette Falls at Oregon City — was called the Wappato Valley by Lewis and Clark, for the abundance of wapato growing everywhere. <a href="https://www.oregonencyclopedia.org/articles/wappato_valley_villages/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">More than thirty villages were documented in the Portland Basin alone</a> during the early 1800s, with a resident population estimated at 4,000 people — swelling to perhaps 10,000 during the spring and summer, when trade, ceremony, and food harvesting brought people from across the region.
            </p>
            <p className="mt-4">
              The largest of these villages — <strong>Cathlapotle</strong>, at the confluence of the Lewis River and the Columbia in present-day Clark County, Washington — held an estimated 900 people in 14 large plank houses. Lewis and Clark visited it in 1806 and described it as one of the most impressive settlements they had encountered on the entire expedition.
            </p>
            <p className="mt-4">
              <strong>Sauvie Island</strong> — the large island at the confluence of the Willamette and Columbia, twelve miles northwest of where downtown Portland now stands — was the heart of this world. The <a href="https://www.oregonencyclopedia.org/articles/multnomah_indians/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">Multnomah people</a>, one of several Chinookan-speaking groups in the region, maintained their principal village there. The island's wetlands produced wapato in extraordinary quantities — the tubers harvested from shallow water by wading in and loosening them with bare feet until they floated to the surface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How They Lived</h2>
            <p>
              The houses of the Portland Basin Chinookans were built from western red cedar — long planks split by hand, fitted together to form structures that ranged from modest family dwellings to communal longhouses reaching a hundred feet in length. <a href="https://www.oregonhistoryproject.org/articles/historical-records/chinookans-of-the-lower-columbia-river/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">In the Wapato Valley, most communities appear to have been fully sedentary</a> — staying year-round in established settlements, not following the seasonal migration pattern common in less productive environments. When the rivers gave this much, you didn't need to wander.
            </p>
            <p className="mt-4">
              The food system was genuinely abundant by any measure. Chinook salmon — the largest Pacific salmon, running up to 100 pounds — came up the Columbia and Willamette each spring in numbers that contemporaries found almost incomprehensible. Sturgeon were caught in the same rivers, some exceeding twelve feet in length. Wapato and camas roots were harvested and stored in quantities sufficient to trade. Deer, elk, and waterfowl rounded out the diet. <a href="https://lewis-clark.org/native-nations/chinookan-peoples/multnomahs/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">The First Salmon Ceremony</a> — a ritual welcoming the annual chinook run each late May — marked the most important moment in the spiritual calendar and acknowledged the salmon as a partner in life, not merely a resource.
            </p>
            <p className="mt-4">
              The Chinookans were <a href="https://en.wikipedia.org/wiki/Multnomah_people" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">extraordinary canoe builders and traders</a>. Their vessels — hollowed from single cedar logs, often of great size — moved goods up and down the Columbia trade network that stretched from the Pacific Coast to the high plateau. The lower Columbia was the commercial center of this network, and the Chinookan peoples were its most skilled participants. Baskets woven here were traded hundreds of miles inland. Dentalia shells, dried fish, slaves, and canoes moved along established routes in a trade economy sophisticated enough to sustain specialization.
            </p>
            <p className="mt-4">
              Chinookan society was stratified. There were classes of free people — ranked by birth, wealth, and status — and slaves, who are estimated to have made up roughly a quarter of the population in some communities. Slaves were acquired through warfare and trade, and their status was heritable. Wealth was displayed and redistributed through ceremonies. Social standing mattered deeply, and it was expressed through possessions, through the quality of one's canoe, and through the practice of <strong>cranial flattening</strong> — gently binding the foreheads of infants to produce a sloped profile that was considered a mark of free birth and beauty. Slaves were not subjected to it; the shape of a person's head announced their status to every stranger.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">First Contact, and What Followed</h2>
            <p>
              European ships began appearing on the Oregon coast in the late 18th century. The trade that followed — primarily in sea otter pelts — brought manufactured goods into the Chinookan economy along with something far more consequential: disease.
            </p>
            <p className="mt-4">
              The populations of the Portland Basin had no immunity to smallpox, measles, or malaria. The epidemics came in waves. <a href="https://www.oregonencyclopedia.org/articles/multnomah_indians/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">Between the 1770s and the 1840s, disease killed an estimated 50 to 90 percent of the Chinookan population</a>. When Lewis and Clark traveled through in 1805 and 1806, they were already seeing a landscape in the early stages of demographic collapse — villages that had been full a generation earlier were reduced to handfuls of people living among the houses of the dead.
            </p>
            <p className="mt-4">
              The fever epidemic of 1830–33 — likely malaria, introduced by fur traders from the Hudson's Bay Company at Fort Vancouver — was the most devastating single event. The lower Willamette Valley was essentially emptied. Observers described bodies lying unburied along the riverbanks, villages abandoned, fires gone cold. The Multnomah people, who had numbered in the thousands, were reduced to a few dozen survivors.
            </p>
            <p className="mt-4">
              American settlers began arriving in significant numbers in the 1840s via the Oregon Trail. They moved into a landscape already hollowed by epidemic — and the relative emptiness of the Willamette Valley became the justification for taking it. The survivors of the great epidemics were rarely consulted about this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Treaties and the Removal</h2>
            <p>
              In 1855, the United States government negotiated a series of treaties with the tribes of western Oregon. The <a href="https://www.oregonencyclopedia.org/articles/kalapuya_treaty/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">Dayton Treaty of January 1855</a> — signed by representatives of the Kalapuya, Molala, Clackamas, and other Willamette Valley peoples — ceded title to millions of acres of ancestral land in exchange for a reservation, annuities, and promises of services that were inconsistently kept.
            </p>
            <p className="mt-4">
              The signatories were <a href="https://www.grandronde.org/culture-history/our-homelands/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">forcibly relocated to the Grand Ronde Reservation</a> — established in 1857 in the Coast Range southwest of Portland — during the winter of 1855–56. They walked in winter, on bad roads, many of them sick. What they left behind was the land that became Oregon.
            </p>
            <p className="mt-4">
              The <a href="https://www.grandronde.org/culture-history/treaties/" target="_blank" rel="noopener noreferrer" className="text-[#2a1a0a] hover:underline">Confederated Tribes of Grand Ronde</a> today represent the descendants of at least 27 tribes and bands from western Oregon. Their reservation, which was shrunk dramatically over the following decades, was partially restored in 1983. They are a federally recognized tribe, a sovereign nation, operating Spirit Mountain Casino and a broad range of tribal services.
            </p>
            <p className="mt-4">
              The land acknowledgment used today in Portland — recognizing that the city is built on the traditional homeland of the Multnomah, Kathlamet, Clackamas, Tumwater, Tualatin Kalapuya, Molalla, and many other peoples — is a statement of historical fact. The city that exists here was built on land that was taken, from people who had been here for millennia. That history is not prologue. It is context for everything that followed.
            </p>
          </section>

        </div>

        {/* Sources */}
        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Sources & Further Reading</h3>
          <ul className="space-y-3">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#2a1a0a] hover:underline">
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-200">
          <Link href="/history" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> More Portland History
          </Link>
        </div>
      </div>
    </div>
  )
}
