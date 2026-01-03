
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, QUALIFICATIONS } from '../constants';
import { GraduationCap, Code2 } from 'lucide-react';

const Qualifications: React.FC = () => {
  return (
    <section id="qualifications" className="py-24 px-6 bg-[#050914] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-indigo-500 uppercase tracking-widest"
          >
            My Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Qualifications & Expertise
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education & Experience */}
          <div className="space-y-10">
            <h4 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                <GraduationCap size={20} />
              </span>
              Education & Certs
            </h4>
            <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-white/5">
              {QUALIFICATIONS.map((q, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative pl-14 group"
                >
                  <div className="absolute left-[15px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                  <span className="text-sm text-indigo-400 font-bold mb-1 block tracking-tight">{q.period}</span>
                  <h5 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{q.title}</h5>
                  <p className="text-gray-400 font-medium mb-2">{q.institution}</p>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-md">{q.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-10">
            <h4 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                <Code2 size={20} />
              </span>
              Technical Proficiencies
            </h4>
            <div className="grid gap-8 p-8 glass rounded-[2.5rem] border border-white/5">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-300 tracking-tight">{skill.name}</span>
                    <span className="text-indigo-400 tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.2 + (idx * 0.1), 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="h-full bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 rounded-full relative"
                    >
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
