import  { useState } from 'react';
import './CvNav.css';

function CvNav() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <nav id="nav" className={`nav ${isOpen ? 'open' : ''}`}>
            <a className='cvmenu' href='#home' >Home</a>
                <a className='cvmenu' href='#about'>About</a>
                <a className='cvmenu' href='#skills' >Skills</a>
                <a className='cvmenu' href='#resume' >Resume</a>
            </nav>
        </div>
    );
}

export default CvNav;
