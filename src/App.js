import React from 'react';
import './App.css';
import './images/BGalt.jpg'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Divider from './components/Divider'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <main>
      <div className="container">
      <Router>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <div class="landing-bottom">
          <Contact />
        </div>
      </Router>
      </div>
    </main>
  );
}

export default App;
