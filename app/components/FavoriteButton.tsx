'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

interface Props {
  placeId: string
  placeName: string
}

export default function FavoriteButton({ placeId, placeName }: Props) {
  const { isLoggedIn } = useAuth()
  const [favorited, setFavorited] = useState(false)
  const [showNudge, setShowNudge] = useState(false)

  function handleClick() {
    if (!isLoggedIn) {
      setShowNudge(true)
      setTimeout(() => setShowNudge(false), 3000)
      return
    }
    setFavorited((f) => !f)
    // TODO: persist to Supabase when auth is wired up
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <button
        onClick={handleClick}
        aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
          favorited
            ? 'bg-red-50 border-red-200 text-red-600'
            : 'bg-white border-gray-200 text-gray-600 hover:border-[#1d4a2f]/30 hover:text-[#1d4a2f]'
        }`}
      >
        <Heart className={`w-4 h-4 ${favorited ? 'fill-red-500 text-red-500' : ''}`} />
        {favorited ? 'Saved' : 'Save'}
      </button>

      {showNudge && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg z-10">
          <a href={`/sign-in?redirect=/directory/${placeId}`} className="underline underline-offset-2">
            Sign in
          </a>{' '}
          to save favorites
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      )}
    </div>
  )
}
