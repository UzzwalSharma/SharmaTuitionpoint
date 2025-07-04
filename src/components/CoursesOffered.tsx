import React from 'react';
import { BookOpen, Calculator, Microscope, Briefcase, GraduationCap, Users } from 'lucide-react';

const CoursesOffered = () => {
  const courses = [
    {
      title: "Class 5-10",
      subtitle: "Foundation Building",
      description: "Strong foundation in all subjects including Mathematics, Science, English, and Social Studies",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      features: ["All Subjects", "Interactive Learning", "Regular Tests", "Doubt Clearing"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Class 11-12 Science",
      subtitle: "PCM/PCB Stream",
      description: "Comprehensive preparation for Physics, Chemistry, Mathematics, and Biology",
      icon: <Microscope className="h-8 w-8 text-green-500" />,
      features: ["PCM/PCB", "JEE/NEET Prep", "Board Exam Focus", "Practical Sessions"],
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Class 11-12 Commerce",
      subtitle: "Business Studies",
      description: "Expert guidance in Accountancy, Business Studies, Economics, and Mathematics",
      icon: <Calculator className="h-8 w-8 text-purple-500" />,
      features: ["Accountancy", "Business Studies", "Economics", "Practical Approach"],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Class 11-12 Arts",
      subtitle: "Humanities",
      description: "Specialized coaching in History, Political Science, Geography, and Literature",
      icon: <Briefcase className="h-8 w-8 text-orange-500" />,
      features: ["History", "Political Science", "Geography", "Literature"],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Graduation",
      subtitle: "Bachelor's Degree",
      description: "Support for undergraduate studies across various disciplines and universities",
      icon: <GraduationCap className="h-8 w-8 text-red-500" />,
      features: ["Multiple Streams", "University Syllabus", "Exam Preparation", "Project Guidance"],
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Post Graduation",
      subtitle: "Master's Degree",
      description: "Advanced coaching for postgraduate studies and competitive examinations",
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      features: ["Advanced Topics", "Research Guidance", "Competitive Exams", "Career Counseling"],
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Courses Offered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to help students excel at every level, 
              from foundational learning to advanced studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className={`${course.bgColor} ${course.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center mb-4">
                  {course.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-200">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;