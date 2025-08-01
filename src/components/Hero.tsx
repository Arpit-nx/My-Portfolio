// import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Photo Section */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-gray-700/50 flex items-center justify-center overflow-hidden">
                {/* Placeholder for photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-6xl font-bold text-gray-400">
                  AS
                </div>
                {/* Uncomment and replace with actual photo */}
                <img 
                  src="./src/assets/image.png" 
                  alt="Arpit Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6 text-left md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm {' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Arpit Singh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              Full Stack Developer & Software Engineer passionate about creating innovative digital solutions
            </p>
            
            <p className="text-lg text-gray-400">
              I specialize in modern web technologies and love building applications that make a difference. 
              Welcome to my digital portfolio where creativity meets functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
