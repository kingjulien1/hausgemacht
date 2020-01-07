const { createRecipe } = require("../logic/mutations");
const { getRecipes } = require("../logic/queries");

const resolvers = {
  Query: {
    recipes() {
      return getRecipes();
    }
  },
  Mutation: {
    createRecipe(_, { title, description, diet, duration }) {
      return createRecipe({ title, description, diet, duration });
    }
  }
};

module.exports = resolvers;
