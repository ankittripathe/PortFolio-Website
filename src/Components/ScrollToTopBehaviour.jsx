import { useState, useEffect } from "react";
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
        {/* <FaArrowUp size={24} /> */}
        <div className="arrowbtn">
          <span>Top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 4 L6 16 L12 12 L18 16 Z" />
          </svg>
        </div>
      </button>
    )
  );
};

export default ScrollToTopBehaviour;
