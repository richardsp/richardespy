import React, { useState } from 'react';

const RecipeTemplate = ({ title, description, prepTime, cookTime, servings, ingredients, instructions, imageSrc, imageAlt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="recipe" className="section">
      <h2>{title}</h2>

      {description && <p>{description}</p>}

      <div className="recipe-meta">
        {prepTime && <p><strong>Prep Time:</strong> {prepTime}</p>}
        {cookTime && <p><strong>Cook Time:</strong> {cookTime}</p>}
        {servings && <p><strong>Servings:</strong> {servings}</p>}
      </div>

      {imageSrc && !imageError && (
        <div className="responsive-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            onError={() => setImageError(true)} 
            className="responsive-image" 
          />
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

      <a href="/cooking">Back to Cooking</a>
    </section>
  );
};

export default RecipeTemplate;
