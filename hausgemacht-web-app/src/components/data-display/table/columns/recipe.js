import { Link } from "react-router-dom";
import React from "react";

import { sorter, limiter } from "../functions";

const title = {
  title: "Titel",
  dataIndex: "title",
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.title, b.title),
  render: title => ({ children: limiter(title, 15) }),
  sortDirections: ["descend", "ascend"]
};

const actions = {
  title: "Links",
  render: recipe => ({
    children: <Link to={`/ingredients/${recipe._id}`}>Zutaten</Link>
  })
};

const diet = {
  title: "Typ",
  dataIndex: "diet",
  filters: [
    {
      text: "Flexetarisch",
      value: "flexeterian"
    },
    {
      text: "Pescetarisch",
      value: "pesceterian"
    },
    {
      text: "Vegetarisch",
      value: "vegeterian"
    },
    {
      text: "Vegan",
      value: "vegan"
    }
  ],
  filterMultiple: true,
  onFilter: (value, record) => record.diet.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.diet, b.diet),
  sortDirections: ["descend", "ascend"]
};

export default [title, diet, actions];
