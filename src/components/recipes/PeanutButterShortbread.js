import React from 'react';
import RecipeTemplate from './RecipeTemplate';

export const recipeMetadata = {
  name: 'Peanut Butter Shortbread',
  type: 'Desert',
  source: 'Self Developed',
  link: '/recipes/peanutbuttershortbread',
  made: true,
  keeper: true,
};

function PeanutButterShortbread() {
  const ingredients = [
    "2 cups (400 g) unsalted butter, room temperature",
    "1 cup (200 g) sugar",
    "1/2 cup (120 ml) light brown sugar, packed",
    "1 cup (250 g) creamy peanut butter",
    "1/2 cup (60 g) bread flour",
    "2 cups (240 g) rye flour",
    "1/2 cup (60 g) peanut butter powder",
    "1/2 teaspoon (2.5 ml) salt",
    "1 cup (250 g) Nutella, slightly warmed for easy spreading"
  ];

  const instructions = [
    "Cream the Butter and Sugars: In a large mixing bowl, cream together the unsalted butter, sugar, and light brown sugar until light and fluffy, about 2-3 minutes with an electric mixer.",
    "Add the Peanut Butter: Mix in the creamy peanut butter until smooth, about 1 minute.",
    "Add the Dry Ingredients: In a separate bowl, whisk together the bread flour, rye flour, peanut butter powder, and salt. Gradually add the flour mixture to the butter-sugar mixture, mixing until just combined.",
    "Rest the Dough: Wrap the dough in plastic wrap and refrigerate for at least 30 minutes.",
    "Flatten the Dough: Line a sheet pan with parchment paper. Place the dough on the parchment, then cover it with another sheet of parchment paper. Use a second sheet pan to press down and flatten the dough evenly. Refrigerate the flattened dough to firm up.",
    "Add the Nutella Swirl: Remove the dough from the refrigerator and discard the top layer of parchment paper. Spread the Nutella evenly across the surface of the dough using a spatula.",
    "Roll and Chill: Roll the layered dough into a tight log using the parchment paper to help. Wrap the log in plastic wrap and refrigerate for at least 2 hours, or until firm.",
    "Slice and Bake: Preheat your oven to 400°F (180°C). Line a baking sheet with parchment paper. Remove the dough log from the refrigerator and slice it into 1/2-inch (1.25 cm) thick rounds. Place the slices on the prepared baking sheet, leaving about 1 inch (2.5 cm) of space between each.",
    "Bake: Bake for 16-18 minutes, or until the edges are golden. Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
  ];

  return (
    <RecipeTemplate 
      title="Peanut Butter and Nutella Swirl Sandwich Shortbread Cookies"
      ingredients={ingredients}
      instructions={instructions}
      imageSrc="/assets/peanutbuttershortbread.jpg" 
      imageAlt="Peanut Butter and Nutella Swirl Sandwich Shortbread Cookies"
    />
  );
}

export default PeanutButterShortbread;
