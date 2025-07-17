import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Calendar, Phone, FileText, MessageSquare, Clock, UserCheck, Database, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AssistantServices() {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Medical Administration Office Assistant",
      icon: FileText,
      description: "A Medical Administrative assistant is responsible for the administrative and clerical tasks that keep a medical facility running smoothly. They handle patient communication, scheduling, record management, and billing, ensuring a positive patient experience and efficient operations."
    },
    {
      title: "Virtual Assistant",
      icon: HeadphonesIcon,
      description: "Virtual assistants in healthcare offer significant benefits by streamlining administrative tasks, enhancing patient care, and improving efficiency for healthcare providers. The assistant can handle a range of duties, from appointment scheduling and medical billing to providing patient support and monitoring health conditions. Another aspect of Virtual assistant can include a travel assistant who provides clinical and administrative support in various healthcare locations."
    },
    {
      title: "Travel Planning Arrangement Assistant",
      icon: Calendar,
      description: "A Travel Planning Assistant in healthcare is a Travel Coordinator who handles all aspects of travel arrangements for healthcare professionals or organizations. These roles are vital in ensuring smooth operations and efficient patient care within the healthcare industry. A Travel Coordinator might work for a hospital system, arranging travel for doctors attending conferences or for medical staff relocating to new facilities."
    },
    {
      title: "Business Event Planning Assistant",
      icon: MessageSquare,
      description: "Healthcare event planning assistants play a vital role in supporting the successful execution of events. These events range from conferences and seminars to corporate meetings, training programs as well as organization parties."
    },
    {
      title: "Patient Experience Support Assistant",
      icon: UserCheck,
      description: "Patient experience assistant focuses on improving the overall patient journey and satisfaction within a healthcare setting. They often act as a first point of contact, addressing inquiries, providing information, and ensuring patients feel heard and valued. Their role encompasses a range of responsibilities, from administrative tasks to direct patient interaction, all aimed at creating a positive and supportive experience that ultimately leads to a better patient outcome."
    },
    {
      title: "Inventory / Ordering Assistant",
      icon: Database,
      description: "A healthcare inventory assistant is responsible for managing medical and surgical supplies within a healthcare facility. This role involves tasks such as stocking supplies, conducting inventory counts, maintaining accurate records, and ensuring proper storage and organization of items. They also play a role in receiving and distributing supplies, and may be involved in tracking expiration dates and preventing waste or unnecessary budget increases."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ContactForm />
      
      <main className="lg:pl-80">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Assistant Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Professional support services to help you manage daily operations and administrative tasks effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description.substring(0, 100)}...
                  </CardDescription>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full hover:bg-gradient-gold hover:border-primary">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-card-foreground text-xl">
                          <service.icon className="h-6 w-6 text-primary" />
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                          {service.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}