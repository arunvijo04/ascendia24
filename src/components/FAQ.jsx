import React, { useState } from 'react';
import faq from '../assets/faq.png';

function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-white relative">
            {/* FAQ Title for Mobile */}
            <div className="text-black text-4xl font-rubik text-center md:hidden relative z-10 mt-8">
                FAQ
            </div>

            {/* FAQ Background Text for Larger Screens */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
                <div className="text-[#ecc9eb]/40 text-[20vw] md:text-[500px] font-extrabold font-rubik text-center">
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
                            "question": "What is the registration cost for attending the camp, and are there any discounts available?", 
                            "answer": "The registration cost is Rs 300 for IEEE members and Rs 600 for non-members. Early bird registration is available for Rs 250 for members." 
                        },
                        { 
                            "question": "Can you describe the camp format? Will there be any hands-on activities or workshops?", 
                            "answer": "The camp will be held offline at Rajagiri School of Engineering and will include a mix of workshops, guest lectures, and hands-on activities to enhance learning." 
                        },
                        { 
                            "question": "What specific benefits can participants expect from attending this camp?", 
                            "answer": "Participants will gain practical skills in engineering, have networking opportunities with professionals, and receive certificates upon completion." 
                        },
                        { 
                            "question": "How long is the camp scheduled to last, and what are the daily timings?", 
                            "answer": "The camp lasts for 2 days from October 18-19, 2024, with sessions running from 9 AM to 5 PM each day." 
                        },
                        { 
                            "question": "Who is eligible to participate in this camp, and are there any prerequisites?", 
                            "answer": "The camp is designed for young women engineers eager to grow personally and professionally. No specific prerequisites are required, but a basic understanding of engineering principles is beneficial." 
                        }
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className={`relative w-full p-5 bg-[#f5e1f5] rounded-[15px] border-4 border-[#ffb3c1] transition-all duration-300 cursor-pointer hover:bg-[#ffe0f0] ${activeQuestion === index ? 'shadow-lg' : ''}`}
                            onClick={() => toggleQuestion(index)}
                        >
                            {/* Front Side: Question */}
                            <div className="front face w-full h-full text-black text-lg md:text-xl font-rubik flex justify-center items-center">
                                {faq.question}
                            </div>
                            
                            {/* Back Side: Answer */}
                            <div className={`back face w-full h-full absolute top-0 left-0 p-5 bg-[#ffc9d9] text-black text-base md:text-lg rounded-[15px] flex items-center justify-center transition-opacity duration-300 ${activeQuestion === index ? 'opacity-100' : 'opacity-0'}`}>
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
