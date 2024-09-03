import React from 'react';
import { Link } from 'react-router-dom';

function PeanutButterShortbread() {
  return (
    <div className="recipe">
      <h1>Peanut Butter and Nutella Swirl Sandwich Shortbread Cookies</h1>

      <h2>Ingredients</h2>
      <ul>
        <li><strong>2 cups (400 g)</strong> unsalted butter, room temperature</li>
        <li><strong>1 cup (200 g)</strong> sugar</li>
        <li><strong>1/2 cup (120 ml)</strong> light brown sugar, packed</li>
        <li><strong>1 cup (250 g)</strong> creamy peanut butter</li>
        <li><strong>1/2 cup (60 g)</strong> bread flour</li>
        <li><strong>2 cups (240 g)</strong> rye flour</li>
        <li><strong>1/2 cup (60 g)</strong> peanut butter powder</li>
        <li><strong>1/2 teaspoon (2.5 ml)</strong> salt</li>
        <li><strong>1 cup (250 g)</strong> Nutella, slightly warmed for easy spreading</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>
          <strong>Cream the Butter and Sugars:</strong> In a large mixing bowl, cream together the <strong>unsalted butter</strong>, <strong>sugar</strong>, and <strong>light brown sugar</strong> until light and fluffy, about 2-3 minutes with an electric mixer.
        </li>
        <li>
          <strong>Add the Peanut Butter:</strong> Mix in the <strong>creamy peanut butter</strong> until smooth, about 1 minute.
        </li>
        <li>
          <strong>Add the Dry Ingredients:</strong> In a separate bowl, whisk together the <strong>bread flour</strong>, <strong>rye flour</strong>, <strong>peanut butter powder</strong>, and <strong>salt</strong>. Gradually add the flour mixture to the butter-sugar mixture, mixing until just combined.
        </li>
        <li>
          <strong>Rest the Dough:</strong> Wrap the dough in plastic wrap and refrigerate for at least 30 minutes.
        </li>
        <li>
          <strong>Flatten the Dough:</strong> Line a sheet pan with parchment paper. Place the dough on the parchment, then cover it with another sheet of parchment paper. Use a second sheet pan to press down and flatten the dough evenly. Refrigerate the flattened dough to firm up.
        </li>
        <li>
          <strong>Add the Nutella Swirl:</strong> Remove the dough from the refrigerator and discard the top layer of parchment paper. Spread the <strong>Nutella</strong> evenly across the surface of the dough using a spatula.
        </li>
        <li>
          <strong>Roll and Chill:</strong> Roll the layered dough into a tight log using the parchment paper to help. Wrap the log in plastic wrap and refrigerate for at least 2 hours, or until firm.
        </li>
        <li>
          <strong>Slice and Bake:</strong> Preheat your oven to 400°F (180°C). Line a baking sheet with parchment paper. Remove the dough log from the refrigerator and slice it into 1/2-inch (1.25 cm) thick rounds. Place the slices on the prepared baking sheet, leaving about 1 inch (2.5 cm) of space between each.
        </li>
        <li>
          <strong>Bake:</strong> Bake for 16-18 minutes, or until the edges are golden. Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely.
        </li>
      </ol>

      <Link to="/cooking">Back to Cooking</Link>
    </div>
  );
}

export default PeanutButterShortbread;
