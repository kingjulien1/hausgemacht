import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button, notification } from "antd";
import { DELETE_INGREDIENT } from "../../../../graphql/mutations";
import { useParams, useHistory } from "react-router-dom";

export const IngredientActions = ({ _id }) => {
  const [deleteIngredient] = useMutation(DELETE_INGREDIENT);
  const { go } = useHistory();
  const { _recipeId } = useParams();
  return (
    <Button
      type="link"
      onClick={async () => {
        try {
          await deleteIngredient({ variables: { _id, _recipeId } });
          go(0);
        } catch (error) {
          notification.error(error);
        }
      }}
    >
      Löschen
    </Button>
  );
};
