import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/bg.png';

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    // Function to update scroll position
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Landing page animation settings
    const landingPageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    // Full description text
    const descriptionBeforeHighlight = "2 Day Camp organized by ";
    const highlightText = "WIE RSET";

    return (
        <motion.div 
            id="hero" 
            className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden" 
            variants={landingPageVariants}
            initial="initial"
            animate="animate"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
            }}
        >
            {/* Content Container */}
            <div className="bg-[#f5e4f5] rounded-[45px] p-6 md:p-8 relative z-10 flex flex-col items-center text-center mx-2 md:mx-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h1 className="text-[#05709c] text-[10vw] md:text-[160px] font-extrabold font-['Rubik'] transform transition-transform duration-700 ease-in-out hover:scale-105">
                    ASCENDIA
                </h1>
                <div className="mt-2 flex items-center justify-center text-[4vw] md:text-5xl font-medium font-['Rubik']">
                    {/* Animation for the description */}
                    {descriptionBeforeHighlight.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10 }} // Start from invisible and slightly below
                            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                            transition={{
                                duration: 0.5, // Duration for each character animation
                                delay: index * 0.1 // Delay based on character index
                            }}
                            style={{ display: 'inline-block' }} // Ensure characters are displayed inline
                        >
                            {char === ' ' ? '\u00A0' : char} {/* Render a non-breaking space for visual consistency */}
                        </motion.span>
                    ))}
                    {/* Highlighted text with animation */}
                    {highlightText.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10 }} // Start from invisible and slightly below
                            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                            transition={{
                                duration: 0.5, // Duration for each character animation
                                delay: (descriptionBeforeHighlight.length + index) * 0.1 // Delay based on character index
                            }}
                            style={{ display: 'inline-block', color: '#05709c' }} // Highlighted color
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                    {/* Ensure space between WIE and RSET */}
                    <motion.span
                        key="space"
                        initial={{ opacity: 0, y: 10 }} // Start from invisible and slightly below
                        animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                        transition={{
                            duration: 0.5,
                            delay: (descriptionBeforeHighlight.length + highlightText.length) * 0.1 // Adjust delay
                        }}
                        style={{ display: 'inline-block' }}
                    >
                        {'\u00A0'} {/* Non-breaking space */}
                    </motion.span>
                </div>
                <button
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfCGC2oZoiIaN5-LHLoPJpMGQf8HqVh-MozqjjtVTzADdM2Mw/viewform', '_blank')}
                    className="mt-4 w-[70vw] md:w-[319px] h-[7vh] md:h-[72.39px] bg-[#e0ade0] rounded-[20px] flex justify-center items-center shadow-md hover:bg-[#d295d2] hover:scale-105 transition-transform duration-300"
                >
                    <span className="text-black text-[4vw] md:text-[40px] font-extrabold font-['Rubik']">Register Now</span>
                </button>
            </div>
        </motion.div>
    );
}

export default Hero;
