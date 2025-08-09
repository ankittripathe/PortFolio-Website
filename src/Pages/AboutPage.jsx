import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default AboutPage;
