import React from 'react';
import { motion } from 'framer-motion';
import LeadershipSection from '@/components/LeadershipSection';
import LeaderBioSection from '@/components/LeaderBioSection';
import { leadershipTeam } from '@/components/constants/leadershipTeam';

/**
 * Complete Leadership Page Example
 * Shows how to use both the grid layout and individual bio sections
 * @returns {JSX.Element}
 */
const LeadershipPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-4 block">
                            Our Leadership
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Meet the Team Behind
                            <span className="text-red-600 block">Our Success</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our experienced leadership team brings together decades of expertise across
                            real estate, logistics, agriculture, and business development to drive
                            innovation and sustainable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Individual Leader Bio Sections */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Leadership Spotlight
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get to know our key leaders and their unique contributions to our organization
                        </p>
                    </motion.div>

                    {/* Featured Leaders - CEO and COO */}
                    {leadershipTeam.slice(0, 2).map((leader, index) => (
                        <LeaderBioSection
                            key={leader.name}
                            leader={leader}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                            animationDelay={index * 0.2}
                            ariaLabel={`${leader.name} - ${leader.title} biography`}
                        />
                    ))}
                </div>
            </section>

            {/* Main Leadership Grid Section */}
            <LeadershipSection />



            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Work With Our Team?
                        </h2>
                        <p className="text-xl text-red-100 mb-8 leading-relaxed">
                            Whether you're looking for real estate solutions, logistics services,
                            agricultural partnerships, or business opportunities, our leadership
                            team is ready to help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Get in Touch
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LeadershipPage;