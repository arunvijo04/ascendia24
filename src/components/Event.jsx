import React from 'react';
import graduated from '../assets/graduated.png';
import mentoring from '../assets/mentoring.png';
import workshop from '../assets/workshop.png';
import extracurricular from '../assets/extracurricular.png';
import networking from '../assets/networking.png';

function Event() {
    return (
        <div id="event" className="relative w-full min-h-screen flex items-center justify-center">
            {/* Background Text */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-[#ecc9eb]/20 text-[25vw] md:text-[500px] font-black font-['Inter'] w-full text-center z-0 pointer-events-none">
                event
            </div>

            {/* Flex Container for Event Cards */}
            <div className="flex flex-wrap justify-center items-center w-full max-w-[1500px] mx-auto z-10 relative">
                {/* Event Card 1 */}
                <div className="relative bg-[#dce9f5] rounded-[20px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center p-4">
                        <img className="w-[60px] h-[60px] mr-4" src={graduated} alt="Graduated" />
                        <div className="text-black text-[24px] font-extrabold font-['Roboto']">100+ Students</div>
                    </div>
                </div>
                {/* Event Card 2 */}
                <div className="relative bg-[#dce9f5] rounded-[20px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center p-4">
                        <img className="w-[60px] h-[60px] mr-4" src={mentoring} alt="Mentoring" />
                        <div className="text-black text-[24px] font-extrabold font-['Roboto']">15+ Mentors</div>
                    </div>
                </div>
                {/* Event Card 3 */}
                <div className="relative bg-[#dce9f5] rounded-[20px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center p-4">
                        <img className="w-[60px] h-[60px] mr-4" src={workshop} alt="Workshop" />
                        <div className="text-black text-[24px] font-extrabold font-['Roboto']">Hands-on Workshops</div>
                    </div>
                </div>
                {/* Event Card 4 */}
                <div className="relative bg-[#dce9f5] rounded-[20px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center p-4">
                        <img className="w-[60px] h-[60px] mr-4" src={networking} alt="Networking" />
                        <div className="text-black text-[24px] font-extrabold font-['Roboto']">Networking Activities</div>
                    </div>
                </div>
                {/* Event Card 5 */}
                <div className="relative bg-[#dce9f5] rounded-[20px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9f4] transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center p-4">
                        <img className="w-[60px] h-[60px] mr-4" src={extracurricular} alt="Extracurricular" />
                        <div className="text-black text-[24px] font-extrabold font-['Roboto']">Fun Activities</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
