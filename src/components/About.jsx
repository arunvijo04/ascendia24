import React, { useEffect, useState } from 'react';
import rset from '../assets/rset.png';
import girl from '../assets/girl.png';
import { motion } from 'framer-motion';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const bubbleVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const fadeInVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">
            <div className="absolute inset-0 bg-[#ecc9eb]/40 transition-opacity duration-700" />
            <div className="text-white text-[8vw] md:text-[64px] font-black font-rubik-mono-one-regular text-center mb-8">
                ABOUT
            </div>

            <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Section for RSET paragraph and girl image */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-black text-[5vw] md:text-[32px] font-extrabold">IEEE SB RSET</h1>
                    <motion.div
                        initial="initial"
                        animate={isVisible ? "animate" : "initial"}
                        variants={fadeInVariants}
                        className="mt-2 text-center md:text-left"
                    >
                        <span className="text-black text-[3vw] md:text-[20px] font-extrabold">Rajagiri</span>
                        <span className="text-black text-[3vw] md:text-[20px] font-normal">
                            School of Engineering & Technology (Autonomous), Kakkanad, Kochi is a premier institution affiliated to A P J Abdul Kalam Technological University. RSET is an AICTE approved college offering excellence in engineering education and research.
                        </span>
                    </motion.div>
                    {/* Girl Image Below the RSET paragraph */}
                    <img
                        className="w-full h-auto max-w-xs md:max-w-sm transition-transform duration-700 ease-in-out hover:scale-105 mt-4"
                        src={girl}
                        alt="Girl"
                    />
                </div>

                {/* Right Section for RSET image and ASCENDIA paragraph */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        className="w-full h-auto max-w-xs md:max-w-sm transition-transform duration-700 ease-in-out hover:scale-105 mb-4"
                        src={rset}
                        alt="RSET"
                    />
                    <h2 className="text-black text-[5vw] md:text-[32px] font-extrabold text-center md:text-left">What is ASCENDIA?</h2>
                    <motion.p
                        initial="initial"
                        animate={isVisible ? "animate" : "initial"}
                        variants={bubbleVariants}
                        className="text-black text-[3vw] md:text-[20px] font-normal mt-2 text-center md:text-left"
                    >
                        Ascendia is a two-day upskilling camp designed for girls, focusing on both soft and technical skills development. It aims to bridge skill gaps, empowering participants to discover their potential and guide them on a path of personal and professional growth.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default About;
