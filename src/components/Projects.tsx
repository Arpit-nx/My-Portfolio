import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Tutor',
      description: 'An intelligent tutoring system powered by AI that provides personalized learning experiences. Features adaptive questioning, progress tracking, and interactive learning modules.',
      image: './src/assets/AI-Tutor.png', // Empty for now - you can add your image later
      tech: ['Python', 'Gemini', 'React', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/Arpit-nx/AI-Tutor',
      live: '#'
    },
    {
      title: 'Psyc-mate',
      description: 'A mental health companion app that provides psychological support, mood tracking, and connects users with mental health resources and professionals.',
      image: './src/assets/Psyc_mate.png', // Empty for now
      tech: ['React', 'Flask', 'MongoDB', 'Socket.io', 'ML'],
      github: 'https://github.com/Arpit-nx/Psyc_mate',
      live: '#'
    },
    {
      title: 'Zola',
      description: 'An AI chatbot with enbedded ML nodel having advanced features including AI-powered responsiveness, accurate response with file support system(Helping user with files).',
      image: './src/assets/zola.png', // Empty for now
      tech: ['Next.js', 'TypeScript', 'Gemini', 'Shadcn', 'OpenAI'],
      github: 'https://github.com/Arpit-nx/ZOLA',
      live: 'https://askzola.vercel.app'
    },
    {
      title: 'Luxe Cereus',
      description: 'A luxury Candle brand website with elegant design, product showcase, and premium user experience. Features include virtual try-on and personalized recommendations.',
      image: './src/assets/Luxe-cereus.png', // Empty for now
      tech: ['HTML', 'Django', 'CSS', 'Javascript', 'sqlite.db'],
      github: 'https://github.com/Arpit-nx/Luxe-Cereus',
      live: '#'
    },
    {
      title: 'Virtual Lab',
      description: 'An interactive virtual laboratory platform for conducting scientific experiments online. Includes physics, chemistry, and biology simulation modules.',
      image: './src/assets/V-lab.png', // Empty for now
      tech: ['React', 'WebGL', 'Three.js', 'Javascript', 'Flask'],
      github: 'https://github.com/Arpit-nx/Virtual_Lab',
      live: '#'
    },
    {
      title: 'Movie Recommender',
      description: 'An intelligent movie recommendation system using machine learning algorithms. Analyzes user preferences and viewing history to suggest personalized content.',
      image: './src/assets/movie_recommender.png', // Empty for now
      tech: ['Python', 'Scikit-learn', 'Flask', 'React', 'MongoDB'],
      github: 'https://github.com/Arpit-nx/Project_Movie_Recommender',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Code2 className="w-12 h-12 text-teal-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Project Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Arpit-nx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;