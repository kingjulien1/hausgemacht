import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "antd";
import { DELETE_INGREDIENT } from "../../../../graphql/mutations";

export const IngredientActions = ({ _id, _recipeId }) => {
  const [deleteIngredient] = useMutation(DELETE_INGREDIENT);
  return (
    <Button
      type="link"
      onClick={async () => {
        await deleteIngredient({ variables: { _id, _recipeId } });
      }}
    >
      Löschen
    </Button>
  );
};
