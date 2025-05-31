
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Truck, HardHat, Car, CheckSquare, Package, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

const SparePartsPage = () => {
  const heroData = {
    title: "High-Quality Spare Parts",
    subtitleDesktop: "Your reliable source for durable parts for heavy vehicles and equipment across multiple industries.",
    subtitleMobile: "Durable Parts, Expert Support.",
    ctaText: "Browse Parts Catalog",
    ctaLink: "#partscatalog",
    showIntro: false,
    heroImage: {
      alt: "Warehouse shelves stocked with various automotive and machinery spare parts",
      description: "Organized warehouse of spare parts"
    }
  };

  const partsCategories = [
    { name: "Engine & Drivetrain", icon: <Wrench className="h-8 w-8 text-primary" />, description: "Critical components for vehicle performance and longevity.", imgSlug:"engine-components-gears-pistons" },
    { name: "Suspension & Brakes", icon: <Car className="h-8 w-8 text-primary" />, description: "Ensuring safety and smooth operation for all types of vehicles.", imgSlug: "brake-discs-and-pads" },
    { name: "Electrical Components", icon: <CheckSquare className="h-8 w-8 text-primary" />, description: "Reliable starters, alternators, wiring, and lighting solutions.", imgSlug: "automotive-electrical-wiring" },
    { name: "Filters, Lubricants & Kits", icon: <Package className="h-8 w-8 text-primary" />, description: "Essential maintenance items to keep machinery running optimally.", imgSlug: "oil-filters-and-lubricant-bottles" },
  ];

  const industriesServed = [
    { name: "Logistics & Transportation", icon: <Truck className="h-10 w-10 text-white" /> },
    { name: "Construction", icon: <HardHat className="h-10 w-10 text-white" /> },
    { name: "Agriculture", icon: <Leaf className="h-10 w-10 text-white" /> },
    { name: "Automotive Repair", icon: <Wrench className="h-10 w-10 text-white" /> },
  ];


  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero pageData={heroData} />

      <section id="partscatalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Spare Parts Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             We supply high-quality parts for heavy vehicles and equipment, serving both businesses and individuals with expert support and reliable sourcing.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partsCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center"
              >
                <div className="mb-4">
                  <img  
                    alt={category.name + " illustrative image"} 
                    className="w-full h-40 object-cover rounded-md"
                   src="https://images.unsplash.com/photo-1571387630297-9f694efbf74b" />
                </div>
                <div className="bg-primary/10 p-3 rounded-full mb-4 self-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our extensive inventory of spare parts caters to a wide range of industries, ensuring your machinery and vehicles remain operational and efficient.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div className="p-4 bg-white/20 rounded-full mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white px-8 py-3 text-base">
              <Link to="/contact?subject=SparePartsInquiry">Inquire About Specific Parts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SparePartsPage;
