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
      <div className="container mx-auto px-4 pl-84">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare management solutions designed to meet your unique business requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(service.route)}
                    className="hover:bg-gradient-gold hover:border-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-card-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}