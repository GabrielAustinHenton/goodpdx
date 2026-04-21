import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Vanport: The City Portland Forgot — Good PDX',
  description: 'The story of Vanport, Oregon — how the nation\'s largest wartime housing project was destroyed in a single day, and what it means for Portland today.',
}

const sources = [
  { label: 'Oregon Encyclopedia — Vanport', href: 'https://www.oregonencyclopedia.org/articles/vanport/' },
  { label: 'BlackPast.org — Vanport (1942–1948)', href: 'https://blackpast.org/african-american-history/vanport-1942-1948/' },
  { label: 'Smithsonian Magazine — How Oregon\'s Second Largest City Vanished in a Day', href: 'https://www.smithsonianmag.com/history/vanport-oregon-how-countrys-largest-housing-project-vanished-day-180954040/' },
  { label: 'NPR Code Switch — The Time Nature and Racism Teamed Up to Wipe Out a Whole Town', href: 'https://www.npr.org/sections/codeswitch/2015/03/02/389482158/the-time-nature-and-racism-teamed-up-to-wipe-out-a-whole-town' },
  { label: 'Oregon History Project — The Vanport Flood', href: 'https://www.oregonhistoryproject.org/articles/essays/the-vanport-flood/' },
  { label: 'Wikipedia — Vanport, Oregon', href: 'https://en.wikipedia.org/wiki/Vanport,_Oregon' },
  { label: 'Oregon Historical Society — Vanport Exhibit', href: 'https://www.ohs.org/museum/exhibits/vanport.cfm' },
]

export default function VanportPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* Hero */}
      <div className="bg-[#2a1f14] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/history" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Portland History
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">History</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Vanport: The City Portland Forgot
          </h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            How Oregon's second-largest city — home to 40,000 people — was swallowed by the Columbia River in under ten minutes, and what that loss still means today.
          </p>
          <div className="mt-6 text-sm text-amber-300/50">May 30, 1948 · Portland History</div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A City Built Overnight</h2>
            <p>
              In the summer of 1942, the United States was at war and the Kaiser Shipyards on the Columbia River were working around the clock. Tens of thousands of workers were flooding into the Portland area — and there was nowhere for them to live. The federal government's solution was extraordinary: build an entire city from scratch in four months.
            </p>
            <p className="mt-4">
              Vanport rose on a floodplain between Portland and the Columbia River. By the time it was finished, it was the largest wartime public housing project in the nation — 40 square blocks, 9,942 apartment units, its own schools, fire department, post office, movie theater, and even a college. At its peak in 1944, Vanport was home to nearly 40,000 people. It was Oregon's second-largest city.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A New Community — and a Rare One</h2>
            <p>
              Vanport's population was unlike anything Oregon had seen. Before the war, the entire state counted fewer than 1,800 Black residents. The shipyards, actively recruiting workers from the South and Midwest, changed that overnight. By 1946, more than 15,000 African Americans lived in the Portland area — the vast majority of them in Vanport.
            </p>
            <p className="mt-4">
              At its height, Vanport was roughly 40% Black. It was also home to Japanese Americans, many returning from internment camps, and white workers from across the country. Vanport wasn't exactly utopian — housing was still segregated within the development, and racial tensions existed — but it was one of the most integrated communities in Oregon. Vanport hired the first Black teachers in Oregon. Its police force was integrated. The Vanport Interracial Council worked actively to improve community relations.
            </p>
            <p className="mt-4">
              Vanport College, founded in 1946 to serve veterans and local workers who couldn't afford traditional universities, was also integrated from its first day. It would later become Portland State University.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Warning Nobody Heeded</h2>
            <p>
              After the war ended, many of Vanport's white residents moved on to newly built suburbs. By the spring of 1948, Vanport's population had dropped to around 18,500 — including roughly 6,000 African Americans who, unlike their white neighbors, had few options. Oregon's discriminatory housing laws, redlining practices, and outright racial hostility in most Portland neighborhoods meant that Black residents of Vanport had almost nowhere else to go.
            </p>
            <p className="mt-4">
              That spring, snowmelt from the Cascades and Rockies pushed the Columbia River to record levels. By late May, the river was 15 feet above flood stage. The dikes around Vanport held — barely.
            </p>
            <p className="mt-4">
              On the morning of May 30, 1948, the Housing Authority of Portland issued a notice to Vanport residents. It read: <em>"Remember: Dikes are safe at present. You will be warned if necessary. You will have time to leave. Don't get excited."</em>
            </p>
            <p className="mt-4">
              That afternoon, a railroad embankment on the west end of Vanport gave way. The Columbia River poured through a 500-foot gap.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ten Minutes</h2>
            <p>
              By most accounts, Vanport was underwater in less than ten minutes. A wall of water eight to ten feet high swept through the city. Apartment buildings floated off their foundations. Cars, furniture, and people were carried by the current. The entire city — 40 blocks, nearly 10,000 units — was obliterated.
            </p>
            <p className="mt-4">
              Fifteen people were confirmed dead, though historians believe the actual toll was higher, as many residents — particularly migrants with no family records in Oregon — were simply never accounted for. 18,500 people were left homeless in a single afternoon.
            </p>
            <p className="mt-4">
              The city of Vanport was never rebuilt. The land sat empty. Today, the site is occupied by the Delta Park sports complex and the Portland International Raceway — with no significant memorial to the community that once stood there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Aftermath: Albina and the Shape of Modern Portland</h2>
            <p>
              For white survivors, the options were difficult but navigable. For Black survivors, they were brutal. Portland's housing market was openly segregated. The few neighborhoods accessible to Black residents were concentrated in a district called Albina, on the east side of the Willamette River.
            </p>
            <p className="mt-4">
              Vanport's 6,000 Black residents were essentially funneled into Albina. The neighborhood became overcrowded quickly — an aging housing stock, under-resourced schools, and systematic disinvestment defined the area for decades. The concentrated poverty and segregation that shaped North and Northeast Portland through the latter half of the 20th century trace directly to the choices made — and not made — after the Vanport flood.
            </p>
            <p className="mt-4">
              The flood did not cause racism. But it focused its effects. A community that had been geographically dispersed across Vanport was now compressed into a single neighborhood, with limited economic mobility, limited political power, and limited options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Vanport Means Now</h2>
            <p>
              Vanport is not merely a historical footnote. It is the origin point for understanding Portland's racial geography — why North and Northeast Portland became predominantly Black, why those neighborhoods were later devastated by urban renewal and highway construction, and why gentrification there carries the particular weight it does.
            </p>
            <p className="mt-4">
              Portland often presents itself as a progressive, inclusive city. Vanport is a necessary reminder that the city's physical and demographic shape was determined by policy choices — choices about who gets warnings, who gets housing, and who gets rebuilt.
            </p>
            <p className="mt-4">
              Vanport College became Portland State University. The workers who built the ships that helped win World War II were largely Black men and women who came to Oregon with the promise of a better life. Many of them never got it. Their descendants are still here. Their story is Portland's story.
            </p>
          </section>

        </div>

        {/* Sources */}
        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Sources & Further Reading</h3>
          <ul className="space-y-3">
            {sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-[#1d4a2f] hover:underline"
                >
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Related */}
        <div className="mt-10 pt-10 border-t border-gray-200">
          <Link href="/history" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4a2f] hover:text-[#2d6a4f]">
            <ArrowLeft className="w-4 h-4" /> More Portland History
          </Link>
        </div>
      </div>
    </div>
  )
}
