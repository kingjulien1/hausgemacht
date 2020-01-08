const { RecipeSchema, IngredientSchema } = require("./schema");
const { model } = require("mongoose");

module.exports.Recipe = model("recipe", RecipeSchema);
module.exports.Recipe = model("ingredient", IngredientSchema);
