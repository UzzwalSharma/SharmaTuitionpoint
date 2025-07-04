import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      class: "Class 12 Science",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The teachers at Sharma Tuition Point are incredibly knowledgeable and patient. They helped me understand complex Physics concepts that I struggled with in school. Thanks to their guidance, I scored 95% in my board exams!"
    },
    {
      name: "Rahul Verma",
      class: "Class 10",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I was weak in Mathematics, but the personalized attention and unique teaching methods helped me improve dramatically. I went from failing grades to scoring 92% in my board exams. Highly recommended!"
    },
    {
      name: "Anjali Patel",
      class: "B.Com Graduate",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The support I received during my graduation was exceptional. The faculty helped me not just with academics but also with career guidance. I'm now pursuing CA and it's all thanks to the strong foundation they provided."
    },
    {
      name: "Vikash Kumar",
      class: "Class 11 Commerce",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The online classes are very interactive and engaging. Even during the pandemic, I never felt disconnected from my studies. The doubt-clearing sessions are particularly helpful."
    },
    {
      name: "Sneha Gupta",
      class: "Class 9",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I love the group study sessions! The teachers make learning fun and interesting. My confidence has improved so much, and I'm no longer afraid of asking questions in class."
    },
    {
      name: "Arjun Singh",
      class: "Class 12 Arts",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The History and Political Science classes are amazing! The teachers have a deep understanding of the subjects and explain everything in a way that's easy to remember. Scored 88% in boards!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our students and their parents have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.class}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-500 text-white p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold mb-2">Join Our Success Stories</h3>
              <p className="mb-4">Over 500+ students have achieved their academic goals with us</p>
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;