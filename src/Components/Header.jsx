import { useState } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "../Components/Styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menubtn, setMenubtn] = useState(false);

  const toggle = () => {
    setMenubtn(!menubtn);
    console.log(menubtn);
  };

  return (
    <>
      <div className="header">
        <div className="head-name">Ankit</div>
        <ul className="nav-list">
          <li className="home" id="home">
            <Link to="/">Home</Link>
          </li>
          <li className="about" id="about">
            <Link to="/about">About</Link>
          </li>
          <li className="projects" id="projects">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="contact" id="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="menu-button" id="menu-btn" onClick={toggle}>
          {menubtn ? (
            <img src={close} alt="CloseButton" />
          ) : (
            <img src={menu} alt="MenuButton" />
          )}
        </button>
      </div>

      {menubtn ? (
        <div className="res-nav-list">
          <ul>
            <li className="home" id="home">
              <Link to="/">Home</Link>
            </li>
            <li className="about" id="about">
              <Link to="/about">About</Link>
            </li>
            <li className="projects" id="projects">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="contact" id="contact">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Header;
