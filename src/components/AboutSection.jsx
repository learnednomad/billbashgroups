
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TruckAboutImage from "../assets/images/truck-imports.jpeg";


const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold mb-2 block">About Bill Bash Group</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Trusted Partner Across Industries
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bill Bash Group is a dynamic and diversified company with a strong presence in real estate, truck importation, farming, and spare parts sales. Our commitment to excellence and integrity drives us to provide reliable solutions that support individuals, businesses, and communities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're seeking premium properties, sourcing quality trucks, investing in sustainable agriculture, or in need of durable spare parts, Bill Bash Group delivers with professionalism, transparency, and a deep understanding of your needs.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-highlight hover:text-highlight-foreground text-base px-8 py-3">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay:0.2 }}
            className="relative"
          >
            <img 
              alt="Collage of Bill Bash Group's services: real estate, trucks, farming, spare parts"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
             src={TruckAboutImage} />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-muted rounded-lg -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
