const { Schema } = require("mongoose");

const Ingredient = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  unit: {
    type: String,
    required: true,
    enum: ["grams", "litres", "teaspoon", "tablespoon", "piece"]
  }
});

const Recipe = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  diet: {
    type: String,
    required: true,
    enum: ["vegan", "vegeterian", "pesceterian", "flexeterian"]
  },
  duration: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  photoURL: String,
  ingredients: [Ingredient]
});

module.exports.RecipeSchema = Recipe;
module.exports.IngredientSchema = Ingredient;
