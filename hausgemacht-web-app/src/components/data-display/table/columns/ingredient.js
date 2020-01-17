import { sorter, limiter } from "../functions";

const title = {
  title: "Titel",
  dataIndex: "title",
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => sorter(a.title, b.title),
  render: title => ({ children: limiter(title, 15) }),
  sortDirections: ["descend", "ascend"]
};

const description = {
  title: "Beschreibung",
  dataIndex: "description",
  render: description => ({ children: limiter(description, 20) })
};

const created = {
  title: "Erstellt",
  dataIndex: "created",
  sorter: (a, b) => new Date(a.created) > new Date(b.created),
  render: created => ({
    children: new Date(created).toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
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

export default [title, description, created, diet];
