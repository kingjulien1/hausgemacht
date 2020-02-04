import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPLOAD_PHOTO } from "../../graphql/mutations";
import { RECIPE } from "../../graphql/queries";

export default ({ _recipeId, setUrl }) => {
  const [upload] = useMutation(UPLOAD_PHOTO);
  const onChange = ({
    target: {
      files: [file]
    }
  }) => {
    upload({
      variables: { _recipeId, photo: file },
      update: (cache, { data: { uploadPhoto } }) => {
        setUrl(uploadPhoto);
        let {
          recipe: [first]
        } = cache.readQuery({
          query: RECIPE,
          variables: { _id: _recipeId }
        });
        cache.writeQuery({
          query: RECIPE,
          variables: { _id: _recipeId },
          data: {
            recipe: [
              {
                ...first,
                photoURL: uploadPhoto
              }
            ]
          }
        });
      }
    });
  };

  return <input type="file" onChange={onChange} required></input>;
};
