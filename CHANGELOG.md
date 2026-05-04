# Good PDX — Changelog

A running record of features, content, and fixes shipped to goodpdx.com.

---

## [Unreleased]

### Added
- 10 new neighborhood pages: Buckman, Sunnyside, Foster-Powell, Hollywood, Grant Park, Beaumont-Wilshire, Multnomah Village, University Park, Portsmouth, Cully
- Hub page (`/neighborhoods`) updated to 28 neighborhood cards
- **CMS** — WordPress-style inline editing for all content pages, visible only to `gabriel@goodpdx.com`
  - `EditableContent` client component with Tiptap rich text editor (bold, italic, headings, lists, links)
  - Floating "✏️ Edit Page" button on every content page when admin is signed in
  - Saves instantly to Supabase (`page_content` table); published content replaces static JSX on next visit
  - API route `GET/POST /api/content` with Clerk server-side admin verification
  - All 50+ pages updated to wrap prose sections in `EditableContent`
- `/portlanders` page — types of Portlanders and what they value
- `/bridges` page rebuilt — all 12 Willamette bridges with full history, listed north to south
- Homepage stats: all 4 now link to their respective pages (650K+ → `/portlanders`, 94 → `/neighborhoods`, 12 → `/bridges`, 1851 → `/history`); hover turns number green and label white
- Footer: Good PDX logo/tagline block has white border; link columns reordered (columns left + Good PDX box right on desktop, columns top + Good PDX box bottom on mobile); column spacing increased

---

## 2026-04-20

### Fixed
- Nested `<a>` hydration error in `/directory` search results — replaced `Link` wrapper with `div + onClick` to avoid invalid `<a>` inside `<a>` caused by phone/website anchors inside the card

---

## 2026-04-20 (earlier)

### Added
- 18 neighborhood pages spanning all Portland quadrants: Pearl District, Alberta Arts District, Mississippi/Boise, Hawthorne, Division/Richmond, Nob Hill, Old Town/Chinatown, Sellwood-Moreland, St. Johns, Irvington, Eliot/Albina, Ladd's Addition, Woodstock, Montavilla, Overlook, Kenton, Goose Hollow, Concordia
- Neighborhoods hub page (`/neighborhoods`) with 3-column grid, quadrant color coding, and 94-neighborhood footnote
- Neighborhoods as 13th item in CategoryGrid expandable section (Map icon)
- History long-reads: "The People Before Portland" (`/history/the-people-before`) and "Crimps and the Shanghai Trade" (`/history/crimps-and-shanghai`) — both with cited sources
- Blog post: "Why Good PDX is a Benefit Company" (`/blog/benefit-company`)
- All category pages built out with real content and cited external links: Coffee, Hikes, Art, Music, Film & Stage, Hot Springs, Swimming, Made Here, Wellness, Infrastructure, Bridges, Airport, Transit, Development, Blog

### Changed
- Homepage stat updated to `94 Neighborhoods` (linked to `/neighborhoods`)
- Hero top padding fixed sitewide — `py-16 px-5` → `pt-20 pb-16 px-5` to prevent back links from crowding the header
- CategoryGrid "Show Less" button removed entirely
- Coffee page: "Saturday" → "Sunday"
- "BROWSE" label above Explore Portland section removed (whitespace preserved)
- Vanport HISTORY badge layout fixed (removed `inline-block` conflicting class)
- OHS Vanport exhibit added to sources on `/history/vanport`
- Forest Park heading simplified (removed `: A Forest, Not a Park`)

---

## 2026-04-19

### Added
- Initial content pages for all CategoryGrid categories
- CategoryGrid: 5 visible items + amber "More" card as 6th slot
- Header logo forces full page reload when already on `/` (resets CategoryGrid expanded state)
- Featured story for "Why Good PDX is a Benefit Company" on homepage

### Changed
- Whitespace above "Stories" and "Browse" sections matched (`pt-3`)
- Less button border removed from CategoryGrid

---

## 2026-04-18 (Initial build)

### Added
- Next.js 15 app with Tailwind CSS 4
- Homepage with hero, CategoryGrid, featured stories, Around Portland links, and business CTA
- Header with logo, nav, sign-in/sign-up
- `/directory` with Google Places API search, result cards, and detail pages
- `/sign-in` and `/sign-up` with Clerk authentication
- `/parks`, `/goodfood` category pages
- Vanport history long-read (`/history/vanport`) with cited sources
- Neighborhoods stat on homepage
