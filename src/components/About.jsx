import React from 'react';
import rset from '../assets/rset.png';
import girl from '../assets/girl.png';

function About() {
    return (
        <div id="about" className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#ecc9eb]/40 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-white text-[6vw] md:text-[450px] font-black font-['Inter']">about</div>
            </div>
            <div className="relative container mx-auto flex flex-col md:flex-row items-start justify-between p-4 md:p-8">
                {/* Left Section */}
                <div className="md:w-1/2 flex flex-col">
                    <h1 className="text-black text-[6vw] md:text-[64px] font-extrabold font-['Roboto']">IEEE SB RSET</h1>
                    <div className="mt-4">
                        <span className="text-black text-[4vw] md:text-[28px] font-extrabold font-['Roboto']">Rajagiri </span>
                        <span className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto']">
                            School of Engineering & Technology (Autonomous), Kakkanad, Kochi is a premier Institution affiliated to A P J Abdul Kalam Technological University. The University Grants Commission has granted autonomous status to RSET from 2020 onwards. RSET is an AICTE approved college offering excellence in engineering education and research. Undergraduate Programmes offered by the college are NBA accredited, and the college is accredited 'A' grade in the second cycle by NAAC.
                        </span>
                    </div>
                    {/* Make the girl image bigger */}
                    <img
                        className="w-auto h-auto mt-4 self-start md:w-[1000px] lg:w-[1000px]"
                        src={girl}
                        alt="Girl"
                    />
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 flex flex-col items-start justify-start mt-8 md:mt-0">
                    <img
                        className="w-full h-auto"
                        src={rset}
                        alt="RSET"
                    />
                    <div className="mt-4">
                        <h2 className="text-black text-[4vw] md:text-[64px] font-extrabold font-['Roboto']">What is ASCENDIA?</h2>
                        <p className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto']">
                            Ascendia is a two-day upskilling camp exclusively designed for girls, focusing on both soft and technical skills development. While women are often celebrated for their commitment and excellence, they sometimes face barriers due to a lack of specific skills. Ascendia aims to bridge these gaps, empowering participants to discover their potential and guide them on a path of personal and professional growth.
                        </p>
                        <p className="text-black text-[4vw] md:text-[28px] font-normal font-['Roboto'] mt-4">
                            Through dynamic workshops, hands-on technical training, and engaging activities handled by professionals, Ascendia helps participants build confidence and equips them with tools to excel. This event fosters an environment where learning is both fun and impactful, preparing girls to rise up and lead the future with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
