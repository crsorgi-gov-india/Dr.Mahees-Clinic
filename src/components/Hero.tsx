import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 rounded-bl-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary-500"></span>
              Welcome to Dr. Mahee's Clinic
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Advanced Dental Care with <span className="text-primary-600">Precision</span> & <span className="text-secondary-500">Comfort</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience world-class dental treatments in Srinagar. From implants to aesthetic dentistry, we bring back your confident smile with state-of-the-art technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 text-lg"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a
                href="tel:+919622452158"
                className="bg-white hover:bg-gray-50 text-primary-900 border border-gray-200 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-lg"
              >
                <PhoneCall size={20} />
                Contact Now
              </a>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary-500" size={20} />
                <span>Expert Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary-500" size={20} />
                <span>Modern Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary-500" size={20} />
                <span>Painless Care</span>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Dental Clinic" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Patient Rating</p>
                <p className="text-xl font-bold text-gray-900">4.9/5.0</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
