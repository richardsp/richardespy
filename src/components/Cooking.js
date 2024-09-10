import React from 'react';
import { Link } from 'react-router-dom';

// Use Webpack's require.context to dynamically load all recipes
const requireRecipe = require.context('./recipes', true, /^\.\/(?!RecipeTemplate).*\.js$/);

// Create an array to store all recipe metadata
const recipesData = requireRecipe.keys().map((fileName) => {
  const recipeModule = requireRecipe(fileName);
  return recipeModule.recipeMetadata;
});

function Cooking() {
  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>
        I really enjoy cooking. Here are some of the recipes I like and make repeatedly, 
        some things I plan on trying, and some recipes I'm developing myself.
      </p>
      <ul className="recipe-list">
        {recipesData.map((recipe) => (
          <li key={recipe.name} className="recipe-item">
            <h3>
              {recipe.link?.startsWith('http') ? (
                <a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a>
              ) : (
                <Link to={recipe.link}>{recipe.name}</Link>
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
