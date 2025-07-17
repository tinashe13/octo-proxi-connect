import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BioSection } from '@/components/BioSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <ContactForm mobileOpen={contactOpen} onMobileClose={() => setContactOpen(false)} />
      {/* Mobile/Tablet Contact Button */}
      <button
        className="fixed bottom-6 right-6 z-50 md:hidden bg-gradient-gold text-white rounded-full shadow-lg px-6 py-3 font-semibold text-lg hover:shadow-gold transition"
        onClick={() => setContactOpen(true)}
        aria-label="Email Us"
      >
        Email Us
      </button>
      <main className="md:pl-80">
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
