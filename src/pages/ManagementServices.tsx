import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Settings, Shield, Target, Users, FileText, BarChart3, Stethoscope, Clipboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ManagementServices() {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Strategic Planning",
      icon: Target,
      description: "Comprehensive strategic planning services to help your healthcare organization define goals, develop actionable plans, and achieve sustainable growth through data-driven decision making."
    },
    {
      title: "Operations Management",
      icon: Settings,
      description: "Streamline your daily operations with efficient workflow management, resource optimization, and process improvement strategies tailored to healthcare environments."
    },
    {
      title: "Quality Assurance",
      icon: Shield,
      description: "Ensure the highest standards of care with comprehensive quality assurance programs, performance monitoring, and continuous improvement initiatives."
    },
    {
      title: "Staff Management",
      icon: Users,
      description: "Optimize your workforce through effective staff scheduling, performance management, training programs, and retention strategies specifically designed for healthcare teams."
    },
    {
      title: "Compliance Management",
      icon: FileText,
      description: "Navigate complex healthcare regulations with expert compliance management, policy development, and audit preparation to ensure your organization meets all requirements."
    },
    {
      title: "Performance Analytics",
      icon: BarChart3,
      description: "Make informed decisions with comprehensive performance analytics, KPI tracking, and detailed reporting that provides insights into your organization's effectiveness."
    },
    {
      title: "Clinical Operations",
      icon: Stethoscope,
      description: "Enhance clinical workflows, improve patient care coordination, and optimize clinical processes to ensure efficient and effective healthcare delivery."
    },
    {
      title: "Administrative Oversight",
      icon: Clipboard,
      description: "Comprehensive administrative management including policy implementation, procedure standardization, and organizational structure optimization for healthcare facilities."
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
              Management Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive healthcare management solutions designed to optimize your operations and improve patient outcomes
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