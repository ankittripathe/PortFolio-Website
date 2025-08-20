import { useEffect, useState } from "react";
import "../Components/Styles/ThemeToogle.css";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
