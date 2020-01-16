import React from "react";
import { Table } from "antd";

const limitStr = (str, limit) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

const sortStr = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export default ({ ingredients }) => {
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
      title: "Einheit",
      dataIndex: "unit",
      filters: [
        {
          text: "Gramm",
          value: "grams"
        },
        {
          text: "Liter",
          value: "litres"
        },
        {
          text: "Teelöffel",
          value: "teaspoon"
        },
        {
          text: "Esslöffel",
          value: "tablespoon"
        },
        {
          text: "Stück",
          value: "piece"
        }
      ],
      filterMultiple: true,
      onFilter: (value, record) => record.diet.indexOf(value) === 0,
      sorter: (a, b) => sortStr(a.unit, b.unit),
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "Menge",
      dataIndex: "amount"
    }
  ];

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={ingredients}
      onRow={({ _id }) => ({
        onClick: e => console.log(_id)
      })}
    ></Table>
  );
};
