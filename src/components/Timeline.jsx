import React, { useEffect, useRef, useState } from 'react';
import { FaRegCalendarAlt, FaRegClock, FaUtensils, FaGamepad, FaGraduationCap } from 'react-icons/fa';

function Timeline() {
    const events = [
        {
            date: '18TH OCTOBER 2024',
            time: '5:00 - 6:00',
            title: 'Registration',
            icon: <FaRegCalendarAlt />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '18TH OCTOBER 2024',
            time: '6:00 - 6:45',
            title: 'Inauguration',
            icon: <FaGraduationCap />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '18TH OCTOBER 2024',
            time: '6:45 - 8:30',
            title: 'Session 1',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '18TH OCTOBER 2024',
            time: '8:30 - 9:30',
            title: 'Dinner',
            icon: <FaUtensils />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '18TH OCTOBER 2024',
            time: '9:30',
            title: 'Icebreaking Session',
            icon: <FaGamepad />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '6:15',
            title: 'Warm Up Activities / Games',
            icon: <FaGamepad />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '7:00 - 9:00',
            title: 'Session 2',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '9:00 - 10:00',
            title: 'Breakfast',
            icon: <FaUtensils />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '10:00 - 1:00',
            title: 'Session 3',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '1:00 - 2:00',
            title: 'Lunch',
            icon: <FaUtensils />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '2:00 - 4:15',
            title: 'Session 4',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '4:15',
            title: 'Closing Ceremony',
            icon: <FaGraduationCap />,
            bgColor: 'bg-[#ffb3c1]',
        },
    ];

    const timelineRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scroll = () => {
            if (!isHovered) {
                const scrollLeft = timelineRef.current.scrollLeft;
                timelineRef.current.scrollLeft = scrollLeft + 1; // Adjust speed here
                if (scrollLeft >= timelineRef.current.scrollWidth - timelineRef.current.clientWidth) {
                    timelineRef.current.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 50);
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden p-6 bg-gradient-to-b from-white to-[#fef9fc] space-y-10">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-[#ecc9eb]/40 text-[12vw] md:text-[350px] font-black font-rubik-mono-one-regular w-full text-center">
                timeline
            </div>

            <div className="flex flex-col items-center w-full relative z-20 space-y-4">
                <div
                    ref={timelineRef}
                    className="flex items-center w-full justify-start overflow-x-auto whitespace-nowrap scrollbar-hide"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`relative flex-none w-[350px] h-[200px] ${event.bgColor} rounded-lg border-4 border-[#d6d8e6] mx-6 flex items-center justify-between px-6 py-4 transition-all duration-300 hover:shadow-xl`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">{event.icon}</div>
                                <div>
                                    <div className="text-xl font-bold">{event.title}</div>
                                    <div className="text-sm text-gray-600">{event.date} - {event.time}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[3px] mt-4">
                    <div className="h-full w-full border-t border-dotted border-[#ecc9eb]"></div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
