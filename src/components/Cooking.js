import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const recipesData = [
  { id: 1, made: true, keeper: true, type: 'Main', name: 'Detroit Pizza', source: 'Kitchn', link: 'https://www.thekitchn.com/detroit-pizza-recipe-23281165' }, // External link
  { id: 2, made: false, keeper: false, type: 'Bread', name: 'Burger Buns', source: 'Joshua Weissman' },
  { id: 3, made: true, keeper: true, type: 'Main', name: 'Chicken Rice', source: 'Richard Espy', link: '/recipes/chickenrice' }, // Internal link
  { id: 4, made: true, keeper: true, type: 'Main', name: 'Butter Chicken', source: 'ChatGPT', link: '/recipes/butterchicken' },
  { id: 5, made: true, keeper: true, type: 'Main', name: 'Peanut Butter and Nutella Shortbread Cookies', source: 'ChatGPT', link: '/recipes/peanutbuttershortbread' }, // Internal link
  // Your recipe data here...
];

function Cooking() {
  const [recipes] = useState(recipesData);
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
      <p>I really enjoy cooking. Here are some of the recipes I like and make repeatedly, some things I plan on trying, and some recipes I'm develpoing myself.</p>
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
              <td>
                {recipe.link?.startsWith('http') ? (
                  <a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a>
                ) : (
                  <Link to={recipe.link}>{recipe.name}</Link>
                )}
              </td>
              <td>{recipe.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Cooking;
