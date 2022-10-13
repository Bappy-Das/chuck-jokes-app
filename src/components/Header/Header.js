import React from 'react';
import './Header.scss'

const Header = () => {

    return (
        <div className="topnav">
            <div className='topnav-menuItem'>
            <a className="active" href="#home">SO FUNKTIONIERT'S</a>
            <a href="#news">SONDERANGEBOTE</a>
            <a >MEIN BEREICH</a>
            
            <div id="myDropdown" className="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            </div>
        </div>
        
    );
};

export default Header;