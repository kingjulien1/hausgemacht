import gql from "graphql-tag";

export const ALL_RECIPES = gql`
  query {
    recipes {
      _id
      title
      description
      diet
      created
      photoURL
    }
  }
`;

export const ALL_INGREDIENTS = gql`
  query {
    ingredients {
      title
      unit
    }
  }
`;

export const RECIPE = gql`
  query($_id: ID!) {
    recipe(_id: $_id) {
      title
      description
      diet
      duration
      created
      photoURL
      ingredients {
        _id
        title
        unit
        amount
      }
    }
  }
`;
