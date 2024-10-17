import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets folder
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s7 from '../assets/s7.png';

function Speakers() {
    const speakers = [
        { name: 'Aswathy Sreekanth', image: s7 },
        { name: 'Rini Sara Markose', image: s1 },
        { name: 'Ajoe Joseph', image: s2 },
        { name: 'Vaishnavi Balgia', image: s3 },
        { name: 'Theertha Avinash', image: s4 },
        { name: 'Rini Sara Markose', image: s1 },
    ];

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center p-8 md:p-16 bg-gradient-to-b from-white via-purple-50 to-purple-100">
            {/* Title for Mobile */}
            <div className="text-black text-4xl md:text-5xl font-bold font-rubik-mono-one-regular text-center relative z-10 mt-8 mb-10">
                Speakers
            </div>

            {/* Background "Speakers" Text */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
                <div className="text-[#ecc9eb]/40 text-[20vw] md:text-[300px] font-black font-rubik-mono-one-regular text-center">
                    speakers
                </div>
            </div>

            {/* Inverted Pyramid Speakers Grid */}
            <div className="relative z-10 w-full max-w-6xl">
                {/* Top Row - 2 Speakers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                    {speakers.slice(0, 2).map((speaker, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full h-[300px] md:h-[350px] bg-white shadow-lg rounded-[40px] overflow-hidden group"
                            whileHover={{ scale: 1.03 }} // Hover effect
                            initial={{ opacity: 0, y: 30 }} // Initial effect
                            animate={{ opacity: 1, y: 0 }} // Animate in
                            transition={{ 
                                duration: 0.4, // Smooth transition
                                delay: index * 0.1 // Staggered effect
                            }}
                        >
                            {/* Speaker Image */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                                />
                                {/* Dark Overlay for better text visibility */}
                                <div className="absolute inset-0 bg-black opacity-20" />
                            </div>

                            {/* Speaker Name */}
                            <div className="absolute bottom-0 w-full text-center py-3 text-white font-bold text-2xl">
                                {speaker.name}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row - 3 Speakers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 justify-center">
                    {speakers.slice(2, 5).map((speaker, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full h-[300px] md:h-[350px] bg-white shadow-lg rounded-[40px] overflow-hidden group"
                            whileHover={{ scale: 1.03 }} // Hover effect
                            initial={{ opacity: 0, y: 30 }} // Initial effect
                            animate={{ opacity: 1, y: 0 }} // Animate in
                            transition={{ 
                                duration: 0.4, // Smooth transition
                                delay: (index + 2) * 0.1 // Staggered effect
                            }}
                        >
                            {/* Speaker Image */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                                />
                                {/* Dark Overlay for better text visibility */}
                                <div className="absolute inset-0 bg-black opacity-20" />
                            </div>

                            {/* Speaker Name */}
                            <div className="absolute bottom-0 w-full text-center py-3 text-white font-bold text-2xl">
                                {speaker.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
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

export default Speakers;
