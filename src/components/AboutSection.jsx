import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

// Import your images
import TruckAboutImage from "../assets/images/truck-imports.jpeg";
import TruckImageOne from "../assets/images/about-us-carousel/about-image-1.jpg";
import TruckImageTwo from "../assets/images/about-us-carousel/about-image-2.jpg";
import TruckImageThree from "../assets/images/about-us-carousel/about-image-3.jpg";
import TruckImageFour from "../assets/images/about-us-carousel/about-image-4.jpg";
import TruckImageFive from "../assets/images/about-us-carousel/about-image-5.jpg";
import TruckImageSix from "../assets/images/about-us-carousel/about-image-6.jpg";
import TruckImageSeven from "../assets/images/about-us-carousel/about-image-7.jpg";
import TruckImageEight from "../assets/images/about-us-carousel/about-image-8.jpg";
import TruckImageNine from "../assets/images/about-us-carousel/about-image-9.jpg";
import TruckImageTen from "../assets/images/about-us-carousel/about-image-10.jpg";
import TruckImageEleven from "../assets/images/about-us-carousel/about-image-11.jpg";
import TruckImageTwelve from "../assets/images/about-us-carousel/about-image-12.jpg";
import TruckImageThirteen from "../assets/images/about-us-carousel/about-image-13.jpg";
import TruckImageFourteen from "../assets/images/about-us-carousel/about-image-14.jpg";
import TruckImageFifteen from "../assets/images/about-us-carousel/about-image-15.jpg";
import TruckImageSixteen from "../assets/images/about-us-carousel/about-image-16.jpg";
import TruckImageSeventeen from "../assets/images/about-us-carousel/about-image-17.jpg";
import TruckImageEighteen from "../assets/images/about-us-carousel/about-image-18.jpg";
import TruckImageNineteen from "../assets/images/about-us-carousel/about-image-19.jpg";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel images - trucks, agricultural vehicles, and motorcycles only
  // const slides = [
  //   {
  //     image: TruckAboutImage,
  //     title: "Commercial Trucks",
  //     description: "Heavy-duty trucks for business operations"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Semi-Trailers",
  //     description: "Long-haul transportation solutions"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1605406748549-6ecb0aa1e3e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Dump Trucks",
  //     description: "Construction and mining vehicles"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1693058825172-8eb46d14809e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Freight Trucks",
  //     description: "Cargo transportation vehicles"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1609112553575-bb4c1d10e0c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Delivery Trucks",
  //     description: "Urban delivery and logistics vehicles"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Tanker Trucks",
  //     description: "Liquid transport specialists"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1544965503-1c0d1b1b8b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Agricultural Tractors",
  //     description: "Modern farming equipment"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Farm Tractors",
  //     description: "Heavy-duty agricultural machinery"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1574925526736-4b7c84b93e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Utility Vehicles",
  //     description: "Multi-purpose agricultural equipment"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Flatbed Trucks",
  //     description: "Versatile cargo transportation"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Sport Motorcycles",
  //     description: "High-performance two-wheelers"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Touring Motorcycles",
  //     description: "Long-distance motorcycle touring"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Delivery Motorcycles",
  //     description: "Urban delivery solutions"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Custom Motorcycles",
  //     description: "Specialized motorcycle configurations"
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1525160354320-d8945d812706?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
  //     title: "Electric Motorcycles",
  //     description: "Eco-friendly transportation solutions"
  //   }
  // ];
  const slides = [
    {
        image: TruckAboutImage,
        title: "Commercial Trucks",
        description: "Heavy-duty trucks for business operations"
      },
    {
      id: 1,
      title: "Heavy Duty Truck One",
      description: "Premium trucks for industrial transport solutions.",
      image: TruckImageOne,
    },
    {
      id: 2,
      title: "Heavy Duty Truck Two",
      description: "Reliable trucks for your business needs.",
      image: TruckImageTwo,
    },
    {
      id: 3,
      title: "Heavy Duty Truck Three",
      description: "High-performance trucks for heavy loads.",
      image: TruckImageThree,
    },
    {
      id: 4,
      title: "Heavy Duty Truck Four",
      description: "Affordable trucks for all industries.",
      image: TruckImageFour,
    },
    {
      id: 5,
      title: "Heavy Duty Truck Five",
      description: "Durable trucks for tough jobs.",
      image: TruckImageFive,
    },
    {
      id: 6,
      title: "Heavy Duty Truck Six",
      description: "Versatile trucks for construction projects.",
      image: TruckImageSix,
    },
    {
      id: 7,
      title: "Heavy Duty Truck Seven",
      description: "Efficient trucks for urban logistics.",
      image: TruckImageSeven,
    },
    {
      id: 8,
      title: "Heavy Duty Truck Eight",
      description: "Robust trucks for heavy-duty tasks.",
      image: TruckImageEight,
    },
    {
      id: 9,
      title: "Heavy Duty Truck Nine",
      description: "Compact trucks for tight spaces.",
      image: TruckImageNine,
    },
    {
      id: 10,
      title: "Heavy Duty Truck Ten",
      description: "Multi-purpose trucks for all terrains.",
      image: TruckImageTen,
    },
    {
      id: 11,
      title: "Heavy Duty Truck Eleven",
      description: "High-capacity trucks for long hauls.",
      image: TruckImageEleven,
    },
    {
      id: 12,
      title: "Heavy Duty Truck Twelve",
      description: "Sleek trucks for modern fleets.",
      image: TruckImageTwelve,
    },
    {
      id: 13,
      title: "Heavy Duty Truck Thirteen",
      description: "Powerful trucks for rugged environments.",
      image: TruckImageThirteen,
    },
    {
      id: 14,
      title: "Heavy Duty Truck Fourteen",
      description: "Stylish trucks for brand visibility.",
      image: TruckImageFourteen,
    },
    {
      id: 15,
      title: "Heavy Duty Truck Fifteen",
      description: "Top-tier trucks for performance.",
      image: TruckImageFifteen,
    },
    {
      id: 16,
      title: "Heavy Duty Truck Sixteen",
      description: "Eco-friendly trucks for sustainability.",
      image: TruckImageSixteen,
    },
    {
      id: 17,
      title: "Heavy Duty Truck Seventeen",
      description: "Heavy-duty trucks for extreme conditions.",
      image: TruckImageSeventeen,
    },
    {
      id: 18,
      title: "Heavy Duty Truck Eighteen",
      description: "Customizable trucks for specialized needs.",
      image: TruckImageEighteen,
    },
    {
      id: 19,
      title: "Heavy Duty Truck Nineteen",
      description: "Next-gen trucks for future logistics.",
      image: TruckImageNineteen,
    },
  ];
  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds for more images

      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
      <section className="py-16 md:py-20 bg-white" id="about-section-home">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
              Who We Are
            </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Billbash Industries Limited
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                Your Trusted Partner Across Industries
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Billbash Industries Limited is a dynamic and diversified company with a strong presence in real estate, truck importation, farming, and spare parts sales. Our commitment to excellence and integrity drives us to provide reliable solutions that support individuals, businesses, and communities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you're seeking premium properties, sourcing quality trucks, investing in sustainable agriculture, or in need of durable spare parts, Billbash Industries delivers with professionalism, transparency, and a deep understanding of your needs.
              </p>
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced Carousel Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
            >
              <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl">

                {/* Desktop Carousel */}
                <div className="hidden md:block w-full h-full">
                  {/* Main Carousel Images */}
                  <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                        className="relative w-full h-full"
                    >
                      <img
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          className="w-full h-full object-cover"
                      />

                      {/* Subtle Dark Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Slide Content */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <motion.h4
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-bold mb-2"
                        >
                          {slides[currentSlide].title}
                        </motion.h4>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/90"
                        >
                          {slides[currentSlide].description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
                      aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
                      aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Play/Pause Button */}
                  <button
                      onClick={togglePlayPause}
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                      aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                        <Pause className="h-5 w-5 text-white" />
                    ) : (
                        <Play className="h-5 w-5 text-white ml-0.5" />
                    )}
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "100%" : "0%" }}
                        transition={{
                          duration: isPlaying ? 4 : 0,
                          ease: "linear",
                          repeat: isPlaying ? Infinity : 0
                        }}
                        key={`${currentSlide}-${isPlaying}`}
                    />
                  </div>
                </div>

                {/* Mobile Static Image */}
                <div className="block md:hidden w-full h-full">
                  <img
                      src={slides[0].image}
                      alt={slides[0].title}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{slides[0].title}</h4>
                    <p className="text-white/90 text-sm">{slides[0].description}</p>
                  </div>
                </div>
              </div>

              {/* Hidden Thumbnail Navigation (only visible on desktop hover) */}
              <div className="hidden">
                {/* Thumbnails are now completely hidden */}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-red-600/5 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-gray-200/20 rounded-full -z-10 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;