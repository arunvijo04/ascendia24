import React from 'react';

function Contact() {
    return (
        <div id="contact" className="w-full h-screen relative">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#ecc9eb]/40" />

            {/* Title */}
            <div className="absolute bottom-0 w-full text-center">
                <div className="text-white text-[28vw] font-black font-['Inter'] z-0 pointer-events-none">
                    contact
                </div>
            </div>

            {/* Map and Form Container */}
            <div className="flex justify-center items-center flex-wrap absolute w-full top-1/2 transform -translate-y-1/2 p-4">
                {/* Embedded Map */}
                <div className="w-full md:w-1/2 h-64 md:h-80 lg:h-[400px] p-4">
                    <iframe
                        title="Google Map"
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098003!2d144.9537363153185!3d-37.8172099797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7cbd75%3A0x5045675218ceedb!2sRMIT%20University%20-%20Melbourne%20City%20Campus!5e0!3m2!1sen!2sau!4v1631950836170!5m2!1sen!2sau"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Submission Form */}
                <div className="w-full md:w-1/2 p-4">
                    <form className="bg-[#edcaec]/50 rounded-[80px] p-8">
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold">Name</label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold">Email</label>
                            <input
                                type="email"
                                className="w-full h-12 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-black font-bold">Message</label>
                            <textarea
                                className="w-full h-32 px-4 rounded-[40px] border-2 border-gray-300 focus:outline-none"
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
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black text-xl font-semibold font-['Inter'] text-center">
                <div>COPYRIGHT WIE RSET. ALL RIGHTS RESERVED.</div>
                <div>DESIGNED BY ARUN VIJO</div>
            </div>
        </div>
    );
}

export default Contact;
