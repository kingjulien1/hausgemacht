import React, { useState } from "react";
import {
  Layout,
  PageHeader,
  Tag,
  Descriptions,
  Divider,
  Popconfirm,
  Icon,
  Button
} from "antd";
import { useQuery } from "@apollo/react-hooks";
import { RECIPE } from "../graphql/queries";
import { useParams, useHistory, Link } from "react-router-dom";
import Photo from "../components/data-display/Photo";
import { RecipeList } from "../components/data-display/list";

export default () => {
  const [
    { title, description, diet, duration, created, photoURL, ingredients },
    setRecipe
  ] = useState({});
  const { _recipeId } = useParams();
  const { goBack } = useHistory();
  const { loading, error } = useQuery(RECIPE, {
    variables: { _id: _recipeId },
    onCompleted: data => setRecipe(data.recipe[0])
  });
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
        <Photo photoURL={photoURL}></Photo>

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
