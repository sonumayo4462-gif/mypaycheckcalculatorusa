import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California vs Texas: Which State Keeps More of Your Paycheck? | MyPayCheckUSA',
  description: 'A detailed comparison of take-home pay between California and Texas. See how much you could save by moving states.',
  keywords: ['california vs texas taxes', 'which state has lower taxes', 'california vs texas cost of living', 'state tax comparison'],
  alternates: {
    canonical: '/blog/california-vs-texas-taxes',
  },
  openGraph: {
    url: '/blog/california-vs-texas-taxes',
  },
};

export default function CaliforniaVsTexas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-purple-600">VS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">California vs Texas: Which State Keeps More of Your Paycheck?</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A detailed comparison of take-home pay between California and Texas. See how much you could save by moving.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              California and Texas represent two very different approaches to taxation. California has one of the highest state income tax rates in the country, while Texas has no state income tax at all. This difference can have a massive impact on your take-home pay.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Tax Comparison by Income Level</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&#39;s compare the tax burden at different income levels. We&#39;ll look at the total state and local tax burden for a single filer in each state:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual Income</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">CA State Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">TX State Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                    <td className="px-4 py-3 text-sm text-red-600">~$1,200</td>
                    <td className="px-4 py-3 text-sm text-green-600">$0</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$1,200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-red-600">~$3,800</td>
                    <td className="px-4 py-3 text-sm text-green-600">$0</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$3,800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                    <td className="px-4 py-3 text-sm text-red-600">~$5,800</td>
                    <td className="px-4 py-3 text-sm text-green-600">$0</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$5,800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">$200,000</td>
                    <td className="px-4 py-3 text-sm text-red-600">~$16,500</td>
                    <td className="px-4 py-3 text-sm text-green-600">$0</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">$16,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Beyond Taxes: Cost of Living Considerations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While taxes are a major factor, cost of living also matters. Texas generally has lower housing costs but higher property taxes. California has higher costs across the board but also higher average salaries.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Your Take-Home Pay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/texas" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
              <span className="text-lg font-semibold text-blue-600">Texas Paycheck Calculator</span>
            </Link>
            <Link href="/california" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center">
              <span className="text-lg font-semibold text-green-600">California Paycheck Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
