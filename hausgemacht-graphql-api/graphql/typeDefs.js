const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    recipes: [Recipe]!
    recipe(_id: ID!): [Recipe]!
  }

  type Mutation {
    createRecipe(
      title: String!
      description: String!
      diet: String!
      duration: Int!
    ): Recipe
    addIngredient(
      _recipeId: ID!
      title: String!
      unit: Unit!
      amount: Int!
    ): Ingredient
  }

  type Recipe {
    _id: ID!
    title: String!
    description: String!
    type: String!
    duration: Int!
    diet: Diet!
    created: String!
    photoURL: String
    ingredients: [Ingredient]!
  }

  type Ingredient {
    _id: ID!
    title: String!
    unit: Unit!
    amount: Float!
  }

  enum Unit {
    grams
    litres
    teaspoon
    tablespoon
    piece
  }

  enum Diet {
    vegan
    vegeterian
    pesceterian
    flexitarian
  }
`;
module.exports = typeDefs;
