import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-semibold text-gray-900">KI</a>
        <div className="flex gap-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/kadija-ismail" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/kadija-ismail" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <FileText size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;