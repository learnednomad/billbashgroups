import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
  GitFork,
  Cpu,
  Droplet,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Heart
} from "lucide-react";
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
    subtitleMobile: "Modern Farming Solutions for Tomorrow's Food Security",
    ctaText: "Explore Our Approach",
    ctaLink: "#focusareas",
    showIntro: false,
    heroImage: {
      alt: "Lush green agricultural field with various crops under a clear blue sky",
      description: "Panoramic view of a modern sustainable farm"
    }
  };

  const focusAreas = [
    {
      title: "Crop Farming",
      details: "Specializing in maize, cassava, diverse vegetables, and plantain cultivation using sustainable practices that maximize yield while preserving soil health.",
      icon: <Sprout className="h-10 w-10 text-red-600" />,
      image: CropFarming,
      highlights: ["Organic Methods", "High Yield Varieties", "Soil Conservation", "Water Efficient"]
    },
    {
      title: "Livestock Management",
      details: "Ethical and efficient raising of poultry, goats, and sheep, ensuring high standards of animal welfare, productivity, and sustainable breeding practices.",
      icon: <GitFork className="h-10 w-10 text-red-600 transform rotate-90" />,
      image: LiveStock,
      highlights: ["Animal Welfare", "Breeding Programs", "Disease Prevention", "Nutrition Management"]
    },
    {
      title: "Agri-Tech Integration",
      details: "Implementing cutting-edge technologies like precision agriculture, IoT sensors, drone monitoring, and data analytics to optimize yields and resource utilization.",
      icon: <Cpu className="h-10 w-10 text-red-600" />,
      image: AgriTech,
      highlights: ["IoT Monitoring", "Precision Agriculture", "Data Analytics", "Automation Systems"]
    },
  ];

  const sustainabilityPractices = [
    {
      icon: <Droplet className="h-6 w-6" />,
      title: "Water Conservation",
      description: "Advanced irrigation systems and rainwater harvesting"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Soil Health Management",
      description: "Crop rotation, organic fertilizers, and erosion control"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Reduced Chemical Usage",
      description: "Integrated pest management and natural alternatives"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ecosystem Support",
      description: "Biodiversity preservation and pollinator protection"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Acres Under Cultivation", icon: <BarChart3 className="h-8 w-8" /> },
    { number: "15+", label: "Years of Experience", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "100+", label: "Local Families Supported", icon: <Users className="h-8 w-8" /> },
    { number: "30%", label: "Increase in Crop Yields", icon: <Sprout className="h-8 w-8" /> }
  ];

  return (
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <Hero pageData={heroData} />

        {/* Focus Areas Section */}
        <section id="focusareas" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
              Our Expertise
            </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Farming Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Billbash Industries combines traditional wisdom with modern innovations to deliver
                sustainable farming solutions that support food security and agribusiness growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                          alt={`${area.title} - Modern farming practices`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          src={area.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{area.details}</p>

                      <div className="space-y-2">
                        {area.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500">
                              <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                              {highlight}
                            </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Farming Impact</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable results from our commitment to sustainable agriculture and community development.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-4 group-hover:bg-red-500 transition-colors duration-300">
                      {React.cloneElement(stat.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
              >
              <span className="text-sm font-semibold uppercase text-red-200 tracking-wider mb-2 block">
                Our Commitment
              </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Sustainable Agriculture for Future Generations
                </h2>
                <p className="text-xl text-red-100 leading-relaxed mb-8">
                  At Billbash Industries, sustainability isn't just a practice—it's our philosophy. We employ
                  innovative methods that conserve resources, protect biodiversity, and ensure long-term
                  viability for both the environment and local communities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {sustainabilityPractices.map((practice, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          {React.cloneElement(practice.icon, { className: "h-6 w-6 text-white" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{practice.title}</h4>
                          <p className="text-red-100 text-sm">{practice.description}</p>
                        </div>
                      </motion.div>
                  ))}
                </div>

                <Button asChild className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold inline-flex items-center">
                  <Link to="/contact">
                    Learn About Our Initiatives
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                    src={CropFarming}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full hidden lg:block"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/10 rounded-full hidden lg:block"></div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
        </section>

        {/* Technology Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
              Innovation in Agriculture
            </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technology-Driven Farming
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technology to optimize every aspect of our farming operations,
                from planting to harvest, ensuring maximum efficiency and sustainability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Precision Agriculture",
                  description: "GPS-guided machinery and variable rate technology for optimal resource application",
                  icon: <Cpu className="h-8 w-8" />
                },
                {
                  title: "IoT Monitoring",
                  description: "Real-time soil moisture, temperature, and nutrient level monitoring systems",
                  icon: <BarChart3 className="h-8 w-8" />
                },
                {
                  title: "Data Analytics",
                  description: "Predictive modeling for crop planning, pest management, and yield forecasting",
                  icon: <TrendingUp className="h-8 w-8" />
                }
              ].map((tech, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                      {React.cloneElement(tech.icon, { className: "h-8 w-8 text-red-600" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Partner with Us for Sustainable Agriculture
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're looking to invest in agricultural projects, source fresh produce,
                or learn about sustainable farming practices, we're here to help you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold">
                  <Link to="/contact">Start a Partnership</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default FarmingPage;