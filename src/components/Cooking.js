import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    name: 'Brown Butter Coffee Toffee Ice Cream',
    image: '/images/bbctic.jpg',
    rating: '⭐⭐⭐⭐⭐',
    link: '/components/recipes/BrownButterCoffeeToffeeIceCream',
    wouldMakeAgain: true,
  },
  {
    id: 2,
    name: 'Butter Chicken',
    image: '/assets/butterchicken.jpeg',
    rating: '⭐⭐⭐⭐',
    link: '/recipes/butterchicken',
    wouldMakeAgain: false,
  },
  // Add more recipes here...
];

function Cooking() {
  return (
    <section id="cooking" className="section">
      <h2>Cooking</h2>
      <p>Here are the things I'm making, the things I have made, and recipes I have on repeat.</p>
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Dish Name</th>
            <th>Rating</th>
            <th>Would Make Again</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td><img src={recipe.image} alt={recipe.name} /></td>
              <td>{recipe.name}</td>
              <td>{recipe.rating}</td>
              <td>
                <input
                  type="checkbox"
                  checked={recipe.wouldMakeAgain}
                  readOnly
                />
              </td>
              <td><Link to={recipe.link}>View Recipe</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Cooking;
