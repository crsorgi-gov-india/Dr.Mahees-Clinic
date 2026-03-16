import React, { useState, useEffect } from 'react';
import { Home, User, Stethoscope, ThumbsUp, MessageSquare, Phone, Calendar, Images } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Services', href: '#services', icon: <Stethoscope size={20} /> },
    { name: 'Gallery', href: '#gallery', icon: <Images size={20} /> },
    { name: 'Why Us', href: '#why-us', icon: <ThumbsUp size={20} /> },
    { name: 'Reviews', href: '#testimonials', icon: <MessageSquare size={20} /> },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <h1 className="font-sans font-bold text-lg leading-tight text-primary-900">Dr. Mahee's</h1>
                <p className="text-xs text-secondary-600 font-medium tracking-wider">DENTAL CLINIC</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm shadow-primary-500/30 flex items-center gap-2"
              >
                <Calendar size={16} />
                Book Appointment
              </a>
            </nav>

            {/* Mobile Appointment Button (Top Right) */}
            <a
              href="#contact"
              className="md:hidden bg-primary-600 text-white p-2.5 rounded-full shadow-lg"
              aria-label="Book Appointment"
            >
              <Calendar size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-2 py-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-primary-600 transition-colors"
            >
              <span className="text-current">{link.icon}</span>
              <span className="text-[10px] font-medium uppercase tracking-tighter">{link.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
