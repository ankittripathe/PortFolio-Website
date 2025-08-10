import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../Components/Styles/ScrollToTopBehaviour.css";

const ScrollToTopBehaviour = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="scrollToTop">
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopBehaviour;
