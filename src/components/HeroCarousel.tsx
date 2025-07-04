import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Video } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WELCOME TO SHARMA TUITION POINT",
      subtitle: "Starting Class 5 to PG",
      description: "Quality education shouldn't be expensive. We provide excellent tutoring from Class 5 to Post Graduation at affordable rates.",
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      bgImage: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "bg-gradient-to-br from-blue-900/80 to-blue-800/80"
    },
    {
      title: "12+ Years Experienced",
      subtitle: "Gold Medalist Teachers",
      description: "Learn from the best! Our faculty consists of gold medalists and experts with over 12 years of teaching experience.",
      icon: <Users className="h-12 w-12 text-yellow-500" />,
      bgImage: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "bg-gradient-to-br from-green-900/80 to-green-800/80"
    },
    {
      title: "1-on-1 and Group Classes",
      subtitle: "Online & Offline Available",
      description: "Choose your preferred learning style - personalized 1-on-1 sessions or interactive group classes, both online and offline.",
      icon: <Video className="h-12 w-12 text-yellow-500" />,
      bgImage: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "bg-gradient-to-br from-purple-900/80 to-purple-800/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className="h-full flex items-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className={`absolute inset-0 ${slide.bgColor}`}></div>
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                  {slide.icon}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-6">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
                    Join a Free Demo Class
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors shadow-lg border border-white/30">
                    Talk to a Counselor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;