import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Home, Truck, Leaf, Wrench, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/images/bbg-logo.png";

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
                <img
                    src={logo}
                    alt="Bill Bash Industries Limited Logo"
                    className="h-16 w-auto mr-2 filter brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 mb-6 text-sm">
                Your trusted partner in real estate, truck importation, farming, and spare parts sales.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        <ArrowRight className="mr-2 h-3 w-3 text-primary/70"/> {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5 uppercase tracking-wider">Our Businesses</h3>
              <ul className="space-y-3">
                {businessLinks.map(link => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        {React.cloneElement(link.icon, { className: "mr-2 h-4 w-4 text-primary/70" })} {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5 uppercase tracking-wider">Newsletter</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe for updates on our services and industry insights.
              </p>
              <form className="flex">
                <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
                <input
                    id="footer-email"
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    aria-label="Email for newsletter"
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90 px-4 py-2.5">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Bill Bash Industries Limited. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs">
                powered by SabronMBC LLC
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
