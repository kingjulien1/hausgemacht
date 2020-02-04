import React from "react";
import { Empty } from "antd";
import { useMutation } from "@apollo/react-hooks";

import { UPLOAD_PHOTO } from "../../graphql/mutations";
import { RECIPE } from "../../graphql/queries";

export default ({ _recipeId, photoURL }) => {
  const [upload] = useMutation(UPLOAD_PHOTO);
  const onChange = ({
    target: {
      files: [file]
    }
  }) =>
    upload({
      variables: { _recipeId, photo: file },
      update: (cache, { data: { uploadPhoto } }) => {
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

  return photoURL ? (
    <img
      src={`${process.env.PUBLIC_URL}/images/${photoURL}`}
      alt={`unter dieser Url leider kein Bild gefunden`}
      style={{ width: "100%", height: "20rem", objectFit: "cover" }}
    ></img>
  ) : (
    <Empty description="noch kein Bild hochgeladen.">
      <input type="file" onChange={onChange} required></input>;{" "}
    </Empty>
  );
};
