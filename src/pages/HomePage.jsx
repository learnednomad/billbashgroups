import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BusinessesSection from "@/components/BusinessesSection";
import Stats from "@/components/Stats";
import CtaSection from "@/components/CtaSection";

const HomePage = () => {
    const heroData = {
        title: "Billbash Industries Limited",
        subtitleDesktop: "Real Estate | Truck Importation | Farming | Spare Parts",
        subtitleMobile:
            "Reliable services in real estate, truck importation, farming & spare parts — all in one place.",
        introParagraph:
            "Welcome to Billbash Industries Limited — your trusted partner in real estate, truck importation, farming, and spare parts sales. With an unwavering commitment to quality, integrity, and customer satisfaction, we deliver dependable solutions across key industries. Whether you're searching for premium properties, importing durable trucks, exploring sustainable agriculture, or sourcing top-quality spare parts, Billbash Industries Limited stands ready to serve your needs with professionalism and expertise.",
        ctaText: "Explore Our Services",
        ctaLink: "/about",
        showIntro: true,
        heroImage: {
            alt: "Panoramic view of Billbash Industries Limited's diverse operations including a modern skyline, a fleet of trucks, green farmland, and a well-organized spare parts warehouse",
            description: "Diverse operations of Billbash Industries Limited",
        },
    };

    return (
        <>
            <Hero pageData={heroData} />
            <AboutSection />
            <BusinessesSection />
            <Stats />
            <CtaSection
                title="Ready to Partner with Us?"
                description="Discover how Billbash Industries Limited can support your goals. Contact us today for tailored solutions and expert guidance."
                buttonText="Get in Touch"
                buttonLink="/contact"
            />
        </>
    );
};

export default HomePage;
