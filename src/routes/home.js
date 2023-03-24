import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Project range="3" title="Featured Projects"/>
      <Skills />
      <Certificate range="3" title="Featured Certificates" />
      <Footer />
    </div>
  );
}

export default home;