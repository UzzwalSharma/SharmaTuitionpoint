import React, { useState } from 'react';
import { BookOpen, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Sharma Tuition Point</h1>
              <p className="text-xs sm:text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
            <a href="#about" className="hover:text-blue-600 text-gray-700">About</a>
            <a href="#courses" className="hover:text-blue-600 text-gray-700">Courses</a>
            <a href="#why-choose" className="hover:text-blue-600 text-gray-700">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-600 text-gray-700">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 text-gray-700">Contact</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1 text-sm text-gray-700">
              <Phone className="h-4 w-4 text-blue-500" />
              <span>+91 98765 43210</span>
            </div>
            {/* <button className="text-sm px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Free Demo
            </button> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-md bg-white shadow-md px-4 py-3 space-y-3 text-sm">
            <a href="#about" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#courses" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Courses</a>
            <a href="#why-choose" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
              <Phone className="h-4 w-4 text-blue-500" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
