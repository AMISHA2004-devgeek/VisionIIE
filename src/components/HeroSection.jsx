import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080" 
          alt="Rural Innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* Welcome Text */}
        <div className="mb-6">
          <span className="text-white/90 tracking-wider text-sm uppercase">
            WELCOME TO VISION IIE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl mb-8">
          Catalyzing Innovation Across Rural India and the Global South
        </h1>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          At Vision IIE, we champion entrepreneurship and incubation in Rural India 
          and the Global South, aligned with India's Look East Policy, fostering 
          global collaboration and sustainable growth. Empowering startups, bridging 
          regional disparities, and fostering global collaboration through the lens 
          of sustainable development and policy alignment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group bg-white text-black px-6 py-3 flex items-center justify-center hover:bg-gray-100 transition-colors">
            Learn About Our Mission
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="group border border-white text-white px-6 py-3 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            Join the Movement
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white/30 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;