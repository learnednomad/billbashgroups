import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Truck, Leaf, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const businessData = [
  {
    id: 1,
    title: "Real Estate",
    description: "Premium property sales, rentals, and strategic land development projects.",
    icon: <Home className="h-8 w-8 text-primary" />,
    link: "/real-estate",
    imgSlug: "contemporary-house-design",
    delay: 0
  },
  {
    id: 2,
    title: "Truck Importation",
    description: "Reliable sourcing and importation of diverse commercial trucks for various industries.",
    icon: <Truck className="h-8 w-8 text-primary" />,
    link: "/truck-importation",
    imgSlug: "large-truck-on-open-road",
    delay: 0.1
  },
  {
    id: 3,
    title: "Farming",
    description: "Sustainable crop farming (maize, cassava, vegetables) and livestock management.",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    link: "/farming",
    imgSlug: "green-field-with-growing-crops",
    delay: 0.2
  },
  {
    id: 4,
    title: "Spare Parts Sales",
    description: "High-quality parts for heavy vehicles, construction machinery, and agricultural equipment.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    link: "/spare-parts",
    imgSlug: "various-mechanical-spare-parts",
    delay: 0.3
  }
];

const Businesses = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100" id="businesses-section-home">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold uppercase text-primary tracking-wider mb-2 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Driving Progress Across Key Sectors</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Bill Bash Group is dedicated to providing top-tier services across our specialized business units. We focus on quality, reliability, and customer satisfaction to meet diverse needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessData.map((business) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: business.delay }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="business-card h-full flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                <div className="h-52 overflow-hidden">
                  <img  
                    alt={`${business.title} - Bill Bash Group`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader className="items-center text-center pt-6 pb-2">
                  <div className="p-4 bg-primary/10 rounded-full mb-3 inline-block">
                     {business.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{business.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 pb-4">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">{business.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    <Link to={business.link}>
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;