import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-green-900 text-green-100 py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-bold text-white mb-3">Good PDX</p>
              <p className="text-sm text-green-300">A community hub for Portland, Oregon.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Explore</p>
              <ul className="space-y-2 text-sm">
                <li><a href="/goodfood" className="hover:text-white transition-colors">Food &amp; Drink</a></li>
                <li><a href="/coffee" className="hover:text-white transition-colors">Coffee</a></li>
                <li><a href="/parks" className="hover:text-white transition-colors">Parks</a></li>
                <li><a href="/art" className="hover:text-white transition-colors">Arts &amp; Culture</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Learn</p>
              <ul className="space-y-2 text-sm">
                <li><a href="/history" className="hover:text-white transition-colors">Portland History</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Business Directory</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Community</p>
              <ul className="space-y-2 text-sm">
                <li><a href="/sign-up" className="hover:text-white transition-colors">Join Good PDX</a></li>
                <li><a href="/sign-in" className="hover:text-white transition-colors">Sign In</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-green-800 text-sm text-green-400">
            © {new Date().getFullYear()} Good PDX LLC · Portland, Oregon · A Benefit Company
          </div>
        </footer>
      </body>
    </html>
  );
}
