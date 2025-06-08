import React from 'react';
import { motion } from 'framer-motion';
import { Home, Truck, Leaf, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';

const ServicesPage = () => {
  const heroData = {
    title: "Our Comprehensive Services",
    subtitleDesktop: "Delivering excellence across Real Estate, Truck Importation, Farming, and Spare Parts Sales.",
    subtitleMobile: "Excellence in Every Sector.",
    ctaText: "Explore Our Businesses",
    ctaLink: "/businesses",
    showIntro: false,
    heroImage: {
      alt: "Collage representing Bill Bash Group's diverse services including real estate, trucks, farming, and spare parts",
      description: "Overview of Bill Bash Group services"
    }
  };

  const services = [
    {
      name: "Real Estate",
      description: "Providing expert solutions for property sales, rentals, and land development projects with a client-focused approach.",
      icon: <Home className="h-12 w-12 text-primary" />,
      link: "/businesses/real-estate",
      imgSlug: "modern-architecture-residential-building"
    },
    {
      name: "Truck Importation",
      description: "Sourcing and importing reliable heavy-duty trucks, semi-trailers, and specialized vehicles tailored to your business needs.",
      icon: <Truck className="h-12 w-12 text-primary" />,
      link: "/businesses/truck-importation",
      imgSlug: "fleet-of-newly-imported-trucks"
    },
    {
      name: "Farming & Agriculture",
      description: "Engaging in sustainable crop farming and livestock management, contributing to food security and agribusiness growth.",
      icon: <Leaf className="h-12 w-12 text-primary" />,
      link: "/businesses/farming",
      imgSlug: "vast-green-farmland-aerial-view"
    },
    {
      name: "Spare Parts Sales",
      description: "Supplying high-quality, durable spare parts for a wide range_of vehicles and machinery across various industries.",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      link: "/businesses/spare-parts",
      imgSlug: "organized-shelf-with-various-spare-parts"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero pageData={heroData} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Bill Bash Group, we are committed to delivering top-tier services across our diverse business segments. Our expertise and dedication ensure we meet and exceed client expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5">
                  <img
                    src={`https://images.unsplash.com/photo-1595872018818-97555653a011?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=60`}
                    alt={`Illustrative image for ${service.name}`}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="default" className="mt-auto self-start bg-primary hover:bg-primary/90">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Bill Bash Group?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, integrity, and customer satisfaction sets us apart. We leverage our diverse expertise to provide holistic solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Proven Track Record", description: "Years of successful projects and satisfied clients across all sectors." },
              { title: "Integrated Solutions", description: "Synergy between our diverse businesses allows us to offer comprehensive services." },
              { title: "Customer-Centric Approach", description: "We prioritize your needs, offering tailored solutions and dedicated support." },
              { title: "Commitment to Quality", description: "Adherence to the highest standards in all products and services we deliver." },
              { title: "Innovation Driven", description: "Continuously adapting and adopting modern practices and technologies." },
              { title: "Sustainable Practices", description: "Focused on long-term value and responsible business operations." }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h4 className="text-xl font-semibold text-gray-700 mb-2">{point.title}</h4>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
               <Link to="/contact">Contact Us Today</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;