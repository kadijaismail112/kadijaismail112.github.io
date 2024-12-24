import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Kadija Ismail"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                As a Stanford graduate with a passion for technology and education, I've dedicated my career to building innovative software solutions while helping others grow in the field.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My journey includes significant achievements in software engineering, from developing the Odin Replicator CLI to implementing Bayesian Structure Learning algorithms. But beyond the code, I'm deeply committed to education and mentorship.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through my work with the High School Support Initiative and various mentoring programs, I've helped numerous students discover their path in technology. When I'm not coding or teaching, you might find me performing with marching bands or leading club activities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-600">Stanford University<br/>Computer Science, B.S.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600">5+ years in Software Engineering<br/>3+ years in Education</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;