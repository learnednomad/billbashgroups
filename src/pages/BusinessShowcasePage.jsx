import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Truck, Leaf, Wrench, Info, Image as ImageIcon, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';

const businessData = {
  "real-estate": {
    name: "Real Estate",
    description: "Bill Bash Group offers a full suite of real estate services tailored for buyers, sellers, investors, and tenants. We manage property transactions and development projects with market expertise and client-first service. Our offerings include property sales, rentals, and strategic land development.",
    icon: <Home className="h-12 w-12 text-primary" />,
    images: [
      { alt: "Modern luxury villa exterior", src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "High-rise apartment buildings in a city", src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Land development site with construction equipment", src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
    ],
    tags: ["Property Sales", "Rentals", "Land Development", "Investment"],
    cta: { text: "Discuss Your Property Needs", link: "/contact?subject=RealEstateInquiry" }
  },
  "truck-importation": {
    name: "Truck Importation",
    description: "Bill Bash Group helps clients import reliable trucks with a simple, end-to-end service. We ensure every truck is inspected, legally cleared, and ready for use. We source semi-trailers, dump trucks, flatbeds, box trucks, and utility/agricultural vehicles.",
    icon: <Truck className="h-12 w-12 text-primary" />,
    images: [
      { alt: "Fleet of semi-trailer trucks", src: "https://images.unsplash.com/photo-1590224500290-de02a3509a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Yellow dump truck at a quarry", src: "https://images.unsplash.com/photo-1580447150153-3b973785a547?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Agricultural tractor in a field", src: "https://images.unsplash.com/photo-1610348701885-007501515d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
    ],
    tags: ["Semi-trailers", "Dump Trucks", "Flatbeds", "Logistics", "Construction Vehicles"],
    cta: { text: "Inquire About Truck Imports", link: "/contact?subject=TruckImportationInquiry" }
  },
  "farming": {
    name: "Farming & Agriculture",
    description: "Bill Bash Group is committed to sustainable farming to support food security and agribusiness growth. Our focus areas include crop farming (maize, cassava, vegetables, plantain), livestock management (poultry, goats, sheep), and agri-tech integrations.",
    icon: <Leaf className="h-12 w-12 text-primary" />,
    images: [
      { alt: "Lush green corn field", src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Poultry farm with chickens", src: "https://images.unsplash.com/photo-1582076355718-9f899798600a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Farmer using tablet in a field with agri-tech concept", src: "https://images.unsplash.com/photo-1620910491724-b97f0529a9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
    ],
    tags: ["Crop Farming", "Livestock", "Agri-Tech", "Sustainability", "Food Security"],
    cta: { text: "Partner with Our Agri-Business", link: "/contact?subject=FarmingInquiry" }
  },
  "spare-parts": {
    name: "Spare Parts Sales",
    description: "We supply high-quality parts for heavy vehicles and equipment, serving both businesses and individuals with expert support and reliable sourcing. Our inventory includes engine parts, drivetrain components, suspension, brakes, electrical parts, filters, and lubricants for logistics, construction, agriculture, and auto repair industries.",
    icon: <Wrench className="h-12 w-12 text-primary" />,
    images: [
      { alt: "Assortment of engine gears and components", src: "https://images.unsplash.com/photo-1616899697351-f418015c83a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Brake discs and calipers", src: "https://images.unsplash.com/photo-1581092902464-152385a5978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
      { alt: "Shelves with organized spare parts in a warehouse", src: "https://images.unsplash.com/photo-1560922398-6d9cb584ba29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=70" },
    ],
    tags: ["Engine Parts", "Brakes", "Suspension", "Electrical", "Filters", "Heavy Vehicles"],
    cta: { text: "Find Your Spare Parts", link: "/contact?subject=SparePartsInquiry" }
  }
};


const BusinessShowcasePage = () => {
  const { segment } = useParams();
  const currentBusiness = businessData[segment];

  if (!currentBusiness) {
    return <Navigate to="/businesses" replace />;
  }
  
  const heroData = {
    title: currentBusiness.name,
    subtitleDesktop: `Your Premier Partner in ${currentBusiness.name}`,
    subtitleMobile: `Expert ${currentBusiness.name} Solutions.`,
    ctaText: currentBusiness.cta.text,
    ctaLink: currentBusiness.cta.link,
    showIntro: false,
    heroImage: { 
      alt: currentBusiness.images[0]?.alt || `Illustrative image for ${currentBusiness.name}`,
      description: currentBusiness.images[0]?.alt || `Illustrative image for ${currentBusiness.name}`, 
      src: currentBusiness.images[0]?.src 
    },
    customHeroIcon: currentBusiness.icon
  };


  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero pageData={heroData} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <div className="flex items-center mb-6">
              {React.cloneElement(currentBusiness.icon, {className: "h-10 w-10 text-primary mr-4"})}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Our {currentBusiness.name} Division</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{currentBusiness.description}</p>
            
            {currentBusiness.tags && currentBusiness.tags.length > 0 && (
              <div className="mt-6">
                <h4 className="text-md font-semibold text-gray-600 mb-2">Key Focus Areas & Products:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentBusiness.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {currentBusiness.images && currentBusiness.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 md:mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                <ImageIcon className="inline-block h-8 w-8 text-primary mr-2" />
                Visual Showcase
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBusiness.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg shadow-lg group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                     <div className="p-3 bg-black/50 text-white text-xs text-center">
                       <p>{image.alt}</p>
                     </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interested in our {currentBusiness.name} services?</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Our team is ready to assist you with your specific needs. Reach out today for a consultation or to learn more.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link to={currentBusiness.cta.link}>
                <Phone className="mr-2 h-5 w-5" /> {currentBusiness.cta.text}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessShowcasePage;