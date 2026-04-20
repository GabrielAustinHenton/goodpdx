import { Suspense } from 'react'
import DirectoryClient from './DirectoryClient'

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = '' } = await searchParams

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#1d4a2f] py-12 px-5 text-center">
        <h1 className="text-3xl font-bold text-white mb-1">Portland Directory</h1>
        <p className="text-green-200 text-sm">Search thousands of local businesses and places</p>
      </div>
      <Suspense fallback={null}>
        <DirectoryClient initialQuery={q} />
      </Suspense>
    </div>
  )
}
