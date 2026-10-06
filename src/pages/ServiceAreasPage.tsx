import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { SuburbChecker } from '../components/SuburbChecker.tsx';
import { MapPin, Navigation, Clock, ShieldCheck, Phone } from 'lucide-react';
import { SUBURBS_SERVICED, BUSINESS_INFO } from '../data/cleaningData.ts';

interface ServiceAreasPageProps {
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onOpenBooking }) => {
  return (
    <div>
      <PageHeader
        kicker="Local Coverage Map"
        title="Morley & Greater Perth Service Areas"
        description="Headquartered at 23 Hollett Road, Morley WA. We provide prompt, reliable dispatch across Morley, Bayswater, Dianella, Bedford, Noranda, and all surrounding Perth metropolitan suburbs."
        currentPage="Service Areas"
      />

      {/* Interactive Suburb Search & Distance Tool */}
      <SuburbChecker />

      {/* Full Suburb Directory Table */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Complete Suburbs & Postcodes Serviced
            </h2>
            <p className="text-sm text-slate-600">
              Zero travel surcharges within our core radius. Prompt scheduling for residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SUBURBS_SERVICED.map((suburb) => (
              <div
                key={suburb.name}
                className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs hover:border-teal-500 hover:shadow-xs transition-all flex items-start justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{suburb.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Postcode {suburb.postcode}</p>
                  <p className="text-[11px] font-semibold text-teal-700 mt-1">
                    {suburb.distance} from Morley Hub
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                  {suburb.zone}
                </span>
              </div>
            ))}
          </div>

          {/* Don't see your suburb banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Don't see your suburb listed?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We regularly accommodate clients across the wider Perth metro area. Contact us to check our current schedule!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Request Slot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
