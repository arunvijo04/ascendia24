import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png';

function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="w-full h-[70px] fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-12 bg-white bg-opacity-90 shadow-md transition duration-300">
            {/* Logo */}
            <img className="w-[88px] h-[63px]" src={logo} alt="Company Logo" />

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden cursor-pointer text-3xl text-black" onClick={toggleNav}>
                {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>

            {/* Navigation Links */}
            <nav className={`md:flex items-center space-x-8 absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-500 ease-in-out ${navOpen ? 'top-[70px] opacity-100' : 'top-[-100%] opacity-0'} md:opacity-100 md:top-0`}>
                {['home', 'about', 'event', 'contact'].map(section => (
                    <Link 
                        key={section}
                        to={section}
                        smooth={true}
                        duration={500}
                        className="relative block md:inline-block text-black text-[10px] md:text-4xl font-rubik-mono-two-regular cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out"
                        onClick={toggleNav}
                    >
                        {section.toUpperCase()}
                        <span className="absolute inset-0 bg-transparent hover:bg-[#a594f9] transition duration-300 ease-in-out" style={{ borderRadius: '5px' }}></span>
                    </Link>
                ))}
                <Link 
                    to="register" 
                    smooth={true} 
                    duration={500} 
                    className="relative block md:inline-block text-white bg-[#a594f9] px-4 py-2 rounded-md text-lg font-medium cursor-pointer hover:bg-[#8a7bd3] transition duration-300 ease-in-out"
                    onClick={toggleNav}
                >
                    REGISTER NOW
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
