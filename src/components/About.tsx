import React from 'react';
import { Code, Coffee, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Software Engineer passionate about building scalable solutions and learning new technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer with a strong foundation in computer science and hands-on experience 
              in full-stack development. My journey in technology is driven by curiosity and a desire to create 
              meaningful digital solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies, machine learning, and software architecture, I enjoy 
              tackling complex challenges and continuously expanding my skill set. I believe in writing clean, 
              efficient code and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="text-blue-400" size={24} />
                </div>
                <p className="text-sm text-gray-300">Clean Code</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="text-purple-400" size={24} />
                </div>
                <p className="text-sm text-gray-300">Fast Performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Coffee className="text-teal-400" size={24} />
                </div>
                <p className="text-sm text-gray-300">Always Learning</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;