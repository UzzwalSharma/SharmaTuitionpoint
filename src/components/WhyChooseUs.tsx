import React from 'react';
import { Award, Clock, Users, Zap, Shield, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "12+ Years Experience",
      description: "Over a decade of proven success in education with thousands of satisfied students"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Satisfaction-First Policy",
      description: "We guarantee your satisfaction with our teaching methods and continuous support"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Expert Gold Medalist Faculty",
      description: "Learn from gold medalists and subject matter experts with extensive teaching experience"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Flexible Class Formats",
      description: "Choose from 1-on-1 personalized sessions or interactive group classes as per your preference"
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Result-Oriented Approach",
      description: "Focused on achieving tangible results with regular assessments and progress tracking"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-500" />,
      title: "Online & Offline Options",
      description: "Attend classes from the comfort of your home or visit our well-equipped offline centers"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Sharma Tuition Point?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our unique approach to education, 
              experienced faculty, and commitment to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 mt-16 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of successful students who have achieved their goals with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Course Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;