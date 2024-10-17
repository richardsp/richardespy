import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


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
      <Link to ="/ideas">Back to Ideas</Link>
    </section>
  );
};

export default IdeasTemplate;


