
import React, { useState } from 'react';
import { UserIcon } from './icons/UserIcon';
import { MailIcon } from './icons/MailIcon';
import { MessageIcon } from './icons/MessageIcon';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you for your message!');
    // In a real app, you would handle form submission here.
  };

  return (
    <section id="contact" className="w-full max-w-2xl scroll-mt-20">
      <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-5xl font-bold text-cyan-300 text-center mb-8 tracking-wider">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <UserIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name"
              required
              className="w-full bg-cyan-950/50 border border-cyan-700/50 rounded-lg py-3 pr-4 pl-12 text-white placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400" 
            />
          </div>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <MailIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-cyan-950/50 border border-cyan-700/50 rounded-lg py-3 pr-4 pl-12 text-white placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400" 
            />
          </div>
          <div className="relative">
            <div className="absolute top-4 left-0 flex items-center pl-4 pointer-events-none">
              <MessageIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5} 
              required
              className="w-full bg-cyan-950/50 border border-cyan-700/50 rounded-lg py-3 pr-4 pl-12 text-white placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg tracking-widest uppercase transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.400)]"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center mt-6 text-green-400">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
