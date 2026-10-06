import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { QuoteCalculator, CalculatedQuote } from '../components/QuoteCalculator.tsx';
import { Check, Info, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface PricingPageProps {
  onSelectQuote: (quote: CalculatedQuote) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSelectQuote }) => {
  return (
    <div>
      <PageHeader
        kicker="Transparent Pricing"
        title="Instant Cleaning Quotes & Rates"
        description="Clear, upfront estimates with zero hidden costs. Customize your property size, frequency, and specialized add-ons to calculate your exact price in seconds."
        currentPage="Pricing & Calculator"
      />

      {/* Calculator Section */}
      <QuoteCalculator onSelectQuote={onSelectQuote} />

      {/* Package Rates Comparison Table */}
      <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Transparent Package Comparison
            </h2>
            <p className="text-sm text-slate-600">
              See what is included across each level of service before booking.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="py-4 px-5">Inclusions & Checkpoints</th>
                  <th className="py-4 px-5 text-center">Regular Clean</th>
                  <th className="py-4 px-5 text-center">Deep Spring Clean</th>
                  <th className="py-4 px-5 text-center bg-teal-50/80 text-teal-950">End of Lease (Bond)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { feature: 'Kitchen benchtops, sink & exterior cupboards', reg: true, deep: true, bond: true },
                  { feature: 'Stovetop grease wipe & burner sanitisation', reg: true, deep: true, bond: true },
                  { feature: 'Oven interior deep degreasing & racks restoration', reg: false, deep: true, bond: true },
                  { feature: 'Rangehood canopy & grease mesh filters hot soak', reg: false, deep: true, bond: true },
                  { feature: 'Bathroom descaling, shower glass & toilet sanitising', reg: true, deep: true, bond: true },
                  { feature: 'Inside all empty kitchen drawers & pantries', reg: false, deep: false, bond: true },
                  { feature: 'Skirting boards, light switches & powerpoints wiped', reg: false, deep: true, bond: true },
                  { feature: 'Window interior glass panes & tracks vacuumed', reg: false, deep: false, bond: true },
                  { feature: 'Wall mark spot cleaning & doors wiped', reg: false, deep: false, bond: true },
                  { feature: 'All floors thoroughly vacuumed & mopped', reg: true, deep: true, bond: true },
                  { feature: '100% Bond Return Real Estate Guarantee', reg: false, deep: false, bond: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-5 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-3 px-5 text-center">
                      {row.reg ? <Check className="w-4 h-4 text-teal-600 mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="py-3 px-5 text-center">
                      {row.deep ? <Check className="w-4 h-4 text-teal-600 mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="py-3 px-5 text-center bg-teal-50/30">
                      {row.bond ? <Check className="w-4 h-4 text-teal-700 mx-auto font-bold" /> : <span className="text-slate-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Policy Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Zero Hidden Fees</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All detergents, microfiber cloths, industrial vacuums, and steam extractors are included in the price.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Recurring Discounts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save 15% on weekly cleans and 10% on fortnightly cleans. Flexible cancellation anytime.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Satisfaction Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If anything is not 100% up to standard, let us know within 24 hours and we return to re-clean for free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
