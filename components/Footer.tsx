
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-white">
          DEV<span className="text-indigo-500">.</span>PORT
        </div>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Designed & Developed with ❤️ by DevPort.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
