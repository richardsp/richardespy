// ButterChicken.js
import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Butter Chicken',
  type: 'Main',
  source: 'ChatGPT',
  link: '/recipes/butterchicken',
  made: true,
  keeper: true,
  description: "My kids wanted me to make Butter Chicken for dinner one evening. I spent some time refining the recipe with ChatGPT. My daughter made naan from scratch to go with it!",
};

const ButterChicken = () => {
  const recipeData = {
    title: 'Butter Chicken',
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: '4-6',
    ingredients: [
      '700g / 1.5 lbs boneless chicken thighs, cut into bite-sized pieces',
      '1 cup plain yogurt',
      '2 tbsp lemon juice',
      '2 tsp turmeric powder',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp chili powder',
      '1 tbsp ginger-garlic paste',
      '1 tbsp butter',
      '1 cup tomato puree',
      '1 cup heavy cream',
      '1 tsp garam masala',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Marinate the Chicken: In a large bowl, combine 1 cup plain yogurt, 2 tbsp lemon juice, 2 tsp turmeric powder, 2 tsp ground cumin, 2 tsp ground coriander, 1 tsp chili powder, and 1 tbsp ginger-garlic paste. Add the chicken and marinate for at least 1 hour, preferably overnight.',
      'Cook the Chicken: Heat 1 tbsp butter in a large pan over medium heat. Add the marinated chicken and cook until browned and cooked through, about 10-12 minutes. Remove from the pan and set aside.',
      'Make the Sauce: In the same pan, add 1 cup tomato puree and cook for 5-7 minutes. Stir in 1 cup heavy cream and bring to a simmer.',
      'Finish the Dish: Add the cooked chicken back into the pan and stir to coat in the sauce. Cook for another 10 minutes on low heat. Stir in 1 tsp garam masala and season with salt to taste.',
      'Serve: Garnish with fresh cilantro and serve hot with naan or rice.'
    ],
    imageSrc: '/assets/butterchicken.jpeg', // Ensure the path is correct or adjust accordingly
    imageAlt: 'Butter Chicken'
  };

  return <RecipeTemplate {...recipeData} />;
};

export default ButterChicken;
