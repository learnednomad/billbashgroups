import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Home, Truck, Leaf, Wrench, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/35ba3e5a-041e-4a6f-be03-9bbb09825892/78a0791dfec2f91bbcc9448784156e5b.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" }, 
    { label: "Terms of Service", path: "/terms" },
  ];

  const businessLinks = [
    { label: "Real Estate", path: "/real-estate", icon: <Home className="mr-2 h-4 w-4" /> },
    { label: "Truck Importation", path: "/truck-importation", icon: <Truck className="mr-2 h-4 w-4" /> },
    { label: "Farming", path: "/farming", icon: <Leaf className="mr-2 h-4 w-4" /> },
    { label: "Spare Parts Sales", path: "/spare-parts", icon: <Wrench className="mr-2 h-4 w-4" /> },
  ];


  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center mr-2">
                <div className="w-6 h-6 border-2 border-white"></div>
              </div>
              <span className="font-bold text-xl text-white">BILL BASH GROUP</span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">
              Your trusted partner in real estate, truck importation, farming, and spare parts sales.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center">
                    <ArrowRight className="mr-2 h-3 w-3 text-primary/70"/> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Our Businesses</h3>
            <ul className="space-y-3">
              {businessLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center">
                    {React.cloneElement(link.icon, { className: `mr-2 h-4 w-4 ${link.label === "Farming" ? "text-accent" : "text-primary/70"}` })} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe for updates on our services and industry insights.
            </p>
            <form className="flex">
              <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2.5 bg-slate-gray/70 border border-slate-gray/50 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-white placeholder-muted-foreground"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="rounded-l-none bg-primary hover:bg-highlight px-4 py-2.5">
                <Send className="h-5 w-5" />
                 <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-gray/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BILLBASH. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Designed with <span role="img" aria-label="heart" className="text-highlight">❤️</span> by sabronmbc llc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;