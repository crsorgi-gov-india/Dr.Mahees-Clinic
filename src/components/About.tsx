import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Mahee" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold font-sans">Dr. Mahee</h3>
                <p className="text-primary-100 font-medium">Chief Dental Surgeon</p>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Your <span className="text-primary-600">Perfect Smile</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Dr. Mahee's Implant & Aesthetic Dental Clinic, we believe that a healthy smile is the foundation of confidence. Located in the heart of Srinagar, our clinic combines advanced dental technology with compassionate care to provide exceptional treatments.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dr. Mahee and our team of specialists are committed to delivering personalized dental solutions, ranging from routine check-ups to complex implant surgeries and aesthetic smile makeovers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <HeartPulse size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">To provide accessible, high-quality, and pain-free dental care to our community.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the most trusted and advanced dental care center in Jammu & Kashmir.</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {[
                'Patient-centric approach',
                'Strict sterilization protocols',
                'State-of-the-art diagnostic tools',
                'Comfortable and relaxing environment'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-secondary-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
