import React from 'react';
import './App.css';
import './images/BGalt.jpg'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Landing from './components/Landing'

function App() {
  return (
    <main>
        <div className="container">
        <Router>
          <Landing />
          <About />
          <Portfolio />
          <div className="landing-bottom light-mode">
            <Contact />
          </div>
        </Router>
        </div>
    </main>
  );
}

export default App;
