import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MyPayCheckUSA',
  description: 'Read the privacy policy for MyPayCheckUSA.com. Learn how we protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we protect your data and privacy at MyPayCheckUSA.com
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At MyPayCheckUSA.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our paycheck calculators are designed to work entirely in your browser. We do not collect or store any personal information, salary details, or tax information that you enter into our calculators.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Analytics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may use cookies and analytics tools to understand how visitors use our site and improve user experience. This data is aggregated and anonymous.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Advertising</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may display third-party advertisements. These advertisers may use cookies to serve ads based on your prior visits to our website or other websites.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at contact@mypaycheckusa.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
