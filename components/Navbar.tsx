import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-brand-purple to-brand-pink rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wider text-sm sm:text-lg uppercase">Art of Customization</span>
            <span className="text-[10px] text-gray-400 tracking-[0.2em] hidden sm:block">PRINT & GIFT STUDIO</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-pink ${
                  isActive ? 'text-brand-pink' : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-shadow duration-300 transform hover:scale-105"
          >
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? 'text-brand-pink' : 'text-gray-200'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-white text-brand-purple font-bold rounded-full"
              >
                Get Started
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
