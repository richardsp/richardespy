import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  title: "Crispy Chicken Thighs on Kale",
  description: "One of my go-to meals is crispy-skinned chicken thighs on a bed of kale. It's a fantastic weeknight meal that only really requires a cast iron skillet.",
  servings: 4,
  prepTime: "10 minutes",
  cookTime: "35-40 minutes",
  totalTime: "45-50 minutes",
  link: '/recipes/crispychickenthighsandkale',
};

const CrispyChickenThighsandKale = () => {
  const ingredients = [
    "4 bone-in, skin-on chicken thighs",
    "1 lb kale, chopped",
    "1 large onion, diced",
    "2 cloves garlic, minced",
    "1 lime, for finishing",
    "Salt to taste",
    "Freshly ground black pepper to taste",
  ];

//   const equipment = [
//     "Cast iron skillet",
//     "Wire rack",
//     "Spatter shield",
//     "Tongs",
//     "Spatula",
//     "Oven",
//   ];

  const instructions = [
    "Pat the chicken thighs dry and score the skin a couple of times. Season generously with salt and pepper. Dry brine the chicken in the fridge for 30 minutes on a wire rack.",
    "Place the chicken thighs skin side down in a cold cast iron skillet. Turn the heat to low and cover with a spatter shield. Let the fat render slowly for 15 minutes, moving the chicken gently with a spatula once the skin releases naturally.",
    "While the chicken is cooking, preheat the oven to 375°F (190°C) and dice the onion. Mince the garlic.",
    "Once the chicken skin is crispy and golden, transfer the thighs skin side up onto the wire rack. Add the diced onion to the skillet and sauté in the chicken fat for 2-3 minutes, until softened.",
    "Add the minced garlic to the onions and cook for 30 seconds to 1 minute, stirring to avoid burning, until fragrant.",
    "Pile the chopped kale into the skillet on top of the softened onions and garlic. Season lightly with salt and pepper. Stir and allow the kale to wilt for 2-3 minutes.",
    "Nestle the chicken thighs skin side up on top of the kale and transfer the skillet to the preheated oven. Roast for 15-20 minutes, until the chicken reaches an internal temperature of 165°F (75°C).",
    "Remove the skillet from the oven and let it rest for a couple of minutes. Squeeze fresh lime juice over the chicken and kale before serving.",
    "Serve the chicken thighs directly from the skillet, using tongs to stir and mix the kale and onions before plating.",
  ];

  return (
    <RecipeTemplate
      title={recipeMetadata.title}
      description={recipeMetadata.description}
      prepTime={recipeMetadata.prepTime}
      cookTime={recipeMetadata.cookTime}
      servings={recipeMetadata.servings}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
};

export default CrispyChickenThighsandKale;
