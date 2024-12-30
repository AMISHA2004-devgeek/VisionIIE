import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-serif text-xl">Vision IIE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-8">
              <a href="#who-we-are" className="text-gray-700 hover:text-black">Who We Are</a>
              <a href="#what-we-do" className="text-gray-700 hover:text-black">What We Do</a>
              <a href="#insights" className="text-gray-700 hover:text-black">Insights</a>
              <a href="#contact" className="text-gray-700 hover:text-black">Contact Us</a>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#who-we-are" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Who We Are</a>
              <a href="#what-we-do" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">What We Do</a>
              <a href="#insights" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Insights</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;