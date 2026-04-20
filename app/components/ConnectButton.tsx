'use client'

import { MessageCircle } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/navigation'

interface Props {
  placeId: string
  placeName: string
}

export default function ConnectButton({ placeId, placeName }: Props) {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  function handleClick() {
    if (!isLoggedIn) {
      router.push(`/sign-in?redirect=/directory/${placeId}`)
      return
    }
    // TODO: open messaging thread when auth + messaging is built
    router.push(`/messages/new?business=${placeId}`)
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#1d4a2f] text-white text-sm font-semibold rounded-xl hover:bg-[#2d6a4f] transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Connect with this business
      </button>
      {!isLoggedIn && (
        <p className="text-xs text-gray-400 pl-1">
          <a href={`/sign-in?redirect=/directory/${placeId}`} className="text-[#1d4a2f] font-medium hover:underline">
            Sign in
          </a>{' '}
          to message businesses
        </p>
      )}
    </div>
  )
}
