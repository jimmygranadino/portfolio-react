import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <hr></hr>
            <h1 className="headings" id="portfolio">PORTFOLIO:</h1>
            <div className="port-title-card">
                <h2 className="port-title-text">CRUD OPS</h2>
            </div>
            <div className="port-body-card">
                <p className="content-text">RESTful routing, APIs and CRUD operation showcase item here.</p>
                <br />
                <p className="content-text">Tech used include and MongoDB, Express, React.js and Node.js.</p>
                <br />
                <a href="#" className="norm-btn">REPO</a> <a href="#" className="norm-btn">DEPLOYMENT</a>
            </div>
            <div className="port-title-card">
                <h2 className="port-title-text">COL CITIES</h2>
            </div>
            <div className="port-body-card">
                <p className="content-text">Retrieve the most recent exchange rates for a list of curated cities spread across the globe. Maintain a list of favorites for future endeavors where you can stretch your money the farthest.</p>
                <br />
                <p className="content-text">Tech used includes Node.js, Express and PostgreSQL.</p>
                <br />
                <a href="#" className="norm-btn">REPO</a> <a href="#" className="norm-btn">DEPLOYMENT</a>
            </div>
            <div className="port-title-card">
                <h2 className="port-title-text">BADGER DODGER</h2>
            </div>
            <div className="port-body-card">
                <p className="content-text">This is a 2D scrolling game where you lead a plucky badger across unforgiving terrain in pursuit of a badger's favorite food: Chocolate Chip Cookies! </p>
                <br />
                <p className="content-text">Tech used includes HTML5, CSS3 and JavaScript.</p>
                <br />
                <a href="#" className="norm-btn">REPO</a> <a href="#" className="norm-btn">DEPLOYMENT</a>
            </div>
        </div>
    )
}

export default Portfolio;