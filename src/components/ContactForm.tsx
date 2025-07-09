import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-contact border-r border-contact-border shadow-elegant z-50 overflow-y-auto">
      <Card className="h-full rounded-none border-0 bg-contact">
        <CardHeader className="border-b border-contact-border">
          <CardTitle className="text-contact-foreground flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us
          </CardTitle>
          <div className="space-y-2 text-sm text-contact-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>555-555-5555</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@octoproxi.com</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-contact-foreground">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-contact border-contact-border text-contact-foreground"
                placeholder="Your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-contact-foreground">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-contact border-contact-border text-contact-foreground"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-contact-foreground">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-contact border-contact-border text-contact-foreground"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-contact-foreground">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-contact border-contact-border text-contact-foreground min-h-[120px]"
                placeholder="Tell us about your healthcare management needs..."
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-gold hover:shadow-gold"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send to Expert
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}