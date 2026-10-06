import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Phone, Calculator, Star, MapPin } from 'lucide-react';
import { Hero } from '../components/Hero.tsx';
import { ServicesSection } from '../components/ServicesSection.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { WorkflowSection } from '../components/WorkflowSection.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { SuburbChecker } from '../components/SuburbChecker.tsx';
import { ReviewsSection } from '../components/ReviewsSection.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { ContactSection } from '../components/ContactSection.tsx';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface HomePageProps {
  onOpenBooking: () => void;
  onSelectService: (service: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onSelectService }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* Services Showcase */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Interactive Instant Pricing Banner / Teaser */}
      <section className="py-14 bg-gradient-to-r from-teal-900 via-teal-850 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
              Instant Upfront Estimates
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Know Exactly What Your Clean Will Cost
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Use our interactive pricing calculator to configure room count, frequency discounts, and optional deep add-ons in seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/pricing"
              className="px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Open Pricing Calculator</span>
            </Link>
            <button
              onClick={onOpenBooking}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Book Direct
            </button>
          </div>
        </div>
      </section>

      {/* Draggable Before & After Split Slider */}
      <BeforeAfterSlider />

      {/* 5-Step Workflow from Flyer */}
      <WorkflowSection onOpenBooking={onOpenBooking} />

      {/* Why Choose Mr Cleaner */}
      <WhyChooseUs />

      {/* Suburb Checker for Morley & Surrounds */}
      <SuburbChecker />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* FAQs */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
