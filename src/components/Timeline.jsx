import React from 'react';
import { FaRegCalendarAlt, FaGraduationCap, FaRegClock, FaUtensils, FaGamepad } from 'react-icons/fa';

const Timeline = () => {
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
        <div className="timeline-container p-6">
            <h1 className="text-center text-4xl font-bold mb-8">EVENT TIMELINE</h1>
            <div className="timeline grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item relative flex flex-col md:flex-row items-center md:items-start ${event.bgColor} p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform duration-300 ease-out`}
                    >
                        <div className="timeline-icon text-4xl text-pink-600 mb-4 md:mb-0 md:mr-4">
                            {event.icon}
                        </div>

                        <div className="timeline-content">
                            <div className="date text-lg font-semibold text-gray-700">{event.date}</div>
                            <div className="time text-md text-gray-500 mb-1">{event.time}</div>
                            <div className="title text-xl font-bold text-pink-700">{event.title}</div>
                        </div>

                        {/* Vertical line connector for large screens */}
                        {index !== events.length - 1 && (
                            <span className="hidden md:block absolute left-12 top-full w-1 h-8 bg-pink-600"></span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
