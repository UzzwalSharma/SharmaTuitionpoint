import React from 'react';
import { Target, Heart, Trophy, BookOpen } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Sharma Tuition Point</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing affordable, quality education with a satisfaction-first approach. 
              Our mission is to make excellent education accessible to every student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize quality education by making it affordable and accessible to students from all backgrounds, 
                    from Class 5 to Post Graduation level.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfaction First</h3>
                  <p className="text-gray-600">
                    We prioritize student satisfaction and success above all else. Our teaching methods are designed 
                    to ensure every student reaches their full potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">
                    Our teachers are not just educators but gold medalists and subject matter experts with 12+ years 
                    of experience in their respective fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why We Started</h3>
                <p className="text-gray-700 mb-6">
                  Founded with the vision of making quality education accessible to all, Sharma Tuition Point was born 
                  out of a passion for teaching and a commitment to student success. We believe every student deserves 
                  the best guidance to achieve their dreams.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">12+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">500+</p>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;