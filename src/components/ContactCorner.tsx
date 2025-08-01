import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, MessageCircle, X, Instagram } from 'lucide-react';

const ContactCorner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Arpit-nx',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/_arpit_singh_007',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/arpit-singh-67343023a/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:asr827013@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: Twitter,
      href: 'https://X.com/ArpitSingh008',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-fade-in">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 bg-gray-800/90 backdrop-blur-md rounded-full border border-gray-700/50 transition-all duration-300 transform hover:scale-110 ${link.color} shadow-lg hover:shadow-xl`}
              title={link.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl ${
          isOpen ? 'rotate-45' : ''
        }`}
        title={isOpen ? 'Close' : 'Contact me'}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>
    </div>
  );
};

export default ContactCorner;