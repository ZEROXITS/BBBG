
import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg ${className}`}>
    {children}
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-4xl scroll-mt-20">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img 
              src="https://picsum.photos/seed/fabio-portrait/200" 
              alt="Fabio's Portrait"
              className="w-40 h-40 object-cover rounded-full border-4 border-cyan-500 shadow-[0_0_25px_theme(colors.cyan.500)]"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-cyan-300 mb-4 tracking-wider">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate creator and developer with a love for building immersive digital experiences. My journey in tech is driven by curiosity and a desire to merge art with technology. I specialize in frontend development, 3D graphics, and user experience design.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              {['React', 'TypeScript', '3D Modeling', 'UI/UX', 'Web Performance'].map(skill => (
                <span key={skill} className="bg-cyan-900/50 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
