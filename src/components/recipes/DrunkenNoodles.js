import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Drunken Noodles (Pad Kee Mao)',
  type: 'Main',
  source: 'ChatGPT',
  link: '/recipes/drunkennoodles',
  made: true,
  keeper: true,
};

function DrunkenNoodles() {
  const ingredients = [
    "300g (10.5 oz) wide rice noodles",
    "2 tablespoons vegetable oil",
    "3 cloves garlic, minced",
    "1 red chili, thinly sliced",
    "200g (7 oz) chicken breast or tofu, thinly sliced",
    "1 red bell pepper, thinly sliced",
    "1 green bell pepper, thinly sliced",
    "1 small onion, thinly sliced",
    "100g (3.5 oz) cherry tomatoes, halved",
    "1 cup Thai basil leaves"
  ];

  const sauceIngredients = [
    "3 tablespoons oyster sauce",
    "2 tablespoons soy sauce",
    "1 tablespoon fish sauce",
    "1 tablespoon dark soy sauce",
    "2 teaspoons sugar",
    "2 tablespoons water"
  ];

  const instructions = [
    "Prepare the Noodles: Soak the rice noodles in hot water for 20-30 minutes until they are soft. Drain and set aside.",
    "Prepare the Sauce: In a small bowl, mix together oyster sauce, soy sauce, fish sauce, dark soy sauce, sugar, and water. Stir until the sugar is dissolved. Set aside.",
    "Cook the Dish: Heat the vegetable oil in a large wok or skillet over medium-high heat. Add the minced garlic and sliced chili. Stir-fry for about 30 seconds until fragrant. Add the chicken or tofu and stir-fry until cooked through, about 3-4 minutes. Add the sliced bell peppers, onion, and cherry tomatoes. Stir-fry for another 2-3 minutes until the vegetables are slightly tender but still crisp. Add the soaked rice noodles to the wok, followed by the sauce. Toss everything together until the noodles are well-coated and heated through.",
    "Finally, add the Thai basil leaves and toss to combine. Cook for another minute until the basil is wilted and fragrant.",
    "Serve: Transfer the drunken noodles to a serving platter. Garnish with additional fresh Thai basil if desired. Serve immediately."
  ];

  return (
    <RecipeTemplate 
      title="Drunken Noodles (Pad Kee Mao)"
      prepTime="20 minutes"
      cookTime="30 minutes"
      servings="4"
      imageSrc="/assets/cooking/drunkennoodles.jpg"
      imageAlt="Drunken Noodles"
      ingredients={ingredients}
      sauceIngredients={sauceIngredients}  // Optional if your RecipeTemplate supports it
      instructions={instructions}
    />
  );
}

export default DrunkenNoodles;
