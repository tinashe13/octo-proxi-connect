import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail } from 'lucide-react';
import octopusLogo from '/lovable-uploads/2f99c8e2-c7e1-4335-8bb0-7218097e5efb.png';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog';

export function ContactForm({ mobileOpen = false, onMobileClose }: { mobileOpen?: boolean, onMobileClose?: () => void } = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Sidebar for desktop
  const sidebar = (
    <div className="fixed left-0 top-0 h-full w-80 bg-contact border-r border-contact-border shadow-elegant z-50 flex flex-col justify-between hidden lg:flex">
      <div className="flex flex-col items-center pt-8 pb-4">
        <img
          src="/lovable-uploads/60db243d-749f-436f-8ff5-3baf619bb0b7.png"
          alt="Octo-Proxi Management Logo"
          className="w-24 h-24 mb-2 drop-shadow-lg rounded-full bg-white p-2 opacity-80"
        />
      </div>
      <Card className="h-full rounded-none border-0 bg-contact">
        <CardHeader className="border-b border-contact-border">
          <CardTitle className="text-contact-foreground flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us
          </CardTitle>
                <div className="space-y-2 text-sm text-contact-foreground">
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
                          Email Us
                        </>
                      )}
            </Button>
          </form>
        </CardContent>
      </Card>
      <footer className="w-full px-4 py-3 border-t border-contact-border bg-contact text-xs text-center text-contact-foreground/70">
        © 2025 Octo-Proxi Management. All rights reserved.
      </footer>
    </div>
  );

  // Drawer/modal for mobile/tablet
  const mobileDrawer = (
    <Dialog open={mobileOpen} onOpenChange={onMobileClose}>
      <DialogOverlay className="fixed inset-0 bg-black/40 z-50" />
      <DialogContent className="fixed left-1/2 top-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-contact rounded-lg shadow-lg z-50 p-0 max-h-[90vh]">
        <div className="flex flex-col h-full justify-between">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-center pt-8 pb-4">
              <img
                src="/lovable-uploads/60db243d-749f-436f-8ff5-3baf619bb0b7.png"
                alt="Octo-Proxi Management Logo"
                className="w-24 h-24 mb-2 drop-shadow-lg rounded-full bg-white p-2 opacity-80"
              />
            </div>
            <Card className="h-full rounded-none border-0 bg-contact">
              <CardHeader className="border-b border-contact-border">
                <CardTitle className="text-contact-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </CardTitle>
                <div className="space-y-2 text-sm text-contact-foreground">
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
                        Email Us
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <footer className="w-full px-4 py-3 border-t border-contact-border bg-contact text-xs text-center text-contact-foreground/70">
            © 2025 Octo-Proxi Management. All rights reserved.
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      {/* Desktop sidebar */}
      {sidebar}
      {/* Mobile/tablet modal */}
      {mobileOpen && mobileDrawer}
    </>
  );
}