import './App.css';
import Home from "./routes/home";
import About from "./routes/about";
import Certifications from "./routes/certifications";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes basename="/">
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
