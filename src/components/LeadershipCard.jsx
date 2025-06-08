import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

/**
 * Enhanced Leadership Card Component with portrait images and better spacing
 * @param {Object} props
 * @param {Object} props.leader - Leader data (name, title, bio, imageUrl, socialLinks)
 * @param {number} props.index - Index for staggered animations
 * @returns {JSX.Element}
 */
const LeadershipCard = ({ leader, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
            {/* Portrait Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={leader.imageUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80'}
                    alt={`Portrait of ${leader.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links Overlay */}
                {leader.socialLinks && leader.socialLinks.length > 0 && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {leader.socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 mr-2"
                                aria-label={`${leader.name}'s ${link.platform} profile`}
                            >
                                <Linkedin className="h-4 w-4 text-red-600" />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-200">
                    {leader.name}
                </h3>
                <p className="text-red-600 font-semibold text-sm mb-3 uppercase tracking-wide">
                    {leader.title}
                </p>
                {/*<p className="text-gray-600 text-sm leading-relaxed line-clamp-4">*/}
                {/*    {leader.bio || 'No biography available.'}*/}
                {/*</p>*/}
            </div>
        </motion.div>
    );
};

export default React.memo(LeadershipCard);