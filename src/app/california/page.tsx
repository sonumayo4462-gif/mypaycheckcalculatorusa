import type { Metadata } from 'next';
import CalculatorUI from '@/components/CalculatorUI';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 - Hourly & Salary Take-Home Pay',
  description: 'Estimate your California take-home pay with our free paycheck calculator. Includes 2026 progressive state tax (1%-12.3%), SDI (1.1%), and federal deductions.',
  keywords: [
    'California paycheck calculator',
    'free paycheck calculator',
    'California hourly paycheck calculator',
    'California weekly paycheck calculator',
    'california take home pay calculator',
    'california salary calculator',
    'ca tax calculator',
    '2026 tax calculator',
  ],
  alternates: {
    canonical: '/california',
  },
  openGraph: {
    type: 'website',
    url: '/california',
    title: 'California Paycheck Calculator 2026 - Hourly & Salary Take-Home Pay',
    description: 'Estimate your California take-home pay with our free paycheck calculator. Includes 2026 progressive state tax, SDI (1.1%), and federal deductions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Paycheck Calculator 2026 - Hourly & Salary Take-Home Pay',
    description: 'Calculate your accurate California take-home pay after progressive state tax and SDI deductions.',
  },
};

const faqs = [
  {
    question: 'What is the California state income tax rate?',
    answer: 'California has a progressive state income tax system with rates ranging from 1% to 12.3% in 2026. Brackets range from 1% on income up to $10,412 up to 9.3% on income between $67,907 and $350,000, plus an additional 1% Mental Health Services surcharge above $1 million.',
  },
  {
    question: 'How much is $60,000 salary after taxes in California?',
    answer: 'In 2026, a $60,000 salary in California yields approximately $47,387 in net take-home pay for a single filer ($3,949/month or $1,823 bi-weekly). Total deductions of $12,613 include $5,020 federal tax, $2,343 state tax, $4,590 FICA, and $660 SDI.',
  },
  {
    question: 'How much is $30 an hour after taxes in California?',
    answer: 'At $30/hour working full-time (40 hours/week, $62,400 gross annually), your estimated California take-home pay is $944 per week, $1,888 bi-weekly, or $49,088 annually, reflecting an effective hourly take-home rate of $23.60/hr.',
  },
  {
    question: 'How much is $100,000 salary after taxes in California?',
    answer: 'A $100,000 salary in California nets approximately $72,120 annually for a single filer ($6,010/month or $2,774 bi-weekly). Total deductions are $27,880, consisting of $13,170 federal tax, $5,960 state tax, $7,650 FICA, and $1,100 SDI.',
  },
  {
    question: 'What is California SDI deduction and how much is withheld?',
    answer: 'California State Disability Insurance (SDI) is a mandatory payroll withholding of 1.1% on wages up to $157,500. It funds disability and Paid Family Leave (PFL) benefits.',
  },
  {
    question: 'Does California tax Social Security benefits?',
    answer: 'No, California does not tax Social Security benefits. This is a significant advantage for retirees in California compared to many other states.',
  },
  {
    question: 'How can I reduce my California state tax?',
    answer: 'California offers several tax deductions and credits including the California Earned Income Tax Credit (CalEITC), standard or itemized deductions, and various exemptions. Contributing to retirement accounts like a 401(k) or traditional IRA also reduces taxable income.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'California Paycheck Calculator 2026',
      url: `${SITE_URL}/california`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Estimate your California take-home pay with 2026 progressive state tax (1%-12.3%), SDI (1.1%), and federal deductions.',
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
          name: 'California Paycheck Calculator',
          item: `${SITE_URL}/california`,
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
              <li><strong>State Disability Insurance (SDI):</strong> 1.1% of wages up to $157,500 (2026 limit)</li>
              <li><strong>Federal income tax:</strong> Progressive rates from 10% to 37% with standard deduction of $15,400 (single) or $30,800 (married)</li>
              <li><strong>FICA:</strong> 7.65% (Social Security up to $184,500 + Medicare)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: $30/hour in California</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&apos;s examine a realistic scenario. If you earn <strong>$30/hour</strong> working <strong>40 hours per week</strong> (2,080 hours annually), your gross annual pay is <strong>$62,400</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a single filer with $62,400 gross income in California:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Federal taxable income after standard deduction: $47,000</li>
              <li>Federal tax: approximately $5,395</li>
              <li>California state tax: approximately $2,535</li>
              <li>SDI: $686 (1.1% of $62,400)</li>
              <li>FICA tax: $4,774 (7.65% of $62,400)</li>
              <li>Total deductions: approximately $13,390</li>
              <li>Take-home pay: approximately $49,010 annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Monthly take-home: approximately <strong>$4,084</strong>. Bi-weekly take-home: approximately <strong>$1,885</strong>. The California state tax alone in this example is about $211 per month.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California Salary Take-Home Pay Breakdown (2026)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how popular annual salaries in California convert into after-tax take-home pay for single filers after federal income tax, California progressive state tax (1%-9.3%), 1.1% SDI, and FICA deductions:
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
                    <td className="px-4 py-3 text-sm text-gray-600">$975</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,113</td>
                    <td className="px-4 py-3 text-sm text-red-600">$4,647</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$25,353</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,264</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,738</td>
                    <td className="px-4 py-3 text-sm text-red-600">$7,143</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$32,857</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,545</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,348</td>
                    <td className="px-4 py-3 text-sm text-red-600">$9,818</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$40,182</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$60,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,823</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,949</td>
                    <td className="px-4 py-3 text-sm text-red-600">$12,613</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$47,387</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,197</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,761</td>
                    <td className="px-4 py-3 text-sm text-red-600">$17,868</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$57,132</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$80,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,313</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,011</td>
                    <td className="px-4 py-3 text-sm text-red-600">$19,870</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$60,130</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,774</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,010</td>
                    <td className="px-4 py-3 text-sm text-red-600">$27,880</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$72,120</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,235</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,009</td>
                    <td className="px-4 py-3 text-sm text-red-600">$35,890</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$84,110</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$150,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,905</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$8,461</td>
                    <td className="px-4 py-3 text-sm text-red-600">$48,469</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$101,531</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California Hourly Wage to Take-Home Pay (40 hrs/week)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what standard hourly wage earners in California take home after federal, state tax, and SDI deductions:
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
                    <td className="px-4 py-3 text-sm text-gray-600">$505</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,010</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$12.62/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$20.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$41,600</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$654</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,309</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$16.36/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$25.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$52,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$801</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,602</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$20.02/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$30.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$62,400</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$944</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,888</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$23.60/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$35.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$72,800</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,073</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,147</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$26.83/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$83,200</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,193</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,386</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$29.83/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$50.00/hr</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$104,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,433</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,866</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">$35.83/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>

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
