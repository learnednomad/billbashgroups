
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Zap, HeartHandshake, Milestone } from "lucide-react";

const AboutPage = () => {
  const yearFounded = 2013; 
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">

  <section className="py-20 md:py-32 bg-gray-300 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            About Billbash Industries Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Pioneering progress through diversified solutions and unwavering commitment.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Billbash Industries Limited is a dynamic and diversified company with a strong presence in real estate, truck importation, farming, and spare parts sales. We pride ourselves on delivering reliable, high-quality services tailored to meet the unique needs of our clients. Our journey is marked by continuous growth, innovation, and a deep understanding of the markets we serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our strength lies in our ability to adapt and excel across multiple sectors, leveraging our expertise to provide comprehensive solutions that foster development and success for individuals, businesses, and communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                alt="Modern office interior representing Billbash Industries headquarters"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
               src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower communities and businesses through trusted solutions that drive growth, sustainability, and long-term value. We achieve this by consistently delivering excellence and fostering innovation in all our endeavors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Integrity</h4>
                    <p className="text-gray-600 text-sm">Upholding the highest ethical standards in all our interactions and operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Excellence</h4>
                    <p className="text-gray-600 text-sm">Striving for superior quality and performance in everything we do.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Milestone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Innovation</h4>
                    <p className="text-gray-600 text-sm">Embracing new ideas and technologies to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HeartHandshake className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Community</h4>
                    <p className="text-gray-600 text-sm">Contributing positively to the communities we serve and fostering sustainable development.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2"></div>
            <div className="space-y-16 md:space-y-0">
              <motion.div 
                initial={{ opacity:0, x: -50 }}
                whileInView={{ opacity:1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-primary">{yearFounded}</h3>
                  <p className="text-gray-500">The Beginning</p>
                </div>
                <div className="relative md:pl-8">
                  <div className="hidden md:block absolute -left-2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                  <div className="md:hidden absolute -left-2 top-0 w-1 h-full bg-primary/20 transform -translate-x-1/2"></div>
                   <div className="md:hidden absolute -left-3.5 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-0"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Humble Beginnings</h4>
                    <p className="text-gray-600">Billbash Industries began as a small real estate consultancy in {yearFounded}, founded with a vision to provide exceptional property services and build lasting client relationships.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity:0, x: 50 }}
                whileInView={{ opacity:1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:col-start-2 md:text-left md:pl-8 mb-4 md:mb-0 order-first md:order-last">
                   <h3 className="text-2xl font-semibold text-primary">{yearFounded + 3}-{yearFounded + 5}</h3>
                   <p className="text-gray-500">Expansion Phase</p>
                </div>
                <div className="relative md:pr-8 md:text-right md:col-start-1 md:row-start-1 order-last md:order-first">
                    <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                    <div className="md:hidden absolute -left-2 top-0 w-1 h-full bg-primary/20 transform -translate-x-1/2"></div>
                    <div className="md:hidden absolute -left-3.5 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-0"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 md:border-r-0 md:border-l-4 border-primary">
                      <h4 className="text-xl font-semibold text-gray-700 mb-2">Diversification and Growth</h4>
                      <p className="text-gray-600">Recognizing growing market needs, we expanded into truck importation and spare parts sales, establishing a reputation for reliability and quality in these new sectors.</p>
                    </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity:0, x: -50 }}
                whileInView={{ opacity:1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-primary">{yearFounded + 6}-Present</h3>
                  <p className="text-gray-500">Strategic Development</p>
                </div>
                <div className="relative md:pl-8">
                  <div className="hidden md:block absolute -left-2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                   <div className="md:hidden absolute -left-2 top-0 w-1 h-full bg-primary/20 transform -translate-x-1/2"></div>
                   <div className="md:hidden absolute -left-3.5 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-0"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Farming and Beyond</h4>
                    <p className="text-gray-600">Billbash Industries ventured into the agricultural sector, focusing on sustainable farming practices. Today, we are a multi-faceted company committed to driving progress across all our operations.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
