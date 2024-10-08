import React, { useState } from 'react';
import bg from '../assets/bg.png';

function Hero() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRegisterClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div id="hero" className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <img className="w-full h-full object-cover absolute top-0 left-0 z-0" src={bg} alt="Background" />

            {/* Content Container */}
            <div className="bg-[#f5e4f5] rounded-[45px] p-10 relative z-10 flex flex-col items-center text-center mx-4 md:mx-0">
                <h1 className="text-[#05709c] text-[12vw] md:text-[160px] font-extrabold font-['Oswald'] transform transition-transform duration-700 ease-in-out hover:scale-105">
                    ASCENDIA
                </h1>
                <div className="mt-4 text-[4vw] md:text-5xl font-medium font-['Roboto']">
                    <span className="text-black">2 Day Camp organized by </span>
                    <span className="text-[#05709c] relative after:absolute after:top-0 after:right-0 after:h-full after:border-r-[3px] after:border-[#05709c] animate-typing">WIE RSET</span>
                </div>
                <button
                    onClick={handleRegisterClick}
                    className="mt-6 w-[80vw] md:w-[319px] h-[10vh] md:h-[72.39px] bg-[#e0ade0] rounded-[20px] flex justify-center items-center shadow-md hover:bg-[#d295d2] hover:scale-105 transition-transform duration-300"
                >
                    <span className="text-black text-[5vw] md:text-[40px] font-extrabold font-['Roboto']">Register Now</span>
                </button>
            </div>

            {/* Modal for Google Form */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-5 relative w-[90vw] md:w-[640px] h-[80vh] md:h-[600px]">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl">✖️</button>
                        <iframe
                            title="Registration Form"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfCGC2oZoiIaN5-LHLoPJpMGQf8HqVh-MozqjjtVTzADdM2Mw/viewform?embedded=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className="rounded-lg"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
