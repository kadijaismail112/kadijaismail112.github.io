import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-semibold text-gray-900">
            KI
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-coral-600 transition-colors ${
                    isActive ? 'text-coral-600' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-gray-600 hover:text-coral-600 transition-colors ${
                    isActive ? 'text-coral-600' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;