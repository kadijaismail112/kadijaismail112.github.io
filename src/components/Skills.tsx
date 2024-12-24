import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Django', 'TensorFlow']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Mentoring', 'Public Speaking', 'Problem Solving', 'Team Collaboration']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Skills & Expertise</h2>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors">
              Download Resume
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-gray-600 rounded-lg shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;