
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const Sustainability = () => {
  return (
    <section className="py-20 bg-white" id="sustainability">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commitment to Sustainability</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Dangote Group, we are committed to sustainable business practices that create value for all stakeholders while minimizing environmental impact.
          </p>
        </motion.div>

        <Tabs defaultValue="environment" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="social">Social Impact</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="environment" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Stewardship</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reducing carbon emissions across all our operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Implementing water conservation and recycling programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Investing in renewable energy sources for our manufacturing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Developing eco-friendly products and packaging solutions</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img  
                  alt="Dangote environmental sustainability initiatives" 
                  className="rounded-lg shadow-lg"
                 src="https://images.unsplash.com/photo-1692578919818-8418a9390759" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img  
                  alt="Dangote social impact programs in local communities" 
                  className="rounded-lg shadow-lg"
                 src="https://images.unsplash.com/photo-1543181077-099f32f30a1c" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Responsibility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Supporting education through scholarships and school infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Providing healthcare services to underserved communities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Creating employment opportunities and skills development programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Empowering women and youth through entrepreneurship initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="governance" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Governance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Maintaining transparent business practices and ethical standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Implementing robust anti-corruption and compliance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ensuring diversity and inclusion at all levels of the organization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Regular reporting on sustainability performance and targets</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img  
                  alt="Dangote corporate governance meeting with board members" 
                  className="rounded-lg shadow-lg"
                 src="https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Sustainability;
