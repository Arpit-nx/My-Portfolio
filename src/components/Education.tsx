import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Sister Nivedita University',
      location: 'Location, Kolkata, West Bengal, India',
      duration: '2023 - 2027',
      grade: 'CGPA: 8.80/10.0',
      description: 'Specialized in software engineering, data structures, algorithms, and machine learning. Active participant in coding competitions and technical societies.'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Crescent Public School',
      location: 'Location, Bokaro Steel City, Jharkhand, India',
      duration: '2021 - 2023',
      grade: 'Percentage: 92.6%',
      description: 'Science stream with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-green-400" size={24} />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-green-400 mb-2">{edu.institution}</h4>
                  <p className="text-blue-300 font-medium mb-3">{edu.grade}</p>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;