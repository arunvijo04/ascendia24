import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for hamburger and close
import logo from '../assets/logo.png'; // Ensure to use your logo here

function Nav() {
    const [navOpen, setNavOpen] = useState(false); // State to toggle the menu

    const toggleNav = () => {
        setNavOpen(!navOpen); // Toggles menu on click
    };

    return (
        <div className="w-full h-[70px] fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-12 bg-white bg-opacity-90 shadow-md transition duration-300">
            {/* Logo */}
            <img className="w-[88px] h-[63px]" src={logo} alt="Company Logo" />

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden cursor-pointer text-3xl text-black" onClick={toggleNav}>
                {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />} {/* Toggle between hamburger and close icon */}
            </div>

            {/* Navigation Links */}
            <nav className={`md:flex items-center space-x-8 absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-500 ease-in-out ${navOpen ? 'top-[70px] opacity-100' : 'top-[-100%] opacity-0'} md:opacity-100 md:top-0`}>
                <Link 
                    to="hero" 
                    smooth={true} 
                    duration={500} 
                    className="block md:inline-block text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out"
                    onClick={toggleNav}
                >
                    HOME
                </Link>
                <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    className="block md:inline-block text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out"
                    onClick={toggleNav}
                >
                    ABOUT
                </Link>
                <Link 
                    to="event" 
                    smooth={true} 
                    duration={500} 
                    className="block md:inline-block text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out"
                    onClick={toggleNav}
                >
                    EVENT
                </Link>
                <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                    className="block md:inline-block text-black text-[20px] md:text-4xl font-medium font-['Rubik'] cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out"
                    onClick={toggleNav}
                >
                    CONTACT
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
