import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ResumeContent from "../components/ResumeContent";

const resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="MY RESUME." text="Check my updated Resume." />
      <ResumeContent />
      <Footer />
    </div>
  )
}

export default resume;