const date = new Date();

const data = [
  {
    id: 1,
    taskName: "Faire les courses",
    taskDate: date.toDateString(),
    taskCompleted: false,
  },
  {
    id: 2,
    taskName: "Faire le ménage",
    taskDate: date.toDateString(),
    taskCompleted: false,
  },
  {
    id: 3,
    taskName: "Ranger la chambre",
    taskDate: date.toDateString(),
    taskCompleted: false,
  },
  {
    id: 4,
    taskName: "Laver la voiture",
    taskDate: date.toDateString(),
    taskCompleted: false,
  },
];

export default data;
