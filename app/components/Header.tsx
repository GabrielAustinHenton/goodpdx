'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Food', href: '/goodfood' },
  { label: 'Coffee', href: '/coffee' },
  { label: 'Arts', href: '/art' },
  { label: 'Parks', href: '/parks' },
  { label: 'History', href: '/history' },
  { label: 'Directory', href: '/directory' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-green-700 font-bold text-xl tracking-tight">Good PDX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-green-700 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors font-medium"
          >
            Join
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link href="/sign-in" className="text-gray-700 font-medium">Sign in</Link>
          <Link href="/sign-up" className="text-sm bg-green-700 text-white px-4 py-2 rounded-full text-center font-medium">
            Join
          </Link>
        </div>
      )}
    </header>
  )
}
