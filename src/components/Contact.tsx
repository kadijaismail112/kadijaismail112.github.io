import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers and educators. Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:contact@kadijaismail.com" 
                   className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail size={20} />
                  contact@kadijaismail.com
                </a>
                <a href="https://github.com/kadija-ismail" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                  github.com/kadija-ismail
                </a>
                <a href="https://linkedin.com/in/kadija-ismail" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={20} />
                  linkedin.com/in/kadija-ismail
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;