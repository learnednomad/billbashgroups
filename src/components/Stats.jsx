
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Map, Users, Smile } from "lucide-react";

const statsData = [
  { id: 1, value: "10+", label: "Years of Experience", icon: <Briefcase className="h-10 w-10 text-white" /> },
  { id: 2, value: "4+", label: "Core Industries", icon: <Map className="h-10 w-10 text-white" /> },
  { id: 3, value: "1000+", label: "Satisfied Clients", icon: <Smile className="h-10 w-10 text-white" /> },
  { id: 4, value: "50+", label: "Dedicated Professionals", icon: <Users className="h-10 w-10 text-white" /> },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Decades of dedication, diverse expertise, and a commitment to client success define Billbash Industries. We are a leading supplier of high-quality spare parts and equipment for heavy vehicles and equipment across multiple industries. We are committed to providing our customers with the highest quality products and services.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700/50 p-8 rounded-xl shadow-lg text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
