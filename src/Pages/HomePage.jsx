import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const HomePage = () => {
  // scroll to that section
  const location = useLocation();

  useEffect(() => {
    const homeSection = document.getElementById("Home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]); // triggers every time query param changes

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
