'use client';

import { useState } from 'react';
import AdSensePlaceholder from './AdSensePlaceholder';
import { calculatePaycheck, formatCurrency, TaxInput, TaxResult, FilingStatus } from '@/lib/taxCalculations';

interface CalculatorUIProps {
  state: string;
  stateName: string;
}

export default function CalculatorUI({ state, stateName }: CalculatorUIProps) {
  const [inputType, setInputType] = useState<'hourly' | 'annual'>('hourly');
  const [hourlyWage, setHourlyWage] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [weeksPerYear, setWeeksPerYear] = useState('52');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [result, setResult] = useState<TaxResult | null>(null);

  const handleCalculate = () => {
    const wage = parseFloat(hourlyWage) || 0;
    const salary = parseFloat(annualSalary) || 0;
    const hours = parseFloat(hoursPerWeek) || 0;
    const weeks = parseFloat(weeksPerYear) || 52;

    if ((inputType === 'hourly' && wage <= 0) || (inputType === 'annual' && salary <= 0) || hours <= 0) {
      alert('Please enter valid positive numbers.');
      return;
    }

    const input: TaxInput = {
      hourlyWage: wage,
      annualSalary: salary,
      hoursPerWeek: hours,
      weeksPerYear: weeks,
      filingStatus,
      state,
    };

    const calculated = calculatePaycheck(input);
    setResult(calculated);
  };

  const pieSegments = result ? [
    { label: 'Take Home', value: result.takeHomeAnnual, color: '#2563EB' },
    { label: 'Federal', value: result.federalTax, color: '#EF4444' },
    { label: 'State', value: result.stateTax, color: '#F59E0B' },
    { label: 'FICA', value: result.ficaTax, color: '#10B981' },
  ] : [];

  const total = result ? pieSegments.reduce((sum, s) => sum + s.value, 0) : 1;
  let cumulativePercent = 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Take-Home Pay</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Income Type</label>
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setInputType('hourly')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                inputType === 'hourly' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hourly Wage
            </button>
            <button
              type="button"
              onClick={() => setInputType('annual')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                inputType === 'annual' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual Salary
            </button>
          </div>
        </div>

        {inputType === 'hourly' ? (
          <div>
            <label htmlFor="hourlyWage" className="block text-sm font-semibold text-gray-700 mb-2">Hourly Wage ($)</label>
            <input
              id="hourlyWage"
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              placeholder="e.g. 25"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="annualSalary" className="block text-sm font-semibold text-gray-700 mb-2">Annual Salary ($)</label>
            <input
              id="annualSalary"
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
              placeholder="e.g. 52000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hoursPerWeek" className="block text-sm font-semibold text-gray-700 mb-2">Hours per Week</label>
            <input
              id="hoursPerWeek"
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="weeksPerYear" className="block text-sm font-semibold text-gray-700 mb-2">Weeks per Year</label>
            <input
              id="weeksPerYear"
              type="number"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Filing Status</label>
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setFilingStatus('single')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                filingStatus === 'single' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Single
            </button>
            <button
              type="button"
              onClick={() => setFilingStatus('married')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                filingStatus === 'married' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Married
            </button>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
        >
          Calculate Take-Home Pay
        </button>
      </div>

      {result && (
        <div className="mt-8 space-y-6">
          <AdSensePlaceholder size="728x90" className="w-full max-w-[728px] mx-auto" />

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Take-Home Pay</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <p className="text-sm text-gray-600">Weekly</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeWeekly)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Bi-weekly</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeBiweekly)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Semi-monthly</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeSemimonthly)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeMonthly)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hourly</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeHourly)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Annual</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(result.takeHomeAnnual)}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Pay Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Gross Annual Pay</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.grossAnnual)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-600">Federal Tax</span>
                  <span className="font-semibold text-red-600">-{formatCurrency(result.federalTax)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                  <span className="text-gray-600">State Tax ({stateName})</span>
                  <span className="font-semibold text-amber-600">-{formatCurrency(result.stateTax)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-gray-600">FICA</span>
                  <span className="font-semibold text-emerald-600">-{formatCurrency(result.ficaTax)}</span>
                </div>
                {state === 'california' && result.caSdi > 0 && (
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-600">CA SDI (1.1%)</span>
                    <span className="font-semibold text-purple-600">-{formatCurrency(result.caSdi)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <span className="font-semibold text-gray-900">Take-Home Pay</span>
                  <span className="font-bold text-blue-600 text-lg">{formatCurrency(result.takeHomeAnnual)}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tax Distribution</h4>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {pieSegments.map((segment, index) => {
                      const percent = segment.value / total;
                      const dashArray = percent * 100;
                      const strokeDashoffset = 100 - cumulativePercent * 100;
                      cumulativePercent += percent;

                      return (
                        <circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="15.9155"
                          fill="none"
                          stroke={segment.color}
                          strokeWidth="30"
                          strokeDasharray={`${dashArray} 100`}
                          strokeDashoffset={strokeDashoffset}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{result.effectiveTaxRate.toFixed(1)}%</p>
                      <p className="text-xs text-gray-600">Effective Rate</p>
                    </div>
                  </div>
                </div>
                <div className="ml-6 space-y-2">
                  {pieSegments.map((segment, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: segment.color }}></div>
                      <span className="text-sm text-gray-600">{segment.label}</span>
                      <span className="text-sm font-medium text-gray-900 ml-2">
                        {((segment.value / total) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
