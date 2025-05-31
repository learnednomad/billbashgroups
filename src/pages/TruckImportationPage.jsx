
import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Cog, Anchor, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

const TruckImportationPage = () => {
  const heroData = {
    title: "Reliable Truck Importation",
    subtitleDesktop: "Sourcing, inspecting, and delivering quality trucks for your business needs.",
    subtitleMobile: "Quality Trucks, Delivered.",
    ctaText: "Explore Truck Types",
    ctaLink: "#trucktypes",
    showIntro: false,
    heroImage: {
      alt: "Fleet of various imported trucks including semi-trailers and dump trucks at a port",
      description: "Imported trucks ready for deployment"
    }
  };

  const truckTypes = [
    { name: "Semi-trailers", description: "For long-haul transportation and heavy cargo.", icon: <Truck className="h-8 w-8 text-primary" />, imgSlug: "semi-trailer-truck-on-highway" },
    { name: "Dump Trucks", description: "Ideal for construction, mining, and bulk material transport.", icon: <Truck className="h-8 w-8 text-primary" />, imgSlug: "dump-truck-at-construction-site" },
    { name: "Flatbeds & Box Trucks", description: "Versatile solutions for various cargo types and delivery needs.", icon: <Truck className="h-8 w-8 text-primary" />, imgSlug: "box-truck-for-delivery" },
    { name: "Utility & Agricultural Vehicles", description: "Specialized vehicles for farming, utility work, and specific industrial applications.", icon: <Truck className="h-8 w-8 text-primary" />, imgSlug: "tractor-in-agricultural-field" },
  ];

  const importProcess = [
    { step: "01", title: "Consultation", description: "Understanding your specific requirements and budget.", icon: <ListChecks className="h-10 w-10 text-white" /> },
    { step: "02", title: "Sourcing & Inspection", description: "Locating suitable trucks and conducting thorough inspections.", icon: <ShieldCheck className="h-10 w-10 text-white" /> },
    { step: "03", title: "Shipping & Customs", description: "Managing all logistics, including secure shipping and customs clearance.", icon: <Anchor className="h-10 w-10 text-white" /> },
    { step: "04", title: "Delivery & Handover", description: "Ensuring timely delivery and a smooth handover process.", icon: <Cog className="h-10 w-10 text-white" /> },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero pageData={heroData} />

      <section id="trucktypes" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Truck Types We Import</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We source a wide variety of commercial trucks to meet diverse operational needs, ensuring quality and reliability.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {truckTypes.map((truck, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  <img  
                    alt={truck.name + " illustrative image"} 
                    className="w-full h-40 object-cover rounded-md"
                   src="https://images.unsplash.com/photo-1693058825172-8eb46d14809e" />
                </div>
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  {truck.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{truck.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{truck.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Import Process</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Bill Bash Group helps clients import reliable trucks with a simple, end-to-end service. We ensure every truck is inspected, legally cleared, and ready for use.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {importProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-bold text-white/50">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white px-8 py-3 text-base">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruckImportationPage;
