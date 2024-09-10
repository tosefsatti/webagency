import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
      };
    }, []);

    const isActive = (path) => location.pathname === path;

  return (
    <>
    <div
        className={`w-full py-4 h-[80px] bg-gray-300 transition-all duration-300 ${
          scroll ? "fixed top-0 left-0 right-0 shadow-lg bg-slate-100  z-50" : ""
        }`}
      >
        <div className="flex justify-between px-4 md:px-24">
          <div className="text-2xl font-bold">
            a<span className="text-red-600">v</span>o
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
             MENU
            </button>
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex space-x-8 text-xl text-gray-800">
            <Link to="/"  className={`${
                isActive('/') ? 'text-red-600' : 'hover:text-red-500'
              } cursor-pointer`} >Home</Link>
            <Link to="/about" className={`${
                isActive('/about') ? 'text-red-600' : 'hover:text-red-500'
              } cursor-pointer`}>About</Link>
            <Link to="/work" className={`${
                isActive('/work') ? 'text-red-600' : 'hover:text-red-500'
              } cursor-pointer`}>Work</Link>
            <Link to="/blog"  className={`${
                isActive('/blog') ? 'text-red-600' : 'hover:text-red-500'
              } cursor-pointer`}>Blog</Link>
            <Link to="/contact"  className={`${
                isActive('/contact') ? 'text-red-600' : 'hover:text-red-500'
              } cursor-pointer`}>Contact</Link>
          </ul>
        </div>

        {/* Dropdown menu for mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 w-full mt-2 py-4 flex flex-col items-start pl-3 space-y-4">
            <Link to="/" className="text-lg text-gray-800 hover:text-red-500">
              Home
            </Link>
            <Link to="/about" className="text-lg text-gray-800 hover:text-red-500">
              About
            </Link>
            <Link to="/work" className="text-lg text-gray-800 hover:text-red-500">
              Work
            </Link>
            <Link to="/blog" className="text-lg text-gray-800 hover:text-red-500">
              Blog
            </Link>
            <Link to="/contact" className="text-lg text-gray-800 hover:text-red-500">
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
