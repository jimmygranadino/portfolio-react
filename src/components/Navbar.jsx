import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../images/headerBG.jpg'

const Navbar = () => {


    return (
        <nav>
            <div className="navbar">
                <span className="navbrand-text navbrand">JG</span>
                <Link className="navbar-link" to="#contact">CONTACT</Link>
                <Link className="navbar-link" to="#portfolio">PORTFOLIO</Link>
                <Link className="navbar-link" to="#skills">SKILLS</Link> 
                <Link className="navbar-link" to="#about">ABOUT</Link>
            </div>
        </nav>
    )
}

export default Navbar