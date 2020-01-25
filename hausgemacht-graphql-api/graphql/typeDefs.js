const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date
  scalar Upload

  type Query {
    recipes: [Recipe]!
    recipe(_id: ID!): [Recipe]!
    ingredients: [Element]!
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
      amount: Float!
    ): Ingredient
    uploadPhoto(_recipeId: ID!, photo: Upload!): Photo
  }

  type Recipe {
    _id: ID!
    title: String!
    description: String!
    type: String
    duration: Int!
    diet: Diet!
    created: Date!
    photoURL: String
    ingredients: [Ingredient]!
  }

  type Ingredient {
    _id: ID!
    amount: Float!
    title: String!
    unit: Unit!
  }

  type Element {
    title: String!
    unit: Unit!
  }

  type Photo {
    filename: String!
    encoding: String!
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
    flexeterian
  }
`;
module.exports = typeDefs;
