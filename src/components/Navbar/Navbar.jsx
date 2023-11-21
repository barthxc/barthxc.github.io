import "./Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);






  return (
    <>
      <div className="container-menu">
        <img src="./LOGO_MORADO-B1.png" alt="logo" className="logo" />
        <div className="menu"></div>

        <nav>
          <ul className="menulist">
            <li>
              <a href="#home"  className="active">
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#proyects">Proyect</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
