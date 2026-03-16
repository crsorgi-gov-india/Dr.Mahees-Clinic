import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to transform your smile? Book an appointment or reach out to us for any queries.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Clinic Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">Shop No.1, MIR ABAD, Al Barq Hospital,<br/>Court Road Mominabad, Batamaloo,<br/>Srinagar - 190009, Jammu & Kashmir</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+919622452158" className="text-primary-600 hover:text-primary-700 font-medium text-lg">+91 96224 52158</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-64 border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.383794121221!2d74.7891!3d34.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzAxLjAiTiA3NMKwNDcnMjAuOCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col justify-center" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">Book an Appointment</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="implants">Dental Implants</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="braces">Braces & Aligners</option>
                    <option value="general">General Checkup</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your dental concern..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary-500/30"
                >
                  <Send size={18} />
                  Send Request
                </button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
