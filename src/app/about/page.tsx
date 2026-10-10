import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MyPayCheckUSA',
  description: 'Learn about MyPayCheckUSA, our mission to provide accurate paycheck calculators for USA workers.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About MyPayCheckUSA</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Providing accurate, free paycheck calculators for USA workers since 2026.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              MyPayCheckUSA was founded with a simple mission: to help American workers understand their true take-home pay. With tax systems becoming increasingly complex, too many people are surprised by the amount of money that disappears from their paychecks before they ever see it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of financial experts and software engineers has built accurate, easy-to-use calculators that account for Federal taxes, state taxes, FICA, and other deductions. We update our calculators annually to reflect the latest tax brackets and rules.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you&#39;re a Texas resident enjoying no state income tax, a California worker navigating progressive tax brackets, or a New Yorker dealing with state and city taxes, MyPayCheckUSA has the tools you need to plan your finances effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
