import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Certificate from '../components/Certificate';

const certifications = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Certifications." text="These are my certifications." />
      <Certificate />
      <Footer />
    </div>
  )
}

export default certifications;