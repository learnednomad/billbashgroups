import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BusinessesSection from "@/components/BusinessesSection";
import Stats from "@/components/Stats";
import CtaSection from "@/components/CtaSection";
import {
    Building2,
    Truck,
    Wheat,
    Settings,
    Award,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    Quote
} from "lucide-react";

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
    const reasons = [
        {
            icon: Award,
            title: "Proven Excellence",
            description: "Over a decade of delivering exceptional results across multiple industries with uncompromising quality standards."
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Our experienced professionals bring deep industry knowledge and innovative solutions to every project."
        },
        {
            icon: Target,
            title: "Customer-Focused",
            description: "We prioritize your success with personalized service and solutions tailored to your specific needs."
        },
        {
            icon: CheckCircle,
            title: "Reliable Partnership",
            description: "Count on us for consistent, dependable service that builds lasting relationships and drives mutual growth."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Trusted Partner for Success
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We combine industry expertise with unwavering commitment to deliver exceptional value across all our business sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                                <reason.icon className="h-10 w-10 text-red-600" />
                                <div className="absolute inset-0 bg-red-600/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Enhanced Services Preview Section
const ServicesPreviewSection = () => {
    const services = [
        {
            icon: Building2,
            title: "Real Estate Solutions",
            description: "From residential properties to commercial developments, we provide comprehensive real estate services.",
            features: ["Property Sales", "Rental Management", "Development Projects", "Investment Consulting"]
        },
        {
            icon: Truck,
            title: "Truck Importation",
            description: "Reliable importation of high-quality trucks and commercial vehicles from trusted global suppliers.",
            features: ["Quality Assurance", "Customs Clearance", "Fleet Solutions", "After-Sales Support"]
        },
        {
            icon: Wheat,
            title: "Agricultural Operations",
            description: "Sustainable farming practices with modern agricultural techniques for optimal crop production.",
            features: ["Crop Farming", "Livestock Management", "Agri-Tech Solutions", "Supply Chain"]
        },
        {
            icon: Settings,
            title: "Spare Parts Supply",
            description: "Premium quality spare parts for trucks and heavy machinery with fast delivery and competitive pricing.",
            features: ["Genuine Parts", "Fast Delivery", "Technical Support", "Bulk Orders"]
        }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase text-red-400 tracking-wider mb-2 block">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Comprehensive Solutions Across Industries
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From real estate to agriculture, we deliver integrated services that drive growth and success for our clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-300 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-400">
                                                <CheckCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonials Section
const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Billbash Industries has been instrumental in our company's growth. Their truck importation services are unmatched in quality and reliability.",
            author: "Ahmed Hassan",
            position: "Fleet Manager",
            company: "Northern Logistics"
        },
        {
            quote: "Their real estate expertise helped us find the perfect commercial property. Professional service from start to finish.",
            author: "Fatima Ibrahim",
            position: "Business Owner",
            company: "Ibrahim Trading"
        },
        {
            quote: "The agricultural solutions provided by Billbash have significantly improved our crop yields. Highly recommended.",
            author: "Mohammed Ali",
            position: "Farm Owner",
            company: "Green Valley Farms"
        }
    ];

    return (
        <section className="py-20 bg-red-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
                        Client Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our valued clients have to say about working with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote className="h-10 w-10 text-red-600 mb-4" />
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                                <p className="text-sm text-red-600">{testimonial.position}</p>
                                <p className="text-sm text-gray-500">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Enhanced CTA Section
const EnhancedCtaSection = () => (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                    Join hundreds of satisfied clients who trust Billbash Industries Limited for their business needs.
                    Let's discuss how we can help you achieve your goals with our comprehensive solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center"
                    >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
                    >
                        Learn More About Us
                    </motion.button>
                </div>
            </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
);

const HomePage = () => {
    const heroData = {
        title: "Billbash Industries Limited",
        subtitleDesktop: "Real Estate | Truck Importation | Farming | Spare Parts",
        subtitleMobile:
            "Reliable services in real estate, truck importation, farming & spare parts — all in one place.",
        introParagraph:
            "Welcome to Billbash Industries Limited — your trusted partner in real estate, truck importation, farming, and spare parts sales. With an unwavering commitment to quality, integrity, and customer satisfaction, we deliver dependable solutions across key industries. Whether you're searching for premium properties, importing durable trucks, exploring sustainable agriculture, or sourcing top-quality spare parts, Billbash Industries Limited stands ready to serve your needs with professionalism and expertise.",
        ctaText: "Discover Our Solutions",
        ctaLink: "/about",
        showIntro: true,
        heroImage: {
            alt: "Panoramic view of Billbash Industries Limited's diverse operations including a modern skyline, a fleet of trucks, green farmland, and a well-organized spare parts warehouse",
            description: "Diverse operations of Billbash Industries Limited",
        },
    };

    return (
        <div className="overflow-hidden">
            <Hero pageData={heroData} />
            <AboutSection />
            <WhyChooseUsSection />
            {/*<BusinessesSection />*/}
            <ServicesPreviewSection />
            {/*<Stats />*/}
            <TestimonialsSection />
            <EnhancedCtaSection />
        </div>
    );
};

export default HomePage;