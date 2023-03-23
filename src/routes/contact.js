import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import MyForm from '../components/MyForm';

const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact." text="Lets have a chat." />
      <MyForm />
      <Footer />
    </div>
  )
}

export default contact;