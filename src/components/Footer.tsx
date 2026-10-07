import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">$</span>
              </div>
              <span className="text-xl font-bold">MyPayCheck<span className="text-blue-400">USA</span></span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Accurate paycheck calculators for all US states. Calculate your real take-home pay with 2026 tax rules.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/texas" className="text-gray-400 hover:text-white transition-colors">Texas</Link></li>
              <li><Link href="/california" className="text-gray-400 hover:text-white transition-colors">California</Link></li>
              <li><Link href="/florida" className="text-gray-400 hover:text-white transition-colors">Florida</Link></li>
              <li><Link href="/new-york" className="text-gray-400 hover:text-white transition-colors">New York</Link></li>
              <li><Link href="/overtime" className="text-gray-400 hover:text-white transition-colors">Overtime</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p> MyPayCheckUSA.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
