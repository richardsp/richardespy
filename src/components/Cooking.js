import React from 'react';

const recipes = [
  { id: 1, made: false, keeper: false, type: 'Dessert', name: 'Gooey Butter Cake', source: 'Taste of Home' },
  { id: 2, made: false, keeper: false, type: 'Dessert', name: 'Basque Cheesecake', source: 'Kitchn' },
  { id: 3, made: false, keeper: false, type: 'Dessert', name: 'Lemon Pound Cake', source: 'Bon Appetit' },
  { id: 4, made: true, keeper: true, type: 'Main', name: 'Mushroom Bacon Risotto', source: 'Tasty' },
  { id: 5, made: false, keeper: false, type: 'Main', name: 'Lentil Soup', source: 'Cookie And Kate' },
  { id: 6, made: false, keeper: false, type: 'Dessert', name: 'Choux au Craquelin', source: 'Serious Eats' },
  { id: 7, made: false, keeper: false, type: 'Main', name: 'Chicken Fried Steak', source: 'Food Network' },
  { id: 8, made: true, keeper: true, type: 'Dessert', name: 'Butter Pecan Pound Cake', source: 'Kitchn' },
  { id: 9, made: false, keeper: false, type: 'Main', name: 'Pan-Roasted Salmon', source: 'Food & Wine' },
  { id: 10, made: false, keeper: false, type: 'Main', name: 'Garlic Shrimp with Chorizo', source: 'Food Network' },
  { id: 11, made: false, keeper: false, type: 'Main', name: 'Pozole Verde', source: 'Serious Eats' },
  { id: 12, made: false, keeper: false, type: 'Side', name: 'Potato Casserole', source: 'Kitchn' },
  { id: 13, made: false, keeper: false, type: 'Bread', name: 'Baguette', source: 'Brian Lagerstrom' },
  { id: 14, made: true, keeper: true, type: 'Main', name: 'Detroit Pizza', source: 'Kitchn' },
  { id: 15, made: false, keeper: false, type: 'Bread', name: 'Sandwich Bread', source: 'King Arthur' },
  { id: 16, made: false, keeper: false, type: 'Dessert', name: 'Finsk Brod', source: 'Fab Food 4 All' },
  { id: 17, made: false, keeper: false, type: 'Main', name: 'Shrimp & Grits', source: 'Food & Wine' },
  { id: 18, made: false, keeper: false, type: 'Main', name: 'Korean Spareribs', source: 'Food & Wine' },
  { id: 19, made: false, keeper: false, type: 'Bread', name: 'Burger Buns', source: 'Joshua Weissman' },
  { id: 20, made: false, keeper: false, type: 'Main', name: 'Enchiladas', source: 'Joshua Weissman' },
  // Add more recipes here...
];

function Cooking() {
  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>Here are the things I'm making, the things I have made, and recipes I have on repeat.</p>
      <table className="scrollable-table">
        <thead>
          <tr>
            <th>Made?</th>
            <th>Keeper?</th>
            <th>Type</th>
            <th>Name</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td><input type="checkbox" checked={recipe.made} readOnly /></td>
              <td><input type="checkbox" checked={recipe.keeper} readOnly /></td>
              <td>{recipe.type}</td>
              <td>{recipe.name}</td>
              <td>{recipe.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Cooking;

