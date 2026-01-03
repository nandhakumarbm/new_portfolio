
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      {/* Background Blobs with Motion */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 20, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10"
      />

      <div className="text-center max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
        >
          <Sparkles size={14} className="text-indigo-400" />
          <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Built with AI Intelligence</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-extrabold tracking-tight text-white leading-[0.9]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 animate-gradient">The Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          A Senior Full Stack Developer crafting next-gen digital experiences with AI-driven workflows and scalable architecture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-5 justify-center pt-6"
        >
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work" 
            className="px-8 py-5 bg-white text-black font-extrabold rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-white/5"
          >
            Explore Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="px-8 py-5 glass text-white font-extrabold rounded-2xl transition-all flex items-center gap-3"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center gap-8 text-gray-500 pt-10"
        >
          <a href="#" className="hover:text-indigo-400 transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="text-xs font-bold tracking-widest uppercase py-1">SCROLL TO DISCOVER</div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
