import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 - After Tax Take-Home Pay | MyPayCheckUSA',
  description: 'Free Florida paycheck calculator for 2026. Calculate your take-home pay with accurate Federal + FICA tax. Florida has no state income tax.',
  keywords: ['florida paycheck calculator', 'florida take home pay calculator', 'florida salary calculator', 'no state income tax', '2026 tax calculator'],
};

const faqs = [
  {
    question: 'Does Florida have state income tax?',
    answer: 'No, Florida does not have a state income tax on individuals. This makes Florida one of the most tax-friendly states in the country. Residents only pay Federal income tax and FICA taxes.',
  },
  {
    question: 'What taxes do Floridians pay?',
    answer: 'Floridians pay Federal income tax, FICA taxes (7.65% for Social Security and Medicare), and sales tax (6% state + up to 2.5% local discretionary tax, for a maximum of 8.5%). Florida also has higher-than-average property taxes compared to some other states.',
  },
  {
    question: 'Is Florida tax-friendly for retirees?',
    answer: 'Yes, Florida is extremely tax-friendly for retirees. There is no state income tax, no tax on Social Security benefits, no inheritance tax, and no estate tax. Combined with warm weather and numerous retirement communities, Florida is a top retirement destination.',
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

export default function FloridaCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-amber-600">FL</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Florida Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your accurate take-home pay in Florida with 2026 Federal tax rules. Florida has <strong>no state income tax</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto mb-8" />

        <CalculatorUI state="florida" stateName="Florida" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Florida Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Florida is famous for its lack of state income tax, making it a financial haven for workers and retirees alike. The Sunshine State has no personal income tax, no estate tax, and no inheritance tax, which has attracted millions of Americans from high-tax states.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Florida Has No State Income Tax</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Florida&apos;s constitution explicitly prohibits a personal income tax. The state funds its operations primarily through sales tax, tourism-related taxes, and property taxes. This tax structure means that when you receive a paycheck in Florida, you will not see any state income tax withholding.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Federal Tax and FICA in Florida</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Florida residents still pay Federal income tax and FICA taxes. For 2026, the Federal tax brackets are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>10%</strong> on income up to $11,600 (single) or $23,200 (married)</li>
              <li><strong>12%</strong> on income between $11,600 - $47,150 (single) or $23,200 - $94,300 (married)</li>
              <li><strong>22%</strong> on income between $47,150 - $100,000 (single) or $94,300 - $200,000 (married)</li>
              <li><strong>24%</strong> on income between $100,000 - $200,000 (single) or $200,000 - $300,000 (married)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              FICA taxes total 7.65%: 6.2% for Social Security (up to $176,100 in 2026) and 1.45% for Medicare with no cap.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $20/hour in Florida</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Consider a worker earning <strong>$20/hour</strong> with <strong>40 hours per week</strong>. Annual gross pay: <strong>$41,600</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal tax: approximately $3,656</li>
              <li>State tax: $0 (Florida has no state income tax)</li>
              <li>FICA tax: $3,182 (7.65% of $41,600)</li>
              <li>Total deductions: approximately $6,838</li>
              <li>Take-home pay: approximately $34,762 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Monthly take-home: approximately <strong>$2,897</strong>. Bi-weekly take-home: approximately <strong>$1,337</strong>. Compare this to California on the same salary, where you would pay roughly $1,800-$2,500 in additional state taxes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Florida Tax-Friendly Benefits for Workers</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond the absence of state income tax, Florida offers other financial benefits:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>No estate tax or inheritance tax:</strong> Perfect for wealth preservation</li>
              <li><strong>No tax on Social Security benefits:</strong> Retirees keep 100% of their Social Security</li>
              <li><strong>Homestead exemption:</strong> Up to $50,000 property tax exemption for primary residences</li>
              <li><strong>Save Our Homes cap:</strong> Limits annual property tax assessment increases to 3%</li>
            </ul>
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
            <Link href="/new-york" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">New York Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate NY take-home pay</p>
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
