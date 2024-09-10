import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Use Webpack's require.context to dynamically load all recipes
const requireRecipe = require.context('./recipes', true, /^\.\/(?!RecipeTemplate).*\.js$/);

// Create an array to store all recipe metadata
const recipesData = requireRecipe.keys().map((fileName) => {
  const recipeModule = requireRecipe(fileName);
  return recipeModule.recipeMetadata;
});

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
      <p>I really enjoy cooking. Here are some of the recipes I like and make repeatedly, some things I plan on trying, and some recipes I'm developing myself.</p>
      <table className="scrollable-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('made')}>Made?</th>
            <th onClick={() => requestSort('keeper')}>Make Again?</th>
            <th onClick={() => requestSort('type')}>Type</th>
            <th onClick={() => requestSort('name')}>Name</th>
            <th onClick={() => requestSort('source')}>Source</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecipes.map((recipe) => (
            <tr key={recipe.name}>
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
