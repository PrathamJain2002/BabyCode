import React from 'react';

interface TestimonialProps {
  name: string;
  bandScore: string;
  country: string;
  image: string;
  text: string;
  improvement: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, bandScore, country, image, text, improvement }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {image}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{country}</p>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-primary-600">{bandScore}</span>
            <span className="text-sm text-gray-500 ml-2">Band Score</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{text}"</p>
      
      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-green-700 font-medium">{improvement}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      bandScore: "8.5",
      country: "Singapore",
      image: "SC",
      text: "IELTSPro helped me improve from 6.5 to 8.5 in just 3 months! The AI speaking practice was incredibly helpful, and the personalized feedback made all the difference. I finally got into my dream university!",
      improvement: "Improved by 2.0 band score in 3 months"
    },
    {
      name: "Ahmed Hassan",
      bandScore: "8.0",
      country: "Egypt",
      image: "AH",
      text: "The mock tests and analytics were game-changers for me. I could see exactly where I needed to improve, and the study plan was perfectly tailored to my schedule. Highly recommend to anyone serious about IELTS!",
      improvement: "Achieved target band score in 2 months"
    },
    {
      name: "Maria Rodriguez",
      bandScore: "7.5",
      country: "Spain",
      image: "MR",
      text: "As a non-native speaker, I was really struggling with the speaking section. The AI practice sessions gave me the confidence I needed. The band score predictor was spot-on too!",
      improvement: "Gained 1.5 band score in speaking"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success stories from our
            <span className="text-primary-600 block">students</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our students have to say about their IELTS journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              bandScore={testimonial.bandScore}
              country={testimonial.country}
              image={testimonial.image}
              text={testimonial.text}
              improvement={testimonial.improvement}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your IELTS success story?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who achieved their dream band scores with IELTSPro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
