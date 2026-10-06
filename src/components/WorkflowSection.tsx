import React from 'react';
import { CalendarCheck, ShieldCheck, Sparkles, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import { WORKFLOW_STEPS, BUSINESS_INFO } from '../data/cleaningData.ts';

interface WorkflowSectionProps {
  onOpenBooking: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenBooking }) => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <PhoneCall className="w-5 h-5 text-teal-600" />;
      case 2:
        return <CalendarCheck className="w-5 h-5 text-teal-600" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 4:
        return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
      case 5:
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="workflow" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Seamless Process</span>
            <span aria-hidden="true">·</span>
            <span>Zero Stress</span>
            <span aria-hidden="true">·</span>
            <span>From Quote To Sparkle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Our 5-Step Work Flow
          </h2>

          <p className="text-base text-slate-600">
            How we deliver a stress-free cleaning experience from your first inquiry to final walk-through.
          </p>
        </div>

        {/* Steps Flow Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-teal-800 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-teal-100/70 flex items-center justify-center">
                      {getStepIcon(step.step)}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display pt-1">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-teal-700">
                    Step {step.step} of 5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-gradient-to-r from-teal-900 via-teal-850 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-display">
              Ready to experience the Mr Cleaner difference?
            </h4>
            <p className="text-xs sm:text-sm text-teal-200">
              Get an instant quote or lock in your preferred cleaning slot today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 text-xs sm:text-sm font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 rounded-xl transition-colors cursor-pointer"
            >
              Book Your Cleaning
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="px-4 py-3 text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
