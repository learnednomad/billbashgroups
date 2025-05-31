import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/billbashplaza.png"; // Import the image

const Hero = ({ pageData }) => {
    const { title, subtitleDesktop, subtitleMobile, introParagraph, ctaText, ctaLink, showIntro, heroImage } = pageData;

    return (
        <section className="relative h-[calc(100vh-80px)] min-h-[600px] md:h-screen pt-[80px]">
            <div className="absolute inset-0 z-0">
                <img
                    alt={heroImage.alt}
                    className="w-full h-full object-cover"
                    src={HeroImage} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    {subtitleDesktop && <p className="hidden md:block text-xl md:text-2xl text-white/90 mb-8">{subtitleDesktop}</p>}
                    {subtitleMobile && <p className="block md:hidden text-lg text-white/90 mb-8">{subtitleMobile}</p>}

                    {showIntro && introParagraph && (
                        <p className="text-md md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                            {introParagraph}
                        </p>
                    )}

                    {ctaText && ctaLink && (
                        <Button asChild className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6">
                            <Link to={ctaLink}>
                                {ctaText}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;