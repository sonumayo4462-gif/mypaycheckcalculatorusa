import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay Calculator',
  description: 'Calculate your exact take-home pay with our free paycheck calculator. Estimate hourly, weekly, and annual salary earnings after 2026 federal, state, and FICA taxes.',
  keywords: [
    'paycheck calculator',
    'free paycheck calculator',
    'hourly paycheck calculator',
    'weekly paycheck calculator',
    'California paycheck calculator',
    'Texas paycheck calculator',
    'Florida paycheck calculator',
    'New York paycheck calculator',
    'Illinois paycheck calculator',
    'take home pay calculator',
    'salary paycheck calculator',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay Calculator',
    description: 'Calculate your exact take-home pay with our free paycheck calculator. Estimate hourly, weekly, and annual salary earnings after federal, state, and FICA taxes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paycheck Calculator 2026 - Free Hourly & Salary Take-Home Pay Calculator',
    description: 'Calculate your exact take-home pay with our free paycheck calculator after federal, state, and FICA taxes.',
  },
};

const tools = [
  {
    name: 'Texas Paycheck Calculator',
    href: '/texas',
    icon: 'TX',
    description: '0% state income tax. Calculate net pay with federal and FICA withholdings.',
    color: 'bg-blue-500',
  },
  {
    name: 'California Paycheck Calculator',
    href: '/california',
    icon: 'CA',
    description: 'Progressive state tax 1%-12.3% plus mandatory 1.1% SDI deductions.',
    color: 'bg-green-500',
  },
  {
    name: 'Florida Paycheck Calculator',
    href: '/florida',
    icon: 'FL',
    description: 'No state personal income tax. Calculate hourly and salary net earnings.',
    color: 'bg-amber-500',
  },
  {
    name: 'New York Paycheck Calculator',
    href: '/new-york',
    icon: 'NY',
    description: 'Progressive NY state tax 4%-6.85% plus local NYC resident income taxes.',
    color: 'bg-purple-500',
  },
  {
    name: 'Overtime Calculator',
    href: '/overtime',
    icon: 'OT',
    description: 'Calculate time-and-a-half (1.5x) and double-time (2.0x) overtime pay.',
    color: 'bg-rose-500',
  },
];

const faqs = [
  {
    question: 'What is a paycheck calculator and how does it work?',
    answer: 'A paycheck calculator estimates your net take-home pay by taking your gross wages (hourly wage or annual salary) and subtracting statutory deductions including Federal income tax, FICA taxes (Social Security and Medicare), and state or local income taxes based on current 2026 tax brackets.',
  },
  {
    question: 'What is the difference between gross pay and net pay?',
    answer: 'Gross pay is your total compensation before any withholdings or deductions. Net pay (also called take-home pay) is the amount you actually receive in your paycheck or bank account after mandatory taxes (Federal, State, FICA) and voluntary pre-tax deductions (like 401k or health insurance) are subtracted.',
  },
  {
    question: 'How do hourly and weekly paycheck calculations work?',
    answer: 'For an hourly paycheck, your gross wages equal your hourly rate multiplied by hours worked per pay period (typically 40 hours per week). A weekly paycheck calculator annualizes your earnings across 52 pay periods to determine progressive withholding brackets, ensuring accurate deductions for each weekly pay cycle.',
  },
  {
    question: 'How does my state of residence impact my paycheck?',
    answer: 'State income tax rules vary dramatically across the USA. States like Texas and Florida impose 0% personal state income tax, allowing workers to retain more of their income. Conversely, states like California and New York apply progressive tax brackets up to 12.3% and 6.85% respectively, plus mandatory disability or city taxes.',
  },
  {
    question: 'How does this free paycheck calculator compare to ADP paycheck tools?',
    answer: 'Enterprise payroll platforms such as ADP® are used by employers for automated payroll processing, W-2 generation, and tax filing. MyPayCheckUSA is an independent consumer tool designed for employees and job seekers to instantly model take-home pay, compare job offers, and simulate tax withholdings without requiring an employer portal or personal login.',
  },
  {
    question: 'Is this paycheck calculator free to use?',
    answer: 'Yes, MyPayCheckUSA is 100% free with no registration, software download, or personal data collection required. You can run unlimited calculations for any salary or hourly rate.',
  },
];

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'MyPayCheckUSA Free Paycheck Calculator',
      url: SITE_URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Free USA paycheck calculator to estimate take-home pay for hourly and salaried employees with 2026 federal, state, and FICA taxes.',
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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 rounded-full">
            Updated for 2026 Tax Brackets
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Paycheck Calculator:
            <span className="block text-blue-600">Estimate Your Take-Home Pay (2026)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Accurate hourly, weekly, and salary take-home pay calculations for USA workers. Calculate exact federal income tax, FICA deductions, and state tax withholdings with our free paycheck calculators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#calculators" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              Choose State Calculator
            </Link>
            <Link href="#guide" className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
              How Paychecks Are Calculated
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators Directory */}
      <section id="calculators" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free State &amp; Overtime Paycheck Calculators</h2>
            <p className="text-lg text-gray-600">Select your state or overtime tool to calculate accurate after-tax earnings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all group"
              >
                <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <span className="inline-block bg-blue-50 text-blue-600 font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Calculate Now
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In-depth 800-1200 Words SEO Guide */}
      <section id="guide" className="py-16 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How a Paycheck Calculator Works: Gross Pay vs. Net Take-Home Pay
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                When you evaluate a job offer, receive a pay raise, or plan your household budget, looking solely at your gross salary does not provide the full picture. Your <strong>gross pay</strong> is the total compensation agreed upon with your employer before any taxes or deductions are applied. However, the money that actually deposits into your checking account is your <strong>net take-home pay</strong>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                A reliable <strong>paycheck calculator</strong> bridges this gap by accurately simulating the payroll withholding equations used by human resources and payroll departments across the United States. By accounting for federal tax brackets, mandatory FICA payroll deductions, and individual state income taxes, our <strong>free paycheck calculator</strong> gives you a clear, transparent view of your actual earnings.
              </p>
            </div>

            {/* Federal & FICA Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Withholdings on Every American Paycheck</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regardless of the state you live in, every W-2 employee in the United States is subject to standard federal payroll deductions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">1. Federal Income Tax</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The IRS administers a progressive tax bracket system ranging from 10% to 37%. Your taxable gross wages are reduced by the standard deduction ($15,400 for single filers and $30,800 for married couples in 2026), and taxes are withheld progressively as your income reaches higher tiers.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h4 className="text-xl font-semibold text-green-900 mb-2">2. FICA Taxes (7.65%)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mandated by the Federal Insurance Contributions Act, FICA includes <strong>Social Security tax (6.2%)</strong> up to the 2026 wage limit ($184,500) and <strong>Medicare tax (1.45%)</strong> with no salary ceiling. An additional 0.9% Medicare surtax applies to high earners above $200,000.
                  </p>
                </div>
              </div>
            </div>

            {/* Hourly vs Salaried Section */}
            <div className="mb-10 border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hourly vs. Salaried Paycheck Calculations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compensation frequency and wage structure significantly influence withholding schedules. Our tools accommodate both hourly wage earners and salaried employees:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Using an Hourly Paycheck Calculator</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    An <strong>hourly paycheck calculator</strong> determines gross earnings by multiplying your base hourly rate by the regular hours worked during the pay period (typically 40 hours per standard work week). For employees who work irregular hours or overtime, hourly calculators help prevent withholding surprises when shifts fluctuate.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    If you work beyond 40 hours in a workweek, federal FLSA regulations require overtime compensation at a minimum of 1.5 times your standard wage. You can calculate these earnings using our dedicated <Link href="/overtime" className="text-blue-600 font-semibold hover:underline">Overtime Calculator</Link>.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly, Bi-Weekly, and Semi-Monthly Pay Frequencies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Tax withholdings are calculated on an annualized basis divided by the number of pay periods in the year:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                    <li><strong>Weekly Paycheck Calculator (52 Pay Periods):</strong> Popular among hourly and contract workers. Smaller, frequent tax withholdings matching weekly cash flow.</li>
                    <li><strong>Bi-Weekly Paycheck (26 Pay Periods):</strong> Paid every two weeks (e.g., every other Friday). This is the most common payroll schedule in the United States.</li>
                    <li><strong>Semi-Monthly Paycheck (24 Pay Periods):</strong> Paid twice per month, commonly on the 15th and the final day of the month.</li>
                    <li><strong>Monthly Paycheck (12 Pay Periods):</strong> Common in public administration, executive compensation, and academic institutions.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* State Income Tax Landscape */}
            <div className="mb-10 border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                State Income Tax Differences: Zero-Tax vs. Progressive vs. Flat-Tax States
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While federal taxes and FICA are uniform across the nation, state income taxes vary dramatically. Where you live and work can result in thousands of dollars of difference in your annual net income:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/50">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Zero State Income Tax</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    States like Texas and Florida do not levy personal income taxes. Workers keep more of every dollar earned, subject only to federal and FICA deductions.
                  </p>
                  <div className="space-y-1 text-sm font-medium">
                    <div><Link href="/texas" className="text-blue-600 hover:underline">→ Texas Paycheck Calculator</Link></div>
                    <div><Link href="/florida" className="text-blue-600 hover:underline">→ Florida Paycheck Calculator</Link></div>
                  </div>
                </div>

                <div className="border border-green-200 rounded-xl p-5 bg-green-50/50">
                  <h3 className="text-lg font-bold text-green-900 mb-2">Progressive State Tax</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    States like California (1% to 12.3% plus 1.1% SDI) and New York (4% to 6.85% plus NYC local taxes) apply higher tax brackets as income increases.
                  </p>
                  <div className="space-y-1 text-sm font-medium">
                    <div><Link href="/california" className="text-green-700 hover:underline">→ California Paycheck Calculator</Link></div>
                    <div><Link href="/new-york" className="text-green-700 hover:underline">→ New York Paycheck Calculator</Link></div>
                  </div>
                </div>

                <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/50">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Flat State Tax States</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Several states utilize a uniform flat income tax rate. For example, an <strong>Illinois paycheck calculator</strong> applies a flat 4.95% individual income tax rate across all taxable income tiers after standard personal exemptions.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Flat rates simplify tax projections across all wage levels.
                  </p>
                </div>
              </div>
            </div>

            {/* ADP & Commercial Systems Comparison */}
            <div className="mb-10 border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Our Free Paycheck Calculator Compares to Enterprise Payroll Systems (e.g., ADP®)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Millions of American workers see paystubs processed through commercial enterprise payroll software, such as an <strong>ADP paycheck calculator</strong> or equivalent payroll software like Paychex® and Gusto®. Understanding the relationship between these platforms and consumer calculators is essential:
              </p>
              
              <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  <strong>Enterprise Payroll Processors (e.g., ADP®):</strong> Designed for employers and human resources teams. They manage backend payroll disbursement, direct deposit routing, W-2/1099 compliance, wage garnishments, and pre-tax benefit administration (401k match, Section 125 health insurance plans).
                </p>
                <p>
                  <strong>MyPayCheckUSA Free Consumer Calculator:</strong> Designed for employees, freelancers, and job candidates. Our tool allows you to perform fast, confidential what-if calculations without needing employer login credentials or company intranet access. Whether you want to test the impact of a $5/hour raise or compare take-home pay between Texas and California before relocating, our calculator provides rapid, transparent figures.
                </p>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                  <em>Disclaimer: MyPayCheckUSA is an independent informational website. We are not affiliated with, sponsored by, or endorsed by Automatic Data Processing, Inc. (ADP®). ADP® is a registered trademark of Automatic Data Processing, Inc.</em>
                </p>
              </div>
            </div>

            {/* 4 Steps Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4 Simple Steps to Calculate Your Take-Home Pay
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Enter Wage or Salary</h4>
                    <p className="text-sm text-gray-600">Select hourly rate with hours per week, or input your annual base salary.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Select Pay Frequency</h4>
                    <p className="text-sm text-gray-600">Review calculations by weekly, bi-weekly, semi-monthly, or annual totals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Choose Filing Status</h4>
                    <p className="text-sm text-gray-600">Apply standard deduction thresholds for Single or Married filers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Select State</h4>
                    <p className="text-sm text-gray-600">Apply state-specific rules (e.g. 0% in TX/FL or progressive tax in CA/NY).</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why MyPayCheckUSA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Use MyPayCheckUSA?</h2>
            <p className="text-lg text-gray-600">Built for accuracy, speed, and privacy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate 2026 Tax Rules</h3>
              <p className="text-gray-600">Our calculators use the latest 2026 federal brackets, FICA limits ($184,500), and state income tax updates.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">State-Specific Calculations</h3>
              <p className="text-gray-600">Each state has unique rules. We model zero-tax states, progressive tax brackets, and disability contributions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Free &amp; Private</h3>
              <p className="text-gray-600">No registration, no personal data storage, and no hidden fees. Use our free paycheck calculator anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about paycheck withholdings and net take-home pay</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Tax Blog</h2>
            <p className="text-lg text-gray-600">Expert insights on USA taxes, salaries, and personal finance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/texas-no-state-income-tax" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">TX</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Texas Has No State Income Tax: Complete Guide 2026</h3>
                    <p className="text-gray-600 mb-4">Discover how Texas&#39;s tax-friendly environment affects your paycheck and why so many Americans are moving to the Lone Star State.</p>
                  </div>
                  <span className="text-blue-600 font-semibold group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
            <Link href="/blog/california-tax-guide" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">CA</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">California Paycheck Tax Guide for 2026</h3>
                    <p className="text-gray-600 mb-4">Navigate California&#39;s progressive tax system. Learn about state disability insurance and how it affects your take-home pay.</p>
                  </div>
                  <span className="text-blue-600 font-semibold group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
            <Link href="/blog/california-vs-texas-taxes" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">VS</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">California vs Texas: Which State Keeps More of Your Paycheck?</h3>
                    <p className="text-gray-600 mb-4">A detailed comparison of take-home pay between California and Texas. See how much you could save by moving.</p>
                  </div>
                  <span className="text-blue-600 font-semibold group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </div>
  );
}