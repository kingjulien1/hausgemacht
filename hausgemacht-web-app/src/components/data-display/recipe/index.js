import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Spin, Result, Empty } from "antd";

import Table from "./Table";

const query = gql`
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

export default () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <Spin></Spin>;
  if (error)
    return (
      <Result
        status="error"
        title="Upps"
        subTitle={`Rezept konnte nicht geladen werden: ${error}`}
      ></Result>
    );
  if (data && data.length < 1) return <Empty></Empty>;
  return <Table recipes={data.recipes}></Table>;
};
