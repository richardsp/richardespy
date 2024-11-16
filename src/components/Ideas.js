import React from 'react';
import { Link } from 'react-router-dom';
import ideasMap from './ideas/_ideasLoader';

const ideasData = Object.keys(ideasMap).map((id) => ({
  id,
  ...ideasMap[id].metadata,
}));

function Ideas() {
  // Categorize ideas based on their type
  const apps = ideasData.filter((idea) => idea.type === 'App');
  const stories = ideasData.filter((idea) => idea.type === 'Story');
  const investigations = ideasData.filter((idea) => idea.type === 'Investigation');

  return (
    <section id="ideas" className="section">
      <h2>Ideas</h2>
      <p>
        Many years ago, I was talking with a friend about some of my ideas, and how could I monetize them. This friend said something like, "Would the world around you be richer if your ideas were realized, or is it better for you to hold on to them, and hope you do something with them... someday?"
      </p>
      <p>I considered this and decided that I want my ideas to live.</p>
      <p>
        Here are all of the stubs of ideas that I would love to realize, but I'm not in a position to do so. If you like any of them, and you want to make them into reality, it would make me very happy!
      </p>

      {/* Apps Section */}
      {apps.length > 0 && (
        <>
          <h3>Software Development Ideas</h3>
          <ul>
            {apps.map((idea) => (
              <li key={idea.id}>
                <Link to={idea.link}>{idea.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Stories Section */}
      {stories.length > 0 && (
        <>
          <h3>Story Ideas</h3>
          <ul>
            {stories.map((idea) => (
              <li key={idea.id}>
                <Link to={idea.link}>{idea.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Investigations Section */}
      {investigations.length > 0 && (
        <>
          <h3>Investigative Ideas</h3>
          <ul>
            {investigations.map((idea) => (
              <li key={idea.id}>
                <Link to={idea.link}>{idea.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Ideas;
