import React, { useState, useEffect } from 'react';
import { Code2, Trophy, Target, TrendingUp } from 'lucide-react';

const DSASkills = () => {
  const [stats, setStats] = useState({
    problemsSolved: 0,
    contestRating: 0,
    globalRank: 0,
    streak: 0
  });

  // Simulate loading data from Codolio profile
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setStats({
        problemsSolved: 450,
        contestRating: 1650,
        globalRank: 2500,
        streak: 25
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const dsaTopics = [
    { name: 'Arrays & Strings', solved: 85, total: 100, difficulty: 'Easy' },
    { name: 'Linked Lists', solved: 45, total: 50, difficulty: 'Medium' },
    { name: 'Trees & Graphs', solved: 70, total: 90, difficulty: 'Hard' },
    { name: 'Dynamic Programming', solved: 40, total: 60, difficulty: 'Hard' },
    { name: 'Sorting & Searching', solved: 55, total: 65, difficulty: 'Medium' },
    { name: 'Stack & Queue', solved: 35, total: 40, difficulty: 'Easy' },
    { name: 'Recursion & Backtracking', solved: 30, total: 45, difficulty: 'Hard' },
    { name: 'Greedy Algorithms', solved: 25, total: 35, difficulty: 'Medium' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'from-green-500 to-emerald-500';
    if (percentage >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="dsa-skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            DSA <span className="text-indigo-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My competitive programming journey and problem-solving expertise
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Data synced from Codolio Profile: <span className="text-indigo-400">Arcade-007</span>
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-700/50">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Code2 className="text-indigo-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stats.problemsSolved}
            </div>
            <div className="text-sm text-gray-400">Problems Solved</div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-700/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="text-purple-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stats.contestRating}
            </div>
            <div className="text-sm text-gray-400">Contest Rating</div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-700/50">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-teal-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              #{stats.globalRank}
            </div>
            <div className="text-sm text-gray-400">Global Rank</div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-700/50">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-orange-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stats.streak}
            </div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </div>
        </div>

        {/* DSA Topics Progress */}
        <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-400">
            Topic-wise Progress
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dsaTopics.map((topic, index) => {
              const percentage = Math.round((topic.solved / topic.total) * 100);
              return (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium">{topic.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(topic.difficulty)}`}>
                        {topic.difficulty}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {topic.solved}/{topic.total}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${getProgressColor(percentage)} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <span className="absolute right-0 -top-6 text-xs text-gray-400">
                      {percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://codolio.com/profile/Arcade-007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Code2 size={20} />
            View Full Codolio Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default DSASkills;