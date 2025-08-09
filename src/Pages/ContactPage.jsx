import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Projects from "../Components/Projects";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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

export default ContactPage;
