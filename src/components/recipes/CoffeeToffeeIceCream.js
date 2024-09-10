import React from 'react';
import RecipeTemplate from './RecipeTemplate';

function CoffeeToffeeIceCream() {
  const ingredients = [
    "1 cup (200g) granulated sugar",
    "2 cups (480ml) whole milk",
    "2 cups (480ml) heavy cream",
    "1/4 cup (60ml) strong brewed coffee",
    "5 large egg yolks",
    "1/2 cup toffee pieces",
    "1 tsp vanilla extract",
    "Pinch of salt"
  ];

  const instructions = [
    "Make the Base: In a large saucepan, combine 1 cup granulated sugar, 2 cups whole milk, and 2 cups heavy cream. Heat over medium heat until the mixture begins to steam but does not boil.",
    "Add Coffee: Stir in 1/4 cup strong brewed coffee and the browned butter.",
    "Temper the Egg Yolks: In a separate bowl, whisk 5 large egg yolks. Slowly pour a small amount of the hot milk mixture into the yolks, whisking constantly to avoid curdling. Then, pour the yolk mixture back into the saucepan.",
    "Cook the Custard: Cook the mixture over low heat, stirring constantly, until it thickens enough to coat the back of a spoon (about 5-10 minutes). Do not let it boil.",
    "Chill: Remove from heat, stir in 1 tsp vanilla extract and a pinch of salt. Let the mixture cool to room temperature, then refrigerate for at least 4 hours or overnight.",
    "Churn the Ice Cream: Pour the chilled mixture into an ice cream maker and churn according to the manufacturer's instructions. Fold in 1/2 cup toffee pieces during the last minute of churning.",
    "Freeze: Transfer the ice cream to a container and freeze until firm (about 2 hours)."
  ];

  return (
    <RecipeTemplate 
      title="Coffee Toffee Ice Cream"
      prepTime="20 minutes"
      cookTime="30 minutes + chilling time"
      servings="4"
      imageSrc="/assets/bbctic.jpg"
      imageAlt="Brown Butter Coffee Toffee Ice Cream"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default CoffeeToffeeIceCream;
