import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { Project } from '../types/config';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>Projects - Portfolio</title>
        <meta name="description" content="View my latest projects and work" />
      </Helmet>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;