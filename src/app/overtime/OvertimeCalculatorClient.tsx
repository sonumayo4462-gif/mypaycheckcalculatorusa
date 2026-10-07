'use client';

import { useState } from 'react';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';

interface OvertimeResult {
  regularPay: number;
  overtimePay: number;
  totalPay: number;
}

export default function OvertimeCalculatorClient() {
  const [hourlyRate, setHourlyRate] = useState('');
  const [regularHours, setRegularHours] = useState('');
  const [overtimeHours, setOvertimeHours] = useState('');
  const [overtimeMultiplier, setOvertimeMultiplier] = useState('1.5');
  const [result, setResult] = useState<OvertimeResult | null>(null);

  const calculateOvertime = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const regular = parseFloat(regularHours) || 0;
    const overtime = parseFloat(overtimeHours) || 0;
    const multiplier = parseFloat(overtimeMultiplier) || 1.5;

    if (rate <= 0 || regular < 0 || overtime < 0) {
      alert('Please enter valid positive numbers.');
      return;
    }

    const regularPay = rate * regular;
    const overtimePay = rate * multiplier * overtime;
    const totalPay = regularPay + overtimePay;

    setResult({ regularPay, overtimePay, totalPay });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto mb-8" />

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Overtime Pay</h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="hourlyRate" className="block text-sm font-semibold text-gray-700 mb-2">Hourly Rate ($)</label>
            <input
              id="hourlyRate"
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="e.g. 25"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="regularHours" className="block text-sm font-semibold text-gray-700 mb-2">Regular Hours</label>
              <input
                id="regularHours"
                type="number"
                value={regularHours}
                onChange={(e) => setRegularHours(e.target.value)}
                placeholder="e.g. 40"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="overtimeHours" className="block text-sm font-semibold text-gray-700 mb-2">Overtime Hours</label>
              <input
                id="overtimeHours"
                type="number"
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(e.target.value)}
                placeholder="e.g. 10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="multiplier" className="block text-sm font-semibold text-gray-700 mb-2">Overtime Multiplier</label>
            <select
              id="multiplier"
              value={overtimeMultiplier}
              onChange={(e) => setOvertimeMultiplier(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              <option value="1.5">Time and a Half (1.5x)</option>
              <option value="2">Double Time (2x)</option>
              <option value="2.5">Double Time and a Half (2.5x)</option>
              <option value="3">Triple Time (3x)</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <button
            onClick={calculateOvertime}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
          >
            Calculate Overtime Pay
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Pay Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-gray-600">Regular Pay ({regularHours} hours @ {hourlyRate}/hr)</span>
              <span className="font-semibold text-gray-900">${result.regularPay.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-gray-600">Overtime Pay ({overtimeHours} hours @ ${(parseFloat(hourlyRate) * parseFloat(overtimeMultiplier)).toFixed(2)}/hr)</span>
              <span className="font-semibold text-gray-900">${result.overtimePay.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
              <span className="font-semibold text-gray-900">Total Pay</span>
              <span className="font-bold text-blue-600 text-lg">${result.totalPay.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Overtime Pay in 2026</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Overtime pay is additional compensation that employers must provide to eligible employees who work more than 40 hours in a workweek. Under the Fair Labor Standards Act (FLSA), non-exempt employees must be paid at least time and a half (1.5x their regular hourly rate) for all hours worked beyond 40 in a week.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overtime Pay Rules for 2026</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For 2026, the basic overtime rules remain:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Time and a Half (1.5x):</strong> Required for hours worked over 40 in a workweek</li>
            <li><strong>Double Time (2x):</strong> Some employers and states require double time for holidays or hours over 12 in a day</li>
            <li><strong>Holiday Pay:</strong> Employers may offer premium pay for working on recognized holidays</li>
            <li><strong>Exempt Employees:</strong> Certain salaried positions (executive, administrative, professional) are exempt from overtime</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overtime Multiplier Examples</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Multiplier</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Common Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">When Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">1.5x</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Time and a Half</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Standard overtime (over 40 hours)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">2x</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Double Time</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Holidays, over 12 hours/day</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">2.5x</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Double Time and a Half</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Holiday overtime (some employers)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">3x</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Triple Time</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Rare holiday scenarios</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/texas" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <span className="text-lg font-semibold text-gray-900">Texas Paycheck Calculator</span>
            <p className="text-sm text-gray-600 mt-1">Calculate TX take-home pay</p>
          </a>
          <a href="/california" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <span className="text-lg font-semibold text-gray-900">California Paycheck Calculator</span>
            <p className="text-sm text-gray-600 mt-1">Calculate CA take-home pay</p>
          </a>
          <a href="/florida" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <span className="text-lg font-semibold text-gray-900">Florida Paycheck Calculator</span>
            <p className="text-sm text-gray-600 mt-1">Calculate FL take-home pay</p>
          </a>
          <a href="/new-york" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <span className="text-lg font-semibold text-gray-900">New York Paycheck Calculator</span>
            <p className="text-sm text-gray-600 mt-1">Calculate NY take-home pay</p>
          </a>
        </div>
      </div>
    </div>
  );
}
