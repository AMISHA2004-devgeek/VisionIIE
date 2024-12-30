import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

const ChangemakerCard = ({ image, name, location, impact, quote }) => (
  <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div className="aspect-w-16 aspect-h-9">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{location}</p>
      <p className="text-gray-800 mb-6">{impact}</p>
      <div className="border-l-4 border-gray-800 pl-4">
        <Quote className="w-5 h-5 text-gray-400 mb-2" />
        <p className="text-gray-600 italic">{quote}</p>
      </div>
    </div>
  </div>
);

const Changemakers = () => {
  const changemakers = [
    {
      image: "https://placehold.co/600x400",
      name: "Akarshak ABCDEF",
      location: "Chennai, India",
      impact: "Founded a rural innovation hub supporting 50+ women entrepreneurs in sustainable agriculture",
      quote: "Innovation isn't just about technology, it's about empowering communities to solve their own challenges."
    },
    {
      image: "https://placehold.co/600x400",
      name: "Firstname Lastname",
      location: "Bihar, India",
      impact: "Developed a network of rural healthcare clinics using telemedicine technology",
      quote: "Connecting rural communities to quality healthcare is the first step towards sustainable development."
    },
    {
      image: "https://placehold.co/600x400",
      name: "Firstname Lastname",
      location: "Vietnam",
      impact: "Leading cross-border initiatives connecting Southeast Asian rural entrepreneurs",
      quote: "The Global South has unlimited potential when we work together and share knowledge."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl mb-6">Changemakers</h2>
          <p className="text-xl text-gray-700">
            Meet the visionaries who are transforming their communities through
            innovation, entrepreneurship, and dedication to sustainable development.
          </p>
        </div>

        {/* Changemakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {changemakers.map((changemaker, index) => (
            <ChangemakerCard key={index} {...changemaker} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
            Meet More Changemakers
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Changemakers;