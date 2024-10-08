import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../assets/logo.png'; // Ensure to use your logo here

function Nav() {
    return (
        <div className="w-full h-[80px] fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-12 bg-white bg-opacity-90 shadow-md transition duration-300">
            <img className="w-[88px] h-[63px]" src={logo} alt="Company Logo" />
            <nav className="flex items-center space-x-4 md:space-x-8">
                <Link 
                    to="hero" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out">
                    HOME
                </Link>
                <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out">
                    ABOUT
                </Link>
                <Link 
                    to="event" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out">
                    EVENT
                </Link>
                <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out">
                    CONTACT
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
