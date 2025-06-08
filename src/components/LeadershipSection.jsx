import React from 'react';
import { motion } from 'framer-motion';
import LeadershipCard from './LeadershipCard';
import { leadershipTeam } from '@/components/constants/leadershipTeam';

/**
 * Main Leadership Section Component
 * Displays the full leadership team in a well-spaced grid layout
 * @returns {JSX.Element}
 */
const LeadershipSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/*<span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">*/}
                    {/*    Leadership Team*/}
                    {/*</span>*/}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experienced professionals driving innovation and excellence across all our business sectors
                    </p>
                </motion.div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {leadershipTeam.map((leader, index) => (
                        <LeadershipCard
                            key={leader.name}
                            leader={leader}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    {/*<div className="bg-red-50 rounded-2xl p-8 max-w-2xl mx-auto">*/}
                    {/*    <h3 className="text-2xl font-bold text-gray-900 mb-4">*/}
                    {/*        Join Our Team*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-gray-600 mb-6">*/}
                    {/*        We're always looking for talented individuals to join our growing team across all sectors.*/}
                    {/*    </p>*/}
                    {/*    <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200">*/}
                    {/*        View Opportunities*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </motion.div>
            </div>
        </section>
    );
};

export default LeadershipSection;