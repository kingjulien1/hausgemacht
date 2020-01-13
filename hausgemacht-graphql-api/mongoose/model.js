const { Schema, model } = require("mongoose");

const Ingredient = new Schema({
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  title: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true,
    enum: ["grams", "litres", "teaspoon", "tablespoon", "piece"]
  },
  _recipeId: {
    type: Schema.Types.ObjectId,
    required: true
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
  photoURL: String
});

module.exports.Recipe = model("recipe", Recipe);
module.exports.Ingredient = model("ingredient", Ingredient);
