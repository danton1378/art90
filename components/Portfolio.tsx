import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';

const categories = ['All', 'Apparel', 'Mugs', 'Corporate', 'Frames'];

// Placeholder images
const portfolioData: PortfolioItem[] = [
  { id: '1', title: 'Neon Vibe Hoodie', category: 'Apparel', imageUrl: 'https://picsum.photos/600/600?random=1' },
  { id: '2', title: 'StartUp Tech Kit', category: 'Corporate', imageUrl: 'https://picsum.photos/600/800?random=2' },
  { id: '3', title: 'Magic Photo Mug', category: 'Mugs', imageUrl: 'https://picsum.photos/600/600?random=3' },
  { id: '4', title: 'Wedding Anniversary Frame', category: 'Frames', imageUrl: 'https://picsum.photos/600/700?random=4' },
  { id: '5', title: 'Company Branding Bottle', category: 'Corporate', imageUrl: 'https://picsum.photos/600/600?random=5' },
  { id: '6', title: 'Minimalist T-Shirt', category: 'Apparel', imageUrl: 'https://picsum.photos/600/800?random=6' },
  { id: '7', title: 'Frosted Beer Mug', category: 'Mugs', imageUrl: 'https://picsum.photos/600/600?random=7' },
  { id: '8', title: 'Abstract Canvas Art', category: 'Frames', imageUrl: 'https://picsum.photos/600/600?random=8' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Selected <span className="text-white">Works</span></h2>
            <p className="text-gray-400">Explore our gallery of custom creations.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-black scale-105' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="relative group cursor-zoom-in overflow-hidden rounded-xl aspect-square"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-pink text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={() => setSelectedId(null)}
            >
              <button className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X size={24} />
              </button>
              
              {portfolioData.find(i => i.id === selectedId) && (
                 <motion.div 
                   layoutId={selectedId}
                   className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden bg-brand-dark border border-white/10"
                   onClick={(e) => e.stopPropagation()}
                 >
                   <div className="grid md:grid-cols-2 h-full">
                     <div className="h-[400px] md:h-full">
                        <img 
                          src={portfolioData.find(i => i.id === selectedId)?.imageUrl} 
                          alt="Selected" 
                          className="w-full h-full object-cover" 
                        />
                     </div>
                     <div className="p-8 flex flex-col justify-center">
                        <span className="text-brand-purple font-bold tracking-widest text-sm uppercase mb-2">
                          {portfolioData.find(i => i.id === selectedId)?.category}
                        </span>
                        <h2 className="text-3xl font-serif text-white font-bold mb-4">
                          {portfolioData.find(i => i.id === selectedId)?.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          This project highlights our attention to detail and high-quality printing process. 
                          Whether it is a personal gift or corporate branding, we ensure vivid colors and durable materials.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                           <div className="border-l-2 border-brand-pink pl-3">
                              <span className="block text-gray-500 text-xs">Material</span>
                              Premium Grade
                           </div>
                           <div className="border-l-2 border-brand-cyan pl-3">
                              <span className="block text-gray-500 text-xs">Turnaround</span>
                              24-48 Hours
                           </div>
                        </div>
                     </div>
                   </div>
                 </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
