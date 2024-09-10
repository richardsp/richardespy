import React from 'react';
import { Link } from 'react-router-dom';

function RecipeTemplate({ title, ingredients, instructions, imageSrc, imageAlt }) {
  return (
    <div className="recipe-page">
      <h2>{title}</h2>
      
      {imageSrc && (
        <div className="recipe-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      <Link to="/cooking">Back to Cooking</Link>
    </div>
  );
}

export default RecipeTemplate;
