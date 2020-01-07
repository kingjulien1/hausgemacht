const { RecipeSchema, IngredientSchema } = require("./schema");
const { model } = require("mongoose");

module.exports.Recipe = model("Recipe", RecipeSchema);
module.exports.Ingredient = model("Ingredient", IngredientSchema);
