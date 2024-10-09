import React from 'react';

function Contact() {
    return (
        <div id="contact" className="w-full h-screen relative">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40" />

            {/* Title */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center md:justify-start">
                <div className="text-white text-[20vw] md:text-[28vw] font-extrabold tracking-tight font-['Poppins'] z-0 pointer-events-none md:ml-8">
                    Contact
                </div>
            </div>

            {/* Map and Form Container */}
            <div className="flex flex-col md:flex-row justify-center items-center absolute w-full top-1/2 transform -translate-y-1/2 p-4 space-y-8 md:space-y-0 md:space-x-8">
                {/* Embedded Map */}
                <div className="w-full md:w-1/2 h-64 md:h-80 lg:h-[400px] p-4">
                    <iframe
                        title="Google Map"
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9770878101285!2d76.34925391479104!3d9.99821269285732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d816d6f3b63%3A0xf4a39a5b4a066a1c!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1696759691739!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Submission Form */}
                <div className="w-full md:w-1/2 p-4">
                    <form className="bg-[#edcaec]/50 rounded-[40px] p-6 md:p-8 shadow-lg">
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold text-sm md:text-base">Name</label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none focus:border-[#ecc9f5] transition duration-300"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold text-sm md:text-base">Email</label>
                            <input
                                type="email"
                                className="w-full h-12 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none focus:border-[#ecc9f5] transition duration-300"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold text-sm md:text-base">Message</label>
                            <textarea
                                className="w-full h-32 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none focus:border-[#ecc9f5] transition duration-300"
                                placeholder="Your message here"
                                required
                            />
                        </div>
                        <button className="w-full h-12 bg-[#ecc9f5] text-black font-bold rounded-[40px] hover:bg-[#d5b1d8] transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Information */}
            <div className="absolute bottom-0 w-full text-center p-4">
                <div className="text-black text-sm md:text-xl font-semibold font-['Poppins']">
                    <div>COPYRIGHT WIE RSET. ALL RIGHTS RESERVED.</div>
                    <div>DESIGNED BY ARUN VIJO</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
