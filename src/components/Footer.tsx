import React from 'react';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Kadija Ismail</p>
            <p className="text-gray-400">Software Engineer & Educator</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-coral-400 transition-colors cursor-pointer">
            <Music size={20} />
            <span className="text-sm">Former Stanford Band Member</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kadija Ismail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;