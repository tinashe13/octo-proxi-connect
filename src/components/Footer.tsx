import { LinkedinIcon, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Octo-Proxi Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Customizable Healthcare Management services for your business needs.
              </p>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@octoproxi.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="h-4 w-4" />
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Management Services</div>
                <div>Assistant Services</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Octo-Proxi Management. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}