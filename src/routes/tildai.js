import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AutobiographyContent from "../components/AutobiographyContent";

const tildai = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Who is Raphael Tildai?." text="Read more about me." />
      <AutobiographyContent />
      <Footer />
    </div>
  )
}

export default tildai;