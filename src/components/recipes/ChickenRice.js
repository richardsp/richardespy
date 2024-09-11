// ChickenRice.js
import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Chicken Rice',
  type: 'Main',
  source: 'Self developed',
  link: '/recipes/chickenrice',
  made: true,
  keeper: true,
  description: "This is my own recipe for Chicken Rice, a favorite dish in my household. One of the best things about it is that you only uses 3 dishes to cook it!",
};

const ChickenRice = () => {
  const recipeData = {
    title: 'Chicken Rice',
    prepTime: '15 minutes',
    cookTime: '30-40 minutes',
    servings: '6-8',
    ingredients: [
      '1 Costco rotisserie chicken (approximately 3 lbs)',
      '5 cups basmati rice, rinsed',
      '6 cups chicken stock',
      '1/2 onion, finely chopped',
      '2 carrots, cubed',
      '5 cloves garlic, minced',
      '1 tsp turmeric',
      '1 tsp smoked paprika',
      '1 tsp ground cumin (optional)',
      '1/2 tsp ground coriander (optional)',
      '1 bay leaf',
      'Salt and pepper to taste',
      '1 cup frozen peas (optional)',
      '3 green onions, thinly sliced for garnish'
    ],
    instructions: [
      'Prepare the chicken: Debone the rotisserie chicken and remove the skin. Cut the meat into small, bite-sized cubes and set aside.',
      'Prepare the rice: Rinse the rice under cold water until the water runs clear. Drain and transfer to your rice cooker.',
      'Sauté the vegetables: In a pan, heat a bit of oil over medium heat. Sauté the onion, carrots, and garlic until soft and fragrant, about 3-4 minutes.',
      'Assemble in the rice cooker: Add the sautéed vegetables to the rice cooker. Stir in the turmeric, paprika, cumin, coriander, and bay leaf. Add salt and pepper to taste. Pour in the chicken stock and stir to combine.',
      'Add the chicken: Evenly distribute the cubed chicken on top of the rice mixture.',
      'Cook: Close the rice cooker and start the cooking process. Let it complete the cycle.',
      'Finish: Once the rice is done, open the rice cooker and gently fluff the rice and chicken together. Add the frozen peas now if using and close the rice cooker for 5 more minutes to allow the peas to warm through.',
      'Garnish and serve: Stir in the green onions and serve.'
    ],
    imageSrc: '/assets/chickenrice.jpg', // Ensure the path is correct or remove if not using
    imageAlt: 'Chicken Rice'
  };

  return <RecipeTemplate {...recipeData} />;
};

export default ChickenRice;
