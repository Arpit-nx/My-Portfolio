import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Udemy Certified Python Developer',
      issuer: 'Udemy',
      date: '22nd July, 2025',
      credentialId: 'XXXXXXXX',
      description: 'Demonstrated proficiency in developing and maintaining applications with Python',
      link: '#'
    },
    {
      title: 'Developing AI Applications on Azure',
      issuer: 'Learn Quest',
      date: '15th June, 2025',
      credentialId: 'XXXXXXXX',
      description: 'Expertise in designing, building, and deploying applications on Azure',
      link: '#'
    },
  ];

  const achievements = [
    {
      title: 'Hackathon Winner',
      event: 'College Tech Fest 2023',
      description: 'Fourth place in Smart India Hackathon 2023 College selection round',
      date: 'September 2023'
    },
    {
      title: 'Coding Competition',
      event: 'CodeChef Long Challenge',
      description: 'Ranked in top 100 participants in monthly coding competition',
      date: 'Month Year'
    },
    {
      title: 'Open Source Contributor',
      event: 'Hacktoberfest 2023',
      description: 'Successfully contributed to 10+ open source projects',
      date: 'October 2023'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-yellow-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and notable achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Award className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                        <p className="text-yellow-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Award className="text-yellow-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                      <p className="text-yellow-400">{achievement.event}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={14} />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;