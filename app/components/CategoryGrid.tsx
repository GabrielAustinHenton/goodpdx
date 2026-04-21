'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, UtensilsCrossed, Coffee, TreePine, Footprints, Palette, Music2, Clapperboard, BookOpen, Waves, PersonStanding, Hammer, Heart, HardHat, ArrowLeftRight, PlaneTakeoff, TrainFront, Building2, LayoutList } from 'lucide-react'

const categories = [
  { label: 'Food & Drink', href: '/goodfood', Icon: UtensilsCrossed },
  { label: 'Coffee', href: '/coffee', Icon: Coffee },
  { label: 'Parks', href: '/parks', Icon: TreePine },
  { label: 'Hikes', href: '/hikes', Icon: Footprints },
  { label: 'Arts', href: '/art', Icon: Palette },
  { label: 'Music', href: '/music', Icon: Music2 },
  { label: 'Film & Stage', href: '/filmandstage', Icon: Clapperboard },
  { label: 'History', href: '/history', Icon: BookOpen },
  { label: 'Hot Springs', href: '/hotsprings', Icon: Waves },
  { label: 'Swimming', href: '/swim', Icon: PersonStanding },
  { label: 'Made Here', href: '/manufacturing', Icon: Hammer },
  { label: 'Wellness', href: '/healthbeauty', Icon: Heart },
  { label: 'Infrastructure', href: '/infrastructure', Icon: HardHat },
  { label: 'Bridges', href: '/bridges', Icon: ArrowLeftRight },
  { label: 'Airport', href: '/airport', Icon: PlaneTakeoff },
  { label: 'Transit', href: '/transportation', Icon: TrainFront },
  { label: 'Development', href: '/development', Icon: Building2 },
  { label: 'Directory', href: '/directory', Icon: LayoutList },
]

export default function CategoryGrid() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? categories : categories.slice(0, 6)

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {visible.map(({ label, href, Icon }) => {
          const isCoffee = href === '/coffee'
          return (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#2d6a4f]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                isCoffee ? 'bg-[#e8ede6] group-hover:bg-[#d47c2f]' : 'bg-[#e8ede6] group-hover:bg-[#1d4a2f]'
              }`}>
                <Icon className="w-5 h-5 text-[#1d4a2f] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <span className={`text-xs font-semibold leading-tight transition-colors ${
                isCoffee ? 'text-gray-700 group-hover:text-[#d47c2f]' : 'text-gray-700 group-hover:text-[#1d4a2f]'
              }`}>{label}</span>
            </Link>
          )
        })}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#1d4a2f] hover:text-[#2d6a4f] transition-colors mx-auto"
      >
        {expanded ? (
          <><ChevronUp className="w-4 h-4" /> Show less</>
        ) : (
          <><ChevronDown className="w-4 h-4" /> Show {categories.length - 6} more</>
        )}
      </button>
    </div>
  )
}
