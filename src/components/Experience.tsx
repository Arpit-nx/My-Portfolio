import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Gen AI Intern',
      company: 'AI Wallah',
      location: 'Location/Remote',
      duration: 'July, 2025 - August, 2025',
      type: 'Internship',
      description: [
        'Developed and maintained web applications using AI Tools and Technologies',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive UI components and optimized application performance',
        'Participated in code reviews and followed best practices for software development'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Git', 'OpenAI', 'N8N', 'LangChain']
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-orange-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Briefcase className="text-orange-400" size={24} />
                    </div>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-orange-400 mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;