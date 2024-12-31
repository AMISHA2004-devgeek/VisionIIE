import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState); // Toggle dropdown visibility on click
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 relative text-gray-700 hover:text-black"
        onClick={toggleDropdown} // Toggle on click
      >
        {title}
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block px-4 py-2 text-sm relative text-gray-700 hover:bg-gray-100"
            >
              <div className="flex items-center justify-between">
                <span>{item.text}</span>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
              </div>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = {
    'What We Do': [
      { text: 'Approach', link: '#approach', image: '/api/placeholder/48/48' },
      { text: 'Events', link: '#events', image: '/api/placeholder/48/48' },
      { text: 'ChangeMakers', link: '#changemakers', image: '/api/placeholder/48/48' }
    ],
    'Who We Are': [
      { text: 'About Us', link: '#aboutus', image: '/api/placeholder/48/48' },
      { text: 'Partners', link: '#partners', image: '/api/placeholder/48/48' },
    ],
    'Insights': [
      { text: 'Insights', link: '#insights', image: '/api/placeholder/48/48' },
      { text: 'Media', link: '#media', image: '/api/placeholder/48/48' },
    ]
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">VisionIIE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(navItems).map(([title, items]) => (
              <NavDropdown key={title} title={title} items={items} />
            ))}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 relative text-gray-700 hover:text-black"
            >
              <Search size={20} />
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 hover:w-full"></span>
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
      </div>

      {/* Search overlay */}
      {showSearch && (
        <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="ml-4 p-2 text-gray-700 hover:text-black"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(navItems).map(([title, items]) => (
              <div key={title} className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-gray-700">
                  {title}
                </div>
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-100 rounded-md"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
