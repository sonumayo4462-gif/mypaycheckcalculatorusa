import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New York Paycheck Calculator 2026 - NY State & NYC Take-Home Pay',
  description: 'Calculate your New York net take-home pay with our free paycheck calculator. Accurately factors in 2026 NY state tax, NYC resident tax, FICA, and federal rates.',
  keywords: [
    'New York paycheck calculator',
    'NYC paycheck calculator',
    'free paycheck calculator',
    'hourly paycheck calculator New York',
    'New York weekly paycheck calculator',
    'new york take home pay calculator',
    'new york salary calculator',
    'nyc tax calculator',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/new-york',
  },
  openGraph: {
    type: 'website',
    url: '/new-york',
    title: 'New York Paycheck Calculator 2026 - NY State & NYC Take-Home Pay',
    description: 'Calculate your New York net take-home pay with our free paycheck calculator. Accurately factors in 2026 NY state tax, NYC resident tax, FICA, and federal rates.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Paycheck Calculator 2026 - NY State & NYC Take-Home Pay',
    description: 'Calculate your accurate New York take-home pay including state and NYC local taxes.',
  },
};

const faqs = [
  {
    question: 'Does New York City have its own income tax?',
    answer: 'Yes, New York City has its own separate city-level income tax in addition to New York State income tax. NYC income tax rates range from approximately 3.078% to 3.876% depending on your income and filing status.',
  },
  {
    question: 'What is the New York state income tax rate?',
    answer: 'New York has a progressive state income tax system with rates ranging from 4% to 6.85% for regular wages in 2026. The exact rate depends on your taxable income and filing status. New York City residents also pay an additional city income tax.',
  },
  {
    question: 'How can I reduce my New York state tax?',
    answer: 'New York offers several tax credits and deductions including the New York State Earned Income Tax Credit (NY EITC), property tax relief through STAR programs, and various itemized deductions. Contributing to 529 college savings plans can also provide tax benefits.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function NewYorkCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-purple-600">NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">New York Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your accurate take-home pay in New York with 2026 Federal + NY State tax + FICA.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto mb-8" />

        <CalculatorUI state="new-york" stateName="New York" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How New York Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              New York has one of the most complex state tax systems in the country. The state imposes a progressive income tax, and New York City residents face an additional city-level income tax. Understanding these taxes is crucial for accurate financial planning in the Empire State.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">New York State Income Tax Brackets (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              New York State income tax rates for 2026:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>4%</strong> on income up to $8,500</li>
              <li><strong>4.5%</strong> on income between $8,500 - $11,700</li>
              <li><strong>5.25%</strong> on income between $11,700 - $13,850</li>
              <li><strong>5.9%</strong> on income between $13,850 - $21,500</li>
              <li><strong>6.45%</strong> on income between $21,500 - $27,000</li>
              <li><strong>6.65%</strong> on income between $27,000 - $37,000</li>
              <li><strong>6.85%</strong> on income between $37,000 - $56,500</li>
              <li><strong>8.82%</strong> on income over $56,500</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">New York City Income Tax</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              NYC residents pay an additional city income tax. The NYC tax rates for 2026 are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>3.078%</strong> for income under $21,600</li>
              <li><strong>3.294%</strong> for income between $21,600 - $42,600</li>
              <li><strong>3.510%</strong> for income between $42,600 - $80,000</li>
              <li><strong>3.648%</strong> for income between $80,000 - $102,925</li>
              <li><strong>3.726%</strong> for income between $102,925 - $500,000</li>
              <li><strong>3.819%</strong> for income over $500,000</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $30/hour in New York</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&#39;s calculate a realistic paycheck. If you earn <strong>$30/hour</strong> with <strong>40 hours per week</strong> (2,080 hours annually), your gross annual pay is <strong>$62,400</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer (non-NYC resident) in New York:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal taxable income after standard deduction: $47,000</li>
              <li>Federal tax: approximately $5,395</li>
              <li>New York State tax: approximately $3,923</li>
              <li>FICA tax: $4,774 (7.65% of $62,400)</li>
              <li>Total deductions: approximately $14,092</li>
              <li>Take-home pay: approximately $48,308 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Monthly take-home: approximately <strong>$4,026</strong>. Bi-weekly take-home: approximately <strong>$1,858</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Note: If you live in NYC, add approximately $2,000-$2,500 in additional NYC income tax, reducing your annual take-home to approximately $45,800-$46,300.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">New York vs Other States: Tax Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">State</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">State Tax Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Est. Annual Tax on $60K</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Texas</td>
                    <td className="px-4 py-3 text-sm text-gray-600">0%</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-medium">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">California</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1% - 9.3%</td>
                    <td className="px-4 py-3 text-sm text-amber-600 font-medium">~$2,343</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Florida</td>
                    <td className="px-4 py-3 text-sm text-gray-600">0%</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-medium">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">New York</td>
                    <td className="px-4 py-3 text-sm text-gray-600">4% - 6.85%</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-medium">~$3,711</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other State Paycheck Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/texas" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Texas Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate TX take-home pay</p>
            </Link>
            <Link href="/california" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">California Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate CA take-home pay</p>
            </Link>
            <Link href="/florida" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Florida Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate FL take-home pay</p>
            </Link>
            <Link href="/overtime" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Overtime Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate overtime pay</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
