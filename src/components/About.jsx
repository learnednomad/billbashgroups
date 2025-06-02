import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const yearFounded = 2013; 
  return (
    <section className="py-16 md:py-20 bg-white" id="about-section-home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold uppercase text-primary tracking-wider mb-2 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Diversified Group Committed to Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bill Bash Group is a dynamic company with core operations in Real Estate, Truck Importation, Farming, and Spare Parts Sales. Founded in {yearFounded}, we have consistently grown by adapting to market needs and upholding our values of integrity, excellence, and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our mission is to empower communities and businesses through trusted solutions that drive growth and sustainability. We strive to make a positive impact by delivering quality products and services across all our sectors.
            </p>
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link to="/about">
                Discover Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
                <img 
                  alt="Modern residential building by Bill Bash Group Real Estate"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                 src="https://images.unsplash.com/photo-1506851321937-51fff21bc9a0" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">Real Estate</p>
                </div>
              </div>
              <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
                <img 
                  alt="Fleet of imported trucks by Bill Bash Group"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                 src="https://images.unsplash.com/photo-1672127813904-27c6972662c9" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">Truck Importation</p>
                </div>
              </div>
              <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
                <img 
                  alt="Lush green farm operated by Bill Bash Group"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                 src="https://images.unsplash.com/photo-1590182896511-8f613e72bc3d" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">Farming</p>
                </div>
              </div>
              <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
                <img 
                  alt="Assortment of spare parts from Bill Bash Group"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                 src="https://images.unsplash.com/photo-1683115097492-3a3bd12cad3f" />
                 <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">Spare Parts</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary/5 rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-gray-200/20 rounded-full -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;