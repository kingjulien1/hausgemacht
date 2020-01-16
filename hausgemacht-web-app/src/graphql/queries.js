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
