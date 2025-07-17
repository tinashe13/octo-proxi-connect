import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import octopusLogo from '/lovable-uploads/2f99c8e2-c7e1-4335-8bb0-7218097e5efb.png';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={octopusLogo}
            alt="Octo-Proxi Management Background"
            className="w-96 h-96 opacity-10 blur-sm"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={octopusLogo}
            alt="Octo-Proxi Management Logo"
            className="w-32 h-32 mx-auto mb-8 drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Octo-Proxi Management
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Customizable Healthcare Management services for your business needs
        </p>
        
        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-gradient-gold hover:shadow-gold text-lg px-8 py-6 rounded-full"
        >
          Explore Our Services
          <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}