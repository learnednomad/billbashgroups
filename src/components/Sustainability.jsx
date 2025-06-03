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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sustainability at Bill Bash</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Bill Bash, we believe celebration should also uplift our planet and communities. Our approach to sustainability reflects our promise to host joyful, responsible, and impactful experiences.
            </p>
          </motion.div>

          <Tabs defaultValue="environment" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="environment">Planet</TabsTrigger>
              <TabsTrigger value="social">People</TabsTrigger>
              <TabsTrigger value="governance">Purpose</TabsTrigger>
            </TabsList>

            <TabsContent value="environment" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Focus</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sourcing decor and materials from eco-friendly vendors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Minimizing waste through reusable event assets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Partnering with venues that prioritize sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Offsetting carbon emissions for major event operations</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                      alt="Eco-conscious event design"
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
                      alt="Community involvement at Bill Bash"
                      className="rounded-lg shadow-lg"
                      src="https://images.unsplash.com/photo-1543181077-099f32f30a1c" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Engagement</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Collaborating with local artists, musicians, and chefs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Hosting free-entry community events and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Creating inclusive, welcoming spaces for everyone</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Supporting local nonprofits through event proceeds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="governance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Purpose-Driven Planning</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Transparent budgeting and vendor partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ethical sourcing for food, décor, and merchandise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Diverse leadership and inclusive team culture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Continuous learning to improve our sustainability impact</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                      alt="Planning session for sustainable events"
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
