'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/directory?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search businesses, neighborhoods, events…"
          className="flex-1 px-6 py-4 text-gray-800 text-lg outline-none bg-transparent"
        />
        <button
          type="submit"
          className="px-6 py-4 bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  )
}
