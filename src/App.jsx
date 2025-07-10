import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import StarsBackground from "./Components/StarsBackground";
import CursorTrail from "./Components/CursorTrail";
import RippleEffect from "./Components/RippleEffect";
import CustomCursor from "./Components/CustomCursor";
import BlobCursor from "./Components/BlobCursor";
import RocketTrail from "./Components/RocketTrail";

function App() {
  return (
    <div className="relative">
        {/* <RocketTrail /> */}
      <RippleEffect />
      <StarsBackground />
     {/* <CursorTrail /> */}
     {/* <CustomCursor /> */}
      {/* <BlobCursor /> */}
     

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
