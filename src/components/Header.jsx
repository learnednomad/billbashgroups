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
  NavigationMenuLink as RadixNavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import logo from "../assets/images/bbg-logo.png";

const NavLinkItem = ({ to, children, isScrolled, closeMobileMenu }) => (
    <NavLink
        to={to}
        onClick={closeMobileMenu}
        className={({ isActive }) =>
            `px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md backdrop-blur-sm ${
                isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/20 drop-shadow-lg hover:drop-shadow-xl"
            } ${
                isActive
                    ? (isScrolled ? "text-red-600 bg-red-50" : "text-red-300 bg-white/30")
                    : ""
            }`
        }
        style={!isScrolled ? { textShadow: '1px 1px 2px rgba(0,0,0,0.8)' } : {}}
    >
      {children}
    </NavLink>
);

const MobileNavLinkItem = ({ to, children, closeMobileMenu }) => (
    <NavLink
        to={to}
        onClick={closeMobileMenu}
        className={({ isActive }) =>
            `block font-medium text-gray-800 hover:text-red-600 py-3 border-b border-gray-200 transition-colors duration-200 ${
                isActive ? "text-red-600" : ""
            }`
        }
    >
      {children}
    </NavLink>
);

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
      <li>
        <RadixNavigationMenuLink asChild>
          <Link
              ref={ref}
              to={href}
              className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600",
                  className
              )}
              {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </RadixNavigationMenuLink>
      </li>
  );
});
ListItem.displayName = "ListItem";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);

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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
  }

  const toggleMobileSubMenu = (menuName) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === menuName ? null : menuName);
  };

  const aboutLinks = [
    { href: "/about", title: "Our Company", description: "Learn about Bill Bash Group's mission and values." },
    { href: "/about/leadership", title: "Leadership Team", description: "Meet the experienced leaders driving our success." },
  ];

  const businessLinks = [
    { href: "/businesses/real-estate", title: "Real Estate", description: "Property sales, rentals, and development." },
    { href: "/businesses/truck-importation", title: "Truck Importation", description: "Sourcing and importing reliable trucks." },
    { href: "/businesses/farming", title: "Farming", description: "Crop and livestock farming with agri-tech." },
    { href: "/businesses/spare-parts", title: "Spare Parts", description: "Quality parts for heavy vehicles." },
  ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-white shadow-lg py-3"
                  : "bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm py-5"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img
                  src={logo}
                  alt="BILLBASH Logo"
                  className={`h-8 md:h-14 w-auto mr-2 transition-all duration-300 ${
                      isScrolled ? "filter-none" : "filter brightness-0 invert drop-shadow-lg"
                  }`}
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavLinkItem to="/" isScrolled={isScrolled} closeMobileMenu={closeMobileMenu}>Home</NavLinkItem>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            navigationMenuTriggerStyle(),
                            `transition-all duration-300 backdrop-blur-sm ${
                                isScrolled
                                    ? "text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100"
                                    : "text-white hover:bg-white/20 data-[state=open]:bg-white/20 drop-shadow-lg"
                            } bg-transparent focus:bg-transparent`
                        )}
                        style={!isScrolled ? { textShadow: '1px 1px 2px rgba(0,0,0,0.8)' } : {}}
                    >
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
                        {aboutLinks.map(link => (
                            <ListItem key={link.title} href={link.href} title={link.title} onClick={closeMobileMenu}>
                              {link.description}
                            </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLinkItem to="/services" isScrolled={isScrolled} closeMobileMenu={closeMobileMenu}>Services</NavLinkItem>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            navigationMenuTriggerStyle(),
                            `transition-all duration-300 backdrop-blur-sm ${
                                isScrolled
                                    ? "text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100"
                                    : "text-white hover:bg-white/20 data-[state=open]:bg-white/20 drop-shadow-lg"
                            } bg-transparent focus:bg-transparent`
                        )}
                        style={!isScrolled ? { textShadow: '1px 1px 2px rgba(0,0,0,0.8)' } : {}}
                    >
                      Businesses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {businessLinks.map(link => (
                            <ListItem key={link.title} href={link.href} title={link.title} onClick={closeMobileMenu}>
                              {link.description}
                            </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLinkItem to="/contact" isScrolled={isScrolled} closeMobileMenu={closeMobileMenu}>Contact Us</NavLinkItem>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="lg:hidden">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className={`transition-all duration-300 ${
                      isScrolled
                          ? "text-gray-800 hover:bg-gray-200"
                          : "text-white hover:bg-white/20 drop-shadow-lg backdrop-blur-sm"
                  }`}
                  style={!isScrolled ? { filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' } : {}}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                className="lg:hidden bg-white shadow-lg absolute w-full top-full left-0"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-1">
                  <MobileNavLinkItem to="/" closeMobileMenu={closeMobileMenu}>Home</MobileNavLinkItem>

                  <div>
                    <button
                        onClick={() => toggleMobileSubMenu('about')}
                        className="w-full flex justify-between items-center font-medium text-gray-800 hover:text-red-600 py-3 border-b border-gray-200 transition-colors duration-200"
                    >
                      About Us <ChevronDown size={18} className={`transition-transform ${mobileSubMenuOpen === 'about' ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubMenuOpen === 'about' && (
                        <div className="ml-4 mt-1 pb-2 border-b border-gray-200">
                          {aboutLinks.map(link => (
                              <NavLink
                                  key={link.href}
                                  to={link.href}
                                  onClick={closeMobileMenu}
                                  className={({ isActive }) => `block text-sm py-2 text-gray-600 hover:text-red-600 transition-colors duration-200 ${isActive ? "text-red-600 font-semibold" : ""}`}
                              >
                                {link.title}
                              </NavLink>
                          ))}
                        </div>
                    )}
                  </div>

                  <MobileNavLinkItem to="/services" closeMobileMenu={closeMobileMenu}>Services</MobileNavLinkItem>

                  <div>
                    <button
                        onClick={() => toggleMobileSubMenu('businesses')}
                        className="w-full flex justify-between items-center font-medium text-gray-800 hover:text-red-600 py-3 border-b border-gray-200 transition-colors duration-200"
                    >
                      Businesses <ChevronDown size={18} className={`transition-transform ${mobileSubMenuOpen === 'businesses' ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubMenuOpen === 'businesses' && (
                        <div className="ml-4 mt-1 pb-2 border-b border-gray-200">
                          {businessLinks.map(link => (
                              <NavLink
                                  key={link.href}
                                  to={link.href}
                                  onClick={closeMobileMenu}
                                  className={({ isActive }) => `block text-sm py-2 text-gray-600 hover:text-red-600 transition-colors duration-200 ${isActive ? "text-red-600 font-semibold" : ""}`}
                              >
                                {link.title}
                              </NavLink>
                          ))}
                        </div>
                    )}
                  </div>
                  <MobileNavLinkItem to="/contact" closeMobileMenu={closeMobileMenu}>Contact Us</MobileNavLinkItem>
                </div>
              </div>
            </motion.div>
        )}
      </header>
  );
};

export default Header;