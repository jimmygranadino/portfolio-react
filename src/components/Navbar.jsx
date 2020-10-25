import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../images/headerBG.jpg'

const Navbar = () => {


    return (
        <nav>
            <div>
                <Link className="navbar-link" to="#about">ABOUT</Link>
                <Link className="navbar-link" to="#skills">SKILLS</Link>
                <Link className="navbar-link" to="#portfolio">PORTFOLIO</Link>
                <Link className="navbar-link" to="#contact">CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar