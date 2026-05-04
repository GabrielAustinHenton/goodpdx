import { createClient } from '@/lib/supabase'
import { currentUser } from '@clerk/nextjs/server'

const ADMIN_EMAIL = 'gabriel@goodpdx.com'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const pageSlug = url.searchParams.get('slug')
  const sectionKey = url.searchParams.get('section') || 'main'

  if (!pageSlug) return Response.json({ content: null })

  const supabase = createClient()
  const { data } = await supabase
    .from('page_content')
    .select('content')
    .eq('page_slug', pageSlug)
    .eq('section_key', sectionKey)
    .single()

  return Response.json({ content: data?.content || null })
}

export async function POST(req: Request) {
  const user = await currentUser()
  const email = user?.emailAddresses?.[0]?.emailAddress

  if (email !== ADMIN_EMAIL) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { pageSlug, sectionKey = 'main', content } = await req.json()

  if (!pageSlug || !content) {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }

  const supabase = createClient()
  const { error } = await supabase
    .from('page_content')
    .upsert({ page_slug: pageSlug, section_key: sectionKey, content, updated_at: new Date().toISOString() },
      { onConflict: 'page_slug,section_key' })

  if (error) return Response.json({ error: error.message }, { status: 500 })

  return Response.json({ ok: true })
}
