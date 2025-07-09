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
      title: "Administrative Support",
      icon: FileText,
      description: "Comprehensive administrative assistance including document management, data entry, report generation, and general office support to keep your healthcare operations running smoothly."
    },
    {
      title: "Appointment Scheduling",
      icon: Calendar,
      description: "Professional scheduling services to manage patient appointments, staff schedules, and facility bookings with efficient coordination and minimal conflicts."
    },
    {
      title: "Phone Support",
      icon: Phone,
      description: "Dedicated phone support services for patient inquiries, appointment confirmations, and general communication management to ensure professional customer service."
    },
    {
      title: "Communication Coordination",
      icon: MessageSquare,
      description: "Streamline internal and external communications with professional message handling, email management, and inter-departmental coordination services."
    },
    {
      title: "Time Management",
      icon: Clock,
      description: "Optimize productivity with professional time management services, task prioritization, and schedule optimization to maximize efficiency in healthcare settings."
    },
    {
      title: "Patient Relations",
      icon: UserCheck,
      description: "Enhance patient experience through professional patient relations support, follow-up communications, and satisfaction survey management."
    },
    {
      title: "Data Management",
      icon: Database,
      description: "Secure and efficient data management services including patient records organization, database maintenance, and information system support."
    },
    {
      title: "Virtual Assistance",
      icon: HeadphonesIcon,
      description: "Remote virtual assistance services providing flexible support for administrative tasks, research, and operational assistance when you need it most."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ContactForm />
      
      <main className="pl-80">
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
                    <DialogContent className="bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-card-foreground">
                          <service.icon className="h-5 w-5 text-primary" />
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
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