import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import type { Config } from '../types/config';

interface HomeProps {
  config: Config;
}

const Home: React.FC<HomeProps> = ({ config }) => {
  return (
    <>
      <Helmet>
        <title>{config.personal.name} - Portfolio</title>
        <meta name="description" content={config.personal.bio} />
      </Helmet>
      <Hero />
      <About />
      <Projects projects={config.projects} />
      <Skills skills={config.skills} />
      <Contact personal={config.personal} />
    </>
  );
};

export default Home;