import React from 'react';
import { Link } from 'react-router-dom';

function ButterChicken() {
  return (
    <div className="recipe">
      <h1>Butter Chicken</h1>
      <img src="/assets/butterchicken.jpeg" alt="Butter Chicken" className="recipe-image" />
      <p><strong>Rating:</strong> ⭐⭐⭐⭐</p>

      <h2>Ingredients</h2>
      <ul>
        <li><strong>700g / 1.5 lbs</strong> boneless chicken thighs, cut into bite-sized pieces</li>
        <li><strong>1 cup</strong> plain yogurt</li>
        <li><strong>2 tbsp</strong> lemon juice</li>
        <li><strong>2 tsp</strong> turmeric powder</li>
        <li><strong>2 tsp</strong> ground cumin</li>
        <li><strong>2 tsp</strong> ground coriander</li>
        <li><strong>1 tsp</strong> chili powder</li>
        <li><strong>1 tbsp</strong> ginger-garlic paste</li>
        <li><strong>1 tbsp</strong> butter</li>
        <li><strong>1 cup</strong> tomato puree</li>
        <li><strong>1 cup</strong> heavy cream</li>
        <li><strong>1 tsp</strong> garam masala</li>
        <li><strong>Salt</strong> to taste</li>
        <li><strong>Fresh cilantro</strong> for garnish</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>
          <strong>Marinate the Chicken:</strong> In a large bowl, combine <strong>1 cup yogurt</strong>, <strong>2 tbsp lemon juice</strong>, 
          <strong>2 tsp turmeric</strong>, <strong>2 tsp cumin</strong>, <strong>2 tsp coriander</strong>, 
          <strong>1 tsp chili powder</strong>, and <strong>1 tbsp ginger-garlic paste</strong>. Add the chicken and 
          marinate for at least 1 hour, preferably overnight.
        </li>
        <li>
          <strong>Cook the Chicken:</strong> Heat <strong>1 tbsp butter</strong> in a large pan over medium heat. 
          Add the marinated chicken and cook until browned and cooked through, about 10-12 minutes. Remove from the pan and set aside.
        </li>
        <li>
          <strong>Make the Sauce:</strong> In the same pan, add <strong>1 cup tomato puree</strong> and cook for 
          5-7 minutes. Stir in <strong>1 cup heavy cream</strong> and bring to a simmer. 
        </li>
        <li>
          <strong>Finish the Dish:</strong> Add the cooked chicken back into the pan and stir to coat in the sauce. 
          Cook for another 10 minutes on low heat. Stir in <strong>1 tsp garam masala</strong> and season with salt to taste.
        </li>
        <li>
          <strong>Serve:</strong> Garnish with fresh cilantro and serve hot with naan or rice.
        </li>
      </ol>

      <Link to="/cooking">Back to Cooking</Link>
    </div>
  );
}

export default ButterChicken;