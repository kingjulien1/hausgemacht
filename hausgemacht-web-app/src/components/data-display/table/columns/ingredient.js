import React from "react";
import { sorter, limiter } from "../functions";
import { IngredientActions } from "./actions";

const title = {
  title: "Titel",
  dataIndex: "title",
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.title, b.title),
  render: title => ({ children: limiter(title, 15) }),
  sortDirections: ["descend", "ascend"]
};

const amount = {
  title: "Menge",
  render: ({ amount, unit }) => `${amount} ${unit}`
};

const actions = {
  title: "Links",
  render: ({ _id }) => ({
    children: <IngredientActions _id={_id}></IngredientActions>
  })
};

export default [title, amount, actions];
