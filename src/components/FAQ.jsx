import React from 'react';
import faq from '../assets/faq.png';

function FAQ() {
    return (
        <div className="w-[1400px] h-[1000px] relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-[#ecc9eb]/40 text-[500px] font-black font-['Inter'] w-full text-center">
                faq
            </div>
            <div className="w-[719px] h-[972px] left-[628px] top-0 absolute">
                <div className="w-[558px] h-[118px] left-[87px] top-[481px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                <div className="w-[572px] h-[124px] left-[87px] top-[640px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                <div className="left-[139px] top-[182px] absolute text-black text-5xl font-medium font-['Inter']">registration cost?</div>
                <div className="left-[114px] top-[511px] absolute text-black text-5xl font-medium font-['Inter']">mode of hackathon?</div>
                <div className="left-[139px] top-[665px] absolute text-black text-5xl font-medium font-['Inter']">can we register a team?</div>
                <div className="left-[132px] top-[830px] absolute text-black text-5xl font-medium font-['Inter']">time period of product<br/>development phase?</div>
                <div className="left-[127px] top-[352px] absolute text-black text-5xl font-medium font-['Inter']">participation criteria?</div>
                <div className="w-[574px] h-[121px] left-[85px] top-[315px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                <div className="w-[597px] h-[119px] left-[87px] top-[155px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                <div className="w-[632px] h-[163px] left-[87px] top-[809px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
            </div>
            <img className="w-[720px] h-[760px] left-0 top-[155px] absolute" src={faq} alt="FAQ Background" />
        </div>
    );
}

export default FAQ;
