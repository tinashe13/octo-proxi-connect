import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Settings, Shield, Target, Users, FileText, BarChart3, Stethoscope, Clipboard, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ManagementServices() {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Substitute Management",
      icon: Users,
      description: "Effective management of short-term absences is crucial for healthcare organizations to maintain productivity, ensure team dynamics, and address the well-being of their employees, including managers. The goal is to maintain continuity of care while leadership is unavailable due to maternity leave, illness or injury, short term leave due to personal or family emergency, or other circumstances."
    },
    {
      title: "Crisis Management",
      icon: Shield,
      description: "Crisis management in healthcare focuses on strategies and actions taken to prepare for, respond to, and recover from disruptive events that threaten the well-being of patients, staff, and the organizations. The goal is to predict and prevent events from happening by removing uncertainty and updating processes in circumstances such as staff morale matters, displeased patient experiences, etc. After a crisis, it's essential to assess the impact, address any lingering issues, and implement measures to prevent similar events from happening again."
    },
    {
      title: "Remote Management",
      icon: Settings,
      description: "Managing healthcare operations and patient care from a distance. This includes telehealth, remote patient monitoring (RPM), and managing virtual staff. It leverages digital tools and platforms to expand the reach of healthcare services, improve patient outcomes and magnify operational efficiency. Due to being a dual citizen of Slovakia and the United States, we can provide remote services internationally - (EU, USA)."
    },
    {
      title: "Transition Management",
      icon: Target,
      description: "Transition management refers to the process of guiding organizations through periods of significant change, ensuring a smooth and effective shift from one state to another. It encompasses various aspects, including planning, managing, and sustaining the change, while also addressing the human element of adapting to new processes and systems during instances such as sudden leadership leave or new organization take over."
    },
    {
      title: "Recruitment Management",
      icon: UserPlus,
      description: "Recruitment management refers to the process of selecting and hiring qualified candidates for job openings within an organization. It encompasses a range of activities, including identifying job vacancies, advertising those positions, screening applications, conducting interviews, and ultimately, onboarding the chosen candidates. Effective recruitment management is crucial for building a skilled and motivated workforce including leadership, clinical staff (RD, RN, APRN, MD, etc), and administration staff (receptionist, billing, navigators, etc)."
    },
    {
      title: "Project Management",
      icon: BarChart3,
      description: "Project management in healthcare refers to the application of project management principles, processes, and techniques to healthcare initiatives. It involves planning, organizing, and managing resources to achieve specific healthcare goals and objectives, such as improving patient care, streamlining operations, and reducing costs. Key instances include expanding satellite offices, launching new service lines/facilities, and creating HR workshops for staff."
    },
    {
      title: "Training Management",
      icon: Clipboard,
      description: "Training management in healthcare encompasses the strategies, systems, and processes used to ensure healthcare professionals receive the necessary education and development to deliver high-quality patient care and maintain compliance with evolving standards. It involves designing, delivering, and evaluating training programs and creating processes to enhance learning experiences. Training management can be utilized for leadership training, clinical staff training, and administration staff training."
    },
    {
      title: "Customizable Management Services",
      icon: Stethoscope,
      description: "Customizable management services include 'Pro re nata' (PRN) services for Healthcare organizations that involve tailored solutions designed specifically for your unique operational needs. These services are flexible and adaptable to meet the specific requirements of your healthcare organization, ensuring optimal efficiency and effectiveness in your daily operations."
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
              Healthcare Customizable Management Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive healthcare management solutions designed to optimize your operations and improve patient outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
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