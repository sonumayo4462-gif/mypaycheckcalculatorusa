import Link from 'next/link';

const tools = [
  {
    name: 'Texas Paycheck Calculator',
    href: '/texas',
    icon: 'TX',
    description: 'No state income tax in Texas',
    color: 'bg-blue-500',
  },
  {
    name: 'California Paycheck Calculator',
    href: '/california',
    icon: 'CA',
    description: 'Progressive state tax 1%-9.3%',
    color: 'bg-green-500',
  },
  {
    name: 'Florida Paycheck Calculator',
    href: '/florida',
    icon: 'FL',
    description: 'No state income tax in Florida',
    color: 'bg-amber-500',
  },
  {
    name: 'New York Paycheck Calculator',
    href: '/new-york',
    icon: 'NY',
    description: 'State tax 4%-6.85%',
    color: 'bg-purple-500',
  },
  {
    name: 'Overtime Calculator',
    href: '/overtime',
    icon: 'OT',
    description: 'Calculate overtime pay rates',
    color: 'bg-rose-500',
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Calculate Your Real Take-Home Pay
            <span className="block text-blue-600">in the USA (2026 Tax Rules)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Accurate state-wise Federal + State + FICA tax calculation. Free paycheck calculators for Texas, California, Florida, and New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#calculators" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              Start Calculating
            </Link>
            <Link href="/blog" className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <section id="calculators" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Paycheck Calculators</h2>
            <p className="text-lg text-gray-600">Select your state to calculate accurate take-home pay</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all group"
              >
                <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <span className="inline-block bg-blue-50 text-blue-600 font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Calculate Now
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why MyPayCheckUSA?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate 2026 Tax Rules</h3>
              <p className="text-gray-600">Our calculators use the latest 2026 federal and state tax brackets for precise results.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">State-Specific Calculations</h3>
              <p className="text-gray-600">Each state has unique tax rules. We calculate state-specific taxes for accurate results.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600">No hidden fees, no sign-ups required. Use our calculators as many times as you need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600">Expert insights on USA taxes, salaries, and personal finance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/texas-no-state-income-tax" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">TX</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Texas Has No State Income Tax: Complete Guide 2026</h3>
                  <p className="text-gray-600 mb-4">Discover how Texas&#39;s tax-friendly environment affects your paycheck and why so many Americans are moving to the Lone Star State.</p>
                  <span className="text-blue-600 font-semibold">Read More</span>
                </div>
              </div>
            </Link>
            <Link href="/blog/california-tax-guide" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">CA</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">California Paycheck Tax Guide for 2026</h3>
                  <p className="text-gray-600 mb-4">Navigate California&#39;s progressive tax system. Learn about state disability insurance and how it affects your take-home pay.</p>
                  <span className="text-blue-600 font-semibold">Read More</span>
                </div>
              </div>
            </Link>
            <Link href="/blog/california-vs-texas-taxes" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">VS</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">California vs Texas: Which State Keeps More of Your Paycheck?</h3>
                  <p className="text-gray-600 mb-4">A detailed comparison of take-home pay between California and Texas. See how much you could save by moving.</p>
                  <span className="text-blue-600 font-semibold">Read More</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}