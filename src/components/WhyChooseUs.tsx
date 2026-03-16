import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Microscope, IndianRupee, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <UserCheck size={28} />,
      title: 'Experienced Doctor',
      description: 'Expert care led by Dr. Mahee with years of specialized experience in implants and aesthetics.'
    },
    {
      icon: <Microscope size={28} />,
      title: 'Modern Equipment',
      description: 'Equipped with the latest dental technology for precise diagnostics and painless treatments.'
    },
    {
      icon: <IndianRupee size={28} />,
      title: 'Affordable Pricing',
      description: 'Premium dental care that is transparently priced and accessible to everyone.'
    },
    {
      icon: <ThumbsUp size={28} />,
      title: 'Patient Satisfaction',
      description: 'A track record of happy patients with restored smiles and improved oral health.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-100 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary-400"></span>
              Why Choose Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Excellence in Dentistry, <br/>
              <span className="text-secondary-400">Compassion in Care.</span>
            </h2>
            
            <p className="text-primary-100 text-lg mb-10 leading-relaxed">
              We don't just treat teeth; we treat people. Our clinic is designed to provide a stress-free environment where your comfort and safety are our top priorities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-primary-200 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-efa412b2408a?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental Equipment" 
                className="rounded-2xl w-full h-64 object-cover mt-8"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="rounded-2xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary-900 p-6 rounded-2xl shadow-2xl text-center w-48">
              <p className="text-4xl font-black text-primary-600 mb-1">10k+</p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">Happy Smiles</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
