import { sorter, limiter } from "../functions";

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

export default [title, amount];
