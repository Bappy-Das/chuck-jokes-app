import React from 'react';
import './Header.scss'

const Header = () => {

    return (
        <div class="topnav">
            <div class='topnav-menuItem'>
            <a class="active" href="#home">SO FUNKTIONIERT'S</a>
            <a href="#news">SONDERANGEBOTE</a>
            <a onclick="myFunction()" class="dropbtn">MEIN BEREICH</a>
            
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            </div>
        </div>
        
    );
};

export default Header;