
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-indigo-900/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest">Connect</h2>
            <h3 className="text-5xl font-bold text-white leading-tight">Let's build something <br/> amazing together.</h3>
          </div>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-500">Email Me</span>
                <span className="text-lg font-bold text-white">hello@devport.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-500">Location</span>
                <span className="text-lg font-bold text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {['LinkedIn', 'GitHub', 'Twitter'].map(social => (
              <a key={social} href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <span className="sr-only">{social}</span>
                {/* Icons placeholder */}
                <div className="w-5 h-5 bg-current opacity-50 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 px-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 px-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 px-1">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 px-1">Message</label>
              <textarea rows={4} placeholder="Your project details..." className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
