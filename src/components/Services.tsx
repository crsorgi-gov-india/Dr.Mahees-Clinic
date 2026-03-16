import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Stethoscope, Syringe, Activity, Smile, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Syringe size={32} />,
      title: 'Dental Implants',
      description: 'Permanent, natural-looking replacements for missing teeth to restore your smile and chewing function.',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers including veneers, bonding, and contouring for a flawless appearance.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: <Smile size={32} />,
      title: 'Teeth Whitening',
      description: 'Professional, safe, and effective whitening treatments for a brighter, more confident smile.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: <Activity size={32} />,
      title: 'Root Canal Treatment',
      description: 'Painless endodontic therapy to save infected teeth and relieve severe dental pain.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Braces & Aligners',
      description: 'Orthodontic solutions including traditional braces and clear aligners for perfectly straight teeth.',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'General Dentistry',
      description: 'Comprehensive check-ups, cleanings, fillings, and preventive care for optimal oral health.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of specialized dental treatments tailored to meet your unique needs, ensuring a healthy and beautiful smile.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 border ${service.color} transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Learn more <span className="text-xl leading-none">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
