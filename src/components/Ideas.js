import React from 'react';
import { Link } from 'react-router-dom';

// Use Webpack's require.context to dynamically load all ideas
const requireIdea = require.context('./ideas', true, /^\.\/(?!IdeasTemplate).*\.js$/);

// Create an array to store all idea metadata and components
const ideasData = requireIdea.keys().map((fileName) => {
  const ideaModule = requireIdea(fileName);
  return {
    Component: ideaModule.default,
    metadata: ideaModule.ideaMetadata,
  };
});

const Ideas = () => {
  // Separate ideas by type
  const apps = ideasData.filter((idea) => idea.metadata.type === 'App');
  const stories = ideasData.filter((idea) => idea.metadata.type === 'Stories');
  const investigations = ideasData.filter((idea) => idea.metadata.type === 'Investigations');

  return (
    <section id="ideas" className="section">
      <h2>Ideas</h2>
      <p>
        Check out some of my ideas. If any of them speak to you, and you want to make them into reality, 
        feel free to pursue them!
      </p>

      {/* Apps Section */}
      <h3>Apps</h3>
      <ul>
        {apps.map((idea) => (
          <li key={idea.metadata.title}>
            <Link to={idea.metadata.link}>{idea.metadata.title}</Link>
          </li>
        ))}
      </ul>

      {/* Stories Section */}
      <h3>Stories</h3>
      <ul>
        {stories.map((idea) => (
          <li key={idea.metadata.title}>
            <Link to={idea.metadata.link}>{idea.metadata.title}</Link>
          </li>
        ))}
      </ul>

      {/* Investigations Section */}
      <h3>Investigations</h3>
      <ul>
        {investigations.map((idea) => (
          <li key={idea.metadata.title}>
            <Link to={idea.metadata.link}>{idea.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ideas;
