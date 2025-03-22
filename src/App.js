import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-grow">
        {activeSection === "about" && <About />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "education" && <Education />}
        {activeSection === "certifications" && <Certifications />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
