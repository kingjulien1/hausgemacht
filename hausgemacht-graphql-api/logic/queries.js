const { Recipe, Ingredient } = require("../mongoose/model");

module.exports.getRecipes = async () => {
  return await Recipe.find({});
};
