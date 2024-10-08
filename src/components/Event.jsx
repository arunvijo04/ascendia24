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
                <div className="relative bg-[#dce9f5] rounded-[180px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out">
                    <img className="absolute w-[85px] h-[85px] left-4 top-4" src={graduated} alt="Graduated" />
                    <div className="absolute left-[100px] top-[30px] text-black text-[24px] font-extrabold font-['Roboto']">100+ Students</div>
                </div>
                {/* Event Card 2 */}
                <div className="relative bg-[#dce9f5] rounded-[180px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out">
                    <img className="absolute w-[92px] h-[92px] right-4 top-4" src={mentoring} alt="Mentoring" />
                    <div className="absolute left-4 top-[30px] text-black text-[24px] font-extrabold font-['Roboto']">15+ Mentors</div>
                </div>
                {/* Event Card 3 */}
                <div className="relative bg-[#dce9f5] rounded-[180px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out">
                    <img className="absolute w-[91px] h-[90px] right-4 top-4" src={workshop} alt="Workshop" />
                    <div className="absolute left-4 top-[30px] text-black text-[24px] font-extrabold font-['Roboto']">Hands-on Workshops</div>
                </div>
                {/* Event Card 4 */}
                <div className="relative bg-[#dce9f5] rounded-[180px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out">
                    <img className="absolute w-[110px] h-[111px] right-4 top-4" src={networking} alt="Networking" />
                    <div className="absolute left-4 top-[30px] text-black text-[24px] font-extrabold font-['Roboto']">Networking Activities</div>
                </div>
                {/* Event Card 5 */}
                <div className="relative bg-[#dce9f5] rounded-[180px] w-[90%] sm:w-[400px] h-[137px] mx-4 mb-4 hover:shadow-xl hover:bg-[#c4d9eb] transition-shadow duration-300 ease-in-out">
                    <img className="absolute w-[92px] h-[91px] left-4 top-4" src={extracurricular} alt="Extracurricular" />
                    <div className="absolute left-[100px] top-[30px] text-black text-[24px] font-extrabold font-['Roboto']">Fun Activities</div>
                </div>
            </div>
        </div>
    );
}

export default Event;
