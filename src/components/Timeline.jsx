import React from 'react';
import registration from '../assets/registration.png';
import inauguration from '../assets/inauguration.png';

function Timeline() {
    return (
        <div className="w-[1282px] h-[942px] right-[100px] left-[200px] relative">
            <div className="w-[1282px] h-[333px] left-[0px] top-[365px] absolute text-[#ecc9eb]/40 text-[400px] font-black font-['Inter']">timeline</div>
            <div className="w-[21px] h-[780px] left-[569px] top-[153px] absolute bg-[#ecc9eb]" />
            <div className="w-[360.77px] h-[117px] left-[93px] top-[494px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
            <div className="w-[944px] h-[759px] left-[93px] top-[183px] absolute">
                <div className="w-[360.77px] h-[117px] left-0 top-[311px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                <div className="w-[944px] h-[759px] left-0 top-0 absolute">
                    <div className="w-[926.77px] h-64 left-[5px] top-0 absolute">
                        <div className="w-[360.77px] h-[117px] left-[566px] top-[139px] absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                        <div className="w-[360.77px] h-[117px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[40px] border-8 border-[#dde9f5]" />
                    </div>
                </div>
            </div>
            <div className="left-[164px] top-[343px] absolute text-black text-4xl font-normal font-['Roboto']">18TH OCTOBER 2024</div>
            <div className="left-[641px] top-[217px] absolute text-black text-4xl font-normal font-['Roboto']">18TH OCTOBER 2024</div>
            <div className="left-[140px] top-[698px] absolute text-black text-4xl font-normal font-['Roboto']">18TH OCTOBER 2024</div>
            <div className="left-[679px] top-[859px] absolute text-black text-4xl font-normal font-['Roboto']">19TH OCTOBER 2024</div>
            <div className="left-[682px] top-[543px] absolute text-black text-4xl font-normal font-['Roboto']">18TH OCTOBER 2024</div>
            <div className="left-[164px] top-[203px] absolute text-black text-[32px] font-semibold font-['Inter']">Registration<br />5.00-6.00</div>
            <div className="left-[768px] top-[342px] absolute text-black text-[32px] font-semibold font-['Inter']">Inauguration<br />6.00-6.45</div>
            <div className="w-[120px] h-[110px] left-[513px] top-[179px] absolute bg-[#dde9f5] rounded-full" />
            <div className="w-[120px] h-[110px] left-[519px] top-[825px] absolute bg-[#dde9f5] rounded-full" />
            <div className="w-[120px] h-[110px] left-[513px] top-[655px] absolute bg-[#dde9f5] rounded-full" />
            <div className="w-[120px] h-[110px] left-[513px] top-[494px] absolute bg-[#dde9f5] rounded-full" />
            <div className="w-[120px] h-[110px] left-[519px] top-[334px] absolute bg-[#dde9f5] rounded-full" />
            <img className="w-[60px] h-[60px] left-[549px] top-[200px] absolute" src={registration} alt="Placeholder 1" />
            <img className="w-[67px] h-[66px] left-[546px] top-[354px] absolute" src={inauguration} alt="Placeholder 2" />
        </div>
    );
}

export default Timeline;
