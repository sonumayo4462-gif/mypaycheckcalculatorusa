import type { Metadata } from 'next';
import OvertimeCalculatorClient from './OvertimeCalculatorClient';

export const metadata: Metadata = {
  title: 'Overtime Paycheck Calculator 2026 - Time and a Half & Double Time',
  description: 'Calculate your overtime earnings and take-home pay with our free overtime paycheck calculator. Supports 1.5x time-and-a-half and 2.0x double-time rates.',
  keywords: [
    'overtime paycheck calculator',
    'overtime calculator',
    'free paycheck calculator',
    'time and a half calculator',
    'double time calculator',
    'hourly paycheck calculator',
    'overtime pay calculator',
    '2026',
  ],
  alternates: {
    canonical: '/overtime',
  },
  openGraph: {
    type: 'website',
    url: '/overtime',
    title: 'Overtime Paycheck Calculator 2026 - Time and a Half & Double Time',
    description: 'Calculate your overtime earnings and take-home pay with our free overtime paycheck calculator. Supports 1.5x and 2.0x rates.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overtime Paycheck Calculator 2026 - Time and a Half & Double Time',
    description: 'Calculate your overtime earnings and take-home pay with our free overtime paycheck calculator.',
  },
};

export default function OvertimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-rose-600">OT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Overtime Calculator 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your overtime pay with time and a half, double time, and custom multipliers. Accurate for USA labor laws.
            </p>
          </div>
        </div>
      </div>

      <OvertimeCalculatorClient />
    </div>
  );
}
