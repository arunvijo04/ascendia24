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
        <div id="hero" className="w-full h-[1028px] relative flex flex-col items-center justify-center">
            <img className="w-full h-full object-cover absolute top-0 left-0" src={bg} alt="Background" />

            <div className="bg-[#f5e4f5] rounded-[45px] p-10 relative z-10 flex flex-col items-center">
                <div className="text-[#05709c] text-[160px] font-extrabold font-['Rubik']">
                    ASCENDIA
                </div>
                <div className="text-center mt-4">
                    <span className="text-black text-5xl font-medium font-['Roboto']">2 Day Camp organized by </span>
                    <span className="text-[#05709c] text-5xl font-medium font-['Roboto'] animate-writing">WIE RSET</span>
                </div>
                <button
                    onClick={handleRegisterClick}
                    className="mt-6 w-[319px] h-[72.39px] bg-[#e0ade0] rounded-[20px] flex justify-center items-center shadow-md hover:bg-[#d295d2] transition duration-300"
                >
                    <span className="text-black text-[40px] font-extrabold font-['Roboto']">Register Now</span>
                </button>
            </div>

            {/* Modal for Google Form */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-5 relative">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl">✖️</button>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfCGC2oZoiIaN5-LHLoPJpMGQf8HqVh-MozqjjtVTzADdM2Mw/viewform?embedded=true"
                            width="640"
                            height="600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
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
