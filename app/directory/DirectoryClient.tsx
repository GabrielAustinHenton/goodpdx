'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, Star, MapPin, Phone, Globe, ExternalLink, ChevronRight, Heart } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

interface Place {
  id: string
  displayName?: { text: string }
  formattedAddress?: string
  rating?: number
  userRatingCount?: number
  priceLevel?: string
  primaryTypeDisplayName?: { text: string }
  websiteUri?: string
  nationalPhoneNumber?: string
  regularOpeningHours?: { openNow?: boolean }
  photos?: { name: string }[]
}

const PRICE_LABELS: Record<string, string> = {
  PRICE_LEVEL_FREE: 'Free',
  PRICE_LEVEL_INEXPENSIVE: '$',
  PRICE_LEVEL_MODERATE: '$$',
  PRICE_LEVEL_EXPENSIVE: '$$$',
  PRICE_LEVEL_VERY_EXPENSIVE: '$$$$',
}

export default function DirectoryClient({ initialQuery }: { initialQuery: string }) {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(initialQuery)
  const [input, setInput] = useState(initialQuery)
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!query) return
    setLoading(true)
    setError('')
    fetch(`/api/places/search?q=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setError(data.error)
        else setPlaces(data.places ?? [])
      })
      .catch(() => setError('Something went wrong. Please try again.'))
      .finally(() => setLoading(false))
  }, [query])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/directory?q=${encodeURIComponent(input.trim())}`)
    setQuery(input.trim())
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      {/* Search bar */}
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="flex items-center bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <Search className="ml-5 w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search coffee, food, parks, businesses…"
            className="flex-1 px-4 py-4 text-gray-800 outline-none bg-transparent"
          />
          <button
            type="submit"
            className="m-1.5 px-6 py-2.5 bg-[#1d4a2f] text-white font-semibold rounded-xl hover:bg-[#2d6a4f] transition-colors text-sm"
          >
            Search
          </button>
        </div>
      </form>

      {/* States */}
      {!query && (
        <p className="text-center text-gray-400 mt-20">Enter a search above to find Portland businesses.</p>
      )}

      {loading && (
        <div className="flex justify-center mt-20">
          <div className="w-8 h-8 border-2 border-[#1d4a2f] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <p className="text-center text-red-500 mt-10">{error}</p>
      )}

      {/* Results */}
      {!loading && places.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-6">
            {places.length} results for <span className="font-semibold text-gray-800">"{query}"</span> in Portland
          </p>
          <div className="grid gap-4">
            {places.map((place) => (
              <div
                key={place.id}
                onClick={() => router.push(`/directory/${place.id}?back=${encodeURIComponent(query)}`)}
                className="block bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-[#2d6a4f]/20 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">
                        {place.displayName?.text}
                      </h3>
                      {place.regularOpeningHours?.openNow !== undefined && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          place.regularOpeningHours.openNow
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-600'
                        }`}>
                          {place.regularOpeningHours.openNow ? 'Open' : 'Closed'}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      {place.primaryTypeDisplayName && (
                        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                          {place.primaryTypeDisplayName.text}
                        </span>
                      )}
                      {place.priceLevel && PRICE_LABELS[place.priceLevel] && (
                        <span className="text-xs font-medium text-gray-600">
                          {PRICE_LABELS[place.priceLevel]}
                        </span>
                      )}
                      {place.rating && (
                        <span className="flex items-center gap-1 text-sm">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="font-semibold text-gray-800">{place.rating.toFixed(1)}</span>
                          {place.userRatingCount && (
                            <span className="text-gray-400 text-xs">({place.userRatingCount.toLocaleString()})</span>
                          )}
                        </span>
                      )}
                    </div>

                    {place.formattedAddress && (
                      <p className="flex items-start gap-1.5 text-sm text-gray-500 mt-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                        {place.formattedAddress}
                      </p>
                    )}

                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      {place.nationalPhoneNumber && (
                        <a
                          href={`tel:${place.nationalPhoneNumber}`}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1d4a2f] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {place.nationalPhoneNumber}
                        </a>
                      )}
                      {place.websiteUri && (
                        <a
                          href={place.websiteUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-[#1d4a2f] hover:text-[#2d6a4f] font-medium transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (!isLoggedIn) router.push(`/sign-in?redirect=/directory/${place.id}`)
                      }}
                      title={isLoggedIn ? 'Save to favorites' : 'Sign in to save'}
                      className="p-1.5 rounded-lg text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#1d4a2f] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {!loading && query && places.length === 0 && !error && (
        <p className="text-center text-gray-400 mt-20">No results found for "{query}" in Portland.</p>
      )}
    </div>
  )
}
