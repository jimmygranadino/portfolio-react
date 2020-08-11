import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">HOME</Link>/
                <Link to="#skills">SKILLS</Link>/
                <Link to="#portfolio">PORTFOLIO</Link>
            </div>
        </nav>
    )
}

export default Navbar