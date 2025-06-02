import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink as RadixNavigationMenuLink
} from "@/components/ui/navigation-menu";

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/35ba3e5a-041e-4a6f-be03-9bbb09825892/78a0791dfec2f91bbcc9448784156e5b.png";

const NavLinkItem = ({ to, children, isScrolled, closeMobileMenu }) => (
  <NavLink
    to={to}
    onClick={closeMobileMenu}
    className={({ isActive }) =>
      `px-4 py-2 text-sm font-medium transition-colors ${
        isScrolled ? "text-gray-800" : "text-white"
      } hover:text-primary ${isActive ? "text-primary" : ""}`
    }
  >
    {children}
  </NavLink>
);

const MobileNavLinkItem = ({ to, children, closeMobileMenu }) => (
  <NavLink
    to={to}
    onClick={closeMobileMenu}
    className={({ isActive }) =>
      `block font-medium text-gray-800 hover:text-primary py-2 border-b ${isActive ? "text-primary" : ""}`
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  const businessLinks = [
    { to: "/real-estate", title: "Real Estate", description: "Property sales, rentals, and development." },
    { to: "/truck-importation", title: "Truck Importation", description: "Sourcing and importing reliable trucks." },
    { to: "/farming", title: "Farming", description: "Crop and livestock farming with agri-tech." },
    { to: "/spare-parts", title: "Spare Parts", description: "Quality parts for heavy vehicles." },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-primary flex items-center justify-center mr-2">
              <div className="w-6 h-6 border-2 border-white"></div>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? "text-primary" : "text-white"}`}>
              BILLBASH GROUP
            </span>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavLinkItem to="/" isScrolled={isScrolled}>Home</NavLinkItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLinkItem to="/about" isScrolled={isScrolled}>About Us</NavLinkItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isScrolled ? "text-gray-800" : "text-white"}>
                    Our Businesses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {businessLinks.map(link => (
                        <li key={link.to}>
                          <RadixNavigationMenuLink asChild>
                            <Link to={link.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </RadixNavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLinkItem to="/contact" isScrolled={isScrolled}>Contact</NavLinkItem>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={isScrolled ? "text-gray-800" : "text-white"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-1">
              <MobileNavLinkItem to="/" closeMobileMenu={closeMobileMenu}>Home</MobileNavLinkItem>
              <MobileNavLinkItem to="/about" closeMobileMenu={closeMobileMenu}>About Us</MobileNavLinkItem>
              
              <div className="border-b pb-2">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-800">Our Businesses</span>
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
                <div className="ml-4 space-y-1">
                  {businessLinks.map(link => (
                     <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `block text-sm py-1 text-gray-600 hover:text-primary ${isActive ? "text-primary" : ""}`}
                      >
                        {link.title}
                      </NavLink>
                  ))}
                </div>
              </div>
              <MobileNavLinkItem to="/contact" closeMobileMenu={closeMobileMenu}>Contact</MobileNavLinkItem>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
