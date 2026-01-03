
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
          <div className="relative aspect-square rounded-3xl overflow-hidden glass border-2 border-white/5 shadow-2xl">
            <img 
              src="https://picsum.photos/800/800?person=1" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-xl">
            <span className="block text-3xl font-bold text-white">5+</span>
            <span className="text-sm text-gray-400 font-medium">Years of Dev Experience</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest">The Story</h2>
            <h3 className="text-4xl font-bold text-white leading-tight">Passionate about bridging imagination and functional code.</h3>
          </div>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hey there! I'm a developer who thrives on creating elegant solutions to complex problems. Over the past 5 years, I've worked across the stack, focusing on performance, scalability, and user-centric design.
            </p>
            <p>
              I believe that great software isn't just about code—it's about empathy for the end user and a relentless drive for perfection in every pixel and every line of logic.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-white font-bold mb-2">Frontend</h4>
              <p className="text-sm text-gray-500">React, Next.js, Tailwind, TypeScript, Framer Motion</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Backend</h4>
              <p className="text-sm text-gray-500">Node.js, Express, PostgreSQL, MongoDB, GraphQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
