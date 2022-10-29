import React, {useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }

    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 350 ){
        setScrolled(true);
    }
    else{
        setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    return (
        <nav>
            <div className={scrolled ? 'navbar scrolled dark-mode light-mode' : 'navbar dark-mode light-mode'} id="myNavbar">
                <span className="navbrand-text navbrand night dark-mode light-mode">JG</span>
                <Link className="navbar-link night dark-mode light-mode" to="#contact">CONTACT</Link>
                <Link className="navbar-link night dark-mode light-mode" to="#portfolio">PORTFOLIO</Link>
                <Link className="navbar-link night dark-mode light-mode" to="#skills">SKILLS</Link> 
                <Link className="navbar-link night dark-mode light-mode" to="#about">ABOUT</Link>
                <p className="navbar-button night dark-mode light-mode" onClick={myFunction}>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </p>
            </div>
        </nav>
    )
}

export default Navbar