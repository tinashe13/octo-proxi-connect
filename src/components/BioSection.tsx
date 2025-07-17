import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, Mail, Star } from 'lucide-react';

export function BioSection() {
  return (
    <section id="bio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:pl-84 pl-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Who Am I
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Meet the healthcare management expert behind Octo-Proxi Management
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/lovable-uploads/bdd8f1f9-312a-4c11-9534-62c4b61122e0.png"
                alt="Healthcare Management Expert"
                className="w-full max-w-lg mx-auto rounded-lg shadow-elegant"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-card-foreground mb-6">
                    Simone Uchalova, MBA
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                    I am the CEO and Founder of Octo-Proxi Management, a company focused on a variety of management and assistant 
                    services in the healthcare industry. I am a results-driven leader with over 11 years of experience in Healthcare 
                    Management. My leadership style emphasizes collaboration, achieving business growth and successfully leading teams 
                    while improving operational efficiency.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                    My love for organization, coordination, coupled with my commitment to building a diverse and inclusive workspace 
                    has allowed me to foster and empower teams to reach their full potential. I hold a Master degree in Business 
                    Executive Management and am a constant student of human psychology in a business environment.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                    I am particularly known for my strategic vision, ability to inspire teams and my dedication to building a positive 
                    and impactful company culture. My passion for planning, multitasking and overcoming unplanned circumstances in a 
                    professional environment has allowed me to become a natural 'Octopus', a truly versatile and well-rounded leader 
                    in healthcare organizations.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    As a dual citizen of Slovakia and the United States, I have been lucky enough to call several countries my home, 
                    such as Norway and Spain, which expanded my vernacular fluency and ability to speak several languages such as Slovak, 
                    Norwegian, and English. I currently reside in Jacksonville, FL where I enjoy exploring coffee places, reading and writing.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-gradient-gold hover:border-primary"
                      onClick={() => window.open('https://linkedin.com', '_blank')}
                    >
                      <LinkedinIcon className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-gradient-gold hover:border-primary"
                      onClick={() => window.open('https://www.google.com/search?q=octo+proxi+management+reviews', '_blank')}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Google Reviews
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-gradient-gold hover:border-primary"
                      onClick={() => window.open('mailto:info@octoproxi.com')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}