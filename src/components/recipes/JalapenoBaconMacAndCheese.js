import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Jalape\u00F1o Bacon Mac & Cheese',
  type: 'Main',
  source: 'Self Developed',
  link: '/recipes/jalapenobaconmacandcheese',
  made: true,
  keeper: true,
};

function JalapenoBaconMacAndCheese() {
  const ingredients = [
    "8 strips of bacon",
    "1/4 cup bacon grease (reserved from cooked bacon)",
    "1 cup panko or bread crumbs",
    "12 oz egg noodles",
    "3-4 jalapeños, finely diced (seeds removed for less heat if desired)",
    "2 cups assorted cheeses (jalapeño jack, smoked gouda, sharp cheddar)",
    "1/2 onion, finely diced",
    "4 cloves garlic, minced",
    "1/4 cup all-purpose flour",
    "1 1/2 cups milk",
    "Salt and pepper, to taste",
    "1/2 tsp turmeric (optional)",
    "1/2 tsp curry powder (optional)"
  ];

  const instructions = [
    "Cook the Bacon: Preheat your oven to 400°F (200°C). Place 8 strips of bacon on a cooling rack set inside a sheet pan and cook for 20-25 minutes until crispy. Once done, set the bacon aside and reserve about 1/4 cup of bacon grease.",
    "Toast the Breadcrumbs: Reduce the oven temperature to 350°F (175°C). In a small bowl, toss 1 cup panko or bread crumbs with the reserved bacon grease until coated. Spread the crumbs on the sheet pan and toast in the oven for 10 minutes until golden.",
    "Cook the Noodles: Meanwhile, bring a pot of salted water to a boil. Cook 12 oz egg noodles for about 8 minutes or until al dente. Drain the noodles and set aside. They should still be slightly firm since they will continue to cook in the oven.",
    "Prepare the Jalapeños: Finely dice 3-4 jalapeños, removing the seeds if desired to reduce heat.",
    "Grate the Cheese: Grate 2 cups of assorted cheeses, such as jalapeño jack, smoked gouda, and sharp cheddar.",
    "Make the Cheese Sauce: In a large saucepan, heat a bit of the bacon grease over medium heat. Add the finely diced 1/2 onion and cook until translucent, about 3-4 minutes. Add 4 minced garlic cloves and sauté for another minute.",
    "Make the Roux: Stir in 1/4 cup of all-purpose flour and cook for 1-2 minutes to form a roux. Gradually whisk in 1 1/2 cups of milk, stirring constantly to prevent lumps. Cook until the mixture thickens, about 3-5 minutes.",
    "Season the Sauce: Add salt, pepper, 1/2 tsp turmeric, and 1/2 tsp curry powder (if using). Slowly whisk in the grated cheeses and stir until fully melted and smooth.",
    "Combine Everything: Add the diced jalapeños and the cooked bacon (crumbled) into the cheese sauce. Stir to combine.",
    "Assemble the Mac & Cheese: In a large casserole dish, add the cooked noodles. Pour the cheese sauce over the noodles and stir until everything is evenly coated.",
    "Bake: Top the mac & cheese with the toasted breadcrumbs. Bake at 350°F (175°C) for 35-40 minutes until bubbly and golden on top.",
    "Serve: Let it cool for a few minutes before serving."
  ];

  return (
    <RecipeTemplate 
      title="Jalapeno Bacon Mac & Cheese"
      prepTime="30 minutes"
      cookTime="40 minutes"
      servings="4-6"
      imageSrc="/assets/jalapenobaconmacandcheese.jpg"  // Replace with actual image path
      imageAlt="Jalapeno Bacon Mac & Cheese"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default JalapenoBaconMacAndCheese;
