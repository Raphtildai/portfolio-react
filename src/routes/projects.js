import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Project from '../components/Project';

const projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Here are my projects." />
      <Project />
      <PricingCard />
      <Footer/>
      </div>
  )
}

export default projects;