import { ContactForm } from '@/components/ContactForm';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BioSection } from '@/components/BioSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ContactForm />
      
      <main className="pl-80">
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
