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
                            <h2 className="port-title-text">miniBlab</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">Light-weight chatroom web app utilizing Socket.io</p>
                            <p className="content-text"><strong>Tech Stack:</strong> Vue.js, Express, Node.js w/ chat server running on Heroku and connected to frontend on Netlify.</p>
                            <br />
                            <a href="https://github.com/jimmygranadino/miniblab" target="_blank" rel="noopener noreferrer" className="norm-btn">REPO</a> <a href="https://wonderful-haibt-c86035.netlify.app/" target="_blank" rel="noopener noreferrer" className="norm-btn">DEPLOYMENT</a>
                        </div>
                    </div>
                    <div className="port-two">
                        <div className="port-title-card">
                            <h2 className="port-title-text">COL Cities</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">Retrieve the most recent exchange rates for a list of curated cities spread across the globe using the Fixer.io API.</p>
                            <p className="content-text"><strong>Tech Stack:</strong> Express, Node.js and PostgreSQL.</p>
                            <br />
                            <a href="https://github.com/jimmygranadino/p2" target="_blank" rel="noopener noreferrer" className="norm-btn">REPO</a> <a href="https://colcities.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="norm-btn">DEPLOYMENT</a>
                        </div>
                    </div>
                    <div className="port-three">
                        <div className="port-title-card">
                            <h2 className="port-title-text">Badger Dodger</h2>
                        </div>
                        <div className="port-body-card">
                            <p className="content-text">This is a 2D scrolling game where you lead a plucky badger across unforgiving terrain in pursuit of food.</p>
                            <p className="content-text"><strong>Tech Stack:</strong> HTML, CSS and vanilla JavaScript.</p>
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