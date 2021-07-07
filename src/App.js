import React from 'react';
import './App.css';
import './images/BGalt.jpg'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Landing from './components/Landing'
import Info from './components/Info'

function App() {
  return (
    <main>
        <div className="container">
        <Router>
          <Landing />
          <Info />
          <Portfolio />
          <div className="landing-bottom">
            <Contact />
          </div>
        </Router>
        </div>
    </main>
  );
}

export default App;
