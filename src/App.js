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

// Use Webpack's require.context to dynamically load all recipes
const requireRecipe = require.context('./components/recipes', true, /^\.\/(?!RecipeTemplate).*\.js$/);

// Use Webpack's require.context to dynamically load all ideas
const requireIdea = require.context('./components/ideas', true, /^\.\/(?!IdeasTemplate).*\.js$/);

// Create an array to store all recipe components and metadata
const recipes = requireRecipe.keys().map((fileName) => {
  const recipeModule = requireRecipe(fileName);
  return { 
    Component: recipeModule.default,
    metadata: recipeModule.recipeMetadata
  };
});

// Create an array to store all idea components and metadata
const ideas = requireIdea.keys().map((fileName) => {
  const ideaModule = requireIdea(fileName);
  return {
    Component: ideaModule.default,
    metadata: ideaModule.ideaMetadata
  };
});

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          {/* Standard Routes */}
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamically Add Recipe Routes */}
          {recipes.map(({ metadata, Component }) => (
            <Route key={metadata.link} path={metadata.link} element={<Component />} />
          ))}

          {/* Dynamically Add Idea Routes */}
          {ideas.map(({ metadata, Component }) => (
            <Route key={metadata.link} path={metadata.link} element={<Component />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
