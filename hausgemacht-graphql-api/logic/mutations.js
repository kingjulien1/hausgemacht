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
