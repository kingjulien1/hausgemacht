import React, { useState } from "react";
import {
  Layout,
  PageHeader,
  Tag,
  Descriptions,
  Divider,
  Popconfirm,
  Icon,
  Button,
  notification
} from "antd";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useParams, useHistory } from "react-router-dom";

import Photo from "../components/data-display/Photo";
import { RecipeList } from "../components/data-display/list";
import { RECIPE, ALL_RECIPES } from "../graphql/queries";
import { DELETE_RECIPE } from "../graphql/mutations";

export default () => {
  const [
    { title, description, diet, duration, created, photoURL, ingredients },
    setRecipe
  ] = useState({});
  const { _recipeId } = useParams();
  const { goBack, push } = useHistory();
  const [deleteRecipe] = useMutation(DELETE_RECIPE, {
    onCompleted: () => push("/recipes"),
    onError: notification.error
  });
  useQuery(RECIPE, {
    variables: { _id: _recipeId },
    onCompleted: data => setRecipe(data.recipe[0]),
    onError: err => notification.error(err)
  });

  const confirmDelete = () => {
    deleteRecipe({
      variables: { _id: _recipeId },
      update: cache => {
        let { recipes } = cache.readQuery({
          query: ALL_RECIPES
        });
        //update cache
        cache.writeQuery({
          query: ALL_RECIPES,
          data: {
            recipes: recipes.filter(recipe => recipe._id !== _recipeId)
          }
        });
      }
    });
  };

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Layout.Content>
        <PageHeader
          title={title}
          subTitle={ingredients && `${ingredients.length} Zutaten`}
          tags={<Tag>{diet}</Tag>}
          onBack={goBack}
          extra={[
            <Popconfirm
              key="1"
              title={`${title} Löschen?`}
              icon={<Icon type="delete" />}
              placement="bottomRight"
              onConfirm={confirmDelete}
            >
              <Button>Löschen</Button>
            </Popconfirm>
          ]}
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="erstellt">
              {new Date(created).toLocaleDateString()}
            </Descriptions.Item>
            <Descriptions.Item label="dauer">
              {duration} Minuten
            </Descriptions.Item>
          </Descriptions>
          {description}
        </PageHeader>
        <Photo photoURL={photoURL} _recipeId={_recipeId}></Photo>

        <Divider></Divider>
        <h3 style={{ textAlign: "center", marginTop: 40 }}>Zutaten</h3>
        <RecipeList
          ingredients={ingredients}
          _recipeId={_recipeId}
        ></RecipeList>
      </Layout.Content>
    </Layout>
  );
};
