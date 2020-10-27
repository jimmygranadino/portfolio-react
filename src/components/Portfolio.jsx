import React from 'react';

const Portfolio = () => {
    
    return (
        <section>
            <div className="content">
                <span className="span-border"></span>
                <h1 className="headings" id="portfolio">PORTFOLIO:</h1>
                <div className="portfolio-grid">
                    <div className="port-one">
                        <div className="port-title-card">
                            <h2 className="port-title-text">MINIBLAB</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">Light-weight chatroom app utilizing Socket.io and Vue.js with backend connected to Netlify via Heroku.</p>
                            <br />
                            <a href="https://github.com/jimmygranadino/miniblab" target="_blank" rel="noopener noreferrer" className="norm-btn">REPO</a> <a href="https://wonderful-haibt-c86035.netlify.app/" target="_blank" rel="noopener noreferrer" className="norm-btn">DEPLOYMENT</a>
                        </div>
                    </div>
                    <div className="port-two">
                        <div className="port-title-card">
                            <h2 className="port-title-text">COL CITIES</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">Retrieve the most recent exchange rates for a list of curated cities spread across the globe using Express, Node.js and PostgreSQL.</p>
                            <br />
                            <a href="https://github.com/jimmygranadino/p2" target="_blank" rel="noopener noreferrer" className="norm-btn">REPO</a> <a href="https://colcities.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="norm-btn">DEPLOYMENT</a>
                        </div>
                    </div>
                    <div className="port-three">
                        <div className="port-title-card">
                            <h2 className="port-title-text">BADGER DODGER</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">This is a 2D scrolling game where you lead a plucky badger across unforgiving terrain in pursuit of a badger's favorite food.</p>
                            <br />
                            <a href="https://github.com/jimmygranadino/badgerdodger" target="_blank" rel="noopener noreferrer" className="norm-btn">REPO</a> <a href="https://jimmygranadino.github.io/badgerdodger/" target="_blank" rel="noopener noreferrer" className="norm-btn">DEPLOYMENT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;