
import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white bg-[#020917]">
      <Background />
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <main className="max-w-7xl mx-auto flex flex-col items-center space-y-24 sm:space-y-32 md:space-y-48">
          <Header />
          <SocialLinks />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
       <footer className="relative z-10 text-center p-6 text-sm text-cyan-200/50">
        © {new Date().getFullYear()} Fabio. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
