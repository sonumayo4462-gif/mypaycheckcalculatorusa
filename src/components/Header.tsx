'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MyPayCheck<span className="text-blue-600">USA</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/texas" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Texas</Link>
            <Link href="/california" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">California</Link>
            <Link href="/florida" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Florida</Link>
            <Link href="/new-york" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">New York</Link>
            <Link href="/overtime" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Overtime</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link href="/texas" className="text-gray-600 hover:text-blue-600 font-medium">Texas</Link>
              <Link href="/california" className="text-gray-600 hover:text-blue-600 font-medium">California</Link>
              <Link href="/florida" className="text-gray-600 hover:text-blue-600 font-medium">Florida</Link>
              <Link href="/new-york" className="text-gray-600 hover:text-blue-600 font-medium">New York</Link>
              <Link href="/overtime" className="text-gray-600 hover:text-blue-600 font-medium">Overtime</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">Blog</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
