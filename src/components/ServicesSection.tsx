import React, { useState } from 'react';
import {
  Home,
  Key,
  Building2,
  Sparkles,
  Layers,
  Car,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SERVICES, CleaningService } from '../data/cleaningData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedChecklist, setExpandedChecklist] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-teal-600" />;
      case 'Key':
        return <Key className="w-6 h-6 text-teal-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-teal-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-teal-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  const toggleChecklist = (id: string) => {
    setExpandedChecklist((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Comprehensive Cleaning</span>
            <span aria-hidden="true">·</span>
            <span>Residential & Commercial</span>
            <span aria-hidden="true">·</span>
            <span>Western Australia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Cleaning Services
          </h2>

          <p className="text-base text-slate-600">
            Tailored solutions delivered by trained, police-checked cleaners using premium eco-friendly supplies.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isChecklistOpen = expandedChecklist === service.id;

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Popularity Marker */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                        Most Requested
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      "{service.tagline}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Checklist Drawer */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleChecklist(service.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-teal-800 hover:text-teal-950 p-2 rounded-lg bg-teal-50/60 border border-teal-100 transition-colors cursor-pointer"
                    >
                      <span>View Full Checklist ({service.checklist.length} items)</span>
                      {isChecklistOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isChecklistOpen && (
                      <div className="mt-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 animate-fadeIn">
                        {service.checklist.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Starting Price & Book Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold block">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-slate-900 font-display tabular-nums">
                        ${service.startingPrice}
                      </span>
                      <span className="text-[11px] text-slate-500">{service.priceUnit}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
