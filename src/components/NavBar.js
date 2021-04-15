import React, { useState, useRef } from "react";
import "./navbar.scss";

const NavBar = (props) => {
  const navList = useRef(undefined);
  const navMenuIcon = useRef(undefined);
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => {
    if (showMenu) {
      navList.current.classList.remove("hidden");
      navList.current.classList.add("visible");
      navMenuIcon.current.classList.remove("fa-bars");
      navMenuIcon.current.classList.add("fa-times");
    } else {
      if (navList.current.className.includes("visible")) {
        navList.current.classList.add("fadeout");
      } else {
        navList.current.classList.add("visible");
        navMenuIcon.current.classList.add("fa-times");
        navMenuIcon.current.classList.remove("fa-bars");
        return;
      }
      navList.current.classList.remove("visible");
      setTimeout(() => {
        navList.current.classList.remove("fadeout");
        navList.current.classList.add("hidden");
      }, 500);
      navMenuIcon.current.classList.remove("fa-times");
      navMenuIcon.current.classList.add("fa-bars");
    }
    setShowMenu(!showMenu);
  };
  return (
    <div className="nav-holder">
      <button onClick={toogleMenu} className="nav-bar-button ">
        <i ref={navMenuIcon} className="nav-bar-icon fas fa-bars"></i>
      </button>
      <ul ref={navList} className="nav-list">
        <li className="nav-item">
          <span>Work Experience</span>
        </li>
        <li className="nav-item">
          <span>Tecnologies</span>
        </li>
        <li className="nav-item">
          <span>Education</span>
        </li>
        <li className="nav-item">
          <span>Portfolio</span>
        </li>
        <li className="nav-item">
          <span>Contact Me</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
