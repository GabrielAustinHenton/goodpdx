import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const placeId = request.nextUrl.searchParams.get('id')
  if (!placeId) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'API key not configured' }, { status: 500 })

  const fields = [
    'id', 'displayName', 'formattedAddress', 'rating', 'userRatingCount',
    'priceLevel', 'primaryTypeDisplayName', 'websiteUri', 'nationalPhoneNumber',
    'regularOpeningHours', 'photos', 'editorialSummary', 'reviews',
    'delivery', 'dineIn', 'takeout', 'reservable',
    'servesBeer', 'servesWine', 'servesBrunch', 'servesBreakfast',
    'servesLunch', 'servesDinner', 'servesCoffee',
    'accessibilityOptions', 'googleMapsUri',
  ].join(',')

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': fields,
    },
  })

  if (!res.ok) {
    const err = await res.text()
    return NextResponse.json({ error: err }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
