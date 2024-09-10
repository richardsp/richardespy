// RecipeTemplate.js
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeTemplate({ title, description, ingredients, instructions, imageSrc }) {
  return (
    <div className="recipe-page">
      <h2>{title}</h2>
      {imageSrc && <img src={imageSrc} alt={title} className="recipe-image" />}
      <p>{description}</p>
      
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}><strong>{ingredient}</strong></li>
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
