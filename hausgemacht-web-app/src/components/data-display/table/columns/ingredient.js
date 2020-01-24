import { sorter, limiter } from "../functions";

const title = {
  title: "Titel",
  dataIndex: "title",
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.title, b.title),
  render: title => ({ children: limiter(title, 15) }),
  sortDirections: ["descend", "ascend"]
};

const unit = {
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
      text: "tablespoon",
      value: "Esslöffel"
    },
    {
      text: "Stück",
      value: "piece"
    }
  ],
  filterMultiple: true,
  onFilter: (value, record) => record.unit.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.unit, b.uni),
  sortDirections: ["descend", "ascend"]
};

const amount = {
  title: "Menge",
  dataIndex: "amount"
};

export default [title, amount, unit];
