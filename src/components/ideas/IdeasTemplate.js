import React from 'react';

const IdeasTemplate = ({ title, description, checklist }) => {
  return (
    <section id="idea" className="section">
      <h2>{title}</h2>
      <p>{description}</p>

      {/* Conditionally display the checklist */}
      {checklist && checklist.length > 0 && (
        <div>
          <h3>Steps to Bring It to Life:</h3>
          <ul>
            {checklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <a href="/ideas">Back to Ideas</a>
    </section>
  );
};

export default IdeasTemplate;


