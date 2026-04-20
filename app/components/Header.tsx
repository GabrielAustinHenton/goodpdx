'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#1d4a2f] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-[#1d4a2f] font-bold text-lg tracking-tight">Good PDX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-gray-600 hover:text-[#1d4a2f] hover:bg-[#e8ede6] text-sm font-medium transition-all rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <SignedOut>
            <Link href="/sign-in" className="text-sm text-gray-600 hover:text-[#1d4a2f] font-medium px-3 py-1.5 transition-colors">
              Sign in
            </Link>
            <Link href="/sign-up" className="text-sm bg-[#1d4a2f] text-white px-4 py-2 rounded-xl hover:bg-[#2d6a4f] transition-colors font-semibold">
              Join
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/account" className="text-sm text-gray-600 hover:text-[#1d4a2f] font-medium px-3 py-1.5 transition-colors">
              My Account
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <button
          className="md:hidden text-gray-600 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#1d4a2f] font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100 my-1" />
          <SignedOut>
            <Link href="/sign-in" className="text-gray-700 font-medium py-1">Sign in</Link>
            <Link href="/sign-up" className="bg-[#1d4a2f] text-white px-4 py-2.5 rounded-xl text-center font-semibold text-sm">
              Join Good PDX
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/account" className="text-gray-700 font-medium py-1">My Account</Link>
            <div className="flex items-center gap-2 py-1">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm text-gray-500">Account settings</span>
            </div>
          </SignedIn>
        </div>
      )}
    </header>
  )
}
