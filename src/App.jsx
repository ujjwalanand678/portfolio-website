import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import StarsBackground from "./Components/StarsBackground";
import CursorTrail from "./Components/CursorTrail";

function App() {
  return (
    <div className="relative">
      <StarsBackground />
     <CursorTrail />

      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
