import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cooking from './components/Cooking';
import Travel from './components/Travel';
import Ideas from './components/Ideas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecipeTemplate from './components/recipes/_RecipeTemplate';
import IdeaTemplate from './components/ideas/_IdeasTemplate';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/contact" element={<Contact />} />
          {/* Dynamic route for recipes */}
          <Route path="/recipes/:recipeId" element={<RecipeTemplate />} />
          {/* Dynamic route for ideas */}
          <Route path="/ideas/:ideaId" element={<IdeaTemplate />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
