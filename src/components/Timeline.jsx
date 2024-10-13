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
        <div className="timeline-container">
            <h1 className="text-center text-4xl font-bold mb-8">Event Timeline</h1>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className={`timeline-item flex items-center mb-8 ${event.bgColor} p-4 rounded-lg`}>
                        <div className="timeline-icon mr-4 text-2xl text-pink-600">
                            {event.icon}
                        </div>
                        <div className="timeline-content">
                            <div className="date text-lg font-semibold text-gray-700">{event.date}</div>
                            <div className="time text-md text-gray-500">{event.time}</div>
                            <div className="title text-xl font-bold">{event.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
