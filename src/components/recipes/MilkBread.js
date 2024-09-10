import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Milk Bread',
  type: 'Bread',
  source: 'Joshua Weisman',
  link: '/recipes/bread',
  made: true,
  keeper: true,
};

function Bread() {
  const ingredients = [
    "1 cup (250g) whole milk, heated to 95°F",
    "2.5 tablespoons (29g) granulated sugar",
    "2.5 teaspoons (11g) instant yeast",
    "3 cups (450g) all-purpose flour",
    "1 teaspoon (3g) fine sea salt",
    "2 whole eggs, beaten",
    "1/4 cup (56g) unsalted butter, softened",
    "Egg wash: 1 egg + 1 teaspoon of water",
    "Sesame seeds for topping",
    "Parmiggiano, grated for topping"
  ];

  const instructions = [
    "Pre-heat oven to 375°F.",
    "Whisk sugar and yeast into your milk, and allow it to sit for 5 minutes. Add flour and sea salt to a bowl of a stand mixer fitted with a bread hook attachment and mix till combined. Next, add your milk mixture and eggs, mix for 2-3 minutes or until you get a smooth dough. Once the dough forms, add the butter 2 tablespoons at a time and mix for 3-5 minutes or until incorporated and you have a smooth extensible dough.",
    "Place your dough in a greased bowl and cover with plastic wrap. Rise for one hour at room temperature or in the fridge overnight. Remove the plastic wrap, punch your dough down, and divide it into 6 even pieces (about 140g each). Roll each piece into balls, cover with a damp towel, and let them rest for 5 minutes.",
    "Roll your balls into foot-long (12 inches) logs, taper the edges lightly, and place on a baking sheet lined with parchment paper, evenly spaced apart. Each tray will fit 3 logs, so you’ll need 2 trays. Cover with a damp towel and proof for 30 minutes. Brush with egg wash (1 beaten egg mixed with water).",
    "Optionally, sprinkle sesame seeds and freshly grated Parmiggiano on top of each log, score them down the middle around 1 inch deep, and bake for 17-20 minutes or until golden brown.",
    "Remove and cool on a wire rack until room temperature."
  ];

  return (
    <RecipeTemplate 
      title="Bread"
      prepTime="1 hour + proofing time"
      cookTime="20 minutes"
      servings="6 loaves (140g each)"
      imageSrc="/assets/bread.jpg"  // Adjust this path if necessary
      imageAlt="Freshly baked bread"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Bread;
