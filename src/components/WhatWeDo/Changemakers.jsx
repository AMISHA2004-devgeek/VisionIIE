import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const ChangemakerCard = ({ image, name, location, impact, quote, delay }) => (
  <motion.div 
    className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8 }}
  >
    <motion.div 
      className="aspect-w-16 aspect-h-9"
      initial={{ scale: 1.2 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay + 0.2 }}
    >
      <img 
        src={image}
        alt={name} 
        className="w-full h-full object-cover"
      />
    </motion.div>
    <div className="p-6">
      <motion.h3 
        className="font-serif text-xl mb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {name}
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {location}
      </motion.p>
      <motion.p 
        className="text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {impact}
      </motion.p>
      <motion.div 
        className="border-l-4 border-gray-800 pl-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.6 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            delay: delay + 0.7 
          }}
        >
          <Quote className="w-5 h-5 text-gray-400 mb-2" />
        </motion.div>
        <motion.p 
          className="text-gray-600 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.8 }}
        >
          {quote}
        </motion.p>
      </motion.div>
    </div>
  </motion.div>
);

const Changemakers = () => {
  const changemakers = [
    {
      image: "https://placehold.co/600x400",
      name: "Akarshak Bose",
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
    <motion.section 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Changemakers
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet the visionaries who are transforming their communities through
            innovation, entrepreneurship, and dedication to sustainable development.
          </motion.p>
        </motion.div>

        {/* Changemakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {changemakers.map((changemaker, index) => (
            <ChangemakerCard 
              key={index} 
              {...changemaker} 
              delay={0.2 + (index * 0.2)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button 
            className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet More Changemakers
            <motion.div
              className="ml-2"
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Changemakers;