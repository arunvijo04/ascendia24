import React from 'react';
import registration from '../assets/registration.png';
import inauguration from '../assets/inauguration.png';

function Timeline() {
    const eventsRow1 = [
        {
            date: '18TH OCTOBER 2024',
            time: '5:00 - 6:00',
            title: 'Registration',
            img: registration,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]', // Light pink
            icon: inauguration, // Using inauguration icon for registration
        },
        {
            date: '18TH OCTOBER 2024',
            time: '6:00 - 6:45',
            title: 'Inauguration',
            img: inauguration,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]', // Medium pink
            icon: inauguration, // Using inauguration icon for inauguration
        },
        {
            date: '18TH OCTOBER 2024',
            time: '6:45 - 8:30',
            title: 'Session 1',
            img: null,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]',
            icon: inauguration,
        },
        {
            date: '18TH OCTOBER 2024',
            time: '8:30 - 9:30',
            title: 'Dinner',
            img: null,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]',
            icon: inauguration,
        },
        {
            date: '18TH OCTOBER 2024',
            time: '9:30',
            title: 'Icebreaking Session',
            img: null,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]',
            icon: inauguration,
        }
    ];

    const eventsRow2 = [
        {
            date: '19TH OCTOBER 2024',
            time: '6:15',
            title: 'Warm Up Activities / Games',
            img: null,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '7:00 - 9:00',
            title: 'Session 2',
            img: null,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '9:00 - 10:00',
            title: 'Breakfast',
            img: null,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '10:00 - 1:00',
            title: 'Session 3',
            img: null,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '1:00 - 2:00',
            title: 'Lunch',
            img: null,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '2:00 - 4:15',
            title: 'Session 4',
            img: null,
            side: 'left',
            bgColor: 'bg-[#ffe0f0]',
            icon: inauguration,
        },
        {
            date: '19TH OCTOBER 2024',
            time: '4:15',
            title: 'Closing Ceremony',
            img: null,
            side: 'right',
            bgColor: 'bg-[#ffb3c1]',
            icon: inauguration,
        }
    ];

    return (
        <div className="w-full min-h-screen relative flex flex-col items-center overflow-hidden p-4 bg-gradient-to-b from-white to-[#fef9fc]">
            {/* Centered Background Text */}
            <div className="absolute top-1/4 transform -translate-y-1/2 text-[#ecc9eb]/20 text-[10vw] md:text-[150px] font-black font-['Inter'] text-center z-0 pointer-events-none">
                Timeline
            </div>

            {/* Day 1 Events */}
            <div className="flex flex-col items-center w-full mt-10 relative z-20">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Day 1: 18TH OCTOBER 2024</h2>
                <div className="flex items-center w-full justify-between">
                    {eventsRow1.map((event, index) => (
                        <div 
                            key={index} 
                            className={`relative flex-none w-[200px] h-[100px] ${event.bgColor} rounded-[20px] border-4 border-[#d6d8e6] mx-4 flex items-center transition-all duration-300 hover:shadow-xl`}
                        >
                            {/* Checkpoint Icon */}
                            <img 
                                className={`w-[30px] h-[30px] absolute ${event.side === 'left' ? 'left-[-20px]' : 'right-[-20px]'} top-1/2 transform -translate-y-1/2`} 
                                src={event.icon} 
                                alt="Checkpoint" 
                            />
                            
                            <img className={`w-[50px] h-[50px] absolute ${event.side === 'left' ? 'left-[-20px]' : 'right-[-20px]'} top-1/2 transform -translate-y-1/2`} src={event.img} alt={event.title} />

                            <div className={`absolute ${event.side === 'left' ? 'left-[60px]' : 'right-[60px]'} text-black text-md font-semibold`}>
                                <div className="text-md font-bold">{event.title}</div>
                                <div className="text-sm text-gray-600">{event.date} - {event.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Connecting Line for Day 1 */}
                <div className="w-full h-[3px] mt-6">
                    <div className="h-full w-full border-t border-dotted border-[#ecc9eb]"></div>
                </div>
            </div>

            {/* Day 2 Events */}
            <div className="flex flex-col items-center w-full mt-10 relative z-20">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Day 2: 19TH OCTOBER 2024</h2>
                <div className="flex items-center w-full justify-between">
                    {eventsRow2.map((event, index) => (
                        <div 
                            key={index} 
                            className={`relative flex-none w-[200px] h-[100px] ${event.bgColor} rounded-[20px] border-4 border-[#d6d8e6] mx-4 flex items-center transition-all duration-300 hover:shadow-xl`}
                        >
                            {/* Checkpoint Icon */}
                            <img 
                                className={`w-[30px] h-[30px] absolute ${event.side === 'left' ? 'left-[-20px]' : 'right-[-20px]'} top-1/2 transform -translate-y-1/2`} 
                                src={event.icon} 
                                alt="Checkpoint" 
                            />
                            
                            <img className={`w-[50px] h-[50px] absolute ${event.side === 'left' ? 'left-[-20px]' : 'right-[-20px]'} top-1/2 transform -translate-y-1/2`} src={event.img} alt={event.title} />

                            <div className={`absolute ${event.side === 'left' ? 'left-[60px]' : 'right-[60px]'} text-black text-md font-semibold`}>
                                <div className="text-md font-bold">{event.title}</div>
                                <div className="text-sm text-gray-600">{event.date} - {event.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
