import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

function Speakers() {
    return (
        <div className="w-full h-[900px] relative flex flex-col items-center overflow-hidden">
            {/* Background Overlay with Animation */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40 opacity-90 animate-fade" />

            <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-[400px] font-black font-['Inter'] w-full text-center">
                speakers
            </div>

            {/* Speakers Boxes */}
            <div className="flex justify-center flex-wrap mt-10">
                {/* Map through speakers for cleaner code */}
                {['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4'].map((speaker, index) => (
                    <motion.div
                        key={index}
                        className="relative w-[441px] h-[321px] m-4 bg-[#ecc9f5]/40 rounded-[60px] border-8 border-white transition-transform duration-300 group"
                        whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }} // Hover effect
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-4xl text-black transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            {speaker}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-4xl text-white opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                            {speaker}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Add a CSS keyframe animation for fade-in effect */}
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
