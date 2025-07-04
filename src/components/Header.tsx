import React from 'react';
import { BookOpen, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto sm:px-2 sm:py-4 ">
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Sharma Tuition Point</h1>
              <p className="text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#why-choose" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-500" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <button className="bg-blue-500 text-white px-4 sm:py-1.5 py-1  rounded-lg hover:bg-blue-600 transition-colors">
              Free Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;