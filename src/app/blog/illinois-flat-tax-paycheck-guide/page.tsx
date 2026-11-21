import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Illinois Paycheck Tax Guide 2026: Understanding the 4.95% Flat Income Tax',
  description: 'Complete 2026 Illinois paycheck guide. Learn how the 4.95% flat state tax, standard exemptions, Chicago local rules, and federal taxes shape your take-home pay.',
  keywords: [
    'illinois paycheck tax guide',
    'illinois 4.95 flat income tax',
    'chicago take home pay 2026',
    'illinois payroll deductions',
    'illinois state tax calculator guide',
    'cook county taxes',
    'illinois hourly paycheck calculator guide',
  ],
  alternates: {
    canonical: '/blog/illinois-flat-tax-paycheck-guide',
  },
  openGraph: {
    type: 'article',
    url: '/blog/illinois-flat-tax-paycheck-guide',
    title: 'Illinois Paycheck Tax Guide 2026: Understanding the 4.95% Flat Income Tax',
    description: 'Learn how Illinois calculates paycheck withholdings with its constitutional 4.95% flat income tax rate.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois Paycheck Tax Guide 2026',
    description: 'A complete breakdown of Illinois 4.95% flat income tax, Chicago payroll rules, and take-home pay.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Illinois Paycheck Tax Guide 2026: Understanding the 4.95% Flat Income Tax',
      description: 'Comprehensive 2026 guide to Illinois flat income tax calculations, Chicago payroll taxes, and net paycheck estimations.',
      url: `${SITE_URL}/blog/illinois-flat-tax-paycheck-guide`,
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
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/og-image.jpg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/illinois-flat-tax-paycheck-guide`,
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
          name: 'Illinois Flat Tax Paycheck Guide',
          item: `${SITE_URL}/blog/illinois-flat-tax-paycheck-guide`,
        },
      ],
    },
  ],
};

export default function IllinoisTaxGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-indigo-600">IL</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Illinois Paycheck Tax Guide 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Illinois&#39;s flat 4.95% state income tax, personal exemptions, and Chicago payroll withholdings.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Illinois is the economic hub of the American Midwest, home to global corporations, financial exchanges in Chicago, and vibrant industrial and agricultural sectors. When reviewing an Illinois paystub, employees encounter a distinct tax architecture: while the federal government taxes income across progressive brackets, the State of Illinois applies a strict <strong>flat tax rate of 4.95%</strong> on net income.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              How the Illinois Flat Rate System Works
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Illinois Constitution (Article IX, Section 3) mandates that any state tax on income must be at a non-graduated, flat rate. This constitutional requirement guarantees that high-income earners and entry-level workers pay the identical percentage on their taxable base.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike progressive states such as California (1%–12.3%) or New York (4%–8.82%), calculating Illinois state tax is straightforward:
            </p>
            <div className="p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl my-6">
              <p className="text-indigo-950 font-bold text-lg mb-2">The Illinois Formula:</p>
              <p className="text-gray-800 font-mono text-base">
                Illinois State Tax = (Federal Adjusted Gross Income - Illinois Standard Exemptions) &times; 4.95%
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Illinois Personal Exemptions Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To provide relief for lower- and middle-income families, Illinois offers statutory personal exemptions that reduce taxable income before the 4.95% rate is applied:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Basic Personal Exemption:</strong> $2,775 for the taxpayer ($5,550 for married couples filing jointly).</li>
              <li><strong>Dependent Exemption:</strong> $2,775 for each qualifying dependent claimed on your tax return.</li>
              <li><strong>Additional Senior or Blind Exemption:</strong> An extra $1,000 allowance for taxpayers aged 65 or older, or who are legally blind.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <em>Note:</em> For single filers earning over $250,000 (or married filers earning over $500,000), Illinois phases out the personal exemption allowance.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Federal and FICA Deductions on an Illinois Paycheck
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond the 4.95% state tax, your paycheck is subject to two mandatory federal deductions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Federal Income Tax</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Progressive federal brackets apply to income above the 2026 standard deduction ($16,100 single / $32,200 married). Brackets range from 10% to 37%.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">FICA Taxes (7.65%)</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Consists of 6.2% Social Security (capped at $184,500 in 2026) and 1.45% Medicare (uncapped), plus 0.9% additional surtax on high incomes.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Does Chicago Have a Local Income Tax?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many new residents ask whether working in the City of Chicago or Cook County incurs a municipal wage tax like New York City or Philadelphia. The answer is <strong>No</strong>. Neither the City of Chicago nor Cook County levies an employee personal income tax. All state-level personal income taxes remain uniform at 4.95% across all 102 Illinois counties.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Salary Examples: What Illinois Take-Home Pay Looks Like in 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how representative annual salaries translate into net pay for single filers taking the standard deduction:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gross Salary</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Federal Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">IL State Tax (4.95%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FICA (7.65%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual Take-Home</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Net</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$45,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,220</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$2,228</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,443</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$36,109</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,009</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$65,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,120</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$3,218</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,973</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$50,689</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,224</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$85,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,870</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$4,208</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$6,503</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$64,419</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,368</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$17,570</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$5,940</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$9,180</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">$87,310</td>
                    <td className="px-4 py-3 text-sm text-gray-600">$7,276</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              Illinois vs. Other Midwestern States
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When compared with regional neighbors, Illinois sits in the middle tier:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Indiana:</strong> Imposes a lower flat state rate (3.05% in 2026), but nearly all Indiana counties levy an additional county income tax between 1% and 3%.</li>
              <li><strong>Wisconsin:</strong> Employs progressive tax brackets ranging from 3.54% to 7.65%, resulting in higher tax burdens for incomes over $40,000.</li>
              <li><strong>Iowa:</strong> Recently transitioned to a flat 3.8% rate, providing competitive pressure on Illinois borders.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              How to Optimize Your Illinois Take-Home Pay
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
              <li>
                <strong>Contribute to Illinois 529 College Savings:</strong> Illinois taxpayers can deduct up to $10,000 per year ($20,000 for married couples) in contributions to Bright Start or Bright Directions 529 college savings accounts directly from state taxable income.
              </li>
              <li>
                <strong>Maximize Traditional 401(k) Deductions:</strong> Pre-tax contributions reduce both federal taxable gross and Illinois taxable income at the full 4.95% rate.
              </li>
              <li>
                <strong>Claim Property Tax Credit on State Return:</strong> If you own a primary residence in Illinois, you may qualify for a state tax credit equal to 5% of property taxes paid.
              </li>
            </ol>

            <div className="mt-10 p-8 bg-indigo-50 border border-indigo-200 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-indigo-950 mb-3">
                Calculate Your Illinois Paycheck
              </h3>
              <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                Accurately estimate your take-home pay with our free Illinois paycheck calculator, updated for the 4.95% flat tax and 2026 federal brackets.
              </p>
              <Link
                href="/illinois"
                className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Go to Illinois Paycheck Calculator
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
