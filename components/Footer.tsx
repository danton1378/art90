import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
           <h2 className="text-2xl font-bold text-white mb-2">ART OF CUSTOMIZATION</h2>
           <p>Turning Ideas into Reality since 2015.</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Art of Customization. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Designed with ❤️ in Pune.</p>
      </div>
    </footer>
  );
};

export default Footer;
