import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pennsylvania Paycheck Tax Guide 2026: 3.07% Flat Tax & Local Wage Taxes',
  description: 'Complete 2026 Pennsylvania paycheck guide. Learn how PA\'s 3.07% flat tax, Philadelphia & Pittsburgh local wage taxes, and federal deductions affect your take-home pay.',
  keywords: [
    'pennsylvania paycheck tax guide',
    'pa 3.07 flat tax',
    'philadelphia wage tax 2026',
    'pittsburgh take home pay',
    'pennsylvania local earned income tax',
    'pa payroll deductions',
    'pa tax forgiveness',
    'pennsylvania hourly paycheck calculator guide',
  ],
  alternates: {
    canonical: '/blog/pennsylvania-paycheck-tax-guide',
  },
  openGraph: {
    type: 'article',
    url: '/blog/pennsylvania-paycheck-tax-guide',
    title: 'Pennsylvania Paycheck Tax Guide 2026: 3.07% Flat Tax & Local Wage Taxes',
    description: 'Understand Pennsylvania\'s 3.07% flat income tax, local EIT withholdings across municipalities, and net salary calculations for 2026.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pennsylvania Paycheck Tax Guide 2026',
    description: 'Learn how Pennsylvania calculates take-home pay with its 3.07% flat tax, Philadelphia wage taxes, and state deductions.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Pennsylvania Paycheck Tax Guide 2026: 3.07% Flat Tax & Local Wage Taxes',
      description: 'Comprehensive 2026 guide to Pennsylvania flat state income tax, Act 32 local earned income taxes (EIT), Philadelphia wage taxes, and paycheck calculations.',
      url: `${SITE_URL}/blog/pennsylvania-paycheck-tax-guide`,
      datePublished: '2026-11-21T00:00:00Z',
      dateModified: '2026-11-21T00:00:00Z',
      image: `${SITE_URL}/og-image.jpg`,
      author: {
        '@type': 'Organization',
        name: 'MyPayCheckUSA',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'MyPayCheckUSA',
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/pennsylvania-paycheck-tax-guide`,
      },
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
          name: 'Blog',
          item: `${SITE_URL}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pennsylvania Paycheck Tax Guide',
          item: `${SITE_URL}/blog/pennsylvania-paycheck-tax-guide`,
        },
      ],
    },
  ],
};

export default function PennsylvaniaTaxGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-blue-700">PA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pennsylvania Paycheck Tax Guide 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master Pennsylvania&#39;s flat 3.07% personal income tax, local municipal wage taxes, Act 32 rules, and take-home pay calculations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Commonwealth of Pennsylvania boasts one of the most intriguing payroll tax landscapes in the United States. On one hand, Pennsylvania maintains a statewide flat personal income tax rate of <strong>3.07%</strong>, which is currently the lowest flat state income tax rate among all US states levying income taxes. On the other hand, Pennsylvania has a widespread network of municipal, school district, and local earned income taxes (EIT) authorized under Pennsylvania Act 32.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you work in the high-density corporate corridors of Center City Philadelphia, the tech and robotics hubs of Pittsburgh, or suburban communities across the Keystone State, deciphering your paystub requires understanding both state-level flat deductions and local tax jurisdictions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              The 3.07% Pennsylvania State Flat Tax Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Article VIII, Section 1 of the Pennsylvania Constitution contains a strict &#34;Uniformity Clause.&#34; This clause dictates that all taxes on the same class of subjects must be uniform. Because of this legal doctrine, Pennsylvania cannot implement progressive tax brackets where high earners pay higher marginal percentages.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instead, every Pennsylvania worker—regardless of whether they make $25,000 or $500,000 per year—pays exactly <strong>3.07%</strong> on their taxable gross compensation.
            </p>

            <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl my-6">
              <p className="text-blue-950 font-bold text-lg mb-2">Key Pennsylvania State Tax Rule:</p>
              <p className="text-gray-800 text-base leading-relaxed">
                Unlike the federal government, Pennsylvania does not provide a standard deduction or personal exemptions on state returns. However, qualifying low-income wage earners can eliminate up to 100% of their state tax liability through the <strong>Pennsylvania Tax Forgiveness Credit (Schedule SP)</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Local Earned Income Tax (EIT) &amp; Act 32
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Pennsylvania Act 32, local earned income taxes are consolidated and withheld at the source by employers based on your workplace address and residency. Most Pennsylvania municipalities and school districts levy a combined local tax ranging from <strong>1.0% to 2.0%</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, Pennsylvania&#39;s two largest metropolitan centers have distinct local tax structures that significantly impact monthly paystubs:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Philadelphia Wage Tax</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Philadelphia levies its own municipal wage tax on all salaries, wages, commissions, and other compensation earned by Philadelphia residents or non-residents working inside the city limits:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li><strong>Philadelphia Residents:</strong> 3.75% withheld directly from gross compensation.</li>
                  <li><strong>Non-Residents Working in Philadelphia:</strong> 3.44% withheld directly.</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pittsburgh Local Income Tax</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Residents of the City of Pittsburgh are subject to a combined <strong>3.0%</strong> local earned income tax (1.0% municipal tax + 2.0% Pittsburgh School District tax). Non-residents working in Pittsburgh generally pay 1.0% to the city or their home township.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Mandatory Deductions on Every Pennsylvania Paycheck
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When reviewing your paystub, deductions fall into four main categories:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
              <li>
                <strong>Federal Income Tax Withholding:</strong> Based on the 2026 IRS Form W-4 guidelines, ranging from 10% to 37% after accounting for the standard deduction ($16,100 single / $32,200 married).
              </li>
              <li>
                <strong>FICA (Social Security &amp; Medicare):</strong> 6.2% for Social Security on wages up to $184,500, plus 1.45% Medicare on all compensation, with an extra 0.9% surtax for high earners.
              </li>
              <li>
                <strong>Pennsylvania State Income Tax:</strong> A flat 3.07% of taxable compensation.
              </li>
              <li>
                <strong>PA Unemployment Compensation (UC):</strong> Pennsylvania requires employees to contribute a small percentage (around 0.07% to 0.08%, subject to annual state adjustments) to the state unemployment trust fund.
              </li>
              <li>
                <strong>Local Earned Income Tax (EIT):</strong> Typically 1% to 3.75% depending on your city or township of residence.
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Sample Pennsylvania Take-Home Pay Calculations (2026)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The table below illustrates estimated net pay for a single employee living and working in Pennsylvania (assuming standard statewide 3.07% state tax and average 1.0% local EIT, standard federal deduction, and zero pre-tax benefit elections):
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Salary</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Federal Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">PA State (3.07%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FICA (7.65%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Local EIT (1%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual Net</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Net</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$45,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,220</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,382</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,443</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$450</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$36,505</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,042</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$65,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,120</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,996</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,973</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$650</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$51,261</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,272</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$85,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,870</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,610</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,503</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$850</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$65,167</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,431</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$17,570</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,684</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,180</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$1,200</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$88,366</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,364</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Pennsylvania vs. Neighboring Mid-Atlantic States
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When evaluating regional employment offers, Pennsylvania compares favorably against several Mid-Atlantic neighbors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>New York:</strong> State tax brackets reach up to 8.82%, plus New York City adds up to 3.876% in city income tax. High earners in PA keep significantly more take-home pay.</li>
              <li><strong>New Jersey:</strong> Progressive rates climb from 1.4% to 10.75%. Although PA and NJ share a reciprocal tax agreement (where PA residents working in NJ pay PA tax), living in NJ incurs higher marginal tax rates.</li>
              <li><strong>Ohio:</strong> Features progressive tax brackets from 2.75% to 3.5%, alongside extensive municipal income taxes collected by RITA.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Tips to Maximize Your Pennsylvania Paycheck
            </h2>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">1. Verify Your Resident vs. Work Local Tax Code</h3>
                <p className="text-sm text-gray-700">
                  Ensure your employer accurately records your Political Subdivision (PSD) code. Under Act 32, you pay the higher of your resident rate or workplace non-resident rate, preventing double taxation.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">2. Check Eligibility for PA Schedule SP</h3>
                <p className="text-sm text-gray-700">
                  If your household income is modest (e.g., under $35,000 for families with dependents), file Schedule SP to receive a full or partial refund of PA state income taxes paid throughout the year.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">3. Take Advantage of Pre-Tax HSAs and Health Insurance</h3>
                <p className="text-sm text-gray-700">
                  Pre-tax health insurance premiums and qualifying Section 125 deductions lower federal taxable gross, reducing federal income tax and FICA deductions.
                </p>
              </div>
            </div>

            <div className="mt-10 p-8 bg-blue-50 border border-blue-200 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-blue-950 mb-3">
                Calculate Your Pennsylvania Paycheck
              </h3>
              <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                Calculate exact net take-home pay with our free Pennsylvania paycheck calculator, featuring the 3.07% flat tax, federal tax brackets, and hourly or salaried pay schedules.
              </p>
              <Link
                href="/pennsylvania"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Go to Pennsylvania Paycheck Calculator
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
            &larr; Back to all guides
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
