import React from 'react';
import { motion } from 'framer-motion';
import { Home, Truck, Leaf, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';

const BusinessesOverviewPage = () => {
  const heroData = {
    title: "Our Diverse Businesses",
    subtitleDesktop: "Explore the core sectors where Bill Bash Group drives innovation and delivers value.",
    subtitleMobile: "Driving Innovation & Value.",
    ctaText: "Learn About Us",
    ctaLink: "/about",
    showIntro: false,
    heroImage: {
      alt: "Montage of Bill Bash Group's business sectors: real estate development, fleet of trucks, lush farm, and spare parts warehouse",
      description: "Bill Bash Group's core business sectors"
    }
  };

  const businesses = [
    {
      name: "Real Estate",
      description: "Developing, managing, and transacting premium residential and commercial properties.",
      icon: <Home className="h-10 w-10 text-primary" />,
      link: "/businesses/real-estate",
      imgSlug: "modern-city-skyline-real-estate"
    },
    {
      name: "Truck Importation",
      description: "Sourcing and delivering reliable, high-quality trucks for various industrial and commercial needs.",
      icon: <Truck className="h-10 w-10 text-primary" />,
      link: "/businesses/truck-importation",
      imgSlug: "convoy-of-trucks-on-highway"
    },
    {
      name: "Farming & Agriculture",
      description: "Cultivating sustainable food sources and contributing to agricultural growth through modern farming practices.",
      icon: <Leaf className="h-10 w-10 text-primary" />,
      link: "/businesses/farming",
      imgSlug: "tractor-working-in-green-field"
    },
    {
      name: "Spare Parts Sales",
      description: "Providing a comprehensive range_of durable spare parts for heavy machinery and vehicles.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      link: "/businesses/spare-parts",
      imgSlug: "shelves-stocked-with-industrial-spare-parts"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Business Segments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bill Bash Group operates across four key sectors, each managed with expertise and a commitment to excellence. Discover how we make an impact in each area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <motion.div
                key={business.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                   <img
                    src={`https://images.unsplash.com/photo-1573885490690-031ce488029a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70`}
                    alt={`Illustrative image for ${business.name}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="inline-block bg-white/90 p-3 rounded-full mb-3 shadow-md">
                        {business.icon}
                     </div>
                    <h3 className="text-3xl font-semibold text-white mb-2 drop-shadow-md">{business.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{business.description}</p>
                  <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white">
                    <Link to={business.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Driving Progress Across Industries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90"
          >
            Our diversified portfolio allows us to build synergies, innovate, and deliver exceptional value to our clients and stakeholders. We are committed to contributing to economic growth and community development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20 hover:text-white">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessesOverviewPage;