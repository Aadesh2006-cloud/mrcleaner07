import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Home,
  Key,
  Building2,
  Layers,
  Car,
  Clock,
  Phone,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader.tsx';
import { SERVICES, CleaningService, BUSINESS_INFO } from '../data/cleaningData.ts';

interface ServicesPageProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'residential') return s.id === 'home-cleaning' || s.id === 'carpet-cleaning' || s.id === 'window-cleaning';
    if (filter === 'bond') return s.id === 'end-of-lease';
    if (filter === 'commercial') return s.id === 'office-cleaning';
    if (filter === 'specialty') return s.id === 'car-wash' || s.id === 'carpet-cleaning' || s.id === 'window-cleaning';
    return true;
  });

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

  return (
    <div>
      <PageHeader
        kicker="Professional Cleaning Services"
        title="Comprehensive Cleaning Solutions for Morley & Perth"
        description="From regular home housekeeping and commercial offices to guaranteed end-of-lease bond cleans and vehicle detailing. Trained, police-checked cleaners with 100% satisfaction guaranteed."
        currentPage="Services"
      />

      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Functional Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/80 rounded-xl w-fit mx-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential & Homes' },
              { id: 'bond', label: 'End of Lease (Bond Back)' },
              { id: 'commercial', label: 'Commercial & Offices' },
              { id: 'specialty', label: 'Carpet, Windows & Vehicles' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="space-y-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Details & Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-teal-700 tracking-wider uppercase">
                          Service {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-teal-800 italic">
                      "{service.tagline}"
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Callout */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectService(service.title)}
                        className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <span>Book {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        to="/pricing"
                        className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition-colors"
                      >
                        Calculate Custom Quote
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Detailed Checklist & Rate Card */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Transparent Rate</span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-3xl font-extrabold text-slate-900 font-display tabular-nums">
                            ${service.startingPrice}
                          </span>
                          <span className="text-xs text-slate-500">{service.priceUnit}</span>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Inspection Checklist */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Detailed Cleaning Checklist ({service.checklist.length} Points):
                      </span>
                      <div className="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs text-slate-600">
                        {service.checklist.map((item) => (
                          <div key={item} className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-slate-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>✓ All supplies included</span>
                      <span>✓ Police-checked staff</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Need Custom Package Banner */}
          <div className="bg-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold font-display">Need a customized cleaning package?</h3>
              <p className="text-xs sm:text-sm text-teal-200">
                We combine deep kitchen degreasing, carpet steam extraction, and exterior windows into discounted bundles.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-5 py-3 text-xs sm:text-sm font-bold bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Call: {BUSINESS_INFO.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="px-5 py-3 text-xs sm:text-sm font-bold bg-teal-700 text-white rounded-xl hover:bg-teal-600 transition-colors"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
