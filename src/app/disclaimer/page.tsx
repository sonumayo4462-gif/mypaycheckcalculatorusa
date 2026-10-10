import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | MyPayCheckUSA',
  description: 'Read the disclaimer for MyPayCheckUSA. Our calculators are for informational purposes only.',
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    url: '/disclaimer',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important information about the use of our paycheck calculators.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The information provided by MyPayCheckUSA is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Not Financial Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our paycheck calculators are tools for informational purposes only and should not be considered financial, tax, or legal advice. The results provided by our calculators are estimates based on publicly available tax information and standard assumptions.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Consult a Professional</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For accurate tax advice tailored to your specific situation, please consult a qualified tax professional, CPA, or financial advisor. Tax laws are subject to change, and individual circumstances vary widely.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
