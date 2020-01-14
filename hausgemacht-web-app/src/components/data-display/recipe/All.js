import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Spin, Result, Empty } from "antd";

import { Cards } from "./Card";

const query = gql`
  query {
    recipes {
      _id
      title
      description
      created
      photoURL
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <Spin></Spin>;
  if (error)
    return (
      <Result
        status="error"
        title="Upps"
        description="Rezepte konnten nicht geladen werden..."
      ></Result>
    );
  if (data && data.length < 1) return <Empty></Empty>;
  return <Cards recipes={data.recipes}></Cards>;
};
