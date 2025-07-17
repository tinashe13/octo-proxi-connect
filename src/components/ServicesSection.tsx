import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Settings, HeadphonesIcon, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Management Services",
      description: "Comprehensive healthcare management solutions tailored to streamline your operations and improve efficiency.",
      icon: Settings,
      route: "/management-services",
      features: [
        "Strategic Planning",
        "Operational Oversight",
        "Quality Assurance",
        "Compliance Management"
      ]
    },
    {
      title: "Assistant Services",
      description: "Professional support services to help you manage daily operations and administrative tasks effectively.",
      icon: HeadphonesIcon,
      route: "/assistant-services",
      features: [
        "Administrative Support",
        "Scheduling Coordination",
        "Documentation Management",
        "Communication Support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4 text-center">
                <CardTitle className="text-3xl text-card-foreground mb-6">{service.title}</CardTitle>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate(service.route)}
                  className="hover:bg-gradient-gold hover:border-primary w-full"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}