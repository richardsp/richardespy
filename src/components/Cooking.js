import React, { useState } from 'react';

const recipesData = [
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
  // Your recipe data here...
];

function Cooking() {
  const [recipes] = useState(recipesData); // Removed 'setRecipes'
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedRecipes = React.useMemo(() => {
    let sortableRecipes = [...recipes];
    if (sortConfig !== null) {
      sortableRecipes.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableRecipes;
  }, [recipes, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>Here are the things I'm making, the things I have made, and recipes I have on repeat.</p>
      <table className="scrollable-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('made')}>Made?</th>
            <th onClick={() => requestSort('keeper')}>Keeper?</th>
            <th onClick={() => requestSort('type')}>Type</th>
            <th onClick={() => requestSort('name')}>Name</th>
            <th onClick={() => requestSort('source')}>Source</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecipes.map((recipe) => (
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
