import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Illinois Paycheck Calculator 2026 - Free Take-Home Pay (4.95% Flat Tax)',
  description: 'Calculate your accurate Illinois take-home pay with our free 2026 paycheck calculator. Accounts for Illinois 4.95% flat state tax, federal tax, and FICA deductions.',
  keywords: [
    'Illinois paycheck calculator',
    'IL tax calculator',
    'Chicago paycheck calculator',
    'Illinois take home pay',
    'Illinois hourly paycheck calculator',
    'Illinois 4.95% state tax',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/illinois',
  },
  openGraph: {
    type: 'website',
    url: '/illinois',
    title: 'Illinois Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your Illinois take-home pay with the 4.95% flat tax and 2026 federal withholdings.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois Paycheck Calculator 2026 - Free Take-Home Pay',
    description: 'Calculate your accurate Illinois take-home pay after 4.95% state tax and federal withholdings.',
  },
};

const faqs = [
  {
    question: 'What is the Illinois state income tax rate in 2026?',
    answer: 'Illinois has a flat state individual income tax rate of 4.95%. Unlike progressive tax states like California or New York, all taxable wages in Illinois are taxed at the exact same 4.95% rate regardless of your income bracket.',
  },
  {
    question: 'How much is $50,000 salary after taxes in Illinois?',
    answer: 'In 2026, a $50,000 annual salary in Illinois yields approximately $39,880 in net take-home pay for a single filer ($3,323 per month or $1,534 bi-weekly). Total deductions of $10,120 include $3,820 federal tax, $2,475 Illinois state tax (4.95%), and $3,825 FICA.',
  },
  {
    question: 'How much is $25 an hour after taxes in Illinois?',
    answer: 'At $25 per hour working full-time (40 hours/week, $52,000 gross annually), your estimated Illinois take-home pay is $796 weekly, $1,592 bi-weekly, or $41,392 annually, reflecting an effective hourly net pay of $19.90/hr.',
  },
  {
    question: 'How much is $100,000 salary after taxes in Illinois?',
    answer: 'A $100,000 salary in Illinois nets approximately $74,230 annually for a single filer ($6,186 per month or $2,855 bi-weekly). Total withholdings of $25,770 include $13,170 federal tax, $4,950 IL state tax, and $7,650 FICA.',
  },
  {
    question: 'Does Chicago or Cook County have an extra municipal income tax?',
    answer: 'No, the City of Chicago and Cook County do not impose a separate local personal income tax on employees. You only pay the 4.95% Illinois state income tax plus standard federal deductions.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Illinois Paycheck Calculator 2026',
      url: `${SITE_URL}/illinois`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Calculate your take-home pay with 4.95% Illinois state income tax and accurate 2026 federal and FICA deductions.',
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
          name: 'Illinois Paycheck Calculator',
          item: `${SITE_URL}/illinois`,
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

export default function IllinoisCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-indigo-600">IL</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Illinois Paycheck Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your take-home pay with Illinois&#39;s flat 4.95% income tax rate. Free hourly and salary paycheck calculator with 2026 federal deductions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CalculatorUI state="illinois" stateName="Illinois" />

        <AdSensePlaceholder size="300x250" className="mx-auto my-8" />

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Illinois Paycheck Tax Works in 2026</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Illinois operates on a flat rate individual income tax system mandated by the Illinois Constitution. Every resident and non-resident earning income in Illinois pays the flat rate of <strong>4.95%</strong> on net taxable income, simplifying paycheck estimation compared to progressive tax states.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Illinois Flat State Tax Rate: 4.95%</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike the federal progressive tier system, whether you earn $30,000 or $300,000, Illinois state tax applies at 4.95%. Illinois residents also receive a standard personal exemption ($2,775 per taxpayer) which slightly lowers taxable state earnings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Illinois Salary Take-Home Pay Breakdown (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how common annual salaries in Illinois translate into net take-home pay for single filers after federal income tax, 4.95% IL state tax, and 7.65% FICA:
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
                    <td className="px-4 py-3 text-sm text-gray-600">$954</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,067</td>
                    <td className="px-4 py-3 text-sm text-red-600">$5,200</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$24,800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,244</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,695</td>
                    <td className="px-4 py-3 text-sm text-red-600">$7,660</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$32,340</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,534</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,323</td>
                    <td className="px-4 py-3 text-sm text-red-600">$10,120</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$39,880</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$60,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,824</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,952</td>
                    <td className="px-4 py-3 text-sm text-red-600">$12,580</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$47,420</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,226</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,823</td>
                    <td className="px-4 py-3 text-sm text-red-600">$17,120</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$57,880</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$80,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,352</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,096</td>
                    <td className="px-4 py-3 text-sm text-red-600">$18,850</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$61,150</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,855</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,186</td>
                    <td className="px-4 py-3 text-sm text-red-600">$25,770</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$74,230</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,358</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,276</td>
                    <td className="px-4 py-3 text-sm text-red-600">$32,690</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$87,310</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$150,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,091</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$8,864</td>
                    <td className="px-4 py-3 text-sm text-red-600">$43,634</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$106,366</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Illinois Hourly Wage to Take-Home Pay (40 hrs/week)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what standard hourly wages in Illinois equal in take-home pay after 4.95% state tax and federal withholdings:
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
                    <td className="px-4 py-3 text-sm text-gray-600">$494</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$989</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$12.36/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$20.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$41,600</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$645</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,290</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$16.13/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$25.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$52,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$796</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,592</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$19.90/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$62,400</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$947</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,893</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$23.67/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$35.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$72,800</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,085</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,171</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$27.14/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$83,200</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,216</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,432</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$30.41/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$104,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,478</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,956</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$36.95/hr</td>
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
            <Link href="/new-york" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900">New York Paycheck Calculator</span>
              <p className="text-sm text-gray-600 mt-1">Calculate NY take-home pay</p>
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
