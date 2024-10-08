import React from 'react';
import { motion } from 'framer-motion';

function Sponsors() {
    return (
        <div className="w-full min-h-screen relative flex flex-col items-center overflow-hidden p-4 md:p-8">
            {/* Background Overlay with Animation */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40 opacity-90 animate-fade" />

            {/* Section Title */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-[12vw] md:text-[400px] font-black font-['Inter'] w-full text-center">
                sponsors
            </div>

            {/* Speakers Boxes */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
                {/* Map through speakers for cleaner code */}
                {['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4'].map((speaker, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-[220px] sm:h-[321px] bg-[#ecc9f5]/40 rounded-[30px] sm:rounded-[60px] border-8 border-white overflow-hidden group"
                        whileHover={{ rotateY: 180 }} // Flip effect on hover
                        transition={{ duration: 0.8 }} // Smooth transition
                    >
                        <div className="absolute inset-0 backface-hidden flex items-center justify-center text-3xl sm:text-4xl text-black font-bold">
                            {/* Front Content */}
                            {speaker}
                        </div>
                        <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center bg-[#f2e1f2] text-2xl sm:text-3xl text-[#333] font-bold transition-opacity duration-300">
                            {/* Back Content (more info) */}
                            {speaker} Info
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
                .backface-hidden {
                    backface-visibility: hidden;
                    transform-style: preserve-3d;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}

export default Sponsors;
