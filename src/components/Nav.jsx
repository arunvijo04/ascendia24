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
            <nav className={`md:flex items-center space-x-8 absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-500 ease-in-out ${navOpen ? 'top-[70px] opacity-100' : 'top-[-100%] opacity-0'} md:opacity-100 md:top-0 md:justify-end`}>
                <div className={`flex flex-col md:flex-row ${navOpen ? 'space-y-2 md:space-y-0 md:space-x-8' : 'hidden md:flex'}`}>
                    {['home', 'about', 'event', 'contact'].map(section => (
                        <Link 
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            className="relative block text-black text-lg md:text-xl font-sans cursor-pointer hover:text-[#a594f9] transition duration-300 ease-in-out py-2 px-3 rounded"
                            onClick={toggleNav}
                        >
                            {section.toUpperCase()}
                            <span className="absolute inset-0 bg-transparent hover:bg-[#e0d5f2] transition duration-300 ease-in-out opacity-50" style={{ borderRadius: '5px' }}></span>
                        </Link>
                    ))}
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfCGC2oZoiIaN5-LHLoPJpMGQf8HqVh-MozqjjtVTzADdM2Mw/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block text-white bg-[#a594f9] px-6 py-3 rounded-md text-lg md:text-xl font-sans cursor-pointer hover:bg-[#8a7bd3] transition duration-300 ease-in-out"
                        onClick={toggleNav}
                    >
                        REGISTER NOW
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
