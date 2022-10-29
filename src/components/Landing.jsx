import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { HashLink as Link } from 'react-router-hash-link';

const Landing = () => {
    
    return (
        <section id="landing">
                <div className="landing">
                    <Navbar />
                    <Header />
                    <div className="scroller">
                        <Link to="#about">
                            <i className="arrow dark-mode light-mode"></i>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default Landing;