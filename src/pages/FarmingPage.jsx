import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sprout, GitFork, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

// Image imports
import CropFarming from "../assets/images/lush-green-farm-with-crops.jpg";
import LiveStock from "../assets/images/cow-6580913.jpg";
import AgriTech from "../assets/images/truck-imports.jpeg";

const FarmingPage = () => {
  const heroData = {
    title: "Sustainable Farming & Agribusiness",
    subtitleDesktop: "Cultivating the future with modern crop farming, livestock management, and agri-tech integration.",
    subtitleMobile: "Modern Farming Solutions.",
    ctaText: "Our Focus Areas",
    ctaLink: "#focusareas",
    showIntro: false,
    heroImage: {
      alt: "Lush green agricultural field with various crops under a clear blue sky",
      description: "Panoramic view of a modern farm"
    }
  };

  const focusAreas = [
    {
      title: "Crop Farming",
      details: "Specializing in maize, cassava, diverse vegetables, and plantain cultivation using sustainable practices.",
      icon: <Sprout className="h-10 w-10 text-primary" />,
      imgSlug: "field-of-maize-corn-plantation",
      image: CropFarming
    },
    {
      title: "Livestock Management",
      details: "Ethical and efficient raising of poultry, goats, and sheep, ensuring high standards of animal welfare and productivity.",
      icon: <GitFork className="h-10 w-10 text-primary transform rotate-90" />,
      imgSlug: "flock-of-sheep-grazing-in-pasture",
      image: LiveStock
    },
    {
      title: "Agri-Tech Integrations",
      details: "Implementing modern technologies like precision agriculture, IoT sensors, and data analytics to optimize yields and resource use.",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      imgSlug: "drone-spraying-crops-in-field",
      image: AgriTech
    },
  ];

  return (
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <Hero pageData={heroData} />

        <section id="focusareas" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 md:mb-16"
            >
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Farming Focus Areas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bill Bash Group is committed to sustainable farming to support food security and agribusiness growth. We combine traditional wisdom with modern innovations for optimal results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                  >
                    <img
                        alt={area.title + " illustrative image"}
                        className="w-full h-56 object-cover"
                        src={area.image}
                    />
                    <div className="p-6 text-center">
                      <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.details}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Commitment to Sustainability</h2>
                <p className="text-lg leading-relaxed mb-6">
                  At Bill Bash Group, sustainability is at the heart of our farming operations. We employ practices that conserve resources, protect biodiversity, and ensure long-term viability for both the environment and local communities.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center"><Sprout className="h-6 w-6 mr-3 text-green-300" /> Water conservation techniques</li>
                  <li className="flex items-center"><Sprout className="h-6 w-6 mr-3 text-green-300" /> Soil health management</li>
                  <li className="flex items-center"><Sprout className="h-6 w-6 mr-3 text-green-300" /> Reduced chemical usage</li>
                  <li className="flex items-center"><Sprout className="h-6 w-6 mr-3 text-green-300" /> Support for local ecosystems</li>
                </ul>
                <Button asChild variant="outline" className="mt-8 border-white text-white hover:bg-white/20 hover:text-white px-8 py-3">
                  <Link to="/contact">Learn About Our Initiatives</Link>
                </Button>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
              >
                <img
                    alt="Farmer inspecting healthy crops in a sustainable farm"
                    className="rounded-xl shadow-2xl w-full h-auto object-cover"
                    src={CropFarming}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default FarmingPage;