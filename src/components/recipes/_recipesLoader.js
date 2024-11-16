// recipesLoader.js
const requireRecipe = require.context('./', true, /^\.\/(?!_)[a-zA-Z]+\.js$/);

const recipesMap = (() => {
  const map = {};
  requireRecipe.keys().forEach((fileName) => {
    if (fileName.includes('_RecipeTemplate')) return; // Skip self
    const recipeModule = requireRecipe(fileName);
    if (recipeModule.recipeMetadata) {
      const id = fileName.replace('./', '').replace('.js', '').toLowerCase();
      map[id] = {
        metadata: recipeModule.recipeMetadata,
        ingredients: recipeModule.ingredients || [],
        instructions: recipeModule.instructions || [],
        equipment: recipeModule.equipment || [],
      };
    }
  });
  return map;
})();

export default recipesMap;
