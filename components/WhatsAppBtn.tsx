import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppBtn: React.FC = () => {
  const phoneNumber = '919762860860'; // Country code + number
  const message = "Hi! I'm interested in custom printing.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute right-14 bg-white text-black text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
        Chat with us
      </span>
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-14 h-14 bg-gradient-to-tr from-green-600 to-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 border-2 border-white/20">
          <MessageCircle size={28} className="text-white fill-current" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppBtn;
