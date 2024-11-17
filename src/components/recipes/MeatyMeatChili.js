import React from 'react';
import RecipeTemplate from './_recipesTemplate';

export const recipeMetadata = {
  name: 'Meaty Meat Chili',
  type: 'Main',
  source: 'Self Developed',
  link: '/recipes/meatymeatchili',
  made: true,
  keeper: true,
  description: 'A hearty and flavorful chili packed with tender beef, bold spices, and a hint of dark beer. Perfect for cold days or feeding a crowd.',
  prepTime: '30 minutes',
  cookTime: '6 to 10 hours',
  servings: '8-10',
  imageSrc: '/assets/cooking/meatymeatchili.jpg', // Replace with the actual image path
  imageAlt: 'Meaty Meat Chili',
  ingredients: [
    '4 pounds beef stew meat',
    '1 pound lean ground beef',
    '2 medium onions, chopped',
    '1 green pepper, chopped',
    '4 garlic cloves, minced',
    '3 (14 1/2-ounce) cans diced tomatoes, undrained',
    '4 (8-ounce) cans tomato sauce',
    '1/3 cup chili powder',
    '3 teaspoons salt',
    '1 teaspoon pepper',
    '1/2 teaspoon paprika',
    '1/2 teaspoon cumin',
    '1/2 teaspoon turmeric',
    '1/2 teaspoon ground red pepper',
    '1 bay leaf',
    '1 large bottle of dark beer',
    '1 Anaheim chili, chopped (more chilies for extra heat, optional)',
    '2 cups water (optional)',
    'Toppings: sour cream, shredded cheddar cheese, chopped green onions',
  ],
  equipment: ['Dutch Oven'],
  instructions: [
    'Brown the Beef Stew Meat: In batches, brown the 4 pounds of beef stew meat in a large skillet over high heat. Set aside.',
    'Brown the Ground Beef: In a large Dutch oven, brown 1 pound of lean ground beef over medium heat.',
    'Combine Meat, Onions, and Garlic: Add the browned stew meat, 2 chopped onions, and 4 minced garlic cloves into the Dutch oven with the ground beef. Cook together for a few minutes until the onions start to soften.',
    'Caramelize the Tomatoes: In the same skillet used to brown the stew meat, add the undrained 3 cans of diced tomatoes. Cook over high heat for about 5 minutes until the tomatoes start to caramelize and become fragrant. Stir frequently to prevent burning.',
    'Add the Tomatoes and Spices: Pour the caramelized tomatoes, 4 cans of tomato sauce, and all the spices (1/3 cup chili powder, 3 tsp salt, 1 tsp pepper, 1/2 tsp paprika, 1/2 tsp cumin, 1/2 tsp turmeric, 1/2 tsp ground red pepper, and 1 bay leaf) into the Dutch oven with the meat mixture.',
    'Add the Beer and Chili: Pour in 1 large bottle of dark beer and add 1 chopped Anaheim chili (or more chilies if more heat is desired). Stir everything together until well combined.',
    'Simmer the Chili: Bring the mixture to a boil over medium-high heat. Once it reaches a boil, reduce the heat to low, cover the Dutch oven, and simmer for 6 to 10 hours. (You can stir in 2 cups of water if desired, then let the chili cook overnight.)',
    'Remove the Bay Leaf: Before serving, remove and discard the bay leaf.',
    'Serve: Ladle the chili into bowls and serve with toppings such as sour cream, shredded cheddar cheese, and chopped green onions.',
  ],
};

const MeatyMeatChili = () => {
  return <RecipeTemplate {...recipeMetadata} />;
};

export default MeatyMeatChili;

