const { Recipe, Ingredient } = require("../mongoose/model");
const { Types } = require("mongoose");

const resolvers = {
  Query: {
    recipes() {
      return Recipe.aggregate([
        {
          $lookup: {
            from: "ingredients",
            localField: "_id",
            foreignField: "_recipeId",
            as: "ingredients"
          }
        }
      ]).exec();
    },
    recipe(_, { _id }) {
      return Recipe.aggregate([
        {
          $lookup: {
            from: "ingredients",
            localField: "_id",
            foreignField: "_recipeId",
            as: "ingredients"
          }
        },
        { $match: { _id: Types.ObjectId(_id) } }
      ]).exec();
    }
  },
  Mutation: {
    createRecipe(_, { title, description, diet, duration }) {
      let recipe = new Recipe({ title, description, diet, duration });
      return recipe.save();
    },
    addIngredient(_, { _recipeId, title, unit, amount }) {
      let ingredient = new Ingredient({ _recipeId, title, unit, amount });
      return ingredient.save();
    }
  }
};

module.exports = resolvers;
