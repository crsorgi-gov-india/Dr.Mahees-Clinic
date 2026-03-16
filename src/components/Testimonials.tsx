import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Aisha Bhat',
      text: 'Dr. Mahee is incredibly skilled. I had a painless root canal treatment. The clinic is spotless and the staff is very welcoming. Highly recommended!',
      rating: 5
    },
    {
      name: 'Tariq Ahmed',
      text: 'Got my dental implants done here. The entire process was smooth and transparent. The pricing is very reasonable for the premium quality of care provided.',
      rating: 5
    },
    {
      name: 'Saima Khan',
      text: 'Best aesthetic dental clinic in Srinagar! My teeth whitening results are amazing. Dr. Mahee explained everything patiently before starting the procedure.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-50 text-secondary-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary-500"></span>
            Patient Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Read about the experiences of our satisfied patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100"
            >
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 -z-0" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
