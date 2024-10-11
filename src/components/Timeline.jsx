import React from 'react';
import { FaRegCalendarAlt, FaRegClock, FaUtensils, FaGamepad, FaGraduationCap } from 'react-icons/fa';

function Timeline() {
    const events = [
        // Day 1
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
        // Day 2
        {
            date: '19TH OCTOBER 2024',
            time: '6:15 - 7:00',
            title: 'Warm Up Activities / Games',
            icon: <FaGamepad />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '7:00 - 9:00',
            title: 'Session 2',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '9:00 - 10:00',
            title: 'Breakfast',
            icon: <FaUtensils />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '10:00 - 1:00',
            title: 'Session 3',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '1:00 - 2:00',
            title: 'Lunch',
            icon: <FaUtensils />,
            bgColor: 'bg-[#ffe0f0]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '2:00 - 4:15',
            title: 'Session 4',
            icon: <FaRegClock />,
            bgColor: 'bg-[#ffb3c1]',
        },
        {
            date: '19TH OCTOBER 2024',
            time: '4:15',
            title: 'Closing Ceremony',
            icon: <FaGraduationCap />,
            bgColor: 'bg-[#ffe0f0]',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#fef9fc] p-6">
            <h2 className="text-4xl font-bold mb-8">Timeline</h2>

            <div className="relative w-full">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

                {events.map((event, index) => (
                    <div key={index} className="mb-10 w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-end pr-8">
                            <div className={`p-4 rounded-lg shadow-md ${event.bgColor} w-64`}>
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.date} - {event.time}</p>
                            </div>
                        </div>
                        <div className="relative w-10 h-10 rounded-full bg-[#ecc9eb] flex items-center justify-center border-4 border-white z-10">
                            {event.icon}
                        </div>
                        <div className="w-1/2 pl-8">
                            <div className={`p-4 rounded-lg shadow-md ${event.bgColor} w-64`}>
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.date} - {event.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
