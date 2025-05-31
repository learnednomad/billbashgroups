
import React from "react";
import { motion } from "framer-motion";
import { Home, Building, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

const RealEstatePage = () => {
  const heroData = {
    title: "Premium Real Estate Solutions",
    subtitleDesktop: "Your trusted partner for property sales, rentals, and land development.",
    subtitleMobile: "Sales, Rentals & Development.",
    ctaText: "View Listings",
    ctaLink: "#offerings",
    showIntro: false,
    heroImage: {
      alt: "Modern residential and commercial buildings representing real estate investments",
      description: "Skyline with modern real estate properties"
    }
  };

  const offerings = [
    {
      icon: <Home className="h-10 w-10 text-primary mb-4" />,
      title: "Property Sales",
      description: "Expert guidance for buying and selling residential and commercial properties. We ensure seamless transactions and optimal value.",
      imgSlug: "modern-house-exterior-with-garden"
    },
    {
      icon: <Building className="h-10 w-10 text-primary mb-4" />,
      title: "Property Rentals",
      description: "Comprehensive rental services for tenants and landlords, including property management and lease agreements.",
      imgSlug: "apartment-building-balconies"
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary mb-4" />,
      title: "Land Development",
      description: "Strategic land acquisition and development services, transforming potential into profitable real estate projects.",
      imgSlug: "construction-site-land-development"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero pageData={heroData} />

      <section id="offerings" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Real Estate Offerings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bill Bash Group offers a full suite of real estate services tailored for buyers, sellers, investors, and tenants. We manage property transactions and development projects with market expertise and client-first service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <img  
                    alt={item.title + " service illustrative image"} 
                    className="w-full h-48 object-cover rounded-md"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                {item.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                <Button variant="link" className="mt-6 text-primary hover:text-primary/80">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                alt="Real estate agent discussing property plans with clients"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
               src="https://images.unsplash.com/photo-1569083676317-dafd0fc965f7" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Bill Bash Real Estate?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With years of experience and a deep understanding of the property market, Bill Bash Group is your ideal partner. We are committed to providing personalized service, expert advice, and achieving the best outcomes for our clients.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Market Expertise:</strong> In-depth knowledge of local and regional property trends.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Client-First Approach:</strong> Your needs and goals are our top priority.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Transparent Processes:</strong> Clear communication and integrity in all dealings.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Comprehensive Services:</strong> From initial consultation to final transaction, we cover all aspects.</span>
                </li>
              </ul>
              <Button asChild className="mt-8 bg-primary text-white hover:bg-primary/90 px-8 py-3">
                <Link to="/contact">Contact Our Real Estate Team</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
