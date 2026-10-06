import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { ContactSection } from '../components/ContactSection.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        kicker="Direct Local Contact"
        title="Contact Mr Cleaner Today"
        description="We're ready to make your space fresh, clean, and comfortable. Call, WhatsApp, email, or send an inquiry below. We respond within 1–2 hours during business hours."
        currentPage="Contact Us"
      />

      {/* Main Contact Grid */}
      <ContactSection />

      {/* FAQs */}
      <FaqSection />
    </div>
  );
};
