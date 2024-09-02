import React from 'react';
import { Link } from 'react-router-dom';

function ChickenRice() {
  return (
    <div className="recipe-page">
      <h2>Chicken Rice</h2>
      <p>This is one of my go to weekday dinners. It's especially nice because there are very few dishes to clean up after. Get a jar of garlic chili crisp or a bottle of siracha for serving!</p>

      <h3>Ingredients</h3>
      <ul>
        <li><strong>1 Costco rotisserie chicken</strong> (approximately 3 lbs)</li>
        <li><strong>5 cups basmati rice</strong>, rinsed</li>
        <li><strong>6 cups chicken stock</strong></li>
        <li><strong>1/2 onion</strong>, finely chopped</li>
        <li><strong>2 carrots</strong>, cubed</li>
        <li><strong>5 cloves garlic</strong>, minced</li>
        <li><strong>1 tsp turmeric</strong></li>
        <li><strong>1 tsp smoked paprika</strong></li>
        <li><strong>1 tsp ground cumin</strong> (optional, for added depth)</li>
        <li><strong>1/2 tsp ground coriander</strong> (optional)</li>
        <li><strong>1 bay leaf</strong></li>
        <li>Salt and pepper to taste</li>
        <li><strong>1 cup frozen peas</strong> (optional)</li>
        <li><strong>3 green onions</strong>, thinly sliced for garnish</li>
      </ul>

      <h3>Instructions</h3>
      <ol>
        <li>Debone the <strong>rotisserie chicken</strong> and cut the meat into small cubes. Set aside.</li>
        <li>Rinse the <strong>basmati rice</strong> and transfer it to your rice cooker.</li>
        <li>Sauté the <strong>onion, carrots,</strong> and <strong>garlic</strong> in a pan for extra flavor.</li>
        <li>Add sautéed vegetables to the rice cooker with <strong>turmeric, paprika, cumin, coriander,</strong> and <strong>bay leaf</strong>. Add <strong>chicken stock</strong>, and stir.</li>
        <li>Top with <strong>chicken</strong> and cook in the rice cooker.</li>
        <li>After cooking, fluff the rice and mix in <strong>peas</strong> if desired. Garnish with <strong>green onions</strong>.</li>
      </ol>
      <Link to="/cooking">Back to Cooking</Link>
    </div>
  );
}

export default ChickenRice;
