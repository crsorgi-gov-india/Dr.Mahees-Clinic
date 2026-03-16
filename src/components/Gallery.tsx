import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Images, MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full h-64 overflow-hidden group select-none bg-gray-200">
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt={`${title} After`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Foreground, clipped) */}
      <img 
        src={before} 
        alt={`${title} Before`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        referrerPolicy="no-referrer"
      />
      
      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <MoveHorizontal size={16} className="text-gray-600" />
        </div>
      </div>

      {/* Invisible Range Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={position} 
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Percentage of before photo shown"
      />

      {/* Labels */}
      <div 
        className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded z-10 pointer-events-none transition-opacity duration-200"
        style={{ opacity: position > 20 ? 1 : 0 }}
      >
        BEFORE
      </div>
      <div 
        className="absolute top-4 right-4 bg-secondary-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded z-10 pointer-events-none transition-opacity duration-200"
        style={{ opacity: position < 80 ? 1 : 0 }}
      >
        AFTER
      </div>
    </div>
  );
};

const Gallery = () => {
  const cases = [
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatment removing years of stains.',
      before: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dd36?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Dental Implants',
      description: 'Complete smile restoration with natural-looking implants.',
      before: 'https://images.unsplash.com/photo-1598256989800-efa412b2408a?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Cosmetic Veneers',
      description: 'Correction of gaps and alignment using premium veneers.',
      before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
            Smile Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Before & After Results
          </h2>
          <p className="text-gray-600 text-lg">
            See the real transformations of our patients. We take pride in restoring confidence through beautiful, healthy smiles.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;
