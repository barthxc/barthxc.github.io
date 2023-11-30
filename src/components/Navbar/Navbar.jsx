import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src="./LOGO_MORADO-B1.png" alt="logo" className="logo" />
      <div className="container-menu">
        <nav>
          <ul className="menulist">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Proyect</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div
            className={`toggle_btn ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          ></div>
        </nav>

        <div
          className={`dropdown_menu ${isOpen ? "open" : ""}`}
          id="dropdown_menu"
        >
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Proyect
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
