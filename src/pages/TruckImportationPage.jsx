import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Cog,
  Anchor,
  ListChecks,
  Globe,
  CheckCircle,
  Clock,
  Award,
  Wrench,
  DollarSign,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Fuel,
  Bike,
  Container
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

const TruckImportationPage = () => {
  const heroData = {
    title: "Premium Vehicle Importation Services",
    subtitleDesktop: "Sourcing, inspecting, and delivering quality commercial vehicles and motorcycles for your business success.",
    subtitleMobile: "Quality Vehicles, Delivered Worldwide",
    ctaText: "Explore Our Vehicles",
    ctaLink: "#vehicletypes",
    showIntro: false,
    heroImage: {
      alt: "Fleet of various imported vehicles including trucks, tankers, and motorcycles at a modern port facility",
      description: "Professional vehicle importation and logistics operations"
    }
  };

  const vehicleTypes = [
    {
      name: "Semi-Trailers",
      description: "Heavy-duty long-haul transportation solutions for interstate and international cargo operations.",
      icon: <Truck className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1693058825172-8eb46d14809e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["High Payload Capacity", "Fuel Efficient", "Advanced Safety Systems", "GPS Tracking Ready"]
    },
    {
      name: "Dump Trucks",
      description: "Robust construction and mining vehicles designed for heavy-duty material transport and site operations.",
      icon: <Container className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1605406748549-6ecb0aa1e3e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Hydraulic Systems", "Reinforced Body", "All-Terrain Capability", "Easy Maintenance"]
    },
    {
      name: "Tanker Trucks",
      description: "Specialized liquid transport vehicles for fuel, water, chemicals, and other fluid cargo transportation.",
      icon: <Fuel className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Corrosion Resistant", "Safety Valves", "Temperature Control", "Multiple Compartments"]
    },
    {
      name: "Flatbeds & Box Trucks",
      description: "Versatile delivery and cargo solutions perfect for diverse transportation and logistics requirements.",
      icon: <Cog className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Flexible Loading", "Weather Protection", "Urban Navigation", "Cost Effective"]
    },
    {
      name: "Utility & Agricultural Vehicles",
      description: "Specialized equipment for farming, construction, and industrial applications with custom configurations.",
      icon: <Wrench className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1544965503-1c0d1b1b8b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Custom Equipment", "Multi-Purpose Use", "Terrain Adaptable", "Industry Specific"]
    },
    {
      name: "Motorcycles",
      description: "High-performance motorcycles for personal transportation, delivery services, and recreational use.",
      icon: <Bike className="h-8 w-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Fuel Efficient", "Easy Maneuverability", "Low Maintenance", "Various Engine Sizes"]
    },
  ];

  const importProcess = [
    {
      step: "01",
      title: "Consultation & Requirements",
      description: "We analyze your specific needs, budget, and operational requirements to recommend the perfect vehicle solution.",
      icon: <ListChecks className="h-10 w-10 text-white" />,
      details: ["Needs Assessment", "Budget Planning", "Vehicle Recommendations", "Timeline Discussion"]
    },
    {
      step: "02",
      title: "Global Sourcing & Inspection",
      description: "Our experts locate vehicles from trusted suppliers worldwide and conduct comprehensive quality inspections.",
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      details: ["Global Network Access", "Quality Verification", "Mechanical Inspection", "Documentation Review"]
    },
    {
      step: "03",
      title: "Shipping & Customs Clearance",
      description: "We handle all logistics including secure shipping, insurance, customs clearance, and regulatory compliance.",
      icon: <Anchor className="h-10 w-10 text-white" />,
      details: ["Secure Transportation", "Insurance Coverage", "Customs Processing", "Regulatory Compliance"]
    },
    {
      step: "04",
      title: "Delivery & After-Sales Support",
      description: "Final delivery to your location with comprehensive handover, documentation, and ongoing support services.",
      icon: <Cog className="h-10 w-10 text-white" />,
      details: ["Timely Delivery", "Complete Documentation", "Training Support", "Maintenance Guidance"]
    },
  ];

  const keyBenefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Access to trusted suppliers and dealers across multiple continents"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous inspection process ensuring every vehicle meets our high standards"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Processing",
      description: "Streamlined import process with typical delivery in 4-8 weeks"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Warranty Support",
      description: "Comprehensive warranty and after-sales service for peace of mind"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Pricing",
      description: "Direct sourcing relationships ensure the best prices for our clients"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Support",
      description: "Expert technical assistance and maintenance guidance"
    }
  ];

  const stats = [
    { number: "750+", label: "Vehicles Imported", icon: <Truck className="h-8 w-8" /> },
    { number: "25+", label: "Countries Sourced", icon: <Globe className="h-8 w-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-8 w-8" /> },
    { number: "10+", label: "Years Experience", icon: <TrendingUp className="h-8 w-8" /> }
  ];

  return (
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <Hero pageData={heroData} />

        {/* Vehicle Types Section */}
        <section id="vehicletypes" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
              Our Vehicle Portfolio
            </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Premium Commercial Vehicles & Motorcycles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We source a comprehensive range of commercial vehicles and motorcycles from trusted global suppliers,
                ensuring quality, reliability, and value for your business and personal transportation needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {vehicleTypes.map((vehicle, index) => (
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
                          alt={`${vehicle.name} - Professional commercial vehicle`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          src={vehicle.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                        {vehicle.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{vehicle.description}</p>

                      <div className="space-y-2">
                        {vehicle.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500">
                              <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results from years of excellence in truck importation and client service.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

        {/* Import Process Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
            <span className="text-sm font-semibold uppercase text-red-200 tracking-wider mb-2 block">
              Our Process
            </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Streamlined Import Excellence
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Billbash Industries delivers a seamless, end-to-end truck importation service.
                Every vehicle is carefully inspected, legally cleared, and ready for immediate deployment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {importProcess.map((item, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/20 p-4 rounded-full mr-4 group-hover:bg-white/30 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <span className="text-5xl font-bold text-white/30">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-red-100 leading-relaxed mb-6">{item.description}</p>

                      <div className="space-y-2">
                        {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-red-200 justify-center">
                              <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                              {detail}
                            </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold inline-flex items-center">
                <Link to="/contact">
                  Start Your Import Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
        </section>

        {/* Key Benefits Section */}
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
              Why Choose Us
            </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted Import Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with industry professionals who prioritize
                quality, transparency, and exceptional service in every transaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                      {React.cloneElement(benefit.icon, { className: "h-8 w-8 text-red-600" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
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
                Ready to Import Your Next Fleet?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                From consultation to delivery, we handle every aspect of truck importation.
                Contact us today to discuss your requirements and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-full font-semibold">
                  <Link to="/vehicle-listings">Available Vehicles</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
                  <Link to="/contact">Get Your Quote Today</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default TruckImportationPage;