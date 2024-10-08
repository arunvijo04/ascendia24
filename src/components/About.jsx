import React from 'react';
import rset from '../assets/rset.png';
import girl from '../assets/girl.png';

function About() {
    return (
        <div id="about" className="w-[2100px] h-[2050px] relative">
            <div className="w-[2100px] h-[2050px] left-0 top-0 absolute">
                <div className="w-[2100px] h-[2050px] left-0 top-0 absolute bg-[#ecc9eb]/40" />
                <div className="w-[2100px] h-[495px] left-[31px] top-[1303px] absolute text-white text-[450px] font-black font-['Inter']">about</div>
            </div>
            <div className="w-[1304px] h-[708.49px] left-[64px] top-[155.15px] absolute">
                <div className="w-[414px] h-[78.87px] left-0 top-0 absolute text-black text-[64px] font-extrabold font-['Roboto']">IEEE SB RSET</div>
                <div className="w-[1304px] h-[556.39px] left-0 top-[152.10px] absolute">
                    <div className="w-[680px] h-[530.46px] left-0 top-[5.47px] absolute">
                        <span className="text-black text-4xl font-extrabold font-['Roboto']">Rajagiri </span>
                        <span className="text-black text-4xl font-normal font-['Roboto']">
                            School of Engineering & Technology (Autonomous), Kakkanad, Kochi is a premier Institution affiliated to A P J Abdul Kalam Technological University. The University Grants Commission has granted autonomous status to RSET from 2020 onwards. RSET is an AICTE approved college offering excellence in engineering education and research. Undergraduate Programmes offered by the college are NBA accredited, and the college is accredited 'A' grade in the second cycle by NAAC.
                        </span>
                    </div>
                    <img
                        className="w-[579px] h-[556.39px] left-[725px] top-0 absolute border-8 border-white"
                        src={rset}
                        alt="Placeholder"
                    />
                </div>
            </div>
            <div className="w-[1411px] h-[1099px] left-[1px] top-[951px] absolute">
                <img
                    className="w-[959px] h-[1099px] left-0 top-0 absolute"
                    src={girl}
                    alt="Placeholder"
                />
                <div className="w-[711px] h-[916.28px] left-[700px] top-[108px] absolute">
                    <div className="w-[587px] h-[78.87px] left-0 top-0 absolute text-black text-[64px] font-extrabold font-['Roboto']">What is ASCENDIA?</div>
                    <div className="w-[711px] h-[810.28px] left-0 top-[106px] absolute">
                        <div className="w-[711px] h-[440.79px] left-0 top-0 absolute">
                            <span className="text-black text-4xl font-extrabold font-['Roboto']">Ascendia </span>
                            <span className="text-black text-4xl font-normal font-['Roboto']">
                                is a two-day upskilling camp exclusively designed for girls, focusing on both soft and technical skills development. While women are often celebrated for their commitment and excellence, they sometimes face barriers due to a lack of specific skills. Ascendia aims to bridge these gaps, empowering participants to discover their potential and guide them on a path of personal and professional growth.
                            </span>
                        </div>
                        <div className="w-[702px] h-[353.28px] left-0 top-[457px] absolute">
                            <span className="text-black text-4xl font-extrabold font-['Roboto']">Through </span>
                            <span className="text-black text-4xl font-normal font-['Roboto']">
                                dynamic workshops, hands-on technical training, and engaging activities handled by professionals, Ascendia helps participants build confidence and equips them with tools to excel. This event fosters an environment where learning is both fun and impactful, preparing girls to rise up and lead the future with confidence.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
