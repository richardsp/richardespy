import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cooking from './components/Cooking';
import ChickenRice from './components/recipes/ChickenRice';
import ButterChicken from './components/recipes/ButterChicken';
import StuffILike from './components/StuffILike';
import Contact from './components/Contact';
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
          <Route path="/recipes/chickenrice" element={<ChickenRice />} />  {/* Added this line */}
          <Route path="/recipes/butterchicken" element={<ButterChicken />} />  {/* Added this line */}
          <Route path="/stuffilike" element={<StuffILike />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
