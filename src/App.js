import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cooking from './components/Cooking';
import StuffILike from './components/StuffILike';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Resume />
        <Cooking />
        <StuffILike />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Todo
// Home Page
// Menu - About - Resume - Stuff I like - What I'm cooking