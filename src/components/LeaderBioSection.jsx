import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

/**
 * Enhanced Leader Bio Section with portrait images and better layout
 * @param {Object} props
 * @param {Object} props.leader - Leader data (name, title, bio, imageUrl, socialLinks)
 * @param {string} props.imagePosition - 'left' or 'right'
 * @param {string} props.ariaLabel - ARIA label for the section
 * @param {number} props.animationDelay - Animation delay for Framer Motion
 * @returns {JSX.Element}
 */
const LeaderBioSection = ({ leader, imagePosition = 'left', ariaLabel, animationDelay = 0 }) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: animationDelay }}
            className="py-12 md:py-16"
            role="region"
            aria-label={ariaLabel || `${leader.name} biography section`}
        >
            <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${!isImageLeft ? 'md:grid-flow-dense' : ''}`}>

                    {/* Image Section */}
                    <div className={`relative ${isImageLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                        <div className="relative group">
                            <img
                                src={leader.imageUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80'}
                                alt={`Portrait of ${leader.name}`}
                                className="w-full max-w-sm mx-auto aspect-[4/5] object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Social Links Overlay */}
                            {leader.socialLinks && leader.socialLinks.length > 0 && (
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {leader.socialLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                                            aria-label={`${leader.name}'s ${link.platform} profile`}
                                        >
                                            <Linkedin className="h-5 w-5 text-red-600" />
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-100 rounded-full -z-10 hidden md:block"></div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-100 rounded-full -z-10 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isImageLeft ? 'md:col-start-2' : 'md:col-start-1'} space-y-6`}>
                        <div>
                            <span className="text-sm font-semibold uppercase text-red-600 tracking-wider mb-2 block">
                                Leadership
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {leader.name}
                            </h3>
                            <p className="text-xl text-red-600 font-semibold mb-6 uppercase tracking-wide">
                                {leader.title}
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {leader.bio || 'No biography available.'}
                            </p>
                        </div>

                        {/* Additional Info or CTA */}
                        <div className="pt-4">
                            <div className="flex items-center space-x-4">
                                {leader.socialLinks && leader.socialLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-red-600 rounded-full hover:bg-blue-100 transition-colors duration-200 text-sm font-medium"
                                    >
                                        <Linkedin className="h-4 w-4 mr-2" />
                                        Connect on {link.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default React.memo(LeaderBioSection);