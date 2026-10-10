import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | MyPayCheckUSA',
  description: 'Contact MyPayCheckUSA for questions, feedback, or support regarding our paycheck calculators.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: '/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We&#39;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions, feedback, or support regarding our paycheck calculators, please reach out to us. We&#39;re constantly working to improve our tools and add new features.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Email:</strong> contact@mypaycheckcalculatorusa.com
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Address:</strong> MyPayCheckUSA, United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
