import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 - After Tax Take-Home Pay | MyPayCheckUSA',
  description: 'Free California paycheck calculator for 2026. Calculate your take-home pay with accurate Federal + California state tax + FICA.',
  keywords: ['california paycheck calculator', 'california take home pay calculator', 'california salary calculator', 'ca tax calculator', '2026 tax calculator'],
};

const faqs = [
  {
    question: 'What is the California state income tax rate?',
    answer: 'California has a progressive state income tax system with rates ranging from 1% to 9.3% for regular wages in 2026. The tax brackets are progressive, meaning higher earners pay a higher percentage. Additionally, high earners may pay a 1% Mental Health Services Tax on income over $1 million.',
  },
  {
    question: 'Does California tax Social Security benefits?',
    answer: 'No, California does not tax Social Security benefits. This is a significant advantage for retirees in California compared to many other states.',
  },
  {
    question: 'How can I reduce my California state tax?',
    answer: 'California offers several tax deductions and credits including the California Earned Income Tax Credit (CalEITC), standard or itemized deductions, and various exemptions. Contributing to retirement accounts like a 401(k) or IRA can also reduce your taxable income.',
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

export default function CaliforniaCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-green-600">CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">California Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your accurate take-home pay in California with 2026 Federal + progressive State tax + FICA.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto mb-8" />

        <CalculatorUI state="california" stateName="California" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How California Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              California has one of the most comprehensive progressive income tax systems in the United States. The state imposes taxes on both earned income (wages, salaries) and unearned income (interest, dividends, capital gains) at the same rates.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California State Income Tax Brackets (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              California&apos;s tax rates for 2026 range from 1% to 9.3% depending on your taxable income:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>1%</strong> on income up to $10,412</li>
              <li><strong>2%</strong> on income between $10,412 - $24,684</li>
              <li><strong>4%</strong> on income between $24,684 - $38,959</li>
              <li><strong>6%</strong> on income between $38,959 - $53,996</li>
              <li><strong>8%</strong> on income between $53,996 - $67,907</li>
              <li><strong>9.3%</strong> on income between $67,907 - $350,000</li>
              <li><strong>10.3%</strong> on income between $350,000 - $500,000</li>
              <li><strong>11.3%</strong> on income between $500,000 - $1,000,000</li>
              <li><strong>12.3%</strong> on income over $1,000,000</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California Paycheck Tax Deductions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to state income tax, California workers also contribute to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>State Disability Insurance (SDI):</strong> 1.1% of wages up to $153,164 (2026 limit)</li>
              <li><strong>Federal income tax:</strong> Progressive rates from 10% to 37%</li>
              <li><strong>FICA:</strong> 7.65% (Social Security + Medicare)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $30/hour in California</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&apos;s examine a realistic scenario. If you earn <strong>$30/hour</strong> working <strong>40 hours per week</strong> (2,080 hours annually), your gross annual pay is <strong>$62,400</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer with $62,400 gross income in California:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal tax: approximately $8,216</li>
              <li>California state tax: approximately $3,096</li>
              <li>SDI: $686 (1.1% of $62,400)</li>
              <li>FICA tax: $4,774 (7.65% of $62,400)</li>
              <li>Total deductions: approximately $16,772</li>
              <li>Take-home pay: approximately $45,628 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Monthly take-home: approximately <strong>$3,802</strong>. Bi-weekly take-home: approximately <strong>$1,755</strong>. The California state tax alone in this example is about $258 per month.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California vs Other States: Tax Comparison</h3>
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
                    <td className="px-4 py-3 text-sm text-amber-600 font-medium">~$2,900</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Florida</td>
                    <td className="px-4 py-3 text-sm text-gray-600">0%</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-medium">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">New York</td>
                    <td className="px-4 py-3 text-sm text-gray-600">4% - 6.85%</td>
                    <td className="px-4 py-3 text-sm text-amber-600 font-medium">~$2,200</td>
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
