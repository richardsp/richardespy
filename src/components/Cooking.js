// Cooking.js
import React from 'react';
import { Link } from 'react-router-dom';
import recipesMap from './recipes/_recipesLoader'; // Use the same recipes loader

const recipesData = Object.keys(recipesMap).map((id) => ({
  id,
  ...recipesMap[id].metadata,
}));

function Cooking() {
  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>
        I really enjoy cooking. These are some of the recipes I like and make repeatedly, 
        some things I plan on trying to make, and some that I'm developing myself.
      </p>
      <ul className="recipe-list">
        {recipesData.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            <h3>
              {recipe.link?.startsWith('http') ? (
                <a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a>
              ) : (
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
              )}
            </h3>
            {recipe.description && <p>{recipe.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cooking;
