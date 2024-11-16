import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesMap from './_recipesLoader'; // Import the recipes map

const RecipeTemplate = () => {
  const { recipeId } = useParams(); // Get recipeId from URL
  const recipeData = recipesMap[recipeId]; // Lookup recipe data

  const [imageError, setImageError] = useState(false); // Image error handling

  if (!recipeData) {
    return (
      <section id="recipe" className="section">
        <h2>Error: Recipe not found</h2>
        <p>The recipe you're looking for does not exist or is unavailable.</p>
        <Link to="/cooking">Back to Cooking</Link>
      </section>
    );
  }

  const { 
    name: title, 
    description, 
    prepTime, 
    cookTime, 
    servings, 
    imageSrc, 
    imageAlt, 
    ingredients, 
    instructions, 
    equipment = [] // Default empty array if no equipment
  } = recipeData.metadata; // Access all metadata directly

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
        <div className="recipe-image">
          <img src={imageSrc} alt={imageAlt || title} onError={() => setImageError(true)} />
        </div>
      )}
      <h3>Ingredients</h3>
      <ul>{ingredients.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      {equipment.length > 0 && (
        <>
          <h3>Equipment</h3>
          <ul>{equipment.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </>
      )}
      <h3>Instructions</h3>
      <ol>{instructions.map((step, idx) => <li key={idx}>{step}</li>)}</ol>
      <Link to="/cooking">Back to Cooking</Link>
    </section>
  );
};

export default RecipeTemplate;
