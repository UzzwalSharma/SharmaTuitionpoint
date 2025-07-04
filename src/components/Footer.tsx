import React from 'react';
import { BookOpen, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Responsive grid: 1 col on mobile, 2 on md, 4 on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sharma Tuition Point</h3>
                  <p className="text-sm text-gray-300">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300">
                Providing quality education from Class 5 to Post Graduation with experienced faculty 
                and a satisfaction-first approach.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-red-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#why-choose" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Online Classes</span></li>
                <li><span className="text-gray-300">Offline Classes</span></li>
                <li><span className="text-gray-300">1-on-1 Tutoring</span></li>
                <li><span className="text-gray-300">Group Classes</span></li>
                <li><span className="text-gray-300">Test Preparation</span></li>
                <li><span className="text-gray-300">Doubt Clearing</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">info@sharmatuitionpoint.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">788 Magistrate Colony,</p>
                    <p className="text-gray-300">Hapur - 245101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-bounce fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={42}
              height={42}
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path
                d="M16 7.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.1 4.1L7 25l5.3-1.4c1.2.6 2.5.9 3.7.9 4.7 0 8.5-3.7 8.5-8.3S20.7 7.5 16 7.5zm0 15.1c-1.1 0-2.2-.3-3.2-.8l-.2-.1-3.1.8.8-3-.2-.2c-.7-1.1-1.1-2.3-1.1-3.6 0-3.7 3.2-6.7 7.1-6.7s7.1 3 7.1 6.7-3.2 6.7-7.1 6.7zm4-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.9-.3-1.7-.7-2.4-1.6-.2-.2-.2-.3 0-.5.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1 2.3.1.2 1.4 2.3 3.5 3.1.5.2.9.4 1.2.5.5.2.9.1 1.2.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300">
                  &copy; 2025 Sharma Tuition Point. All rights reserved.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm items-center">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a>
              </div>
              <span className="text-center">Made with <span role="img" aria-label="love">❤️</span> by Ujjwal Sharma</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;