
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
    imgSlug: "modern-luxury-home-exterior",
    delay: 0
  },
  {
    id: 2,
    title: "Truck Importation",
    description: "Reliable sourcing and importation of diverse commercial trucks for various industries.",
    icon: <Truck className="h-8 w-8 text-primary" />,
    link: "/truck-importation",
    imgSlug: "fleet-of-newly-imported-trucks",
    delay: 0.1
  },
  {
    id: 3,
    title: "Farming",
    description: "Sustainable crop farming (maize, cassava, vegetables) and livestock management.",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    link: "/farming",
    imgSlug: "lush-green-farm-with-crops",
    delay: 0.2
  },
  {
    id: 4,
    title: "Spare Parts Sales",
    description: "High-quality parts for heavy vehicles, construction machinery, and agricultural equipment.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    link: "/spare-parts",
    imgSlug: "assortment-of-vehicle-spare-parts",
    delay: 0.3
  }
];

const BusinessesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="businesses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Businesses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bill Bash Group offers a diverse portfolio of services, each delivered with a commitment to quality, reliability, and customer satisfaction. Explore our key sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessData.map((business) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: business.delay }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="business-card h-full flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img  
                    alt={`${business.title} service by Bill Bash Group`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-2 inline-block">
                     {business.icon}
                  </div>
                  <CardTitle className="text-2xl">{business.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-gray-600">{business.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                  <Button asChild variant="link" className="text-primary font-medium hover:text-primary/80">
                    <Link to={business.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
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

export default BusinessesSection;
