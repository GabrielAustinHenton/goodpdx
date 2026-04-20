import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "./components/Header";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good PDX — Portland's Community Hub",
  description: "Discover Portland businesses, history, parks, food, arts, and more. Good PDX connects you to the best of Portland, Oregon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8f7f4] text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#0f2a1a] text-green-100 py-14 mt-8">
          <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#2d6a4f] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="font-bold text-white">Good PDX</span>
              </div>
              <p className="text-sm text-green-400 leading-relaxed max-w-xs">
                A community-first guide to Portland, Oregon. Built with love by locals, for locals.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">Explore</p>
              <ul className="space-y-2.5 text-sm text-green-400">
                <li><a href="/goodfood" className="hover:text-white transition-colors">Food &amp; Drink</a></li>
                <li><a href="/coffee" className="hover:text-white transition-colors">Coffee</a></li>
                <li><a href="/parks" className="hover:text-white transition-colors">Parks</a></li>
                <li><a href="/art" className="hover:text-white transition-colors">Arts &amp; Culture</a></li>
                <li><a href="/hikes" className="hover:text-white transition-colors">Hikes</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">Discover</p>
              <ul className="space-y-2.5 text-sm text-green-400">
                <li><a href="/history" className="hover:text-white transition-colors">Portland History</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Business Directory</a></li>
                <li><a href="/bridges" className="hover:text-white transition-colors">Bridges</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">Community</p>
              <ul className="space-y-2.5 text-sm text-green-400">
                <li><a href="/sign-up" className="hover:text-white transition-colors">Join Good PDX</a></li>
                <li><a href="/sign-in" className="hover:text-white transition-colors">Sign In</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-5 mt-12 pt-8 border-t border-[#1d4a2f] flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-green-600">
            <span>© {new Date().getFullYear()} Good PDX LLC · Portland, Oregon</span>
            <span>An Oregon Benefit Company</span>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
