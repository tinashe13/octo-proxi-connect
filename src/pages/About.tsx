import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, Mail, Star, ArrowLeft } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

export default function About() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <ContactForm mobileOpen={contactOpen} onMobileClose={() => setContactOpen(false)} />
      
      {/* Mobile/Tablet Contact Button */}
      <button
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-gradient-gold text-white rounded-full shadow-lg px-6 py-3 font-semibold text-lg hover:shadow-gold transition"
        onClick={() => setContactOpen(true)}
        aria-label="Email Us"
      >
        Email Us
      </button>

      <main className="lg:pl-80 pl-0">
        {/* Header */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button
                variant="ghost"
                size="sm"
                className="mb-6 hover:bg-muted"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Learn more about the healthcare management expert behind Octo-Proxi Management
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1">
                  <img
                    src="/lovable-uploads/bdd8f1f9-312a-4c11-9534-62c4b61122e0.png"
                    alt="Simone Uchalova - Healthcare Management Expert"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-elegant"
                  />
                </div>
                
                <div className="order-1 lg:order-2">
                  <Card className="bg-card border-border">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-card-foreground mb-6">
                        Simone Uchalova, MBA
                      </h2>
                      <h3 className="text-xl font-semibold text-primary mb-6">
                        CEO & Founder, Octo-Proxi Management
                      </h3>
                      
                      <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                          I am the CEO and Founder of Octo-Proxi Management, a company focused on a variety of management and assistant 
                          services in the healthcare industry. I am a results-driven leader with over 11 years of experience in Healthcare 
                          Management. My leadership style emphasizes collaboration, achieving business growth and successfully leading teams 
                          while improving operational efficiency.
                        </p>
                        
                        <p>
                          My love for organization, coordination, coupled with my commitment to building a diverse and inclusive workspace 
                          has allowed me to foster and empower teams to reach their full potential. I hold a Master degree in Business 
                          Executive Management and am a constant student of human psychology in a business environment.
                        </p>
                        
                        <p>
                          I am particularly known for my strategic vision, ability to inspire teams and my dedication to building a positive 
                          and impactful company culture. My passion for planning, multitasking and overcoming unplanned circumstances in a 
                          professional environment has allowed me to become a natural 'Octopus', a truly versatile and well-rounded leader 
                          in healthcare organizations.
                        </p>
                        
                        <p>
                          I have held various management and director positions throughout my career that allowed me to grow into a natural 
                          leader. I am particularly an experienced traveler due to being a dual citizen of Slovakia and the United States. 
                          I have been lucky enough to call several countries my home, such as Norway and Spain, which expanded my vernacular 
                          fluency and ability to speak several languages such as Slovak, Norwegian, and English.
                        </p>
                        
                        <p>
                          Traveling has also inaugurated an understanding of different cultures and admiration for diversity and people. 
                          I am confident in my leadership skills and my knowledge of the healthcare environment that will significantly 
                          contribute to a team regardless of the size or the task at hand.
                        </p>
                        
                        <p>
                          I currently reside in Jacksonville, FL where in my personal time I enjoy exploring coffee places, reading and writing. 
                          I value the simple things in life such as spending time with loved ones, long bike rides, as well as immersing myself 
                          in different countries' museums.
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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

        <Footer />
      </main>
    </div>
  );
}