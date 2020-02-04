const { Recipe, Ingredient } = require("../mongoose/model");
const { Types } = require("mongoose");
const { createWriteStream } = require("fs");
const { join, extname } = require("path");

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
    },
    ingredients() {
      return Ingredient.aggregate([
        {
          $group: { _id: { title: "$title", unit: "$unit" } }
        },
        {
          $project: { title: "$_id.title", unit: "$_id.unit" }
        }
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
    },
    async deleteRecipe(_, { _id }) {
      await Ingredient.deleteMany({ _recipeId: _id });
      return Recipe.deleteOne({ _id }).exec();
    },
    deleteIngredient(_, { _id, _recipeId }) {
      return Ingredient.deleteOne({ _id, _recipeId }).exec();
    },
    uploadPhoto: async (_, { _recipeId, photo }) => {
      const { createReadStream, filename } = await photo;
      //upload
      const photoURL = join(
        __dirname,
        "../../hausgemacht-web-app/public/images/",
        filename
      );
      await new Promise(res =>
        createReadStream().pipe(createWriteStream(photoURL).on("close", res))
      );
      return photoURL;
    }
  }
};

module.exports = resolvers;
