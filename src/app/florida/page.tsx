import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay',
  description: 'Use our free Florida paycheck calculator to determine your take-home pay. Benefit from Florida\'s 0% state income tax and calculate federal withholdings accurately for 2026.',
  keywords: [
    'Florida paycheck calculator',
    'free paycheck calculator',
    'hourly paycheck calculator Florida',
    'Florida weekly paycheck calculator',
    'florida take home pay calculator',
    'florida salary calculator',
    'no state income tax',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/florida',
  },
  openGraph: {
    type: 'website',
    url: '/florida',
    title: 'Florida Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay',
    description: 'Calculate your take-home pay with our free Florida paycheck calculator. 0% state income tax—see exact earnings after 2026 federal and FICA deductions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay',
    description: 'Calculate your take-home pay with our free Florida paycheck calculator with 0% state income tax.',
  },
};

const faqs = [
  {
    question: 'Does Florida have state income tax?',
    answer: 'No, Florida does not have a state income tax on individuals. This makes Florida one of the most tax-friendly states in the country. Residents only pay Federal income tax and FICA taxes.',
  },
  {
    question: 'How much is $50,000 salary after taxes in Florida?',
    answer: 'In 2026, a $50,000 salary in Florida nets approximately $42,355 annually for a single filer ($3,530/month or $1,629 bi-weekly). Total taxes withheld are $7,645 ($3,820 federal tax and $3,825 FICA, with $0 state tax).',
  },
  {
    question: 'How much is $20 an hour after taxes in Florida?',
    answer: 'Working full-time (40 hours/week, $41,600 annual gross), a $20/hour wage in Florida yields approximately $685 weekly take-home, $1,369 bi-weekly, or $34,320 annually after federal taxes and FICA.',
  },
  {
    question: 'How much is $100,000 salary after taxes in Florida?',
    answer: 'A $100,000 annual salary in Florida results in approximately $79,180 take-home pay for a single filer ($6,598/month or $3,045 bi-weekly). Total deductions include $13,170 federal tax and $7,650 FICA, with zero state deductions.',
  },
  {
    question: 'What taxes do Floridians pay?',
    answer: 'Floridians pay Federal income tax, FICA taxes (7.65% for Social Security and Medicare), and sales tax (6% state + local discretionary surtax). Florida has no personal state income tax.',
  },
  {
    question: 'Is Florida tax-friendly for retirees?',
    answer: 'Yes, Florida is extremely tax-friendly for retirees. There is no state income tax, no tax on Social Security benefits, no inheritance tax, and no estate tax.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Florida Paycheck Calculator 2026',
      url: `${SITE_URL}/florida`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Use our free Florida paycheck calculator to calculate take-home pay with 0% state income tax and accurate 2026 federal withholdings.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Florida Paycheck Calculator',
          item: `${SITE_URL}/florida`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
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
              <li><strong>10%</strong> on income up to $12,400 (single) or $24,800 (married)</li>
              <li><strong>12%</strong> on income between $12,400 - $50,400 (single) or $24,800 - $100,800 (married)</li>
              <li><strong>22%</strong> on income between $50,400 - $105,700 (single) or $100,800 - $211,400 (married)</li>
              <li><strong>24%</strong> on income between $105,700 - $201,775 (single) or $211,400 - $403,550 (married)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              FICA taxes total 7.65%: 6.2% for Social Security (up to $184,500 in 2026) and 1.45% for Medicare with no cap.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $20/hour in Florida</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Consider a worker earning <strong>$20/hour</strong> with <strong>40 hours per week</strong>. Annual gross pay: <strong>$41,600</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal tax: approximately $2,899</li>
              <li>State tax: $0 (Florida has no state income tax)</li>
              <li>FICA tax: $3,182 (7.65% of $41,600)</li>
              <li>Total deductions: approximately $6,081</li>
              <li>Take-home pay: approximately $35,519 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Monthly take-home: approximately <strong>$2,960</strong>. Bi-weekly take-home: approximately <strong>$1,366</strong>. Compare this to California on the same salary, where you would pay roughly $1,800-$2,500 in additional state taxes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Florida Salary Take-Home Pay Breakdown (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how popular annual salaries in Florida translate into net take-home pay for single filers after federal income tax and 7.65% FICA deductions (0% state tax):
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Annual</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Bi-Weekly Pay</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Pay</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Taxes</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual Take-Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,011</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,190</td>
                    <td className="px-4 py-3 text-sm text-red-600">$3,715</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$26,285</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,320</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,860</td>
                    <td className="px-4 py-3 text-sm text-red-600">$5,680</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$34,320</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,629</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,530</td>
                    <td className="px-4 py-3 text-sm text-red-600">$7,645</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$42,355</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$60,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,938</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,199</td>
                    <td className="px-4 py-3 text-sm text-red-600">$9,610</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$50,390</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,369</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,133</td>
                    <td className="px-4 py-3 text-sm text-red-600">$13,408</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$61,592</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$80,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,504</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,426</td>
                    <td className="px-4 py-3 text-sm text-red-600">$14,890</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$65,110</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,045</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,598</td>
                    <td className="px-4 py-3 text-sm text-red-600">$20,820</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$79,180</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,587</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,771</td>
                    <td className="px-4 py-3 text-sm text-red-600">$26,750</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$93,250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$150,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,377</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,483</td>
                    <td className="px-4 py-3 text-sm text-red-600">$36,209</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$113,791</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Florida Hourly Wage to Take-Home Pay (40 hrs/week)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what your Florida hourly wage looks like on a standard 40-hour workweek after mandatory federal withholdings:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Hourly Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Annual</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Weekly Net</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Bi-Weekly Net</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Effective Hourly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$15.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$31,200</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$524</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,048</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$13.10/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$20.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$41,600</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$685</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,369</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$17.12/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$25.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$52,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$845</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,691</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$21.14/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$62,400</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,006</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,012</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$25.15/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$35.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$72,800</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,155</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,309</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$28.87/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$83,200</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,295</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,591</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$32.39/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$104,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,577</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,154</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$39.42/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>

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
