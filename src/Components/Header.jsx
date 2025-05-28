/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "../Components/Styles/Header.css";

function Header() {
  const [menubtn, setMenubtn] = useState(false);

  function toggle() {
    setMenubtn(!menubtn);
    console.log(menubtn);
  }

  return (
    <>
      <div className="header">
        <div className="head-name">Ankit</div>
        <ul className="nav-list">
          <li className="home" id="home">
            <a href="#Home">Home</a>
          </li>
          <li className="about" id="about">
            <a href="#About">About</a>
          </li>
          <li className="projects" id="projects">
            <a href="#Projects">Projects</a>
          </li>
          <li className="contact" id="contact">
            <a href="#Contact">Contact</a>
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
              <a href="#Home">Home</a>
            </li>
            <li className="about" id="about">
              <a href="#About">About</a>
            </li>
            <li className="projects" id="projects">
              <a href="#Projects">Projects</a>
            </li>
            <li className="contact" id="contact">
              <a href="#Contacts">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Header;
