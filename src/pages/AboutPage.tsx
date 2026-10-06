import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { WorkflowSection } from '../components/WorkflowSection.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { Heart, MapPin, ShieldCheck, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div>
      <PageHeader
        kicker="Our Story & Values"
        title="About Mr Cleaner Morley"
        description="Local pride, family care, and meticulous attention to detail. Based at 23 Hollett Road, Morley, we are dedicated to making every Western Australian space fresh, clean, and comfortable."
        currentPage="About Us"
      />

      {/* Founder / Team Letter Section Directly from Flyer */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Card Letter */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6 relative">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-teal-600 text-teal-600" />
              <span>A Personal Note from the Mr Cleaner Team</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Dear Valued Customer,
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Thank you for choosing Mr Cleaner. We truly appreciate your trust in allowing us to take care of your home, office, and personal space.
              </p>
              <p>
                Our mission is simple: <strong>to deliver high-quality cleaning services that make your home, office, or car fresh, clean, and comfortable.</strong>
              </p>
              <p>
                We are committed to providing you with reliable service, professional care, and 100% satisfaction every single time. As a local business based right here on Hollett Road in Morley, your support means the world to us and motivates us to keep delivering the best cleaning experience in Western Australia.
              </p>
              <p className="text-teal-900 font-semibold italic text-lg pt-2">
                "Thank you for trusting Mr Cleaner!"
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
              <div>
                <p className="font-bold text-slate-900 font-display">Kind Regards,</p>
                <p className="font-semibold text-teal-800">The Mr Cleaner Team</p>
              </div>

              <div className="text-xs text-slate-500 space-y-0.5">
                <p>📍 23 Hollett Road, Morley WA 6062</p>
                <p>📞 {BUSINESS_INFO.phoneDisplay}</p>
                <p>✉️ {BUSINESS_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Workflow Section */}
      <WorkflowSection onOpenBooking={onOpenBooking} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};
