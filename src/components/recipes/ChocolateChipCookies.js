import React from 'react';
import RecipeTemplate from './_recipesTemplate';

export const recipeMetadata = {
  name: 'Chocolate Chip Cookies',
  type: 'Dessert',
  source: 'Richard Espy',
  link: '/recipes/chocolatechipcookies',
  made: true,
  keeper: true,
  description: "We have a good pedigree for chocolate chip cookies in our house. My daughter's version has won multiple medals at the LA County Fair!",
  prepTime: '20 minutes + overnight chilling',
  cookTime: '14 minutes per batch',
  servings: 'Makes approximately 24 cookies',
  ingredients: [
    "1 cup (226g) unsalted brown butter",
    "1 1/2 cups (300g) light brown sugar, packed",
    "1/2 cup (100g) toasted granulated sugar",
    "1 large egg, plus 1 egg yolk (room temperature preferred)",
    "2 teaspoons vanilla extract",
    "1/4 cup (60ml) maple syrup",
    "3 1/4 cups (415g) all-purpose flour",
    "2 teaspoons cornstarch",
    "1 teaspoon baking powder",
    "1 teaspoon baking soda",
    "1 teaspoon salt",
    "2 cups chocolate chunks",
    "1 cup chopped pecans"
  ],
  instructions: [
    "Toast Sugar: Spread granulated sugar on a baking sheet and toast it at 350°F (180°C) for about 10 minutes until it starts to caramelize lightly. Set aside to cool.",
    "Brown the Butter: In a saucepan, melt the unsalted butter over medium heat. Continue to cook, stirring frequently, until it turns a golden brown and develops a nutty aroma. Set aside to cool slightly.",
    "Mix Wet Ingredients: In a large mixing bowl, combine the browned butter, toasted sugar, and light brown sugar. Stir until well mixed. Add the egg and egg yolk one at a time, stirring until combined. Stir in the vanilla extract and maple syrup.",
    "Prepare Dry Ingredients: In a separate bowl, whisk together the flour, cornstarch, baking powder, baking soda, and salt. Gradually mix the dry ingredients into the wet ingredients until just combined.",
    "Add Mix-ins: Stir in the chocolate chunks and chopped pecans until evenly distributed throughout the dough.",
    "Chill Dough: Cover the bowl with plastic wrap and refrigerate the cookie dough overnight for best results.",
    "Preheat Oven: When ready to bake, preheat your oven to 350°F (180°C) and line cookie sheets with parchment paper.",
    "Form Cookies: Scoop cookie dough into balls and place them on the prepared cookie sheet, spacing them at least 2 inches apart.",
    "Bake: Bake for about 14 minutes, or until the edges are golden brown but the center still looks slightly underdone.",
    "Cool: Let the cookies cool on the baking sheet for about 5 minutes before transferring them to a wire rack to cool completely.",
    "Tip: Keep unbaked cookie dough in the fridge while waiting to bake the next batch. Do not place dough on a hot cookie sheet."
  ],
  imageSrc: '/assets/cooking/chocolatechipcookies.jpeg', // Ensure this image is available
  imageAlt: 'Chocolate Chip Cookies'
};

const ChocolateChipCookies = () => {
  return (
    <RecipeTemplate 
      title={recipeMetadata.name}
      description={recipeMetadata.description}
      prepTime={recipeMetadata.prepTime}
      cookTime={recipeMetadata.cookTime}
      servings={recipeMetadata.servings}
      ingredients={recipeMetadata.ingredients}
      instructions={recipeMetadata.instructions}
      imageSrc={recipeMetadata.imageSrc}
      imageAlt={recipeMetadata.imageAlt}
    />
  );
};

export default ChocolateChipCookies;
