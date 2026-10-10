export type FilingStatus = 'single' | 'married';

export interface TaxInput {
  annualSalary: number;
  hourlyWage: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  filingStatus: FilingStatus;
  state: string;
  overtimeHours?: number;
  overtimeRate?: number;
}

export interface TaxResult {
  grossAnnual: number;
  grossMonthly: number;
  grossBiweekly: number;
  grossWeekly: number;
  grossSemimonthly: number;
  grossHourly: number;
  federalTax: number;
  stateTax: number;
  ficaTax: number;
  caSdi: number;
  totalDeductions: number;
  takeHomeAnnual: number;
  takeHomeMonthly: number;
  takeHomeBiweekly: number;
  takeHomeWeekly: number;
  takeHomeSemimonthly: number;
  takeHomeHourly: number;
  effectiveTaxRate: number;
}

const FICA_RATE_MEDICARE = 0.0145;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const ADDITIONAL_MEDICARE_THRESHOLD_SINGLE = 200000;
const ADDITIONAL_MEDICARE_THRESHOLD_MARRIED = 250000;
const STANDARD_WEEKS_PER_YEAR = 52;

const STANDARD_DEDUCTION_SINGLE = 16100;
const STANDARD_DEDUCTION_MARRIED = 32200;

const SS_WAGE_BASE = 184500;

const CA_SDI_RATE = 0.011;
const CA_SDI_WAGE_BASE = 157500;

const FEDERAL_BRACKETS_SINGLE = [
  { min: 0, max: 12400, rate: 0.10 },
  { min: 12400, max: 50400, rate: 0.12 },
  { min: 50400, max: 105700, rate: 0.22 },
  { min: 105700, max: 201775, rate: 0.24 },
  { min: 201775, max: 256225, rate: 0.32 },
  { min: 256225, max: 640600, rate: 0.35 },
  { min: 640600, max: Infinity, rate: 0.37 },
];

const FEDERAL_BRACKETS_MARRIED = [
  { min: 0, max: 24800, rate: 0.10 },
  { min: 24800, max: 100800, rate: 0.12 },
  { min: 100800, max: 211400, rate: 0.22 },
  { min: 211400, max: 403550, rate: 0.24 },
  { min: 403550, max: 512450, rate: 0.32 },
  { min: 512450, max: 768700, rate: 0.35 },
  { min: 768700, max: Infinity, rate: 0.37 },
];

const STATE_TAX_CONFIGS: Record<string, { type: 'flat' | 'progressive'; rate?: number; brackets?: { min: number; max: number; rate: number }[] }> = {
  texas: { type: 'flat', rate: 0 },
  florida: { type: 'flat', rate: 0 },
  california: {
    type: 'progressive',
    brackets: [
      { min: 0, max: 10412, rate: 0.01 },
      { min: 10412, max: 24684, rate: 0.02 },
      { min: 24684, max: 38959, rate: 0.04 },
      { min: 38959, max: 53996, rate: 0.06 },
      { min: 53996, max: 67907, rate: 0.08 },
      { min: 67907, max: 350000, rate: 0.093 },
      { min: 350000, max: 500000, rate: 0.103 },
      { min: 500000, max: 1000000, rate: 0.113 },
      { min: 1000000, max: Infinity, rate: 0.123 },
    ],
  },
  'new-york': {
    type: 'progressive',
    brackets: [
      { min: 0, max: 8500, rate: 0.04 },
      { min: 8500, max: 11700, rate: 0.045 },
      { min: 11700, max: 13850, rate: 0.0525 },
      { min: 13850, max: 21500, rate: 0.059 },
      { min: 21500, max: 27000, rate: 0.0645 },
      { min: 27000, max: 37000, rate: 0.0665 },
      { min: 37000, max: 56500, rate: 0.0685 },
      { min: 56500, max: Infinity, rate: 0.0882 },
    ],
  },
};

export function calculateFederalTax(taxableIncome: number, filingStatus: FilingStatus): number {
  const brackets = filingStatus === 'single' ? FEDERAL_BRACKETS_SINGLE : FEDERAL_BRACKETS_MARRIED;
  let tax = 0;

  for (const bracket of brackets) {
    if (taxableIncome > bracket.min) {
      const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
      tax += taxableInBracket * bracket.rate;
    }
  }

  return tax;
}

export function calculateStateTax(taxableIncome: number, state: string): number {
  const config = STATE_TAX_CONFIGS[state.toLowerCase()];
  if (!config) {
    return 0;
  }

  if (config.type === 'progressive' && config.brackets) {
    let tax = 0;
    for (const bracket of config.brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
        tax += taxableInBracket * bracket.rate;
      }
    }
    return tax;
  }

  return 0;
}

export function calculatePaycheck(input: TaxInput): TaxResult {
  const effectiveHoursPerWeek = input.hoursPerWeek + (input.overtimeHours || 0);

  const overtimePay = (input.overtimeHours || 0) * (input.overtimeRate || 1.5) * input.hourlyWage * (input.weeksPerYear || STANDARD_WEEKS_PER_YEAR);
  const baseGross = input.annualSalary > 0
    ? input.annualSalary
    : input.hourlyWage * input.hoursPerWeek * (input.weeksPerYear || STANDARD_WEEKS_PER_YEAR);

  const totalGross = baseGross + overtimePay;

  const standardDeduction = input.filingStatus === 'single' ? STANDARD_DEDUCTION_SINGLE : STANDARD_DEDUCTION_MARRIED;
  const federalTaxableIncome = Math.max(0, totalGross - standardDeduction);

  const federalTax = calculateFederalTax(federalTaxableIncome, input.filingStatus);
  const stateTax = calculateStateTax(totalGross, input.state);

  const ssTax = Math.min(totalGross, SS_WAGE_BASE) * 0.062;
  const medicareTax = totalGross * FICA_RATE_MEDICARE;
  const additionalMedicareThreshold = input.filingStatus === 'single' ? ADDITIONAL_MEDICARE_THRESHOLD_SINGLE : ADDITIONAL_MEDICARE_THRESHOLD_MARRIED;
  const additionalMedicareTax = Math.max(0, totalGross - additionalMedicareThreshold) * ADDITIONAL_MEDICARE_RATE;
  const ficaTax = ssTax + medicareTax + additionalMedicareTax;

  const caSdi = input.state === 'california' ? Math.min(totalGross, CA_SDI_WAGE_BASE) * CA_SDI_RATE : 0;

  const totalDeductions = federalTax + stateTax + ficaTax + caSdi;
  const takeHomeAnnual = totalGross - totalDeductions;

  const grossMonthly = totalGross / 12;
  const grossBiweekly = totalGross / 26;
  const grossWeekly = totalGross / STANDARD_WEEKS_PER_YEAR;
  const grossSemimonthly = totalGross / 24;
  const grossHourly = effectiveHoursPerWeek > 0 ? totalGross / (effectiveHoursPerWeek * (input.weeksPerYear || STANDARD_WEEKS_PER_YEAR)) : 0;

  const takeHomeMonthly = takeHomeAnnual / 12;
  const takeHomeBiweekly = takeHomeAnnual / 26;
  const takeHomeWeekly = takeHomeAnnual / STANDARD_WEEKS_PER_YEAR;
  const takeHomeSemimonthly = takeHomeAnnual / 24;
  const takeHomeHourly = effectiveHoursPerWeek > 0 ? takeHomeAnnual / (effectiveHoursPerWeek * (input.weeksPerYear || STANDARD_WEEKS_PER_YEAR)) : 0;

  return {
    grossAnnual: totalGross,
    grossMonthly,
    grossBiweekly,
    grossWeekly,
    grossSemimonthly,
    grossHourly,
    federalTax,
    stateTax,
    ficaTax,
    caSdi,
    totalDeductions,
    takeHomeAnnual,
    takeHomeMonthly,
    takeHomeBiweekly,
    takeHomeWeekly,
    takeHomeSemimonthly,
    takeHomeHourly,
    effectiveTaxRate: totalGross > 0 ? (totalDeductions / totalGross) * 100 : 0,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
