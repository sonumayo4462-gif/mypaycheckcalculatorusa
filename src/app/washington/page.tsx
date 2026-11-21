import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Washington Paycheck Calculator 2026 - Free Take-Home Pay (0% State Tax)',
  description: 'Calculate your exact Washington take-home pay with our free 2026 paycheck calculator. Washington has 0% state income tax—see your net hourly and salary earnings.',
  keywords: [
    'Washington paycheck calculator',
    'WA state tax calculator',
    'Seattle paycheck calculator',
    'Washington take home pay',
    'Washington hourly paycheck calculator',
    'no state income tax Washington',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/washington',
  },
  openGraph: {
    type: 'website',
    url: '/washington',
    title: 'Washington Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your Washington take-home pay with 0% personal state income tax. Accurate 2026 federal and FICA deductions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your accurate Washington take-home pay with 0% state income tax.',
  },
};

const faqs = [
  {
    question: 'Does Washington State have personal state income tax?',
    answer: 'No, Washington is one of 9 states with zero personal state income tax. Your paycheck is only subject to Federal income tax and standard FICA taxes (Social Security and Medicare). Note: WA has a 7% tax on high capital gains above $262,000, but regular wages and salaries have 0% state tax.',
  },
  {
    question: 'How much is $50,000 salary after taxes in Washington State?',
    answer: 'In 2026, a $50,000 annual salary in Washington yields approximately $42,355 in take-home pay for a single filer ($3,530/month or $1,629 bi-weekly). Total deductions are $7,645 ($3,820 federal tax and $3,825 FICA).',
  },
  {
    question: 'How much is $25 an hour after taxes in Washington?',
    answer: 'At $25/hour working full-time (40 hours/week, $52,000 gross annually), your estimated Washington take-home pay is $845 per week, $1,691 bi-weekly, or $43,962 annually, equal to an effective net hourly rate of $21.14/hr.',
  },
  {
    question: 'How much is $100,000 salary after taxes in Washington?',
    answer: 'A $100,000 annual salary in Washington nets approximately $79,180 take-home pay for a single filer ($6,598/month or $3,045 bi-weekly). Total deductions include $13,170 federal income tax and $7,650 in FICA taxes with zero state tax.',
  },
  {
    question: 'Does Seattle or King County have local payroll income taxes?',
    answer: 'No, neither Seattle nor King County levies an employee personal income tax. Washington state law strictly prohibits local municipal personal income taxes.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Washington Paycheck Calculator 2026',
      url: `${SITE_URL}/washington`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Calculate your take-home pay with 0% Washington state income tax and accurate 2026 federal and FICA deductions.',
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
          name: 'Washington Paycheck Calculator',
          item: `${SITE_URL}/washington`,
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

export default function WashingtonCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-blue-600">WA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Washington Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your take-home pay with Washington&#39;s 0% state income tax. Free hourly and salary paycheck calculator with 2026 federal tax brackets.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CalculatorUI state="washington" stateName="Washington" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Washington Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Washington State is renowned as one of the most tax-friendly states for workers and tech professionals. Washington does not impose a personal state income tax on earned wages or salaries. As a result, Washington employees keep a significantly higher percentage of their earnings compared to neighboring Oregon or California.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Washington State Income Tax Rate: 0%</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under the Washington State Constitution, personal income cannot be taxed as property. While the state enacted an excise tax on high capital gains (7% on capital gains exceeding $262,000), regular wages, hourly wages, and annual salaries remain completely exempt from state income tax.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Federal and FICA Taxes in Washington</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even with 0% state income tax, every W-2 employee in Washington is subject to federal payroll taxes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Federal Income Tax:</strong> Progressive brackets from 10% to 37% after standard deduction ($16,100 single, $32,200 married for 2026).</li>
              <li><strong>Social Security Tax:</strong> 6.2% on wages up to $184,500.</li>
              <li><strong>Medicare Tax:</strong> 1.45% on all earnings, plus 0.9% additional Medicare surtax above $200,000.</li>
              <li><strong>WA Paid Family & Medical Leave (PFML):</strong> Minor state statutory insurance program deduction.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Washington Salary Take-Home Pay Breakdown (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how common annual salaries in Washington State translate into net take-home pay for single filers (0% state tax):
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

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Washington Hourly Wage to Take-Home Pay (40 hrs/week)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what standard hourly wages in Washington State look like after federal taxes and FICA:
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
            <Link href="/illinois" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Illinois Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate IL take-home pay</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
