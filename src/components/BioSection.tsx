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
                    Healthcare Management Professional
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    With years of experience in healthcare management, I specialize in providing 
                    customized solutions that streamline operations and improve patient outcomes. 
                    My expertise spans across operational management, compliance, and strategic 
                    planning for healthcare organizations of all sizes.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    I am passionate about helping healthcare businesses optimize their processes 
                    and achieve sustainable growth through innovative management strategies.
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