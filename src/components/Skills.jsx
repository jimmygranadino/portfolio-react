import React from 'react';
import Resume from './JGresume.pdf'

const Skills = () => {
    return (
        <section id="skills">
            <div className="content">
                <h1 className="headings" id="skills">SKILLS:</h1>
                    <div className="skill-list">
                    <p className="content-text heavy-text">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                        </svg>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </p>
                    <p className="content-text heavy-text">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-layers-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-4.578 2.441a.5.5 0 0 1-.47 0L3.188 8z"/>
                            <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"/>
                        </svg>
                        <ul>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>jQuery</li>
                            <li>Flask</li>
                        </ul>
                    </p>
                    <p className="content-text heavy-text">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-table" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                        </svg>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>SQLAlchemy</li>
                        </ul>
                    </p>
                    </div>
                <a href={Resume} target="_blank" rel="noopener noreferrer" className="res-link no-marg">VIEW MY RESUME</a>
            </div>
        </section>
    )
}

export default Skills;