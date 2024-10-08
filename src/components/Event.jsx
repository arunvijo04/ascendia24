import React from 'react';
import graduated from '../assets/graduated.png';
import mentoring from '../assets/mentoring.png';
import workshop from '../assets/workshop.png';
import extracurricular from '../assets/extracurricular.png';
import networking from '../assets/networking.png';


function Event() {
    return (
        <div id="event" className="w-[1435px] h-[900px] relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 text-[#ecc9eb]/40 text-[500px] font-black font-['Inter'] w-full text-center">
                event
            </div>
            <div className="w-[1300px] h-[625px] left-[58px] top-[158px] absolute">
                <div className="w-[594px] h-[137px] left-0 top-[18px] absolute bg-[#dce9f5] rounded-[180px]" />
                <div className="w-[594px] h-[137px] left-[706px] top-0 absolute bg-[#dce9f5] rounded-[180px]" />
                <div className="w-[594px] h-[137px] left-[706px] top-[278px] absolute bg-[#dce9f5] rounded-[180px]" />
                <div className="w-[594px] h-[137px] left-[409px] top-[488px] absolute bg-[#dce9f5] rounded-[180px]" />
                <div className="w-[594px] h-[137px] left-0 top-[278px] absolute bg-[#dce9f5] rounded-[180px]" />
                <div className="left-[834px] top-[46px] absolute text-black text-[40px] font-extrabold font-['Roboto']">100+ Students</div>
                <div className="w-[411px] left-[760px] top-[308px] absolute text-black text-[40px] font-extrabold font-['Roboto']">Hands-on Workshops and Training</div>
                <div className="left-[583px] top-[534px] absolute text-black text-[40px] font-extrabold font-['Roboto']">Fun Activities</div>
                <img className="w-[85px] h-[85px] left-[42px] top-[43px] absolute" src={graduated} alt="Placeholder 1" />
                <img className="w-[92px] h-[92px] left-[1159px] top-[23px] absolute" src={mentoring} alt="Placeholder 2" />
                <img className="w-[91px] h-[90px] left-[1159px] top-[302px] absolute" src={workshop} alt="Placeholder 3" />
                <img className="w-[110px] h-[111px] left-[450px] top-[502px] absolute" src={networking} alt="Placeholder 4" />
                <div className="left-[180px] top-[323px] absolute text-black text-[40px] font-extrabold font-['Roboto']">15+ Mentors</div>
                <img className="w-[92px] h-[91px] left-[45px] top-[301px] absolute" src={extracurricular} alt="Placeholder 5" />
                <div className="left-[143px] top-[63px] absolute text-black text-[40px] font-extrabold font-['Roboto']">Networking Activities</div>
            </div>
        </div>
    );
}

export default Event;
