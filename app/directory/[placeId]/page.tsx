import Link from 'next/link'
import { ArrowLeft, Star, MapPin, Phone, Globe, ExternalLink, Clock } from 'lucide-react'
import FavoriteButton from '../../components/FavoriteButton'
import ConnectButton from '../../components/ConnectButton'

const PRICE_LABELS: Record<string, string> = {
  PRICE_LEVEL_FREE: 'Free',
  PRICE_LEVEL_INEXPENSIVE: '$',
  PRICE_LEVEL_MODERATE: '$$',
  PRICE_LEVEL_EXPENSIVE: '$$$',
  PRICE_LEVEL_VERY_EXPENSIVE: '$$$$',
}

async function getPlace(placeId: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const fields = [
    'id', 'displayName', 'formattedAddress', 'rating', 'userRatingCount',
    'priceLevel', 'primaryTypeDisplayName', 'websiteUri', 'nationalPhoneNumber',
    'regularOpeningHours', 'editorialSummary', 'reviews',
    'delivery', 'dineIn', 'takeout', 'reservable',
    'servesBeer', 'servesWine', 'servesBrunch', 'servesBreakfast',
    'servesLunch', 'servesDinner', 'servesCoffee', 'googleMapsUri',
  ].join(',')

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': apiKey!,
      'X-Goog-FieldMask': fields,
    },
    next: { revalidate: 3600 },
  })

  if (!res.ok) return null
  return res.json()
}

export default async function PlaceDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ placeId: string }>
  searchParams: Promise<{ back?: string }>
}) {
  const { placeId } = await params
  const { back } = await searchParams
  const place = await getPlace(placeId)

  if (!place) {
    return (
      <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Place not found.</p>
          <Link href="/directory" className="text-[#1d4a2f] font-semibold">← Back to search</Link>
        </div>
      </div>
    )
  }

  const backHref = back ? `/directory?q=${encodeURIComponent(back)}` : '/directory'

  const amenities = [
    place.dineIn && 'Dine-in',
    place.takeout && 'Takeout',
    place.delivery && 'Delivery',
    place.reservable && 'Reservations',
    place.servesBrunch && 'Brunch',
    place.servesBreakfast && 'Breakfast',
    place.servesLunch && 'Lunch',
    place.servesDinner && 'Dinner',
    place.servesCoffee && 'Coffee',
    place.servesBeer && 'Beer',
    place.servesWine && 'Wine',
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Header */}
      <div className="bg-[#1d4a2f] px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <Link href={backHref} className="inline-flex items-center gap-1.5 text-green-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to results
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{place.displayName?.text}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            {place.primaryTypeDisplayName && (
              <span className="text-sm text-green-200 bg-white/10 px-3 py-1 rounded-full">
                {place.primaryTypeDisplayName.text}
              </span>
            )}
            {place.priceLevel && PRICE_LABELS[place.priceLevel] && (
              <span className="text-sm text-green-200">{PRICE_LABELS[place.priceLevel]}</span>
            )}
            {place.rating && (
              <span className="flex items-center gap-1 text-sm text-green-200">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                {place.rating.toFixed(1)}
                {place.userRatingCount && (
                  <span className="text-green-300/70">({place.userRatingCount.toLocaleString()} reviews)</span>
                )}
              </span>
            )}
            {place.regularOpeningHours?.openNow !== undefined && (
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                place.regularOpeningHours.openNow ? 'bg-green-400/20 text-green-300' : 'bg-red-400/20 text-red-300'
              }`}>
                {place.regularOpeningHours.openNow ? 'Open now' : 'Closed'}
              </span>
            )}
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <ConnectButton placeId={placeId} placeName={place.displayName?.text ?? ''} />
            <FavoriteButton placeId={placeId} placeName={place.displayName?.text ?? ''} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-6">

        {/* Summary */}
        {place.editorialSummary?.text && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">{place.editorialSummary.text}</p>
          </div>
        )}

        {/* Info */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
          <h2 className="font-bold text-gray-900 text-lg">Info</h2>

          {place.formattedAddress && (
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#1d4a2f]" />
              <span>{place.formattedAddress}</span>
            </div>
          )}

          {place.nationalPhoneNumber && (
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="w-4 h-4 shrink-0 text-[#1d4a2f]" />
              <a href={`tel:${place.nationalPhoneNumber}`} className="hover:text-[#1d4a2f] transition-colors">
                {place.nationalPhoneNumber}
              </a>
            </div>
          )}

          {place.websiteUri && (
            <div className="flex items-center gap-3 text-sm">
              <Globe className="w-4 h-4 shrink-0 text-[#1d4a2f]" />
              <a href={place.websiteUri} target="_blank" rel="noopener noreferrer"
                className="text-[#1d4a2f] hover:underline flex items-center gap-1 font-medium">
                Visit website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}

          {place.googleMapsUri && (
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 shrink-0 text-[#1d4a2f]" />
              <a href={place.googleMapsUri} target="_blank" rel="noopener noreferrer"
                className="text-[#1d4a2f] hover:underline flex items-center gap-1 font-medium">
                View on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>

        {/* Hours */}
        {place.regularOpeningHours?.weekdayDescriptions && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1d4a2f]" /> Hours
            </h2>
            <ul className="space-y-1.5">
              {place.regularOpeningHours.weekdayDescriptions.map((line: string) => (
                <li key={line} className="text-sm text-gray-600">{line}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {amenities.map((a) => (
                <span key={a} className="text-sm bg-[#e8ede6] text-[#1d4a2f] font-medium px-3 py-1 rounded-full">
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {place.reviews?.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 text-lg mb-5">Reviews</h2>
            <div className="space-y-5">
              {place.reviews.slice(0, 5).map((review: {
                authorAttribution?: { displayName?: string }
                rating?: number
                relativePublishTimeDescription?: string
                text?: { text?: string }
              }, i: number) => (
                <div key={i} className="border-t border-gray-50 first:border-0 pt-5 first:pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm text-gray-800">
                      {review.authorAttribution?.displayName ?? 'Anonymous'}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating ?? 0 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                      {review.relativePublishTimeDescription && (
                        <span className="text-xs text-gray-400 ml-1">{review.relativePublishTimeDescription}</span>
                      )}
                    </div>
                  </div>
                  {review.text?.text && (
                    <p className="text-sm text-gray-600 leading-relaxed">{review.text.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
