import gql from "graphql-tag";

export const CREATE_RECIPE = gql`
  mutation(
    $title: String!
    $description: String!
    $diet: String!
    $duration: Int!
  ) {
    createRecipe(
      title: $title
      description: $description
      diet: $diet
      duration: $duration
    ) {
      _id
      title
      description
      diet
      duration
      created
      photoURL
    }
  }
`;

export const ADD_INGREDIENT = gql`
  mutation($_recipeId: ID!, $title: String!, $unit: Unit!, $amount: Float!) {
    addIngredient(
      _recipeId: $_recipeId
      title: $title
      unit: $unit
      amount: $amount
    ) {
      _id
      title
      unit
      amount
    }
  }
`;

export const DELETE_INGREDIENT = gql`
  mutation($_id: ID!, $_recipeId: ID!) {
    deleteIngredient(_id: $_id, _recipeId: $_recipeId) {
      deletedCount
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation($_id: ID!) {
    deleteRecipe(_id: $_id) {
      deletedCount
    }
  }
`;
