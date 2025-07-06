import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConsultationFormSection from './ConsultationFormSection';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-gradient-to-br from-primary via-purple to-accent shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-black-700">
          <img
            src="/Liora/lio.png"
            alt="LIORA Logo"
            className="h-16 scale-125 origin-left object-contain"
          />
          LIORA
        </div>
        <div className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="text-black-700 hover:text-blue-700 font-medium">Home</Link>
          <Link to="/reviews" className="text-black-700 hover:text-blue-700 font-medium">Reviews</Link>
          <Link to="/financial-services" className="text-black-700 hover:text-blue-700 font-medium">Web Development Services</Link>
          <Link to="/about" className="text-black-700 hover:text-blue-700 font-medium">About Us</Link>
          <Link to="/pricing" className="text-black-700 hover:text-blue-700 font-medium">Pricing</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-black-700 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {dropdownOpen && (
        <div ref={dropdownRef} className="md:hidden bg-white/95 shadow-lg rounded-b-2xl px-6 py-4 flex flex-col space-y-4 absolute w-full left-0 top-[100%] z-40 animate-fadeInDown">
          <Link to="/" className="text-black-700 font-medium" onClick={() => setDropdownOpen(false)}>Home</Link>
          <Link to="/reviews" className="text-black-700 font-medium" onClick={() => setDropdownOpen(false)}>Reviews</Link>
          <Link to="/financial-services" className="text-black-700 font-medium" onClick={() => setDropdownOpen(false)}>Web Development Services</Link>
          <Link to="/about" className="text-black-700 font-medium" onClick={() => setDropdownOpen(false)}>About Us</Link>
          <Link to="/pricing" className="text-black-700 font-medium" onClick={() => setDropdownOpen(false)}>Pricing</Link>
        </div>
      )}
      {/* Modal for Book Consultation */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            {/* Consultation form will be rendered here */}
            <ConsultationFormSection onCancel={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 