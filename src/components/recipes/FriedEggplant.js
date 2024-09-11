import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Fried Eggplant',
  type: 'Appetizer',
  source: 'Chef from Japan House',
  link: '/recipes/friedeggplant',
  made: true,
  keeper: true,
  description: 'I went to Japan House for an interesting discussion about cooking is done in one of the monasteries, and had the most amazing fried eggplant. I tracked down the chef, and, using my pidgin Japanese, got him to write down the recipe for me.',
};

const FriedEggplant = () => {
  const ingredients = [
    'Japanese eggplant (about 2-3 medium-sized)',
    'Salt, to taste',
    'Pepper, to taste',
    'Potato starch (for coating)',
    'Neutral oil for frying (vegetable or canola oil)',
    '100cc Ajipon (Ponzu sauce)',
    '50cc water',
    '10g granulated sugar',
    '20g ginger, thinly sliced',
    '5cc chili oil',
    '1 tsp sesame seeds',
    '1 tsp soy sauce',
    '1 tsp sesame oil',
    'Shiso leaves, diced (optional but recommended)',
  ];

  const instructions = [
    'Dice the Japanese eggplant into bite-sized cubes. Sprinkle with salt and pepper, then toss to combine. Coat the eggplant with potato starch.',
    'In a saucepan, combine Ajipon, water, sugar, ginger, chili oil, sesame seeds, soy sauce, and sesame oil. Bring to a boil, then set aside.',
    'Heat neutral oil to 350°F (175°C) and fry the eggplant until golden brown and crispy. Drain on a wire rack or paper towels.',
    'Toss the fried eggplant in the sauce and garnish with diced Shiso leaves. Serve hot.',
  ];

  return (
    <RecipeTemplate
      title="Fried Eggplant"
      description={recipeMetadata.description}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
};

export default FriedEggplant;
