
import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BusinessesSection from "@/components/BusinessesSection";
import Stats from "@/components/Stats"; 
import CtaSection from "@/components/CtaSection";

const HomePage = () => {
  const heroData = {
    title: "BillBash Group",
    subtitleDesktop: "Real Estate | Truck Importation | Farming | Spare Parts",
    subtitleMobile: "Reliable services in real estate, truck importation, farming & spare parts — all in one place.",
    introParagraph: "Welcome to BillBash Group — your trusted partner in real estate, truck importation, farming, and spare parts sales. With a strong commitment to excellence and integrity, we provide reliable solutions across multiple industries to support individuals, businesses, and communities. Whether you're seeking premium properties, sourcing quality trucks, investing in agriculture, or in need of durable spare parts, Bill Bash Group delivers with professionalism, transparency, and a deep understanding of your needs.",
    ctaText: "Explore Our Services",
    ctaLink: "/about", 
    showIntro: true,
    heroImage: {
      alt: "Panoramic view of BillBash Group's diverse operations including modern city skyline for real estate, a fleet of trucks, a lush green farm, and an organized spare parts warehouse",
      description: "Diverse operations of Bill Bash Group"
    }
  };

  return (
    <>
      <Hero pageData={heroData} />
      <AboutSection />
      <BusinessesSection />
      <Stats />
      <CtaSection 
        title="Ready to Partner with Us?"
        description="Discover how BillBash Group can support your goals. Contact us today for tailored solutions and expert advice."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default HomePage;
