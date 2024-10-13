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
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40 transition-opacity duration-700" />

            {/* Section title */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-[12vw] md:text-[500px] font-black font-rubik-mono-one-regular w-full text-center">
                about
            </div>

            {/* Grid layout */}
            <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
                
                {/* Top left: RSET paragraph */}
                <motion.div
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    variants={fadeInVariants}
                    className="flex flex-col justify-center"
                >
                    <h1 className="text-black text-[8vw] md:text-[64px] font-extrabold font-['Roboto']">IEEE SB RSET</h1>
                    <p className="mt-4 text-black text-[4vw] md:text-[28px] font-extrabold font-['Roboto']">
                        Rajagiri
                    </p>
                    <p className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto']">
                        School of Engineering & Technology (Autonomous), Kakkanad, Kochi is a premier institution affiliated to A P J Abdul Kalam Technological University. The University Grants Commission has granted autonomous status to RSET from 2020 onwards. RSET is an AICTE approved college offering excellence in engineering education and research. Undergraduate Programmes offered by the college are NBA accredited, and the college is accredited 'A' grade in the second cycle by NAAC.
                    </p>
                </motion.div>

                {/* Top right: RSET image */}
                <motion.img
                    className="w-full h-auto max-w-md md:max-w-none transition-transform duration-700 ease-in-out hover:scale-105"
                    src={rset}
                    alt="RSET"
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    variants={bubbleVariants}
                />

                {/* Bottom left: Girl image */}
                <motion.img
                    className="w-full h-auto max-w-md md:max-w-none transition-transform duration-700 ease-in-out hover:scale-105"
                    src={girl}
                    alt="Girl"
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    variants={bubbleVariants}
                />

                {/* Bottom right: ASCENDIA paragraph */}
                <motion.div
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    variants={fadeInVariants}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-black text-[6vw] md:text-[64px] font-extrabold font-['Roboto'] text-center md:text-left">
                        What is ASCENDIA?
                    </h2>
                    <p className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto'] mt-4 text-center md:text-left">
                        Ascendia is a two-day upskilling camp exclusively designed for girls, focusing on both soft and technical skills development. While women are often celebrated for their commitment and excellence, they sometimes face barriers due to a lack of specific skills. Ascendia aims to bridge these gaps, empowering participants to discover their potential and guide them on a path of personal and professional growth.
                    </p>
                </motion.div>
            </div>

            {/* Styles for mobile responsiveness */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .md\\:grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}

export default About;
