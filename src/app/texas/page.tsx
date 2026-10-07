import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Texas Paycheck Calculator 2026 - After Tax Take-Home Pay | MyPayCheckUSA',
  description: 'Free Texas paycheck calculator for 2026. Calculate your take-home pay with accurate Federal + FICA tax. Texas has no state income tax.',
  keywords: ['texas paycheck calculator', 'texas take home pay calculator', 'texas salary calculator', 'no state income tax', '2026 tax calculator'],
};

const faqs = [
  {
    question: 'Does Texas have state income tax?',
    answer: 'No, Texas is one of the few states in the USA with zero state income tax. This means your entire paycheck is only subject to Federal income tax and FICA (Social Security + Medicare) taxes.',
  },
  {
    question: 'What taxes are taken out of a Texas paycheck?',
    answer: 'In Texas, your paycheck will have Federal income tax withheld based on your filing status and income bracket. Additionally, FICA taxes of 7.65% (6.2% Social Security up to wage base limit + 1.45% Medicare) are deducted.',
  },
  {
    question: 'Is Texas a good state for high earners?',
    answer: 'Yes, Texas is extremely tax-friendly for high earners. With no state income tax, no capital gains tax, and relatively low property taxes compared to states like California or New York, high-income earners can save tens of thousands annually.',
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

export default function TexasCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-blue-600">TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Texas Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your accurate take-home pay in Texas with 2026 Federal tax rules. Texas has <strong>no state income tax</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto mb-8" />

        <CalculatorUI state="texas" stateName="Texas" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Texas Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Texas stands out as one of the most tax-friendly states in America for workers. Unlike most states that impose a state income tax on residents, Texas has <strong>zero state income tax</strong>. This means when you receive your paycheck in Texas, the only deductions you&#39;ll see are Federal income tax and FICA taxes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Texas Has No State Income Tax</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The absence of state income tax is one of Texas&#39;s biggest financial advantages. While residents in California or New York might see 9% or more deducted for state taxes alone, Texans keep 100% of their state-taxable income. This policy is made possible by Texas&#39;s other revenue sources, including higher property taxes, sales tax (6.25% state + up to 2% local), and revenue from the oil and gas industry.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Federal Tax and FICA in Texas</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even without state income tax, Texas residents still pay Federal income tax. For 2026, the Federal tax brackets remain progressive:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>10%</strong> on income up to $11,600 (single) or $23,200 (married)</li>
              <li><strong>12%</strong> on income between $11,600 - $47,150 (single) or $23,200 - $94,300 (married)</li>
              <li><strong>22%</strong> on income between $47,150 - $100,000 (single) or $94,300 - $200,000 (married)</li>
              <li><strong>24%</strong> on income between $100,000 - $200,000 (single) or $200,000 - $300,000 (married)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              FICA taxes total 7.65% of your gross pay: 6.2% for Social Security (up to the annual wage base limit of $176,100 in 2026) and 1.45% for Medicare with no income cap.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $25/hour in Texas</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&#39;s look at a concrete example. If you earn <strong>$25/hour</strong> and work <strong>40 hours per week</strong> (2,080 hours annually), your gross annual pay would be <strong>$52,000</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer with $52,000 gross income in 2026:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal tax: approximately $5,426</li>
              <li>State tax: $0 (Texas has no state income tax)</li>
              <li>FICA tax: $3,978 (7.65% of $52,000)</li>
              <li>Total deductions: $9,404</li>
              <li>Take-home pay: approximately $42,596 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              That&#39;s a monthly take-home of approximately <strong>$3,550</strong> and a bi-weekly take-home of approximately <strong>$1,638</strong>. Compare this to California, where you might pay an additional $2,500-$4,000 in state taxes on the same salary.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Texas Paycheck Tax Brackets Summary</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Annual</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Federal Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">State Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FICA</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Take-Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">$30,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,865</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,295</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$25,840</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">$50,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,538</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,825</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$41,637</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">$75,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$8,538</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,738</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$60,725</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">$100,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$13,038</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,650</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$79,312</td>
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
            <Link href="/california" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">California Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate CA take-home pay</p>
            </Link>
            <Link href="/florida" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Florida Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate FL take-home pay</p>
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
