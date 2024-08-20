import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cooking from './components/Cooking';
import StuffILike from './components/StuffILike';
import Contact from './components/Contact';
import WhatILearned from './components/WhatILearned';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/stuffilike" element={<StuffILike />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <WhatILearned />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
