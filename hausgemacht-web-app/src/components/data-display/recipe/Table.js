import React from "react";
import { Table } from "antd";

const limitStr = (str, limit) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

const sortStr = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export default ({ recipes }) => {
  const columns = [
    {
      title: "Titel",
      dataIndex: "title",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => sortStr(a.title, b.title),
      render: title => ({ children: limitStr(title, 15) }),
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "Beschreibung",
      dataIndex: "description",
      render: description => ({ children: limitStr(description, 20) })
    },
    {
      title: "Erstellt",
      dataIndex: "created",
      sorter: (a, b) => new Date(a.created) > new Date(b.created),
      render: created => ({ children: new Date(created).toDateString() })
    },
    {
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
      sorter: (a, b) => sortStr(a.diet, b.diet),
      sortDirections: ["descend", "ascend"]
    }
  ];

  return <Table rowKey="_id" columns={columns} dataSource={recipes}></Table>;
};
