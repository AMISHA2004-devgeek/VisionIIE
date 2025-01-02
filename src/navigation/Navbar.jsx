import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const NavDropdown = ({ title, items, isOpen, toggleDropdown, closeAll }) => {
  const dropdownRef = useRef(null);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg transition-all duration-200 origin-top-left
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={closeAll}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

const MobileNavItem = ({ title, items, isOpen, toggleDropdown, closeMenu }) => {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700"
        onClick={toggleDropdown}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={closeMenu}
            className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const navItems = {
    'What We Do': [
      { text: 'Approach', link: '#approach' },
      { text: 'Events', link: '#events' },
      { text: 'ChangeMakers', link: '#changemakers' }
    ],
    'Who We Are': [
      { text: 'About Us', link: '#aboutus' },
      { text: 'Partners', link: '#partners' }
    ],
    'Insights': [
      { text: 'Insights', link: '#insights' },
      { text: 'Media', link: '#media' }
    ]
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setOpenMobileDropdown(null);
  };

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="font-serif text-xl">
            VisionIIE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(navItems).map(([title, items]) => (
              <NavDropdown
                key={title}
                title={title}
                items={items}
                isOpen={openDropdown === title}
                toggleDropdown={() => setOpenDropdown(openDropdown === title ? null : title)}
                closeAll={closeAll}
              />
            ))}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 ml-2 text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-200 ${
            isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 ml-2 text-gray-700 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeAll}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-y-auto h-full py-4">
            {Object.entries(navItems).map(([title, items]) => (
              <MobileNavItem
                key={title}
                title={title}
                items={items}
                isOpen={openMobileDropdown === title}
                toggleDropdown={() => setOpenMobileDropdown(openMobileDropdown === title ? null : title)}
                closeMenu={() => {
                  setOpenMobileDropdown(null);
                  setIsMobileMenuOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;