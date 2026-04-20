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
      <div className="flex items-center bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        <svg className="ml-5 w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food, coffee, parks, history…"
          className="flex-1 px-4 py-4 text-gray-800 text-base outline-none bg-transparent placeholder-gray-400"
        />
        <button
          type="submit"
          className="m-1.5 px-6 py-2.5 bg-[#1d4a2f] text-white font-semibold rounded-xl hover:bg-[#2d6a4f] transition-colors text-sm"
        >
          Search
        </button>
      </div>
    </form>
  )
}
