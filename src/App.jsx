import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Project from "./Components/Project";
import Achievements from "./Components/Acheivements";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-600 selection:text-black">
      <div className="fixed top-0 -z-10 w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.5),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container  mx-auto px-10 lg:px-20">
        <Navbar />
        <Hero />
        <Education />
        <Tech />
        <Project />
        <Certification/>
        <Achievements />
        <Contact/>
      </div>
    </div>
  );
};

export default App;
