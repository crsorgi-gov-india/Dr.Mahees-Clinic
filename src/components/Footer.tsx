import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <h1 className="font-sans font-bold text-lg leading-tight text-white">Dr. Mahee's</h1>
                <p className="text-xs text-primary-400 font-medium tracking-wider">DENTAL CLINIC</p>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced dental care with precision and comfort. Your trusted partner for a healthy, beautiful smile in Srinagar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-sans">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Why Choose Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-primary-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-sans">Our Services</h4>
            <ul className="space-y-3">
              {['Dental Implants', 'Cosmetic Dentistry', 'Teeth Whitening', 'Root Canal Treatment', 'Braces & Aligners', 'General Dentistry'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-primary-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-sans">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Shop No.1, MIR ABAD, Al Barq Hospital, Court Road Mominabad, Batamaloo, Srinagar - 190009</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+919622452158" className="hover:text-primary-400 transition-colors">+91 96224 52158</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@drmaheesclinic.com" className="hover:text-primary-400 transition-colors">info@drmaheesclinic.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dr. Mahee's Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
