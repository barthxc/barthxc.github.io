import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './CvNav.css';


const CvNav = () => {
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
      <div className="cv-menu">

        <nav>
          <div
            className={`toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          ></div>
        </nav>

        <div
          className={`dropdown_menucv ${isOpen ? "open" : ""}`}
          id="dropdown_menu"
        >
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={()=>{setIsOpen(false)}}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={()=>{setIsOpen(false)}} >Habilidades</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>{setIsOpen(false)}} >Contacto</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default CvNav;
