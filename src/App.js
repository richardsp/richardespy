import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cooking from './components/Cooking';
import StuffILike from './components/StuffILike';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Home from './components/Home';  // Assuming you have a Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/cooking">Cooking</Link>
            </li>
            <li>
              <Link to="/stuff-i-like">Stuff I Like</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/stuff-i-like" element={<StuffILike />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
