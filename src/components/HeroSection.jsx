import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src="https://placehold.co/1920x1080"
          alt="Rural Innovation" 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* Welcome Text */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-white/90 tracking-wider text-sm uppercase">
            WELCOME TO VISION IIE
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Catalyzing Innovation Across Rural India and the Global South
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-white/90 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          At Vision IIE, we champion entrepreneurship and incubation in Rural India 
          and the Global South, aligned with India's Look East Policy, fostering 
          global collaboration and sustainable growth. Empowering startups, bridging 
          regional disparities, and fostering global collaboration through the lens 
          of sustainable development and policy alignment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            className="group bg-white text-black px-6 py-3 flex items-center justify-center hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn About Our Mission
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
          <motion.button 
            className="group border border-white text-white px-6 py-3 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Movement
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white/30 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;