import React from 'react';
import faq from '../assets/faq.png';

function FAQ() {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-white relative">
            {/* FAQ Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="text-[#ecc9eb] text-[20vw] md:text-[500px] font-black font-['Inter'] text-center">
                    faq
                </div>
            </div>

            {/* Left Side: Image */}
            <div className="md:w-1/2 h-full relative z-10">
                <img
                    className="w-full h-full object-cover"
                    src={faq}
                    alt="FAQ Background"
                />
            </div>

            {/* Right Side: FAQ Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center p-6 z-20 mt-10 md:mt-0">
                {/* Questions */}
                <div className="w-full flex flex-col space-y-4">
                    {[
                        "Registration Cost?",
                        "Mode of Hackathon?",
                        "Can We Register a Team?",
                        "Time Period of Product Development Phase?",
                        "Participation Criteria?"
                    ].map((question, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#ffe0f0] rounded-[40px] border-8 border-[#ffb3c1] flex flex-col transition-all duration-300 hover:bg-[#ffc9d9] hover:shadow-lg cursor-pointer"
                        >
                            <h3 className="text-black text-3xl font-medium font-['Inter']">
                                {question}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
