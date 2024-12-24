import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Github, Linkedin } from 'lucide-react';
import type { Personal } from '../types/config';

interface ContactProps {
  personal: Personal;
}

const Contact: React.FC<ContactProps> = ({ personal }) => {
  return (
    <>
      <Helmet>
        <title>Contact - Portfolio</title>
        <meta name="description" content="Get in touch with me" />
      </Helmet>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Get in Touch</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in hearing about new opportunities and collaborations.
              </p>
              <div className="space-y-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-coral-600"
                >
                  <Mail size={20} />
                  {personal.email}
                </a>
                <a 
                  href={personal.social.github}
                  className="flex items-center gap-2 text-gray-600 hover:text-coral-600"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href={personal.social.linkedin}
                  className="flex items-center gap-2 text-gray-600 hover:text-coral-600"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;