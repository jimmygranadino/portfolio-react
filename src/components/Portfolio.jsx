import React from 'react';

const Portfolio = () => {
    
    return (
        <section>
            <div className="content night dark-mode light-mode">
                <h1 className="headings night dark-mode light-mode" id="portfolio">PORTFOLIO:</h1>
                <div className="portfolio-grid night dark-mode light-mode">
                    <a href="https://wonderful-haibt-c86035.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <div className="port-one night dark-mode light-mode">
                            <span className="port-title-card night dark-mode light-mode">
                                <span className="port-title-text night dark-mode light-mode">
                                    miniBlab
                                </span>
                            </span>
                            <span className="port-body-card night dark-mode light-mode">
                                <span className="content-text night dark-mode light-mode">Light-weight chatroom web app utilizing Socket.io</span>
                            </span>
                        </div>
                    </a>
                    <br/>
                    <a href="https://colcities.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <div className="port-two night dark-mode light-mode">
                            <span className="port-title-card night dark-mode light-mode">
                                <span className="port-title-text night dark-mode light-mode">
                                        COL Cities
                                </span>
                            </span>
                            <span className="port-body-card night dark-mode light-mode">
                                <span className="content-text night dark-mode light-mode">Exchange rates for a list of curated cities across the globe using the Fixer.io API</span>
                            </span>
                        </div>
                    </a>
                    <br />
                    <a href="https://jimmygranadino.github.io/badgerdodger/" target="_blank" rel="noopener noreferrer">
                        <div className="port-three night dark-mode light-mode">
                            <span className="port-title-card night dark-mode light-mode">
                                <span className="port-title-text night dark-mode light-mode">
                                    Badger Dodger
                                </span>
                            </span>
                            <span className="port-body-card night dark-mode light-mode">
                                <span className="content-text night dark-mode light-mode">2D scroller where you lead a badger across unforgiving terrain in pursuit of food</span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;