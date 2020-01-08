const { Recipe, Ingredient } = require("../mongoose/model");

module.exports.createRecipe = async ({
  title,
  description,
  diet,
  duration
}) => {
  let recipe = new Recipe({ title, description, diet, duration });
  let result = await recipe.save();
  return result;
};

module.exports.createIngredient = async ({ recipeId, title, unit, amount }) => {
  let recipe = await Recipe.findOne(recipeId);
  let ingredient = new Ingredient({ title, unit, amount });
  recipe.ingredients.push(ingredient);
};
