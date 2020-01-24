import gql from "graphql-tag";

export const CREATE_RECIPE = gql`
  mutation(
    $title: String!
    $description: String!
    $diet: Diet!
    $duration: Int!
  ) {
    createRecipe(
      title: $title
      description: $description
      diet: $diet
      duration: $duration
    ) {
      _id
    }
  }
`;
