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
    },
    {
      title: "Customizable Assistant Services",
      icon: Database,
      description: "Customizable assistant services include 'Pro re nata' (PRN) services for Healthcare organizations that involve tailored solutions designed specifically for your unique operational needs. These services are flexible and adaptable to meet the specific requirements of your healthcare organization, ensuring optimal efficiency and effectiveness in your daily operations."
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/src/assets/background website.png"
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
  </div>
  <div className="relative z-10">
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
              <Card key={index} className="bg-[#b4a693] text-white border-none shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="bg-gradient-gold w-full hover:bg-gradient-gold border-primary">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#b4a693] text-white border-none max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-card-foreground text-xl">
                          <service.icon className="h-6 w-6 text-primary" />
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-white text-base leading-relaxed">
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
    </div>
  );
}