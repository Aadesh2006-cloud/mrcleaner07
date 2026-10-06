import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TransformationsPageProps {
  onOpenBooking: () => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({ onOpenBooking }) => {
  return (
    <div>
      <PageHeader
        kicker="Visual Proof"
        title="Real Cleaning Transformations"
        description="See the actual before-and-after results achieved by the Mr Cleaner team across Morley and Perth homes. Tough grease, heavy grime, and hard water scale restored to factory perfection."
        currentPage="Before & After"
      />

      {/* Main Interactive Comparison Slider */}
      <BeforeAfterSlider />

      {/* Deep Dive Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Methodology & Restoration Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              How We Achieve Exceptional Results
            </h2>
            <p className="text-base text-slate-600">
              We never use corrosive harsh bleaches that scratch stainless steel or discolor grout. Here is our science-backed eco-friendly approach:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center font-extrabold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Thermal & Enzyme Degreasing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For burnt gas stovetops and rangehood filters, we use botanical bio-enzymes combined with controlled heat soaks to break the molecular bond of carbonized oil without scratching enamel or brushed metal.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Scratch Guarantee</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center font-extrabold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Mineral Descaling & Glass Seal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Perth tap water is notoriously rich in dissolved minerals that etch shower screens. Our non-toxic citric acid matrix dissolves calcium deposits without fumes, restoring 100% optical clarity.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Streak-Free Crystal View</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center font-extrabold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Hot Water Soil Extraction
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We flush high-traffic carpet fibers with 85°C hot steam while twin vacuum motors instantly recover 95% of moisture, extracting embedded sand, allergens, and odors with minimal drying time.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fast 3–4 Hour Drying</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-teal-900 via-teal-850 to-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold font-display">Got a tough area that needs deep restoration?</h3>
              <p className="text-xs sm:text-sm text-teal-200">
                Send us a photo or book an on-site visit in Morley and Perth today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl cursor-pointer"
              >
                Book Your Clean
              </button>
              <Link
                to="/pricing"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl"
              >
                Instant Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
