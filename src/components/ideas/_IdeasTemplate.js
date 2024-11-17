import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ideasMap from './_ideasLoader';

const IdeasTemplate = () => {
  const { ideaId } = useParams();
  const idea = ideasMap[ideaId]?.metadata;

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  return (
    <section id="idea" className="section">
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>

      {/* Conditionally display the checklist */}
      {idea.checklist && idea.checklist.length > 0 && (
        <div>
          <h3>This is the stuff that I'd need to do to make this work:</h3>
          <ul>
            {idea.checklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/ideas">Back to Ideas</Link>
    </section>
  );
};

export default IdeasTemplate;
