import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeTemplate = ({ title, description, prepTime, cookTime, servings, ingredients, instructions, equipment, imageSrc, imageAlt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="recipe" className="section">
      <h2>{title}</h2>

      {/* Conditionally display the description */}
      {description && <p>{description}</p>}

      <div className="recipe-meta">
        {prepTime && <p><strong>Prep Time:</strong> {prepTime}</p>}
        {cookTime && <p><strong>Cook Time:</strong> {cookTime}</p>}
        {servings && <p><strong>Servings:</strong> {servings}</p>}
      </div>

      {/* Conditionally display the image if available and no error */}
      {imageSrc && !imageError && (
        <div className="recipe-image">
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

      {/* Only display equipment section if provided */}
      {equipment && equipment.length > 0 && (
        <>
          <h3>Equipment</h3>
          <ul>
            {equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      <h3>Instructions</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      {/* Use Link for client-side navigation */}
      <Link to="/cooking">Back to Cooking</Link>
    </section>
  );
};

export default RecipeTemplate;
