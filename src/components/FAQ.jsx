import React, { useState } from 'react';
import faq from '../assets/faq.png';

function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-white relative">
            {/* FAQ Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="text-[#ecc9eb]/40 text-[20vw] md:text-[500px] font-black font-rubik-mono-one-regular text-center">
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
                        { 
                            "question": "What is the registration cost?", 
                            "answer": "Rs 300 for IEEE members and Rs 600 for non-members." 
                        },
                        { 
                            "question": "What is the camp format?", 
                            "answer": "The camp is offline at Rajagiri School of Engineering." 
                        },
                        { 
                            "question": "What are the benefits?", 
                            "answer": "Gain practical skills and expand your network." 
                        },
                        { 
                            "question": "How long is the camp?", 
                            "answer": "The camp lasts 2 days: October 18-19, 2024." 
                        },
                        { 
                            "question": "Who can participate?", 
                            "answer": "Young women engineers eager to grow personally and professionally." 
                        }
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className={`relative w-full p-4 bg-[#ffe0f0] rounded-[20px] border-4 border-[#ffb3c1] transition-all duration-300 transform-style-3d cursor-pointer ${activeQuestion === index ? 'flipped' : ''}`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="front face w-full h-full text-black text-xl md:text-2xl font-medium font-['Montserrat'] flex justify-center items-center">
                                {faq.question}
                            </div>
                            <div className={`back face w-full h-full absolute top-0 left-0 p-4 bg-[#ffc9d9] text-black text-base rounded-[20px] flex items-center justify-center transition-opacity duration-300 ${activeQuestion === index ? 'opacity-100' : 'opacity-0'}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
