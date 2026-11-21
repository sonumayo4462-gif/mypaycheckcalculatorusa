import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pennsylvania Paycheck Calculator 2026 - Free Take-Home Pay (3.07% Flat Tax)',
  description: 'Calculate your accurate Pennsylvania take-home pay with our free 2026 paycheck calculator. Accounts for PA 3.07% flat state tax, federal tax, and FICA deductions.',
  keywords: [
    'Pennsylvania paycheck calculator',
    'PA tax calculator',
    'Philadelphia paycheck calculator',
    'Pittsburgh paycheck calculator',
    'Pennsylvania take home pay',
    'Pennsylvania 3.07% state tax',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/pennsylvania',
  },
  openGraph: {
    type: 'website',
    url: '/pennsylvania',
    title: 'Pennsylvania Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your Pennsylvania take-home pay with the 3.07% flat tax and 2026 federal withholdings.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pennsylvania Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your accurate Pennsylvania take-home pay after 3.07% state tax and federal withholdings.',
  },
};

const faqs = [
  {
    question: 'What is the Pennsylvania state income tax rate in 2026?',
    answer: 'Pennsylvania has the lowest flat individual income tax rate in the nation at 3.07%. All taxable compensation in Pennsylvania is taxed at this uniform 3.07% rate regardless of your income level or filing status.',
  },
  {
    question: 'How much is $50,000 salary after taxes in Pennsylvania?',
    answer: 'In 2026, a $50,000 annual salary in Pennsylvania yields approximately $40,820 in take-home pay for a single filer ($3,402 per month or $1,570 bi-weekly). Total deductions of $9,180 include $3,820 federal tax, $1,535 PA state tax (3.07%), and $3,825 FICA.',
  },
  {
    question: 'How much is $25 an hour after taxes in Pennsylvania?',
    answer: 'At $25 per hour working full-time (40 hours/week, $52,000 gross annually), your estimated Pennsylvania take-home pay is $815 weekly, $1,629 bi-weekly, or $42,354 annually, reflecting an effective hourly net rate of $20.37/hr.',
  },
  {
    question: 'How much is $100,000 salary after taxes in Pennsylvania?',
    answer: 'A $100,000 salary in Pennsylvania nets approximately $76,110 annually for a single filer ($6,343 per month or $2,927 bi-weekly). Total withholdings of $23,890 include $13,170 federal tax, $3,070 PA state tax, and $7,650 FICA.',
  },
  {
    question: 'Does Pennsylvania allow standard deductions?',
    answer: 'No, Pennsylvania does not offer standard deductions or personal exemptions like the federal tax return. All gross taxable compensation is subject to the flat 3.07% rate, though specific tax forgiveness credits exist for low-income workers.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Pennsylvania Paycheck Calculator 2026',
      url: `${SITE_URL}/pennsylvania`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Calculate your take-home pay with 3.07% Pennsylvania state income tax and accurate 2026 federal and FICA deductions.',
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
          name: 'Pennsylvania Paycheck Calculator',
          item: `${SITE_URL}/pennsylvania`,
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

export default function PennsylvaniaCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-blue-600">PA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pennsylvania Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your take-home pay with Pennsylvania&#39;s flat 3.07% income tax rate. Free hourly and salary paycheck calculator with 2026 federal deductions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CalculatorUI state="pennsylvania" stateName="Pennsylvania" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Pennsylvania Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Commonwealth of Pennsylvania utilizes a flat individual income tax rate of <strong>3.07%</strong>, which is the lowest flat income tax rate of any state in the nation. This rate applies uniformly across all taxable compensation, bonuses, and hourly earnings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pennsylvania Flat Tax Rate: 3.07%</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike the federal progressive tier system, whether you earn $25,000 or $250,000, Pennsylvania state tax applies at 3.07%. Note that municipalities in Pennsylvania may also levy a local Earned Income Tax (EIT), such as the Philadelphia wage tax (approx. 3.75% for residents).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pennsylvania Salary Take-Home Pay Breakdown (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how common annual salaries in Pennsylvania translate into net take-home pay for single filers after federal income tax, 3.07% PA state tax, and 7.65% FICA:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Annual</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Bi-Weekly Pay</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Pay</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Deductions</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual Take-Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$976</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,114</td>
                    <td className="px-4 py-3 text-sm text-red-600">$4,636</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$25,364</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,273</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,758</td>
                    <td className="px-4 py-3 text-sm text-red-600">$6,908</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$33,092</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,570</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,402</td>
                    <td className="px-4 py-3 text-sm text-red-600">$9,180</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$40,820</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$60,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,867</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,046</td>
                    <td className="px-4 py-3 text-sm text-red-600">$11,452</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$48,548</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,280</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,941</td>
                    <td className="px-4 py-3 text-sm text-red-600">$15,711</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$59,290</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$80,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,410</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,221</td>
                    <td className="px-4 py-3 text-sm text-red-600">$17,346</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$62,654</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,927</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,343</td>
                    <td className="px-4 py-3 text-sm text-red-600">$23,890</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$76,110</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,445</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,464</td>
                    <td className="px-4 py-3 text-sm text-red-600">$30,434</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$89,566</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$150,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,199</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,099</td>
                    <td className="px-4 py-3 text-sm text-red-600">$40,814</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$109,186</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pennsylvania Hourly Wage to Take-Home Pay (40 hrs/week)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what standard hourly wages in Pennsylvania equal in take-home pay after 3.07% state tax and federal deductions:
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
                    <td className="px-4 py-3 text-sm text-gray-600">$506</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,011</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$12.64/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$20.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$41,600</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$660</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,320</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$16.50/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$25.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$52,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$815</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,629</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$20.37/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$62,400</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$969</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,939</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$24.23/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$35.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$72,800</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,112</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,223</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$27.79/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$83,200</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,246</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,493</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$31.16/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$104,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,515</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,031</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$37.89/hr</td>
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
            <Link href="/new-york" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">New York Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate NY take-home pay</p>
            </Link>
            <Link href="/illinois" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Illinois Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate IL take-home pay</p>
            </Link>
            <Link href="/florida" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">Florida Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate FL take-home pay</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
