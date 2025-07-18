
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import octopusLogo from '/lovable-uploads/41f2d5b0-73cc-412f-8bd0-f3ae34d371b9.png';

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
            className="w-96 h-96 opacity-10 blur-sm rounded-full"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-black/30 backdrop-blur-sm p-2 shadow-elegant">
            <img
              src={octopusLogo}
              alt="Octo-Proxi Management Logo"
              className="w-full h-full object-cover rounded-full drop-shadow-lg"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Octo-Proxi Management
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          A company focused on providing a variety of Management and Assistant services in the Healthcare industry.
        </p>
        
        <div className="flex justify-center">
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-gradient-gold hover:shadow-gold text-lg px-8 py-6 rounded-full"
          >
            Explore Our Services
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}
