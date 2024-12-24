import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Odin Replicator CLI',
    description: 'A command-line tool for automated database replication and schema validation, built with Node.js and TypeScript.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'Node.js', 'CLI'],
    github: 'https://github.com/kadija-ismail/odin-replicator',
    live: 'https://www.npmjs.com/package/odin-replicator'
  },
  {
    title: 'Bayesian Structure Learning',
    description: 'Implementation of advanced Bayesian network algorithms for structural learning in large datasets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Machine Learning', 'Statistics'],
    github: 'https://github.com/kadija-ismail/bayesian-learning'
  },
  {
    title: 'Material Set Validator',
    description: 'Web application for validating and analyzing material datasets using React and D3.js.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'D3.js', 'TypeScript'],
    github: 'https://github.com/kadija-ismail/material-validator',
    live: 'https://material-validator.demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-gray-900 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;