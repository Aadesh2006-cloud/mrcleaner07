import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingContactBar } from './components/FloatingContactBar.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { CalculatedQuote } from './components/QuoteCalculator.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { PricingPage } from './pages/PricingPage.tsx';
import { TransformationsPage } from './pages/TransformationsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServiceAreasPage } from './pages/ServiceAreasPage.tsx';
import { ReviewsPage } from './pages/ReviewsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Home Cleaning');
  const [calculatedQuote, setCalculatedQuote] = useState<CalculatedQuote | null>(null);

  const handleOpenBooking = () => {
    setSelectedService('Home Cleaning');
    setCalculatedQuote(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setCalculatedQuote(null);
    setIsBookingOpen(true);
  };

  const handleSelectCalculatedQuote = (quote: CalculatedQuote) => {
    setSelectedService(quote.serviceTitle);
    setCalculatedQuote(quote);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <ScrollToTop />

      {/* Primary 3-Zone Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Multi-Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route
            path="/services"
            element={<ServicesPage onSelectService={handleSelectService} />}
          />
          <Route
            path="/pricing"
            element={<PricingPage onSelectQuote={handleSelectCalculatedQuote} />}
          />
          <Route
            path="/transformations"
            element={<TransformationsPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/service-areas"
            element={<ServiceAreasPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectService={handleSelectService}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Quiet Footer */}
      <Footer />

      {/* Mobile Sticky Contact Toolbar (≤15% height) */}
      <FloatingContactBar onOpenBooking={handleOpenBooking} />

      {/* Booking & Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        calculatedQuote={calculatedQuote}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
