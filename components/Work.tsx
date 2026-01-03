
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Sparkles, BrainCircuit } from 'lucide-react';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<{id: string, text: string} | null>(null);
  
  const categories = ['All', 'Full Stack', 'Mobile', 'Frontend'];
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getAIInsight = async (project: any) => {
    setAiLoading(project.id);
    try {
      // Mock AI Insight or trigger your real AI service here
      // For this demo, we'll use a local generation logic that feels AI-like
      await new Promise(r => setTimeout(r, 1200));
      const insights = [
        "Architected with high-availability in mind, leveraging edge computing to reduce latency by 40%.",
        "Implemented a custom reactive state management system that optimized rendering cycles for 10k+ concurrent elements.",
        "Integrated advanced CI/CD pipelines resulting in zero-downtime deployments for global users.",
        "Focus on micro-interactions and accessibility (WCAG 2.1) ensures a seamless experience for diverse user groups."
      ];
      setAiInsight({ id: project.id, text: insights[Math.floor(Math.random() * insights.length)] });
    } finally {
      setAiLoading(null);
    }
  };

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2">
              <BrainCircuit size={16} /> Portfolio
            </h2>
            <h3 className="text-5xl font-black text-white">Curated Engineering</h3>
          </div>

          <div className="flex flex-wrap gap-3 bg-white/5 p-2 rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.id} 
                className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-10 space-y-6 relative">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-3xl font-bold text-white leading-tight">{project.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">{project.description}</p>
                  </div>

                  {/* AI Feature inside Card */}
                  <div className="pt-4">
                    <AnimatePresence mode="wait">
                      {aiInsight?.id === project.id ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl space-y-2"
                        >
                          <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-widest">
                            <Sparkles size={12} /> AI Technical Insight
                          </div>
                          <p className="text-sm text-indigo-100/80 leading-relaxed italic">
                            "{aiInsight.text}"
                          </p>
                        </motion.div>
                      ) : (
                        <button 
                          onClick={() => getAIInsight(project)}
                          disabled={aiLoading === project.id}
                          className="flex items-center gap-2 text-xs font-black text-gray-500 hover:text-indigo-400 transition-colors uppercase tracking-widest"
                        >
                          {aiLoading === project.id ? (
                            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="inline-block">
                              <Sparkles size={14} />
                            </motion.span>
                          ) : <Sparkles size={14} />}
                          {aiLoading === project.id ? 'Generating Analysis...' : 'Get Technical AI Insight'}
                        </button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
