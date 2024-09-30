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
  // const investigations = ideasData.filter((idea) => idea.metadata.type === 'Investigations');

  return (
    <section id="ideas" className="section">
      <h2>Ideas</h2>
      <p>
        Many years ago, I was talking with a friend about some of my ideas, and how could I monetize them. This friend said something like, "Would the world around you be richer if your ideas were realized, or is it better for you to hold on to them, and hope you do something with them... someday?"
        </p>
        <p>
        This thought spoke to me. Here are all of the things that I would love to realize, but I'm not in a position to do so. If you like any of them, and you want to make them into reality, 
        it would make me very happy!!
      </p>

      {/* Apps Section */}
      <h3>App Ideas</h3>
      <ul>
        {apps.map((idea) => (
          <li key={idea.metadata.title}>
            <Link to={idea.metadata.link}>{idea.metadata.title}</Link>
          </li>
        ))}
      </ul>

      {/* Stories Section */}
      <h3>Story Ideas</h3>
      <ul>
        {stories.map((idea) => (
          <li key={idea.metadata.title}>
            <Link to={idea.metadata.link}>{idea.metadata.title}</Link>
          </li>
        ))}
      </ul>

      {/* Investigations Section */}
    </section>
  );
};

export default Ideas;
