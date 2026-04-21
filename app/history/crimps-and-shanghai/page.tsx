import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Crimps and the Shanghai Trade — Good PDX',
  description: 'In the 1880s and 1890s, Portland was the shanghaing capital of the world. Men were drugged, kidnapped, and sold to ship captains. This is how it worked.',
}

const sources = [
  { label: 'Oregon Encyclopedia — Shanghaiing and the Shanghai Tunnels Myth', href: 'https://www.oregonencyclopedia.org/articles/shanghai_tunnels_myth/' },
  { label: 'Offbeat Oregon — Portland Was the Shanghai Capital of the World', href: 'https://offbeatoregon.com/H1006c_ShanghaiPDX.html' },
  { label: 'Offbeat Oregon — Oregon\'s Most Notorious Shanghaier: Bunco Kelley', href: 'https://offbeatoregon.com/1407b.bunco-kelley-part1-the-facts.html' },
  { label: 'PDX Social History Guide — Crimping', href: 'https://pdxsocialhistory.org/stories/crimping.html' },
  { label: 'HistoryNet — Of Crimes and Shanghaied Sailors', href: 'https://historynet.com/of-crimes-and-shanghaied-sailors/' },
  { label: 'Oregon Encyclopedia — Portland Seamen\'s Friend Society', href: 'https://www.oregonencyclopedia.org/articles/portland_seamen_s_friend_society/' },
  { label: 'Shanghai Tunnels — Wikipedia', href: 'https://en.wikipedia.org/wiki/Shanghai_tunnels' },
  { label: 'Joseph Kelly (crimper) — Wikipedia', href: 'https://en.wikipedia.org/wiki/Joseph_Kelly_(crimper)' },
  { label: 'Portland\'s Shanghai Tunnels — Atlas Obscura', href: 'https://www.atlasobscura.com/places/portland-s-shanghai-tunnels' },
]

export default function CrimpsAndShanghaiPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* Hero */}
      <div className="bg-[#1a0f0a] text-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/history" className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Portland History
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">History</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Crimps and the Shanghai Trade
          </h1>
          <p className="text-amber-100/70 text-lg leading-relaxed max-w-2xl">
            In the 1880s and 1890s, Portland's waterfront ran on coercion. Men were drugged, tricked, and sold to ship captains. The president of the International Seamen's Union called Portland "the greatest crimping den in America." He wasn't wrong.
          </p>
          <div className="mt-6 text-sm text-amber-300/50">1870s–1906 · Portland History</div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Ships and the Problem</h2>
            <p>
              In the 1880s and 1890s, Portland was a serious commercial port. Grain from the Willamette Valley moved in bulk to markets in Europe, Asia, and South America. At any given time, <a href="https://offbeatoregon.com/H1006c_ShanghaiPDX.html" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">a hundred deepwater sailing ships — the great windjammers — might be anchored in the Willamette</a>, waiting to load. Those ships needed crew.
            </p>
            <p className="mt-4">
              They rarely had it. Sailors who reached Portland after months at sea did what anyone would do — they left. They jumped ship. They took their wages to the saloons and boardinghouses of the waterfront district and disappeared into a city that had more to offer than the cramped, brutal, poorly paid life aboard a square-rigged sailing vessel. Captains readying to sail with a full hold of grain and a half-empty crew had a problem. The crimps had a solution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Crimp's Trade</h2>
            <p>
              A crimp was, in theory, a boardinghouse keeper who served sailors. In practice, he was a labor broker operating in a legal gray zone that stretched from gray to black depending on the circumstances.
            </p>
            <p className="mt-4">
              The basic model was debt bondage. A crimp would extend credit to sailors, loggers, and unemployed men in the waterfront district — a bed, meals, whiskey, company — and let the tab accumulate until the man couldn't pay. The crimp would then approach a ship captain: I have twenty men who need work. The captain paid the crimp a "blood money" fee — typically <a href="https://pdxsocialhistory.org/stories/crimping.html" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">$30 to $100 per sailor</a> — and received a signed labor contract and a body, conscious or not. The man's wages for the first weeks or months of the voyage went back to the crimp to settle the debt. By the time the sailor cleared his account, the ship was somewhere in the Pacific.
            </p>
            <p className="mt-4">
              The more aggressive version involved knockout drops — chloral hydrate mixed into a drink. A man who walked into a saloon in Old Town Portland in the 1890s and accepted a drink from a stranger might wake up in the forecastle of a ship bound for Cape Horn. This was shanghaiing in its purest form: <a href="https://historynet.com/of-crimes-and-shanghaied-sailors/" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">no consent, no warning, no recourse</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Was Legal — More or Less</h2>
            <p>
              The crimps operated in a system that maritime law, in many ways, enabled. A signed labor contract at sea was enforceable in ways that no land-based labor contract was. A captain could compel a crewman to work. Desertion was a criminal offense. In 1897, the U.S. Supreme Court ruled that <a href="https://www.oregonencyclopedia.org/articles/shanghai_tunnels_myth/" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">the 13th Amendment — which abolished involuntary servitude — did not apply to merchant sailors</a>. The Court held, essentially, that a man who signed a ship's articles had voluntarily surrendered his right to leave. Whether he had signed those articles while coherent was a question the law was not eager to ask.
            </p>
            <p className="mt-4">
              Sailors were among the most legally vulnerable workers in American society. They were paid poorly, subject to physical punishment by officers until late in the 19th century, and unable to quit their jobs mid-voyage without criminal consequences. Andrew Furuseth, president of the International Seamen's Union, <a href="https://offbeatoregon.com/H1006c_ShanghaiPDX.html" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">testified before Congress in 1911</a> that Portland was "the greatest crimping den in America." He spent years lobbying for the Seamen's Act of 1915 — also known as the La Follette Seamen's Act — which finally extended basic labor protections to merchant sailors and largely ended the crimping trade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Joseph "Bunco" Kelly</h2>
            <p>
              No name is more associated with Portland's shanghai era than <a href="https://en.wikipedia.org/wiki/Joseph_Kelly_(crimper)" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">Joseph "Bunco" Kelly</a> — an English-born crimp who operated out of the North End waterfront district in the 1880s and 1890s. His nickname derived from his talent for deception, and his reputation — amplified considerably by 20th-century writers — made him a legend of Portland's vice era.
            </p>
            <p className="mt-4">
              The most famous story about Kelly involves a ship called the <em>Flying Prince</em>, a desperate need for crew, and a group of men Kelly reportedly found in a basement — unconscious from drinking embalming fluid they had mistaken for whiskey. Kelly allegedly delivered the comatose men to the ship's captain, collected his blood money, and sailed them off to sea. The story is almost certainly embellished; historians have found no contemporary record of it. But it has the texture of a place that made such stories feel believable.
            </p>
            <p className="mt-4">
              What is documented: Kelly was arrested multiple times, convicted of murder in 1894 for a killing unrelated to shanghaiing, served time in the Oregon State Penitentiary, and was eventually pardoned. Historians who have studied the actual court records assess him as a <a href="https://offbeatoregon.com/1407b.bunco-kelley-part1-the-facts.html" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">relatively minor operator whose legend was constructed largely after the fact</a> — a useful character for a city that wanted a colorful history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Tunnels — What's True and What Isn't</h2>
            <p>
              The <a href="https://www.atlasobscura.com/places/portland-s-shanghai-tunnels" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">Shanghai Tunnels</a> — a network of passages beneath the Old Town Chinatown neighborhood, connecting the basements of hotels and taverns to the waterfront — are real. They were built in the late 19th century to move goods from ships to basement storage areas, bypassing the congested surface streets.
            </p>
            <p className="mt-4">
              The popular legend — that unconscious or captive men were dragged through these tunnels from bar to ship — is largely unsupported by historical evidence. <a href="https://www.oregonencyclopedia.org/articles/shanghai_tunnels_myth/" target="_blank" rel="noopener noreferrer" className="text-[#1a0f0a] hover:underline">Scholars who have examined the record</a> find plenty of documentation for crimping and shanghaiing in Portland, but no evidence that the tunnels were used for it. The tunnel-as-kidnapping-route story appears to have been invented or heavily elaborated in the 1930s by a writer named Stewart Holbrook and later amplified by tour operators in the 1970s.
            </p>
            <p className="mt-4">
              The truth doesn't need the tunnels to be interesting. Shanghaiing happened in Portland at scale, in the open, in boardinghouses and saloons that were known by name and address. The city's government tolerated it because the port needed it. The men who suffered it had no legal recourse and often no way home. That story — of labor coercion operating under legal cover in a prosperous American port city — is more disturbing than any ghost story told in the tunnels below it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The End of the Era</h2>
            <p>
              The La Follette Seamen's Act of 1915 changed everything. It abolished the criminal penalties for desertion, required minimum safety standards on ships, and established the right of sailors to collect wages in port and leave a vessel that failed to meet basic conditions. Sailors became, legally, workers with rights — and the crimp, who depended entirely on their legal helplessness, lost his function.
            </p>
            <p className="mt-4">
              The transition from sail to steam also played a role. Steamships needed smaller, more skilled crews and operated on tighter schedules that left less time for the informal labor market the crimps had exploited. By the time World War I began, the shanghaiing era in Portland was effectively over.
            </p>
            <p className="mt-4">
              What it left behind was a neighborhood — Old Town — that had been built on vice and commerce in roughly equal measure, a set of tunnels that now draw tourists, and a history that Portland has been processing, mythologizing, and occasionally misrepresenting ever since.
            </p>
          </section>

        </div>

        {/* Sources */}
        <div className="mt-14 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Sources & Further Reading</h3>
          <ul className="space-y-3">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#1a0f0a] hover:underline">
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
