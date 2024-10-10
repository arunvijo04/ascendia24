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
        <div id="about" className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#ecc9eb]/40 transition-opacity duration-700" />
            <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-[12vw] md:text-[500px] font-black font-rubik-mono-one-regular w-full text-center">
                about
            </div>

            <div className="relative container mx-auto flex flex-col md:flex-row items-start justify-between p-4 md:p-8">
                {/* Left Section for RSET paragraph and girl image */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start">
                    <h1 className="text-black text-[8vw] md:text-[64px] font-extrabold font-['Roboto']">IEEE SB RSET</h1>
                    <motion.div
                        initial="initial"
                        animate={isVisible ? "animate" : "initial"}
                        variants={fadeInVariants}
                        className="mt-4 text-center md:text-left"
                    >
                        <span className="text-black text-[4vw] md:text-[28px] font-extrabold font-['Roboto']">Rajagiri </span>
                        <span className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto']">
                            School of Engineering & Technology (Autonomous), Kakkanad, Kochi is a premier Institution affiliated to A P J Abdul Kalam Technological University. The University Grants Commission has granted autonomous status to RSET from 2020 onwards. RSET is an AICTE approved college offering excellence in engineering education and research. Undergraduate Programmes offered by the college are NBA accredited, and the college is accredited 'A' grade in the second cycle by NAAC.
                        </span>
                    </motion.div>
                    {/* Girl Image Below the RSET paragraph */}
                    <img
                        className="w-full h-auto max-w-md md:max-w-none transition-transform duration-700 ease-in-out hover:scale-105 mt-4 mb-4"
                        src={girl}
                        alt="Girl"
                    />
                </div>

                {/* Right Section for RSET image and ASCENDIA paragraph */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start justify-start mt-8 md:mt-0">
                    <img
                        className="w-full h-auto max-w-md md:max-w-none transition-transform duration-700 ease-in-out hover:scale-105 mb-4"
                        src={rset}
                        alt="RSET"
                    />
                    <h2 className="text-black text-[6vw] md:text-[64px] font-extrabold font-['Roboto'] text-center md:text-left">What is ASCENDIA?</h2>
                    <motion.p
                        initial="initial"
                        animate={isVisible ? "animate" : "initial"}
                        variants={bubbleVariants}
                        className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto'] mt-4 text-center md:text-left"
                    >
                        Ascendia is a two-day upskilling camp exclusively designed for girls, focusing on both soft and technical skills development. While women are often celebrated for their commitment and excellence, they sometimes face barriers due to a lack of specific skills. Ascendia aims to bridge these gaps, empowering participants to discover their potential and guide them on a path of personal and professional growth.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
