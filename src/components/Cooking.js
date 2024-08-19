import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: '/images/carbonara.jpg',
    rating: '⭐⭐⭐⭐⭐',
    link: '/recipes/carbonara',
  },
  {
    id: 2,
    name: 'Chicken Tikka Masala',
    image: '/images/tikka-masala.jpg',
    rating: '⭐⭐⭐⭐',
    link: '/recipes/tikka-masala',
  },
  // Add more recipes here...
];

function Cooking() {
  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>Here are the things I'm making, the things I have made, and recipes on repeat.</p>
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Dish Name</th>
            <th>Rating</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td><img src={recipe.image} alt={recipe.name} /></td>
              <td>{recipe.name}</td>
              <td>{recipe.rating}</td>
              <td><Link to={recipe.link}>View Recipe</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Cooking;
