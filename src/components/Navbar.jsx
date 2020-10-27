import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../images/headerBG.jpg'

const Navbar = () => {

    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }

    return (
        <nav>
            <div className="navbar" id="myNavbar">
                <span className="navbrand-text navbrand">JG</span>
                <Link className="navbar-link" to="#contact">CONTACT</Link>
                <Link className="navbar-link" to="#portfolio">PORTFOLIO</Link>
                <Link className="navbar-link" to="#skills">SKILLS</Link> 
                <Link className="navbar-link" to="#about">ABOUT</Link>
                <a href="javascript:void(0);" className="navbar-button" onClick={myFunction}>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </a>
            </div>
        </nav>
    )
}

export default Navbar