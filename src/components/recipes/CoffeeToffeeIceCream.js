import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeToffeeIceCream() {
  return (
    <section id="recipe" className="section">
      <h2>Coffee Toffee Ice Cream</h2>

      <div className="recipe-meta">
        <p><strong>Prep Time:</strong> 20 minutes</p>
        <p><strong>Cook Time:</strong> 30 minutes + chilling time</p>
        <p><strong>Servings:</strong> 4</p>
      </div>

      <div className="recipe-image">
        <img src="/assets/bbctic.jpg" alt="Brown Butter Coffee Toffee Ice Cream" />
      </div>

      <h3>Ingredients</h3>
      <ul>
        <li>**1 cup** (**200g**) **granulated sugar**</li>
        <li>**2 cups** (**480ml**) **whole milk**</li>
        <li>**2 cups** (**480ml**) **heavy cream**</li>
        <li>**1/4 cup** (**60ml**) **strong brewed coffee**</li>
        <li>**5 large** **egg yolks**</li>
        <li>**1/2 cup** **toffee pieces**</li>
        <li>**1 tsp** **vanilla extract**</li>
        <li>**Pinch** of **salt**</li>
      </ul>

      <h3>Instructions</h3>
      <ol>
        <li>**Make the Base:** In a large saucepan, combine **1 cup granulated sugar**, **2 cups whole milk**, and **2 cups heavy cream**. Heat over medium heat until the mixture begins to steam but does not boil.</li>
        <li>**Add Coffee:** Stir in **1/4 cup strong brewed coffee** and the browned butter.</li>
        <li>**Temper the Egg Yolks:** In a separate bowl, whisk **5 large egg yolks**. Slowly pour a small amount of the hot milk mixture into the yolks, whisking constantly to avoid curdling. Then, pour the yolk mixture back into the saucepan.</li>
        <li>**Cook the Custard:** Cook the mixture over low heat, stirring constantly, until it thickens enough to coat the back of a spoon (about 5-10 minutes). Do not let it boil.</li>
        <li>**Chill:** Remove from heat, stir in **1 tsp vanilla extract** and a **pinch of salt**. Let the mixture cool to room temperature, then refrigerate for at least 4 hours or overnight.</li>
        <li>**Churn the Ice Cream:** Pour the chilled mixture into an ice cream maker and churn according to the manufacturer's instructions. Fold in **1/2 cup toffee pieces** during the last minute of churning.</li>
        <li>**Freeze:** Transfer the ice cream to a container and freeze until firm (about 2 hours).</li>
      </ol>
      <Link to="/cooking">Back to Cooking</Link>
    </section>
  );
}

export default BrownButterCoffeeToffeeIceCream;
