import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets folder
import s1 from '../assets/s5.png'; // Ensure the correct path to your images
import s2 from '../assets/s6.png';
import s3 from '../assets/s7.png';
import s4 from '../assets/s8.png';

function Sponsors() {
    const sponsors = [
        { name: 'Infosys', image: s1 },
        { name: 'Google', image: s2 },
        { name: 'Microsoft', image: s3 },
        { name: 'LinkedIn', image: s4 },
    ];

    return (
        <div className="w-full min-h-screen relative flex flex-col items-center overflow-hidden p-4 md:p-8">
            {/* Background Overlay with Animation */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40 opacity-90 animate-fade" />

            {/* Section Title */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-[12vw] md:text-[400px] font-black font-['Inter'] w-full text-center">
                Sponsors
            </div>

            {/* Sponsors Boxes */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full max-w-6xl">
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-[220px] sm:h-[321px] bg-[#ecc9f5]/40 rounded-[30px] sm:rounded-[60px] border-8 border-white overflow-hidden group"
                        whileHover={{ scale: 1.05 }} // Hover effect
                        initial={{ opacity: 0, y: 20 }} // Initial landing effect
                        animate={{ opacity: 1, y: 0 }} // Animate to visible
                        transition={{ 
                            duration: 0.3, // Duration for both initial and hover transitions
                            delay: index * 0.1 // Staggered effect
                        }}
                    >
                        {/* Image Placeholder */}
                        <img
                            src={sponsor.image}
                            alt={sponsor.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Sponsor Name */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-black bg-white bg-opacity-70 px-2 rounded">
                            {sponsor.name}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CSS keyframe animation for fade-in effect */}
            <style jsx>{`
                @keyframes fade {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade {
                    animation: fade 1s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}

export default Sponsors;
