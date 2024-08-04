import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Portfolio />
        <Blog />
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